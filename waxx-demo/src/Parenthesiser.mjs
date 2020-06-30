


// For each word, sets its respective pair token indices (line and word index)
// Ex: for ( i in arr )
//  Here, '(' on position 1 will be assigned 5, and ')' on position 5 will be assigned 1
function parenthesise(wordLines) {
    let parStack = []
    for(let i = 0; i < wordLines.length; i++){
        let line = wordLines[i]
        for(let j = 0; j < line.words.length; j++){
            let word = line.words[j]
            let string = word.string
            if (string == '(') {
                parStack.push({i, j})
            } else if (string == ')') {
                let openPos = parStack.pop()
                wordLines[openPos.i].words[openPos.j].pairLine = i
                wordLines[openPos.i].words[openPos.j].pairWord = j
                word.pairLine = openPos.i
                word.pairWord = openPos.j
            }
        }
    }
    return wordLines
}

export { parenthesise }