/**
 * Creates a counter DOM element backed by localStorage.
 *
 * State shape in localStorage:
 *   { min, max, value }
 *
 * @param {string} name Unique name used to key localStorage and generate ids
 * @param {object} opts
 * @param {number} [opts.min=0]
 * @param {number} [opts.max=100]
 * @param {number} [opts.defaultValue=0] used if storage empty
 * @param {number} [opts.step=1]
 * @returns {HTMLElement} root element (with .destroy() method)
 */


function createCounter(name, opts = {}) {
  if (!name || !String(name).trim()) {
    throw new Error("createLsCounter(name): name is required");
  }

  const safeName = String(name).trim();
  const lsKey = `ls-counter:${safeName}`;

  const min = Number.isFinite(opts.min) ? opts.min : 0;
  const max = Number.isFinite(opts.max) ? opts.max : 100;
  const defaultValue = Number.isFinite(opts.defaultValue) ? opts.defaultValue : 0;
  const step = Number.isFinite(opts.step) && opts.step > 0 ? opts.step : 1;
  const color = opts.color ?? '#111'
  const src = opts.src ?? null
  const iconSrc = opts.icon ?? null
  console.log({iconSrc})

  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  // Initialize LS state if missing
  const existing = getLocalStorageState(lsKey);
  if (!existing) {
    const initial = {
      min: Math.min(min, max),
      max: Math.max(min, max),
      value: clamp(defaultValue, Math.min(min, max), Math.max(min, max)),
    };
    setLocalStorageState(lsKey, initial);
  }

  // Unique ids for all parts
  const idRoot = `ls-counter-${safeName}`;
  const idMinus = `${idRoot}__minus`;
  const idValue = `${idRoot}__value`;
  const idPlus  = `${idRoot}__plus`;

  // Build DOM
  const root = document.createElement("div");
  root.className = "ls-counter sts-font " + (src != null? 'with-image': '');
  root.id = idRoot;
  root.dataset.name = safeName;
  root.innerHTML = `
    <button type="button" class="ls-counter__btn ls-counter__btn--minus" id="${idMinus}" aria-label="Decrease">−</button>
    <div class="ls-counter__value" id="${idValue}" aria-live="polite" style="${src? '': `background-color: ${color};`}">
      ${src == null? '': `<img class="background-img" src="${src}">`}
      <div class="ls-counter__number"><span class="number">0</span>${iconSrc? `<img class="text-icon" src="${iconSrc}">`: ''}</div>
    </div>
    <button type="button" class="ls-counter__btn ls-counter__btn--plus" id="${idPlus}" aria-label="Increase">+</button>
  `;

  const els = {
    minus: root.querySelector(`#${CSS.escape(idMinus)}`),
    plus: root.querySelector(`#${CSS.escape(idPlus)}`),
    number: root.querySelector(".number"),
  };

  function readState() {
    return getLocalStorageState(lsKey);
  }

  function writeState(next) {
    setLocalStorageState(lsKey, next);
  }

  function render() {
    const s = readState();
    if (!s) return;

    const sMin = Number(s.min);
    const sMax = Number(s.max);
    const sVal = Number(s.value);

    els.number.textContent = String(sVal);

    els.minus.disabled = sVal <= sMin;
    els.plus.disabled = sVal >= sMax;

    // Handy for styling
    root.dataset.min = String(sMin);
    root.dataset.max = String(sMax);
    root.dataset.value = String(sVal);
  }

  function bump(dir) {
    const s = readState();
    if (!s) return;

    const sMin = Number(s.min);
    const sMax = Number(s.max);
    const sVal = Number(s.value);

    const nextVal = clamp(sVal + dir * step, sMin, sMax);
    if (nextVal === sVal) return;

    writeState({ min: sMin, max: sMax, value: nextVal });
  }

  // Click listeners
  els.minus.addEventListener("click", () => bump(-1));
  els.plus.addEventListener("click", () => bump(+1));

  // React to LS changes (same tab + other tabs)
  const unsubscribe = onLocalStorageStateChange(lsKey, () => render());

  // Initial render
  render();

  // Provide a destroy method for cleanup
  root.destroy = () => {
    unsubscribe();
    // (Listeners are attached to elements; removing root from DOM will drop them.)
  };

  return root;
}