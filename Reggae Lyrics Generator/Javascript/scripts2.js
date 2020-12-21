

	const FILLER 	= 0
	const PREADJ 	= 1
	const POSTADJ 	= 2
	const PREP 		= 3
	const PERSON 	= 4
	const THING 	= 5
	const ADV 		= 6
	const VERB 		= 7
	const VERBXPR 	= 8
	const VERBPREF 	= 9
	const PRON 		= 10
	const MODALVERB = 11
	const LOCPREP 	= 12
	const LOC 		= 13
	const TIME 		= 14
	const CONCEPT	= 15


	const SMOKABLE	= 101
	const LIKETHIS	= 102
	const MUSIC		= 103

	//Rhymes = []

	Words = [
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
	]
	Words[SMOKABLE] = {}
	Words[LIKETHIS] = {}
	//Words[MUSIC] 	= {}
	Words.randomWord = function(type, rh){
		if(rh != null){
			return copy(randomOfArray(Words[type][rh]))
		} else {
			return copy(randomOfArray(Words[type][randomKey(Words[type])]))
		}
	}

	class Struct{
		constructor(word, syllables, type, rhyme, preps, pref, prdj){
			this.word = word
			this.syllables = syllables
			this.rhyme = rhyme
			this.type = type
			this.prepositions = preps
			this.prefferedNext = pref
			//if(!Rhymes.includes(rhyme)) Rhymes.push(rhyme)
			if(Words[type][rhyme] == null){
				Words[type][rhyme] = []
			}
			Words[type][rhyme].push(this)
			this.preadj = prdj;
		}

		lastChar(){
			return last(this.word)
		}

		addToWordAndReturn(str){
			this.word += str;
			return this;
		}

	}





	// Other
	/*
		POSTADJ + "er dan " + Structure
		nuh go ..

		(FILLER) SUBJECT - SECOND       [ACTION - OBJECT]       (FILLER)
		(FILLER) SUBJECT - SECOND       [ACTION - OBJECT - ADV] (FILLER)
		(FILLER) SUBJECT - SECOND       [ACTION]                (FILLER)

		PRON:
			PRON

		THING:
			THING
			THING and THING
			PREADJ THING

		PREADJ:
			PREADJ
			PREADJ + POSTADJ

		SUBJECT:
			PRON
			THING

		VERB:
			VERB
			MODALVERB + MODALVERB.prep + VERB

		VERB + THING:
			VERB + THING
			PREFVERB

		SECOND:
			ACTION - OBJECT
				VERB + THING + PREP + THING + "dat" + PRON + VERB
				VERB + THING + PREP + PREADJ+  THING + "dat" + PRON + VERB
				VERB + THING
				VERB + PREADJ + THING
				VERB + PRON
				VERB + THING + POSTADJ (rare)
				a + POSTADJ
				a + POSTADJ + like + THING
				a + POSTADJ + like + PRON + VERB/VERBXPR
				VERBXPR
				ACTION - OBJECT + LOCPREP + LOC
			ACTION
				VERB
				VERB + ADV



		9 - 12
	*/




	// Functions for generation

	// Takes array of arguments
	// If argument is int -> Words.randomWord(argumetn)
	// If argument is string -> argument
	// If argument is [] -> doesn't push
	function w(){
		let ret = []
		arguments = normalizeArrayTree(arguments)
		for(let argument of arguments){	// Either a constant (a word type), a string (literally) or an empty array
			if(typeof argument == 'number')	// A constant
				ret.push(Words.randomWord(argument))
			else if(typeof argument == 'string')
				ret.push(argument)
		}
		return ret
	}

	function wordToComparison(word){
		if(word.word == "good") return "betta"
		if(isVowel(last(word.word)))
			word.word = word.word.substring(0, word.word.length - 1)
		else if( !'wyhxv'.includes(last(word.word)) )
			word.word += last(word.word)
		word.word += "a"
		return word
	}

	function getPreadj(){
		return randomOf(
			w(PREADJ),
			w(PREADJ, POSTADJ)
		)
	}

	function getPostadj(){
		return randomOf(
			w(POSTADJ),
			wordToComparison(Words.randomWord(POSTADJ))
		)
	}

	function getNoun(){
		let thing = Words.randomWord(THING)
		return randomOf(
			thing,
			thing,
			w(THING, "and", THING),
			w(getPreadj(), THING)
		)
	}

	function getVerb(){
		let mv = Words.randomWord(MODALVERB)
		switch(randomInt(1,2)){
			case 1: return w(VERB)
			case 2:
				let prep = randomOfArray(mv.prepositions)
				if(prep == null){
					return w(mv, VERB)
				} else {
					return w(mv, randomOfArray(mv.prepositions), VERB)
				}
		}
	}

	function getSubject(){
		let p = Words.randomWord(PERSON)
		let prep
		if(p.prepositions != null && p.prepositions != []){
			prep = randomOfArray(p.prepositions)
		}
		return randomOf(
			w(PRON),
			w(PRON),
			w(PERSON),
			w((p.prepositions!=null)?([prep, p]):([p]))
		)
	}

	function getAction(){
		return randomOf(
			w(VERBXPR),
			getVerb(),
			getVerb(),
			w(getVerb(), ADV)
		)
	}

	function getPrefVerb(){
		let w1 = w(VERBPREF)[0]
		let w2 = randomOf(
			w(w1.prefferedNext),
			[w(PREADJ), Words.randomWord(w1.prefferedNext)]
		)
		return [w1, w2]
	}

	function getVerbNounPair(){
		return randomOf(
			[getVerb(), getNoun()],
			getPrefVerb()
		)
	}

	// getRandomVerbpref(SMOKABLE)
	function getRandomVerbpref(nountype){
		let verb = Words.randomWord(VERBPREF)
		while(verb.prefferedNext != nountype){
			verb = Words.randomWord(VERBPREF);
		}
		return verb;
	}

	function getFirstTypeOfArray(arr, type){
		if(typeof arr != 'array'){
			if(arr.type != null && arr.type == type){
				return arr
			} else {
				console.error("getFirstTypeOfArray: NOT AN ARRAY")
				return null
			}
		}
		for(let i = 0; i<arr.length; i++){
			if(arr[i].type == type){
				return arr[i]
			}
		}
		console.error("getFirstTypeOfArray: NONE FOUND")
		return null
	}

	//VERBPREF - NOUN - dat - PRON - VERBPREF
	function getVNdPV(){
		let verb1	= Words.randomWord(VERBPREF)
		let noun	= Words.randomWord(verb1.prefferedNext)
		let verb2	= getRandomVerbpref(verb1.prefferedNext)
		return randomOf(
			[verb1, noun, 'dat', w(PRON), verb2],
			[verb1, getPreadj(), noun, 'dat', w(PRON), verb2]
		)
	}

	function getActionObject(){
		let vnp = getVerbNounPair()
		return randomOf(
			vnp,
			[vnp, w(LOCPREP), w(LOC)],
			[vnp, w(PREP), getNoun(), "dat", w(PRON), randomOf(w(VERB), w(VERBXPR))],
			getVNdPV(),
			[vnp, w(PREP), getNoun(), "dat a ", w(POSTADJ)],
			[vnp, wordToComparison(Words.randomWord(POSTADJ)), "than", w(PRON)],
			[getVerb(), getPreadj(), getNoun()],
			[getVerb(), w(PRON)],
			["a", w(POSTADJ)],
			["a", w(POSTADJ), "like", randomOf(getNoun(), Words.randomWord(PERSON))],
			["a", w(POSTADJ), "like", getSubject(), vnp],
			[vnp, "like", w(LIKETHIS)],
		)
	}

	function getSecond(){
		return randomOf(
			getAction(),
			getActionObject(),
			getActionObject(),
			getActionObject(),
			getActionObject(),
			[getActionObject(), w(TIME)],
			[getActionObject(), w(LOCPREP), w(LOC)]
		)
	}

	function getLyric(){
		return normalizeArrayTree([getSubject(), getSecond()])
	}

	function calculateNSyllables(lyricArray){
		let s = 0;
		for(let i = 0; i<lyricArray.length; i++){
			if(typeof lyricArray[i] == "string"){
				s++
			} else {
				s += lyricArray[i].syllables
			}
		}
		return s
	}



	function lyricArrayToString(lyricArray){
		let l = "";
		for(let i = 0; i<lyricArray.length; i++){
			if(typeof lyricArray[i] == "string"){
				l += lyricArray[i] + " "
			} else {
				l += lyricArray[i].word + " "
			}
		}
		return l
	}



	function generateVerse(rhyme){
		let la = null
		let nSyls = 0
		do{
			la = getLyric()
			console.log(la)
			nSyls = calculateNSyllables(la)
		} while(nSyls > 12 || nSyls < 10)
		if(rhyme != null){
			let lastWordType = la[la.length - 1].type
			console.log("Last word (" + la[la.length - 1] + ") is a " + lastWordType)
			if(Words[lastWordType][rhyme] == null){
				return null;
			}
			let rhymingWord = randomOfArray(Words[lastWordType][rhyme])
			la[la.length - 1] = copy(rhymingWord)
		} else {
			rhyme = la[la.length - 1].rhyme
		}
		if(randomInt(1, 7) == 1/*nSyls < 10*/){
			let randomWord = Words.randomWord(FILLER)
			switch(randomOf("head", "tail")){
				case "tail":
					la[la.length - 1].word += ","
					la.push(randomWord)
					break;
				case "head":
					la.unshift(randomWord.word + ",")
					break;
			}
		}
		let verse = lyricArrayToString(la)
		//console.log(calculateNSyllables(la) + ": " + verse)
		return {verse:verse, rhyme:rhyme, lyricArray:la}
	}
