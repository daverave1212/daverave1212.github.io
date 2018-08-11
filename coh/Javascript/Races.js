
	var Races = {};

	function LevelBonus(Description, AbilitiesArray){
		this.description = Description;
		this.abilities = AbilitiesArray;}
	
	function Race(Name, Description,
				  ImageMalePath, ImageFemalePath, IconPath,
				  MovementSpeed, Languages, BaseHealth, RaceSize,
				  SkillBonuses,
				  SkillMinuses,
				  AbilitiesArray,
				  Level2Bonus,
				  Level4Bonus,
				  Level6Bonus,
				  Level8Bonus,
				  Level10Bonus,
				  Level12Bonus,
				  Level14Bonus,
				  Level16Bonus,
				  Level18Bonus,
				  Level20Bonus){
		Races[Name] = this;
		this.name			= Name;
		this.description	= Description;
		this.imageMalePath	= ImageMalePath;
		this.imageFemalePath= ImageFemalePath;
		this.iconPath		= IconPath;
		this.movementSpeed	= MovementSpeed;
		this.languages		= Languages;
		this.baseHealth		= BaseHealth
		this.size			= RaceSize;
		this.skillBonuses	= SkillBonuses;
		this.skillMinuses	= SkillMinuses;
		this.abilities		= AbilitiesArray;
		this.level2Bonus	= Level2Bonus;
		this.level4Bonus	= Level4Bonus;
		this.level6Bonus	= Level6Bonus;
		this.level8Bonus	= Level8Bonus;
		this.level10Bonus	= Level10Bonus;
		this.level12Bonus	= Level12Bonus;
		this.level14Bonus	= Level14Bonus;
		this.level16Bonus	= Level16Bonus;
		this.level18Bonus	= Level18Bonus;
		this.level20Bonus	= Level20Bonus;		
		}
		
		
	/*new Race(
		"Blood Elf", "Blood elves are the best race ever. They are hot and nice and can silence people like pls",
		"https://vignette.wikia.nocookie.net/oustomiaworld/images/8/89/Elf.png/revision/latest?cb=20160304091759",
		"https://vignette.wikia.nocookie.net/elysiumrp/images/2/20/Mage.png/revision/latest?cb=20161207033721",
		"https://cdnb.artstation.com/p/assets/images/images/007/676/815/large/glenn-rane-wowx-cover-bloodelf-thefinal-copy.jpg?1507782522",
		30, "Common + Elvish", 8, "Medium",
		["Arcana", "Athletics", "Knowledge"],
		[Abilities["agile"], Abilities["frost_stance"]],
		new LevelBonus("No special bonus", []),
		new LevelBonus("You gain the following ability:", [Abilities["action_surge"]]),
		new LevelBonus("You gain +1 Armor agains spell attacks", []),
		new LevelBonus("You have Advantage on saves against Silences and Roots", []),
		new LevelBonus("You have 50% resistance against Force spell damage", []),
		new LevelBonus("You gain +1d6 bonus on all attacks", []),
		new LevelBonus("You have 50% resistance against Thunder spell damage", []),
		new LevelBonus("You gain the following ability:", [Abilities["agile"]]),
		new LevelBonus("You are op, congrats m8", []),
		new LevelBonus("Jesus lol", [Abilities["agile"], Abilities["agile"]]));	
	*/
	
	new Race(
		"Loxen", "The name of Loxen reaches far through kingdoms, in the most luxurious bazaars, or the fiercest proving grounds, making Loxen among the best traders and combat experts.<br>Everybody knows the saying: Don't steal from the loxen. And for good reason. Loxen respect their trade as more than a form of art. It is a way of living. Shedding blood is unnecessary, and punishment shall be given through permanent exilation from their home tribe or town.<br>Loxen usually have cities in warm places, such as deserts and tropical forests, but that's not to say Loxen establishments don't also exist high in the cold mountains... it's just that many who live there have forgotten what principles they should follow as trueborn Loxen.",
		"Images/Characters/loxen_male.png",
		"Images/Characters/loxen_female.png",
		"Images/Characters/loxen_icon.png",
		30, "Common, Loxen and 1 common language of choice", 9, "Medium",
		["Acrobatics", "Stealth", "Persuasion"],
		["Deception", "Sleight of Hand", "Animal Handling"],
		[Abilities["loxen_senses"], Abilities["lion_roar"]],
		new LevelBonus("Your fall damage is reduced by 50%.", []),
		new LevelBonus("You gain Action Surge:", [Abilities["action_surge"]]),
		new LevelBonus("Your damage with 2-Handed weapons increases by 1d6, and your damage with 1-Handed weapons increases by 2.", []),
		new LevelBonus("You gain Claw Flurry:", [Abilities["claw_flurry"]]),
		new LevelBonus("Your base Armor increases by 1 and your movement speed by 5 feet.", []),
		new LevelBonus("Your damage with 2-Handed weapons increases by an additional 1d6 (to +2d6), and your bonus damage with 1-Handed weapons increases to 4 (instead of 2).", []),
		new LevelBonus("You can now use Action Surge, Lion Roar and Claw Flurry up to twice per day.", []),
		new LevelBonus("Your base health increases by 10. Your 5 weakest Skills increase by 2.", []),
		new LevelBonus("Your damage with 2-Handed weapons increases by an additional 1d6 (to +3d6), and your bonus damage with 1-Handed weapons increases to 5", []),
		new LevelBonus("You can now perform up to 2 Actions in total per turn by default.", []))
	
	new Race(
		"Bertle", "Probably the fluffiest of all races, the Bertles are bipedal rabbits who can even hold weapons in their paws (hands). Their fur color can vary from white to brown or red and some choose to dye their fluff pink, blue or other colors.\nTheir eyes can be of any color from the visible color spectrum and their height ranges from 1 meter to up to 1.80 meters, depending on the region and breed.\nBertles live mostly in rural farms and steads. Their societies are not build around war and leadership, and so bertle towns and villages are autonomous. In bertle societies, there are no kings or magistrates and the gap between poverty and luxury is extremely tight, as bertles don’t value money as much as they value integration in society and a good living. They make a living from farming, building, and other such activities and they have no internal currency. Every transaction is made by trading goods: 1 melon for a pumpkin? That’s a deal!\nThere are, however, guilds of bertles who train in fights. The most common fighting proffession for bertles is Bounty Hunter. These are individuals trained in combat agains monsters terrorizing the people, goblins, ogres and other creatures alike who disturb the 99.993% peaceful bertle villages.",
		"Images/Characters/bertle_male.png",
		"Images/Characters/bertle_female.png",
		"Images/Characters/bertle_icon.png",
		35, "Common and 1 Common language of choice", 7, "Small to Medim",
		["Animal Handling", "Perception", "Acrobatics"],
		["Intimidation", "Survival", "Athletics"],
		[Abilities["rabbit_foot"], Abilities["natural_enemy"]],
		new LevelBonus("", []),
		new LevelBonus("You gain Action Surge:", [Abilities["action_surge"]]),
		new LevelBonus("Your damage with 2-Handed weapons increases by 1d6, and your damage with 1-Handed weapons increases by 2.", []),
		new LevelBonus("You can now use Natural Enemy twice per day and you gain an additional +5 movement speed", []),
		new LevelBonus("Your base Armor increase by 1 and your Initiative by 2.", []),
		new LevelBonus("Your damage with 2-Handed weapons increases by an additional 1d6 (to +2d6), and your bonus damage with 1-Handed weapons increases to 4 (instead of 2).", []),
		new LevelBonus("You can now use Action Surge twice per day, and the damage of Natural Enemy increases to 3d8.", []),
		new LevelBonus("Your base health increases by 10. Your 5 weakest Skills increase by 2.", []),
		new LevelBonus("Your damage with 2-Handed weapons increases by an additional 1d6 (to +3d6), and your bonus damage with 1-Handed weapons increases to 5", []),
		new LevelBonus("You can now perform up to 2 Actions in total per turn by default.", []))

	new Race("Dwarf",	// name
		"'Shut up and bring me some ale!'<br>Halgan Dungroth, the Drunk King, on his wedding day, when asked to take his vows.<br>If dwarves don’t know how to both brawl and celebrate, then nobody deserves to. Long lived and strong, the Dwarves have always made their home wherever they settled, be it a rough underground gold mine or the picturesque landscapes of the seaside.<br>Long or short bearded, brawny or fat, courageous or coward, any dwarf is welcome at the table!<br>Ancient and bulky, the dwarves were abandoned prototypes who weren’t fit to rule the earth in the view of gods. Dwarves turned out too short and wide and too slow. Good temper control, however, proved a very useful tool in forgetting their past, together with some fine old ale!<br>That is no longer a sterotype of dwarves, as they have evolved very closely to humans, elves and other races.<br>What they have kept over time, however, was their undesirable bane and longevity: dwarves need 12 hours of sleep per day as opposed to most other creatures. Any less than that can lead to exhaustion. This made dwarves retreat into mines and giant underground cities to escape the possible 18 hours of sunlight per day, which would disturb their circadian rythm.<br>A useful trait of dwarves is that their bones are as tough as steel. Dwarves are hard to kill in combat because of this. Medicine became a problem among dwarves since surgeries could often not be performed due to this flaw. Most dwarves turn to magic to cure whatever they have to cure, or to divine gods who still wish to help become the best version of themselves. Dwarves worship a very narrow range of gods, because those are the only ones who wish to help them in their deeds. Such gods probably include benevolent gods of earth, gods of metalworking and gods of time and stagnation, as they can more closely empathize with dwarves.", // desc
		"Images/Characters/dwarf_male.png", // image male
		"Images/Characters/dwarf_female.png", // image female
		"Images/Characters/dwarf_icon.png", // icon
		25, "Common and Dwarvish", 13, "Medium",	// speed, langs, hp, size
		["Athletics", "Craft", "History"],	// bonuses
		["Acrobatics", "Perception", "Stealth"],	// minuses
		[Abilities["strong_bones"], Abilities["tough"]],
		new LevelBonus("", []),
		new LevelBonus("You gain Action Surge:", [Abilities["action_surge"]]),
		new LevelBonus("Your damage with 2-Handed weapons increases by 1d6, and your damage with 1-Handed weapons increases by 2.", []),
		new LevelBonus("You become completely immune to regular poison damage. You also gain Headbutt.", [Abilities["headbutt"]]),
		new LevelBonus("Your base Armor increase by 2.", []),
		new LevelBonus("Your damage with 2-Handed weapons increases by an additional 1d6 (to +2d6), and your bonus damage with 1-Handed weapons increases to 4 (instead of 2).", []),
		new LevelBonus("You can now use Action Surge twice per day, and Headbutt saves are thrown with Disadvantage.", []),
		new LevelBonus("Your base health increases by 10. Your 5 weakest Skills increase by 2.", []),
		new LevelBonus("Your damage with 2-Handed weapons increases by an additional 1d6 (to +3d6), and your bonus damage with 1-Handed weapons increases to 5", []),
		new LevelBonus("You can now perform up to 2 Actions in total per turn by default.", []));

/*		
	new Race("",	// name
		"", // desc
		"Images/Characters/_male.png", // image male
		"Images/Characters/_female.png", // image female
		"Images/Characters/_icon.png", // icon
		, "Common", , "Medium",	// speed, langs, hp, size
		["", "", ""],	// bonuses
		["", "", ""],	// minuses
		[Abilities[""], Abilities[""]],
		new LevelBonus("", []),
		new LevelBonus("You gain Action Surge:", [Abilities["action_surge"]]),
		new LevelBonus("Your damage with 2-Handed weapons increases by 1d6, and your damage with 1-Handed weapons increases by 2.", []),
		new LevelBonus("", []),
		new LevelBonus("Your base Armor increase by 1 and", []),
		new LevelBonus("Your damage with 2-Handed weapons increases by an additional 1d6 (to +2d6), and your bonus damage with 1-Handed weapons increases to 4 (instead of 2).", []),
		new LevelBonus("You can now use Action Surge twice per day, and ", []),
		new LevelBonus("Your base health increases by 10. Your 5 weakest Skills increase by 2.", []),
		new LevelBonus("Your damage with 2-Handed weapons increases by an additional 1d6 (to +3d6), and your bonus damage with 1-Handed weapons increases to 5", []),
		new LevelBonus("You can now perform up to 2 Actions in total per turn by default.", []));
		
	new Race("",	// name
		"", // desc
		"Images/Characters/_male.png", // image male
		"Images/Characters/_female.png", // image female
		"Images/Characters/_icon.png", // icon
		, "Common", , "Medium",	// speed, langs, hp, size
		["", "", ""],	// bonuses
		["", "", ""],	// minuses
		[Abilities[""], Abilities[""]],
		new LevelBonus("", []),
		new LevelBonus("You gain Action Surge:", [Abilities["action_surge"]]),
		new LevelBonus("Your damage with 2-Handed weapons increases by 1d6, and your damage with 1-Handed weapons increases by 2.", []),
		new LevelBonus("", []),
		new LevelBonus("Your base Armor increase by 1 and", []),
		new LevelBonus("Your damage with 2-Handed weapons increases by an additional 1d6 (to +2d6), and your bonus damage with 1-Handed weapons increases to 4 (instead of 2).", []),
		new LevelBonus("You can now use Action Surge twice per day, and ", []),
		new LevelBonus("Your base health increases by 10. Your 5 weakest Skills increase by 2.", []),
		new LevelBonus("Your damage with 2-Handed weapons increases by an additional 1d6 (to +3d6), and your bonus damage with 1-Handed weapons increases to 5", []),
		new LevelBonus("You can now perform up to 2 Actions in total per turn by default.", []));
		
	new Race("",	// name
		"", // desc
		"Images/Characters/_male.png", // image male
		"Images/Characters/_female.png", // image female
		"Images/Characters/_icon.png", // icon
		, "Common", , "Medium",	// speed, langs, hp, size
		["", "", ""],	// bonuses
		["", "", ""],	// minuses
		[Abilities[""], Abilities[""]],
		new LevelBonus("", []),
		new LevelBonus("You gain Action Surge:", [Abilities["action_surge"]]),
		new LevelBonus("Your damage with 2-Handed weapons increases by 1d6, and your damage with 1-Handed weapons increases by 2.", []),
		new LevelBonus("", []),
		new LevelBonus("Your base Armor increase by 1 and", []),
		new LevelBonus("Your damage with 2-Handed weapons increases by an additional 1d6 (to +2d6), and your bonus damage with 1-Handed weapons increases to 4 (instead of 2).", []),
		new LevelBonus("You can now use Action Surge twice per day, and ", []),
		new LevelBonus("Your base health increases by 10. Your 5 weakest Skills increase by 2.", []),
		new LevelBonus("Your damage with 2-Handed weapons increases by an additional 1d6 (to +3d6), and your bonus damage with 1-Handed weapons increases to 5", []),
		new LevelBonus("You can now perform up to 2 Actions in total per turn by default.", []));
		
	new Race("",	// name
		"", // desc
		"Images/Characters/_male.png", // image male
		"Images/Characters/_female.png", // image female
		"Images/Characters/_icon.png", // icon
		, "Common", , "Medium",	// speed, langs, hp, size
		["", "", ""],	// bonuses
		["", "", ""],	// minuses
		[Abilities[""], Abilities[""]],
		new LevelBonus("", []),
		new LevelBonus("You gain Action Surge:", [Abilities["action_surge"]]),
		new LevelBonus("Your damage with 2-Handed weapons increases by 1d6, and your damage with 1-Handed weapons increases by 2.", []),
		new LevelBonus("", []),
		new LevelBonus("Your base Armor increase by 1 and", []),
		new LevelBonus("Your damage with 2-Handed weapons increases by an additional 1d6 (to +2d6), and your bonus damage with 1-Handed weapons increases to 4 (instead of 2).", []),
		new LevelBonus("You can now use Action Surge twice per day, and ", []),
		new LevelBonus("Your base health increases by 10. Your 5 weakest Skills increase by 2.", []),
		new LevelBonus("Your damage with 2-Handed weapons increases by an additional 1d6 (to +3d6), and your bonus damage with 1-Handed weapons increases to 5", []),
		new LevelBonus("You can now perform up to 2 Actions in total per turn by default.", []));
		
	new Race("",	// name
		"", // desc
		"Images/Characters/_male.png", // image male
		"Images/Characters/_female.png", // image female
		"Images/Characters/_icon.png", // icon
		, "Common", , "Medium",	// speed, langs, hp, size
		["", "", ""],	// bonuses
		["", "", ""],	// minuses
		[Abilities[""], Abilities[""]],
		new LevelBonus("", []),
		new LevelBonus("You gain Action Surge:", [Abilities["action_surge"]]),
		new LevelBonus("Your damage with 2-Handed weapons increases by 1d6, and your damage with 1-Handed weapons increases by 2.", []),
		new LevelBonus("", []),
		new LevelBonus("Your base Armor increase by 1 and", []),
		new LevelBonus("Your damage with 2-Handed weapons increases by an additional 1d6 (to +2d6), and your bonus damage with 1-Handed weapons increases to 4 (instead of 2).", []),
		new LevelBonus("You can now use Action Surge twice per day, and ", []),
		new LevelBonus("Your base health increases by 10. Your 5 weakest Skills increase by 2.", []),
		new LevelBonus("Your damage with 2-Handed weapons increases by an additional 1d6 (to +3d6), and your bonus damage with 1-Handed weapons increases to 5", []),
		new LevelBonus("You can now perform up to 2 Actions in total per turn by default.", []));
		
	new Race("",	// name
		"", // desc
		"Images/Characters/_male.png", // image male
		"Images/Characters/_female.png", // image female
		"Images/Characters/_icon.png", // icon
		, "Common", , "Medium",	// speed, langs, hp, size
		["", "", ""],	// bonuses
		["", "", ""],	// minuses
		[Abilities[""], Abilities[""]],
		new LevelBonus("", []),
		new LevelBonus("You gain Action Surge:", [Abilities["action_surge"]]),
		new LevelBonus("Your damage with 2-Handed weapons increases by 1d6, and your damage with 1-Handed weapons increases by 2.", []),
		new LevelBonus("", []),
		new LevelBonus("Your base Armor increase by 1 and", []),
		new LevelBonus("Your damage with 2-Handed weapons increases by an additional 1d6 (to +2d6), and your bonus damage with 1-Handed weapons increases to 4 (instead of 2).", []),
		new LevelBonus("You can now use Action Surge twice per day, and ", []),
		new LevelBonus("Your base health increases by 10. Your 5 weakest Skills increase by 2.", []),
		new LevelBonus("Your damage with 2-Handed weapons increases by an additional 1d6 (to +3d6), and your bonus damage with 1-Handed weapons increases to 5", []),
		new LevelBonus("You can now perform up to 2 Actions in total per turn by default.", []));
		
*/