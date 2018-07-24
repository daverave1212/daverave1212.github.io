
	var Races = {};

	function LevelBonus(Description, AbilitiesArray){
		this.description = Description;
		this.abilities = AbilitiesArray;}
	
	function Race(Name, Description,
				  ImageMalePath, ImageFemalePath, IconPath,
				  MovementSpeed, Languages, BaseHealth, RaceSize,
				  SkillBonuses,
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
		this.level20Bonus	= Level18Bonus;		
		}
		
		
	new Race(
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
	