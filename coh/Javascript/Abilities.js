
	var defaultIconPath = "Images/Icons/";
	function iconNameToFullPath(name){ return defaultIconPath + talentNameToImagePath(name) + ".png"; }

	var Abilities = {};
	var AbilityIcons = {};
	
	function Ability(NameAndActions, Desc, Path){
		Abilities[talentNameToImagePath(NameAndActions)] = this;
		this.name = NameAndActions;
		this.desc = Desc;
		if(Path == undefined)
			this.iconPath = iconNameToFullPath(NameAndActions);
		else
			this.iconPath = Path;
		}
	
	/*function createAbilityIcon(ThisAbility){
		this.image = createImage(ThisAbility.iconPath);
		this.image.setAttribute("class", "Icon");
		this.image.setAttribute("name", ThisAbility.talentNameToImagePath(ThisAbility.name));
		this.image.onmouseover = function(){
			Scripts.showHelpBox();
			Scripts.setHelpText(Abilities[this.getAttribute("name")].name + "<br>" + Abilities[this.getAttribute("name")].desc);};
		this.image.onmouseout = function(){Scripts.hideHelpBox();};
		return this.image;}
	*/
	