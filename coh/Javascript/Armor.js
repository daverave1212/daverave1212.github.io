
	var Armors = {};

	function Armor(Name, AC){
		Armors[Name] = this;
		this.name = Name;
		this.ac = AC;}
	
	new Armor("Unarmored", 0);
	new Armor("Light", 1);
	new Armor("Medium", 2);
	new Armor("Heavy", 4);
	