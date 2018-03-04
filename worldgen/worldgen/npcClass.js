
	/*  NPC Generators  */

	function generateRace(){
		var race = randomInt(1, 9);
		var returnedRace = "";
		switch(race){
			case 1: returnedRace = "Human"; break;
			case 2: returnedRace = "Elf"; break;
			case 3: returnedRace = "Dwarf"; break;
			case 4: returnedRace = "Gnome"; break;
			case 5: returnedRace = "Orc"; break;
			case 6: returnedRace = "Half-Elf"; break;
			case 7: returnedRace = "Half-Orc"; break;
			case 8: returnedRace = "Human"; break;
			case 9: returnedRace = "Human"; break;}
		if(percentChance(3)){
			returnedRace = "Dragonborn";}
		if(percentChance(1)){
			returnedRace = "Tiefling";}
		return returnedRace;
	}
	
	function generateAlignment(){
		var lawful	= randomInt(1, 3);
		var good	= randomInt(1, 3);
		var alignment = "";
		switch(lawful){
			case 1: alignment = "Chaotic "; break;
			case 2: alignment = "Neutral "; break;
			case 3: alignment = "Lawful "; break;
		}
		switch(good){
			case 1: alignment += "Evil"; break;
			case 2: alignment += "Neutral"; break;
			case 3: alignment += "Good"; break;
		}
		if(alignment == "Neutral Neutral"){
			alignment = "True Neutral";
		}
		return alignment;}
		
	function returnNPCName(race, gender){
		var returnedName = "";
		if(race == "Human"){
			if(gender == "male"){ returnedName = namegen.humanNameMaleFull();}
			else{ returnedName = namegen.humanNameFemaleFull();}}
		if(race == "Dwarf"){
			if(gender == "male"){ returnedName = namegen.dwarfNameMaleFull();}
			else{ returnedName = namegen.dwarfNameFemaleFull();}
		}
		if(race == "Elf"){
			if(gender == "male"){ returnedName = namegen.elfNameMaleFull();}
			else{ returnedName = namegen.elfNameFemaleFull();}
		}
		if(race == "Gnome"){
			if(gender == "male"){ returnedName = namegen.gnomeNameMaleFull();}
			else{ returnedName = namegen.gnomeNameFemaleFull();}
		}
		if(race == "Half-Elf"){
			if(gender == "male"){ returnedName = namegen.halfElfNameMaleFull();}
			else{ returnedName = namegen.halfElfNameFemaleFull();}
		}
		if(race == "Half-Orc"){
			if(gender == "male"){ returnedName = namegen.halfOrcNameMaleFull();}
			else{ returnedName = namegen.halfOrcNameFemaleFull();}
		}
		if(race == "Dragonborn"){
			if(gender == "male"){ returnedName = "Random Dragonborn Male Name";}
			else{ returnedName = "Random Dragonborn Female Name";}
		}
		if(race == "Tiefling"){
			if(gender == "male"){ returnedName = "Random Tiefling Male Name";}
			else{ returnedName = "Random Tiefling Female Name";}
		}
		return returnedName;
	}
	
	/*  NPC Class  */

	function NPC(){
		this.race = "human";
		this.gender = "male";
		this.name = "Ed";
		this.age = "young";
		this.height = "short";
		this.body = "fat";
		this.strength = 1;	//1 - 3
		this.intelligence = 1;	//1 - 3
		this.wealth = 1;	//1 - 3	
		this.description = "";
		
		this.alignment = "neutral";	//chaotic/neutral/lawful + evil/neutral/good
		this.personality = "none";
		
		
		this.create = function(){
			this.race = generateRace();
			this.gender = randomOf("male", "female");
			this.him = "him";
			this.pronoun = "he"; if(this.gender == "female") {this.pronoun = "she"; this.him = "her";}
			this.name = returnNPCName(this.race, this.gender);
			this.age = randomOf("very young (child)", "young", "middle-aged", "middle-aged", "middle-aged", "old", "very old");
			this.height = randomOf("short", "n", "n", "n", "tall");
			this.body = randomOf("n", "n", "n", "skinny", "frail", "bulky", "fat");
			switch(this.body){
				case "skinny": this.strength = 1; break;
				case "frail": this.strength = 1; break;
				case "bulky": this.strength = 3; break;
				case "fat": this.strength = randomInt(2, 3); break;
				case "obese": this.strength = 3; break;
				default: this.strength = randomInt(1, 3);}
			this.intelligence = randomInt(1, 3);
			this.wealth = randomInt(1, 3);
			this.alignment = generateAlignment();
			this.accent = randomOf(
				"English",
				"Scottish",
				"Spanish (EU)",
				"Spanish (Mexican)",
				"Portuguese",
				"French",
				"German",
				"Russian",
				"Australian",
				"Chinese",
				"Japanese",
				"Indian",
				"Arabic",
				"African",
				"Very Correctly Pronunced",
				"Jamaican",
				"Nordic",
				"Native-American");
			switch(randomInt(1, 16)){
				case 1: this.personality = "serious and formal"; break;
				case 2: this.personality = "wise and profound"; break;
				case 3: this.personality = "quiet and introverted"; break;
				case 4: this.personality = "charismatic and extroverted"; break;
				case 5: this.personality = "logical and sure"; break;
				case 6: this.personality = "happy and encouraging"; break;
				case 7: this.personality = "ambiguous and metaphoric"; break;
				case 8: this.personality = "generous, friendly and a good host"; break;
				case 9: this.personality = "charismatic, but eccentric"; break;
				case 10: this.personality = "warrior-like and courageous"; break;
				case 11: this.personality = "honest, open and conservative"; break;
				case 12: this.personality = "commanding and inspiring or reckless"; break;
				case 13: this.personality = "keen-sensed, who can easily notice details and has ADHD"; break;
				case 14: this.personality = "helping and providing"; break;
				case 15: this.personality = "adventurer-type, usually bored with mundane life"; break;
				case 16: this.personality = "rejecting at first, but accepting after a while, fun"; break;
				case 0: this.personality = ""; break;}
		}
		this.create();
		
		this.updateDescription = function(){
			this.description = this.name;
			if(this.age == "old"){
				this.description += ", an ";}
			else{
				this.description += ", a ";}
			this.description += this.age;
			if(this.height != "n" && this.body != "n"){
				this.description += ", " + this.height + " and " + this.body;}
			else if(this.height == "n" && this.body != "n"){
				this.description += " and " + this.body;}
			else if(this.height != "n" && this.body == "n"){
				this.description += " and " + this.height;}
			this.description += " " + this.alignment + " " + this.race + " " + this.gender;
			this.description += "<br>";
			this.description += this.pronoun + " is " + this.personality;// + ", ";
			/*switch(this.intelligence){
				case 1: this.description += "not very smart";	break;
				case 2: this.description += "";					break;
				case 3: this.description += "smart";			break;}
			if(this.intelligence != 2 && this.strength != 2){
				this.description += " and ";}
			switch(this.strength){
				case 1: this.description += "frail";	break;
				case 2: break;
				case 3: this.description += "strong";	break;}
			if(this.intelligence == 2 && this.strength == 2){
				this.description += "surprisingly average";}
			*/
			this.description += ".<br>";
			if(this.wealth == 2) return;
			switch(this.gender){
				case "male":	this.description += "He seems ";	break;
				case "female":	this.description += "She seems ";	break;}
			switch(this.wealth){
				case 1: this.description += " quite poor.";	break;
				case 3: this.description += " quite rich.";	break;}
			if(percentChance(21)){
				this.description += "<br>" + this.name + " has a " + this.accent + " accent.";
			}
		}
		this.updateDescription();
		
	}