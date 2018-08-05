
	var defaultIconPath = "Images/Icons/";
	function iconNameToFullPath(name){ return defaultIconPath + talentNameToImagePath(name) + ".png"; }

	var Abilities = {};
	var AbilityIcons = {};
	
	function Ability(NameAndActions, Desc, Path){
		this.tag = talentNameToImagePath(NameAndActions);
		Abilities[this.tag] = this;
		this.name = NameAndActions;
		this.desc = Desc;
		if(Path == undefined) this.iconPath = iconNameToFullPath(NameAndActions);
		else this.iconPath = Path;}
	
	// If created without a Path, it will take it from the vanilla folder
	// Otherwise, it will take the path given
	// This is to 'distinguish' abilities made with the mod maker (abiities from a mod)
	//   from vanilla abilities
	// Vanilla abilities automatically take the path from the icons fodler
	// Mod abilities require a given path

	/* Creates a div structuredlike this:
		Wrapper >
			Left > Icon
			Right > Text
	   The div has 100% width, flexible height and small margins.
	   The function returns the Wrapper element */
	function createAbilityElement(ability){
		var abilityWrapper = createElement("div");
		abilityWrapper.setAttribute("class", "AbilityWrapper");
		var abilityWrapperLeft = createElement("div");
		abilityWrapperLeft.setAttribute("class", "AbilityWrapperLeft");
		var abilityIcon = createImage(ability.iconPath);
		abilityIcon.setAttribute("class", "AbilityIcon");
		abilityWrapperLeft.appendChild(abilityIcon);
		var abilityWrapperRight = createElement("div"); abilityWrapperRight.setAttribute("class", "AbilityWrapperRight");
		abilityWrapperRight.innerHTML = ability.name + "<br><br>" + ability.desc;
		abilityWrapper.appendChild(abilityWrapperLeft);
		abilityWrapper.appendChild(abilityWrapperRight);
		return abilityWrapper;}
	
	
	function wrapAbilityNameTextInSpan(name){ return "<span class='AbilityNameText'>" + name + "</span>";}
	
	/* Creates and returns a hoverable img element */
	function createAbilityElementForBundle(ability){
		var image = createImage(ability.iconPath);
		image.setAttribute("class", "Icon");
		image.setAttribute("name", ability.tag);
		image.onmouseover = function(){
			Scripts.showHelpBox(true);	// isAbility = true
			var thisAbility = Abilities[this.getAttribute("name")];
			Scripts.setHelpText(wrapAbilityNameTextInSpan(thisAbility.name) + "<br><br>" + thisAbility.desc);};
		image.onmouseout = function(){Scripts.hideHelpBox();};
		return image;}
	
