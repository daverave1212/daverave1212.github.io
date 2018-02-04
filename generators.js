
	aux = {};
	
	aux.townLocation = function(){
		var x = randomInt(1, 5);
		switch(x){
			case 1: return "center";
			case 2: return "outskirts";
			case 3: return "streets";
			case 4: return "entrance";
			case 5: return "far back";
		}
	}
	

	aux.specialFood = function(){
		var x = randomInt(1, 12);
		switch(x){
			case 1: return "seasoned meats";
			case 2: return "fish and other aquatic creatures as food";
			case 3: return "fine salads";
			case 4: return "expensive and exotic spices";
			case 5: return "rice or noodles";
			case 6: return "chicken curry";
			case 7: return "spicy";
			case 8: return "sugar-heavy";
			case 9: return "expensive or rare cheese";
			case 10: return "famous soups and corba";
			case 11: return "raw meat";
			case 12: return "bakery";
		}
	}
	
	aux.alcoholCharacteristic = function(){
		var x = randomInt(1, 7);
		switch(x){
			case 1: return "strong";
			case 2: return "potent";
			case 3: return "refined";
			case 4: return "fine";
			case 5: return "rough";
			case 6: return "expensive";
			case 7: return "cheap and good";
		}
	
	}
	
	aux.doctorType = function(){
		var x = randomInt(1, 9);
		switch(x){
			case 1: return "doctors";
			case 2: return "field medics";
			case 3: return "priests";
			case 4: return "miracle workers";
			case 5: return "druids";
			case 6: return "healing mages";
			case 7: return "witches";
			case 8: return "witch doctors";
			case 9: return "plague doctors";
		}
	}

	
	aux.magicTown = function(){
		var x = randomInt(1, 8);
		switch(x){
			case 1: return "a powerful wizard";
			case 2: return "a mage school";
			case 3: return "folk who use magic on a daily basis";
			case 4: return "a market of various magical items and materials";
			case 5: return "a few mages or wizards";
			case 6: return "powerful religious mages";
			case 7: return "scholars who study the arts of necromancy";
			case 8: return "demonomancers (mages who study the arts of demon magic)";
		}
	}

	aux.fruitsOrVegetables = function(){
		var x = randomInt(1, 3);
		switch(x){
			case 1: return "fruits";
			case 2: return "vegetables";
			case 3: return "grains";
		}
	}
	
	aux.nul = function(){
		var x = randomInt(1, 2);
		switch(x){
			case 1: return "";
		
		}
	}
	
	
	

	aux.race = function(){
		switch(randomInt(1, 8)){
		case 1: return "Elves";
		case 1: return "Humans";
		case 1: return "Dwarves";
		case 1: return "Gnomes";
		case 1: return "Halflings";
		case 1: return "Orcs";
		case 1: return "Snake-folk";
		case 1: return "Dragonborn";
		case 1: return "Tiefling";
		
		}
	
	}

	
	gen = {};
	
	townSpecialties = new Array();
	townSpecialties[0] = "canals";
	townSpecialties[1] = "monument";
	townSpecialties[2] = "food";
	townSpecialties[3] = "rude";
	townSpecialties[4] = "markets";
	townSpecialties[5] = "artists";
	townSpecialties[6] = "beggars";
	townSpecialties[7] = "warriors";
	townSpecialties[8] = "decadence";
	townSpecialties[9] = "religiousness";
	townSpecialties[10] = "gambling";
	townSpecialties[11] = "atheism";
	townSpecialties[12] = "education";
	townSpecialties[13] = "alcohol";
	townSpecialties[14] = "fashion";
	townSpecialties[15] = "political";
	townSpecialties[16] = "guilds";
	townSpecialties[17] = "patriotism";
	townSpecialties[18] = "jewelcrafting";
	townSpecialties[19] = "medicine";
	townSpecialties[20] = "alchemy";
	townSpecialties[21] = "blacksmithing";
	townSpecialties[22] = "leatherworking";
	townSpecialties[23] = "nature";
	townSpecialties[24] = "magic";
	townSpecialties[25] = "grid";
	townSpecialties[26] = "slavery";
	townSpecialties[27] = "monks";
	townSpecialties[28] = "fruits";
	townSpecialties[29] = "sarcasm";
	townSpecialties[30] = "hate";
	townSpecialties[31] = "friendly";
	townSpecialties[32] = "fortress";
	townSpecialties[33] = "invaded";
	townSpecialties[34] = "cannibalism";
	townSpecialties[35] = "ruins";
	townSpecialties[36] = "parties";
	townSpecialties[37] = "tomb";
	townSpecialties[38] = "skeleton";
	
	function initTownSpecialties(nTowns){
		for(i75 = 1; i75 <= nTowns - townSpecialties.length; i++){
			townSpecialties.push("none");}
		townSpecialties.push("magic");
		townSpecialties.push("magic");
		if(townSpecialties.length < nTowns){
			townSpecialties.push("magic");
			townSpecialties.push("alcohol");
			townSpecialties.push("food");
		}
		if(townSpecialties.length < nTowns){
			townSpecialties.push("magic");
			townSpecialties.push("alcohol");
			townSpecialties.push("food");
		}
		if(townSpecialties.length < nTowns){
			townSpecialties.push("magic");
			townSpecialties.push("magic");
		}
		randomizeArray(townSpecialties);
	}

	
	gen.townSpecialty = function(townType){ /* small / village / city etc */
		var t = townType;
		var spec = townSpecialties[townSpecialties.length - 1];
		townSpecialties.pop();
		switch(spec){
			case "canals": return "The "+t+" is known for having navigatable canals instead of streets. It was constructed atop a river/lake and much of the working around is done on floating bridges and boats.";
			case "monument": return "In the "+aux.townLocation()+" lies a big monument or statue, dedicated to a god or hero perhaps.";
			case "food": return "The "+t+" is renowned for its special "+aux.specialFood()+" cooking recipes and adventurers are in for a treat!";
			case "rude": return "The "+t+" is known for its rude and xenophobic town folk. They will not talk to strangers and will seek to drive them away as soon as possible.";
			case "markets": return "It is known to cover a quite wide variety of markets. Adventurers may find exotic goods, uncommon trinkets or equipment or even magical items... priced accordingly, of course";
			case "artists": return "It is the common gathering place for various artists. Painters, writers and singers often come to this town for inspiration and monthly gatherings, as there is a dedicated society for this kind of people.";
			case "beggars": return "It is a known for beggars roaming the streets. Lots of people have remained without shelter after unfortunate large scale events";
			case "warriors": return "The town is the home of many great warriors. Soldiers receive good training at this town's barracks which may prepare them for any situation.";
			case "decadence": return "The town is slowly going into ruin. Various places are going bankrupt and its all going through an economic crisis. This may cause prices to be abnormally low.";
			case "religiousness": return "The town is the home of many schooled servants of various religions. It's townfolk are very religious and constantly pray and offer sacrifices for their gods. Players may witness such behaviour while in town.";
			case "gambling": return "The town is known for it's people's gambling habits. It is very common to see people on the streets or in taverns playing cards, dice or other gambling games. As such, there probably exists such a local gambling lord who has become rich through gambling and turned it into a business. Players may run into this man.";
			case "atheism": return "For some reasons, almost nobody in this town seems to care about gods. There are no temples and religion is frowned upon. Players may get scolded if they act religious.";
			case "education": return "The education system of this town is renowned, as scholars often come here to learn the teachings of various masters in crafts, magic or general knowledge. Players may find an opportunity to improve their skills here.";
			case "alcohol": return "The "+t+" is widely known as the origin of "+aux.alcoholCharacteristic()+" alcoholic beverages. Either the local townfolk are heavy drinkers or they just produce and export this special drink.";
			case "fashion": return "The town is a producer of fine textiles and clothes, robes to shoes, etc. Players will find expensive, but high quality clothes here, together with rare materials.";
			case "political": return "The town currently has an ambiguous political status. This may be an opportunity to claim land or properties here!";
			case "guilds": return "Various well instructed guilds have their base in this " + t + ". Warriors, craftsmen and even thieves thrive in this location, as their works are among the best and they also train apprentices. This town is an opportunity to buy expensive, high quality materials or improve a player's crafting or professional skills.";
			case "patriotism": return "The villagers are known to be very patriotic. They will support their kingdom and town no matter what, and are willing to give their lives for the safety of their village.";
			case "jewelcrafting": return "The town is a central producer of gems. Gemcutters and jewelcrafters lurk in this town. Their work is regarded with respect, but thieves may also try to make money on this ocasion. Players may find expensive gems or even magical gems to buy.";
			case "medicine": return "The town is home to one or more "+aux.doctorType()+" who are said to be able to cure any disease or treat any wound... for a price.";
			case "alchemy": return "The town is the home of an alchemist who is known to brew magical potions. Although rich in provisions, his prices, are proportionally high.";
			case "blacksmithing": return "An expert blacksmith resides in this town. Players may find more powerful adventuring gear for an increased price.";
			case "leatherworking": return "Leatherworkers are true to their craft in this town. They produce either expensive, high quality leather items, or cheap and low quality ones.";
			case "magic": return "The town is the home of "+aux.magicTown()+". Players may encounter them accordingly.";
			case "grid": return "The town is protected by an anti-magic grid. Those who use magic while inside the town's perimeter will be shocked.";
			case "slavery": return "The town is known for its industrious slave business. Slave selling fairs occur monthly and can attract interesting people. Players may witness such an event.";
			case "monks": return "The town is the home of a group of monks who wish not to be disturbed while practicing their arts. They will, however, understand and are wise enough to tell special people from regular individuals...";
			case "fruits": return "The town is known for actively cultivating "+aux.fruitsOrVegetables()+" and it's sprinkeled with large and small plantations of their special cultivation. Players may gather good rations here.";
			case "sarcasm": return "The townfolk are known to be depressive and endulge in sarcasm and cinicism.";
			case "hate": return "The townfolk are known to be friendly to all except adventurers. Everyone knows adventurers always cause trouble!";
			case "friendly": return "The townfolk are known to be very friendly towards everybody. Players may receive information or services cheaply or for free.";
			case "fortress": return "As the players approach the town, they notice a large fortress in the "+aux.townLocation()+" of the settlement. It may be the home base of a guild or the residence of a rich individual.";
			case "invaded": return "As the players approach the town, they notice that townfolk seem alarmed and agitated. Something is startling them. Upon asking, they can find out that the town was recently ambushed and pillaged by <insert monster or monster group>";
			case "cannibalism": return "The town population endulges in eating humanoid flesh. Players may be served 'house specialty' without even knowing it comes from a fellow human or elf...";
			case "ruins": return "The town is said to be build ontop of some ancient ruins. This may lead to an underground exploration adventure for the party.";
			case "parties": return "The town is known for partying. Monthly, a party festival is held here. Players may witness this party.";
			case "tomb": return "The town is the burial ground of an important figure. Perhaps a king, powerful mage, villain or so on.";
			case "skeleton": return "The town is the host of a large <large monster> skeleton, around which a building was build which may attract tourists.";	
		}
		return "error ;c";
	}

	gen.tavernDescription = function(townSize){
		var desc = "";
		var minQual = 0;
		var maxQual = 0;
		switch(townSize){
			case "Caravan Town"		:	minQual = 1; maxQual = 2;
			case "Small Village"	:	minQual = 2; maxQual = 3;
			case "Village"			:	minQual = 2; maxQual = 4;
			case "Town"				:	minQual = 2; maxQual = 5;
			case "City"				:	minQual = 3; maxQual = 6;
			case "Large City"		:	minQual = 4; maxQual = 6;
		}	
		
		var quality = randomInt(minQual, maxQual);
		var hasInsideToilet 	= percentChance(22 * quality);
		var hasKitchen			= percentChance(35 * quality);
		var hasGarden			= percentChance(15 * quality);
		var hasBrothel			= percentChance(25 * quality);
		var hasVipRooms			= percentChance(20 * quality);
		var brothelQuality		= randomInt(minQual, maxQual);
		var foodQuality			= randomInt(minQual, maxQual);
		var drinkQuality		= randomInt(minQual, maxQual);
		var nGuestRooms			= randomInt(minQual, maxQual + 3);
		var nFloors				= randomInt(1, nGuestRooms/randomInt(3, 5));
		
		desc += "The tavern appears to be";
		switch(quality){
			case 1: desc += " of the lowest quality possible."; break;
			case 2: desc += " cheap, yet not so bad."; break;
			case 3: desc += " the average inn."; break;
			case 4: desc += " one of decent quality."; break;
			case 5: desc += " a rather high quality one."; break;
			case 6: desc += " one of the most luxurious ones you have ever seen.";}
		desc += " It has";
		if(hasGarden){
			desc += " a beautifully decorated garden on the outside, "}
		if(hasBrothel){
			desc += " a brothel with ";
			switch(brothelQuality){
				case 1: desc += "ugly and bad smelling wenches,"; break;
				case 2: desc += "poor looking, cheap whores,"; break;
				case 3: desc += "simple, yet fair women,"; break;
				case 4: desc += "not the worst, but not the best looking 'employees' either,"; break;
				case 5: desc += "rather attractive ladies, ocasionally a man too for the satisfaction of some,"; break;
				case 6: desc += "gorgeous girls and men, dressed in the finest of clothing,";}}
		if(hasVipRooms){
			desc += " expensive or cheaper rooms, to your liking,";}
		if(hasInsideToilet){
			desc += " even an unexpectedly clean toilet on the inside";}
		if(!hasBrothel && !hasInsideToilet && !hasGarden && !hasVipRooms && !hasKitchen){
			desc += "... literally nothing on the inside.";}
		else{
			desc += ".";
			if(!hasVipRooms && !hasKitchen){
				desc += " Yet, curiously, it does not seem to have a kitchen of it's own, nor does it have any choice regarding rooms, since all seem to be the same.";}
			else{
				if(!hasVipRooms){
					desc += " The rooms seem bland, being all similar and almost not decorated at all";}
				else{
					desc += " Curiously, it does not seem to have a kitchen to prepare food.";
				}
			}
		}
		desc += " With the " + nGuestRooms + " rooms being split among " + nFloors + " floors,";
		if(foodQuality == 1 && drinkQuality == 1){
			desc += " the tavern doesn't appear to serve food or nor drink.";}
		else{
			if(foodQuality == 1){
				desc += " the tavern does not seem to serve any sort of food, but the drinks served";
				switch(drinkQuality){
					case 1: desc += " taste like bland liquid, almost undrinkable."; break;
					case 2: desc += " are extremely cheap and dilluted."; break;
					case 3: desc += " are rather decent."; break;
					case 4: desc += " are sometimes strong and good, other times weak and inconsistent."; break;
					case 5: desc += " seem of good production and taste and smell fresh, like they were made only recently."; break;
					case 6: desc += " are top-notch, probably ones of the best you have ever tasted."; break;
				}
				}
			else if(drinkQuality == 1){
				desc += " the tarvern seems to be lacking drinks other than water, but the food";
				switch(foodQuality){
					case 1: desc += "... it looks and tastes horrible."; break;
					case 2: desc += " is tasteless, though eatable."; break;
					case 3: desc += " is just the average you'd expect from such place."; break;
					case 4: desc += " is surprisingly good. Not the best, but certanly a decent meal."; break;
					case 5: desc += " tastes and smells nice and tender, a good meal!"; break;
					case 6: desc += " tastes heavenly... the perfect combinations of the most expensive ingredients."; break;
				}}
			else{
				desc += " the tavern's drinks"
				switch(drinkQuality){
					case 1: desc += " taste like bland liquid, almost undrinkable"; break;
					case 2: desc += " are extremely cheap and dilluted"; break;
					case 3: desc += " are rather decent"; break;
					case 4: desc += " are sometimes strong and good, other times weak and inconsistent"; break;
					case 5: desc += " seem of good production and taste and smell fresh, like they were made only recently"; break;
					case 6: desc += " are top-notch, probably ones of the best you have ever tasted"; break;
				}
				desc += " and the food";
				switch(foodQuality){
					case 1: desc += "... it looks and tastes horrible."; break;
					case 2: desc += " is tasteless, though eatable."; break;
					case 3: desc += " is just the average you'd expect from such place."; break;
					case 4: desc += " is surprisingly good. Not the best, but certanly a decent meal."; break;
					case 5: desc += " tastes and smells nice and tender, a good meal!"; break;
					case 6: desc += " tastes heavenly... the perfect combinations of the most expensive ingredients."; break;
				}			
			}
		}
		return desc;
	}
	
	
	
	
	
	
	


	namegen = {};
	
	namegen.cityName = function(){	
		var q1,q2;

		switch(randomInt(1, 50)){
		case 1: q1="Dragon"; break;
		case 2: q1="Blood"; break;
		case 3: q1="Red"; break;
		case 4: q1="Ever"; break;
		case 5: q1="West"; break;
		case 6: q1="East"; break;
		case 7: q1="South"; break;
		case 8: q1="North"; break;
		case 9: q1="Wind"; break;
		case 10: q1="Harth"; break;
		case 11: q1="Storm"; break;
		case 12: q1="Sea"; break;
		case 13: q1="Lake"; break;
		case 14: q1="River"; break;
		case 15: q1="Hroth"; break;
		case 16: q1="Long"; break;
		case 17: q1="Short"; break;
		case 18: q1="Way"; break;
		case 19: q1="Great"; break;
		case 20: q1="Winter"; break;
		case 21: q1="Summer"; break;
		case 22: q1="Spring"; break;
		case 23: q1="Gold"; break;
		case 24: q1="Black"; break;
		case 25: q1="Dark"; break;
		case 26: q1="Light"; break;
		case 27: q1="Cold"; break;
		case 28: q1="Warm"; break;
		case 29: q1="Wolf"; break;
		case 30: q1="Pike"; break;
		case 31: q1="Strong"; break;
		case 32: q1="Bear"; break;
		case 33: q1="Iron"; break;
		case 34: q1="Snow"; break;
		case 35: q1="Rain"; break;
		case 36: q1="Pendle"; break;
		case 37: q1="Dawn"; break;
		case 38: q1="Sun"; break;
		case 39: q1="Day"; break;
		case 40: q1="Night"; break;
		case 41: q1="Lords"; break;
		case 42: q1="Kings"; break;
		case 43: q1="Stall";break;
		case 44:q1="Sovern";break;
		case 45:q1="Brair";break;
		case 46:q1="Solst";break;
		case 47:q1="Farren";break;
		case 48:q1="High";break;
		case 49:q1="Darn";break;
		case 50:q1="High";break;
		default: q1="Zimbalaur";}

		switch(randomInt(1, 46)){
		case 1: q2="shire"; break;
		case 2: q2="glen"; break;
		case 3: q2="ridge"; break;
		case 4: q2="town"; break;
		case 5: q2="garden"; break;
		case 6: q2="den"; break;
		case 7: q2="vale"; break;
		case 8: q2="meadow"; break;
		case 9: q2="hill"; break;
		case 10: q2="brad"; break;
		case 11: q2="mire"; break;
		case 12: q2="mill"; break;
		case 13: q2="keep"; break;
		case 14: q2="hold"; break;
		case 15: q2="watch"; break;
		case 16: q2="post"; break;
		case 17: q2="ford"; break;
		case 18: q2="marsh"; break;
		case 19: q2="field"; break;
		case 20: q2="ville"; break;
		case 21: q2="land"; break;
		case 22: q2="fell"; break;
		case 23: q2="shore"; break;
		case 24: q2="guard"; break;
		case 25: q2="garde"; break;
		case 26: q2="wallow"; break;
		case 27: q2="stead"; break;
		case 28: q2="fall"; break;
		case 29: q2="wall"; break;
		case 30: q2="state"; break;
		case 31: q2="run";break;
		case 32: q2="ward";break;
		case 33: q2="water";break;
		case 34: q2="tower";break;
		case 35: q2="bay";break;
		case 36: q2="wood";break;
		case 37: q2="dale";break;
		case 38: q2="heim";break;
		case 39: q2="vael"; break;
		case 40: q2="dor"; break;
		case 41: q2="grad"; break;
		case 42: q2="voord"; break;
		case 43: q2="thurn"; break;
		case 44: q2="furt"; break;
		case 45: q2="dorne"; break;
		case 46: q2="wich";break;
		default: q2="Zimbalaur";}

		return q1+q2;
		}

		
	namegen.townName = function(){
	var q,w;

	switch(randomInt(1, 36)){
	case 1:q="High";break;
	case 2:q="Hald";break;
	case 3:q="River";break;
	case 4:q="Lake";break;
	case 5:q="Ivern";break;
	case 6:q="Dawn";break;
	case 7:q="Day";break;
	case 8:q="Devil";break;
	case 9:q="Maiden";break;
	case 10:q="Gold";break;
	case 11:q="Merry";break;
	case 12:q="Snow";break;
	case 13:q="Lumber";break;
	case 14:q="Hearth";break;
	case 15:q="Amber";break;
	case 16:q="Pearl";break;
	case 17:q="Opal";break;
	case 18:q="Black";break;
	case 19:q="Red";break;
	case 20:q="Blue";break;
	case 21:q="White";break;
	case 22:q="Far";break;
	case 23:q="West";break;
	case 24:q="North";break;
	case 25:q="East";break;
	case 26:q="South";break;
	case 27:q="Dusk";break;
	case 28:q="Oak";break;
	case 29:q="Belle";break;
	case 30:q="Dire";break;
	case 31:q="Silver";break;
	case 32:q="Shade";break;
	case 33:q="Summer";break;
	case 34:q="Spring";break;
	case 35:q="Fall";break;
	case 36:q="Winter";break;}

	switch(randomInt(1, 37)){
	case 1:w="shire";break;
	case 2:w="mire";break;
	case 3:w="stead";break;
	case 4:w="town";break;
	case 5:w="'s Cross";break;
	case 6:w=" Farm";break;
	case 7:w="brair";break;
	case 8:w="grove";break;
	case 9:w="fair";break;
	case 10:w="hut";break;
	case 11:w="shack";break;
	case 12:w="watch";break;
	case 13:w="mill";break;
	case 14:w="shod";break;
	case 15:w="light";break;
	case 16:w="wood";break;
	case 17:w="'s Retreat";break;
	case 18:w="post";break;
	case 19:w="side";break;
	case 20:w="glen";break;
	case 21:w="haven";break;
	case 22:w="ridge";break;
	case 23:w="shore";break;
	case 24:w="field";break;
	case 25:w="run";break;
	case 26:w="road";break;
	case 27:w="cairn";break;
	case 28:w="'s Rest";break;
	case 29:w="crest";break;
	case 30:w="moor";break;
	case 31:w="crag";break;
	case 32:w="den";break;
	case 33:w="rose";break;
	case 34:w="'s Shield";break;
	case 35:w="fall";break;
	case 36:w="dell";break;
	case 37:w="pass";break;}

	return q+w;
	}

	namegen.tavernName = function(){
		var q, w, g;

		switch(randomInt(1, 24)){
		case 1:q="The Sleeping ";break;
		case 2:q="The Jealous ";break;
		case 3:q="The Stinky ";break;
		case 4:q="The Drowned ";break;
		case 5:q="The Mad ";break;
		case 6:q="The Honey ";break;
		case 7:q="The Blind ";break;
		case 8:q="The Deaf ";break;
		case 9:q="The Angry ";break;
		case 10:q="The Saucy ";break;
		case 11:q="The Tasty ";break;
		case 12:q="The Black ";break;
		case 13:q="The Brown ";break;
		case 14:q="The Humble";break;
		case 15:q="The Roasted ";break;
		case 16:q="The Rusty ";break;
		case 17:q="The Old ";break;
		case 18:q="The Evil ";break;
		case 19:q="The Crazed ";break;
		case 20:q="The Golden ";break;
		case 21:q="The White ";break;
		case 22:q="The Red ";break;
		case 23:q="The Lucky ";break;
		case 24:q="The Drunken ";break;
		case 25:q="";break;
		case 26:q="";break;
		case 27:q="";break;
		case 28:q="";break;
		case 29:q="";break;
		case 30:q="";break;
		case 31:q="";break;
		case 32:q="";break;
		case 33:q="";break;
		case 34:q="";break;
		case 35:q="";break;
		case 36:q="";break;
		case 37:q="";break;
		case 38:q="";break;
		case 39:q="";break;
		case 40:q="";break;
		case 41:q="";break;
		case 42:q="";break;
		case 43:q="";break;
		case 44:q="";break;
		case 45:q="";break;
		case 46:q="";break;
		case 47:q="";break;
		case 48:q="";break;
		case 49:q="";break;
		case 50:q="";break;}


		switch(randomInt(1, 36)){
		case 1:w="Cat";break;
		case 2:w="Weasel";break;
		case 3:w="Gull";break;
		case 4:w="Hound";break;
		case 5:w="Mule";break;
		case 6:w="Maiden";break;
		case 7:w="Giant";break;
		case 8:w="Gnoll";break;
		case 9:w="Horseman";break;
		case 10:w="Horse";break;
		case 11:w="Mare";break;
		case 12:w="Huntsman";break;
		case 13:w="Knight";break;
		case 14:w="Lion";break;
		case 15:w="Panther";break;
		case 16:w="Badger";break;
		case 17:w="Bear";break;
		case 18:w="Fox";break;
		case 19:w="Raven";break;
		case 20:w="Granny";break;
		case 21:w="Goblin";break;
		case 22:w="Rose";break;
		case 23:w="Stag";break;
		case 24:w="Mage";break;
		case 25:w="Priest";break;
		case 26:w="Bastard";break;
		case 27:w="Prince";break;
		case 28:w="Cauldron";break;
		case 29:w="Imp";break;
		case 30:w="Herring";break;
		case 31:w="Dagger";break;
		case 32:w="Sailor";break;
		case 33:w="Horseshoe";break;
		case 34:w="Windmill";break;
		case 35:w="Crossroads";break;
		case 36:w="Wizard";break;
		case 37:w="";break;
		case 38:w="";break;
		case 39:w="";break;
		case 40:w="";break;
		case 41:w="";break;
		case 42:w="";break;
		case 43:w="";break;
		case 44:w="";break;
		case 45:w="";break;
		case 46:w="";break;
		case 47:w="";break;
		case 48:w="";break;
		case 49:w="";break;
		case 50:w="";break;}

		switch(randomInt(1, 4)){
		case 1:g=" Inn";break;
		case 2:g=" Tavern";break;
		case 3:g="";break;
		case 4:g="";break;
		}

		return q+w+g;
	}
