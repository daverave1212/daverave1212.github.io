		
	var waitTime = 2000;
		
	function startMessageQueueEngine(){
		/*setInterval( function(){
			var longestMessage = 0;
			console.log("nContacts: " + nContacts);
			for(var i = 0; i<nContacts; i++){
				var thisContact = Contacts[i];
				console.log("\t" + thisContact.name + ": " + thisContact.messageQueue.getLength())
				if(thisContact.messageQueue.getLength() > 0){
					if(thisContact.messageQueue.peek().length > longestMessage){
						longestMessage = thisContact.messageQueue.peek().length;}
					thisContact.sendMessage(thisContact.messageQueue.dequeue());
				}
				if(thisContact.messageQueue.getLength() > 0){
					thisContact.isTyping = true;}
				else{
					thisContact.isTyping = false;}
			}
			if(currentChatter != "none"){
				if(currentChatter.messageQueue.getLength() > 0){
					get("ChatTypingName").innerHTML = currentChatter.name + " is typing...";}
				else{
					get("ChatTypingName").innerHTML = "";}
			}
			updateLastMessages();
			waitTime = 500 + longestMessage * 20;
		}, 1500);
		*/
		
		
		setTimeout(	function(){
			console.log("nContacts: " + nContacts);
			for(var i = 0; i<nContacts; i++){
				var thisContact = Contacts[i];
				console.log("\t" + thisContact.name + ": " + thisContact.messageQueue.getLength())
				if(thisContact.messageQueue.getLength() > 0){
					thisContact.sendMessage(thisContact.messageQueue.dequeue());
				}
				if(thisContact.messageQueue.getLength() > 0){
					thisContact.isTyping = true;}
				else{
					thisContact.isTyping = false;}
			}
			if(currentChatter != "none"){
				if(currentChatter.messageQueue.getLength() > 0){
					get("ChatTypingName").innerHTML = currentChatter.name + " is typing...";}
				else{
					get("ChatTypingName").innerHTML = "";}
			}
			updateLastMessages();			
			startMessageQueueEngine();
		}, waitTime);
		
		
	}