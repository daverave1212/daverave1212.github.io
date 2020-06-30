
import * as Grammar from './Grammar.mjs'

export function assignTypesToWordsInWordLines(wordLines) {
    for (let wordLine of wordLines) {
        for (let word of wordLine.words) {
            word.type = Grammar.getTokenType(word.string)
        }
    }
    return wordLines
}
