const LOCAL_STATE_EVENT = "__localStorageStateChange__";

function serialize(value) {
  return JSON.stringify(value);
}

function deserialize(value) {
  return value == null ? null : JSON.parse(value);
}

function setLocalStorageState(stateId, obj) {
  const newValue = serialize(obj);
  const oldValue = localStorage.getItem(stateId);

  localStorage.setItem(stateId, newValue);

  // Notify same-tab listeners
  window.dispatchEvent(new CustomEvent(LOCAL_STATE_EVENT, {
    detail: {
      key: stateId,
      oldValue: deserialize(oldValue),
      newValue: obj
    }
  }));
}

function getLocalStorageState(stateId) {
  return deserialize(localStorage.getItem(stateId));
}

function onLocalStorageStateChange(stateId, callback) {
  // Cross-tab changes
  function onStorage(e) {
    if (e.key === stateId) {
      callback(
        deserialize(e.newValue),
        deserialize(e.oldValue)
      );
    }
  }

  // Same-tab changes
  function onLocal(e) {
    if (e.detail.key === stateId) {
      callback(e.detail.newValue, e.detail.oldValue);
    }
  }

  window.addEventListener("storage", onStorage);
  window.addEventListener(LOCAL_STATE_EVENT, onLocal);

  // Return unsubscribe function (important!)
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(LOCAL_STATE_EVENT, onLocal);
  };
}




class SeededRNG {
  constructor(seedStr) {
    this._seedGen = this._xmur3(String(seedStr));
    this._rand = this._mulberry32(this._seedGen());
  }

  // float in [0, 1)
  next() {
    return this._rand();
  }

  // int in [min, max] (inclusive)
  randomInt(min, max) {
    if (!Number.isFinite(min) || !Number.isFinite(max)) {
      throw new Error("min and max must be finite numbers");
    }
    if (max < min) [min, max] = [max, min];
    return Math.floor(this.next() * (max - min + 1)) + min;
  }

  randomOf(...args) {
    if (args.length == 0) {
        return null
    }
    const arr = args.length == 1 && Array.isArray(args[0])? args[0]: args
    return arr[this.randomInt(0, arr.length - 1)];
  }

  shuffle(array_a){
    var iRandomize;
    for(iRandomize = 0; iRandomize < array_a.length; iRandomize++){
        var randomizeArrayIndex = this.randomInt(0, array_a.length - 1);
        var auxRandomize = array_a[iRandomize];
        array_a[iRandomize] = array_a[randomizeArrayIndex];
        array_a[randomizeArrayIndex] = auxRandomize;
    }
    return array_a
  }

  // chancePercent: <=0 => false, >=100 => true
  percentChance(chancePercent) {
    if (!Number.isFinite(chancePercent)) {
      throw new Error("chancePercent must be a finite number");
    }
    if (chancePercent <= 0) return false;
    if (chancePercent >= 100) return true;

    return this.next() < chancePercent / 100;
  }

  randomOfArrayWeighted(items, _weights) {
    if (items.length == 1) {
        return items[0]
    }

    let i;
    let weights = [..._weights]

    for (i = 1; i < weights.length; i++)
        weights[i] += weights[i - 1];
    
    let random = this.next() * weights[weights.length - 1];
    
    for (i = 0; i < weights.length; i++)
        if (weights[i] > random)
            break;
    
    return items[i];
  }

  // ---- internals ----
  _xmur3(str) {
    let h = 1779033703 ^ str.length;
    for (let i = 0; i < str.length; i++) {
      h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
      h = (h << 13) | (h >>> 19);
    }
    return () => {
      h = Math.imul(h ^ (h >>> 16), 2246822507);
      h = Math.imul(h ^ (h >>> 13), 3266489909);
      h ^= h >>> 16;
      return h >>> 0;
    };
  }

  _mulberry32(seed) {
    return () => {
      let t = (seed += 0x6d2b79f5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
}

function generateUniqueId() {
    return (Date.now().toString(36) + Math.random().toString(36).substr(2)).substring(0, nChars);
}
function generateRoomCode() {
    const letters = 'qwertyuiopasdfghjklzxcvbnm'.split('')
    return randomOf(...letters) + randomOf(...letters) + randomOf(...letters)
}
function randomInt(low, high){
    return Math.floor(Math.random() * (high - low + 1) + low);
}
function randomOf(...args){
    if (args.length == 0) {
        return null
    }
    const arr = args.length == 1 && Array.isArray(args[0])? args[0]: args
    return arr[randomInt(0, arr.length - 1)];
}
function shuffle(array_a){
    var iRandomize;
    for(iRandomize = 0; iRandomize < array_a.length; iRandomize++){
        var randomizeArrayIndex = randomInt(0, array_a.length - 1);
        var auxRandomize = array_a[iRandomize];
        array_a[iRandomize] = array_a[randomizeArrayIndex];
        array_a[randomizeArrayIndex] = auxRandomize;
    }
    return array_a
}



function dom(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}