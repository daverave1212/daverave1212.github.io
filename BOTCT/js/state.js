// [{ name, type, playerName, isDrunk }]
function setHTMLRolesState(roleStates) {
    const rolesDivs = roleStates.map(state => dom(`

        <div class="role-wrapper" data-type="${state.type}" data-is-drunk="${state.isDrunk}">
            <div class="role role-${state.isDrunk === true? 'outsiders' : state.type}">
                <span class="role-name">${state.name}</span>
                ${ state.isDrunk == true ? "(Drunk)" : "" }
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
    const rolesDivs = Array.from(rolesWrapperDiv.querySelectorAll('.role-wrapper'))
    return rolesDivs.map(div => ({
        name: div.querySelector('.role-name').innerHTML.trim(),
        type: div.getAttribute('data-type'),
        isDrunk: div.getAttribute('data-is-drunk') == 'true',
        playerName: div.querySelector('.name-input').value
    }))
}