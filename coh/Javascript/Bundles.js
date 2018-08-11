
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
	
	link("Start", "Start2");
	
	new Bundle("Basic Magic", [Abilities["magic"]]);
	new Bundle("Dark Powers", [Abilities["dark_call"], Abilities["dark_vision"]]);
	new Bundle("Fighting Skills", [Abilities["flank_attack"]]);
	new Bundle("Thievery", [Abilities["slice_and_dice"], Abilities["pick_lock"]]);
	new Bundle("Rangery", [Abilities["range"], Abilities["alarm"]]);
	new Bundle("Druid", [Abilities["call_of_nature"], Abilities["mindful_meditation"]]);
	new Bundle("Sanctity", [Abilities["holy_light"]]);

	link("Start", "Basic Magic");
	link("Start", "Dark Powers");
	link("Start", "Fighting Skills");
	link("Start", "Thievery");
	link("Start", "Rangery");
	link("Start", "Druid");
	link("Start", "Sanctity");
	
	
	
