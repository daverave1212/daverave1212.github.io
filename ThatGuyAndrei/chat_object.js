
	var Contacts = new Array();
	var nContacts = 0;
	var currentChatter = "none";
	
	function getContact(contactid){
		return Contacts[parseInt(contactid)];
	}

	
	
	function Message(who, msg, o1, o2, o3){
		this.who = who;
		this.message = msg;
		this.option1 = "";
		this.option2 = "";
		this.option3 = "";
		this.__nextWaitTime = -1;
		
		if(o1 != undefined){
			this.option1 = o1;}
		if(o2 != undefined){
			this.option2 = o2;}
		if(o3 != undefined){
			this.option3 = o3;}
		
		this.messageWrapper = createElement("div");
		setClass(this.messageWrapper, "MessageWrapper");
		this.sentChatMessage = createElement("div");
		this.messageWrapper.appendChild(this.sentChatMessage);
		if(who == "Player"){
			setClass(this.sentChatMessage, "SentChatMessage");}
		else{
			setClass(this.sentChatMessage, "ReceivedChatMessage");
		}
		this.sentChatMessage.innerHTML = msg;
		
	}
	
	function Chat(name, imagepath){
		nContacts++;
	
		this.name = name;
		this.messageLog = new Array();
		this.option1 = "";
		this.option2 = "";
		this.option3 = "";
		this.id = nContacts - 1;
		this.imagePath = imagepath;
		this.isTyping = false;
		
		Contacts.push(this);
		
		this.messageQueue = new Queue();
		
		this.queueMessage = function(msg, o1, o2, o3){
			var m = new Message(this.name, msg, o1, o2, o3);
			this.messageQueue.enqueue(m);
		}
		
		this.sendMessage = function(Message_m){
			console.log("\t\tSending message: " + Message_m.message);
			console.log("\t\t" + Message_m.option1);
			console.log("\t\t" + Message_m.option2);
			console.log("\t\t" + Message_m.option3);
			waitTime = randomInt(1000, 3000);
			if(Message_m.__nextWaitTime != -1){
				waitTime = Message_m.__nextWaitTime;
			}
			this.messageLog.push(Message_m);
			this.option1 = "";
			this.option2 = "";
			this.option3 = "";
			if(Message_m.option1 != ""){
				this.option1 = Message_m.option1;}
			if(Message_m.option2 != ""){
				this.option2 = Message_m.option2;}
			if(Message_m.option3 != ""){
				this.option3 = Message_m.option3;}
			
			if(currentChatter != "none"){
				if(currentChatter.name == this.name){
					get("ChatBody").appendChild(Message_m.messageWrapper);
					playSound("andreipop.wav");
					updateChoiceButtons(this.option1, this.option2, this.option3);}}
		}
	

		this.contact = createElement("div");
		this.contact.setAttribute("contactid", this.id);
		setClass(this.contact, "Contact");
		get("ContactsContacts").appendChild(this.contact);
			this.contactImg = createElement("div");
			setClass(this.contactImg, "ContactImg");
			this.contact.appendChild(this.contactImg);
				this.image = createElement("img");
				this.image.setAttribute("src", imagepath);
				this.contactImg.appendChild(this.image);
			this.contactText = createElement("div");
			setClass(this.contactText, "ContactText");
			this.contact.appendChild(this.contactText);
				this.contactTextName = createElement("div");
				this.contactTextName.innerHTML = name;
				setClass(this.contactTextName, "ContactTextName");
				this.contactText.appendChild(this.contactTextName);
				this.contactTextLastMessage = createElement("div");
				setClass(this.contactTextLastMessage, "ContactTextLastMessage");
				this.contactTextLastMessage.innerHTML = name + " just added you.";
				this.contactText.appendChild(this.contactTextLastMessage);
			this.contactOther = createElement("div");
			setClass(this.contactOther, "ContactOther");
			this.contact.appendChild(this.contactOther);
				this.contactOtherTimestamp = createElement("div");
				setClass(this.contactOtherTimestamp, "ContactOtherTimestamp");
				this.contactOther.appendChild(this.contactOtherTimestamp);
				this.contactTextSeen = createElement("div");
				setClass(this.contactTextSeen, "ContactTextSeen");
				this.contactOther.appendChild(this.contactTextSeen);
		this.contact.onclick = function(){
			onContactClick(this.getAttribute("contactid"));}
	
	}
	
	function onContactClick(contactid){
		loadChat(contactid);
	}

	function updateChoiceButtons(o1, o2, o3){
		console.log(o1);
		console.log(o2);
		console.log(o3);
		get("ChatChoice1").innerHTML = o1;
		get("ChatChoice2").innerHTML = o2;
		get("ChatChoice3").innerHTML = o3;}
	
	function loadChat(contactid){
		removeAllChildren(get("ChatBody"));
		currentChatter = Contacts[parseInt(contactid)];
		updateChoiceButtons(currentChatter.option1, currentChatter.option2, currentChatter.option3);
		get("ChatName").innerHTML = currentChatter.name;
		get("ChatImgImg").src = currentChatter.imagePath;
		changeScene("Chat");
		if(currentChatter.isTyping){
			get("ChatTypingName").innerHTML = currentChatter.name + " is typing...";
		} else {
			get("ChatTypingName").innerHTML = "";
		}
		for(var i = 0; i<currentChatter.messageLog.length; i++){
			get("ChatBody").appendChild(currentChatter.messageLog[i].messageWrapper);
		}
	}
	
	