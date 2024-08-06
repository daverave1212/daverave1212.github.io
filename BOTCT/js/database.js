
const SETUP_GOOD = 'SETUP_GOOD'
const NIGHTLY_GOOD = 'NIGHTLY_GOOD'
const NORMAL = 'NORMAL'
const SETUP_EVIL = 'SETUP_EVIL'
const NIGHTLY_EVIL = 'NIGHTLY_EVIL'

const TOWNSFOLK = 'townsfolk'
const OUTSIDERS = 'outsiders'
const MINIONS = 'minions'
const DEMONS = 'demons'

const NO_PRIORITY = 99


const TheImp = {
    name: "Imp",
    type: DEMONS,
    isGood: false,
    category: NIGHTLY_EVIL
}

const roles = [
    {
        name: "Washerwoman",
        type: TOWNSFOLK,
        isGood: true,
        category: SETUP_GOOD
    },
    {
        name: "Librarian",
        type: TOWNSFOLK,
        isGood: true,
        category: SETUP_GOOD
    },
    {
        name: "Investigator",
        type: TOWNSFOLK,
        isGood: true,
        category: SETUP_GOOD
    },
    {
        name: "Chef",
        type: TOWNSFOLK,
        isGood: true,
        category: SETUP_GOOD
    },
    {
        name: "Empath",
        type: TOWNSFOLK,
        isGood: true,
        category: NIGHTLY_GOOD
    },
    {
        name: "Fortune Teller",
        type: TOWNSFOLK,
        isGood: true,
        category: NIGHTLY_GOOD
    },
    {
        name: "Undertaker",
        type: TOWNSFOLK,
        isGood: true,
        category: NIGHTLY_GOOD
    },
    {
        name: "Monk",
        type: TOWNSFOLK,
        isGood: true,
        category: NIGHTLY_GOOD
    },
    {
        name: "Ravenkeeper",
        type: TOWNSFOLK,
        isGood: true,
        category: NORMAL
    },
    {
        name: "Virgin",
        type: TOWNSFOLK,
        isGood: true,
        category: NORMAL
    },
    {
        name: "Slayer",
        type: TOWNSFOLK,
        isGood: true,
        category: NORMAL
    },
    {
        name: "Soldier",
        type: TOWNSFOLK,
        isGood: true,
        category: NORMAL
    },
    {
        name: "Mayor",
        type: TOWNSFOLK,
        isGood: true,
        category: NORMAL
    },

    {
        name: "Butler",
        type: OUTSIDERS,
        isGood: true,
        category: NIGHTLY_GOOD
    },
    {
        name: "Drunk",
        type: OUTSIDERS,
        isGood: true,
        category: NORMAL
    },
    {
        name: "Recluse",
        type: OUTSIDERS,
        isGood: true,
        category: NORMAL
    },
    {
        name: "Saint",
        type: OUTSIDERS,
        isGood: true,
        category: NORMAL
    },

    {
        name: "Poisoner",
        type: MINIONS,
        isGood: false,
        category: NIGHTLY_EVIL
    },
    {
        name: "Spy",
        type: MINIONS,
        isGood: false,
        category: NIGHTLY_EVIL
    },
    {
        name: "Scarlet Woman",
        type: MINIONS,
        isGood: false,
        category: NORMAL
    },
    {
        name: "Baron",
        type: MINIONS,
        isGood: false,
        category: NORMAL
    },

    TheImp
]



const firstNightOrder = [
    'Imp',
    "Poisoner",
    'Spy',
    'Washerwoman',
    'Librarian',
    'Investigator',
    'Chef',
    'Empath',
    'Fortune Teller',
    'Butler'
]
function getSetupRolePriority(roleName) {
    const index = firstNightOrder.indexOf(roleName)
    if (index == -1) {
        return NO_PRIORITY
    }
    return index
}

const everyNightOrder = [
    'Poisoner',
    'Monk',
    'Spy',
    'Scarlet Woman',
    'Imp',
    'Ravenkeeper',
    'Undertaker',
    'Empath',
    'Fortune Teller',
    'Butler'
]
function getNightlyRolePriority(roleName) {
    const index = everyNightOrder.indexOf(roleName)
    if (index == -1) {
        return NO_PRIORITY
    }
    return index
}

function getRole(name) {
    return roles.find(role => role.name == name)
}