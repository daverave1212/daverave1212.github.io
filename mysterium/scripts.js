

	
	var nPlayers = 0;
	
	var Suspects = [
		"Nun",
		"Gangster",
		"Horse Champion",
		"Prostitute",
		"Old Woman Tinker",
		"Toy Maker", 
		"Mathematician",
		"Bagpipe Singer",
		"Grave Digger",
		"Maid",
		"Archaeologist",
		"Hunter",
		"Chef",
		"Necromancer",
		"War Commander",
		"Lady with Hat",
		"Car Racer",
		"Weed Dealer"];
	var Rooms = [
		"Kitchen",
		"Bathroom (chair)",
		"Untidy Desk Office",
		"Large, dark blue room",
		"Room with broken table",
		"Theatre",
		"Dining Table Room",
		"Cathedral",
		"Bedroom",
		"Blood Meat Store Room",
		"Old Attic",
		"Room with white window",
		"Mansion Entrance Outside (Moon)",
		"Mansion Entrance Inside",
		"Relaxation Room",
		"Garden",
		"Basement"];
	var Weapons = [
		"Bear Trap",
		"Shovel",
		"Speark",
		"Pistol",
		"Drown Underwater",
		"Axe",
		"Voodoo Doll",
		"Scisors",
		"Punch",
		"Whip",
		"Greatsword",
		"Mace", 
		"Shield",
		"Poison",
		"Dagger",
		"Crossbow"];
	
	function Player(){
		this.number = 0;
		this.name = "";
		this.suspect = "";
		this.room = "";
		this.weapon = "";}
		
	var Players = new Array(0);
	
	function AddPlayer(){
		nPlayers++;
		var input = get("PlayerNameInput");
		var p = createElement("p");
		p.innerHTML = nPlayers + ". " + input.value + "<br>";
		get("PlayersDiv").appendChild(p);
		var newPlayer = new Player();
		newPlayer.number = nPlayers;
		newPlayer.name = input.value;
		Players.push(newPlayer);
		input.value = "";
	}
	
	function StartGame(){
		get("PlayersDiv").innerHTML = "";
		randomizeArray(Suspects);
		randomizeArray(Rooms);
		randomizeArray(Weapons);
		for(var i = 0; i<Players.length; i++){
			Players[i].suspect = Suspects[i];
			Players[i].room = Rooms[i];
			Players[i].weapon = Weapons[i];
			var p = createElement("p");
			p.innerHTML = Players[i].name + ": ";
			p.innerHTML+= Players[i].suspect + ", " + Players[i].room + ", ";
			p.innerHTML+= Players[i].weapon + "<br>";
			get("PlayersDiv").appendChild(p);}
		get("Start").setAttribute("class", "hidden");
		get("Cronometer").setAttribute("class", "");	
		get("FinalCorrectCombination").setAttribute("class", "");
		var randomPlayer = randomInt(0, Players.length - 1);
		var cc = createElement("p");
		cc.innerHTML = Players[randomPlayer].suspect + ", ";
		cc.innerHTML+= Players[randomPlayer].room + ", ";
		cc.innerHTML+= Players[randomPlayer].weapon;
		get("FinalCorrectCombination").appendChild(cc);
	}
	
	var isCronometerRunning = false;
	var timeRemaining = 0;
	var currentRound = 0;
	function StartCronometer(){
		currentRound++;
		get("RoundNumber").innerHTML = "" + currentRound;
		timeRemaining = 90;
		get("Time").innerHTML = "90";
		isCronometerRunning = true;}
	
	function StopCronometer(){
		get("Time").innerHTML = "0";
		isCronometerRunning = false;}

	function main(){
		get("AddPlayer").addEventListener("click", AddPlayer);
		get("Start").addEventListener("click", StartGame);
		get("StartCronometer").addEventListener("click", StartCronometer);
		get("StopCronometer").addEventListener("click", StopCronometer);
		window.setInterval(
			function(){
				if(isCronometerRunning == false){
					return;}
				timeRemaining--;
				get("Time").innerHTML = timeRemaining + "";
				if(timeRemaining <= 0){
					isCronometerRunning = false;}
			}, 1000);
	
	} window.onload = main;
	

	
	
	
	
	
	
	