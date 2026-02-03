
const showPageFuncs = {}

function onShowPage(page, func) {
    showPageFuncs[page] = func
}

function showPage(id) {
    hideSideMenu()
    const pages = document.querySelectorAll('.page')
    console.log({pages})
    for (const page of pages) {
        page.classList.add('hidden')
    }
    const thePage = document.querySelector('#' + id)
    console.log({thePage})
    thePage.classList.remove('hidden')

    showPageFuncs[id]?.()
}
