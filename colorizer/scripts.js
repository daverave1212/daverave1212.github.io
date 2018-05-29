
	function colorConvert(_Color){
		return "#" + _Color.color.substring(2, 9) + _Color.color.substring(0, 2);
	}

	function addExample(_Color){
		var exampleBox = get("Examples");
		console.log(exampleBox);
		var par = createElement("p");
		//par.style.color = colorConvert(_Color);
		par.setAttribute("style", "color: " + colorConvert(_Color));
		par.innerHTML = _Color.name;
		console.log(par);
		exampleBox.appendChild(par);}

	function Color(_name, _color){
		this.name = _name;
		this.color = _color;}
		
	var Colors = new Array(0);
	Colors[0] = new Color("red", "FFFF0000");
	Colors[1] = new Color("green", "FF00FF00");
	Colors[2] = new Color("blue", "FF3399FF");
	Colors[3] = new Color("grey", "FFAAAAAA");
	Colors[4] = new Color("yellow", "FFFFFF00");
	Colors[5] = new Color("magenta", "FFFF00FF");
	Colors[6] = new Color("teal", "FF00FFFF");
	Colors[7] = new Color("lblue", "FF9999FF");
	Colors[8] = new Color("pink", "FFFF99FF");
	Colors[9] = new Color("purple", "FFFF66FF");
	Colors[10] = new Color("tan", "FFFFEBCD");
	Colors[11] = new Color("orange", "FFFFAA55");
	Colors[12] = new Color("gold", "FFFFD700");
	Colors[13] = new Color("white", "FFFFFFFF");
	Colors[14] = new Color("navy", "FF0000BB");
	
	
	//Colors[] = new Color("", "FF");

	function isCharSpecial(char){
		if(char == "\n" || char == "|"){return true;}
		return false;}
		
	function findColor(string, start){
		for(var i = 0; i<Colors.length; i++){
			var k = 0;
			var colorFound = false;
			while(Colors[i].name[k] == string[start + k]){
				k++;
				if(k == Colors[i].name.length){
					colorFound = true;
					break;}}
			if(colorFound == true){
				return i;}}
		return 0;}

	function parseText(input){
		var output = "";
		var closingColor = false;
		var resultDiv = createElement("div");
		var currentSpan = createElement("span");
		var spanStart = 0;
		for(var i = 0; i<input.length; i++){
			var letter = input[i];
			if(!isCharSpecial(letter)){
				output += letter;}
			else{
				if(letter == "\n"){
					var newSpan = createElement("span");
					currentSpan.innerHTML = input.substring(spanStart, i) + "<br>";
					resultDiv.appendChild(currentSpan);
					newSpan.style = currentSpan.style;
					spanStart = i + 1;
					currentSpan = newSpan;
					output += "|n";}
				else if(letter == "|" && closingColor == false){
					currentSpan.innerHTML = input.substring(spanStart, i);
					resultDiv.appendChild(currentSpan);
					closingColor = true;
					console.log("Finding color..");
					var foundColor = findColor(input, i+1);
					var newI = i + Colors[foundColor].name.length;
					output += "|c" + Colors[foundColor].color;
					currentSpan = createElement("span");
					spanStart = i + 1 + Colors[foundColor].name.length;;
					currentSpan.style.color = colorConvert(Colors[foundColor]);
					i = newI;}
				else if(letter == "|" && closingColor == true){
					currentSpan.innerHTML = input.substring(spanStart, i);
					resultDiv.appendChild(currentSpan);
					closingColor = false;
					currentSpan = createElement("span");
					spanStart = i + 1;
					output += "|r";}}}
		while (get("Result").firstChild) {
			get("Result").removeChild(get("Result").firstChild);}
		currentSpan.innerHTML = input.substring(spanStart, input.length);
		resultDiv.appendChild(currentSpan);
		get("Result").appendChild(resultDiv);
		return output;
	}

	function main(){
	
		for(var i = 0; i<Colors.length; i++){
			console.log("ADASD");
			addExample(Colors[i]);}
			
		console.log(get("Examples").innerHTML);
		setInterval(function(){
			console.log(get("Input").innerHTML);
			get("Output").value = parseText(get("Input").value);
		}, 1000);
	} window.onload = main;
	

	
	
	
	
	
	
	