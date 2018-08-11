
	var Armors = {};
	
	function Stats(){
		this.strength		 = 0;
		this.dexterity	     = 0;
		this.constitution    = 0;
		this.wisdom		     = 0;
		this.charisma		 = 0;
		this.intelligence    = 0;
		this.athletics 		 = 0;
		this.acrobatics 	 = 0;
		this.craft 			 = 0;
		this.sleightofhand 	 = 0;
		this.stealth 		 = 0;
		this.userope 		 = 0;
		this.survival 		 = 0;
		this.luck 			 = 0;
		this.arcana 		 = 0;
		this.biology 		 = 0;
		this.history 		 = 0;
		this.knowledge 		 = 0;
		this.nature 		 = 0;
		this.animalhandling  = 0;
		this.insight 		 = 0;
		this.investigation 	 = 0;
		this.perception 	 = 0;
		this.religion 		 = 0;
		this.deception 		 = 0;
		this.intimidation 	 = 0;
		this.persuasion 	 = 0;
		this.performance 	 = 0;
		this.movementSpeed	 = 0;
		this.initiative		 = 0;
		
		this.addStatsToPlayer = function(){
			print("Adding stats...");
			forEachElementInObject(this, function(object, key){ if(key != "addStatsToPlayer") Player[key] += object[key];});}}

	function Armor(Name, AC, IconPath, Description){
		Armors[Name] = this;
		this.name = Name;
		this.ac = AC;
		this.iconPath = IconPath;
		this.desc = Description;
		this.stats = new Stats();}
		

		
		
	new Armor("Unarmored", 0,
			"Images/Icons/unarmored.png",
			"Armor Bonus: Equal to your Dexterity<br><br>You gain +5 movement speed and +2 in Acrobatics.<br><br>" + inRedSpan("You take 50% more Piercing and Slashing damage."));
	Armors["Unarmored"].stats.movementSpeed = 5;
	Armors["Unarmored"].stats.acrobatics = 2;
	
	new Armor("Common Clothes", 1,
			"Images/Icons/common_clothes.png",
			"Armor Bonus: 1<br><br>You have +3 Luck.");
	Armors["Common Clothes"].stats.luck = 3;
	
	new Armor("Robes", 1,
			"Images/Icons/robes.png",
			"Armor Bonus: 1<br><br>You gain +2 Initiative and 1 bonus Recharge Point (not auto-calculated)<br><br>" + inRedSpan("-3 Acrobatics"));
	Armors["Robes"].stats.initiative = 2;
	Armors["Robes"].stats.acrobatics = -3;
			
	new Armor("Padded", 1,
			"Images/Icons/padded.png",
			"Armor Bonus: 1<br><br>+2 Stealth<br><br>" + inRedSpan("-3 on swimming rolls"));
	Armors["Padded"].stats.stealth = 2;
	
	new Armor("Leather Armor", 2,
			"Images/Icons/leather.png",
			"Armor Bonus: 2<br><br>You gain +1 Stealth and +2 initiative.");
	Armors["Leather Armor"].stats.stealth = 1;
	Armors["Leather Armor"].stats.initiative = 2;
			
	new Armor("Hide Armor", 2,
			"Images/Icons/hide_armor.png",
			"Armor Bonus: 2<br><br>You gain +2 Survival and you take 50% less fall damage.<br><br>" + inRedSpan("You take 50% more fire damage."));
	Armors["Hide Armor"].stats.survival = 2;

	new Armor("Splint Armor", 3,
		"Images/Icons/splint_armor.png",
		"Armor Bonus: 3<br><br>You gain +2 Athletics and +5 movement speed.<br><br>" + inRedSpan("You have -4 initiative"));
	Armors["Splint Armor"].stats.athletics = 2;
	Armors["Splint Armor"].stats.movementSpeed = 5;
	Armors["Splint Armor"].stats.initiative = -4;
	
	new Armor("Chain Mail", 3,
			"Images/Icons/chain_mail.png",
			"Armor Bonus: 3<br><br>" + inRedSpan("-4 Stealth"));
	Armors["Chain Mail"].stats.stealth = -4;

	new Armor("Plate", 5,
			"Images/Icons/plate.png",
			"Armor Bonus: 5<br><br>+2 Intimidation<br><br>" + inRedSpan("-5 on Stealth and Acrobatics and -5 movement speed"));
	Armors["Plate"].stats.intimidation = 2;
	Armors["Plate"].stats.stealth = -5;
	Armors["Plate"].stats.acrobatics = -5;
	Armors["Plate"].stats.movementSpeed = -5;
	
			

	