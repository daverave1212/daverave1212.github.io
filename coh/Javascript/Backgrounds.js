
	var Backgrounds = {};
	
	function Background(Name, Title, ShortDesc, LongDesc,
						OtherBonuses, SkillBonuses, SkillMinuses, Abilities, Gold, Items,
						IconPath){
		Backgrounds[Name]	= this;
		this.name			= Name;
		this.title			= Title;
		this.shortDesc		= ShortDesc;
		this.longDesc		= LongDesc;
		this.otherBonuses	= OtherBonuses;
		this.skillBonuses	= SkillBonuses;
		this.skillMinuses	= SkillMinuses;
		this.abilities		= Abilities;
		this.gold			= Gold;
		this.items			= Items;
		this.iconPath		= IconPath;}
	
	// Identical to the abilities (almost)
	function createBackgroundElement(background){
		var backgroundWrapper = createElement("div");
		backgroundWrapper.setAttribute("class", "BackgroundWrapper");
		backgroundWrapper.setAttribute("name", background.name);
		var backgroundWrapperLeft = createElement("div");
		backgroundWrapperLeft.setAttribute("class", "AbilityWrapperLeft");
		var backgroundIcon = createImage(background.iconPath);
		backgroundIcon.setAttribute("class", "AbilityIcon");
		backgroundWrapperLeft.appendChild(backgroundIcon);
		var backgroundWrapperRight = createElement("div");
		backgroundWrapperRight.setAttribute("class", "AbilityWrapperRight");
		backgroundWrapperRight.innerHTML = background.name + "<br><br>" + background.shortDesc;
		backgroundWrapper.appendChild(backgroundWrapperLeft);
		backgroundWrapper.appendChild(backgroundWrapperRight);
		return backgroundWrapper;}
		

	new Ability("Acolyte : Passive", "You must choose a god to follow, from the Call of Heroes pantheon or your DM's world's pantheon.<br>You have 50% discount on items specifically related to being a temple.<br>You can get free (minimum necessary) food, water and shelter at churches or temples specific to your god for all of your party, though the conditions are not the best.")
	new Ability("Divine Sense : 0 Actions", "You sense whether there are unholy beings or energies around you in a 60 foot radius.");
	new Background("Acolyte",	// name
		"Servant of the Temple",	// title
		"A man of the church. A mistress of the gods. Or a corrupt priest overcome by gluttony and greed.", // short desc
		"You have spent your life in the service of a temple to a specific god or pantheon of gods. Choose a god, a pantheon of gods, or some other quasi-divine being, and work with your DM to detail the nature of your religious service.",	// long desc
		"You must choose a god to follow.",	// extra desc (optional)
		["Insight", "Religion", "Performance"],	// bonuses
		["Intimidation", "Biology", "Luck"],	// minuses
		[Abilities["acolyte"], Abilities["divine_sense"]],
		15,	// gold
		["Holy Symbol", "5 Sticks of Incense", "Book of Prayers"], // items
		"Images/Icons/acolyte.png"	// icon
	);
	
	new Ability("Charlatan : Passive", "You have +2 on Sleight of Hand checks when trying to cheat at games.<br>Once per week, if in a developed city, you can roll a Sleight of Hand check and gain gold equal to what you rolled.");
	new Ability("Disguise : 1 Action", "Using 50 gold worth of materials, you can disguise yourself to look like someone else. If you have to roll for this, roll with Advantage.");
	new Background("Charlatan",	// name
		"'People's Person'",	// title
		"You know what people want and you deliver, or rather, you promise to deliver.", // short desc
		"You have always had a way with people. You know what makes them tick. It's a useful talent, and one that you're perfectly willing to use for your advantage.",	// long desc
		"",	// extra desc (optional)
		["Sleight of Hand", "Deception", "Insight"],	// bonuses
		["Luck", "Animal Handling", "Intimidation"],	// minuses
		[Abilities["charlatan"], Abilities["disguise"]],
		45,	// gold
		["Cheating tools of your choice, such as wieghted dice, unusual coins or deck of cards, etc", "Fine Clothes"], // items
		"Images/Icons/charlatan.png"	// icon
	);

	new Ability("Criminal : Passive", "You can gather information on criminal activities by spending one day in a city, investigating it.<br>You have +2 on Persuasion when trying to negotiate an illegal deal.");
	new Ability("Stalk : 1 Action", "Pick a person you can see. If the target is alone, you can follow it and know it's location for up to 4 hours, without being detected (in normal conditions).");
	new Background("Criminal",	// name
		"Law Breaker",	// title
		"Everyone has a dark side. I just embrace mine...", // short desc
		"You're far closer than most people to the world of murder, theft, and violence that pervades the underbelly of civilization, and you have survived up to this point by flouting the rules and regulations of society.",	// long desc
		"",	// extra desc (optional)
		["Stealth", "Deception", "Investigation"],	// bonuses
		["History", "Performance", "Religion"],	// minuses
		[Abilities["criminal"], Abilities["stalk"]],
		40,	// gold
		["Dark Hood", "Pocket Knife", "Crowbar", "25 Fake Gold Coins"], // items
		"Images/Icons/criminal.png"	// icon
	);

	new Ability("Entertainer : Passive", "You must have an entertaining method of chioce.<br><br>Once per day, if you are in a tavern, you can roll a Performance check. You gain (Rolled / 4) gold for entertaning the public.");
	new Ability("Sense Mood : 0 Actions", "Pick a target you can see and hear. You can tell the target's mood, such as if it's angry, sad, happy, in love, etc.");
	new Ability("Rest Performance : Only while resting", "Heal all allies around you for 1d4. You can do this every rest.");
	new Background("Entertainer",	// name
		"The Center of Attention",	// title
		"We don't make mistakes, just happy little accidents...", // short desc
		"You thrive in front of an audience with you majestic lute, stunts or vocal mastery. Whatever techniques you use, your art is your life.",	// long desc
		"",	// extra desc (optional)
		["Luck", "Acrobatics", "Performance"],	// bonuses
		["Survival", "Animal Handling", "Intimidation"],	// minuses
		[Abilities["entertainer"], Abilities["sense_mood"], Abilities["rest_performance"]],
		20,	// gold
		["Instrument of Choice", "Entertainer Costume", "Pocket Knife"], // items
		"Images/Icons/entertainer.png"	// icon
	);
	
	new Ability("Folk Hero : Passive", "As a man of the people, you are known far and wide! (or not). Every person you meet has a chance to know you or to have heard about you if it's in your local area, and word about you spreads more quickly than usual.<br>Once per week, you can request prosivions from local folk, such as food, water and shelter for up to 3 days, new clothes.<br>You know the locations of taverns, inns and other such places around.<br>You get 50% discount on all services provided at taverns.<br>" + inRedSpan("You have -5 on Deception rolls agains common folk.") + "<br>" + inGraySpan("<i>As a DM, you can keep track of a character's reputation and roll a d20 to see if a person knows about the folk hero. If the folk hero character has 5 reputation, then the person must roll equal to or below 5 to know the folk hero.</i>"));
	new Background("Folk Hero",	// name
		"Champion of the People",	// title
		"Destiny calls you to stand against the tyrants and monsters that threaten the common folk!", // short desc
		"You previously pursued a simple profession among the peasantry, perhaps as a farmer, miner, servant, shepherd, woodcutter, or gravedigger. But something happened that set you on a different path and marked you for greater things.",	// long desc
		"",	// extra desc (optional)
		["Animal Handling", "Survival", "Luck"],	// bonuses
		["Deception", "Arcana", "Stealth"],	// minuses
		[Abilities["folk_hero"]],
		20,	// gold
		["A Riding Horse or a non-combat dog", "Clothes, soap and deodorant", "Hatchet"], // items
		"Images/Icons/folk_hero.png"	// icon
	);
	
	new Ability("Folk Villain : Passive", "You have +2 Stealth against common folk and +2 on Knowledge regarding local myths, legends and problems.");
	new Ability("Leave Mark : 0 Actions", "You can leave special mark on a tree, rock or ground. Those who see that mark are less likely to continue going ahead.<br>You can do this twice per day.");
	new Background("Folk Villain",	// name
		"The Living Myth",	// title
		"Legend says about you and your malevolent deeds, about your plots and mischieves...", // short desc
		"You are notorious among common folk. People have heard about you, but many have not seen it with their own eyes. They talk about the lord in the black temple, the lone savage in the forest or the wizard atop the tower, in the center of the town.",	// long desc
		"",	// extra desc (optional)
		["Knowledge", "Stealth", "Investigation"],	// bonuses
		["Luck", "Persuasion", "Sleight of Hand"],	// minuses
		[Abilities["folk_villain"], Abilities["leave_mark"]],
		"2d20",	// gold
		["Special Symbol", "A bird or cat, non-combat companion (non-magical)"], // items
		"Images/Icons/folk_villain.png"	// icon
	);

	new Ability("Knight : Passive", "You serve or used to serve as the Knight of a noble or important person.<br>You have 25% discount on buying horses or mounts.<br>You also have 25% discount on blacksmith services.");
	new Ability("Vow : Lifetime", "You may vow upon the completion of a non-trivial mission or task. Succeeding rewards you with 1 Inspiration. Failing takes away 1 Inspiration, and your Inspiration can go below 0. If you have 0 or negative Inspiration, you have to gain Inspiration to compensate until you reach 1 to be able to use it again.");
	new Background("Knight",	// name
		"Paragon of Chivalry",	// title
		"A privilege to be respected by others, but also to respect yourself...", // short desc
		"A knight is a person granted an honorary title of knighthood by a monarch, bishop or noble, in return of your total servitude, in both combat and noble duty.",	// long desc
		"",	// extra desc (optional)
		["Athletics", "History", "Performance"],	// bonuses
		["Deception", "Nature", "Craft"],	// minuses
		[Abilities["knight"], Abilities["vow"]],
		50,	// gold
		["Riding Horse", "Banner", "Symbol or Signet", "Special Decorative Shield"], // items
		"Images/Icons/knight.png"	// icon
	);
	
	new Ability("Noble : Passive", "You can speak 1 more common language of choice.");
	new Ability("A Bird in Hand", "Before you roll a Charisma check againt a regular person, you can pay 25 gold and roll with Advantage.");
	new Background("Noble",	// name
		"The Aristocrat",	// title
		"Is your family old and established, or was your title only recently bestowed? ", // short desc
		"You might be a pampered aristocrat unfamiliar with work or discomfort, a former merchant just elevated to the nobility, or a disinherited scoundrel with a disproportionate sense of entitlement. Or you could be an honest, hard-working landowner.",	// long desc
		"",	// extra desc (optional)
		["History", "Persuasion", "Knowledge", "Insight"],	// bonuses
		["Performance", "Craft", "Animal Handling"],	// minuses
		[Abilities["noble"], Abilities["a_bird_in_hand"]],
		150,	// gold
		["Fine Clothes", "Scroll of Pedigree", "Golden Ring or Necklace"], // items
		"Images/Icons/noble.png"	// icon
	);	
	
	new Ability("Outlander : Passive", "Choose a terrain type (ex: forest, desert, mountains). While in that terrain type, you can only get lost by magical means.<br>When in an unknown territory, you can roll an Insight check. If you succeed, you know whether you are trespassing or not.");
	new Ability("Procure Item : Only while resting", "You can produce a random item specific to the zone you are into.");
	new Background("Outlander",	// name
		"The Lone Wolf",	// title
		"Few live to see the beauty of these lands, for they can't see the forest from the trees.", // short desc
		"You grew up in the wilds. You've witnessed the migration of herds larger than forests, survived weather more extreme than any city-dweller could comprehend, and enjoyed the solitude of being the only thinking creature for miles in any direction.",	// long desc
		"",	// extra desc (optional)
		["Athletics", "Survival", "Nature", "Biology"],	// bonuses
		["Knowledge", "History", "Deception", "Persuasion"],	// minuses
		[Abilities["outlander"], Abilities["procure_item"]],
		0,	// gold
		["Rags", "Makeshift Hunting Trap", "Staff"], // items
		"Images/Icons/outlander.png"	// icon
	);	
	
	new Ability("Sage : Passive", "You can speak 1 uncommon language o fchoice.<br>You have +2 on Arcana rolls for magic symbols or glyphs.");
	new Ability("Scribe : 1 hour", "Once per day, you can make an Arcana check to attempt to create a random magical scroll. You succeed if you roll equal to or above 22.");
	new Background("Sage",	// name
		"Loremaster",	// title
		"Your efforts have made you a master in your fields of study.", // short desc
		"You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you.",	// long desc
		"",	// extra desc (optional)
		["Arcana", "History", "Knowledge"],	// bonuses
		["Athletics", "Stealth", "Persuasion"],	// minuses
		[Abilities["sage"], Abilities["scribe"]],
		20,	// gold
		["Blank Book", "Bottle of Ink", "Quill"], // items
		"Images/Icons/sage.png"	// icon
	);	
	
	new Ability("Sailor : Passive", "You know your way around a ship or boat.<br>With you on board, ships travel 25% faster and you get 25% discount on voyages over water.<br>You have +2 to hit against water specific creatures.<br>You have +2 on Saves against water specific creatures.", "https://i.pinimg.com/originals/cc/ba/b1/ccbab1aa2a812c727b8ba50cf149a5eb.jpg");
	new Background(
		"Sailor", "Man of the Sea",
		"There's only one thing a man can be more in love with than a woman: the sea",
		"You sailed on a seagoing vessel for years. In that time, you faced down mighty storms, monsters of the deep, and those who wanted to sink your craft to the bottomless depths.",
		"",
		["Luck", "Perception", "Use Rope"],
		["Religion", "Biology", "Stealth"],
		[Abilities["sailor"]],
		35,
		["Sailor Clothes", "30 feet of rope", "A personal small boat, in a locaiton of your choosing", "Fishing Pole"],
		"https://i.pinimg.com/originals/cc/ba/b1/ccbab1aa2a812c727b8ba50cf149a5eb.jpg");
	
	new Ability("Soldier : Passive", "When rolling Perception for ambush, roll with Advantage.<br>You (only you) get paid 25% more for completing risky missions.");
	new Background("Soldier",	// name
		"Brother in Arms",	// title
		"War has been your life for as long as you care to remember...", // short desc
		"You trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield.",	// long desc
		"",	// extra desc (optional)
		["Athletics", "Acrobatics", "Survival"],	// bonuses
		["Nature", "Craft", "Sleight of Hand"],	// minuses
		[Abilities["soldier"]],
		50,	// gold
		["Insignia of Rank", "Trophy", "Spare Armor"], // items
		"Images/Icons/soldier.png"	// icon
	);


	
	new Ability("Urchin : Passive", "You know hidden or less known streets or passages around city.<br>You have +2 Stealth against guards.");
	new Ability("Hiding Pack : Reaction", "Before an ally makes a Stealth roll, you can add +2 to their roll if they are near you.");
	new Background("Urchin",	// name
		"Street Scoundrel",	// title
		"The streets have ears, eyes... they can hear, see and smell everything.", // short desc
		"You grew up on the streets. You had no one to watch over you or to provide for you, so you learned to provide for yourself. You fought fiercely over food and kept a constant watch out for other desperate souls who might steal from you.",	// long desc
		"",	// extra desc (optional)
		["Stealth", "Sleight of Hand"],	// bonuses
		["Luck", "Investigation", "Knowledge"],	// minuses
		[Abilities["urchin"], Abilities["hiding_pack"]],
		15,	// gold
		["Thieves' Tools", "Rags", "Pet Mouse", ""], // items
		"Images/Icons/urchin.png"	// icon
	);
	
	/*

	new Ability(" : Passive", "");
	new Ability("", "");
	new Background("",	// name
		"",	// title
		"", // short desc
		"",	// long desc
		"",	// extra desc (optional)
		["", "", ""],	// bonuses
		["", "", ""],	// minuses
		[Abilities[""], Abilities[""]],
		50,	// gold
		["", "", "", ""], // items
		"Images/Icons/.png"	// icon
	);

	new Background("",	// name
		"",	// title
		"", // short desc
		"",	// long desc
		"",	// extra desc (optional)
		["", "", ""],	// bonuses
		["", "", ""],	// minuses
		[Abilities[""], Abilities[""]],
		50,	// gold
		["", "", "", ""], // items
		"Images/Icons/.png"	// icon
	);

	new Background("",	// name
		"",	// title
		"", // short desc
		"",	// long desc
		"",	// extra desc (optional)
		["", "", ""],	// bonuses
		["", "", ""],	// minuses
		[Abilities[""], Abilities[""]],
		50,	// gold
		["", "", "", ""], // items
		"Images/Icons/.png"	// icon
	);

	new Background("",	// name
		"",	// title
		"", // short desc
		"",	// long desc
		"",	// extra desc (optional)
		["", "", ""],	// bonuses
		["", "", ""],	// minuses
		[Abilities[""], Abilities[""]],
		50,	// gold
		["", "", "", ""], // items
		"Images/Icons/.png"	// icon
	);

	new Background("",	// name
		"",	// title
		"", // short desc
		"",	// long desc
		"",	// extra desc (optional)
		["", "", ""],	// bonuses
		["", "", ""],	// minuses
		[Abilities[""], Abilities[""]],
		50,	// gold
		["", "", "", ""], // items
		"Images/Icons/.png"	// icon
	);


	
	
	
	*/
