
	var Scenes = {}
	function changeScene(scene){
		Scenes.Menu.style.display = "none";
		Scenes.Intro.style.display = "none";
		Scenes.Contacts.style.display = "none";
		Scenes.Chat.style.display = "none";
		Scenes[scene].style.display = "block";
		
		switch(scene){
		case "Contacts":
			updateLastMessages();
			break;
		case "Chat":
			get("ChatBody").scrollTop = get("ChatBody").scrollHeight;
			break;
		}
		
	}
	
	function updateLastMessages(){
		for(var i = 0; i<nContacts; i++){
			if(Contacts[i].messageLog.length == 0){}
			else{
				var lastMessage = lastOfArray(Contacts[i].messageLog);
				Contacts[i].contactTextLastMessage.innerHTML = lastMessage.who + ": " + lastMessage.message;
			}
		}
	}

	function main(){
		Scenes.Menu = get("Menu");
		Scenes.Intro = get("Intro");
		Scenes.Contacts = get("Contacts");
		Scenes.Chat = get("Chat");
		changeScene("Menu");
		
		var Andrei = new Chat("Andrei", "Andrei.png");
		var Boris = new Chat("Boris", "Boris.png");
		
		Andrei.queueMessage("hey man");
		Andrei.queueMessage("you there?");
		Andrei.queueMessage("how you doing?", "Good. You?", "Get to the point", "sup man");

		startMessageQueueEngine();
	//	get("Window").style.height = screen.height + "px";
		
	} window.onload = main;
	

	
	
	
	
	
	
	