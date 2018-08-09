
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
	