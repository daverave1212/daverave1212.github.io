function makeQuestHeader(text, number) {
    return dom(`
        <div class="group-heading">
            <span>${text}</span>
            <span>${number}</span>
        </div>
    `)
}
const QUEST_SYMBOL = {
    'Main Quest': '✦',
    'Personal Quest': '!',
    'Secondary Quest': '!',
}
function makeQuestArticle(row, onClick) {
    const [name, type, location, description] = row
    const symbol = QUEST_SYMBOL[type]
    const symbolClass = type == 'Secondary Quest'? 'secondary': ''
    const renderedDescription = description.split('\n').join('<br>')
    const div = dom(`
        <article class="quest-item">
            <span class="quest-symbol ${symbolClass}">${symbol}</span>
            <div class="quest-copy">
                <strong>${name}</strong>
                <span>${renderedDescription}</span>
            </div>
            <!--span class="quest-level">18</span-->
        </article>
    `)
    div.addEventListener('click', () => onClick(row))
    return div
}

function getLocationsData(glossary) {
    const locationsData = {}
    for (const [name, type, location, desc, imp, rep, emoji] of glossary) {
        console.log(`At ${location}`)
        console.log({glossary})
        locationsData[location] = locationsData[location] ?? {
            nEntries: 0,
            emoji: '❓',
            name: location
        }
        locationsData[location].nEntries++
        if (type == 'Faction') {
            locationsData[location].emoji = emoji
        }
    }
    return locationsData
}

function makeLocationEntry({ nEntries, emoji, name }, onClick) {
    const div =  dom(`
        <button class="location-item" type="button">
            <span class="location-icon">${emoji}</span>
            <span class="location-name">${name}</span>
            <span class="location-count">${nEntries}</span>
        </button>    
    `)
    div.addEventListener('click', onClick)
    return div
}

function setupAllLocationEntries(divSelector, glossary, onLocationClick) {
    const locationsData = getLocationsData(glossary)
    const parentDiv = document.querySelector(divSelector)
    const totalEntries = Array.from(Object.keys(glossary)).length

    const allLocationsData = {
        nEntries: totalEntries,
        emoji: '🌍',
        name: 'All Locations'
    }
    const allLocationsEntry = makeLocationEntry(allLocationsData, () => onLocationClick(allLocationsData))
    parentDiv.appendChild(allLocationsEntry)

    console.log({locationsData})

    for (const locData of Object.values(locationsData)) {
        const entry = makeLocationEntry(locData, () => onLocationClick(locData))
        parentDiv.appendChild(entry)
    }
}

function makeGlossaryEntry(entryRow) {
    const [name, type, location, description, importance, reputation, emoji] = entryRow
    return dom(`
        <article class="codex-entry" data-description="${description}" data-reputation="${reputation}" data-location="${location}">
            <div class="entry-icon character-icon">${emoji ?? ''}</div>

            <div class="entry-copy">
            <strong>${name}</strong>

            <div class="entry-metadata">
                <span>${type}</span>
                <span class="metadata-separator">◆</span>
                <span>${location}</span>
            </div>
            </div>

            <div class="entry-importance">
                <span class="importance-label important">
                    ${importance ?? '?'}
                </span>

                <span class="importance-dot importance-orange"></span>
            </div>
        </article>    
    `)
}

function setupGlossaryEntries(parentSelector, glossary, onEntryClick) {
    const parent = document.querySelector(parentSelector)
    for (const row of glossary) {
        const article = makeGlossaryEntry(row)
        article.addEventListener('click', () => onEntryClick(row))
        parent.appendChild(article)
    }
}

function makeBoardObjectiveCard({heading, text}) {
    return dom(`
          <section class="content-card objectives-card">
            <h3>${heading}</h3>
            <div class="objective-line large">
              <span class="diamond">◆</span>
              <span>${text}</span>
            </div>
          </section>    
    `)
}

function setBoardToGlossaryEntry(entryRow) {
    const [name, type, location, description, importance, reputation, emoji] = entryRow

    document.querySelector('#board-eyebrow').innerHTML = importance ?? ''
    document.querySelector('#board-title').innerHTML = name
    document.querySelector('#board-location').innerHTML = location
    document.querySelector('#board-level').innerHTML = '?'
    document.querySelector('#banner-emoji').innerHTML = emoji ?? ''

    const textSections = splitIntoSections(description)
    
    const mainTexts = []
    for (const { heading, text } of textSections) {
        if (heading == null) {
            mainTexts.push(text)
        } else {
            break
        }
    }
    
    const mainDescriptionPs = mainTexts.map(text => dom(`<p>${text}</p>`))
    const mainDescriptionDiv = document.querySelector('#glossary-entry-description')
    mainDescriptionDiv.innerHTML = ''
    for (const p of mainDescriptionPs) {
        mainDescriptionDiv.appendChild(p)
    }
    
    const descriptionDiv = document.querySelector('.details-grid')
    document.querySelectorAll('.objectives-card').forEach(div => div.remove())
    for (const { heading, text } of textSections) {
        if (heading == null)
            continue
        const card = makeBoardObjectiveCard({ heading, text })
        const cardRight = dom(`
          <section class="content-card tracking-card"></section>    
        `)
        descriptionDiv.appendChild(card)
        descriptionDiv.appendChild(cardRight)
    }
}