
Letters = {
	'a' : 'e',
	'e' : 'a',
	'i' : 'i',
	'o' : 'o',
	'u' : 'ae',
	'r' : 'l',
	'p' : 'f',
	'q' : '',
	'w' : 'l',
	'y' : 'iy',
}

Pronouns = {
	'I' : 'sal',
	'me' : 'tel',
	'you' : 'va',
	'he' : 'su',
	'him' : 'saen',
	'she' : 'si',
	'her' : 'siin',
	'it' : 'aet',
	'its' : 'aeta',
	'they' : 'fae',
	'them' : 'feer',
	'we' : 'sar',
	'us' : 'siir',
	'my' : 'salen',
	'mine' : 'ath',
	'your' : 'vian',
	'yours' : 'vath',
	'his' : 'seithe',
	'hers' : 'siine',
	'their' : 'fiaen',
	'our' : 'saren',
	'ours' : 'saerne',
}

SyllablesPriority = {
	'ance' : 'aloth',
	'ite' : 'na',
	'ion' : 'ide',
	'ise' : 'al',
	'ing' : 'eth',
	'ish' : 'ana',
	'ant' : 'ath',
	'ent' : '\'mre',
	'th' : 'sh',
	'sh' : 's',
	'ce' : 'thi',
	'ci' : 'the',
	'ge' : 'th\'',
	'on' : 'el',
	'ed' : 'ede',
	'nd' : 'la',
}

Syllables = {
	'st' : 'fth',
	'rn' : 'ret',
	'er' : 'ash',
	'en' : 'eleth',
	'ty' : 'lar',
	'ly' : 'ral',
	'my' : 'nal',
	'dy' : 'reth',
	'ry' : 'lath',
	'al' : 'al',
	'an' : 'ein',
	'aw' : 'o',
	'in' : 'ith',
	'is' : 'em',
	'ar' : 'ar',
	'as' : 'am',
	'ow' : 'ari',
	'wh' : 'v\'',
	'wo' : 'sei',
	'ie' : 'ethe',
	'ou' : 'ali',
	'ea' : 'e',
	'ai' : 'ei',
	'ue' : 'ehe',
	'ia' : 'ina',
	'oi' : 'ane',
	're' : 'la',
	'wr' : 'l\'',
	'ay' : 'ei',
	'or' : 'aes',
	'ro' : 'sae',
	'ra' : 'da',
	'ey' : 'ala',
	'es' : 'atha',
	'rt' : 'l',
	'bl' : 'fet',
	'nt' : 'la',
	'nk' : 'ptha',
	'ng' : 'leth',
	'pt' : 'd',
	'st' : 's',
	'ur' : 'oth',
	'to' : 'dae',
	'il' : 'aed',
	'sc' : 'hl',
	'sp' : 'hef',
	'gn' : 'nd',
	'gh' : 'th',
	'gl' : 'nth'

}


String.prototype.startsWithAny = function(subs, start){
	for(let sub of subs){
		if(this.startsWith(sub, start)){
			return sub
		}
	}
	return false
}

letterKeys = Object.keys(Letters)
pronounKeys = Object.keys(Pronouns)
syllablePrioKeys = Object.keys(SyllablesPriority)
syllableKeys = Object.keys(Syllables)

function splitWordIntoSyllablesPrio(word){
	let syls = []
	let start = 0
	for(let i = 0; i<word.length; i++){
		let syl = word.startsWithAny(syllablePrioKeys, i)
		if(syl){
			if(start < i){
				syls = [...syls, ...splitWordIntoSyllables(word.substring(start, i))]
			}
			syls.push(word.substring(i, i + syl.length))
			i = i + syl.length - 1
			start = i + 1
		}
	}
	print(start + ' - ' + word.length )
	if(start < word.length - 1){
		syls = [...syls, ...splitWordIntoSyllables(word.substring(start, word.length))]
	}
	return syls
}

function splitWordIntoSyllables(word){
	let syls = []
	let start = 0
	for(let i = 0; i<word.length; i++){
		let syl = word.startsWithAny(syllableKeys, i)
		if(syl){
			syls.push(word.substring(i, i + syl.length))
			i = i + syl.length - 1
		} else {
			let ltr = word.startsWithAny(letterKeys, i)
			if(ltr){
				syls.push(ltr)
			} else {
				syls.push(word[i])
			}
		}
	}
	return syls
}


function transformSyllable(syl){
	if(pronounKeys.includes(syl)){
		return Pronouns[syl]
	} else if(syllablePrioKeys.includes(syl)){
		return SyllablesPriority[syl]
	} else if(syllableKeys.includes(syl)){
		return Syllables[syl]
	} else if(letterKeys.includes(syl)){
		return Letters[syl]
	} else {
		return syl
	}
}

function splitSentence(sentence){
	let words = sentence.split(' ')
	words = words.map(w => pronounKeys.includes(w)? [w] : splitWordIntoSyllablesPrio(w))
	console.log(words)
	finalWords = []
	for(let word of words){
		finalWord = []
		for(let syl of word){
			finalWord.push(transformSyllable(syl))
		}
		finalWords.push(finalWord)
	}
	return finalWords.map(syls => syls.join('')).join(' ')
}

s = splitWordIntoSyllablesPrio('the')
console.log(s)
