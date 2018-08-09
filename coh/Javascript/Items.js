
	function createItemTable(itemsArray){
		var table = createElementWithClass("table", "ItemTable");
		for(var i = 0; i<itemsArray.length; i++){
			var row = createElement("tr");
			setClass(row, "ItemTableRow");
			var rowContent = createElement("tc");
			rowContent.innerHTML = itemsArray[i];
			row.appendChild(rowContent);
			table.appendChild(row);}
		return table;
	}
	
	// Ability like
	function createItemElement(item){
		var itemWrapper = createElement("div");
		itemWrapper.setAttribute("class", "BackgroundWrapper");
		var itemWrapperLeft = createElement("div");
		itemWrapperLeft.setAttribute("class", "AbilityWrapperLeft");
		var itemIcon = createImage(item.iconPath);
		itemIcon.setAttribute("class", "AbilityIcon");
		itemWrapperLeft.appendChild(itemIcon);
		var itemWrapperRight = createElement("div");
		itemWrapperRight.setAttribute("class", "AbilityWrapperRight");
		itemWrapperRight.innerHTML = item.name + "<br><br>" + item.desc;
		itemWrapper.appendChild(itemWrapperLeft);
		itemWrapper.appendChild(itemWrapperRight);
		return itemWrapper;}