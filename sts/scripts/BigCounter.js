/**
 * Big counter factory (normal DOM element, not a webcomponent)
 * Requires these to already exist (from your previous script):
 *   setLocalStorageState, getLocalStorageState, onLocalStorageStateChange
 *
 * State in localStorage:
 *   { min, max, value }
 *
 * @param {string} name unique id / localStorage key suffix
 * @param {object} opts
 * @param {number} [opts.min=0]
 * @param {number} [opts.max=100]
 * @param {number} [opts.defaultValue=0]
 * @param {string} [opts.color] background color for the VALUE area only (e.g. "#1e293b")
 * @returns {HTMLElement} root element (with .destroy() method)
 */
function createBigCounter(name, opts = {}) {
  if (!name || !String(name).trim()) {
    throw new Error("createLsBigCounter(name): name is required");
  }

  const safeName = String(name).trim();
  const lsKey = `ls-bigcounter:${safeName}`;

  const min = Number.isFinite(opts.min) ? opts.min : 0;
  const max = Number.isFinite(opts.max) ? opts.max : 100;
  const defaultValue = Number.isFinite(opts.defaultValue) ? opts.defaultValue : 0;

  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  // Initialize LS state if missing
  const existing = getLocalStorageState(lsKey);
  if (!existing) {
    const a = Math.min(min, max);
    const b = Math.max(min, max);
    setLocalStorageState(lsKey, { min: a, max: b, value: clamp(defaultValue, a, b) });
  }

  // Unique ids for all parts
  const idRoot = `ls-bigcounter-${safeName}`;
  const idValue = `${idRoot}__value`;

  const btnIds = (delta) => `${idRoot}__btn_${delta > 0 ? "p" : "m"}${Math.abs(delta)}`;

  const root = document.createElement("div");
  root.className = "ls-bigcounter shadowed more";
  root.id = idRoot;
  root.dataset.name = safeName;

  // Optional: value background color only
  if (typeof opts.color === "string" && opts.color.trim()) {
    root.style.setProperty("--value-bg", opts.color.trim());
  }

  root.innerHTML = `
    <button type="button" class="ls-bigcounter__btn sts-font smallest" id="${btnIds(-10)}" data-delta="-10" aria-label="Minus 10">-10</button>
    <button type="button" class="ls-bigcounter__btn sts-font smallest" id="${btnIds(-5)}"  data-delta="-5"  aria-label="Minus 5">-5</button>
    <button type="button" class="ls-bigcounter__btn sts-font smallest" id="${btnIds(-1)}"  data-delta="-1"  aria-label="Minus 1">-1</button>

    <div class="ls-bigcounter__value" id="${idValue}" aria-live="polite">
      <span class="ls-bigcounter__number sts-font smaller">0</span>
    </div>

    <button type="button" class="ls-bigcounter__btn sts-font smallest" id="${btnIds(1)}"  data-delta="1"  aria-label="Plus 1">+1</button>
    <button type="button" class="ls-bigcounter__btn sts-font smallest" id="${btnIds(5)}"  data-delta="5"  aria-label="Plus 5">+5</button>
    <button type="button" class="ls-bigcounter__btn sts-font smallest" id="${btnIds(10)}" data-delta="10" aria-label="Plus 10">+10</button>
  `;

  const els = {
    number: root.querySelector(".ls-bigcounter__number"),
    buttons: [...root.querySelectorAll(".ls-bigcounter__btn")],
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

    // Disable buttons that would do nothing
    for (const btn of els.buttons) {
      const delta = Number(btn.dataset.delta);
      const next = clamp(sVal + delta, sMin, sMax);
      btn.disabled = next === sVal;
    }

    // handy for styling
    root.dataset.min = String(sMin);
    root.dataset.max = String(sMax);
    root.dataset.value = String(sVal);
  }

  function applyDelta(delta) {
    const s = readState();
    if (!s) return;

    const sMin = Number(s.min);
    const sMax = Number(s.max);
    const sVal = Number(s.value);

    const nextVal = clamp(sVal + delta, sMin, sMax);
    if (nextVal === sVal) return;

    writeState({ min: sMin, max: sMax, value: nextVal });
  }

  // Click listeners (event delegation)
  function onClick(e) {
    const btn = e.target.closest(".ls-bigcounter__btn");
    if (!btn || !root.contains(btn)) return;
    const delta = Number(btn.dataset.delta);
    if (!Number.isFinite(delta)) return;
    applyDelta(delta);
  }

  root.addEventListener("click", onClick);

  // React to LS changes (same tab + other tabs)
  const unsubscribe = onLocalStorageStateChange(lsKey, () => render());

  // Initial render
  render();

  root.destroy = () => {
    unsubscribe();
    root.removeEventListener("click", onClick);
  };

  return root;
}
