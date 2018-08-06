
	/*
	
	Strength:
		Nr special moves per day
	Dex:
		Initiative
		Crit chance
	Con:
		Health
		Health regen
	Intelligence:
		Ability Recovery
	Wisdom:
		Save Power
	Cha:
		Save DC
		Initiative
	
	
	*/


	var Player = {				// contains only strings and numbers
		"name"			: "",
		
		"initiative"	: 0,
		"movementSpeed"	: 0,
								// Parameters as:
		"strength"		: 0,	// str
		"dexterity"		: 0,	// dex
		"intelligence"	: 0,	// int
		"constitution"	: 0,	// con
		"wisdom"		: 0,	// wis
		"charisma"		: 0,	// cha
				
								// exactly as they are written here:
		"athletics"		: 0,
		"acrobatics"	: 0,
		"craft"			: 0,
		"sleightofhand"	: 0,
		"stealth"		: 0,
		"userope"		: 0,
		"survival"		: 0,
		"luck"			: 0,
		"arcana"		: 0,
		"biology"		: 0,
		"history"		: 0,
		"knowledge"		: 0,
		"nature"		: 0,
		"animalhandling": 0,
		"insight"		: 0,
		"investigation"	: 0,
		"perception"	: 0,
		"religion"		: 0,
		"deception"		: 0,
		"intimidation"	: 0,
		"persuasion"	: 0,
		"performance"	: 0,
		
		
		"level"			: 1,	// level
		"race"			: "",	// race			//taken from Races[race]
		"background"	: "",	// background	//taken from Backgrounds[background]

		"armor"			: "",	// armor		// light? medium? heavy?
		
		"bundle1"		: "none",	// b1
		"bundle2"		: "none",	// b2
		"bundle3"		: "none",	// b3
		"bundle5"		: "none",	// b5
		"bundle7"		: "none",	// b7
		"bundle9"		: "none",   // b9
		"bundle11"		: "none",   // b11
		"bundle13"		: "none",   // b13
		"bundle15"		: "none",   // b15
		"bundle17"		: "none",   // b17
		"bundle19"		: "none"    // b19
	}
	
	Player.addArmorBonuses = function(){
		Armors[Player.armor].stats.addStatsToPlayer();
	}
	
	Player.addRaceSkillBonuses = function(){
		var skillBonuses = Races[Player.race].skillBonuses;
		for(var i = 0; i<skillBonuses.length; i++){
			var thisSkill = removeSpaces(skillBonuses[i]).toLowerCase();
			Player[thisSkill.toLowerCase()]++;
			print(thisSkill + " is now " + Player[thisSkill.toLowerCase()]);
			}
		var skillMinuses = Races[Player.race].skillMinuses;
		for(var i = 0; i<skillMinuses.length; i++){
			var thisSkill = removeSpaces(skillMinuses[i]).toLowerCase();
			Player[thisSkill.toLowerCase()]--;
			print(thisSkill + " is now " + Player[thisSkill.toLowerCase()]);
			}}
			
	Player.addBackgroundSkillBonuses = function(){
		var skillBonuses = Backgrounds[Player.background].skillBonuses;
		for(var i = 0; i<skillBonuses.length; i++){
			var thisSkill = removeSpaces(skillBonuses[i]).toLowerCase();
			Player[thisSkill.toLowerCase()]++;
			print(thisSkill + " is now " + Player[thisSkill.toLowerCase()]);}
		var skillMinuses = Backgrounds[Player.background].skillMinuses;
		for(var i = 0; i<skillMinuses.length; i++){
			var thisSkill = removeSpaces(skillMinuses[i]).toLowerCase();
			Player[thisSkill.toLowerCase()]--;
			print(thisSkill + " is now " + Player[thisSkill.toLowerCase()]);}}
	
	

			
	// file:///E:/GitHub/Call%20of%20Heroes%20Talents%20v4/mycharacter.html?str=1&dex=2&con=4&int=-1&wis=0&cha=3&name=Lobelard%20the%20Great&level=12&background=Sailor&race=Blood%20Elf&armor=Heavy&img=https://pre00.deviantart.net/dbc8/th/pre/f/2007/096/9/8/blood_elf_bandit_by_dachou.png
	Player.loadFromParameters = function(){	// NOTE: Takes them from the Parameters object, NOT from the actual URL!!
		Player.name			= Parameters["name"];
		Player.strength		= parseInt(Parameters["str"]);
		Player.dexterity	= parseInt(Parameters["dex"]);
		Player.constitution = parseInt(Parameters["con"]);
		Player.wisdom		= parseInt(Parameters["wis"]);
		Player.charisma		= parseInt(Parameters["cha"]);
		Player.intelligence = parseInt(Parameters["int"]);
		Player.level		= parseInt(Parameters["level"]);
		Player.race			= Parameters["race"];
		Player.background	= Parameters["background"];
		Player.armor		= Parameters["armor"];
		Player.movementSpeed	= Races[Player.race].movementSpeed;
		Player.initiative		= Player.dexterity + Player.charisma;
		Player["athletics"]		= parseInt(Parameters["athletics"]);
		Player["acrobatics"]	= parseInt(Parameters["acrobatics"]);
		Player["craft"]			= parseInt(Parameters["craft"]);
		Player["sleightofhand"]	= parseInt(Parameters["sleightofhand"]);
		Player["stealth"]		= parseInt(Parameters["stealth"]);
		Player["userope"]		= parseInt(Parameters["userope"]);
		Player["survival"]		= parseInt(Parameters["survival"]);
		Player["luck"]			= parseInt(Parameters["luck"]);
		Player["arcana"]		= parseInt(Parameters["arcana"]);
		Player["biology"]		= parseInt(Parameters["biology"]);
		Player["history"]		= parseInt(Parameters["history"]);
		Player["knowledge"]		= parseInt(Parameters["knowledge"]);
		Player["nature"]		= parseInt(Parameters["nature"]);
		Player["animalhandling"]= parseInt(Parameters["animalhandling"]);
		Player["insight"]		= parseInt(Parameters["insight"]);
		Player["investigation"]	= parseInt(Parameters["investigation"]);
		Player["perception"]	= parseInt(Parameters["perception"]);
		Player["religion"]		= parseInt(Parameters["religion"]);
		Player["deception"]		= parseInt(Parameters["deception"]);
		Player["intimidation"]	= parseInt(Parameters["intimidation"]);
		Player["persuasion"]	= parseInt(Parameters["persuasion"]);
		Player["performance"]	= parseInt(Parameters["performance"]);
		if(Parameters["b1"] != undefined) Player.bundle1 	= Parameters["b1"];
		if(Parameters["b2"] != undefined) Player.bundle2 	= Parameters["b2"];
		if(Parameters["b3"] != undefined) Player.bundle3 	= Parameters["b3"];
		if(Parameters["b5"] != undefined) Player.bundle5 	= Parameters["b5"];
		if(Parameters["b7"] != undefined) Player.bundle7 	= Parameters["b7"];
		if(Parameters["b9"] != undefined) Player.bundle9 	= Parameters["b9"];
		if(Parameters["b11"] != undefined) Player.bundle11 	= Parameters["b11"];
		if(Parameters["b13"] != undefined) Player.bundle13 	= Parameters["b13"];
		if(Parameters["b15"] != undefined) Player.bundle15 	= Parameters["b15"];
		if(Parameters["b17"] != undefined) Player.bundle17 	= Parameters["b17"];
		if(Parameters["b19"] != undefined) Player.bundle19 	= Parameters["b19"];
	}
	
	Player.levelUp = function(){ Player.level++; }
	
	Player.isBundleAvailable = function(){
		var chooseNewBundle = false;
		if(Player.level > 1 && Player.level < 4){
			chooseNewBundle = true;}
		if(Player.level > 3 && Player.level % 2 == 1){
			chooseNewBundle = true;}
		return chooseNewBundle;}
		
	Player.isRaceBonusAvailale = function(){
		var newRaceBonus = false;
		if(Player.level > 3 && Player.level % 2 == 0){
			newRaceBonus = true;}
		return newRaceBonus;}
	
	Player.addBundle = function(bundleObject){
		var playerBundleLevelToAdd = 1;
		if(Player.bundle1 == "none"){
			playerBundleLevelToAdd = 1;}
		else if(Player.bundle2 == "none"){
			playerBundleLevelToAdd = 2;}
		else if(Player.bundle3 == "none"){
			playerBundleLevelToAdd = 3;}
		else if(Player.bundle5 == "none"){
			playerBundleLevelToAdd = 5;}
		else if(Player.bundle7 == "none"){
			playerBundleLevelToAdd = 7;}
		else if(Player.bundle9 == "none"){
			playerBundleLevelToAdd = 9;}
		else if(Player.bundle11 == "none"){
			playerBundleLevelToAdd = 11;}
		else if(Player.bundle13 == "none"){
			playerBundleLevelToAdd = 13;}
		else if(Player.bundle15 == "none"){
			playerBundleLevelToAdd = 15;}
		else if(Player.bundle17 == "none"){
			playerBundleLevelToAdd = 17;}
		else if(Player.bundle19 == "none"){
			playerBundleLevelToAdd = 19;}
		Player["bundle" + playerBundleLevelToAdd] = bundleObject.name;}
		
	Player.getLastBundle = function(){
		var bundleName = "Start";
		if(Player.bundle19 != "none"){
			bundleName = Player.bundle19;}
		else if(Player.bundle17 != "none"){
			bundleName = Player.bundle17;}
		else if(Player.bundle15 != "none"){
			bundleName = Player.bundle15;}
		else if(Player.bundle13 != "none"){
			bundleName = Player.bundle13;}
		else if(Player.bundle11 != "none"){
			bundleName = Player.bundle11;}
		else if(Player.bundle9 != "none"){
			bundleName = Player.bundle9;}
		else if(Player.bundle7 != "none"){
			bundleName = Player.bundle7;}
		else if(Player.bundle5 != "none"){
			bundleName = Player.bundle5;}
		else if(Player.bundle3!= "none"){
			bundleName = Player.bundle3;}
		else if(Player.bundle2 != "none"){
			bundleName = Player.bundle2;}
		else if(Player.bundle1 != "none"){
			bundleName = Player.bundle1;}
		print("Found last bundle: " + bundleName);
		return Bundles[bundleName];}
		

	

	
