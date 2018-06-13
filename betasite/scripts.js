
	var canvas;
	var talents = new Array();
	var idCounter = 0;
	var selectedTalent = -1;

	
	function Talent(x, y, name, cost, desc){
		this.linkedTalents = new Array();
		this.x = x;
		this.y = y;
		this.state = UNAVAILABLE;
		this.imageName = talentNameToImagePath(name) + ".png";
		this.image = createImage("Icons/" + this.imageName);
		setClass(this.image, "Talent Unavailable");
		this.id = idCounter; idCounter++;
		this.image.setAttribute("id", this.id + "");
		this.name = name;
		this.cost = "Cost: " + cost + " Talent Points";
		this.desc = desc;
		talents.push(this);
		this.containerDiv = createElement("div");
		setImageXY(this.containerDiv, x, y);
		this.containerDiv.appendChild(this.image);
		setClass(this.containerDiv, "TalentContainer");
		add(this.containerDiv);
		this.treeLink = createElement("div");
		setClass(this.treeLink, "TreeLinkButton");
		setImageXY(this.treeLink, this.x + 24, this.y + 50);
		this.parInsideTreeLink = createElement("p");
		this.parInsideTreeLink.innerHTML  = "See";
		setClass(this.parInsideTreeLink, "ParInsideTreeLink");
		this.treeLink.appendChild(this.parInsideTreeLink);
		this.nCharges = 0;
		this.chargesSpan = createElement("span");
		this.chargesSpan.innerHTML = "";
		setClass(this.chargesSpan, "ChargesNumber");
		setImageXY(this.chargesSpan, x, y);
		add(this.chargesSpan);
		switch(name){
		case "Agile": 
			add(this.treeLink);
			this.treeLink.addEventListener("click", loadCombatTree);
			this.parInsideTreeLink.addEventListener("click", loadCombatTree);
			
		}
		this.setState = function(s){
			if(s == AVAILABLE){
				this.state = AVAILABLE;
				setClass(this.containerDiv, "TalentContainer TalentContainerAvailable");
				setClass(this.image, "Talent Available");}
			else if(s == ACQUIRED){
				this.state = ACQUIRED;
				setClass(this.containerDiv, "TalentContainer");
				setClass(this.image, "Talent Acquired");}
			else if(s == UNAVAILABLE){
				this.state = UNAVAILABLE;
				setClass(this.image, "Talent Unavailable");}}
		this.image.addEventListener("mouseenter", function(){
			selectedTalent = this.getAttribute("id");
			selectedTalent = parseInt(selectedTalent);
			getElement("TalentName").innerHTML = talents[selectedTalent].name;
			getElement("TalentCost").innerHTML = talents[selectedTalent].cost;
			getElement("TalentDesc").innerHTML = talents[selectedTalent].desc;
			var t = talents[selectedTalent];
			getElement("DescriptionDiv").style.top = (t.y - 230) + "px";
			getElement("DescriptionDiv").style.left = (t.x + 50) + "px";
			getElement("DescriptionDiv").style.display = "block";});
		this.image.addEventListener("mouseout", function(){
			get("DescriptionDiv").style.display = "none";});
		this.image.addEventListener("click", function(){
			onClick(this.getAttribute("id"));});
	}
			
	function onClick(talent_id){
		var talent = talents[parseInt(talent_id)];
		if(talent.state == ACQUIRED){
			talent.nCharges++;
			talent.chargesSpan.innerHTML = talent.nCharges;}
		else if(talent.state == AVAILABLE){
			for(var i = 0; i<talent.linkedTalents.length; i++){
				var linkedTalent = talent.linkedTalents[i];
				if(linkedTalent.state == UNAVAILABLE){
					linkedTalent.setState(AVAILABLE);}}
			talent.setState(ACQUIRED);
			talent.nCharges++;
			talent.chargesSpan.innerHTML = talent.nCharges;}}
	
	function link(t1, t2){
		t1.linkedTalents.push(t2);
		t2.linkedTalents.push(t1);
		var context = canvas.getContext("2d");
		context.beginPath();
		context.lineWidth = 25;
		context.moveTo(t1.x + 32, t1.y + 32);
		context.lineTo(t2.x + 32, t2.y + 32);
		context.stroke();
	}
	
	function destroyAllTalents(){
		talents = new Array();
		idCounter = 0;
		selectedTalent = -1;
		removeAllChildren(get("Window"));
		var context = canvas.getContext("2d");
		context.clearRect(0, 0, canvas.width, canvas.height);}

	function main(){
		canvas = get("Canvas");
	
		loadMagicTree();

		
	} window.onload = main;
	

	
	
	
	
	
	
	