
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
	
	
	
	
	
	
	



	gen.NPC = function(){
		
	}
	namegen = {};
	
	//city, town, tavern
	//human, elf, dwarf, goblin, gnome, orc
	namegen.cityName 			= function(){	
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

		
	namegen.townName 			= function(){
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

	namegen.tavernName 			= function(){
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
		case 25:q="";break;}


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

	
	namegen.humanNameFemale		= function(){

	var q,w;

	switch(randomInt(1, 50)){
	case 1:q="Adela ";break;
	case 2:q="Adelaide ";break;
	case 3:q="Mother ";break;
	case 4:q="Helga ";break;
	case 5:q="Becky ";break;
	case 6:q="Sophie ";break;
	case 7:q="Juliet ";break;
	case 8:q="Margot ";break;
	case 9:q="Dareth ";break;
	case 10:q="Shelby ";break;
	case 11:q="Aldin ";break;
	case 12:q="Steven ";break;
	case 13:q="Grif ";break;
	case 14:q="Hegnar ";break;
	case 15:q="Jordan ";break;
	case 16:q="Deena ";break;
	case 17:q="Kendra ";break;
	case 18:q="Carson ";break;
	case 19:q="Dorthy ";break;
	case 20:q="Helen ";break;
	case 21:q="Ella ";break;
	case 22:q="Lena ";break;
	case 23:q="Sasha ";break;
	case 24:q="Triss ";break;
	case 25:q="Trisha ";break;
	case 26:q="Alissa ";break;
	case 27:q="Annie ";break;
	case 28:q="Grace ";break;
	case 29:q="Lily ";break;
	case 30:q="Margery ";break;
	case 31:q="Gwen ";break;
	case 32:q="Isabelle";break;
	case 33:q="Kyrsten ";break;
	case 34:q="Catelyn ";break;
	case 35:q="Myrra ";break;
	case 36:q="Sherrie ";break;
	case 37:q="Alyson ";break;
	case 38:q="Cindy ";break;
	case 39:q="Diana ";break;
	case 40:q="Melanie ";break;
	case 41:q="Sara ";break;
	case 42:q="Lydia ";break;
	case 43:q="Madelyn ";break;
	case 44:q="Sara ";break;
	case 45:q="Deidre ";break;
	case 46:q="Liza ";break;
	case 47:q="Wilma ";break;
	case 48:q="Aisha ";break;
	case 49:q="Heather ";break;
	case 50:q="Abby ";break;}

	return q;
	}
	namegen.humanNameFamily		= function(){

	var q;
	switch(randomInt(1, 50)){
	case 1:q="Robertson ";break;
	case 2:q="Flynn ";break;
	case 3:q="Fry ";break;
	case 4:q="Tyler ";break;
	case 5:q="Osborn ";break;
	case 6:q="Freeman ";break;
	case 7:q="Miller ";break;
	case 8:q="Smith ";break;
	case 9:q="Williams ";break;
	case 10:q="Brown ";break;
	case 11:q="Miller ";break;
	case 12:q="Jones ";break;
	case 13:q="Moore ";break;
	case 14:q="Wright ";break;
	case 15:q="Kings ";break;
	case 16:q="Green ";break;
	case 17:q="Campbell ";break;
	case 18:q="Carter ";break;
	case 19:q="Roberts ";break;
	case 20:q="Steward";break;
	case 21:q="Wood ";break;
	case 22:q="Grey ";break;
	case 23:q="Hughes ";break;
	case 24:q="Fisher ";break;
	case 25:q="Wilson ";break;
	case 26:q="Pressler ";break;
	case 27:q="Hicks ";break;
	case 28:q="Rogers ";break;
	case 29:q="Potts ";break;
	case 30:q="Black ";break;
	case 31:q="Wrynn ";break;
	case 32:q="Fitch ";break;
	case 33:q="Folsom ";break;
	case 34:q="Field ";break;
	case 35:q="Gregory ";break;
	case 36:q="Wilfort ";break;
	case 37:q="Tillsdale ";break;
	case 38:q="Flintlocke ";break;
	case 39:q="Locke ";break;
	case 40:q="Martin ";break;
	case 41:q="Weller ";break;
	case 42:q="Herald ";break;
	case 43:q="Granger ";break;
	case 44:q="Barnaby ";break;
	case 45:q="Meyer ";break;
	case 46:q="Jackson ";break;
	case 47:q="Vaughn ";break;
	case 48:q="Pressler ";break;
	case 49:q="Tanner ";break;
	case 50:q="Rowe ";break;}

	return q;


}
	namegen.humanNameMale		= function(){
	var q, w, e;
	var choice;
	choice = randomInt(1, 2);
	switch(randomInt(1, 50)){
	case 1:q="Aaron ";break;
	case 2:q="Alva ";break;
	case 3:q="Clyde ";break;
	case 4:q="Derick ";break;
	case 5:q="Donnie ";break;
	case 6:q="Ed ";break;
	case 7:q="Jack ";break;
	case 8:q="John ";break;
	case 9:q="Kenny ";break;
	case 10:q="Nelson ";break;
	case 11:q="Noah ";break;
	case 12:q="Rolf ";break;
	case 13:q="Randel ";break;
	case 14:q="Austin ";break;
	case 15:q="Bruce ";break;
	case 16:q="Charlie ";break;
	case 17:q="George ";break;
	case 18:q="Jaime ";break;
	case 19:q="Tywin ";break;
	case 20:q="Sean ";break;
	case 21:q="Steven ";break;
	case 22:q="Donnie ";break;
	case 23:q="Father ";break;
	case 24:q="Simon ";break;
	case 25:q="Warren ";break;
	case 26:q="Brendan ";break;
	case 27:q="Richard ";break;
	case 28:q="William ";break;
	case 29:q="Jonah ";break;
	case 30:q="Alex ";break;
	case 31:q="Jake ";break;
	case 32:q="Edward ";break;
	case 33:q="Wheaton ";break;
	case 34:q="Elvis ";break;
	case 35:q="Robert ";break;
	case 36:q="Michael ";break;
	case 37:q="David ";break;
	case 38:q="Daniel ";break;
	case 39:q="Mark ";break;
	case 40:q="Paul ";break;
	case 41:q="Charles ";break;
	case 42:q="Timothy ";break;
	case 43:q="Frank ";break;
	case 44:q="Peter ";break;
	case 45:q="Harrison ";break;
	case 46:q="Nathan ";break;
	case 47:q="Ben ";break;
	case 48:q="Mason ";break;
	case 49:q="Liam ";break;
	case 50:q="Muhammad ";break;}



	switch(randomInt(1, 39)){
	case 1:w="Loth";break;
	case 2:w="Fal";break;
	case 3:w="Ren";break;
	case 4:w="Reh";break;
	case 5:w="Faran";break;
	case 6:w="Ara";break;
	case 7:w="El";break;
	case 8:w="Al";break;
	case 9:w="Are";break;
	case 10:w="Ar";break;
	case 11:w="Tor";break;
	case 12:w="Cal";break;
	case 13:w="Kael";break;
	case 14:w="Ron";break;
	case 15:w="In";break;
	case 16:w="Quen";break;
	case 17:w="Erin";break;
	case 18:w="Ed";break;
	case 19:w="Fred";break;
	case 20:w="Tron";break;
	case 21:w="Rol";break;
	case 22:w="Rod";break;
	case 23:w="Ger";break;
	case 24:w="Gar";break;
	case 25:w="Aran";break;
	case 26:w="Fin";break;
	case 27:w="Rene";break;
	case 28:w="Bene";break;
	case 29:w="Ala";break;
	case 30:w="Wil";break;
	case 31:w="Stron";break;
	case 32:w="Sto";break;
	case 33:w="Geth";break;
	case 34:w="Bal";break;
	case 35:w="Kol";break;
	case 36:w="Lod";break;
	case 37:w="Lar";break;
	case 38:w="Newl";break;
	case 39:w="Fron";break;}

	switch(randomInt(1, 28)){
	case 1:e="ren ";break;
	case 2:e="red ";break;
	case 3:e="rik ";break;
	case 4:e="stad ";break;
	case 5:e="gar";break;
	case 6:e="rald";break;
	case 7:e="gorn ";break;
	case 8:e="wen ";break;
	case 9:e="alt ";break;
	case 10:e="rond ";break;
	case 11:e="rod ";break;
	case 12:e="vik ";break;
	case 13:e="ven ";break;
	case 14:e="lon ";break;
	case 15:e="ias ";break;
	case 16:e="bran ";break;
	case 17:e="brad ";break;
	case 18:e="gram ";break;
	case 19:e="gham ";break;
	case 20:e="lod ";break;
	case 21:e="bal ";break;
	case 22:e="io ";break;
	case 23:e="lin ";break;
	case 24:e="zad ";break;
	case 25:e="dorn";break;
	case 26:e="wick";break;
	case 27:e="lon";break;
	case 28:e="nalt";break;}

	if(choice==1)return q;
	return w+e;


}
	namegen.humanNameMaleFull	= function(){
		return namegen.humanNameMale + " " + namegen.humanNameFamily;
	}
	namegen.humanNameFemaleFull	= function(){
		return namegen.humanNameFemale + " " + namegen.humanNameFamily;
	}
	namegen.elfNameFemale		= function(){
	var q,w;

	switch(randomInt(1, 28)){
	case 1:q="E";break;
	case 2:q="Ae";break;
	case 3:q="A";break;
	case 4:q="Shae";break;
	case 5:q="Shae";break;
	case 6:q="Dae";break;
	case 7:q="Casa";break;
	case 8:q="Tae";break;
	case 9:q="Mi";break;
	case 10:q="Ala";break;
	case 11:q="Ara";break;
	case 12:q="Ana";break;
	case 13:q="Tia";break;
	case 14:q="Gwen";break;
	case 15:q="Quel'a";break;
	case 16:q="La";break;
	case 17:q="Meli";break;
	case 18:q="Eli";break;
	case 19:q="Asha";break;
	case 20:q="Va";break;
	case 21:q="Shala";break;
	case 22:q="Sala";break;
	case 23:q="Sa";break;
	case 24:q="Sha";break;
	case 25:q="Shia";break;
	case 26:q="Sia";break;
	case 27:q="Lia";break;
	case 28:q="Ele";break;
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

	switch(randomInt(1, 25)){
	case 1:w="lin";break;
	case 2:w="randa";break;
	case 3:w="ryn";break;
	case 4:w="drith";break;
	case 5:w="dolin";break;
	case 6:w="sa";break;
	case 7:w="ndis";break;
	case 8:w="nya";break;
	case 9:w="lera";break;
	case 10:w="nera";break;
	case 11:w="layna";break;
	case 12:w="shaelle";break;
	case 13:w="melle";break;
	case 14:w="relle";break;
	case 15:w="lande";break;
	case 16:w="rith";break;
	case 17:w="ndra";break;
	case 18:w="ria";break;
	case 19:w="ra";break;
	case 20:w="lala";break;
	case 21:w="lora";break;
	case 22:w="lara";break;
	case 23:w="lira";break;
	case 24:w="ndria";break;
	case 25:w="drin";break;
	case 26:w="";break;
	case 27:w="";break;
	case 28:w="";break;
	case 29:w="";break;
	case 30:w="";break;
	case 31:w="";break;
	case 32:w="";break;
	case 33:w="";break;
	case 34:w="";break;
	case 35:w="";break;
	case 36:w="";break;
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

	if(q[q.length()-2] == w[0]) return q.substr(0, q.length-1) + w;  //Eli + lira = Ellira
	return q+w;
}


	namegen.elfNameMale 		= function(){
		var q,w;

		switch(randomInt(1, 32)){
		case 1:q="Ar"; break;
		case 2:q="Quel";break;
		case 3:q="Que'";break;
		case 4:q="Quar";break;
		case 5:q="Qor'";break;
		case 6:q="Er";break;
		case 7:q="Era'";break;
		case 8:q="Eo";break;
		case 9:q="Shala";break;
		case 10:q="Ell";break;
		case 11:q="Eon";break;
		case 12:q="Ron";break;
		case 13:q="Kel'";break;
		case 14:q="Tere";break;
		case 15:q="Teli";break;
		case 16:q="Tali";break;
		case 17:q="Terion'";break;
		case 18:q="Ysh'";break;
		case 19:q="Kirin'";break;
		case 20:q="Aeth";break;
		case 21:q="Thal'";break;
		case 22:q="Tae'";break;
		case 23:q="Thae";break;
		case 24:q="Lor";break;
		case 25:q="As";break;
		case 26:q="Drae";break;
		case 27:q="Voren";break;
		case 28:q="Vor'";break;
		case 29:q="Val";break;
		case 30:q="Quel";break;
		case 31:q="Qual";break;
		case 32:q="Qeth";break;
		default: q="balaur";}

		switch(randomInt(1, 18)){
		case 1: w="vanash";break;
		case 2: w="ash";break;
		case 3: w="dorei";break;
		case 4: w="doras";break;
		case 5: w="thalas";break;
		case 6: w="nar";break;
		case 7: w="nor";break;
		case 8: w="shal";break;
		case 9: w="agon";break;
		case 10: w="gon";break;
		case 11: w="ion";break;
		case 12: w="arion";break;
		case 13: w="narion";break;
		case 14: w="lash";break;
		case 15: w="vash";break;
		case 16: w="nin";break;
		case 17: w="nesh";break;
		case 18: w="arash";break;
		default:w="aubhda";}

		return q+w;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	namegen.elfNameMaleFull		= function(){
		return namegen.elfNameMale();
	}
	namegen.elfNameFemaleFull	= function(){
		return namegen.elfNameFemale();
	}
	namegen.dwarfNameMale 		= function(){
		var q,w,a;
		
		switch(randomInt(1, 9)){
		case 1:a="Buin ";break;
		case 2:a="Grawn ";break;
		case 3:a="Erik ";break;
		case 4:a="Frank ";break;
		case 5:a="Bari ";break;
		case 6:a="Bori ";break;
		case 7:a="Beri ";break;
		case 8:a="Hans ";break;
		case 9:a="Holt ";break;}
		
		switch(randomInt(1, 42)){
		case 1:q="Bari";break;
		case 2:q="Brag";break;
		case 3:q="Krol";break;
		case 4:q="Ruth";break;
		case 5:q="Vor";break;
		case 6:q="Buz";break;
		case 7:q="Jogh";break;
		case 8:q="Umin";break;
		case 9:q="Bord";break;
		case 10:q="Bard";break;
		case 11:q="Berd";break;
		case 12:q="Noth";break;
		case 13:q="Held";break;
		case 14:q="Borst";break;
		case 15:q="Holt";break;
		case 16:q="Thor";break;
		case 17:q="Mag";break;
		case 18:q="Vel";break;
		case 19:q="Nag";break;
		case 20:q="Glar";break;
		case 21:q="Mura";break;
		case 22:q="Bora";break;
		case 23:q="Bor";break;
		case 24:q="Vora";break;
		case 25:q="Mun";break;
		case 26:q="Hugn";break;
		case 27:q="Ban";break;
		case 28:q="Mod";break;
		case 29:q="Lorn";break;
		case 30:q="Bael";break;
		case 31:q="Grim";break;
		case 32:q="Al";break;
		case 33:q="Bur";break;
		case 34:q="Bura";break;
		case 35:q="Dur";break;
		case 36:q="Mur";break;
		case 37:q="Alam";break;
		case 38:q="Bel";break;
		case 39:q="Buin";break;
		case 40:q="Bur";break;
		case 41:q="Bura";break;
		case 42:q="Buro";break;}

		switch(randomInt(1, 14)){
		case 1:w="grus ";break;
		case 2:w="bi ";break;
		case 3:w="gas ";break;
		case 4:w="ni ";break;
		case 5:w="han ";break;
		case 6:w="ran ";break;
		case 7:w="san ";break;
		case 8:w="din ";break;
		case 9:w="gis ";break;
		case 10:w="gus ";break;
		case 11:w="gud ";break;
		case 12:w="gard ";break;
		case 13:w="log ";break;
		case 14:w="lag";break;
		case 15:w="";break;}

		return q+w;}
		
	namegen.dwarfNameFamily 	= function(){
		var q,w;

		switch(randomInt(1, 15)){
		case 1:q="Rock";break;
		case 2:q="Stout";break;
		case 3:q="Flint";break;
		case 4:q="Guzzle";break;
		case 5:q="Gale";break;
		case 6:q="Stone";break;
		case 7:q="Thunder";break;
		case 8:q="Bronze";break;
		case 9:q="Gold";break;
		case 10:q="Steel";break;
		case 11:q="Red";break;
		case 12:q="Grey";break;
		case 13:q="Black";break;
		case 14:q="Iron";break;
		case 15:q="White";break;}

		switch(randomInt(1, 15)){
		case 1:w="bear";break;
		case 2:w="brew";break;
		case 3:w="arm";break;
		case 4:w="horn";break;
		case 5:w="hand";break;
		case 6:w="mine";break;
		case 7:w="beard";break;
		case 8:w="beard";break;
		case 9:w="flint";break;
		case 10:w="hammer";break;
		case 11:w="gunt";break;
		case 12:w="nail";break;
		case 13:w="cliff";break;
		case 14:w="forge";break;
		case 15:w="mane";break;
		case 16:w="grip";break;
		case 17:w="brow";break;
		case 18:w="back";break;
		case 19:w="";break;
		case 20:w="";break;
		case 21:w="";break;
		case 22:w="";break;
		case 23:w="";break;
		case 24:w="";break;
		case 25:w="";break;
		case 26:w="";break;
		case 27:w="";break;
		case 28:w="";break;
		case 29:w="";break;
		case 30:w="";break;
		case 31:w="";break;
		case 32:w="";break;
		case 33:w="";break;
		case 34:w="";break;
		case 35:w="";break;
		case 36:w="";break;
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




		return q+w;

		}
	namegen.dwarfNameFemale 	= function(){
		var q,w;
		switch(randomInt(1, 24)){
			case 1:q="Hel";break;
			case 2:q="Thor";break;
			case 3:q="Urs";break;
			case 4:q="Groor";break;
			case 5:q="Donel";break;
			case 6:q="Urs";break;
			case 7:q="Gruk";break;
			case 8:q="Tungr";break;
			case 9:q="Tel";break;
			case 10:q="Tol";break;
			case 11:q="Dom";break;
			case 12:q="Tov";break;
			case 13:q="Dug";break;
			case 14:q="Rath";break;
			case 15:q="Alg";break;
			case 16:q="Glor";break;
			case 17:q="Bath";break;
			case 18:q="Far";break;
			case 19:q="Bran";break;
			case 20:q="Olin";break;
			case 21:q="Er";break;
			case 22:q="Farin";break;
			case 23:q="Tran";break;
			case 24:q="Bar";break;}


			switch(randomInt(1, 14)){
			case 1:w="sia ";break;
			case 2:w="ia ";break;
			case 3:w="ka ";break;
			case 4:w="ara ";break;
			case 5:w="gerd ";break;
			case 6:w="ga ";break;
			case 7:w="gith ";break;
			case 8:w="ula ";break;
			case 9:w="hilda ";break;
			case 10:w="mena ";break;
			case 11:w="uela ";break;
			case 12:w="gret ";break;
			case 13:w="greth ";break;
			case 14:w="ora ";break;}

		return q+w;}
	
	namegen.dwarfNameFemaleFull	= function(){
		return namegen.dwarfNameFemale() + " " + namegen.dwarfNameFamily();
	}
	namegen.dwarfNameMaleFull	= function(){
		return namegen.dwarfNameMale() + " " + namegen.dwarfNameFamily();
	}
	namegen.goblinNameMale 		= function(){
		var q,w;

		switch(randomInt(1, 47)){
		case 1:q="Griz";break;
		case 2:q="Raz";break;
		case 3:q="Rez";break;
		case 4:q="Ker";break;
		case 5:q="Kak";break;
		case 6:q="Nok";break;
		case 7:q="Fiz";break;
		case 8:q="Triz";break;
		case 9:q="Pen";break;
		case 10:q="Tink";break;
		case 11:q="Iz";break;
		case 12:q="Gig";break;
		case 13:q="Fin";break;
		case 14:q="Sog";break;
		case 15:q="Nez";break;
		case 16:q="Rit";break;
		case 17:q="Pum";break;
		case 18:q="Zit";break;
		case 19:q="Kraz";break;
		case 20:q="Krez";break;
		case 21:q="Kruz";break;
		case 22:q="Kriz";break;
		case 23:q="Driz";break;
		case 24:q="Droz";break;
		case 25:q="Draz";break;
		case 26:q="Druz";break;
		case 27:q="Drez";break;
		case 28:q="Ret";break;
		case 29:q="Rat";break;
		case 30:q="Traz";break;
		case 31:q="Truz";break;
		case 32:q="Troz";break;
		case 33:q="Fez";break;
		case 34:q="Faz";break;
		case 35:q="Fuz";break;
		case 36:q="Foz";break;
		case 37:q="Graz";break;
		case 38:q="Groz";break;
		case 39:q="Grez";break;
		case 40:q="Gruz";break;
		case 41:q="Tam";break;
		case 42:q="Kran";break;
		case 43:q="Zat";break;
		case 44:q="Zig";break;
		case 45:q="Zeg";break;
		case 46:q="Zog";break;
		case 47:q="Rig";break;}


		switch(randomInt(1, 11)){
		case 1:w="zle ";break;
		case 2:w="zar ";break;
		case 3:w="rek ";break;
		case 4:w="zik ";break;
		case 5:w="zel ";break;
		case 6:w="liz ";break;
		case 7:w="zil ";break;
		case 8:w="kle ";break;
		case 9:w="tle ";break;
		case 10:w="lowe ";break;
		case 11:w="gaz ";break;}

		return q+w;
	}
	
	namegen.goblinNameFamily 	= function(){
		var q,w;

		switch(randomInt(1, 22)){
		case 1:q="Steam";break;
		case 2:q="Bilge";break;
		case 3:q="Noggen";break;
		case 4:q="Nog";break;
		case 5:q="Babble";break;
		case 6:q="Gear";break;
		case 7:q="Grapple";break;
		case 8:q="Scrabble";break;
		case 9:q="Hard";break;
		case 10:q="Gizmo";break;
		case 11:q="Quick";break;
		case 12:q="Gripple";break;
		case 13:q="Brim";break;
		case 14:q="Cable";break;
		case 15:q="Rocket";break;
		case 16:q="Copper";break;
		case 17:q="Fickle";break;
		case 18:q="Fiddle";break;
		case 19:q="Buckle";break;
		case 20:q="Tackle";break;
		case 21:q="Scrap";break;
		case 22:q="Rubble";break;
		case 23:q="";break;
		case 24:q="";break;
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


		switch(randomInt(1, 60)){
		case 1:w="wheedle ";break;
		case 2:w="fogger ";break;
		case 3:w="snaff ";break;
		case 4:w="slipper ";break;
		case 5:w="wrench ";break;
		case 6:w="screw ";break;
		case 7:w="shredder ";break;
		case 8:w="skimmer ";break;
		case 9:w="snap ";break;
		case 10:w="fingers ";break;
		case 11:w="wheezle ";break;
		case 12:w="fuse ";break;
		case 13:w="blast ";break;
		case 14:w="bolt ";break;
		case 15:w="swing ";break;
		case 16:w="buzzle ";break;
		case 17:w="camp";break;
		case 18:w="nickle ";break;
		case 19:w="pinch ";break;
		case 20:w="wire ";break;
		case 21:w="pipe ";break;
		case 22:w="dash ";break;
		case 23:w="spragg ";break;
		case 24:w="spring ";break;
		case 25:w="spurt ";break;
		case 26:w="dowser ";break;
		case 27:w="sprocket ";break;
		case 28:w="crew ";break;
		case 29:w="wrecker ";break;
		case 30:w="lock ";break;
		case 31:w="sledge";break;
		case 32:w="dredger ";break;
		case 33:w="steamer ";break;
		case 34:w="craft ";break;
		case 35:w="link ";break;
		case 36:w="scrambler ";break;
		case 37:w="speck ";break;
		case 38:w="spank ";break;
		case 39:w="pimp ";break;
		case 40:w="bend ";break;
		case 41:w="snicker ";break;
		case 42:w="sneech ";break;
		case 43:w="sneeze ";break;
		case 44:w="boom ";break;
		case 45:w="spark ";break;
		case 46:w="crackle ";break;
		case 47:w="trap ";break;
		case 48:w="wheel";break;
		case 49:w="ratchet ";break;
		case 50:w="rack ";break;
		case 51:w="prong ";break;
		case 52:w="paddle ";break;
		case 53:w="gadget ";break;
		case 54:w="latch ";break;
		case 55:w="rod ";break;
		case 56:w="glow";break;
		case 57:w="hunk ";break;
		case 58:w="junk";break;
		case 59:w="trace";break;
		case 60:w="punk";break;}

		return q+w;}
		
		
	namegen.goblinNameFemale 	= function(){
	
		var q,w;

		switch(randomInt(1, 31)){
		case 1:q="Sazzy ";break;
		case 2:q="Donna ";break;
		case 3:q="Bambi ";break;
		case 4:q="Crystal ";break;
		case 5:q="Tiffany ";break;
		case 6:q="Amber ";break;
		case 7:q="Brandy ";break;
		case 8:q="Cherry ";break;
		case 9:q="Diamond ";break;
		case 10:q="Lexie ";break;
		case 11:q="Roxie ";break;
		case 12:q="Trixie ";break;
		case 13:q="Polly ";break;
		case 14:q="Suzie ";break;
		case 15:q="Sheila ";break;
		case 16:q="Evelyn ";break;
		case 17:q="Wanda ";break;
		case 18:q="Kristie ";break;
		case 19:q="Jasmin ";break;
		case 20:q="Nikki ";break;
		case 21:q="Lena ";break;
		case 22:q="Keisha ";break;
		case 23:q="Izzy ";break;
		case 24:q="Shayla ";break;
		case 25:q="Sharon ";break;
		case 26:q="Jenna ";break;
		case 27:q="Stacey ";break;
		case 28:q="Tamika ";break;
		case 29:q="Shaniqua ";break;
		case 30:q="Chanelle ";break;
		case 31:q="Victoria ";break;}

		return q;
		}


	namegen.goblinNameMaleFull	= function(){
		return namegen.goblinNameMale() + " " + namegen.goblinNameFamily();
	}
	
	namegen.goblinNameFemaleFull= function(){
		return namegen.goblinNameFemale() + " " + namegen.goblinNameFamily();
	}
	
	namegen.gnomeNameFamily 	= function(){
		var q,w;

		switch(randomInt(1, 11)){
		case 1:q="Click";break;
		case 2:q="Sharp";break;
		case 3:q="Swift";break;
		case 4:q="Little";break;
		case 5:q="Short";break;
		case 6:q="Glow";break;
		case 7:q="Jink";break;
		case 8:q="Nickle";break;
		case 9:q="Slip";break;
		case 10:q="Tech";break;
		case 11:q="Puddle";break;}


		switch(randomInt(1, 50)){
		case 1:w="spring ";break;
		case 2:w="whistle ";break;
		case 3:w="finger ";break;
		case 4:w="gauge ";break;
		case 5:w="needle ";break;
		case 6:w="cog ";break;
		case 7:w="pipev ";break;
		case 8:w="wrench ";break;
		case 9:w="foot ";break;
		case 10:w="pin ";break;
		case 11:w="tink ";break;
		case 12:w="widget ";break;
		case 13:w="glitch ";break;
		case 14:w="span ";break;
		case 15:w="clank ";break;
		case 16:w="spin ";break;}


		return q+w;

	}
	
	namegen.gnomeNameMaleFull 	= function(){
		return namegen.goblinNameMale() + " " + namegen.gnomeNameFamily();
	}
	
	namegen.gnomeNameFemaleFull = function(){
		return namegen.goblinNameFemale() + " " + namegen.gnomeNameFamily();
	}
	
	namegen.orcNameMale 		= function(){

		var q,w;

		switch (randomInt(1, 32)){
		case 1:q="Mok"; break;
		case 2:q="Lok'";break;
		case 3:q="Quil'";break;
		case 4:q="Rak'";break;
		case 5:q="Rok";break;
		case 6:q="Tor";break;
		case 7:q="Ur";break;
		case 8:q="Orr";break;
		case 9:q="Darr'";break;
		case 10:q="Gar";break;
		case 12:q="Gron";break;
		case 13:q="Gnar";break;
		case 14:q="Harr";break;
		case 15:q="Hrak";break;
		case 16:q="Krol";break;
		case 17:q="Kron";break;
		case 19:q="Kol";break;
		case 18:q="Krall'";break;
		case 20:q="Karth'";break;
		case 21:q="Zug'";break;
		case 22:q="Zogg'";break;
		case 23:q="Zor'";break;
		case 24:q="Xokk'";break;
		case 25:q="Rag'";break;
		case 26:q="Vrok'";break;
		case 27:q="Braak'";break;
		case 28:q="Naz'";break;
		case 29:q="Nok'";break;
		case 30:q="Mor'";break;
		case 31:q="O";break;
		case 32:q="Grom";break;}

		switch(randomInt(1, 18)){
		case 1:w="garosh";break;
		case 2:w="salok";break;
		case 3:w="tar";break;
		case 4:w="zug";break;
		case 5:w="garon";break;
		case 6:w="moga";break;
		case 7:w="ogar";break;
		case 8:w="zur";break;
		case 9:w="shar";break;
		case 10:w="gash";break;
		case 11:w="gon";break;
		case 12:w="kron";break;
		case 13:w="zul";break;
		case 14:w="rok";break;
		case 15:w="gra";break;
		case 16:w="grom";break;
		case 17:w="mash";break;
		case 18:w=" ";break;}

		return q+w;

		}
	namegen.orcNameFemale 		= function(){
		return namegen.orcNameMale + "a";
	}
	namegen.orcNameFamily 		= function(){
		var e;
		var a;
		
		switch(randomInt(1, 11)){
		case 0:e=""; break;
		case 1:e="Stone";break;
		case 2:e="War";break;
		case 3:e="Rock";break;
		case 4:e="Shadow";break;
		case 5:e="Blood";break;
		case 6:e="Boulder";break;
		case 7:e="Splinter";break;
		case 8:e="Iron"; break;
		case 9:e="Frost"; break;
		case 10:e="Crag"; break;
		case 11:e="Rage"; break;
		}

		switch(randomInt(1, 14)){
		case 1:a="mason";break;
		case 2:a="bone";break;
		case 3:a="gut";break;
		case 4:a="maw";break;
		case 5:a="head";break;
		case 6:a="maul";break;
		case 7:a="club";break;
		case 8:a="foot";break;
		case 9:a="hammer";break;
		case 10:a="fist";break;
		case 11:a="hack"; break;
		case 12:e="tribe"; break;
		case 13:e="back"; break;
		case 14:e="burn"; break;}
		
		return e + a;
	}

	
	namegen.orcNameMaleFull 	= function(){
		return namegen.orcNameMale() + " " + namegen.orcNameFamily();
	}
	namegen.orcNameFemaleFull = function(){
		return namegen.orcNameFemale() + " " + namegen.orcNameFamily();
	}
	
	namegen.halfOrcNameFemaleFull = function(){
		return namegen.orcNameFemale() + " " + namegen.humanNameFamily();
	}
	
	namegen.halfOrcNameMaleFull = function(){
		return namegen.orcNameMale() + " " + namegen.humanNameFamily();
	}
	
	namegen.halfElfNameMaleFull = function(){
		return namegen.elfNameMale() + " " + namegen.humanNameFamily();
	}
	
	namegen.halfElfNameFemaleFull = function(){
		return namegen.elfNameFemale() + " " + namegen.humanNameFamily();
	}