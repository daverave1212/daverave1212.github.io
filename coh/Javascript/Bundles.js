
	var Bundles = {};

	function Bundle(Name, Abilities){
		Bundles[Name] = this;
		this.name = Name;
		this.abilities = Abilities;
		this.nextBundles = new Array();}
	
	function link(b1str, b2str){
		var b1 = Bundles[b1str];
		var b2 = Bundles[b2str];
		b1.nextBundles.push(b2);}
		
	function createBundleElement(bundle){
		var bundleWrapper = createElementWithClass("div", "BundleWrapper Bordered");
		var bundleName = createElementWithClass("p", "BundleName");
		bundleName.innerHTML = bundle.name;
		var bundleIconWrapper = createElementWithClass("div", "Bundle");
		var chooseThisBundle = createElementWithClass("div", "ChooseThisBundle Button");
		chooseThisBundle.setAttribute("name", bundle.name);
		chooseThisBundle.innerHTML = "Choose";
		chooseThisBundle.onclick = function(){
			Player.addBundle(Bundles[this.getAttribute("name")]);
			afterBundleWasAdded();}
		bundleWrapper.appendChild(bundleName);
		bundleWrapper.appendChild(bundleIconWrapper);
		bundleWrapper.appendChild(chooseThisBundle);
		for(var i = 0; i<bundle.abilities.length; i++){
			bundleIconWrapper.appendChild(createAbilityElementForBundle(bundle.abilities[i]));}
		return bundleWrapper;}
			
		
	new Bundle("Start", []);	// Default bundle. Base bundles branch from here.
	new Bundle("Start2", [Abilities["agile"]]);
	new Bundle("Start3", [Abilities["agile"], Abilities["agile"]]);
	new Bundle("Magic1", [Abilities["frost_stance"], Abilities["frost_stance"], Abilities["frost_stance"]]);
	
	link("Start", "Start2");
	link("Start", "Start3");
	link("Start3", "Magic1");
