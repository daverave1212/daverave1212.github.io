
	var Scenes = {}
	function changeScene(scene){
		Scenes.Menu.style.display = "none";
		console.log("a");
		Scenes.Intro.style.display = "none";
		console.log("a");
		Scenes.Contacts.style.display = "none";
		console.log("a");
		Scenes.Chat.style.display = "none";
		console.log("a");
		Scenes[scene].style.display = "block";
	}

	function main(){
		Scenes.Menu = get("Menu");
		Scenes.Intro = get("Intro");
		Scenes.Contacts = get("Contacts");
		Scenes.Chat = get("Chat");
		changeScene("Menu");
		
	//	get("Window").style.height = screen.height + "px";
		
	} window.onload = main;
	

	
	
	
	
	
	
	