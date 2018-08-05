
	var Backgrounds = {};
	
	function Background(Name, Title, ShortDesc, LongDesc,
						OtherBonuses, SkillBonuses, Abilities, Gold, Items,
						IconPath){
		Backgrounds[Name]	= this;
		this.name			= Name;
		this.title			= Title;
		this.shortDesc		= ShortDesc;
		this.longDesc		= LongDesc;
		this.otherBonuses	= OtherBonuses;
		this.skillBonuses	= SkillBonuses;
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
		
	new Background(
		"Sailor", "Man of the Sea",
		"There's only one thing a man can be more in love with than a woman: the sea",
		"You sailed on a seagoing vessel for years. In that time, you faced down mighty storms, monsters of the deep, and those who wanted to sink your craft to the bottomless depths.",
		"You know your way around a ship or boat.<br>With you on board, ships travel 25% faster.",
		["Survival", "Craft", "Use Rope"],
		[Abilities["action_surge"], Abilities["frost_stance"]],
		50,
		["Sailor Clothes", "30 feet of rope", "Other cool stuff idk", "Some Rum", "Fishing Pole", "Boots"],
		"https://i.pinimg.com/originals/cc/ba/b1/ccbab1aa2a812c727b8ba50cf149a5eb.jpg");
	
		
	/*new Background(
		"Sailoress", "Woman of the Sea",
		"There's only one thing a man can be more in love with than a woman: the sea",
		"You sailed on a seagoing vessel for years. In that time, you faced down mighty storms, monsters of the deep, and those who wanted to sink your craft to the bottomless depths.",
		"You know your way around a ship or boat.<br>With you on board, ships travel 25% faster.",
		["Survival", "Craft", "Use Rope"],
		[Abilities["agile"], Abilities["frost_stance"]],
		50,
		["Sailor Clothes", "30 feet of rope", "Other cool stuff idk"],
		"https://i.pinimg.com/originals/cc/ba/b1/ccbab1aa2a812c727b8ba50cf149a5eb.jpg");
	*/
