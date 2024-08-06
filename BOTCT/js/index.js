
function createSeparatorAfterFoundRole(roleStateToBoolFunc) {
    const rolesState = getHTMLRolesState()
    console.log({rolesState})
    const firstRoleIndex = rolesState.findIndex(roleStateToBoolFunc)
    console.log({firstRoleIndex})
    const rolesWrapperDiv = document.querySelector('#Roles-Wrapper')
    const separator = dom(`
        <div class="separator"></div>
    `)
    rolesWrapperDiv.insertBefore(separator, rolesWrapperDiv.children[firstRoleIndex])
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

        createSeparatorAfterFoundRole(role => getSetupRolePriority(role.name) == NO_PRIORITY)
    },

    sortByNightly: function() {
        let roleStates = getHTMLRolesState()
        roleStates = roleStates.sort((a, b) => getNightlyRolePriority(a.name) - getNightlyRolePriority(b.name))
        setHTMLRolesState(roleStates)

        createSeparatorAfterFoundRole(role => getNightlyRolePriority(role.name) == NO_PRIORITY)
    }
}