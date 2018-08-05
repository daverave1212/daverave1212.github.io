
	var Player = {				// contains only strings and numbers
		"name"			: "",
								// Parameters as:
		"strength"		: 0,	// str
		"dexterity"		: 0,	// dex
		"intelligence"	: 0,	// int
		"constitution"	: 0,	// con
		"wisdom"		: 0,	// wis
		"charisma"		: 0,	// cha
		
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
		Player.bundle1 		= Parameters["b1"];
		Player.bundle2 		= Parameters["b2"];
		Player.bundle3 		= Parameters["b3"];
		Player.bundle5 		= Parameters["b5"];
		Player.bundle7 		= Parameters["b7"];
		Player.bundle9 		= Parameters["b9"];
		Player.bundle11 	= Parameters["b11"];
		Player.bundle13 	= Parameters["b13"];
		Player.bundle15 	= Parameters["b15"];
		Player.bundle17 	= Parameters["b17"];
		Player.bundle19 	= Parameters["b19"];
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
		return Bundles[bundleName];}
	

	
