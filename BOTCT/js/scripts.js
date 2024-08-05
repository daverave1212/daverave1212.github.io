// http://bignose.whitetree.org/projects/botc/diy/

const SETUP_GOOD = 'SETUP_GOOD'
const NIGHTLY_GOOD = 'NIGHTLY_GOOD'
const NORMAL = 'NORMAL'
const SETUP_EVIL = 'SETUP_EVIL'
const NIGHTLY_EVIL = 'NIGHTLY_EVIL'

const TOWNSFOLK = 'townsfolk'
const OUTSIDERS = 'outsiders'
const MINIONS = 'minions'
const DEMONS = 'demons'


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
        return 99
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
        return 99
    }
    return index
}



function getNDemonsByPeople(nPeople) {
    return 1
}
function getNMinionsByPeople(nPeople) {
    if (nPeople <= 9) return 1
    if (nPeople <= 12) return 2
    return 3
}
function getNOutsidersByPeople(nPeople) {
    const nPlayersToOutsiders = {
        5: 0,
        6: 1,
        7: 0,
        8: 1,
        9: 2,
        10: 0,
        11: 1,
        12: 2,
        13: 0,
        14: 1,
        15: 2
    }
    return nPlayersToOutsiders[nPeople]
}


function getSomeMinionRoles(nPeople) {
    const minions = randomizeArray(roles.filter(role => role.type == MINIONS))
    const nMinions = getNMinionsByPeople(nPeople)
    return minions.slice(0, nMinions)
}
function getSomeOutsidersRoles(rolesSoFar, nPeople) {
    const outsiders = randomizeArray(roles.filter(role => role.type == OUTSIDERS))
    let nOutsiders = getNOutsidersByPeople(nPeople)
    console.log(rolesSoFar.filter(role => role.name == 'Baron'))
    if (rolesSoFar.filter(role => role.name == 'Baron').length == 1) {
        nOutsiders += 2
    }
    return outsiders.slice(0, nOutsiders)
}
function getSomeTownsfolkRoles(nTownsfolk) {
    let townsfolk = randomizeArray(roles.filter(role => role.type == TOWNSFOLK))
    const townsfolkSoFar = []
    let townsfolkCategories = [SETUP_GOOD, NIGHTLY_GOOD, NORMAL]

    while (townsfolkSoFar.length < nTownsfolk) {
        const currentTownsfolkCategory = townsfolkCategories.shift()
        townsfolkCategories.push(currentTownsfolkCategory)

        const foundRoleIndex = townsfolk.findIndex(role => role.category == currentTownsfolkCategory)
        const foundRole = popArrayElementAt(townsfolk, foundRoleIndex)
        townsfolkSoFar.push(foundRole)
    }
    return townsfolkSoFar
}


function getRolesByPeople(nPeople) {

    let rolesSoFar = [TheImp]

    const minions = getSomeMinionRoles(nPeople)
    rolesSoFar = [...rolesSoFar, ...minions]

    const outsiders = getSomeOutsidersRoles(rolesSoFar, nPeople)
    rolesSoFar = [...rolesSoFar, ...outsiders]

    const nTownsfolk = nPeople - 1 - minions.length - outsiders.length
    console.log(nTownsfolk)
    const townsfolk = getSomeTownsfolkRoles(nTownsfolk)
    rolesSoFar = [...rolesSoFar, ...townsfolk]

    return rolesSoFar
}


function getSelectedNPlayers() {
    const e = document.querySelector('#N-Players-Select')
    const text = e.options[e.selectedIndex].text
    return parseInt(text)
}

function getCurrentRolesByHTML() {
    const rolesWrapperDiv = document.querySelector('#Roles-Wrapper')
    const rolesNames = Array.from(rolesWrapperDiv.children)
        .map(div => div.querySelector('role').innerText.trim())
    const rolesInGame = rolesNames.map(roleName => roles.find(role => role.name == roleName))
    return rolesInGame
}


// [{ name, type, playerName }]
function setHTMLRolesState(roleStates) {
    const rolesDivs = roleStates.map(state => dom(`
        <div class="role-wrapper" data-type="${state.type}">
            <div class="role role-${state.type}">
                ${state.name}
            </div>
            <input class="name-input" value="${state.playerName}">
        </div>
    `))

    const rolesDiv = document.querySelector('#Roles-Wrapper')
    rolesDiv.innerHTML = ''
    rolesDiv.append(...rolesDivs)
}
function getHTMLRolesState() {
    const rolesWrapperDiv = document.querySelector('#Roles-Wrapper')
    const rolesDivs = Array.from(rolesWrapperDiv.children)
    return rolesDivs.map(div => ({
        name: div.querySelector('.role').innerHTML.trim(),
        type: div.getAttribute('data-type'),
        playerName: div.querySelector('.name-input').value
    }))
}

const index = {
    generateRoles: function() {
        const nPeople = getSelectedNPlayers()
        const roles = getRolesByPeople(nPeople)

        const roleStates = roles.map(role => ({...role, playerName: ''}))
        setHTMLRolesState(roleStates)

        document.querySelector("#Top-Wrapper").remove()
        document.querySelector("#Sort-Wrapper").style.display = ''
    },

    sortBySetup: function() {
        let roleStates = getHTMLRolesState()
        roleStates = roleStates.sort((a, b) => getSetupRolePriority(a.name) - getSetupRolePriority(b.name))
        setHTMLRolesState(roleStates)
    },

    sortByNightly: function() {
        let roleStates = getHTMLRolesState()
        roleStates = roleStates.sort((a, b) => getNightlyRolePriority(a.name) - getNightlyRolePriority(b.name))
        setHTMLRolesState(roleStates)
    }
}