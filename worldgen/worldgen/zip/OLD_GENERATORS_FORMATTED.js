	class Base{
	public: void println(var s){
	cout<<s<<endl;}
	public: var rd(var a){
	var b;
	b=rand()%a+1;
	return b;}
	public: void cs(){
	system("CLS");}
	function Random_Elf(){
	var r,t;
	var q,w;

	r=rand()%32+1;
	switch(r){
	case 1:q="Ar"; break;
	case 2:q="Quel";break;
	case 3:q="Que'";break;
	case 4:q="Quar";break;
	case 5:q="Qor'";break;
	case 6:q="Er";break;
	case 7:q="Era'";break;
	case 8:q="Eo";break;
	case 9:q="Shala";break;
	case 10:q="Ell";break;
	case 11:q="Eon";break;
	case 12:q="Ron";break;
	case 13:q="Kel'";break;
	case 14:q="Tere";break;
	case 15:q="Teli";break;
	case 16:q="Tali";break;
	case 17:q="Terion'";break;
	case 18:q="Ysh'";break;
	case 19:q="Kirin'";break;
	case 20:q="Aeth";break;
	case 21:q="Thal'";break;
	case 22:q="Tae'";break;
	case 23:q="Thae";break;
	case 24:q="Lor";break;
	case 25:q="As";break;
	case 26:q="Drae";break;
	case 27:q="Voren";break;
	case 28:q="Vor'";break;
	case 29:q="Val";break;
	case 30:q="Quel";break;
	case 31:q="Qual";break;
	case 32:q="Qeth";break;
	default: q="balaur";


	}


	t=rand()%18+1;

	switch(t){
	case 1: w="vanash";break;
	case 2: w="ash";break;
	case 3: w="dorei";break;
	case 4: w="doras";break;
	case 5: w="thalas";break;
	case 6: w="nar";break;
	case 7: w="nor";break;
	case 8: w="shal";break;
	case 9: w="agon";break;
	case 10: w="gon";break;
	case 11: w="ion";break;
	case 12: w="arion";break;
	case 13: w="narion";break;
	case 14: w="lash";break;
	case 15: w="vash";break;
	case 16: w="nin";break;
	case 17: w="nesh";break;
	case 18: w="arash";break;
	default:w="aubhda";}

	return q+w;


	}

	function Random_Town_2(){
	var r,t;
	var q1,q2;





	r=rand()%50+1;

	switch(r){
	case 1: q1="Dragon"; break;
	case 2: q1="Blood"; break;
	case 3: q1="Red"; break;
	case 4: q1="Ever"; break;
	case 5: q1="West"; break;
	case 6: q1="East"; break;
	case 7: q1="South"; break;
	case 8: q1="North"; break;
	case 9: q1="Wind"; break;
	case 10: q1="Harth"; break;
	case 11: q1="Storm"; break;
	case 12: q1="Sea"; break;
	case 13: q1="Lake"; break;
	case 14: q1="River"; break;
	case 15: q1="Hroth"; break;
	case 16: q1="Long"; break;
	case 17: q1="Short"; break;
	case 18: q1="Way"; break;
	case 19: q1="Great"; break;
	case 20: q1="Winter"; break;
	case 21: q1="Summer"; break;
	case 22: q1="Spring"; break;
	case 23: q1="Gold"; break;
	case 24: q1="Black"; break;
	case 25: q1="Dark"; break;
	case 26: q1="Light"; break;
	case 27: q1="Cold"; break;
	case 28: q1="Warm"; break;
	case 29: q1="Wolf"; break;
	case 30: q1="Pike"; break;
	case 31: q1="Strong"; break;
	case 32: q1="Bear"; break;
	case 33: q1="Iron"; break;
	case 34: q1="Snow"; break;
	case 35: q1="Rain"; break;
	case 36: q1="Pendle"; break;
	case 37: q1="Dawn"; break;
	case 38: q1="Sun"; break;
	case 39: q1="Day"; break;
	case 40: q1="Night"; break;
	case 41: q1="Lords"; break;
	case 42: q1="Kings"; break;
	case 43: q1="Stall";break;
	case 44:q1="Sovern";break;
	case 45:q1="Brair";break;
	case 46:q1="Solst";break;
	case 47:q1="Farren";break;
	case 48:q1="High";break;
	case 49:q1="Darn";break;
	case 50:q1="High";break;
	default: q1="Zimbalaur";}

	t=rand()%46+1;

	switch(t){
	case 1: q2="shire"; break;
	case 2: q2="glen"; break;
	case 3: q2="ridge"; break;
	case 4: q2="town"; break;
	case 5: q2="garden"; break;
	case 6: q2="den"; break;
	case 7: q2="vale"; break;
	case 8: q2="meadow"; break;
	case 9: q2="hill"; break;
	case 10: q2="brad"; break;
	case 11: q2="mire"; break;
	case 12: q2="mill"; break;
	case 13: q2="keep"; break;
	case 14: q2="hold"; break;
	case 15: q2="watch"; break;
	case 16: q2="post"; break;
	case 17: q2="ford"; break;
	case 18: q2="marsh"; break;
	case 19: q2="field"; break;
	case 20: q2="ville"; break;
	case 21: q2="land"; break;
	case 22: q2="fell"; break;
	case 23: q2="shore"; break;
	case 24: q2="guard"; break;
	case 25: q2="garde"; break;
	case 26: q2="wallow"; break;
	case 27: q2="stead"; break;
	case 28: q2="fall"; break;
	case 29: q2="wall"; break;
	case 30: q2="state"; break;
	case 31: q2="run";break;
	case 32: q2="ward";break;
	case 33: q2="water";break;
	case 34: q2="tower";break;
	case 35: q2="bay";break;
	case 36: q2="wood";break;
	case 37: q2="dale";break;
	case 38: q2="heim";break;
	case 39: q2="vael"; break;
	case 40: q2="dor"; break;
	case 41: q2="grad"; break;
	case 42: q2="voord"; break;
	case 43: q2="thurn"; break;
	case 44: q2="furt"; break;
	case 45: q2="dorne"; break;
	case 46: q2="wich";break;
	default: q2="Zimbalaur";}

	return q1+q2;
	}
	function Random_Orc(){

	var r,t,i;
	var q,w;




	r=rand()%32+1;

	switch (r){
	case 1:q="Mok"; break;
	case 2:q="Lok'";break;
	case 3:q="Quil'";break;
	case 4:q="Rak'";break;
	case 5:q="Rok";break;
	case 6:q="Tor";break;
	case 7:q="Ur";break;
	case 8:q="Orr";break;
	case 9:q="Darr'";break;
	case 10:q="Gar";break;
	case 12:q="Gron";break;
	case 13:q="Gnar";break;
	case 14:q="Harr";break;
	case 15:q="Hrak";break;
	case 16:q="Krol";break;
	case 17:q="Kron";break;
	case 19:q="Kol";break;
	case 18:q="Krall'";break;
	case 20:q="Karth'";break;
	case 21:q="Zug'";break;
	case 22:q="Zogg'";break;
	case 23:q="Zor'";break;
	case 24:q="Xokk'";break;
	case 25:q="Rag'";break;
	case 26:q="Vrok'";break;
	case 27:q="Braak'";break;
	case 28:q="Naz'";break;
	case 29:q="Nok'";break;
	case 30:q="Mor'";break;
	case 31:q="O";break;
	case 32:q="Grom";break;}

	t=rand()%18+1;

	switch(t){
	case 1:w="garosh";break;
	case 2:w="salok";break;
	case 3:w="tar";break;
	case 4:w="zug";break;
	case 5:w="garon";break;
	case 6:w="moga";break;
	case 7:w="ogar";break;
	case 8:w="zur";break;
	case 9:w="shar";break;
	case 10:w="gash";break;
	case 11:w="gon";break;
	case 12:w="kron";break;
	case 13:w="zul";break;
	case 14:w="rok";break;
	case 15:w="gra";break;
	case 16:w="grom";break;
	case 17:w="mash";break;
	case 18:w=" ";break;}

	return q+w;

	}
	function Random_Place(){
	var r,t,i;
	var q,w;



	r=rand()%28+1;

	switch(r){
	case 1:q="Mage's ";break;
	case 2:q="Warrior's ";break;
	case 3:q="Magister's ";break;
	case 4:q="The Howling ";break;
	case 5:q="The Proving ";break;
	case 6:q="Hell's ";break;
	case 7:q="The Forgotten ";break;
	case 8:q="The Oblivion ";break;
	case 9:q="The Stone ";break;
	case 10:q="The Eastern ";break;
	case 11:q="The Western ";break;
	case 12:q="The Northern ";break;
	case 13:q="The Southern ";break;
	case 14:q="The Searing ";break;
	case 15:q="The Screaming ";break;
	case 16:q="The Golden ";break;
	case 17:q="The Brimstone ";break;
	case 18:q="Summoner's ";break;
	case 19:q="The Holy ";break;
	case 20:q="Sun's ";break;
	case 21:q="Moon's ";break;
	case 22:q="The Burning ";break;
	case 23:q="The Twilight ";break;
	case 24:q="The False ";break;
	case 25:q="Falcon's ";break;
	case 26:q="The Blessed ";break;
	case 27:q="The Cursed ";break;
	case 28:q="Storm's ";break;}

	t=rand()%26+1;

	switch (t){
		case 1:w="Retreat";break;
		case 2:w="Terrace";break;
		case 3:w="Fjord";break;
		case 4:w="Grounds";break;
		case 5:w="Grave";break;
		case 6:w="Pools";break;
		case 7:w="Rift";break;
		case 8:w="Fields";break;
		case 9:w="Kingdoms";break;
		case 10:w="Lands";break;
		case 11:w="Falls";break;
		case 12:w="Wall";break;
		case 13:w="Breach";break;
		case 14:w="Gate";break;
		case 15:w="Gorge";break;
		case 16:w="Steppes";break;
		case 17:w="Tundra";break;
		case 18:w="Abyss";break;
		case 19:w="Sea";break;
		case 20:w="Hill";break;
		case 21:w="Chapel";break;
		case 22:w="Altar";break;
		case 23:w="Halls";break;
		case 24:w="Enclave";break;
		case 25:w="Square";break;
		case 26:w="End";break;
		case 27:w="";break;


	}
	return q+w;

	}
	public: void Random_Sword(){
	var i,r,t;
	var q,w;
	r=rd(24);
	switch(r){
	case 1:w="Frost";break;
	case 2:w="Dark";break;
	case 3:w="Blood";break;
	case 4:w="Shadow";break;
	case 5:w="Rune";break;
	case 6:w="Cold";break;
	case 7:w="Hate";break;
	case 8:w="Ghost";break;
	case 9:w="Silver";break;
	case 10:w="Gold";break;
	case 11:w="Bronze";break;
	case 12:w="Thunder";break;
	case 13:w="Echo";break;
	case 14:w="Oath";break;
	case 15:w="Steel";break;
	case 16:w="Night";break;
	case 17:w="Day";break;
	case 18:w="Sun";break;
	case 19:w="Life";break;
	case 20:w="Moon";break;
	case 21:w="Bane";break;
	case 22:w="Death";break;
	case 23:w="Mage";break;
	case 24:w="Pain";break;
	}

	t=rd(20);
	switch(t){
	case 1:q="mourne";break;
	case 2:q="blade";break;
	case 3:q="keeper";break;
	case 4:q="ward";break;
	case 5:q="sword";break;
	case 6:q="vengeance";break;
	case 7:q="bringer";break;
	case 8:q=" Devourer";break;
	case 9:q=" Swiftblade";break;
	case 10:q="slayer";break;
	case 11:q="slicer";break;
	case 12:q="guard";break;
	case 13:q="breaker";break;
	case 14:q="more";break;
	case 15:q="saber";break;
	case 16:q="bane";break;
	case 17:q="fury";break;
	case 18:q="reaper";break;
	case 19:q="";break;
	case 20:q="edge";break;
	}
	cout<<w<<q<<endl;

	}
	public: void Random_Mace(){
		var q,w,e;
	switch(rd(24)){
	case 1:q="Righteous ";break;
	case 2:q="Lavaforged ";break;
	case 3:q="Ironforged ";break;
	case 4:q="Steelforged ";break;
	case 5:q="Earthforged ";break;
	case 6:q="Cobaltforged ";break;
	case 7:q="Goldforged ";break;
	case 8:q="Silverforged ";break;
	case 9:q="Crusader's ";break;
	case 10:q="Gladiator's ";break;
	case 11:q="Warlord's ";break;
	case 12:q="Paladin's ";break;
	case 13:q="";break;
	case 14:q="";break;
	case 15:q="";break;
	case 16:q="";break;
	case 17:q="";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;

	}

	switch (rd(12)){
	case 1:w="Skull";break;
	case 2:w="Bone";break;
	case 3:w="Sledge";break;
	case 4:w="Head";break;
	case 5:w="Rock";break;
	case 6:w="Ice";break;
	case 7:w="Stone";break;
	case 8:w="Ebon";break;
	case 9:w="Rib";break;
	case 10:w="Wood";break;
	case 11:w="Spine";break;
	case 12:w="Steel";break;
	}

	switch(rd(22)){
	case 1:e="basher";break;
	case 2:e="splinter";break;
	case 3:e=" Smasher";break;
	case 4:e="mace";break;
	case 5:e="breaker";break;
	case 6:e="maul";break;
	case 7:e="hammer";break;
	case 8:e="club";break;
	case 9:e="mallet";break;
	case 10:e="cracker";break;
	case 11:e="pounder";break;
	case 12:e="slammer";break;
	case 13:e=" Pulverizer";break;
	case 14:e=" Sledgehammer";break;
	case 15:e=" Demolisher";break;
	case 16:e=" Destroyer";break;
	case 17:e="force";break;
	case 18:e=" Warhammer";break;
	case 19:e="dredger";break;
	case 20:e="grinder";break;
	case 21:e="might";break;
	case 22:e=" Brutalizer";break;
	case 23:e="phage";break;
	case 24:e=" Shatterer";break;
	case 25:e="flail";break;}

	cout<<q<<w<<e<<endl;



	}
	public: void World(){

	var q,w;
	switch(rd(45)){
	case 1:q="Era";break;
	case 2:q="Tera";break;
	case 3:q="Qa";break;
	case 4:q="War";break;
	case 5:q="Eion";break;
	case 6:q="Eran";break;
	case 7:q="Rea";break;
	case 8:q="Tesa";break;
	case 9:q="Tas";break;
	case 10:q="Yi";break;
	case 11:q="Ion";break;
	case 12:q="Osh";break;
	case 13:q="Per";break;
	case 14:q="Az";break;
	case 15:q="Ale";break;
	case 16:q="Athe";break;
	case 17:q="Serte";break;
	case 18:q="Sona";break;
	case 19:q="Daen";break;
	case 20:q="Dal";break;
	case 21:q="Fal";break;
	case 22:q="Gal";break;
	case 23:q="Ga";break;
	case 24:q="Garon";break;
	case 25:q="Gaer";break;
	case 26:q="Hin";break;
	case 27:q="Jael";break;
	case 28:q="Jaer";break;
	case 29:q="Kirin";break;
	case 30:q="Drei";break;
	case 31:q="Ki";break;
	case 32:q="Laon";break;
	case 33:q="Leen";break;
	case 34:q="Zeta";break;
	case 35:q="Xer";break;
	case 36:q="Cyn";break;
	case 37:q="Ceer";break;
	case 38:q="Valir";break;
	case 39:q="Valor";break;
	case 40:q="Dema";break;
	case 41:q="Bael";break;
	case 42:q="Nimb";break;
	case 43:q="Naeris";break;
	case 44:q="Miir";break;
	case 45:q="Maer";break;
	case 46:q="";break;
	case 47:q="";break;
	case 49:q="";break;
	case 48:q="";break;
	case 50:q="";break;


	}
	switch(rd(14)){
	case 1:w="ia";break;
	case 2:w="thia";break;
	case 3:w="rion";break;
	case 4:w="sion";break;
	case 5:w="ith";break;
	case 6:w="eth";break;
	case 7:w="ion";break;
	case 8:w="eroth";break;
	case 9:w="cia";break;
	case 10:w="rothen";break;
	case 11:w="eris";break;
	case 12:w="an";break;
	case 13:w="na";break;
	case 14:w="sia";break;
	case 15:w="";break;
	case 16:w="";break;
	case 17:w="";break;
	case 18:w="";break;
	case 19:w="";break;
	case 20:w="";break;
	case 21:w="";break;
	case 22:w="";break;
	case 23:w="";break;
	case 24:w="";break;
	case 25:w="";break;
	case 26:w="";break;
	case 27:w="";break;
	case 28:w="";break;
	case 29:w="";break;
	case 30:w="";break;
	case 31:w="";break;
	case 32:w="";break;
	case 33:w="";break;
	case 34:w="";break;
	case 35:w="";break;
	case 36:w="";break;
	case 37:w="";break;
	case 38:w="";break;
	case 39:w="";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}
	cout<<q<<w<<endl;

	}
	public: void Plant(var a){
	//80x36x23+70x27+36x23+80x36
	var q,w,e=" ";
	var t,d;
	if(a==1)
	t=rd(4);

	if(a==2)
		t=2;

		if(a==4)
			t=2;
	if(a==3)
		t=1;

	if(t==1){

		switch(rd(73)){
	case 1:q="Saram";break;
	case 2:q="Lavan";break;
	case 3:q="Celan";break;
	case 4:q="Cindin";break;
	case 5:q="Cin";break;
	case 6:q="Lav";break;
	case 7:q="Sar";break;
	case 8:q="Quar";break;
	case 9:q="Wir";break;
	case 10:q="Wex";break;
	case 11:q="Epsen";break;
	case 12:q="Epsin";break;
	case 13:q="Alco";break;
	case 14:q="Rit";break;
	case 15:q="Riven";break;
	case 16:q="Rar";break;
	case 17:q="Ral";break;
	case 18:q="Riva";break;
	case 19:q="Telur";break;
	case 20:q="Tar";break;
	case 21:q="Thoran";break;
	case 22:q="Taran";break;
	case 23:q="Reval";break;
	case 24:q="Yog";break;
	case 25:q="Ur";break;
	case 26:q="Inrin";break;
	case 27:q="Yngrun";break;
	case 28:q="Ox";break;
	case 29:q="Oxen";break;
	case 30:q="Potan";break;
	case 31:q="Potal";break;
	case 32:q="Sartem";break;
	case 33:q="Dorak";break;
	case 34:q="Der";break;
	case 35:q="Apin";break;
	case 36:q="Hal";break;
	case 37:q="Heder";break;
	case 38:q="Aether";break;
	case 39:q="Gan";break;
	case 40:q="Gramem";break;
	case 41:q="Jivim";break;
	case 42:q="Kiril";break;
	case 43:q="Lotar";break;
	case 44:q="Zax";break;
	case 45:q="Zaxer";break;
	case 46:q="Zaxem";break;
	case 47:q="Xisen";break;
	case 48:q="Xim";break;
	case 49:q="Con";break;
	case 50:q="Connin";break;
	case 51:q="Ambicon";break;
	case 52:q="Dem";break;
	case 53:q="Demim";break;
	case 54:q="Viscan";break;
	case 55:q="Velen";break;
	case 56:q="Berrin";break;
	case 57:q="Ber";break;
	case 58:q="Naxin";break;
	case 59:q="Verin";break;
	case 60:q="Nether";break;
	case 61:q="Mand";break;
	case 62:q="Mander";break;
	case 63:q="Aman";break;
	case 64:q="Amar";break;
	case 65:q="Aster";break;
	case 66:q="Mander";break;
	case 67:q="Aman";break;
	case 68:q="Amar";break;
	case 69:q="Aster";break;
	case 70:q="Emer";break;
	case 71:q="Calen";break;
	case 72:q="Amal";break;
	case 73:q="Iren";break;
	}



	switch(rd(28)){
	case 1:w="ine";break;
	case 2:w="dine";break;
	case 3:w="aria";break;
	case 4:w="naria";break;
	case 5:w="erin";break;
	case 6:w="um";break;
	case 7:w="der";break;
	case 8:w="idion";break;
	case 9:w="edum";break;
	case 10:w="am";break;
	case 11:w="sam";break;
	case 12:w="us";break;
	case 13:w="cohest";break;
	case 14:w="hest";break;
	case 15:w="cohol";break;
	case 16:w="mine";break;
	case 17:w="atus";break;
	case 18:w="dis";break;
	case 19:w="os";break;
	case 20:w="rylis";break;
	case 21:w="gonia";break;
	case 22:w="gamot";break;
	case 23:w="lias";break;
	case 24:w="phinum";break;
	case 25:w="iolus";break;
	case 26:w="andum";break;
	case 27:w="cinth";break;
	case 28:w="dula";break;
	case 29:w="";break;
	case 30:w="";break;
	case 31:w="";break;
	case 32:w="";break;
	case 33:w="";break;
	case 34:w="";break;
	case 35:w="";break;
	case 36:w="";break;
	case 37:w="";break;
	case 38:w="";break;
	case 39:w="";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}

	cout<<q<<w<<endl;


	}
	else{

		switch(rd(80)){
	case 1:q="Peace";break;
	case 2:q="War";break;
	case 3:q="Silver";break;
	case 4:q="Gold";break;
	case 5:q="Bronze";break;
	case 6:q="Steel";break;
	case 7:q="Iron";break;
	case 8:q="Red";break;
	case 9:q="Blue";break;
	case 10:q="Black";break;
	case 11:q="White";break;
	case 12:q="Earth";break;
	case 13:q="Sky";break;
	case 14:q="Cloud";break;
	case 15:q="Death";break;
	case 16:q="Life";break;
	case 17:q="Grave";break;
	case 18:q="Swift";break;
	case 19:q="Slow";break;
	case 20:q="Brair";break;
	case 21:q="Lion";break;
	case 22:q="Wolfs";break;
	case 23:q="Blood";break;
	case 24:q="Whisker";break;
	case 25:q="Fire";break;
	case 26:q="Frost";break;
	case 27:q="Cold";break;
	case 28:q="Warm";break;
	case 29:q="Hot";break;
	case 30:q="Day";break;
	case 31:q="Night";break;
	case 32:q="Dusk";break;
	case 33:q="Dawn";break;
	case 34:q="Purple";break;
	case 35:q="Sun";break;
	case 36:q="Moon";break;
	case 37:q="Sorrow";break;
	case 38:q="Mirth";break;
	case 39:q="Cinder";break;
	case 40:q="Ash";break;
	case 41:q="Ember";break;
	case 42:q="Ruby";break;
	case 43:q="Glory";break;
	case 44:q="Rage";break;
	case 45:q="Flame";break;
	case 46:q="Nether";break;
	case 47:q="Tiger";break;
	case 48:q="Rain";break;
	case 49:q="Drought";break;
	case 50:q="Star";break;
	case 51:q="Echo";break;
	case 52:q="Thunder";break;
	case 53:q="Dark";break;
	case 54:q="Light";break;
	case 55:q="Water";break;
	case 56:q="Sea";break;
	case 57:q="Swamp";break;
	case 58:q="Marsh";break;
	case 59:q="Field";break;
	case 60:q="Summer";break;
	case 61:q="Winter";break;
	case 62:q="Fall";break;
	case 63:q="Riser";break;
	case 64:q="Spring";break;
	case 65:q="Cave";break;
	case 66:q="Hate";break;
	case 67:q="Tumble";break;
	case 68:q="Wine";break;
	case 69:q="Grape";break;
	case 70:q="Merry";break;
	case 71:q="Knettle";break;
	case 73:q="Wit";break;
	case 72:q="Smite";break;
	case 74:q="Drake";break;
	case 75:q="Dragon";break;
	case 76:q="Were";break;
	case 77:q="Barren";break;
	case 78:q="Dry";break;
	case 79:q="Bleak";break;
	case 80:q="Honey";break;
	case 81:q="";break;}


	switch(rd(36)){
	case 1:w="leaf";break;
	case 2:w="bloom";break;
	case 3:w="root";break;
	case 4:w="thorn";break;
	case 5:w="weed";break;
	case 6:w="kelp";break;
	case 7:w="moss";break;
	case 8:w="branch";break;
	case 9:w="grass";break;
	case 10:w="foil";break;
	case 11:w=" Lotus";break;
	case 12:w="shroom";break;
	case 13:w="cap";break;
	case 14:w="thistle";break;
	case 15:w="herb";break;
	case 16:w="berry";break;
	case 17:w="sprout";break;
	case 18:w=" Tulip";break;
	case 19:w=" Rose";break;
	case 20:w="bell";break;
	case 21:w="brush";break;
	case 22:w="blossom";break;
	case 23:w="clover";break;
	case 24:w="fin";break;
	case 25:w=" Orchid";break;
	case 26:w="sage";break;
	case 27:w="flower";break;
	case 28:w="thyme";break;
	case 29:w="blossom";break;
	case 30:w="nettle";break;
	case 31:w=" Lilly";break;
	case 32:w="seed";break;
	case 33:w="nip";break;
	case 34:w="vine";break;
	case 35:w="fern";break;
	case 36:w="mary";break;
	case 37:w="";break;
	case 38:w="";break;
	case 39:w="";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}


	switch(rd(23)){
	case 1:e="Peasant's ";break;
	case 2:e="King's ";break;
	case 3:e="Monk's ";break;
	case 4:e="Witch's ";break;
	case 5:e="Dragon's ";break;
	case 6:e="Ghoul's ";break;
	case 7:e="Elvish ";break;
	case 8:e="Corrupted ";break;
	case 9:e="Fisher's ";break;
	case 10:e="Eagle's ";break;
	case 11:e="Cat's ";break;
	case 12:e="Dog's ";break;
	case 13:e="Lady's ";break;
	case 14:e="Baron's ";break;
	case 15:e="Gypsy ";break;
	case 16:e="Lord's ";break;
	case 17:e="Wither's ";break;
	case 18:e="Knight's ";break;
	case 19:e="Demon's ";break;
	case 20:e="Angel's ";break;
	case 21:e="Cursed ";break;
	case 22:e="Holy ";break;
	case 23:e="Dwarven ";break;
	case 24:e="";break;
	case 25:e="";break;
	case 26:e="";break;
	case 27:e="";break;
	case 28:e="";break;
	case 29:e="";break;
	case 30:e="";break;
	case 31:e="";break;
	case 32:e="";break;
	case 33:e="";break;
	case 34:e="";break;
	case 35:e="";break;
	case 36:e="";break;
	case 37:e="";break;
	case 38:e="";break;
	case 39:e="";break;
	case 40:e="";break;
	case 41:e="";break;
	case 42:e="";break;
	case 43:e="";break;
	case 44:e="";break;
	case 45:e="";break;
	case 46:e="";break;
	case 47:e="";break;
	case 48:e="";break;
	case 49:e="";break;
	case 50:e="";break;}


	d=rd(5);
	if(a==4)
		d=3;
	if(d==1){

		cout<<e<<q<<w<<endl;}


	if(d==2){
		w[0]=toupper(w[0]);
		cout<<e<<w<<endl;
	}

	if(d==3 || d==4)
		cout<<q<<w<<endl;

	if(d==5)
		cout<<e<<q<<endl;



	}



	}
	function Normal_Name_First_Female(){

	var q,w;




	switch(rd(50)){
	case 1:q="Adela ";break;
	case 2:q="Adelaide ";break;
	case 3:q="Mother ";break;
	case 4:q="Helga ";break;
	case 5:q="Becky ";break;
	case 6:q="Sophie ";break;
	case 7:q="Juliet ";break;
	case 8:q="Margot ";break;
	case 9:q="Dareth ";break;
	case 10:q="Shelby ";break;
	case 11:q="Aldin ";break;
	case 12:q="Steven ";break;
	case 13:q="Grif ";break;
	case 14:q="Hegnar ";break;
	case 15:q="Jordan ";break;
	case 16:q="Deena ";break;
	case 17:q="Kendra ";break;
	case 18:q="Carson ";break;
	case 19:q="Dorthy ";break;
	case 20:q="Helen ";break;
	case 21:q="Ella ";break;
	case 22:q="Lena ";break;
	case 23:q="Sasha ";break;
	case 24:q="Triss ";break;
	case 25:q="Trisha ";break;
	case 26:q="Alissa ";break;
	case 27:q="Annie ";break;
	case 28:q="Grace ";break;
	case 29:q="Lily ";break;
	case 30:q="Margery ";break;
	case 31:q="Gwen ";break;
	case 32:q="Isabelle";break;
	case 33:q="Kyrsten ";break;
	case 34:q="Catelyn ";break;
	case 35:q="Myrra ";break;
	case 36:q="Sherrie ";break;
	case 37:q="Alyson ";break;
	case 38:q="Cindy ";break;
	case 39:q="Diana ";break;
	case 40:q="Melanie ";break;
	case 41:q="Sara ";break;
	case 42:q="Lydia ";break;
	case 43:q="Madelyn ";break;
	case 44:q="Sara ";break;
	case 45:q="Deidre ";break;
	case 46:q="Liza ";break;
	case 47:q="Wilma ";break;
	case 48:q="Aisha ";break;
	case 49:q="Heather ";break;
	case 50:q="Abby ";break;}

	return q;
	}
	function Normal_Name_Second(){
	var q;


	switch(rd(50)){
	case 1:q="Robertson ";break;
	case 2:q="Flynn ";break;
	case 3:q="Fry ";break;
	case 4:q="Tyler ";break;
	case 5:q="Osborn ";break;
	case 6:q="Freeman ";break;
	case 7:q="Miller ";break;
	case 8:q="Smith ";break;
	case 9:q="Williams ";break;
	case 10:q="Brown ";break;
	case 11:q="Miller ";break;
	case 12:q="Jones ";break;
	case 13:q="Moore ";break;
	case 14:q="Wright ";break;
	case 15:q="Kings ";break;
	case 16:q="Green ";break;
	case 17:q="Campbell ";break;
	case 18:q="Carter ";break;
	case 19:q="Roberts ";break;
	case 20:q="Steward";break;
	case 21:q="Wood ";break;
	case 22:q="Grey ";break;
	case 23:q="Hughes ";break;
	case 24:q="Fisher ";break;
	case 25:q="Wilson ";break;
	case 26:q="Pressler ";break;
	case 27:q="Hicks ";break;
	case 28:q="Rogers ";break;
	case 29:q="Potts ";break;
	case 30:q="Black ";break;
	case 31:q="Wrynn ";break;
	case 32:q="Fitch ";break;
	case 33:q="Folsom ";break;
	case 34:q="Field ";break;
	case 35:q="Gregory ";break;
	case 36:q="Wilfort ";break;
	case 37:q="Tillsdale ";break;
	case 38:q="Flintlocke ";break;
	case 39:q="Locke ";break;
	case 40:q="Martin ";break;
	case 41:q="Weller ";break;
	case 42:q="Herald ";break;
	case 43:q="Granger ";break;
	case 44:q="Barnaby ";break;
	case 45:q="Meyer ";break;
	case 46:q="Jackson ";break;
	case 47:q="Vaughn ";break;
	case 48:q="Pressler ";break;
	case 49:q="Tanner ";break;
	case 50:q="Rowe ";break;}

	return q;


	}
	function Normal_Name_First_Male(){
	var q, w, e;
	var choice;
	choice = rd(2);
	switch(rd(50)){
	case 1:q="Aaron ";break;
	case 2:q="Alva ";break;
	case 3:q="Clyde ";break;
	case 4:q="Derick ";break;
	case 5:q="Donnie ";break;
	case 6:q="Ed ";break;
	case 7:q="Jack ";break;
	case 8:q="John ";break;
	case 9:q="Kenny ";break;
	case 10:q="Nelson ";break;
	case 11:q="Noah ";break;
	case 12:q="Rolf ";break;
	case 13:q="Randel ";break;
	case 14:q="Austin ";break;
	case 15:q="Bruce ";break;
	case 16:q="Charlie ";break;
	case 17:q="George ";break;
	case 18:q="Jaime ";break;
	case 19:q="Tywin ";break;
	case 20:q="Sean ";break;
	case 21:q="Steven ";break;
	case 22:q="Donnie ";break;
	case 23:q="Father ";break;
	case 24:q="Simon ";break;
	case 25:q="Warren ";break;
	case 26:q="Brendan ";break;
	case 27:q="Richard ";break;
	case 28:q="William ";break;
	case 29:q="Jonah ";break;
	case 30:q="Alex ";break;
	case 31:q="Jake ";break;
	case 32:q="Edward ";break;
	case 33:q="Wheaton ";break;
	case 34:q="Elvis ";break;
	case 35:q="Robert ";break;
	case 36:q="Michael ";break;
	case 37:q="David ";break;
	case 38:q="Daniel ";break;
	case 39:q="Mark ";break;
	case 40:q="Paul ";break;
	case 41:q="Charles ";break;
	case 42:q="Timothy ";break;
	case 43:q="Frank ";break;
	case 44:q="Peter ";break;
	case 45:q="Harrison ";break;
	case 46:q="Nathan ";break;
	case 47:q="Ben ";break;
	case 48:q="Mason420BlazeItILLIMUNATICONFIRMEDPLS ";break;
	case 49:q="Liam ";break;
	case 50:q="Muhammad ";break;}



	switch(randomInt(1, 39)){
	case 1:w="Loth";break;
	case 2:w="Fal";break;
	case 3:w="Ren";break;
	case 4:w="Reh";break;
	case 5:w="Faran";break;
	case 6:w="Ara";break;
	case 7:w="El";break;
	case 8:w="Al";break;
	case 9:w="Are";break;
	case 10:w="Ar";break;
	case 11:w="Tor";break;
	case 12:w="Cal";break;
	case 13:w="Kael";break;
	case 14:w="Ron";break;
	case 15:w="In";break;
	case 16:w="Quen";break;
	case 17:w="Erin";break;
	case 18:w="Ed";break;
	case 19:w="Fred";break;
	case 20:w="Tron";break;
	case 21:w="Rol";break;
	case 22:w="Rod";break;
	case 23:w="Ger";break;
	case 24:w="Gar";break;
	case 25:w="Aran";break;
	case 26:w="Fin";break;
	case 27:w="Rene";break;
	case 28:w="Bene";break;
	case 29:w="Ala";break;
	case 30:w="Wil";break;
	case 31:w="Stron";break;
	case 32:w="Sto";break;
	case 33:w="Geth";break;
	case 34:w="Bal";break;
	case 35:w="Kol";break;
	case 36:w="Lod";break;
	case 37:w="Lar";break;
	case 38:w="Newl";break;
	case 39:w="Fron";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}

	switch(randomInt(1, 28)){
	case 1:e="ren ";break;
	case 2:e="red ";break;
	case 3:e="rik ";break;
	case 4:e="stad ";break;
	case 5:e="gar";break;
	case 6:e="rald";break;
	case 7:e="gorn ";break;
	case 8:e="wen ";break;
	case 9:e="alt ";break;
	case 10:e="rond ";break;
	case 11:e="rod ";break;
	case 12:e="vik ";break;
	case 13:e="ven ";break;
	case 14:e="lon ";break;
	case 15:e="ias ";break;
	case 16:e="bran ";break;
	case 17:e="brad ";break;
	case 18:e="gram ";break;
	case 19:e="gham ";break;
	case 20:e="lod ";break;
	case 21:e="bal ";break;
	case 22:e="io ";break;
	case 23:e="lin ";break;
	case 24:e="zad ";break;
	case 25:e="dorn";break;
	case 26:e="wick";break;
	case 27:e="lon";break;
	case 28:e="nalt";break;
	case 29:e="";break;
	case 30:e="";break;
	case 31:e="";break;
	case 32:e="";break;
	case 33:e="";break;
	case 34:e="";break;
	case 35:e="";break;
	case 36:e="";break;
	case 37:e="";break;
	case 38:e="";break;
	case 39:e="";break;
	case 40:e="";break;
	case 41:e="";break;
	case 42:e="";break;
	case 43:e="";break;
	case 44:e="";break;
	case 45:e="";break;
	case 46:e="";break;
	case 47:e="";break;
	case 48:e="";break;
	case 49:e="";break;
	case 50:e="";break;}

	if(choice==1)
	return q;
	return w+e;


	}

	function Quest_Subject_Possessive_Plus(){
	var q;
	switch(rd(23)){
	case 1:q="A Peasant's ";break;
	case 2:q="A Delicate ";break;
	case 3:q="A Dwarven ";break;
	case 4:q="A Political ";break;
	case 5:q="An Elf's ";break;
	case 6:q="An Orc's ";break;
	case 7:q="A Man's ";break;
	case 8:q="A King's ";break;
	case 9:q="A Guard's ";break;
	case 10:q="A Knight's ";break;
	case 11:q="A Soldier's ";break;
	case 12:q="Warlord's ";break;
	case 13:q="An Unfortunate ";break;
	case 14:q="A Fortunate ";break;
	case 15:q="A Monk's ";break;
	case 16:q="A Priest's ";break;
	case 17:q="A Woman's ";break;
	case 18:q="People's ";break;
	case 19:q="Poor Man's ";break;
	case 20:q="A Farmer's ";break;
	case 21:q="An Ogre's ";break;
	case 22:q="A Monster's ";break;
	case 23:q="Dead Man's ";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}
	return q;}
	function Quest_Object_Possessed(){
	var w;
	switch(rd(41)){
	case 1:w="Story ";break;
	case 2:w="Journey ";break;
	case 3:w="Affairs ";break;
	case 4:w="Goods ";break;
	case 5:w="Rights ";break;
	case 6:w="Quest ";break;
	case 7:w="Duty ";break;
	case 8:w="Orders ";break;
	case 9:w="Trouble ";break;
	case 10:w="Message ";break;
	case 11:w="Bounty ";break;
	case 12:w="Contract ";break;
	case 13:w="Task ";break;
	case 14:w="Letter ";break;
	case 15:w="Hope ";break;
	case 16:w="Favor ";break;
	case 17:w="Trinket ";break;
	case 18:w="Note ";break;
	case 19:w="Plans ";break;
	case 20:w="Bargain ";break;
	case 21:w="Ransom ";break;
	case 22:w="Millstone ";break;
	case 23:w="Burden ";break;
	case 24:w="Promise ";break;
	case 25:w="Mission ";break;
	case 26:w="Chore ";break;
	case 27:w="Lost Coin ";break;
	case 28:w="Lost Sword ";break;
	case 29:w="Honor ";break;
	case 30:w="Lesson ";break;
	case 31:w="Thought ";break;
	case 32:w="Fear ";break;
	case 33:w="Proposal ";break;
	case 34:w="Death ";break;
	case 35:w="Birth ";break;
	case 36:w="Errand ";break;
	case 37:w="Job ";break;
	case 38:w="Work ";break;
	case 39:w="Treasure ";break;
	case 40:w="Fortune ";break;
	case 41:w="Regards ";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}
	return w;
	}
	function Quest_Subject_Possessive_Minus(){
	var q;

	switch(rd(13)){
	case 1:q="Gnoll Leader's ";break;
	case 2:q="Bandit Leader's ";break;
	case 3:q="Wild Ghoul's ";break;
	case 4:q="Necromancer's ";break;
	case 5:q="Thuglord's ";break;
	case 6:q="Warlord's ";break;
	case 7:q="Lake Monster's ";break;
	case 8:q="Drunken Dwarf's ";break;
	case 9:q="Forest Witch's ";break;
	case 10:q="Rampaging Panther's ";break;
	case 11:q="Werewolf's ";break;
	case 12:q="Demon's ";break;
	case 13:q="Forest Satyr's ";break;
	case 14:q="";break;
	case 15:q="";break;
	case 16:q="";break;
	case 17:q="";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}


	switch(rd(5)){
	case 1: return q; break;
	case 2: return Random_Elf()+"'s ";break;
	case 3: return Random_Orc()+"'s ";break;
	case 4: return Normal_Name_First_Female()+Normal_Name_Second()+"'s ";break;
	case 5: return Normal_Name_First_Male()+Normal_Name_Second()+"'s ";break;
	//case 6: return rr::Bandit()+"'s ";break;
	//case 7: return rr::Boar()+"'s ";break;
	//case 8: return rr::Dwarf1()+"'s ";break;
	//case 9: return rr::Dwarf2()+"'s ";break;
	//case 10: return rr::Dryad()+"'s ";break;
	//case 11: return rr::Ogre()+"'s ";break;
	//case 2: return rr::Shark()+"'s ";break;
	//case 2: return rr::Redneck()+"'s ";break;



	}
	return q;

	}
	function Quest_Adjective_1(){
	var q;
	switch(rd(14)){
	case 1:q="Strange ";break;
	case 2:q="Deliberate ";break;
	case 3:q="Decisive ";break;
	case 4:q="Unfortunate ";break;
	case 5:q="Desperate ";break;
	case 6:q="Risky ";break;
	case 7:q="Delicate ";break;
	case 8:q="Tricky ";break;
	case 9:q="Dangerous ";break;
	case 10:q="Safe ";break;
	case 11:q="Unmanly ";break;
	case 12:q="Unknown ";break;
	case 13:q="Fortunate ";break;
	case 14:q="Rough ";break;
	case 15:q="";break;
	case 16:q="";break;
	case 17:q="";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}
	return q;



	}
	function Quest_Objective_1(){
	var q;
	switch(rd(17)){
	case 1:q="Actions ";break;
	case 2:q="Maneuvers ";break;
	case 3:q="Moves ";break;
	case 4:q="Plans ";break;
	case 5:q="Methods ";break;
	case 6:q="Strategies ";break;
	case 7:q="Tactics ";break;
	case 8:q="Proposal ";break;
	case 9:q="Scheme ";break;
	case 10:q="Scenario ";break;
	case 11:q="Approach ";break;
	case 12:q="Tricks ";break;
	case 13:q="Story ";break;
	case 14:q="Setup ";break;
	case 15:q="Path ";break;
	case 16:q="Landing ";break;
	case 17:q="Signs ";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}
	return q;


	}
	function Quest_Subject_Subject(){
	var q;
	switch(rd(8)){
	case 1:q="The Harbinger of ";break;
	case 2:q="The Brnger of ";break;
	case 3:q="The Destroyer of ";break;
	case 4:q="The Start of a ";break;
	case 5:q="Supplying a ";break;
	case 6:q="Creating ";break;
	case 7:q="Announcing ";break;
	case 8:q="The Fall of ";break;
	case 9:q="";break;
	case 10:q="";break;
	case 11:q="";break;
	case 12:q="";break;
	case 13:q="";break;
	case 14:q="";break;
	case 15:q="";break;
	case 16:q="";break;
	case 17:q="";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}
	return q;


	}
	function Quest_Object_Object(){
	var q;
	switch(rd(11)){
	case 1:q="War ";break;
	case 2:q="Love ";break;
	case 3:q="Dawn ";break;
	case 4:q="Friendship ";break;
	case 5:q="Hate ";break;
	case 6:q="Dusk ";break;
	case 7:q="Justice ";break;
	case 8:q="Peace ";break;
	case 9:q="Daylight ";break;
	case 10:q="Battle ";break;
	case 11:q="Strife ";break;
	case 12:q="";break;
	case 13:q="";break;
	case 14:q="";break;
	case 15:q="";break;
	case 16:q="";break;
	case 17:q="";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}
	return q;


	}
	function Quest_Verb(){
	var q;
	switch(rd(8)){
	case 1:q="Cleansing ";break;
	case 2:q="Purifying ";break;
	case 3:q="Purging ";break;
	case 4:q="Desecrating ";break;
	case 5:q="Clearing ";break;
	case 6:q="Culling ";break;
	case 7:q="Healing ";break;
	case 8:q="Consacrating ";break;
	case 9:q="";break;
	case 10:q="";break;
	case 11:q="";break;
	case 12:q="";break;
	case 13:q="";break;
	case 14:q="";break;
	case 15:q="";break;
	case 16:q="";break;
	case 17:q="";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}
	return q;


	}
	function Quest_Verb_Object(){
	var q;
	switch(rd(13)){
	case 1:q="the Corpses ";break;
	case 2:q="the Lake ";break;
	case 3:q="the River ";break;
	case 4:q="the Beach ";break;
	case 5:q="the Monastery ";break;
	case 6:q="the Undead ";break;
	case 7:q="the Meadow ";break;
	case 8:q="the Fields ";break;
	case 9:q="the Grave ";break;
	case 10:q="the Marsh ";break;
	case 11:q="the Scourge ";break;
	case 12:q="the Plague";break;
	case 13:q="the Sickness ";break;
	case 14:q="";break;
	case 15:q="";break;
	case 16:q="";break;
	case 17:q="";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}
	return q;

	}
	function Quest_Verb_2(){
	var q;
	switch(rd(15)){
	case 1:q="Maintaining ";break;
	case 2:q="Keeping ";break;
	case 3:q="Ending ";break;
	case 4:q="Center of ";break;
	case 5:q="Revealing ";break;
	case 6:q="Reversing ";break;
	case 7:q="Breaking ";break;
	case 8:q="Telling Stories of ";break;
	case 9:q="Stories of ";break;
	case 10:q="Continuing ";break;
	case 11:q="Interrupting ";break;
	case 12:q="Strengthening ";break;
	case 13:q="Weakening ";break;
	case 14:q="Hundering ";break;
	case 15:q="Undermining ";break;
	case 16:q="";break;
	case 17:q="";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}
	return q;
	}
	function Quest_Verb_Object_2(){
	var q;
	switch(rd(12)){
	case 1:q="the Revolution ";break;
	case 2:q="the Madness ";break;
	case 3:q="the Battle ";break;
	case 4:q="the Corruption ";break;
	case 5:q="the Order ";break;
	case 6:q="the Havoc ";break;
	case 7:q="the Effect";break;
	case 8:q="the Process";break;
	case 9:q="my Glory ";break;
	case 10:q="the Attack ";break;
	case 11:q="the Defense";break;
	case 12:q="the Plague";break;
	case 13:q="";break;
	case 14:q="";break;
	case 15:q="";break;
	case 16:q="";break;
	case 17:q="";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}
	return q;
	}
	function Quest_Trip(){
	var q;
	switch(rd(13)){
	case 1:q="A Trip to ";break;
	case 2:q="A Journey to ";break;
	case 3:q="Pushing Towards ";break;
	case 4:q="The Siege on ";break;
	case 5:q="The Defense of ";break;
	case 6:q="A Message to ";break;
	case 7:q="Riding to ";break;
	case 8:q="A Letter to ";break;
	case 9:q="A Delivery to ";break;
	case 10:q="Assaulting ";break;
	case 11:q="Escaping from ";break;
	case 12:q="Reclaiming ";break;
	case 13:q="Laying Waste in ";break;
	case 14:q="";break;
	case 15:q="";break;
	case 16:q="";break;
	case 17:q="";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}
	return q;
	}
	function Quest_Verb_3(){
	var q;
	switch(rd(12)){
	case 1:q="Eliminating ";break;
	case 2:q="Killing ";break;
	case 3:q="Mugging ";break;
	case 4:q="Assaulting ";break;
	case 5:q="Ambushing ";break;
	case 6:q="Resolving with ";break;
	case 7:q="Robbing ";break;
	case 8:q="Repelling ";break;
	case 9:q="Slaying ";break;
	case 10:q="Stealing from ";break;
	case 11:q="A Bargain with ";break;
	case 12:q="A Pact With ";break;
	case 13:q="";break;
	case 14:q="";break;
	case 15:q="";break;
	case 16:q="";break;
	case 17:q="";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}
	return q;

	}
	function Quest_Verb_Object_3(){
	var q;
	switch(rd(20)){
	case 1:q="a Goblin ";break;
	case 2:q="the Threat ";break;
	case 3:q="a Troll ";break;
	case 4:q="the Enemy";break;
	case 5:q="a Hero ";break;
	case 6:q="the King ";break;
	case 7:q="the Baron ";break;
	case 8:q="the Witch ";break;
	case 9:q="the Wizards ";break;
	case 10:q="a Demon ";break;
	case 11:q="a Ghost ";break;
	case 12:q="a Citizen ";break;
	case 13:q="an Ally ";break;
	case 14:q="a 'Friend' ";break;
	case 15:q="an Ogre ";break;
	case 16:q="the Rich ";break;
	case 17:q="the Poor ";break;
	case 18:q="the Townsfolk ";break;
	case 19:q="the Bandits ";break;
	case 20:q="the Weak";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}
	return q;

	}
	function Quest_Verb_4(){
	var q;
	switch(rd(12)){
	case 1:q="Taking ";break;
	case 2:q="Taking Back ";break;
	case 3:q="Hiding ";break;
	case 4:q="Destroying ";break;
	case 5:q="Revendicating ";break;
	case 6:q="Looting ";break;
	case 7:q="How to Craft ";break;
	case 8:q="Making ";break;
	case 9:q="Getting by ";break;
	case 10:q="Scrounging ";break;
	case 11:q="Obtaining ";break;
	case 12:q="Stealing ";break;
	case 13:q="";break;
	case 14:q="";break;
	case 15:q="";break;
	case 16:q="";break;
	case 17:q="";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}
	return q;



	}
	function Quest_Verb_Object_4(){
	var q;
	switch(rd(13)){
	case 1:q="the Ingredients";break;
	case 2:q="the Money";break;
	case 3:q="the Ring ";break;
	case 4:q="a Medallion ";break;
	case 5:q="the Sword ";break;
	case 6:q="the Wand ";break;
	case 7:q="the Books ";break;
	case 8:q="some Gold ";break;
	case 9:q="the Shield ";break;
	case 10:q="the Dagger ";break;
	case 11:q="the Rune";break;
	case 12:q="a Rune ";break;
	case 13:q="a Gem";break;
	case 14:q="";break;
	case 15:q="";break;
	case 16:q="";break;
	case 17:q="";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}
	return q;


	}
	function Quest_Subject_2(){
	var q;
	switch(rd(15)){
	case 1:q="The Art of ";break;
	case 2:q="The Difficulty of ";break;
	case 3:q="The Pain of ";break;
	case 4:q="The Misery of ";break;
	case 5:q="The Ease of ";break;
	case 6:q="The Mirth of ";break;
	case 7:q="The Future of ";break;
	case 8:q="The Sorrow of ";break;
	case 9:q="The Past of ";break;
	case 10:q="The Glory of ";break;
	case 11:q="The Honor of ";break;
	case 12:q="The Dury of ";break;
	case 13:q="The Joy of ";break;
	case 14:q="The Sadness of ";break;
	case 15:q="The Craft of ";break;
	case 16:q="";break;
	case 17:q="";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}
	return q;

	}
	function Quest_Object_2(){
	var q;
	switch(rd(9)){
	case 1:q="Stealing ";break;
	case 2:q="Killing";break;
	case 3:q="Hunting ";break;
	case 4:q="Ploughing ";break;
	case 5:q="the Rich";break;
	case 6:q="Farming";break;
	case 7:q="Smuggling ";break;
	case 8:q="the Poor";break;
	case 9:q="an Orc";break;
	case 10:q="";break;
	case 11:q="";break;
	case 12:q="";break;
	case 13:q="";break;
	case 14:q="";break;
	case 15:q="";break;
	case 16:q="";break;
	case 17:q="";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}
	return q;


	}
	function Quest_Adjective_2(){
	var q;
	switch(rd(16)){
	case 1:q="The Fat ";break;
	case 2:q="The Poor ";break;
	case 3:q="The Ugly ";break;
	case 4:q="The Rampaging ";break;
	case 5:q="The Mad ";break;
	case 6:q="The Insane ";break;
	case 7:q="The Wise ";break;
	case 8:q="The Drunk ";break;
	case 9:q="The Cruel ";break;
	case 10:q="The Foolish ";break;
	case 11:q="The Stupid ";break;
	case 12:q="The Abusive ";break;
	case 13:q="The Perverted ";break;
	case 14:q="The Weak-willed ";break;
	case 15:q="The Stubborn ";break;
	case 16:q="The Lazy ";break;
	case 17:q="";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}
	return q;

	}
	function Quest_Objective_2(){
	var q;
	switch(rd(28)){
	case 1:q="Troll ";break;
	case 2:q="Goblin ";break;
	case 3:q="Gnoll ";break;
	case 4:q="Werewolf ";break;
	case 5:q="Vampire ";break;
	case 6:q="Warlock ";break;
	case 7:q="King ";break;
	case 8:q="Baron ";break;
	case 9:q="Maid ";break;
	case 10:q="Lass ";break;
	case 11:q="Lad ";break;
	case 12:q="Lady ";break;
	case 13:q="Lord ";break;
	case 14:q="Gypsy";break;
	case 15:q="Priest";break;
	case 16:q="Ogre";break;
	case 17:q="Cyclop";break;
	case 18:q="Behemoth";break;
	case 19:q="Viking";break;
	case 20:q="Peasant ";break;
	case 21:q="Soldier";break;
	case 22:q="Orc";break;
	case 23:q="Peon";break;
	case 24:q="Worker";break;
	case 25:q="Guard";break;
	case 26:q="Elf";break;
	case 27:q="Dwarf";break;
	case 28:q="Halflin";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}
	return q;


	}
	function Quest_WANTED(){
	switch(rd(3)){
	case 1: return "WANTED: ";break;
	case 2: return "CONTRACT: "; break;
	case 3: return "BOUNTY: "; break;
	}
	}

	};
	class rr{
	public: static var a(){
	var q,w,e;
	var a,s,d;
	var x,f,z;
	switch(randomInt(1, 50)){
	case 1:q="";break;
	case 2:q="";break;
	case 3:q="";break;
	case 4:q="";break;
	case 5:q="";break;
	case 6:q="";break;
	case 7:q="";break;
	case 8:q="";break;
	case 9:q="";break;
	case 10:q="";break;
	case 11:q="";break;
	case 12:q="";break;
	case 13:q="";break;
	case 14:q="";break;
	case 15:q="";break;
	case 16:q="";break;
	case 17:q="";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}


	switch(randomInt(1, 50)){
	case 1:w="";break;
	case 2:w="";break;
	case 3:w="";break;
	case 4:w="";break;
	case 5:w="";break;
	case 6:w="";break;
	case 7:w="";break;
	case 8:w="";break;
	case 9:w="";break;
	case 10:w="";break;
	case 11:w="";break;
	case 12:w="";break;
	case 13:w="";break;
	case 14:w="";break;
	case 15:w="";break;
	case 16:w="";break;
	case 17:w="";break;
	case 18:w="";break;
	case 19:w="";break;
	case 20:w="";break;
	case 21:w="";break;
	case 22:w="";break;
	case 23:w="";break;
	case 24:w="";break;
	case 25:w="";break;
	case 26:w="";break;
	case 27:w="";break;
	case 28:w="";break;
	case 29:w="";break;
	case 30:w="";break;
	case 31:w="";break;
	case 32:w="";break;
	case 33:w="";break;
	case 34:w="";break;
	case 35:w="";break;
	case 36:w="";break;
	case 37:w="";break;
	case 38:w="";break;
	case 39:w="";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}
	switch(randomInt(1, 50)){
	case 1:e="";break;
	case 2:e="";break;
	case 3:e="";break;
	case 4:e="";break;
	case 5:e="";break;
	case 6:e="";break;
	case 7:e="";break;
	case 8:e="";break;
	case 9:e="";break;
	case 10:e="";break;
	case 11:e="";break;
	case 12:e="";break;
	case 13:e="";break;
	case 14:e="";break;
	case 15:e="";break;
	case 16:e="";break;
	case 17:e="";break;
	case 18:e="";break;
	case 19:e="";break;
	case 20:e="";break;
	case 21:e="";break;
	case 22:e="";break;
	case 23:e="";break;
	case 24:e="";break;
	case 25:e="";break;
	case 26:e="";break;
	case 27:e="";break;
	case 28:e="";break;
	case 29:e="";break;
	case 30:e="";break;
	case 31:e="";break;
	case 32:e="";break;
	case 33:e="";break;
	case 34:e="";break;
	case 35:e="";break;
	case 36:e="";break;
	case 37:e="";break;
	case 38:e="";break;
	case 39:e="";break;
	case 40:e="";break;
	case 41:e="";break;
	case 42:e="";break;
	case 43:e="";break;
	case 44:e="";break;
	case 45:e="";break;
	case 46:e="";break;
	case 47:e="";break;
	case 48:e="";break;
	case 49:e="";break;
	case 50:e="";break;}

	switch(randomInt(1, 50)){
	case 1:a="";break;
	case 2:a="";break;
	case 3:a="";break;
	case 4:a="";break;
	case 5:a="";break;
	case 6:a="";break;
	case 7:a="";break;
	case 8:a="";break;
	case 9:a="";break;
	case 10:a="";break;
	case 11:a="";break;
	case 12:a="";break;
	case 13:a="";break;
	case 14:a="";break;
	case 15:a="";break;
	case 16:a="";break;
	case 17:a="";break;
	case 18:a="";break;
	case 19:a="";break;
	case 20:a="";break;
	case 21:a="";break;
	case 22:a="";break;
	case 23:a="";break;
	case 24:a="";break;
	case 25:a="";break;
	case 26:a="";break;
	case 27:a="";break;
	case 28:a="";break;
	case 29:a="";break;
	case 30:a="";break;
	case 31:a="";break;
	case 32:a="";break;
	case 33:a="";break;
	case 34:a="";break;
	case 35:a="";break;
	case 36:a="";break;
	case 37:a="";break;
	case 38:a="";break;
	case 39:a="";break;
	case 40:a="";break;
	case 41:a="";break;
	case 42:a="";break;
	case 43:a="";break;
	case 44:a="";break;
	case 45:a="";break;
	case 46:a="";break;
	case 47:a="";break;
	case 48:a="";break;
	case 49:a="";break;
	case 50:a="";break;}


	switch(randomInt(1, 50)){
	case 1:s="";break;
	case 2:s="";break;
	case 3:s="";break;
	case 4:s="";break;
	case 5:s="";break;
	case 6:s="";break;
	case 7:s="";break;
	case 8:s="";break;
	case 9:s="";break;
	case 10:s="";break;
	case 11:s="";break;
	case 12:s="";break;
	case 13:s="";break;
	case 14:s="";break;
	case 15:s="";break;
	case 16:s="";break;
	case 17:s="";break;
	case 18:s="";break;
	case 19:s="";break;
	case 20:s="";break;
	case 21:s="";break;
	case 22:s="";break;
	case 23:s="";break;
	case 24:s="";break;
	case 25:s="";break;
	case 26:s="";break;
	case 27:s="";break;
	case 28:s="";break;
	case 29:s="";break;
	case 30:s="";break;
	case 31:s="";break;
	case 32:s="";break;
	case 33:s="";break;
	case 34:s="";break;
	case 35:s="";break;
	case 36:s="";break;
	case 37:s="";break;
	case 38:s="";break;
	case 39:s="";break;
	case 40:s="";break;
	case 41:s="";break;
	case 42:s="";break;
	case 43:s="";break;
	case 44:s="";break;
	case 45:s="";break;
	case 46:s="";break;
	case 47:s="";break;
	case 48:s="";break;
	case 49:s="";break;
	case 50:s="";break;}

	switch(randomInt(1, 50)){
	case 1:d="";break;
	case 2:d="";break;
	case 3:d="";break;
	case 4:d="";break;
	case 5:d="";break;
	case 6:d="";break;
	case 7:d="";break;
	case 8:d="";break;
	case 9:d="";break;
	case 10:d="";break;
	case 11:d="";break;
	case 12:d="";break;
	case 13:d="";break;
	case 14:d="";break;
	case 15:d="";break;
	case 16:d="";break;
	case 17:d="";break;
	case 18:d="";break;
	case 19:d="";break;
	case 20:d="";break;
	case 21:d="";break;
	case 22:d="";break;
	case 23:d="";break;
	case 24:d="";break;
	case 25:d="";break;
	case 26:d="";break;
	case 27:d="";break;
	case 28:d="";break;
	case 29:d="";break;
	case 30:d="";break;
	case 31:d="";break;
	case 32:d="";break;
	case 33:d="";break;
	case 34:d="";break;
	case 35:d="";break;
	case 36:d="";break;
	case 37:d="";break;
	case 38:d="";break;
	case 39:d="";break;
	case 40:d="";break;
	case 41:d="";break;
	case 42:d="";break;
	case 43:d="";break;
	case 44:d="";break;
	case 45:d="";break;
	case 46:d="";break;
	case 47:d="";break;
	case 48:d="";break;
	case 49:d="";break;
	case 50:d="";break;}

	switch(randomInt(1, 50)){
	case 1:z="";break;
	case 2:z="";break;
	case 3:z="";break;
	case 4:z="";break;
	case 5:z="";break;
	case 6:z="";break;
	case 7:z="";break;
	case 8:z="";break;
	case 9:z="";break;
	case 10:z="";break;
	case 11:z="";break;
	case 12:z="";break;
	case 13:z="";break;
	case 14:z="";break;
	case 15:z="";break;
	case 16:z="";break;
	case 17:z="";break;
	case 18:z="";break;
	case 19:z="";break;
	case 20:z="";break;
	case 21:z="";break;
	case 22:z="";break;
	case 23:z="";break;
	case 24:z="";break;
	case 25:z="";break;
	case 26:z="";break;
	case 27:z="";break;
	case 28:z="";break;
	case 29:z="";break;
	case 30:z="";break;
	case 31:z="";break;
	case 32:z="";break;
	case 33:z="";break;
	case 34:z="";break;
	case 35:z="";break;
	case 36:z="";break;
	case 37:z="";break;
	case 38:z="";break;
	case 39:z="";break;
	case 40:z="";break;
	case 41:z="";break;
	case 42:z="";break;
	case 43:z="";break;
	case 44:z="";break;
	case 45:z="";break;
	case 46:z="";break;
	case 47:z="";break;
	case 48:z="";break;
	case 49:z="";break;
	case 50:z="";break;}


	switch(randomInt(1, 50)){
	case 1:x="";break;
	case 2:x="";break;
	case 3:x="";break;
	case 4:x="";break;
	case 5:x="";break;
	case 6:x="";break;
	case 7:x="";break;
	case 8:x="";break;
	case 9:x="";break;
	case 10:x="";break;
	case 11:x="";break;
	case 12:x="";break;
	case 13:x="";break;
	case 14:x="";break;
	case 15:x="";break;
	case 16:x="";break;
	case 17:x="";break;
	case 18:x="";break;
	case 19:x="";break;
	case 20:x="";break;
	case 21:x="";break;
	case 22:x="";break;
	case 23:x="";break;
	case 24:x="";break;
	case 25:x="";break;
	case 26:x="";break;
	case 27:x="";break;
	case 28:x="";break;
	case 29:x="";break;
	case 30:x="";break;
	case 31:x="";break;
	case 32:x="";break;
	case 33:x="";break;
	case 34:x="";break;
	case 35:x="";break;
	case 36:x="";break;
	case 37:x="";break;
	case 38:x="";break;
	case 39:x="";break;
	case 40:x="";break;
	case 41:x="";break;
	case 42:x="";break;
	case 43:x="";break;
	case 44:x="";break;
	case 45:x="";break;
	case 46:x="";break;
	case 47:x="";break;
	case 48:x="";break;
	case 49:x="";break;
	case 50:x="";break;}

	return q+w;

	}
	/*






	*/

	public: static var Random_Elf_Female(){
	var q,w;

	switch(randomInt(1, 28)){
	case 1:q="E";break;
	case 2:q="Ae";break;
	case 3:q="A";break;
	case 4:q="Shae";break;
	case 5:q="Shae";break;
	case 6:q="Dae";break;
	case 7:q="Casa";break;
	case 8:q="Tae";break;
	case 9:q="Mi";break;
	case 10:q="Ala";break;
	case 11:q="Ara";break;
	case 12:q="Ana";break;
	case 13:q="Tia";break;
	case 14:q="Gwen";break;
	case 15:q="Quel'a";break;
	case 16:q="La";break;
	case 17:q="Meli";break;
	case 18:q="Eli";break;
	case 19:q="Asha";break;
	case 20:q="Va";break;
	case 21:q="Shala";break;
	case 22:q="Sala";break;
	case 23:q="Sa";break;
	case 24:q="Sha";break;
	case 25:q="Shia";break;
	case 26:q="Sia";break;
	case 27:q="Lia";break;
	case 28:q="Ele";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}

	switch(randomInt(1, 25)){
	case 1:w="lin";break;
	case 2:w="randa";break;
	case 3:w="ryn";break;
	case 4:w="drith";break;
	case 5:w="dolin";break;
	case 6:w="sa";break;
	case 7:w="ndis";break;
	case 8:w="nya";break;
	case 9:w="lera";break;
	case 10:w="nera";break;
	case 11:w="layna";break;
	case 12:w="shaelle";break;
	case 13:w="melle";break;
	case 14:w="relle";break;
	case 15:w="lande";break;
	case 16:w="rith";break;
	case 17:w="ndra";break;
	case 18:w="ria";break;
	case 19:w="ra";break;
	case 20:w="lala";break;
	case 21:w="lora";break;
	case 22:w="lara";break;
	case 23:w="lira";break;
	case 24:w="ndria";break;
	case 25:w="drin";break;
	case 26:w="";break;
	case 27:w="";break;
	case 28:w="";break;
	case 29:w="";break;
	case 30:w="";break;
	case 31:w="";break;
	case 32:w="";break;
	case 33:w="";break;
	case 34:w="";break;
	case 35:w="";break;
	case 36:w="";break;
	case 37:w="";break;
	case 38:w="";break;
	case 39:w="";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}



	if(q[q.length()-2] == w[0]) return q.substr(0, q.length()-1) + w;  //Eli + lira = Ellira
	return q+w;

	}

	public: static var Metal1(){
	var q,w;
	switch(randomInt(1, 100)){
	case 1:q="Dragon";break;
	case 2:q="Drak";break;
	case 3:q="Drag";break;
	case 4:q="Drak";break;
	case 5:q="Meteor";break;
	case 6:q="Ir";break;
	case 7:q="Ar";break;
	case 8:q="Ur";break;
	case 9:q="Fyr";break;
	case 10:q="Or";break;
	case 11:q="Kir";break;
	case 12:q="Kar";break;
	case 13:q="Er";break;
	case 14:q="Quar";break;
	case 15:q="Grel";break;
	case 16:q="Met";break;
	case 17:q="Rex";break;
	case 18:q="Zex";break;
	case 19:q="Krolm";break;
	case 20:q="Krol";break;
	case 21:q="Dron";break;
	case 22:q="Eter";break;
	case 23:q="Etern";break;
	case 24:q="Scorp";break;
	case 25:q="Deter";break;
	case 26:q="Den";break;
	case 27:q="Amar";break;
	case 28:q="Ren";break;
	case 29:q="Merk";break;
	case 30:q="Mithril";break;
	case 31:q="Ban";break;
	case 32:q="Arth";break;
	case 33:q="Rev";break;
	case 34:q="Nem";break;
	case 35:q="Pleth";break;
	case 36:q="Peiad";break;
	case 37:q="Aiad";break;
	case 38:q="Gaiad";break;
	case 39:q="Veled";break;
	case 40:q="Valen";break;
	case 41:q="Cinth";break;
	case 42:q="Emb";break;
	case 43:q="Rub";break;
	case 44:q="Ocen";break;
	case 45:q="Sear";break;
	case 46:q="Coll";break;
	case 47:q="Flam";break;
	case 48:q="Ign";break;
	case 49:q="Ax";break;
	case 50:q="Kern";break;
	case 51:q="Chre";break;
	case 52:q="Act";break;
	case 53:q="Actin";break;
	case 54:q="Acter";break;
	case 55:q="Eser";break;
	case 56:q="Ag";break;
	case 57:q="Am";break;
	case 58:q="An";break;
	case 59:q="Aer";break;
	case 60:q="Agad";break;
	case 61:q="Alm";break;
	case 62:q="Elm";break;
	case 63:q="Olm";break;
	case 64:q="Azm";break;
	case 65:q="Azam";break;
	case 66:q="Ezim";break;
	case 67:q="Azer";break;
	case 68:q="Amb";break;
	case 69:q="Car";break;
	case 70:q="Corr";break;
	case 71:q="Cass";break;
	case 72:q="Cat";break;
	case 73:q="Chrom";break;
	case 74:q="Chron";break;
	case 75:q="Rech";break;
	case 76:q="Ocher";break;
	case 78:q="Orch";break;
	case 79:q="Garn";break;
	case 80:q="Prais";break;
	case 81:q="Thor";break;
	case 82:q="Pren";break;
	case 83:q="Cit";break;
	case 84:q="Oran";break;
	case 85:q="Red";break;
	case 86:q="Lem";break;
	case 87:q="Gnor";break;
	case 88:q="Karth";break;
	case 89:q="Karthal";break;
	case 90:q="Azen";break;
	case 91:q="Neven";break;
	case 92:q="Nev";break;
	case 93:q="Tror";break;
	case 94:q="Cind";break;
	case 95:q="Enst";break;
	case 96:q="Tigr";break;
	case 97:q="Lion";break;
	case 98:q="Warm";break;
	case 99:q="Zirc";break;
	case 100:q="Starr";break;
	}

	switch(randomInt(1, 10)){
	case 1:w="ium";break;
	case 2:w="ite";break;
	case 3:w="odium";break;
	case 4:w="iun";break;
	case 5:w="ine";break;
	case 6:w="idium";break;
	case 7:w="anium";break;
	case 8:w="onium";break;
	case 9:w="iode";break;
	case 10:w="ide";break;
	case 11:w="";break;
	case 12:w="";break;
	case 13:w="";break;
	case 14:w="";break;
	case 15:w="";break;
	case 16:w="";break;
	case 17:w="";break;
	case 18:w="";break;
	case 19:w="";break;
	case 20:w="";break;
	case 21:w="";break;
	case 22:w="";break;
	case 23:w="";break;
	case 24:w="";break;
	case 25:w="";break;
	case 26:w="";break;
	case 27:w="";break;
	case 28:w="";break;
	case 29:w="";break;
	case 30:w="";break;
	case 31:w="";break;
	case 32:w="";break;
	case 33:w="";break;
	case 34:w="";break;
	case 35:w="";break;
	case 36:w="";break;
	case 37:w="";break;
	case 38:w="";break;
	case 39:w="";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}


	return q+w;




	}
	public: static var Metal2(){
	var q,w;
	switch(randomInt(1, 35)){
	case 1:q="Frost";break;
	case 2:q="Cold";break;
	case 3:q="Dragon";break;
	case 4:q="Flame";break;
	case 5:q="Dark";break;
	case 6:q="White";break;
	case 7:q="Nether";break;
	case 8:q="True";break;
	case 9:q="True";break;
	case 10:q="Forge";break;
	case 11:q="Earth";break;
	case 12:q="Sky";break;
	case 13:q="Red";break;
	case 14:q="Blood";break;
	case 15:q="Blue";break;
	case 16:q="Black";break;
	case 17:q="Green";break;
	case 18:q="Cloud";break;
	case 19:q="New";break;
	case 20:q="Old";break;
	case 21:q="Feeble";break;
	case 22:q="Free";break;
	case 23:q="Rune";break;
	case 24:q="Glyph";break;
	case 25:q="Strong";break;
	case 26:q="Pink";break;
	case 27:q="Dwarf";break;
	case 28:q="Ghost";break;
	case 29:q="Fel";break;
	case 30:q="Water";break;
	case 31:q="Snow";break;
	case 32:q="Lava";break;
	case 33:q="Life";break;
	case 34:q="Death";break;
	case 35:q="Great";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}

	switch(randomInt(1, 11)){
	case 1:w="stone";break;
	case 2:w="iron";break;
	case 3:w="gold";break;
	case 4:w="silver";break;
	case 5:w="cobalt";break;
	case 6:w="bronze";break;
	case 7:w="copper";break;
	case 8:w="steel";break;
	case 9:w="gem";break;
	case 10:w="ore";break;
	case 11:w="glass";break;
	case 12:w="";break;
	case 13:w="";break;
	case 14:w="";break;
	case 15:w="";break;
	case 16:w="";break;
	case 17:w="";break;
	case 18:w="";break;
	case 19:w="";break;
	case 20:w="";break;
	case 21:w="";break;
	case 22:w="";break;
	case 23:w="";break;
	case 24:w="";break;
	case 25:w="";break;
	case 26:w="";break;
	case 27:w="";break;
	case 28:w="";break;
	case 29:w="";break;
	case 30:w="";break;
	case 31:w="";break;
	case 32:w="";break;
	case 33:w="";break;
	case 34:w="";break;
	case 35:w="";break;
	case 36:w="";break;
	case 37:w="";break;
	case 38:w="";break;
	case 39:w="";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}

	return q+w;


	}
	public: static var Dwarf1(){
		var q,w;
	switch(randomInt(1, 42)){
	case 1:q="Bari";break;
	case 2:q="Brag";break;
	case 3:q="Krol";break;
	case 4:q="Ruth";break;
	case 5:q="Vor";break;
	case 6:q="Buz";break;
	case 7:q="Jogh";break;
	case 8:q="Umin";break;
	case 9:q="Bord";break;
	case 10:q="Bard";break;
	case 11:q="Berd";break;
	case 12:q="Noth";break;
	case 13:q="Held";break;
	case 14:q="Borst";break;
	case 15:q="Holt";break;
	case 16:q="Thor";break;
	case 17:q="Mag";break;
	case 18:q="Vel";break;
	case 19:q="Nag";break;
	case 20:q="Glar";break;
	case 21:q="Mura";break;
	case 22:q="Bora";break;
	case 23:q="Bor";break;
	case 24:q="Vora";break;
	case 25:q="Mun";break;
	case 26:q="Hugn";break;
	case 27:q="Ban";break;
	case 28:q="Mod";break;
	case 29:q="Lorn";break;
	case 30:q="Bael";break;
	case 31:q="Grim";break;
	case 32:q="Al";break;
	case 33:q="Bur";break;
	case 34:q="Bura";break;
	case 35:q="Dur";break;
	case 36:q="Mur";break;
	case 37:q="Alam";break;
	case 38:q="Bel";break;
	case 39:q="Buin";break;
	case 40:q="Bur";break;
	case 41:q="Bura";break;
	case 42:q="Buro";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}


	switch(randomInt(1, 13)){
	case 1:w="grus ";break;
	case 2:w="bi ";break;
	case 3:w="gas ";break;
	case 4:w="ni ";break;
	case 5:w="han ";break;
	case 6:w="ran ";break;
	case 7:w="san ";break;
	case 8:w="din ";break;
	case 9:w="gis ";break;
	case 10:w="gus ";break;
	case 11:w="gud ";break;
	case 12:w="gard ";break;
	case 13:w="log ";break;
	case 14:w="";break;
	case 15:w="";break;
	case 16:w="";break;
	case 17:w="";break;
	case 18:w="";break;
	case 19:w="";break;
	case 20:w="";break;
	case 21:w="";break;
	case 22:w="";break;
	case 23:w="";break;
	case 24:w="";break;
	case 25:w="";break;
	case 26:w="";break;
	case 27:w="";break;
	case 28:w="";break;
	case 29:w="";break;
	case 30:w="";break;
	case 31:w="";break;
	case 32:w="";break;
	case 33:w="";break;
	case 34:w="";break;
	case 35:w="";break;
	case 36:w="";break;
	case 37:w="";break;
	case 38:w="";break;
	case 39:w="";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}



	return q+w;


	}
	public: static var Dwarf2(){

	var q;
	switch(randomInt(1, 9)){
	case 1:q="Buin ";break;
	case 2:q="Grawn ";break;
	case 3:q="Erik ";break;
	case 4:q="Frank ";break;
	case 5:q="Bari ";break;
	case 6:q="Bori ";break;
	case 7:q="Beri ";break;
	case 8:q="Hans ";break;
	case 9:q="Holt ";break;
	case 10:q="";break;
	case 11:q="";break;
	case 12:q="";break;
	case 13:q="";break;
	case 14:q="";break;
	case 15:q="";break;
	case 16:q="";break;
	case 17:q="";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}




	return q;
	}
	public: static var DwarfSur(){
	var q,w;

	switch(randomInt(1, 15)){
	case 1:q="Rock";break;
	case 2:q="Stout";break;
	case 3:q="Flint";break;
	case 4:q="Guzzle";break;
	case 5:q="Gale";break;
	case 6:q="Stone";break;
	case 7:q="Thunder";break;
	case 8:q="Bronze";break;
	case 9:q="Gold";break;
	case 10:q="Steel";break;
	case 11:q="Red";break;
	case 12:q="Grey";break;
	case 13:q="Black";break;
	case 14:q="Iron";break;
	case 15:q="White";break;
	case 16:q="";break;
	case 17:q="";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}


	switch(randomInt(1, 15)){
	case 1:w="bear";break;
	case 2:w="brew";break;
	case 3:w="arm";break;
	case 4:w="horn";break;
	case 5:w="hand";break;
	case 6:w="mine";break;
	case 7:w="beard";break;
	case 8:w="beard";break;
	case 9:w="flint";break;
	case 10:w="hammer";break;
	case 11:w="gunt";break;
	case 12:w="nail";break;
	case 13:w="cliff";break;
	case 14:w="forge";break;
	case 15:w="mane";break;
	case 16:w="grip";break;
	case 17:w="brow";break;
	case 18:w="back";break;
	case 19:w="";break;
	case 20:w="";break;
	case 21:w="";break;
	case 22:w="";break;
	case 23:w="";break;
	case 24:w="";break;
	case 25:w="";break;
	case 26:w="";break;
	case 27:w="";break;
	case 28:w="";break;
	case 29:w="";break;
	case 30:w="";break;
	case 31:w="";break;
	case 32:w="";break;
	case 33:w="";break;
	case 34:w="";break;
	case 35:w="";break;
	case 36:w="";break;
	case 37:w="";break;
	case 38:w="";break;
	case 39:w="";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}




	return q+w;

	}
	public: static var DwarfF(){
	var a;
	var q,w;
	switch(randomInt(1, 24)){
		case 1:q="Hel";break;
		case 2:q="Thor";break;
		case 3:q="Urs";break;
		case 4:q="Groor";break;
		case 5:q="Donel";break;
		case 6:q="Urs";break;
		case 7:q="Gruk";break;
		case 8:q="Tungr";break;
		case 9:q="Tel";break;
		case 10:q="Tol";break;
		case 11:q="Dom";break;
		case 12:q="Tov";break;
		case 13:q="Dug";break;
		case 14:q="Rath";break;
		case 15:q="Alg";break;
		case 16:q="Glor";break;
		case 17:q="Bath";break;
		case 18:q="Far";break;
		case 19:q="Bran";break;
		case 20:q="Olin";break;
		case 21:q="Er";break;
		case 22:q="Farin";break;
		case 23:q="Tran";break;
		case 24:q="Bar";break;
		case 25:q="";break;
		case 26:q="";break;
		case 27:q="";break;
		case 28:q="";break;
		case 29:q="";break;
		case 30:q="";break;
		case 31:q="";break;
		case 32:q="";break;
		case 33:q="";break;
		case 34:q="";break;
		case 35:q="";break;
		case 36:q="";break;
		case 37:q="";break;
		case 38:q="";break;
		case 39:q="";break;
		case 40:q="";break;
		case 41:q="";break;
		case 42:q="";break;
		case 43:q="";break;
		case 44:q="";break;
		case 45:q="";break;
		case 46:q="";break;
		case 47:q="";break;
		case 48:q="";break;
		case 49:q="";break;
		case 50:q="";break;}


		switch(randomInt(1, 14)){
		case 1:w="sia ";break;
		case 2:w="ia ";break;
		case 3:w="ka ";break;
		case 4:w="ara ";break;
		case 5:w="gerd ";break;
		case 6:w="ga ";break;
		case 7:w="gith ";break;
		case 8:w="ula ";break;
		case 9:w="hilda ";break;
		case 10:w="mena ";break;
		case 11:w="uela ";break;
		case 12:w="gret ";break;
		case 13:w="greth ";break;
		case 14:w="ora ";break;
		case 15:w="";break;
		case 16:w="";break;
		case 17:w="";break;
		case 18:w="";break;
		case 19:w="";break;
		case 20:w="";break;
		case 21:w="";break;
		case 22:w="";break;
		case 23:w="";break;
		case 24:w="";break;
		case 25:w="";break;
		case 26:w="";break;
		case 27:w="";break;
		case 28:w="";break;
		case 29:w="";break;
		case 30:w="";break;
		case 31:w="";break;
		case 32:w="";break;
		case 33:w="";break;
		case 34:w="";break;
		case 35:w="";break;
		case 36:w="";break;
		case 37:w="";break;
		case 38:w="";break;
		case 39:w="";break;
		case 40:w="";break;
		case 41:w="";break;
		case 42:w="";break;
		case 43:w="";break;
		case 44:w="";break;
		case 45:w="";break;
		case 46:w="";break;
		case 47:w="";break;
		case 48:w="";break;
		case 49:w="";break;
		case 50:w="";break;}


	return q+w;




	}
	public: static var Goblin1(){
	var q,w;

	switch(randomInt(1, 47)){
	case 1:q="Griz";break;
	case 2:q="Raz";break;
	case 3:q="Rez";break;
	case 4:q="Ker";break;
	case 5:q="Kak";break;
	case 6:q="Nok";break;
	case 7:q="Fiz";break;
	case 8:q="Triz";break;
	case 9:q="Pen";break;
	case 10:q="Tink";break;
	case 11:q="Iz";break;
	case 12:q="Gig";break;
	case 13:q="Fin";break;
	case 14:q="Sog";break;
	case 15:q="Nez";break;
	case 16:q="Rit";break;
	case 17:q="Pum";break;
	case 18:q="Zit";break;
	case 19:q="Kraz";break;
	case 20:q="Krez";break;
	case 21:q="Kruz";break;
	case 22:q="Kriz";break;
	case 23:q="Driz";break;
	case 24:q="Droz";break;
	case 25:q="Draz";break;
	case 26:q="Druz";break;
	case 27:q="Drez";break;
	case 28:q="Ret";break;
	case 29:q="Rat";break;
	case 30:q="Traz";break;
	case 31:q="Truz";break;
	case 32:q="Troz";break;
	case 33:q="Fez";break;
	case 34:q="Faz";break;
	case 35:q="Fuz";break;
	case 36:q="Foz";break;
	case 37:q="Graz";break;
	case 38:q="Groz";break;
	case 39:q="Grez";break;
	case 40:q="Gruz";break;
	case 41:q="Tam";break;
	case 42:q="Kran";break;
	case 43:q="Zat";break;
	case 44:q="Zig";break;
	case 45:q="Zeg";break;
	case 46:q="Zog";break;
	case 47:q="Rig";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}


	switch(randomInt(1, 11)){
	case 1:w="zle ";break;
	case 2:w="zar ";break;
	case 3:w="rek ";break;
	case 4:w="zik ";break;
	case 5:w="zel ";break;
	case 6:w="liz ";break;
	case 7:w="zil ";break;
	case 8:w="kle ";break;
	case 9:w="tle ";break;
	case 10:w="lowe ";break;
	case 11:w="gaz ";break;
	case 12:w="";break;
	case 13:w="";break;
	case 14:w="";break;
	case 15:w="";break;
	case 16:w="";break;
	case 17:w="";break;
	case 18:w="";break;
	case 19:w="";break;
	case 20:w="";break;
	case 21:w="";break;
	case 22:w="";break;
	case 23:w="";break;
	case 24:w="";break;
	case 25:w="";break;
	case 26:w="";break;
	case 27:w="";break;
	case 28:w="";break;
	case 29:w="";break;
	case 30:w="";break;
	case 31:w="";break;
	case 32:w="";break;
	case 33:w="";break;
	case 34:w="";break;
	case 35:w="";break;
	case 36:w="";break;
	case 37:w="";break;
	case 38:w="";break;
	case 39:w="";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}



	return q+w;

	}
	public: static var GoblinS(){
	var q,w;

	switch(randomInt(1, 22)){
	case 1:q="Steam";break;
	case 2:q="Bilge";break;
	case 3:q="Noggen";break;
	case 4:q="Nog";break;
	case 5:q="Babble";break;
	case 6:q="Gear";break;
	case 7:q="Grapple";break;
	case 8:q="Scrabble";break;
	case 9:q="Hard";break;
	case 10:q="Gizmo";break;
	case 11:q="Quick";break;
	case 12:q="Gripple";break;
	case 13:q="Brim";break;
	case 14:q="Cable";break;
	case 15:q="Rocket";break;
	case 16:q="Copper";break;
	case 17:q="Fickle";break;
	case 18:q="Fiddle";break;
	case 19:q="Buckle";break;
	case 20:q="Tackle";break;
	case 21:q="Scrap";break;
	case 22:q="Rubble";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}


	switch(randomInt(1, 60)){
	case 1:w="wheedle ";break;
	case 2:w="fogger ";break;
	case 3:w="snaff ";break;
	case 4:w="slipper ";break;
	case 5:w="wrench ";break;
	case 6:w="screw ";break;
	case 7:w="shredder ";break;
	case 8:w="skimmer ";break;
	case 9:w="snap ";break;
	case 10:w="fingers ";break;
	case 11:w="wheezle ";break;
	case 12:w="fuse ";break;
	case 13:w="blast ";break;
	case 14:w="bolt ";break;
	case 15:w="swing ";break;
	case 16:w="buzzle ";break;
	case 17:w="camp";break;
	case 18:w="nickle ";break;
	case 19:w="pinch ";break;
	case 20:w="wire ";break;
	case 21:w="pipe ";break;
	case 22:w="dash ";break;
	case 23:w="spragg ";break;
	case 24:w="spring ";break;
	case 25:w="spurt ";break;
	case 26:w="dowser ";break;
	case 27:w="sprocket ";break;
	case 28:w="crew ";break;
	case 29:w="wrecker ";break;
	case 30:w="lock ";break;
	case 31:w="sledge";break;
	case 32:w="dredger ";break;
	case 33:w="steamer ";break;
	case 34:w="craft ";break;
	case 35:w="link ";break;
	case 36:w="scrambler ";break;
	case 37:w="speck ";break;
	case 38:w="spank ";break;
	case 39:w="pimp ";break;
	case 40:w="bend ";break;
	case 41:w="snicker ";break;
	case 42:w="sneech ";break;
	case 43:w="sneeze ";break;
	case 44:w="boom ";break;
	case 45:w="spark ";break;
	case 46:w="crackle ";break;
	case 47:w="trap ";break;
	case 48:w="wheel";break;
	case 49:w="ratchet ";break;
	case 50:w="rack ";break;
	case 51:w="prong ";break;
	case 52:w="paddle ";break;
	case 53:w="gadget ";break;
	case 54:w="latch ";break;
	case 55:w="rod ";break;
	case 56:w="glow";break;
	case 57:w="hunk ";break;
	case 58:w="junk";break;
	case 59:w="trace";break;
	case 60:w="punk";break;

	}


	return q+w;

	}
	public: static var GoblinF(){
	var q,w;

	switch(randomInt(1, 31)){
	case 1:q="Sazzy ";break;
	case 2:q="Donna ";break;
	case 3:q="Bambi ";break;
	case 4:q="Crystal ";break;
	case 5:q="Tiffany ";break;
	case 6:q="Amber ";break;
	case 7:q="Brandy ";break;
	case 8:q="Cherry ";break;
	case 9:q="Diamond ";break;
	case 10:q="Lexie ";break;
	case 11:q="Roxie ";break;
	case 12:q="Trixie ";break;
	case 13:q="Polly ";break;
	case 14:q="Suzie ";break;
	case 15:q="Sheila ";break;
	case 16:q="Evelyn ";break;
	case 17:q="Wanda ";break;
	case 18:q="Kristie ";break;
	case 19:q="Jasmin ";break;
	case 20:q="Nikki ";break;
	case 21:q="Lena ";break;
	case 22:q="Keisha ";break;
	case 23:q="Izzy ";break;
	case 24:q="Shayla ";break;
	case 25:q="Sharon ";break;
	case 26:q="Jenna ";break;
	case 27:q="Stacey ";break;
	case 28:q="Tamika ";break;
	case 29:q="Shaniqua ";break;
	case 30:q="Chanelle ";break;
	case 31:q="Victoria ";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}


	switch(randomInt(1, 50)){
	case 1:w="";break;
	case 2:w="";break;
	case 3:w="";break;
	case 4:w="";break;
	case 5:w="";break;
	case 6:w="";break;
	case 7:w="";break;
	case 8:w="";break;
	case 9:w="";break;
	case 10:w="";break;
	case 11:w="";break;
	case 12:w="";break;
	case 13:w="";break;
	case 14:w="";break;
	case 15:w="";break;
	case 16:w="";break;
	case 17:w="";break;
	case 18:w="";break;
	case 19:w="";break;
	case 20:w="";break;
	case 21:w="";break;
	case 22:w="";break;
	case 23:w="";break;
	case 24:w="";break;
	case 25:w="";break;
	case 26:w="";break;
	case 27:w="";break;
	case 28:w="";break;
	case 29:w="";break;
	case 30:w="";break;
	case 31:w="";break;
	case 32:w="";break;
	case 33:w="";break;
	case 34:w="";break;
	case 35:w="";break;
	case 36:w="";break;
	case 37:w="";break;
	case 38:w="";break;
	case 39:w="";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}


	return q+w;

	}

	public: static var Pimp(){
	var q,w,e;

	switch(randomInt(1, 29)){
	case 1:q="Big ";break;
	case 2:q="Fresh ";break;
	case 3:q="Fat ";break;
	case 4:q="Slim ";break;
	case 5:q="Cash ";break;
	case 6:q="Lil ";break;
	case 7:q="Short ";break;
	case 8:q="Tall ";break;
	case 9:q="Rich ";break;
	case 10:q="Sweet ";break;
	case 11:q="Low ";break;
	case 12:q="Deep ";break;
	case 13:q="Large ";break;
	case 14:q="Smooth ";break;
	case 15:q="Soft ";break;
	case 16:q="Sleek ";break;
	case 17:q="Easy ";break;
	case 18:q="Late ";break;
	case 19:q="Full ";break;
	case 20:q="Magic ";break;
	case 21:q="Holy ";break;
	case 22:q="Slight ";break;
	case 23:q="Chunky ";break;
	case 24:q="Greasy ";break;
	case 25:q="Fishy ";break;
	case 26:q="Cash ";break;
	case 27:q="Green ";break;
	case 28:q="Crispy ";break;
	case 29:q="Early ";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}


	switch(randomInt(1, 16)){
	case 1:w="'Magic' ";break;
	case 2:w="Doctor ";break;
	case 3:w="Master ";break;
	case 4:w="Daddy ";break;
	case 5:w="Papa ";break;
	case 6:w="Uncle ";break;
	case 7:w="King ";break;
	case 8:w="Doc ";break;
	case 9:w="Pops ";break;
	case 10:w="Boy ";break;
	case 11:w="Prince ";break;
	case 12:w="Brother ";break;
	case 13:w="Father ";break;
	case 14:w="Grandpa ";break;
	case 15:w="Baby ";break;
	case 16:w="Santa ";break;
	case 17:w="";break;
	case 18:w="";break;
	case 19:w="";break;
	case 20:w="";break;
	case 21:w="";break;
	case 22:w="";break;
	case 23:w="";break;
	case 24:w="";break;
	case 25:w="";break;
	case 26:w="";break;
	case 27:w="";break;
	case 28:w="";break;
	case 29:w="";break;
	case 30:w="";break;
	case 31:w="";break;
	case 32:w="";break;
	case 33:w="";break;
	case 34:w="";break;
	case 35:w="";break;
	case 36:w="";break;
	case 37:w="";break;
	case 38:w="";break;
	case 39:w="";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}

	switch(randomInt(1, 18)){
	case 1:e="Jerry ";break;
	case 2:e="E ";break;
	case 3:e="T ";break;
	case 4:e="P ";break;
	case 5:e="D ";break;
	case 6:e="G ";break;
	case 7:e="J ";break;
	case 8:e="C ";break;
	case 9:e="B ";break;
	case 10:e="Ben ";break;
	case 11:e="Francis ";break;
	case 12:e="Timmy ";break;
	case 13:e="Jimmy ";break;
	case 14:e="John ";break;
	case 15:e="Smith ";break;
	case 16:e="Tommy ";break;
	case 17:e="Daniel ";break;
	case 18:e="Jiggy ";break;
	case 19:e="";break;
	case 20:e="";break;
	case 21:e="";break;
	case 22:e="";break;
	case 23:e="";break;
	case 24:e="";break;
	case 25:e="";break;
	case 26:e="";break;
	case 27:e="";break;
	case 28:e="";break;
	case 29:e="";break;
	case 30:e="";break;
	case 31:e="";break;
	case 32:e="";break;
	case 33:e="";break;
	case 34:e="";break;
	case 35:e="";break;
	case 36:e="";break;
	case 37:e="";break;
	case 38:e="";break;
	case 39:e="";break;
	case 40:e="";break;
	case 41:e="";break;
	case 42:e="";break;
	case 43:e="";break;
	case 44:e="";break;
	case 45:e="";break;
	case 46:e="";break;
	case 47:e="";break;
	case 48:e="";break;
	case 49:e="";break;
	case 50:e="";break;}

	switch(randomInt(1, 5)){
	case 1: return q+w+e;break;
	case 2: return q+w+e;break;
	case 3:return w+e;break;
	case 4: return q+w+e;break;
	case 5: return q+w+e;break;
	}




	}
	public: static var GnomeS(){
	var q,w;

	switch(randomInt(1, 11)){
	case 1:q="Click";break;
	case 2:q="Sharp";break;
	case 3:q="Swift";break;
	case 4:q="Little";break;
	case 5:q="Short";break;
	case 6:q="Glow";break;
	case 7:q="Jink";break;
	case 8:q="Nickle";break;
	case 9:q="Slip";break;
	case 10:q="Tech";break;
	case 11:q="Puddle";break;
	case 12:q="";break;
	case 13:q="";break;
	case 14:q="";break;
	case 15:q="";break;
	case 16:q="";break;
	case 17:q="";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}


	switch(randomInt(1, 50)){
	case 1:w="spring ";break;
	case 2:w="whistle ";break;
	case 3:w="finger ";break;
	case 4:w="gauge ";break;
	case 5:w="needle ";break;
	case 6:w="cog ";break;
	case 7:w="pipev ";break;
	case 8:w="wrench ";break;
	case 9:w="foot ";break;
	case 10:w="pin ";break;
	case 11:w="tink ";break;
	case 12:w="widget ";break;
	case 13:w="glitch ";break;
	case 14:w="span ";break;
	case 15:w="clank ";break;
	case 16:w="spin ";break;
	case 17:w="";break;
	case 18:w="";break;
	case 19:w="";break;
	case 20:w="";break;
	case 21:w="";break;
	case 22:w="";break;
	case 23:w="";break;
	case 24:w="";break;
	case 25:w="";break;
	case 26:w="";break;
	case 27:w="";break;
	case 28:w="";break;
	case 29:w="";break;
	case 30:w="";break;
	case 31:w="";break;
	case 32:w="";break;
	case 33:w="";break;
	case 34:w="";break;
	case 35:w="";break;
	case 36:w="";break;
	case 37:w="";break;
	case 38:w="";break;
	case 39:w="";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}


	return q+w;

	}
	public: static var Redneck(){
	var q,w,e;

	switch(randomInt(1, 12)){
	case 1:q="Stinky ";break;
	case 2:q="Filthy ";break;
	case 3:q="Long ";break;
	case 4:q="Red ";break;
	case 5:q="Yellow ";break;
	case 6:q="Two-";break;
	case 7:q="Dirty ";break;
	case 8:q="Sweaty ";break;
	case 9:q="One ";break;
	case 10:q="No ";break;
	case 11:q="Oily ";break;
	case 12:q="Stained ";break;
	case 13:q="";break;
	case 14:q="";break;
	case 15:q="";break;
	case 16:q="";break;
	case 17:q="";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}


	switch(randomInt(1, 15)){
	case 1:w="Toe ";break;
	case 2:w="Foot ";break;
	case 3:w="Sock ";break;
	case 4:w="Cap ";break;
	case 5:w="Spit ";break;
	case 6:w="Hand ";break;
	case 7:w="Pants ";break;
	case 8:w="Shoe ";break;
	case 9:w="Boot ";break;
	case 10:w="Gun ";break;
	case 11:w="Neck ";break;
	case 12:w="Nail ";break;
	case 13:w="Old ";break;
	case 14:w="Young ";break;
	case 15:w="Eye ";break;
	case 16:w="";break;
	case 17:w="";break;
	case 18:w="";break;
	case 19:w="";break;
	case 20:w="";break;
	case 21:w="";break;
	case 22:w="";break;
	case 23:w="";break;
	case 24:w="";break;
	case 25:w="";break;
	case 26:w="";break;
	case 27:w="";break;
	case 28:w="";break;
	case 29:w="";break;
	case 30:w="";break;
	case 31:w="";break;
	case 32:w="";break;
	case 33:w="";break;
	case 34:w="";break;
	case 35:w="";break;
	case 36:w="";break;
	case 37:w="";break;
	case 38:w="";break;
	case 39:w="";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}
	switch(randomInt(1, 23)){
	case 1:e="Billy ";break;
	case 2:e="Bob ";break;
	case 3:e="Jimmy ";break;
	case 4:e="Bubba ";break;
	case 5:e="Timmy ";break;
	case 6:e="Johnny ";break;
	case 7:e="Dennis ";break;
	case 8:e="Dave ";break;
	case 9:e="Frank ";break;
	case 10:e="Austin ";break;
	case 11:e="Buck ";break;
	case 12:e="Chester ";break;
	case 13:e="Earl ";break;
	case 14:e="Joe ";break;
	case 15:e="Joey ";break;
	case 16:e="Rick ";break;
	case 17:e="Ricky ";break;
	case 18:e="Bootch ";break;
	case 19:e="Will ";break;
	case 20:e="Willy ";break;
	case 21:e="Jebediah ";break;
	case 22:e="Jeremiah ";break;
	case 23:e="Gus ";break;
	case 24:e="";break;
	case 25:e="";break;
	case 26:e="";break;
	case 27:e="";break;
	case 28:e="";break;
	case 29:e="";break;
	case 30:e="";break;
	case 31:e="";break;
	case 32:e="";break;
	case 33:e="";break;
	case 34:e="";break;
	case 35:e="";break;
	case 36:e="";break;
	case 37:e="";break;
	case 38:e="";break;
	case 39:e="";break;
	case 40:e="";break;
	case 41:e="";break;
	case 42:e="";break;
	case 43:e="";break;
	case 44:e="";break;
	case 45:e="";break;
	case 46:e="";break;
	case 47:e="";break;
	case 48:e="";break;
	case 49:e="";break;
	case 50:e="";break;}

	switch(randomInt(1, 4)){
	case 1: return q+w+e;
	case 2: return q+e;
	case 3: return q+w+e;
	case 4: return q+w+e;
	}



	}
	public: static var Spell(var nigger){
	var q,w,e;
	var a,s,d;
	var f, aux, aux2, modif="";
	var z,x;
	switch(randomInt(1, 18)){ // Element Q
	case 1:q="Frost";break;
	case 2:q="Fire";break;
	case 3:q="Flame";break;
	case 4:q="Lava";break;
	case 5:q="Arcane";break;
	case 6:q="Nether";break;
	case 7:q="Frostfire";break;
	case 8:q="Ice";break;
	case 9:q="Cold";break;
	case 10:q="Lightning";break;
	case 11:q="Thunder";break;
	case 12:q="Water";break;
	case 13:q="Earth";break;
	case 14:q="Wind";break;
	case 15:q="Storm";break;
	case 16:q="Spirit";break;
	case 17:q="Magic";break;
	case 18:q="Rune";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}
	switch(randomInt(1, 50)){//Element go W
	case 1:w=" Bolt ";break;
	case 2:w=" Burst ";break;
	case 3:w=" Lash ";break;
	case 4:w=" Shackles ";break;
	case 5:w=" Missile";break;
	case 6:w=" Barrage ";break;
	case 7:w=" Blast ";break;
	case 8:w=" Explosion ";break;
	case 9:w=" Bomb ";break;
	case 10:w=" Nova ";break;
	case 11:w=" Strike ";break;
	case 12:w=" Breath ";break;
	case 13:w=" Lance ";break;
	case 14:w=" Storm ";break;
	case 15:w=" Burn ";break;
	case 16:w=" Orb ";break;
	case 17:w=" Ray ";break;
	case 18:w=" Surge ";break;
	case 19:w=" Whip ";break;
	case 20:w=" Shield ";break;
	case 21:w=" Barrier ";break;
	case 22:w=" infusion ";break;
	case 23:w=" Power ";break;
	case 24:w=" Crush ";break;
	case 25:w=" Shock ";break;
	case 26:w=" Shear ";break;
	case 27:w=" Blade ";break;
	case 28:w=" Bash ";break;
	case 29:w=" Clash ";break;
	case 30:w=" Charge ";break;
	case 31:w=" Overcharge ";break;
	case 32:w=" Mastery ";break;
	case 33:w=" Rush ";break;
	case 34:w=" Smash ";break;
	case 35:w=" Coil ";break;
	case 36:w=" Armor ";break;
	case 37:w=" Clap ";break;
	case 38:w=" Wall ";break;
	case 39:w=" Ray ";break;
	case 40:w=" Grip";break;
	case 41:w=" Grasp";break;
	case 42:w=" Touch";break;
	case 43:w=" Ring";break;
	case 44:w=" Chains";break;
	case 45:w=" Prison";break;
	case 46:w=" Arrow";break;
	case 47:w=" Pulse";break;
	case 48:w=" Torrent";break;
	case 49:w=" Wave";break;
	case 50:w=" Sear";break;}

	switch(randomInt(1, 26)){//death A
	case 1:a="Death";break;
	case 2:a="Fear";break;
	case 3:a="Corruption";break;
	case 4:a="Chaos";break;
	case 5:a="Demon";break;
	case 6:a="Unholy";break;
	case 7:a="Inferno";break;
	case 8:a="Blood";break;
	case 9:a="Soul";break;
	case 10:a="Agony";break;
	case 11:a="Pain";break;
	case 12:a="Mind";break;
	case 13:a="Havoc";break;
	case 14:a="Hell";break;
	case 15:a="Shadow";break;
	case 16:a="Dark";break;
	case 17:a="Shade";break;
	case 18:a="Plague";break;
	case 19:a="Scourge";break;
	case 20:a="Doom";break;
	case 21:a="Dread";break;
	case 22:a="Terror";break;
	case 23:a="Corpse";break;
	case 24:a="Sin's";break;
	case 25:a="Noxious";break;
	case 26:a="Poison";break;
	case 27:a="";break;
	case 28:a="";break;
	case 29:a="";break;
	case 30:a="";break;
	case 31:a="";break;
	case 32:a="";break;
	case 33:a="";break;
	case 34:a="";break;
	case 35:a="";break;
	case 36:a="";break;
	case 37:a="";break;
	case 38:a="";break;
	case 39:a="";break;
	case 40:a="";break;
	case 41:a="";break;
	case 42:a="";break;
	case 43:a="";break;
	case 44:a="";break;
	case 45:a="";break;
	case 46:a="";break;
	case 47:a="";break;
	case 48:a="";break;
	case 49:a="";break;
	case 50:a="";break;}
	switch(randomInt(1, 29)){//death go S
	case 1:s=" Drain";break;
	case 2:s=" Ray";break;
	case 3:s=" Bolt";break;
	case 4:s=" Strike";break;
	case 5:s=" Spike";break;
	case 6:s=" Attack";break;
	case 7:s=" Blast";break;
	case 8:s=" Burst";break;
	case 9:s=" Lash";break;
	case 10:s=" Conjuration";break;
	case 11:s=" Energy";break;
	case 12:s=" Tap";break;
	case 13:s=" Burn";break;
	case 14:s=" Fire";break;
	case 15:s=" Flame";break;
	case 16:s=" Grip";break;
	case 17:s=" Grasp";break;
	case 18:s=" Gate";break;
	case 19:s=" Touch";break;
	case 20:s=" Reap";break;
	case 21:s=" Aura";break;
	case 22:s=" Blade";break;
	case 23:s=" Prison";break;
	case 24:s=" Arrow";break;
	case 25:s=" Cloud";break;
	case 26:s=" Incantation";break;
	case 27:s=" Bind";break;
	case 28:s=" Bash";break;
	case 29:s=" Block";break;
	case 30:s=" ";break;
	case 31:s="";break;
	case 32:s="";break;
	case 33:s="";break;
	case 34:s="";break;
	case 35:s="";break;
	case 36:s="";break;
	case 37:s="";break;
	case 38:s="";break;
	case 39:s="";break;
	case 40:s="";break;
	case 41:s="";break;
	case 42:s="";break;
	case 43:s="";break;
	case 44:s="";break;
	case 45:s="";break;
	case 46:s="";break;
	case 47:s="";break;
	case 48:s="";break;
	case 49:s="";break;
	case 50:s="";break;}

	switch(randomInt(1, 4)){//spell modifier D
	case 1:d="Mass ";break;
	case 2:d="Greater ";break;
	case 3:d="Chain ";break;
	case 4:d="Lesser ";break;
	case 5:d=" ";break;
	case 6:d=" ";break;
	case 7:d="";break;
	case 8:d="";break;
	case 9:d="";break;
	case 10:d="";break;
	case 11:d="";break;
	case 12:d="";break;
	case 13:d="";break;
	case 14:d="";break;
	case 15:d="";break;
	case 16:d="";break;
	case 17:d="";break;
	case 18:d="";break;
	case 19:d="";break;
	case 20:d="";break;
	case 21:d="";break;
	case 22:d="";break;
	case 23:d="";break;
	case 24:d="";break;
	case 25:d="";break;
	case 26:d="";break;
	case 27:d="";break;
	case 28:d="";break;
	case 29:d="";break;
	case 30:d="";break;
	case 31:d="";break;
	case 32:d="";break;
	case 33:d="";break;
	case 34:d="";break;
	case 35:d="";break;
	case 36:d="";break;
	case 37:d="";break;
	case 38:d="";break;
	case 39:d="";break;
	case 40:d="";break;
	case 41:d="";break;
	case 42:d="";break;
	case 43:d="";break;
	case 44:d="";break;
	case 45:d="";break;
	case 46:d="";break;
	case 47:d="";break;
	case 48:d="";break;
	case 49:d="";break;
	case 50:d="";break;}

	switch(randomInt(1, 18)){//holy E
	case 1:e="Holy";break;
	case 2:e="Consacrated";break;
	case 3:e="Platinum";break;
	case 4:e="Retribution";break;
	case 5:e="Sun";break;
	case 6:e="Crusader";break;
	case 7:e="Dawn";break;
	case 8:e="Reckoning";break;
	case 9:e="Holy";break;
	case 10:e="Sanctified";break;
	case 11:e="Avenging";break;
	case 12:e="Ardent";break;
	case 13:e="Truth";break;
	case 14:e="Justice";break;
	case 15:e="Heaven";break;
	case 16:e="Light's";break;
	case 17:e="God's";break;
	case 18:e="Radiant";break;
	case 19:e="";break;
	case 20:e="";break;
	case 21:e="";break;
	case 22:e="";break;
	case 23:e="";break;
	case 24:e="";break;
	case 25:e="";break;
	case 26:e="";break;
	case 27:e="";break;
	case 28:e="";break;
	case 29:e="";break;
	case 30:e="";break;
	case 31:e="";break;
	case 32:e="";break;
	case 33:e="";break;
	case 34:e="";break;
	case 35:e="";break;
	case 36:e="";break;
	case 37:e="";break;
	case 38:e="";break;
	case 39:e="";break;
	case 40:e="";break;
	case 41:e="";break;
	case 42:e="";break;
	case 43:e="";break;
	case 44:e="";break;
	case 45:e="";break;
	case 46:e="";break;
	case 47:e="";break;
	case 48:e="";break;
	case 49:e="";break;
	case 50:e="";break;}
	switch(randomInt(1, 39)){//holy go F
	case 1:f=" Fire";break;
	case 2:f=" Smite";break;
	case 3:f=" Strike";break;
	case 4:f=" Blade";break;
	case 5:f=" Punishment";break;
	case 6:f=" Heal";break;
	case 7:f=" Infusion";break;
	case 8:f=" Break";break;
	case 9:f=" Shock";break;
	case 10:f=" Arrow";break;
	case 11:f=" Shot";break;
	case 12:f=" Flames";break;
	case 13:f=" Burn";break;
	case 14:f=" Nova";break;
	case 15:f=" Ground";break;
	case 16:f=" Armor";break;
	case 17:f=" Shield";break;
	case 18:f=" Barrier";break;
	case 19:f=" Gate";break;
	case 20:f=" Purification";break;
	case 21:f=" Binding";break;
	case 22:f=" Bond";break;
	case 23:f=" Renewal";break;
	case 24:f=" Spirit";break;
	case 25:f=" Mend";break;
	case 26:f=" Soul";break;
	case 27:f=" Blessing";break;
	case 28:f=" Charm";break;
	case 29:f=" Favor";break;
	case 30:f=" Flash";break;
	case 31:f=" Light";break;
	case 32:f=" Radiance";break;
	case 33:f=" Beacon";break;
	case 34:f=" Wrath";break;
	case 35:f=" Seal";break;
	case 36:f=" Exorcism";break;
	case 37:f=" Slash";break;
	case 38:f=" Justice";break;
	case 39:f=" Glare";break;
	case 40:f="";break;
	case 41:f="";break;
	case 42:f="";break;
	case 43:f="";break;
	case 44:f="";break;
	case 45:f="";break;
	case 46:f="";break;
	case 47:f="";break;
	case 48:f="";break;
	case 49:f="";break;
	case 50:f="";break;}

	switch(randomInt(1, 40)){//warrior Z
	case 1:z="Stealth";break;
	case 2:z="Hidden";break;
	case 3:z="Rage";break;
	case 4:z="Battle";break;
	case 5:z="War";break;
	case 6:z="Heroic";break;
	case 7:z="Rage";break;
	case 8:z="Fury";break;
	case 9:z="Berserker";break;
	case 10:z="Mortal";break;
	case 11:z="Deadly";break;
	case 12:z="Reckless";break;
	case 13:z="Blood";break;
	case 14:z="Raging";break;
	case 15:z="Piercing";break;
	case 16:z="Cruel";break;
	case 17:z="Warrior";break;
	case 18:z="Barbarian";break;
	case 19:z="Poisoned";break;
	case 20:z="Open";break;
	case 21:z="Twisting";break;
	case 22:z="Venomous";break;
	case 23:z="Relentless";break;
	case 24:z="Ruthless";break;
	case 25:z="Hungering";break;
	case 26:z="Bloodthirsty";break;
	case 27:z="Entangling";break;
	case 28:z="Evasive";break;
	case 29:z="Long";break;
	case 30:z="Rapid";break;
	case 31:z="Quick";break;
	case 32:z="Double";break;
	case 33:z="Triple";break;
	case 34:z="Vengeance";break;
	case 35:z="Focused";break;
	case 36:z="Concentrated";break;
	case 37:z="Channeled";break;
	case 38:z="Sweeping";break;
	case 39:z="Lashing";break;
	case 40:z="Blinding";break;
	case 41:z="";break;
	case 42:z="";break;
	case 43:z="";break;
	case 44:z="";break;
	case 45:z="";break;
	case 46:z="";break;
	case 47:z="";break;
	case 48:z="";break;
	case 49:z="";break;
	case 50:z="";break;}
	switch(randomInt(1, 41)){//warrior go X
	case 1:x=" Attack";break;
	case 2:x=" Strike";break;
	case 3:x=" Stance";break;
	case 4:x=" Dash";break;
	case 5:x=" Bash";break;
	case 6:x=" Flurry";break;
	case 7:x=" Stab";break;
	case 8:x=" Backstab";break;
	case 9:x=" Ambush";break;
	case 10:x=" Shot";break;
	case 11:x=" Arrow";break;
	case 12:x=" Rush";break;
	case 13:x=" Taunt";break;
	case 14:x=" Throw";break;
	case 15:x=" Wounds";break;
	case 16:x=" Rend";break;
	case 17:x=" Bleed";break;
	case 18:x=" Rupture";break;
	case 19:x=" Shout";break;
	case 20:x=" Rampage";break;
	case 21:x=" Revenge";break;
	case 22:x=" Execution";break;
	case 23:x=" Arms";break;
	case 24:x=" Blade";break;
	case 25:x=" Smash";break;
	case 26:x=" Cleave";break;
	case 27:x=" Blow";break;
	case 28:x=" Devastation";break;
	case 29:x=" Spree";break;
	case 30:x=" Dagger";break;
	case 31:x=" Knife";break;
	case 32:x=" Slice";break;
	case 33:x=" Kick";break;
	case 34:x=" Gouge";break;
	case 35:x=" Fist";break;
	case 36:x=" Pummel";break;
	case 37:x=" Shiv";break;
	case 38:x=" Mutilation";break;
	case 39:x=" Vault";break;
	case 40:x=" Mark";break;
	case 41:x=" Spike";break;
	case 42:x="";break;
	case 43:x="";break;
	case 44:x="";break;
	case 45:x="";break;
	case 46:x="";break;
	case 47:x="";break;
	case 48:x="";break;
	case 49:x="";break;
	case 50:x="";break;}

	switch(randomInt(1, 4)){//final aux
	case 1:aux=q;aux2=w;break;
	case 2:aux=a;aux2=s;break;
	case 3:aux=e;aux2=f;break;
	case 4:aux=z;aux2=x;break;}

	if(randomInt(1, 5)==1)
	modif=d;

	switch(nigger){//return
	case 1: return modif+aux+aux2;break;
	case 2: return modif+q+w;break;
	case 3: return modif+a+s;break;
	case 4: return modif+e+f;break;
	case 5: return modif+z+x;break;
	}


	}
	public: static var Upgrade(){
	var q,w,e;
	var a,s,d;
	var x,f,z;
	switch(randomInt(1, 42)){
	case 1:q="Improved ";break;
	case 2:q="Augumented ";break;
	case 3:q="Steel ";break;
	case 4:q="Steel-Forged ";break;
	case 5:q="Deep Sea ";break;
	case 6:q="Coral ";break;
	case 7:q="Black ";break;
	case 8:q="Red ";break;
	case 9:q="Blood-Forged ";break;
	case 10:q="Lava-Forged ";break;
	case 11:q="Storm ";break;
	case 12:q="Storm-Forged ";break;
	case 13:q="Burning ";break;
	case 14:q="Envenomed ";break;
	case 15:q="Reinforced ";break;
	case 16:q="Spiked ";break;
	case 17:q="Red Iron ";break;
	case 18:q="Iron ";break;
	case 19:q="Chitinous ";break;
	case 20:q="Undead ";break;
	case 21:q="Dread ";break;
	case 22:q="Corpse-Forged ";break;
	case 23:q="Arcane-Forged ";break;
	case 24:q="Mana-Forged ";break;
	case 25:q="Enchanted ";break;
	case 26:q="Frost ";break;
	case 27:q="Stone ";break;
	case 28:q="Runic ";break;
	case 29:q="Hardened ";break;
	case 30:q="Adapted ";break;
	case 31:q="Evolved ";break;
	case 32:q="Moon ";break;
	case 33:q="Sun ";break;
	case 34:q="Stoneskin ";break;
	case 35:q="Dragonscale ";break;
	case 36:q="Fortified ";break;
	case 37:q="Studded ";break;
	case 38:q="Refined ";break;
	case 39:q="Advanced ";break;
	case 40:q="Higher ";break;
	case 41:q="Developed ";break;
	case 42:q="Enhanced ";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}
	switch(randomInt(1, 32)){
	case 1:w="Gunpowder ";break;
	case 2:w="Shields ";break;
	case 3:w="Swords ";break;
	case 4:w="Weapons ";break;
	case 5:w="Plating ";break;
	case 6:w="Armor ";break;
	case 7:w="Hammers ";break;
	case 8:w="Masonry ";break;
	case 9:w="Walls ";break;
	case 10:w="Barricades ";break;
	case 11:w="Rifles ";break;
	case 12:w="Bows ";break;
	case 13:w="Spears ";break;
	case 14:w="Axes ";break;
	case 15:w="Arms ";break;
	case 16:w="Leather ";break;
	case 17:w="Mail Armor";break;
	case 18:w="Plates ";break;
	case 19:w="Defenses ";break;
	case 20:w="Attack ";break;
	case 21:w="Claws ";break;
	case 22:w="Fangs ";break;
	case 23:w="Carapace ";break;
	case 24:w="Hides ";break;
	case 25:w="Skin ";break;
	case 26:w="Woodwork ";break;
	case 27:w="Talons ";break;
	case 28:w="Feathers ";break;
	case 29:w="Blades ";break;
	case 30:w="Scales ";break;
	case 31:w="Tridents ";break;
	case 32:w="Constructions ";break;
	case 33:w="";break;
	case 34:w="";break;
	case 35:w="";break;
	case 36:w="";break;
	case 37:w="";break;
	case 38:w="";break;
	case 39:w="";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}
	switch(randomInt(1, 50)){
	case 1:e="";break;
	case 2:e="";break;
	case 3:e="";break;
	case 4:e="";break;
	case 5:e="";break;
	case 6:e="";break;
	case 7:e="";break;
	case 8:e="";break;
	case 9:e="";break;
	case 10:e="";break;
	case 11:e="";break;
	case 12:e="";break;
	case 13:e="";break;
	case 14:e="";break;
	case 15:e="";break;
	case 16:e="";break;
	case 17:e="";break;
	case 18:e="";break;
	case 19:e="";break;
	case 20:e="";break;
	case 21:e="";break;
	case 22:e="";break;
	case 23:e="";break;
	case 24:e="";break;
	case 25:e="";break;
	case 26:e="";break;
	case 27:e="";break;
	case 28:e="";break;
	case 29:e="";break;
	case 30:e="";break;
	case 31:e="";break;
	case 32:e="";break;
	case 33:e="";break;
	case 34:e="";break;
	case 35:e="";break;
	case 36:e="";break;
	case 37:e="";break;
	case 38:e="";break;
	case 39:e="";break;
	case 40:e="";break;
	case 41:e="";break;
	case 42:e="";break;
	case 43:e="";break;
	case 44:e="";break;
	case 45:e="";break;
	case 46:e="";break;
	case 47:e="";break;
	case 48:e="";break;
	case 49:e="";break;
	case 50:e="";break;}
	switch(randomInt(1, 50)){
	case 1:a="";break;
	case 2:a="";break;
	case 3:a="";break;
	case 4:a="";break;
	case 5:a="";break;
	case 6:a="";break;
	case 7:a="";break;
	case 8:a="";break;
	case 9:a="";break;
	case 10:a="";break;
	case 11:a="";break;
	case 12:a="";break;
	case 13:a="";break;
	case 14:a="";break;
	case 15:a="";break;
	case 16:a="";break;
	case 17:a="";break;
	case 18:a="";break;
	case 19:a="";break;
	case 20:a="";break;
	case 21:a="";break;
	case 22:a="";break;
	case 23:a="";break;
	case 24:a="";break;
	case 25:a="";break;
	case 26:a="";break;
	case 27:a="";break;
	case 28:a="";break;
	case 29:a="";break;
	case 30:a="";break;
	case 31:a="";break;
	case 32:a="";break;
	case 33:a="";break;
	case 34:a="";break;
	case 35:a="";break;
	case 36:a="";break;
	case 37:a="";break;
	case 38:a="";break;
	case 39:a="";break;
	case 40:a="";break;
	case 41:a="";break;
	case 42:a="";break;
	case 43:a="";break;
	case 44:a="";break;
	case 45:a="";break;
	case 46:a="";break;
	case 47:a="";break;
	case 48:a="";break;
	case 49:a="";break;
	case 50:a="";break;}
	switch(randomInt(1, 50)){
	case 1:s="";break;
	case 2:s="";break;
	case 3:s="";break;
	case 4:s="";break;
	case 5:s="";break;
	case 6:s="";break;
	case 7:s="";break;
	case 8:s="";break;
	case 9:s="";break;
	case 10:s="";break;
	case 11:s="";break;
	case 12:s="";break;
	case 13:s="";break;
	case 14:s="";break;
	case 15:s="";break;
	case 16:s="";break;
	case 17:s="";break;
	case 18:s="";break;
	case 19:s="";break;
	case 20:s="";break;
	case 21:s="";break;
	case 22:s="";break;
	case 23:s="";break;
	case 24:s="";break;
	case 25:s="";break;
	case 26:s="";break;
	case 27:s="";break;
	case 28:s="";break;
	case 29:s="";break;
	case 30:s="";break;
	case 31:s="";break;
	case 32:s="";break;
	case 33:s="";break;
	case 34:s="";break;
	case 35:s="";break;
	case 36:s="";break;
	case 37:s="";break;
	case 38:s="";break;
	case 39:s="";break;
	case 40:s="";break;
	case 41:s="";break;
	case 42:s="";break;
	case 43:s="";break;
	case 44:s="";break;
	case 45:s="";break;
	case 46:s="";break;
	case 47:s="";break;
	case 48:s="";break;
	case 49:s="";break;
	case 50:s="";break;}
	switch(randomInt(1, 50)){
	case 1:d="";break;
	case 2:d="";break;
	case 3:d="";break;
	case 4:d="";break;
	case 5:d="";break;
	case 6:d="";break;
	case 7:d="";break;
	case 8:d="";break;
	case 9:d="";break;
	case 10:d="";break;
	case 11:d="";break;
	case 12:d="";break;
	case 13:d="";break;
	case 14:d="";break;
	case 15:d="";break;
	case 16:d="";break;
	case 17:d="";break;
	case 18:d="";break;
	case 19:d="";break;
	case 20:d="";break;
	case 21:d="";break;
	case 22:d="";break;
	case 23:d="";break;
	case 24:d="";break;
	case 25:d="";break;
	case 26:d="";break;
	case 27:d="";break;
	case 28:d="";break;
	case 29:d="";break;
	case 30:d="";break;
	case 31:d="";break;
	case 32:d="";break;
	case 33:d="";break;
	case 34:d="";break;
	case 35:d="";break;
	case 36:d="";break;
	case 37:d="";break;
	case 38:d="";break;
	case 39:d="";break;
	case 40:d="";break;
	case 41:d="";break;
	case 42:d="";break;
	case 43:d="";break;
	case 44:d="";break;
	case 45:d="";break;
	case 46:d="";break;
	case 47:d="";break;
	case 48:d="";break;
	case 49:d="";break;
	case 50:d="";break;}
	switch(randomInt(1, 50)){
	case 1:x="";break;
	case 2:x="";break;
	case 3:x="";break;
	case 4:x="";break;
	case 5:x="";break;
	case 6:x="";break;
	case 7:x="";break;
	case 8:x="";break;
	case 9:x="";break;
	case 10:x="";break;
	case 11:x="";break;
	case 12:x="";break;
	case 13:x="";break;
	case 14:x="";break;
	case 15:x="";break;
	case 16:x="";break;
	case 17:x="";break;
	case 18:x="";break;
	case 19:x="";break;
	case 20:x="";break;
	case 21:x="";break;
	case 22:x="";break;
	case 23:x="";break;
	case 24:x="";break;
	case 25:x="";break;
	case 26:x="";break;
	case 27:x="";break;
	case 28:x="";break;
	case 29:x="";break;
	case 30:x="";break;
	case 31:x="";break;
	case 32:x="";break;
	case 33:x="";break;
	case 34:x="";break;
	case 35:x="";break;
	case 36:x="";break;
	case 37:x="";break;
	case 38:x="";break;
	case 39:x="";break;
	case 40:x="";break;
	case 41:x="";break;
	case 42:x="";break;
	case 43:x="";break;
	case 44:x="";break;
	case 45:x="";break;
	case 46:x="";break;
	case 47:x="";break;
	case 48:x="";break;
	case 49:x="";break;
	case 50:x="";break;}
	switch(randomInt(1, 50)){
	case 1:z="";break;
	case 2:z="";break;
	case 3:z="";break;
	case 4:z="";break;
	case 5:z="";break;
	case 6:z="";break;
	case 7:z="";break;
	case 8:z="";break;
	case 9:z="";break;
	case 10:z="";break;
	case 11:z="";break;
	case 12:z="";break;
	case 13:z="";break;
	case 14:z="";break;
	case 15:z="";break;
	case 16:z="";break;
	case 17:z="";break;
	case 18:z="";break;
	case 19:z="";break;
	case 20:z="";break;
	case 21:z="";break;
	case 22:z="";break;
	case 23:z="";break;
	case 24:z="";break;
	case 25:z="";break;
	case 26:z="";break;
	case 27:z="";break;
	case 28:z="";break;
	case 29:z="";break;
	case 30:z="";break;
	case 31:z="";break;
	case 32:z="";break;
	case 33:z="";break;
	case 34:z="";break;
	case 35:z="";break;
	case 36:z="";break;
	case 37:z="";break;
	case 38:z="";break;
	case 39:z="";break;
	case 40:z="";break;
	case 41:z="";break;
	case 42:z="";break;
	case 43:z="";break;
	case 44:z="";break;
	case 45:z="";break;
	case 46:z="";break;
	case 47:z="";break;
	case 48:z="";break;
	case 49:z="";break;
	case 50:z="";break;}

	return q+w;

	}
	public: static var JewGagster(){
	var q,w,e;
	var a,s,d;
	var x,f,z;
	switch(randomInt(1, 7)){
	case 1:q=" Bank";break;
	case 2:q=" Money";break;
	case 3:q=" Gold";break;
	case 4:q=" Rich";break;
	case 5:q=" Cash";break;
	case 6:q=" Wealth";break;
	case 7:q=" Coin";break;
	case 8:q="";break;
	case 9:q="";break;
	case 10:q="";break;
	case 11:q="";break;
	case 12:q="";break;
	case 13:q="";break;
	case 14:q="";break;
	case 15:q="";break;
	case 16:q="";break;
	case 17:q="";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}
	switch(randomInt(1, 15)){
	case 1:w="sack ";break;
	case 2:w="master ";break;
	case 3:w="hands ";break;
	case 4:w="counter ";break;
	case 5:w="beard ";break;
	case 6:w="finger";break;
	case 7:w="hat ";break;
	case 8:w="maker ";break;
	case 9:w="jew ";break;
	case 10:w="man ";break;
	case 11:w="face ";break;
	case 12:w="scar ";break;
	case 13:w="bag ";break;
	case 14:w="pistol ";break;
	case 15:w="trigger ";break;
	case 16:w="";break;
	case 17:w="";break;
	case 18:w="";break;
	case 19:w="";break;
	case 20:w="";break;
	case 21:w="";break;
	case 22:w="";break;
	case 23:w="";break;
	case 24:w="";break;
	case 25:w="";break;
	case 26:w="";break;
	case 27:w="";break;
	case 28:w="";break;
	case 29:w="";break;
	case 30:w="";break;
	case 31:w="";break;
	case 32:w="";break;
	case 33:w="";break;
	case 34:w="";break;
	case 35:w="";break;
	case 36:w="";break;
	case 37:w="";break;
	case 38:w="";break;
	case 39:w="";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}
	switch(randomInt(1, 6)){
	case 1:e=" the 'Gasman' ";break;
	case 2:e=" the 'Showerman' ";break;
	case 3:e=" the 'Jewster' ";break;
	case 4:e=" the 'Holoviver' ";break;
	case 5:e=" the 'Circumciser' ";break;
	case 6:e=" the 'Exorcist' ";break;
	case 7:e="";break;
	case 8:e="";break;
	case 9:e="";break;
	case 10:e="";break;
	case 11:e="";break;
	case 12:e="";break;
	case 13:e="";break;
	case 14:e="";break;
	case 15:e="";break;
	case 16:e="";break;
	case 17:e="";break;
	case 18:e="";break;
	case 19:e="";break;
	case 20:e="";break;
	case 21:e="";break;
	case 22:e="";break;
	case 23:e="";break;
	case 24:e="";break;
	case 25:e="";break;
	case 26:e="";break;
	case 27:e="";break;
	case 28:e="";break;
	case 29:e="";break;
	case 30:e="";break;
	case 31:e="";break;
	case 32:e="";break;
	case 33:e="";break;
	case 34:e="";break;
	case 35:e="";break;
	case 36:e="";break;
	case 37:e="";break;
	case 38:e="";break;
	case 39:e="";break;
	case 40:e="";break;
	case 41:e="";break;
	case 42:e="";break;
	case 43:e="";break;
	case 44:e="";break;
	case 45:e="";break;
	case 46:e="";break;
	case 47:e="";break;
	case 48:e="";break;
	case 49:e="";break;
	case 50:e="";break;}
	switch(randomInt(1, 29)){
	case 1:a="Nathan";break;
	case 2:a="Mort";break;
	case 3:a="Adam";break;
	case 4:a="David";break;
	case 5:a="Ephraim";break;
	case 6:a="Elyakim";break;
	case 7:a="Elliot";break;
	case 8:a="Noah";break;
	case 9:a="Sean";break;
	case 10:a="Yakov";break;
	case 11:a="Sheldon";break;
	case 12:a="Morris";break;
	case 13:a="Yorick";break;
	case 14:a="Isaac";break;
	case 15:a="Jacob";break;
	case 16:a="Jack";break;
	case 17:a="Samuel";break;
	case 18:a="Sam";break;
	case 19:a="Moses";break;
	case 20:a="Sidney";break;
	case 21:a="Caleb";break;
	case 22:a="Jared";break;
	case 23:a="Jaron";break;
	case 24:a="Joel";break;
	case 25:a="Jonah";break;
	case 26:a="Jude";break;
	case 27:a="Omar";break;
	case 28:a="Zachary";break;
	case 29:a="Joshua";break;
	case 30:a="";break;
	case 31:a="";break;
	case 32:a="";break;
	case 33:a="";break;
	case 34:a="";break;
	case 35:a="";break;
	case 36:a="";break;
	case 37:a="";break;
	case 38:a="";break;
	case 39:a="";break;
	case 40:a="";break;
	case 41:a="";break;
	case 42:a="";break;
	case 43:a="";break;
	case 44:a="";break;
	case 45:a="";break;
	case 46:a="";break;
	case 47:a="";break;
	case 48:a="";break;
	case 49:a="";break;
	case 50:a="";break;}


	switch(randomInt(1, 5)){
	case 1:return a+e;break;
	case 2:return a+q+w;break;
	case 3:return a+q+w;break;
	case 4:return a+q+w;break;
	case 5:return a+q+w;break;



	}

	/*

	daniel
	ephraim
	elyakim
	elliot
	noah
	sean
	yakov
	sheldon
	morris
	yorick
	isaac
	jacob
	jack
	sam
	samuel
	moses
	sidney
	caleb
	jared
	jaron
	joel
	jonah
	jude
	omar
	zachary


	*/

	}
	public: static var Bandit(var i){
	Base Basic;
	var q,w,e,a;

	q=Basic.Normal_Name_First_Female();
	w=Basic.Normal_Name_First_Male();

	switch(randomInt(1, 12)){
	case 1:e="Pad";break;
	case 2:e="Black";break;
	case 3:e="Wild";break;
	case 4:e="Pack";break;
	case 5:e="Back";break;
	case 6:e="Mad";break;
	case 7:e="Sly";break;
	case 8:e="Crag";break;
	case 9:e="Shark";break;
	case 10:e="Red";break;
	case 11:e="Cheat";break;
	case 12:e="Crook";break;
	case 13:e="Red";break;
	case 14:e="";break;
	case 15:e="";break;
	case 16:e="";break;
	case 17:e="";break;
	case 18:e="";break;
	case 19:e="";break;
	case 20:e="";break;
	case 21:e="";break;
	case 22:e="";break;
	case 23:e="";break;
	case 24:e="";break;
	case 25:e="";break;
	case 26:e="";break;
	case 27:e="";break;
	case 28:e="";break;
	case 29:e="";break;
	case 30:e="";break;
	case 31:e="";break;
	case 32:e="";break;
	case 33:e="";break;
	case 34:e="";break;
	case 35:e="";break;
	case 36:e="";break;
	case 37:e="";break;
	case 38:e="";break;
	case 39:e="";break;
	case 40:e="";break;
	case 41:e="";break;
	case 42:e="";break;
	case 43:e="";break;
	case 44:e="";break;
	case 45:e="";break;
	case 46:e="";break;
	case 47:e="";break;
	case 48:e="";break;
	case 49:e="";break;
	case 50:e="";break;}

	switch(randomInt(1, 23)){
	case 1:a="foot";break;
	case 2:a="knife";break;
	case 3:a="dagger";break;
	case 4:a="cloak";break;
	case 5:a="back";break;
	case 6:a="scarf";break;
	case 7:a="rob";break;
	case 8:a="steal";break;
	case 9:a="hand";break;
	case 10:a="finger";break;
	case 11:a="bag";break;
	case 12:a="pocket";break;
	case 13:a="pick";break;
	case 14:a="lock";break;
	case 15:a="jack";break;
	case 16:a="shark";break;
	case 17:a="scar";break;
	case 18:a="eye";break;
	case 19:a="hat";break;
	case 20:a="pot";break;
	case 21:a="smoke";break;
	case 22:a="rat";break;
	case 23:a="patch";break;
	case 24:a="";break;
	case 25:a="";break;
	case 26:a="";break;
	case 27:a="";break;
	case 28:a="";break;
	case 29:a="";break;
	case 30:a="";break;
	case 31:a="";break;
	case 32:a="";break;
	case 33:a="";break;
	case 34:a="";break;
	case 35:a="";break;
	case 36:a="";break;
	case 37:a="";break;
	case 38:a="";break;
	case 39:a="";break;
	case 40:a="";break;
	case 41:a="";break;
	case 42:a="";break;
	case 43:a="";break;
	case 44:a="";break;
	case 45:a="";break;
	case 46:a="";break;
	case 47:a="";break;
	case 48:a="";break;
	case 49:a="";break;
	case 50:a="";break;}


	if(i==1){
		return w+e+a;
	}
	else return q+e+a;

	}
	public: static var BanditS(var i){
	var q,w,e;
	var a,s,d;
	var x,f,z;
	switch(randomInt(1, 50)){
	case 1:q="";break;
	case 2:q="";break;
	case 3:q="";break;
	case 4:q="";break;
	case 5:q="";break;
	case 6:q="";break;
	case 7:q="";break;
	case 8:q="";break;
	case 9:q="";break;
	case 10:q="";break;
	case 11:q="";break;
	case 12:q="";break;
	case 13:q="";break;
	case 14:q="";break;
	case 15:q="";break;
	case 16:q="";break;
	case 17:q="";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}


	switch(randomInt(1, 50)){
	case 1:w="";break;
	case 2:w="";break;
	case 3:w="";break;
	case 4:w="";break;
	case 5:w="";break;
	case 6:w="";break;
	case 7:w="";break;
	case 8:w="";break;
	case 9:w="";break;
	case 10:w="";break;
	case 11:w="";break;
	case 12:w="";break;
	case 13:w="";break;
	case 14:w="";break;
	case 15:w="";break;
	case 16:w="";break;
	case 17:w="";break;
	case 18:w="";break;
	case 19:w="";break;
	case 20:w="";break;
	case 21:w="";break;
	case 22:w="";break;
	case 23:w="";break;
	case 24:w="";break;
	case 25:w="";break;
	case 26:w="";break;
	case 27:w="";break;
	case 28:w="";break;
	case 29:w="";break;
	case 30:w="";break;
	case 31:w="";break;
	case 32:w="";break;
	case 33:w="";break;
	case 34:w="";break;
	case 35:w="";break;
	case 36:w="";break;
	case 37:w="";break;
	case 38:w="";break;
	case 39:w="";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}

	return q+w;

	}
	public: static var Succubus(){
	var q,w,e;
	var a,s,d;
	var x,f,z;
	/*






	*/
	switch(randomInt(1, 11)){
	case 1:q="Temptress ";break;
	case 2:q="Seductress ";break;
	case 3:q="Delilah ";break;
	case 4:q="Jezebel ";break;
	case 5:q="Enchantress ";break;
	case 6:q="Deviless ";break;
	case 7:q="Demoness ";break;
	case 8:q="Desiress ";break;
	case 9:q="Excitress ";break;
	case 10:q="Lover ";break;
	case 11:q="Hellmaid ";break;
	case 12:q="";break;
	case 13:q="";break;
	case 14:q="";break;
	case 15:q="";break;
	case 16:q="";break;
	case 17:q="";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}

	switch(randomInt(1, 19)){
	case 1:w="the Seductive ";break;
	case 2:w="the Sensual ";break;
	case 3:w="the Arousing ";break;
	case 4:w="the Provocative ";break;
	case 5:w="the Sexy ";break;
	case 6:w="the Lustful ";break;
	case 7:w="the Hungering ";break;
	case 8:w="the Urging ";break;
	case 9:w="the Rousing ";break;
	case 10:w="the Passionate ";break;
	case 11:w="the Pleasuring ";break;
	case 12:w="the Romantic ";break;
	case 13:w="the Amorous ";break;
	case 14:w="the Loving ";break;
	case 15:w="the Horny ";break;
	case 16:w="the Charmer ";break;
	case 17:w="the Charming ";break;
	case 18:w="of the Dreams ";break;
	case 19:w="the Wild ";break;
	case 20:w="";break;
	case 21:w="";break;
	case 22:w="";break;
	case 23:w="";break;
	case 24:w="";break;
	case 25:w="";break;
	case 26:w="";break;
	case 27:w="";break;
	case 28:w="";break;
	case 29:w="";break;
	case 30:w="";break;
	case 31:w="";break;
	case 32:w="";break;
	case 33:w="";break;
	case 34:w="";break;
	case 35:w="";break;
	case 36:w="";break;
	case 37:w="";break;
	case 38:w="";break;
	case 39:w="";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}





	switch(randomInt(1, 45)){
	case 1:e="Aphrodite ";break;
	case 2:e="Felicity ";break;
	case 3:e="Keira ";break;
	case 4:e="Evelyn ";break;
	case 5:e="Lexi ";break;
	case 6:e="Lilith ";break;
	case 7:e="Maya ";break;
	case 8:e="Phoeni ";break;
	case 9:e="Serena ";break;
	case 10:e="Selena ";break;
	case 11:e="Zelda ";break;
	case 12:e="Yelena ";break;
	case 13:e="Xandra ";break;
	case 14:e="Xia ";break;
	case 15:e="Scarlett ";break;
	case 16:e="Ysenia ";break;
	case 17:e="Leila ";break;
	case 18:e="Cassandra ";break;
	case 19:e="Sasha ";break;
	case 20:e="Quinn ";break;
	case 21:e="Paige ";break;
	case 22:e="Athena ";break;
	case 23:e="Artemis ";break;
	case 24:e="Laila ";break;
	case 25:e="Freya ";break;
	case 26:e="Diana ";break;
	case 27:e="Iris ";break;
	case 28:e="Selene ";break;
	case 29:e="Hera ";break;
	case 30:e="Fiora ";break;
	case 31:e="Eilere ";break;
	case 32:e="Emmaline ";break;
	case 33:e="Jade ";break;
	case 34:e="Ivy ";break;
	case 35:e="Daphne ";break;
	case 36:e="Natalie ";break;
	case 37:e="Elle ";break;
	case 38:e="Nemesis ";break;
	case 39:e="Chanel ";break;
	case 40:e="Nemesis ";break;
	case 41:e="Davilla ";break;
	case 42:e="Amelia ";break;
	case 43:e="Cadence ";break;
	case 44:e="Blair ";break;
	case 45:e="Adele ";break;
	case 46:e="";break;
	case 47:e="";break;
	case 48:e="";break;
	case 49:e="";break;
	case 50:e="";break;}

	switch(randomInt(1, 50)){
	case 1:a="";break;
	case 2:a="";break;
	case 3:a="";break;
	case 4:a="";break;
	case 5:a="";break;
	case 6:a="";break;
	case 7:a="";break;
	case 8:a="";break;
	case 9:a="";break;
	case 10:a="";break;
	case 11:a="";break;
	case 12:a="";break;
	case 13:a="";break;
	case 14:a="";break;
	case 15:a="";break;
	case 16:a="";break;
	case 17:a="";break;
	case 18:a="";break;
	case 19:a="";break;
	case 20:a="";break;
	case 21:a="";break;
	case 22:a="";break;
	case 23:a="";break;
	case 24:a="";break;
	case 25:a="";break;
	case 26:a="";break;
	case 27:a="";break;
	case 28:a="";break;
	case 29:a="";break;
	case 30:a="";break;
	case 31:a="";break;
	case 32:a="";break;
	case 33:a="";break;
	case 34:a="";break;
	case 35:a="";break;
	case 36:a="";break;
	case 37:a="";break;
	case 38:a="";break;
	case 39:a="";break;
	case 40:a="";break;
	case 41:a="";break;
	case 42:a="";break;
	case 43:a="";break;
	case 44:a="";break;
	case 45:a="";break;
	case 46:a="";break;
	case 47:a="";break;
	case 48:a="";break;
	case 49:a="";break;
	case 50:a="";break;}


	switch(randomInt(1, 50)){
	case 1:s="";break;
	case 2:s="";break;
	case 3:s="";break;
	case 4:s="";break;
	case 5:s="";break;
	case 6:s="";break;
	case 7:s="";break;
	case 8:s="";break;
	case 9:s="";break;
	case 10:s="";break;
	case 11:s="";break;
	case 12:s="";break;
	case 13:s="";break;
	case 14:s="";break;
	case 15:s="";break;
	case 16:s="";break;
	case 17:s="";break;
	case 18:s="";break;
	case 19:s="";break;
	case 20:s="";break;
	case 21:s="";break;
	case 22:s="";break;
	case 23:s="";break;
	case 24:s="";break;
	case 25:s="";break;
	case 26:s="";break;
	case 27:s="";break;
	case 28:s="";break;
	case 29:s="";break;
	case 30:s="";break;
	case 31:s="";break;
	case 32:s="";break;
	case 33:s="";break;
	case 34:s="";break;
	case 35:s="";break;
	case 36:s="";break;
	case 37:s="";break;
	case 38:s="";break;
	case 39:s="";break;
	case 40:s="";break;
	case 41:s="";break;
	case 42:s="";break;
	case 43:s="";break;
	case 44:s="";break;
	case 45:s="";break;
	case 46:s="";break;
	case 47:s="";break;
	case 48:s="";break;
	case 49:s="";break;
	case 50:s="";break;}

	switch(randomInt(1, 50)){
	case 1:d="";break;
	case 2:d="";break;
	case 3:d="";break;
	case 4:d="";break;
	case 5:d="";break;
	case 6:d="";break;
	case 7:d="";break;
	case 8:d="";break;
	case 9:d="";break;
	case 10:d="";break;
	case 11:d="";break;
	case 12:d="";break;
	case 13:d="";break;
	case 14:d="";break;
	case 15:d="";break;
	case 16:d="";break;
	case 17:d="";break;
	case 18:d="";break;
	case 19:d="";break;
	case 20:d="";break;
	case 21:d="";break;
	case 22:d="";break;
	case 23:d="";break;
	case 24:d="";break;
	case 25:d="";break;
	case 26:d="";break;
	case 27:d="";break;
	case 28:d="";break;
	case 29:d="";break;
	case 30:d="";break;
	case 31:d="";break;
	case 32:d="";break;
	case 33:d="";break;
	case 34:d="";break;
	case 35:d="";break;
	case 36:d="";break;
	case 37:d="";break;
	case 38:d="";break;
	case 39:d="";break;
	case 40:d="";break;
	case 41:d="";break;
	case 42:d="";break;
	case 43:d="";break;
	case 44:d="";break;
	case 45:d="";break;
	case 46:d="";break;
	case 47:d="";break;
	case 48:d="";break;
	case 49:d="";break;
	case 50:d="";break;}

	switch(randomInt(1, 50)){
	case 1:z="";break;
	case 2:z="";break;
	case 3:z="";break;
	case 4:z="";break;
	case 5:z="";break;
	case 6:z="";break;
	case 7:z="";break;
	case 8:z="";break;
	case 9:z="";break;
	case 10:z="";break;
	case 11:z="";break;
	case 12:z="";break;
	case 13:z="";break;
	case 14:z="";break;
	case 15:z="";break;
	case 16:z="";break;
	case 17:z="";break;
	case 18:z="";break;
	case 19:z="";break;
	case 20:z="";break;
	case 21:z="";break;
	case 22:z="";break;
	case 23:z="";break;
	case 24:z="";break;
	case 25:z="";break;
	case 26:z="";break;
	case 27:z="";break;
	case 28:z="";break;
	case 29:z="";break;
	case 30:z="";break;
	case 31:z="";break;
	case 32:z="";break;
	case 33:z="";break;
	case 34:z="";break;
	case 35:z="";break;
	case 36:z="";break;
	case 37:z="";break;
	case 38:z="";break;
	case 39:z="";break;
	case 40:z="";break;
	case 41:z="";break;
	case 42:z="";break;
	case 43:z="";break;
	case 44:z="";break;
	case 45:z="";break;
	case 46:z="";break;
	case 47:z="";break;
	case 48:z="";break;
	case 49:z="";break;
	case 50:z="";break;}


	switch(randomInt(1, 50)){
	case 1:x="";break;
	case 2:x="";break;
	case 3:x="";break;
	case 4:x="";break;
	case 5:x="";break;
	case 6:x="";break;
	case 7:x="";break;
	case 8:x="";break;
	case 9:x="";break;
	case 10:x="";break;
	case 11:x="";break;
	case 12:x="";break;
	case 13:x="";break;
	case 14:x="";break;
	case 15:x="";break;
	case 16:x="";break;
	case 17:x="";break;
	case 18:x="";break;
	case 19:x="";break;
	case 20:x="";break;
	case 21:x="";break;
	case 22:x="";break;
	case 23:x="";break;
	case 24:x="";break;
	case 25:x="";break;
	case 26:x="";break;
	case 27:x="";break;
	case 28:x="";break;
	case 29:x="";break;
	case 30:x="";break;
	case 31:x="";break;
	case 32:x="";break;
	case 33:x="";break;
	case 34:x="";break;
	case 35:x="";break;
	case 36:x="";break;
	case 37:x="";break;
	case 38:x="";break;
	case 39:x="";break;
	case 40:x="";break;
	case 41:x="";break;
	case 42:x="";break;
	case 43:x="";break;
	case 44:x="";break;
	case 45:x="";break;
	case 46:x="";break;
	case 47:x="";break;
	case 48:x="";break;
	case 49:x="";break;
	case 50:x="";break;}

	switch(randomInt(1, 2)){
	case 1:return q+e;
	case 2:return e+w;


	}

	}
	public: static var ProgrammingLanguage(){
	var q,w,e;
	var a,s,d;
	var x,f,z;
	switch(randomInt(1, 26)){
	case 1:q="Q";break;
	case 2:q="W";break;
	case 3:q="E";break;
	case 4:q="R";break;
	case 5:q="T";break;
	case 6:q="Y";break;
	case 7:q="U";break;
	case 8:q="I";break;
	case 9:q="O";break;
	case 10:q="P";break;
	case 11:q="A";break;
	case 12:q="S";break;
	case 13:q="D";break;
	case 14:q="F";break;
	case 15:q="G";break;
	case 16:q="H";break;
	case 17:q="J";break;
	case 18:q="K";break;
	case 19:q="L";break;
	case 20:q="Z";break;
	case 21:q="X";break;
	case 22:q="C";break;
	case 23:q="V";break;
	case 24:q="B";break;
	case 25:q="N";break;
	case 26:q="M";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}

	switch(randomInt(1, 26)){
	case 1:w="Q";break;
	case 2:w="W";break;
	case 3:w="E";break;
	case 4:w="R";break;
	case 5:w="T";break;
	case 6:w="Y";break;
	case 7:w="U";break;
	case 8:w="I";break;
	case 9:w="O";break;
	case 10:w="P";break;
	case 11:w="A";break;
	case 12:w="S";break;
	case 13:w="D";break;
	case 14:w="F";break;
	case 15:w="G";break;
	case 16:w="H";break;
	case 17:w="J";break;
	case 18:w="K";break;
	case 19:w="L";break;
	case 20:w="Z";break;
	case 21:w="X";break;
	case 22:w="C";break;
	case 23:w="V";break;
	case 24:w="B";break;
	case 25:w="N";break;
	case 26:w="M";break;
	}

	switch(randomInt(1, 26)){
	case 1:e="Q";break;
	case 2:e="W";break;
	case 3:e="E";break;
	case 4:e="R";break;
	case 5:e="T";break;
	case 6:e="Y";break;
	case 7:e="U";break;
	case 8:e="I";break;
	case 9:e="O";break;
	case 10:e="P";break;
	case 11:e="A";break;
	case 12:e="S";break;
	case 13:e="D";break;
	case 14:e="F";break;
	case 15:e="G";break;
	case 16:e="H";break;
	case 17:e="J";break;
	case 18:e="K";break;
	case 19:e="L";break;
	case 20:e="Z";break;
	case 21:e="X";break;
	case 22:e="C";break;
	case 23:e="V";break;
	case 24:e="B";break;
	case 25:e="N";break;
	case 26:e="M";break;
	}


	switch(randomInt(1, 26)){
	case 1:a="Q";break;
	case 2:a="W";break;
	case 3:a="E";break;
	case 4:a="R";break;
	case 5:a="T";break;
	case 6:a="Y";break;
	case 7:a="U";break;
	case 8:a="I";break;
	case 9:a="O";break;
	case 10:a="P";break;
	case 11:a="A";break;
	case 12:a="S";break;
	case 13:a="D";break;
	case 14:a="F";break;
	case 15:a="G";break;
	case 16:a="H";break;
	case 17:a="J";break;
	case 18:a="K";break;
	case 19:a="L";break;
	case 20:a="Z";break;
	case 21:a="X";break;
	case 22:a="C";break;
	case 23:a="V";break;
	case 24:a="B";break;
	case 25:a="N";break;
	case 26:a="M";break;
	}


	switch(randomInt(1, 29)){
	case 1:s="#";break;
	case 2:s="-Core";break;
	case 3:s="+";break;
	case 4:s="++";break;
	case 5:s="+++";break;
	case 6:s=" Plus";break;
	case 7:s=" Plus Plus";break;
	case 8:s="Double";break;
	case 9:s="Triple";break;
	case 10:s="+";break;
	case 11:s="#";break;
	case 12:s="2";break;
	case 13:s="3";break;
	case 14:s="4";break;
	case 15:s="5";break;
	case 16:s=".com";break;
	case 17:s=".net";break;
	case 18:s="--";break;
	case 19:s="/";break;
	case 20:s=" Script";break;
	case 21:s="-code";break;
	case 22:s=" .NET";break;
	case 23:s="360'";break;
	case 24:s="180";break;
	case 25:s="90";break;
	case 26:s="1k";break;
	case 27:s=" Turbo";break;
	case 28:s="Sharp";break;
	case 29:s=" 2k";break;
	case 30:s="";break;
	case 31:s="";break;
	case 32:s="";break;
	case 33:s="";break;
	case 34:s="";break;
	case 35:s="";break;
	case 36:s="";break;
	case 37:s="";break;
	case 38:s="";break;
	case 39:s="";break;
	case 40:s="";break;
	case 41:s="";break;
	case 42:s="";break;
	case 43:s="";break;
	case 44:s="";break;
	case 45:s="";break;
	case 46:s="";break;
	case 47:s="";break;
	case 48:s="";break;
	case 49:s="";break;
	case 50:s="";break;}

	switch(randomInt(1, 107)){
	case 1:d="Ape";break;
	case 2:d="K2";break;
	case 3:d="Denali";break;
	case 4:d="Elbrus";break;
	case 5:d="Blanc";break;
	case 6:d="Black";break;
	case 7:d="White";break;
	case 8:d="Redd";break;
	case 9:d="Red";break;
	case 10:d="Green";break;
	case 11:d="Yellow";break;
	case 12:d="Teal";break;
	case 13:d="Sea";break;
	case 14:d="Blue";break;
	case 15:d="Bloo";break;
	case 16:d="Orange";break;
	case 17:d="Apple";break;
	case 18:d="Brown";break;
	case 19:d="Ban";break;
	case 20:d="Spray";break;
	case 21:d="box";break;
	case 22:d="digital";break;
	case 23:d="bott";break;
	case 24:d="rain";break;
	case 25:d="Cherry";break;
	case 26:d="Pear";break;
	case 27:d="Plum";break;
	case 28:d="Dogg";break;
	case 29:d="Katt";break;
	case 30:d="Melon";break;
	case 31:d="lemon";break;
	case 32:d="mango";break;
	case 33:d="CoCoNut";break;
	case 34:d="POMELO";break;
	case 35:d="WMelon";break;
	case 36:d="banana";break;
	case 37:d="ROOT";break;
	case 38:d="pepper";break;
	case 39:d="Sprout";break;
	case 40:d="Corn";break;
	case 41:d="TOMATO";break;
	case 42:d="shrppm";break;
	case 43:d="dc";break;
	case 44:d="bbc";break;
	case 45:d="Ocean";break;
	case 46:d="Expanse";break;
	case 47:d="Lake";break;
	case 48:d="pond";break;
	case 49:d="SURF";break;
	case 50:d="Sk8";break;
	case 51:d="wave";break;
	case 52:d="Absciss";break;
	case 53:d="360-";break;
	case 54:d="average";break;
	case 55:d="ave";break;
	case 56:d="Eve";break;
	case 57:d="Algo";break;
	case 58:d="Bino";break;
	case 59:d="count";break;
	case 60:d="domain";break;
	case 61:d="Locus";break;
	case 62:d="Lux";break;
	case 63:d="Lexicon";break;
	case 64:d="math";break;
	case 65:d="Matrix";break;
	case 66:d="NumeratE";break;
	case 67:d="sum";break;
	case 68:d="Orem";break;
	case 69:d="prog";break;
	case 70:d="Abstract";break;
	case 71:d="Canvas";break;
	case 72:d="Acrobat";break;
	case 73:d="Dino";break;
	case 74:d="Access";break;
	case 75:d="reg";break;
	case 76:d="booK";break;
	case 77:d="MAP";break;
	case 78:d="Prog";break;
	case 79:d="basic";break;
	case 80:d="Logic";break;
	case 81:d="hACK";break;
	case 82:d="Compi";break;
	case 83:d="ware";break;
	case 84:d="API";break;
	case 85:d="ject";break;
	case 86:d="ob J";break;
	case 87:d="lit";break;
	case 88:d="West";break;
	case 89:d="South";break;
	case 90:d="nord";break;
	case 91:d="starr";break;
	case 92:d="Eest";break;
	case 93:d="Montana";break;
	case 94:d="Dakota";break;
	case 95:d="Ohio";break;
	case 96:d="Hawaii";break;
	case 97:d="Iowa";break;
	case 98:d="Tx";break;
	case 99:d="Texas";break;
	case 100:d="York";break;
	case 101:d="Nile";break;
	case 102:d="amazon";break;
	case 103:d="River";break;
	case 104:d="Yangtze";break;
	case 105:d="Kongo";break;
	case 106:d="Niger";break;
	case 107:d="Lena";break;
	case 108:d="";break;
	case 109:d="";break;
	}

	switch(randomInt(1, 50)){
	case 1:z="";break;
	case 2:z="";break;
	case 3:z="";break;
	case 4:z="";break;
	case 5:z="";break;
	case 6:z="";break;
	case 7:z="";break;
	case 8:z="";break;
	case 9:z="";break;
	case 10:z="";break;
	case 11:z="";break;
	case 12:z="";break;
	case 13:z="";break;
	case 14:z="";break;
	case 15:z="";break;
	case 16:z="";break;
	case 17:z="";break;
	case 18:z="";break;
	case 19:z="";break;
	case 20:z="";break;
	case 21:z="";break;
	case 22:z="";break;
	case 23:z="";break;
	case 24:z="";break;
	case 25:z="";break;
	case 26:z="";break;
	case 27:z="";break;
	case 28:z="";break;
	case 29:z="";break;
	case 30:z="";break;
	case 31:z="";break;
	case 32:z="";break;
	case 33:z="";break;
	case 34:z="";break;
	case 35:z="";break;
	case 36:z="";break;
	case 37:z="";break;
	case 38:z="";break;
	case 39:z="";break;
	case 40:z="";break;
	case 41:z="";break;
	case 42:z="";break;
	case 43:z="";break;
	case 44:z="";break;
	case 45:z="";break;
	case 46:z="";break;
	case 47:z="";break;
	case 48:z="";break;
	case 49:z="";break;
	case 50:z="";break;}


	switch(randomInt(1, 50)){
	case 1:x="";break;
	case 2:x="";break;
	case 3:x="";break;
	case 4:x="";break;
	case 5:x="";break;
	case 6:x="";break;
	case 7:x="";break;
	case 8:x="";break;
	case 9:x="";break;
	case 10:x="";break;
	case 11:x="";break;
	case 12:x="";break;
	case 13:x="";break;
	case 14:x="";break;
	case 15:x="";break;
	case 16:x="";break;
	case 17:x="";break;
	case 18:x="";break;
	case 19:x="";break;
	case 20:x="";break;
	case 21:x="";break;
	case 22:x="";break;
	case 23:x="";break;
	case 24:x="";break;
	case 25:x="";break;
	case 26:x="";break;
	case 27:x="";break;
	case 28:x="";break;
	case 29:x="";break;
	case 30:x="";break;
	case 31:x="";break;
	case 32:x="";break;
	case 33:x="";break;
	case 34:x="";break;
	case 35:x="";break;
	case 36:x="";break;
	case 37:x="";break;
	case 38:x="";break;
	case 39:x="";break;
	case 40:x="";break;
	case 41:x="";break;
	case 42:x="";break;
	case 43:x="";break;
	case 44:x="";break;
	case 45:x="";break;
	case 46:x="";break;
	case 47:x="";break;
	case 48:x="";break;
	case 49:x="";break;
	case 50:x="";break;}

	switch(randomInt(1, 4)){
	case 1:z=q;break;
	case 2:z=q+w;break;
	case 3:z=q+w+e;break;
	case 4:z=q+w+e+a;break;
	}

	switch(randomInt(1, 19)){
	case 1: return z;break;
	case 2: return z+s;break;
	case 3: return d;break;
	case 4: return d+s;break;
	case 5: return q+"-"+a;break;
	case 6: return q+w+"-"+a;break;
	case 7: return q+w+e+"-"+a;break;
	case 8: return d+"-"+a;break;
	case 9: return d+"-"+a;break;
	case 10: return q+d;break;
	case 11: return z;break;
	case 12: return z+s;break;
	case 14: return d;break;
	case 13: return d+s;break;
	case 15: return q+d;break;
	case 16: return z;break;
	case 17: return z+s;break;
	case 18: return d;break;
	case 19: return d+s;break;


	}

	}
	public: static var Pandaren(){
	var q,w,e;
	var a,s,d;
	var x,f,z;
	switch(randomInt(1, 54)){
	case 1:q="An";break;
	case 2:q="Bai";break;
	case 3:q="Bao";break;
	case 4:q="Bo";break;
	case 5:q="Chang";break;
	case 6:q="Chen";break;
	case 7:q="Cheng";break;
	case 8:q="Chin";break;
	case 9:q="Chun";break;
	case 10:q="Dong";break;
	case 11:q="Fen";break;
	case 12:q="Fu";break;
	case 13:q="He";break;
	case 14:q="Hai";break;
	case 15:q="Huan";break;
	case 16:q="Huang";break;
	case 17:q="Jian";break;
	case 18:q="Jin";break;
	case 19:q="Jing";break;
	case 20:q="Ju";break;
	case 21:q="Jo";break;
	case 22:q="Cho";break;
	case 23:q="Li";break;
	case 24:q="Lai";break;
	case 25:q="Lo";break;
	case 26:q="Lin";break;
	case 27:q="Qiang";break;
	case 28:q="Qing";break;
	case 29:q="Shu";break;
	case 30:q="Sho";break;
	case 31:q="Shun";break;
	case 32:q="Wen";break;
	case 33:q="Wo";break;
	case 34:q="Wu";break;
	case 35:q="Xue";break;
	case 36:q="Yin";break;
	case 37:q="Yo";break;
	case 38:q="Zhen";break;
	case 39:q="Zheng";break;
	case 40:q="Ao";break;
	case 41:q="Ro";break;
	case 42:q="Po";break;
	case 43:q="Do";break;
	case 44:q="Fo";break;
	case 45:q="Ho";break;
	case 46:q="Haw";break;
	case 47:q="Hao";break;
	case 48:q="Daw";break;
	case 49:q="Aysa";break;
	case 50:q="Ji";break;
	case 51:q="Shao";break;
	case 52:q="Sha";break;
	case 53:q="Yi";break;
	case 54:q="Chi";break;
	case 55:q="";break;
	case 56:q="";break;
	case 57:q="";break;
	case 58:q="";break;}
	switch(randomInt(1, 48)){
	case 1:w="An";break;
	case 2:w="Bai";break;
	case 3:w="Bao";break;
	case 4:w="Bo";break;
	case 5:w="Chang";break;
	case 6:w="Chen";break;
	case 7:w="Cheng";break;
	case 8:w="Chin";break;
	case 9:w="Chun";break;
	case 10:w="Dong";break;
	case 11:w="Fen";break;
	case 12:w="Fu";break;
	case 13:w="He";break;
	case 14:w="Hai";break;
	case 15:w="Huan";break;
	case 16:w="Huang";break;
	case 17:w="Jian";break;
	case 18:w="Jin";break;
	case 19:w="Jing";break;
	case 20:w="Ju";break;
	case 21:w="Jo";break;
	case 22:w="Cho";break;
	case 23:w="Li";break;
	case 24:w="Lai";break;
	case 25:w="Lo";break;
	case 26:w="Lin";break;
	case 27:w="Qiang";break;
	case 28:w="Qing";break;
	case 29:w="Shu";break;
	case 30:w="Sho";break;
	case 31:w="Shun";break;
	case 32:w="Wen";break;
	case 33:w="Wo";break;
	case 34:w="Wu";break;
	case 35:w="Xue";break;
	case 36:w="Yin";break;
	case 37:w="Yo";break;
	case 38:w="Zhen";break;
	case 39:w="Zheng";break;
	case 40:w="Ao";break;
	case 41:w="Ro";break;
	case 42:w="Po";break;
	case 43:w="Do";break;
	case 44:w="Fo";break;
	case 45:w="Ho";break;
	case 46:w="Haw";break;
	case 47:w="Hao";break;
	case 48:w="Daw";break;
	case 49:q="";break;
	case 50:q="";break;}

	/*






	Cloud
	fire
	storm
	water
	rain
	spirit
	honey
	serpent
	sage
	great
	elder
	sky
	silent
	wind
	spring
	summer
	lotus
	dragon
	wander
	*/
	switch(randomInt(1, 25)){
	case 1:e=" Cloud";break;
	case 2:e=" Fire";break;
	case 3:e=" Storm";break;
	case 4:e=" Water";break;
	case 5:e=" Rain";break;
	case 6:e=" Spirit";break;
	case 7:e=" Honey";break;
	case 8:e=" Serpent";break;
	case 9:e=" Sage";break;
	case 10:e=" Great";break;
	case 11:e=" Elder";break;
	case 12:e=" Young";break;
	case 13:e=" Honey";break;
	case 14:e=" Serpent";break;
	case 15:e=" Sage";break;
	case 16:e=" Great";break;
	case 17:e=" Elder";break;
	case 18:e=" Sky";break;
	case 19:e=" Silent";break;
	case 20:e=" Wild";break;
	case 21:e=" Spring";break;
	case 22:e=" Summer";break;
	case 23:e=" Lotus";break;
	case 24:e=" Dragon";break;
	case 25:e=" Water";break;
	case 26:e="";break;
	case 27:e="";break;
	case 28:e="";break;
	case 29:e="";break;
	case 30:e="";break;
	case 31:e="";break;
	case 32:e="";break;
	case 33:e="";break;
	case 34:e="";break;
	case 35:e="";break;
	case 36:e="";break;
	case 37:e="";break;
	case 38:e="";break;
	case 39:e="";break;
	case 40:e="";break;
	case 41:e="";break;
	case 42:e="";break;
	case 43:e="";break;
	case 44:e="";break;
	case 45:e="";break;
	case 46:e="";break;
	case 47:e="";break;
	case 48:e="";break;
	case 49:e="";break;
	case 50:e="";break;}

	switch(randomInt(1, 20)){
	case 1:a="fist";break;
	case 2:a="hand";break;
	case 3:a="brow";break;
	case 4:a="brush";break;
	case 5:a="paw";break;
	case 6:a="jug";break;
	case 7:a="heart";break;
	case 8:a="whisper";break;
	case 9:a="staff";break;
	case 10:a="keg";break;
	case 11:a="ale";break;
	case 12:a="brew";break;
	case 13:a="talon";break;
	case 14:a="heart";break;
	case 15:a="soul";break;
	case 16:a="breeze";break;
	case 17:a="bloom";break;
	case 18:a="petal";break;
	case 19:a="stout";break;
	case 20:a="singer";break;
	case 21:a="";break;
	case 22:a="";break;
	case 23:a="";break;
	case 24:a="";break;
	case 25:a="";break;
	case 26:a="";break;
	case 27:a="";break;
	case 28:a="";break;
	case 29:a="";break;
	case 30:a="";break;
	case 31:a="";break;
	case 32:a="";break;
	case 33:a="";break;
	case 34:a="";break;
	case 35:a="";break;
	case 36:a="";break;
	case 37:a="";break;
	case 38:a="";break;
	case 39:a="";break;
	case 40:a="";break;
	case 41:a="";break;
	case 42:a="";break;
	case 43:a="";break;
	case 44:a="";break;
	case 45:a="";break;
	case 46:a="";break;
	case 47:a="";break;
	case 48:a="";break;
	case 49:a="";break;
	case 50:a="";break;}

	switch(randomInt(1, 4)){
	case 1: return q+e+a;break;
	case 2: return q+e+a;break;
	case 3: return q+"-"+w+e+a;break;
	case 4: return q+(ss::toLower(w))+e+a;break;




	}
	/*

	*/


	return q+w;

	}
	public: static var YoutubeLink(){
	var q;
	switch(randomInt(1, 62)){
	case 1:q="a";break;
	case 2:q="b";break;
	case 3:q="c";break;
	case 4:q="d";break;
	case 5:q="e";break;
	case 6:q="f";break;
	case 7:q="g";break;
	case 8:q="h";break;
	case 9:q="i";break;
	case 10:q="j";break;
	case 11:q="k";break;
	case 12:q="l";break;
	case 13:q="m";break;
	case 14:q="n";break;
	case 15:q="o";break;
	case 16:q="p";break;
	case 17:q="q";break;
	case 18:q="r";break;
	case 19:q="s";break;
	case 20:q="t";break;
	case 21:q="u";break;
	case 22:q="v";break;
	case 23:q="w";break;
	case 24:q="x";break;
	case 25:q="y";break;
	case 26:q="z";break;
	case 27:q="Q";break;
	case 28:q="W";break;
	case 29:q="E";break;
	case 30:q="R";break;
	case 31:q="T";break;
	case 32:q="Y";break;
	case 33:q="U";break;
	case 34:q="I";break;
	case 35:q="O";break;
	case 36:q="P";break;
	case 37:q="A";break;
	case 38:q="S";break;
	case 39:q="D";break;
	case 40:q="F";break;
	case 41:q="G";break;
	case 42:q="H";break;
	case 43:q="J";break;
	case 44:q="K";break;
	case 45:q="L";break;
	case 46:q="Z";break;
	case 47:q="X";break;
	case 48:q="C";break;
	case 49:q="V";break;
	case 50:q="B";break;
	case 51:q="N";break;
	case 52:q="M";break;
	case 53:q="1";break;
	case 54:q="2";break;
	case 55:q="3";break;
	case 56:q="4";break;
	case 57:q="5";break;
	case 58:q="6";break;
	case 59:q="7";break;
	case 60:q="8";break;
	case 61:q="9";break;
	case 62:q="9";break;}


	return q;

	}
	public: static var Cookie(){
	var q,w;

	switch(randomInt(1, 14)){
	case 1:q="Choco";break;
	case 2:q="Krispy";break;
	case 3:q="Milky";break;
	case 4:q="Choca";break;
	case 5:q="Butter";break;
	case 6:q="Honey";break;
	case 7:q="Slim ";break;
	case 8:q="Crispy";break;
	case 9:q="Cocoa";break;
	case 10:q="Coffee";break;
	case 11:q="Sugar";break;
	case 12:q="Creamy";break;
	case 13:q="Vita";break;
	case 14:q="Sprinkle";break;
	case 15:q="";break;
	case 16:q="";break;
	case 17:q="";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}


	switch(randomInt(1, 23)){
	case 1:w="nut";break;
	case 2:w="ways";break;
	case 3:w="fig";break;
	case 4:w="quake";break;
	case 5:w="nilla";break;
	case 6:w="puffs";break;
	case 7:w="rit";break;
	case 8:w="kat";break;
	case 9:w="pop";break;
	case 10:w="freeze";break;
	case 11:w="ffin";break;
	case 12:w="bar";break;
	case 13:w="pick";break;
	case 14:w="puff";break;
	case 15:w="kinds";break;
	case 16:w="scuit";break;
	case 17:w="fudge";break;
	case 18:w="finger";break;
	case 19:w="snap";break;
	case 20:w="snack";break;
	case 21:w="brownies";break;
	case 22:w="truffle";break;
	case 23:w="chips";break;
	case 24:w="";break;
	case 25:w="";break;
	case 26:w="";break;
	case 27:w="";break;
	case 28:w="";break;
	case 29:w="";break;
	case 30:w="";break;
	case 31:w="";break;
	case 32:w="";break;
	case 33:w="";break;
	case 34:w="";break;
	case 35:w="";break;
	case 36:w="";break;
	case 37:w="";break;
	case 38:w="";break;
	case 39:w="";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}

	return q+w;

	}
	public: static var ProTeam(){
	var q,w,e;
	var a,s,d;
	var x,f,z;
	var v;
	switch(randomInt(1, 35)){

	case 1:q="Xplosion";break;
	case 2:q="Vampire";break;
	case 3:q="Jester";break;
	case 4:q="Zone";break;
	case 5:q="Thunder";break;
	case 6:q="Tempest";break;
	case 7:q="Wave";break;
	case 8:q="Burst";break;
	case 9:q="Outbreak";break;
	case 10:q="Backfire";break;
	case 11:q="Igni";break;
	case 12:q="Implosion";break;
	case 13:q="Implicit";break;
	case 14:q="Invictus";break;
	case 15:q="Explicit";break;
	case 16:q="Vision";break;
	case 17:q="Brainstorm";break;
	case 18:q="Storm";break;
	case 19:q="Diversion";break;
	case 20:q="Devise";break;
	case 21:q="Fantasy";break;
	case 22:q="Feature";break;
	case 23:q="Figure";break;
	case 24:q="Form";break;
	case 25:q="Nihilation";break;
	case 26:q="Cataclysm";break;
	case 27:q="Titan";break;
	case 28:q="Goliath";break;
	case 29:q="Colossus";break;
	case 30:q="Monster";break;
	case 31:q="Spectre";break;
	case 32:q="Legacy";break;
	case 33:q="White";break;
	case 34:q="Black";break;
	case 35:q="Reptile";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}

	switch(randomInt(1, 19)){
	case 1:w="Fluffy ";break;
	case 2:w="Magical ";break;
	case 3:w="Sexy ";break;
	case 4:w="Fat ";break;
	case 5:w="Hat ";break;
	case 6:w="Slim ";break;
	case 7:w="Milky ";break;
	case 8:w="Creamy ";break;
	case 9:w="Chocolate ";break;
	case 10:w="Lactose-Intolerant ";break;
	case 11:w="Brittish ";break;
	case 12:w="Canadian ";break;
	case 13:w="Cash ";break;
	case 14:w="Neon ";break;
	case 15:w="Good ";break;
	case 16:w="Alcoholic ";break;
	case 17:w="Holy ";break;
	case 18:w="Creepy ";break;
	case 19:w="Muslim ";break;
	case 20:w="";break;
	case 21:w="";break;
	case 22:w="";break;
	case 23:w="";break;
	case 24:w="";break;
	case 25:w="";break;
	case 26:w="";break;
	case 27:w="";break;
	case 28:w="";break;
	case 29:w="";break;
	case 30:w="";break;
	case 31:w="";break;
	case 32:w="";break;
	case 33:w="";break;
	case 34:w="";break;
	case 35:w="";break;
	case 36:w="";break;
	case 37:w="";break;
	case 38:w="";break;
	case 39:w="";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}

	switch(randomInt(1, 18)){
	case 1:e="Pidgeons ";break;
	case 2:e="Raccoons ";break;
	case 3:e="Penguins ";break;
	case 4:e="Tigers ";break;
	case 5:e="Bears ";break;
	case 6:e="Koalas ";break;
	case 7:e="Gypsies ";break;
	case 8:e="Bunnies ";break;
	case 9:e="Unicorns ";break;
	case 10:e="Horses ";break;
	case 11:e="Ducks ";break;
	case 12:e="Geese ";break;
	case 13:e="Cranes ";break;
	case 14:e="Pandas ";break;
	case 15:e="Crows ";break;
	case 16:e="Pimps ";break;
	case 17:e="Cows ";break;
	case 18:e="Oreos ";break;
	case 19:e="";break;
	case 20:e="";break;
	case 21:e="";break;
	case 22:e="";break;
	case 23:e="";break;
	case 24:e="";break;
	case 25:e="";break;
	case 26:e="";break;
	case 27:e="";break;
	case 28:e="";break;
	case 29:e="";break;
	case 30:e="";break;
	case 31:e="";break;
	case 32:e="";break;
	case 33:e="";break;
	case 34:e="";break;
	case 35:e="";break;
	case 36:e="";break;
	case 37:e="";break;
	case 38:e="";break;
	case 39:e="";break;
	case 40:e="";break;
	case 41:e="";break;
	case 42:e="";break;
	case 43:e="";break;
	case 44:e="";break;
	case 45:e="";break;
	case 46:e="";break;
	case 47:e="";break;
	case 48:e="";break;
	case 49:e="";break;
	case 50:e="";break;}

	switch(randomInt(1, 9)){
	case 1:a="of Doom";break;
	case 2:a="of Death";break;
	case 3:a="on Crack";break;
	case 4:a="of Hell";break;
	case 5:a="of Love";break;
	case 6:a="of Happiness";break;
	case 7:a="of Joy";break;
	case 8:a="of God";break;
	case 9:a="on Drugs";break;
	case 10:a="";break;
	case 11:a="";break;
	case 12:a="";break;
	case 13:a="";break;
	case 14:a="";break;
	case 15:a="";break;
	case 16:a="";break;
	case 17:a="";break;
	case 18:a="";break;
	case 19:a="";break;
	case 20:a="";break;
	case 21:a="";break;
	case 22:a="";break;
	case 23:a="";break;
	case 24:a="";break;
	case 25:a="";break;
	case 26:a="";break;
	case 27:a="";break;
	case 28:a="";break;
	case 29:a="";break;
	case 30:a="";break;
	case 31:a="";break;
	case 32:a="";break;
	case 33:a="";break;
	case 34:a="";break;
	case 35:a="";break;
	case 36:a="";break;
	case 37:a="";break;
	case 38:a="";break;
	case 39:a="";break;
	case 40:a="";break;
	case 41:a="";break;
	case 42:a="";break;
	case 43:a="";break;
	case 44:a="";break;
	case 45:a="";break;
	case 46:a="";break;
	case 47:a="";break;
	case 48:a="";break;
	case 49:a="";break;
	case 50:a="";break;}


	switch(randomInt(1, 8)){
	case 1:s="Fire";break;
	case 2:s="Flame";break;
	case 3:s="Frost";break;
	case 4:s="Green";break;
	case 5:s="Ice";break;
	case 6:s="Water";break;
	case 7:s="Flex";break;
	case 8:s="Winter";break;
	case 9:s="";break;
	case 10:s="";break;
	case 11:s="";break;
	case 12:s="";break;
	case 13:s="";break;
	case 14:s="";break;
	case 15:s="";break;
	case 16:s="";break;
	case 17:s="";break;
	case 18:s="";break;
	case 19:s="";break;
	case 20:s="";break;
	case 21:s="";break;
	case 22:s="";break;
	case 23:s="";break;
	case 24:s="";break;
	case 25:s="";break;
	case 26:s="";break;
	case 27:s="";break;
	case 28:s="";break;
	case 29:s="";break;
	case 30:s="";break;
	case 31:s="";break;
	case 32:s="";break;
	case 33:s="";break;
	case 34:s="";break;
	case 35:s="";break;
	case 36:s="";break;
	case 37:s="";break;
	case 38:s="";break;
	case 39:s="";break;
	case 40:s="";break;
	case 41:s="";break;
	case 42:s="";break;
	case 43:s="";break;
	case 44:s="";break;
	case 45:s="";break;
	case 46:s="";break;
	case 47:s="";break;
	case 48:s="";break;
	case 49:s="";break;
	case 50:s="";break;}

	switch(randomInt(1, 5)){
	case 1:d="force";break;
	case 2:d="fox";break;
	case 3:d="form";break;
	case 4:d="dash";break;
	case 5:d="dogs";break;
	case 6:d="";break;
	case 7:d="";break;
	case 8:d="";break;
	case 9:d="";break;
	case 10:d="";break;
	case 11:d="";break;
	case 12:d="";break;
	case 13:d="";break;
	case 14:d="";break;
	case 15:d="";break;
	case 16:d="";break;
	case 17:d="";break;
	case 18:d="";break;
	case 19:d="";break;
	case 20:d="";break;
	case 21:d="";break;
	case 22:d="";break;
	case 23:d="";break;
	case 24:d="";break;
	case 25:d="";break;
	case 26:d="";break;
	case 27:d="";break;
	case 28:d="";break;
	case 29:d="";break;
	case 30:d="";break;
	case 31:d="";break;
	case 32:d="";break;
	case 33:d="";break;
	case 34:d="";break;
	case 35:d="";break;
	case 36:d="";break;
	case 37:d="";break;
	case 38:d="";break;
	case 39:d="";break;
	case 40:d="";break;
	case 41:d="";break;
	case 42:d="";break;
	case 43:d="";break;
	case 44:d="";break;
	case 45:d="";break;
	case 46:d="";break;
	case 47:d="";break;
	case 48:d="";break;
	case 49:d="";break;
	case 50:d="";break;}

	switch(randomInt(1, 32)){
	case 1:z="Q";break;
	case 2:z="W";break;
	case 3:z="E";break;
	case 4:z="R";break;
	case 5:z="T";break;
	case 6:z="Y";break;
	case 7:z="A";break;
	case 8:z="I";break;
	case 9:z="S";break;
	case 10:z="D";break;
	case 11:z="F";break;
	case 12:z="G";break;
	case 13:z="H";break;
	case 14:z="J";break;
	case 15:z="K";break;
	case 16:z="L";break;
	case 17:z="Z";break;
	case 18:z="X";break;
	case 19:z="C";break;
	case 20:z="V";break;
	case 21:z="B";break;
	case 22:z="N";break;
	case 23:z="M";break;
	case 24:z="1";break;
	case 25:z="2";break;
	case 26:z="3";break;
	case 27:z="4";break;
	case 28:z="5";break;
	case 29:z="6";break;
	case 30:z="7";break;
	case 31:z="8";break;
	case 32:z="9";break;
	case 33:z="";break;
	case 34:z="";break;
	case 35:z="";break;
	case 36:z="";break;
	case 37:z="";break;
	case 38:z="";break;
	case 39:z="";break;
	case 40:z="";break;
	case 41:z="";break;
	case 42:z="";break;
	case 43:z="";break;
	case 44:z="";break;
	case 45:z="";break;
	case 46:z="";break;
	case 47:z="";break;
	case 48:z="";break;
	case 49:z="";break;
	case 50:z="";break;}


	switch(randomInt(1, 32)){
	case 1:x="Q";break;
	case 2:x="W";break;
	case 3:x="E";break;
	case 4:x="R";break;
	case 5:x="T";break;
	case 6:x="Y";break;
	case 7:x="A";break;
	case 8:x="I";break;
	case 9:x="S";break;
	case 10:x="D";break;
	case 11:x="F";break;
	case 12:x="G";break;
	case 13:x="H";break;
	case 14:x="J";break;
	case 15:x="K";break;
	case 16:x="L";break;
	case 17:x="Z";break;
	case 18:x="X";break;
	case 19:x="C";break;
	case 20:x="V";break;
	case 21:x="B";break;
	case 22:x="N";break;
	case 23:x="M";break;
	case 24:x="1";break;
	case 25:x="2";break;
	case 26:x="3";break;
	case 27:x="4";break;
	case 28:x="5";break;
	case 29:x="6";break;
	case 30:x="7";break;
	case 31:x="8";break;
	case 32:x="9";break;
	case 33:x="";break;
	case 34:x="";break;
	case 35:x="";break;
	case 36:x="";break;
	case 37:x="";break;
	case 38:x="";break;
	case 39:x="";break;
	case 40:x="";break;
	case 41:x="";break;
	case 42:x="";break;
	case 43:x="";break;
	case 44:x="";break;
	case 45:x="";break;
	case 46:x="";break;
	case 47:x="";break;
	case 48:x="";break;
	case 49:x="";break;
	case 50:x="";break;}

	switch(randomInt(1, 32)){
	case 1:v="Q";break;
	case 2:v="W";break;
	case 3:v="E";break;
	case 4:v="R";break;
	case 5:v="T";break;
	case 6:v="Y";break;
	case 7:v="A";break;
	case 8:v="I";break;
	case 9:v="S";break;
	case 10:v="D";break;
	case 11:v="F";break;
	case 12:v="G";break;
	case 13:v="H";break;
	case 14:v="J";break;
	case 15:v="K";break;
	case 16:v="L";break;
	case 17:v="Z";break;
	case 18:v="X";break;
	case 19:v="C";break;
	case 20:v="V";break;
	case 21:v="B";break;
	case 22:v="N";break;
	case 23:v="M";break;
	case 24:v="1";break;
	case 25:v="2";break;
	case 26:v="3";break;
	case 27:v="4";break;
	case 28:v="5";break;
	case 29:v="6";break;
	case 30:v="7";break;
	case 31:v="8";break;
	case 32:v="9";break;
	case 33:v="";break;
	case 34:v="";break;
	case 35:v="";break;
	case 36:v="";break;
	case 37:v="";break;
	case 38:v="";break;
	case 39:v="";break;
	case 40:v="";break;
	case 41:v="";break;
	case 42:v="";break;
	case 43:v="";break;
	case 44:v="";break;
	case 45:v="";break;
	case 46:v="";break;
	case 47:v="";break;
	case 48:v="";break;
	case 49:v="";break;
	case 50:v="";break;}

	switch(randomInt(1, 10)){
	case 1: return q+" eSports";break;
	case 2: return "Team "+q;break;
	case 3: return q+" Gaming" ;break;
	case 4: return "Team "+z+x+v;break;
	case 5: return z+x+v+" eSports";break;
	case 6: return s+d+" eSports";break;
	case 7: return "Team "+s+d;break;
	case 8: return s+d+" Gaming" ;break;
	case 9: return w+e+a;break;
	case 10: return w+e;break;

	}
	}
	public: static var African(var name="text"){
	var q,w,e;
	//Sauhmedanu
	/*
	Sauh
	Saji
	Kawah
	Kemh
	Suh
	Aleh
	Wana
	Waka
	Awah
	Umwa
	Kata
	Umuh

	Meda
	unu
	wa
	ahun
	iwi
	hali
	lo
	ulu



	nu
	na
	la
	lu
	le
	awa
	uwa
	ola
	ole
	an
	upa
	un



	*/

	switch(randomInt(1, 21)){
	case 1:q="sauh";break;
	case 2:q="saji";break;
	case 3:q="kawah";break;
	case 4:q="kemh";break;
	case 5:q="la";break;
	case 6:q="aleh";break;
	case 7:q="wana";break;
	case 8:q="wala";break;
	case 9:q="waka";break;
	case 10:q="gawa";break;
	case 11:q="awah";break;
	case 12:q="umwa";break;
	case 13:q="umha";break;
	case 14:q="umka";break;
	case 15:q="kata";break;
	case 16:q="aku";break;
	case 17:q="meka";break;
	case 18:q="sali";break;
	case 19:q="sala";break;
	case 20:q="uku";break;
	case 21:q="kali";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}


	switch(randomInt(1, 15)){
	case 1:w="meda";break;
	case 2:w="unu";break;
	case 3:w="ahun";break;
	case 4:w="iwi";break;
	case 5:w="hali";break;
	case 6:w="lo";break;
	case 7:w="ulu";break;
	case 8:w="wa";break;
	case 9:w="wam";break;
	case 10:w="nag";break;
	case 11:w="boma";break;
	case 12:w="imbaba";break;
	case 13:w="dau";break;
	case 14:w="wakuna";break;
	case 15:w="sau";break;
	case 16:w="";break;
	case 17:w="";break;
	case 18:w="";break;
	case 19:w="";break;
	case 20:w="";break;
	case 21:w="";break;
	case 22:w="";break;
	case 23:w="";break;
	case 24:w="";break;
	case 25:w="";break;
	case 26:w="";break;
	case 27:w="";break;
	case 28:w="";break;
	case 29:w="";break;
	case 30:w="";break;
	case 31:w="";break;
	case 32:w="";break;
	case 33:w="";break;
	case 34:w="";break;
	case 35:w="";break;
	case 36:w="";break;
	case 37:w="";break;
	case 38:w="";break;
	case 39:w="";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}


	switch(randomInt(1, 19)){
	case 1:e="nu";break;
	case 2:e="na";break;
	case 3:e="la";break;
	case 4:e="lu";break;
	case 5:e="le";break;
	case 6:e="li";break;
	case 7:e="awa";break;
	case 8:e="uwa";break;
	case 9:e="anwa";break;
	case 10:e="anu";break;
	case 11:e="mali";break;
	case 12:e="ole";break;
	case 13:e="ola";break;
	case 14:e="an";break;
	case 15:e="upa";break;
	case 16:e="una";break;
	case 17:e="auna";break;
	case 18:e="dan";break;
	case 19:e="kana";break;
	case 20:e="";break;
	case 21:e="";break;
	case 22:e="";break;
	case 23:e="";break;
	case 24:e="";break;
	case 25:e="";break;
	case 26:e="";break;
	case 27:e="";break;
	case 28:e="";break;
	case 29:e="";break;
	case 30:e="";break;
	case 31:e="";break;
	case 32:e="";break;
	case 33:e="";break;
	case 34:e="";break;
	case 35:e="";break;
	case 36:e="";break;
	case 37:e="";break;
	case 38:e="";break;
	case 39:e="";break;
	case 40:e="";break;
	case 41:e="";break;
	case 42:e="";break;
	case 43:e="";break;
	case 44:e="";break;
	case 45:e="";break;
	case 46:e="";break;
	case 47:e="";break;
	case 48:e="";break;
	case 49:e="";break;
	case 50:e="";break;}

	if(name=="text"){switch(randomInt(1, 8)){
	case 1: return q+w+e;
	case 2: return q+w;
	case 3: return q+e;
	case 4: return e;
	case 5: return q;
	case 8: return q;
	case 6: return q+w;
	case 7: return q+e;

	}}


	}
	public: static var Ogre(var name="full"){
	var q,w,e;
	var a;
	/*
	Glop
	Mug


	gup
	gall
	rog
	dum

	*/


	switch(randomInt(1, 13)){
	case 1:q="Glop";break;
	case 2:q="Mug";break;
	case 3:q="Hog";break;
	case 4:q="Hob";break;
	case 5:q="Sog";break;
	case 6:q="Blub";break;
	case 7:q="Cho";break;
	case 8:q="Lum";break;
	case 9:q="Lub";break;
	case 10:q="Plub";break;
	case 11:q="Clum";break;
	case 12:q="Dub";break;
	case 13:q="Rug";break;
	case 14:q="";break;
	case 15:q="";break;
	case 16:q="";break;
	case 17:q="";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}




	switch(randomInt(1, 16)){
	case 1:w="gut";break;
	case 2:w="gup";break;
	case 3:w="gud";break;
	case 4:w="gul";break;
	case 5:w="gub";break;
	case 6:w="gal";break;
	case 7:w="gag";break;
	case 8:w="gug";break;
	case 9:w="rog";break;
	case 10:w="rob";break;
	case 11:w="rub";break;
	case 12:w="dum";break;
	case 13:w="dup";break;
	case 14:w="dur";break;
	case 15:w="pem";break;
	case 16:w="ble";break;
	case 17:w="";break;
	case 18:w="";break;
	case 19:w="";break;
	case 20:w="";break;
	case 21:w="";break;
	case 22:w="";break;
	case 23:w="";break;
	case 24:w="";break;
	case 25:w="";break;
	case 26:w="";break;
	case 27:w="";break;
	case 28:w="";break;
	case 29:w="";break;
	case 30:w="";break;
	case 31:w="";break;
	case 32:w="";break;
	case 33:w="";break;
	case 34:w="";break;
	case 35:w="";break;
	case 36:w="";break;
	case 37:w="";break;
	case 38:w="";break;
	case 39:w="";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}

	/*
	Stone
	War
	Rock
	shadow
	boulder
	splinter


	Mason
	bone
	gut
	maw
	head
	maul
	club
	foot
	hammer
	fist



	*/


	switch(randomInt(1, 7)){
	case 1:e="Stone";break;
	case 2:e="War";break;
	case 3:e="Rock";break;
	case 4:e="Shadow";break;
	case 5:e="Blood";break;
	case 6:e="Boulder";break;
	case 7:e="Splinter";break;
	case 8:e="";break;
	case 9:e="";break;
	case 10:e="";break;
	case 11:e="";break;
	case 12:e="";break;
	case 13:e="";break;
	case 14:e="";break;
	case 15:e="";break;
	case 16:e="";break;
	case 17:e="";break;
	case 18:e="";break;
	case 19:e="";break;
	case 20:e="";break;
	case 21:e="";break;
	case 22:e="";break;
	case 23:e="";break;
	case 24:e="";break;
	case 25:e="";break;
	case 26:e="";break;
	case 27:e="";break;
	case 28:e="";break;
	case 29:e="";break;
	case 30:e="";break;
	case 31:e="";break;
	case 32:e="";break;
	case 33:e="";break;
	case 34:e="";break;
	case 35:e="";break;
	case 36:e="";break;
	case 37:e="";break;
	case 38:e="";break;
	case 39:e="";break;
	case 40:e="";break;
	case 41:e="";break;
	case 42:e="";break;
	case 43:e="";break;
	case 44:e="";break;
	case 45:e="";break;
	case 46:e="";break;
	case 47:e="";break;
	case 48:e="";break;
	case 49:e="";break;
	case 50:e="";break;}




	switch(randomInt(1, 10)){
	case 1:a="mason";break;
	case 2:a="bone";break;
	case 3:a="gut";break;
	case 4:a="maw";break;
	case 5:a="head";break;
	case 6:a="maul";break;
	case 7:a="club";break;
	case 8:a="foot";break;
	case 9:a="hammer";break;
	case 10:a="fist";break;
	case 11:a="";break;
	case 12:a="";break;
	case 13:a="";break;
	case 14:a="";break;
	case 15:a="";break;
	case 16:a="";break;
	case 17:a="";break;
	case 18:a="";break;
	case 19:a="";break;
	case 20:a="";break;
	case 21:a="";break;
	case 22:a="";break;
	case 23:a="";break;
	case 24:a="";break;
	case 25:a="";break;
	case 26:a="";break;
	case 27:a="";break;
	case 28:a="";break;
	case 29:a="";break;
	case 30:a="";break;
	case 31:a="";break;
	case 32:a="";break;
	case 33:a="";break;
	case 34:a="";break;
	case 35:a="";break;
	case 36:a="";break;
	case 37:a="";break;
	case 38:a="";break;
	case 39:a="";break;
	case 40:a="";break;
	case 41:a="";break;
	case 42:a="";break;
	case 43:a="";break;
	case 44:a="";break;
	case 45:a="";break;
	case 46:a="";break;
	case 47:a="";break;
	case 48:a="";break;
	case 49:a="";break;
	case 50:a="";break;}

	if(name=="full")
		return q+w+" "+e+a;
	if(name=="first")
		return q+w;
	if(name=="second")
		return e+a;

	}
	public: static var Nordic(var gender=1){
	var q,w,e;
	var a,s,d;
	var x,f,z;

	/*

	Thor
	Bjorn
	Fjor
	Tus
	Atil
	Thud
	Thid
	Theo
	Fin
	Styr
	Snor
	Hilm
	Tjon
	Djon
	Her
	Folk
	Arnu
	Orri
	Fred
	Edd
	Os
	Hast


	skar
	skr
	nir
	lak
	myr
	niikr
	sig
	ner
	ldr
	aldr
	vt
	vard
	avt
	rik
	thr
	olf
	laf
	ygg
	lfr
	rin
	in


	*/



	switch(randomInt(1, 25)){
	case 1:q="Hast";break;
	case 2:q="Os";break;
	case 3:q="Edd";break;
	case 4:q="Fred";break;
	case 5:q="Or";break;
	case 6:q="Arn";break;
	case 7:q="Folk";break;
	case 8:q="Her";break;
	case 9:q="Djon";break;
	case 10:q="Tjorn";break;
	case 11:q="Hilm";break;
	case 12:q="Snor";break;
	case 13:q="Styr";break;
	case 14:q="Fin";break;
	case 15:q="Theo";break;
	case 16:q="Thad";break;
	case 17:q="Atil";break;
	case 18:q="Tus";break;
	case 19:q="Fjor";break;
	case 20:q="Thor";break;
	case 21:q="Bjorn";break;
	case 22:q="Tyr";break;
	case 23:q="Brad";break;
	case 24:q="Ygg";break;
	case 25:q="Rod";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}




	switch(randomInt(1, 19)){
	case 1:w="in";break;
	case 2:w="rin";break;
	case 3:w="lfr";break;
	case 4:w="lfer";break;
	case 5:w="lag";break;
	case 6:w="olf";break;
	case 7:w="thr";break;
	case 8:w="rik";break;
	case 9:w="avt";break;
	case 10:w="vard";break;
	case 11:w="vt";break;
	case 12:w="aldr";break;
	case 13:w="ldr";break;
	case 14:w="iikr";break;
	case 15:w="mir";break;
	case 16:w="lak";break;
	case 17:w="nir";break;
	case 18:w="skr";break;
	case 19:w="skar";break;
	case 20:w="";break;
	case 21:w="";break;
	case 22:w="";break;
	case 23:w="";break;
	case 24:w="";break;
	case 25:w="";break;
	case 26:w="";break;
	case 27:w="";break;
	case 28:w="";break;
	case 29:w="";break;
	case 30:w="";break;
	case 31:w="";break;
	case 32:w="";break;
	case 33:w="";break;
	case 34:w="";break;
	case 35:w="";break;
	case 36:w="";break;
	case 37:w="";break;
	case 38:w="";break;
	case 39:w="";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}
	switch(randomInt(1, 50)){
	case 1:e="";break;
	case 2:e="";break;
	case 3:e="";break;
	case 4:e="";break;
	case 5:e="";break;
	case 6:e="";break;
	case 7:e="";break;
	case 8:e="";break;
	case 9:e="";break;
	case 10:e="";break;
	case 11:e="";break;
	case 12:e="";break;
	case 13:e="";break;
	case 14:e="";break;
	case 15:e="";break;
	case 16:e="";break;
	case 17:e="";break;
	case 18:e="";break;
	case 19:e="";break;
	case 20:e="";break;
	case 21:e="";break;
	case 22:e="";break;
	case 23:e="";break;
	case 24:e="";break;
	case 25:e="";break;
	case 26:e="";break;
	case 27:e="";break;
	case 28:e="";break;
	case 29:e="";break;
	case 30:e="";break;
	case 31:e="";break;
	case 32:e="";break;
	case 33:e="";break;
	case 34:e="";break;
	case 35:e="";break;
	case 36:e="";break;
	case 37:e="";break;
	case 38:e="";break;
	case 39:e="";break;
	case 40:e="";break;
	case 41:e="";break;
	case 42:e="";break;
	case 43:e="";break;
	case 44:e="";break;
	case 45:e="";break;
	case 46:e="";break;
	case 47:e="";break;
	case 48:e="";break;
	case 49:e="";break;
	case 50:e="";break;}

	switch(randomInt(1, 50)){
	case 1:a="";break;
	case 2:a="";break;
	case 3:a="";break;
	case 4:a="";break;
	case 5:a="";break;
	case 6:a="";break;
	case 7:a="";break;
	case 8:a="";break;
	case 9:a="";break;
	case 10:a="";break;
	case 11:a="";break;
	case 12:a="";break;
	case 13:a="";break;
	case 14:a="";break;
	case 15:a="";break;
	case 16:a="";break;
	case 17:a="";break;
	case 18:a="";break;
	case 19:a="";break;
	case 20:a="";break;
	case 21:a="";break;
	case 22:a="";break;
	case 23:a="";break;
	case 24:a="";break;
	case 25:a="";break;
	case 26:a="";break;
	case 27:a="";break;
	case 28:a="";break;
	case 29:a="";break;
	case 30:a="";break;
	case 31:a="";break;
	case 32:a="";break;
	case 33:a="";break;
	case 34:a="";break;
	case 35:a="";break;
	case 36:a="";break;
	case 37:a="";break;
	case 38:a="";break;
	case 39:a="";break;
	case 40:a="";break;
	case 41:a="";break;
	case 42:a="";break;
	case 43:a="";break;
	case 44:a="";break;
	case 45:a="";break;
	case 46:a="";break;
	case 47:a="";break;
	case 48:a="";break;
	case 49:a="";break;
	case 50:a="";break;}


	switch(randomInt(1, 50)){
	case 1:s="";break;
	case 2:s="";break;
	case 3:s="";break;
	case 4:s="";break;
	case 5:s="";break;
	case 6:s="";break;
	case 7:s="";break;
	case 8:s="";break;
	case 9:s="";break;
	case 10:s="";break;
	case 11:s="";break;
	case 12:s="";break;
	case 13:s="";break;
	case 14:s="";break;
	case 15:s="";break;
	case 16:s="";break;
	case 17:s="";break;
	case 18:s="";break;
	case 19:s="";break;
	case 20:s="";break;
	case 21:s="";break;
	case 22:s="";break;
	case 23:s="";break;
	case 24:s="";break;
	case 25:s="";break;
	case 26:s="";break;
	case 27:s="";break;
	case 28:s="";break;
	case 29:s="";break;
	case 30:s="";break;
	case 31:s="";break;
	case 32:s="";break;
	case 33:s="";break;
	case 34:s="";break;
	case 35:s="";break;
	case 36:s="";break;
	case 37:s="";break;
	case 38:s="";break;
	case 39:s="";break;
	case 40:s="";break;
	case 41:s="";break;
	case 42:s="";break;
	case 43:s="";break;
	case 44:s="";break;
	case 45:s="";break;
	case 46:s="";break;
	case 47:s="";break;
	case 48:s="";break;
	case 49:s="";break;
	case 50:s="";break;}

	switch(randomInt(1, 50)){
	case 1:d="";break;
	case 2:d="";break;
	case 3:d="";break;
	case 4:d="";break;
	case 5:d="";break;
	case 6:d="";break;
	case 7:d="";break;
	case 8:d="";break;
	case 9:d="";break;
	case 10:d="";break;
	case 11:d="";break;
	case 12:d="";break;
	case 13:d="";break;
	case 14:d="";break;
	case 15:d="";break;
	case 16:d="";break;
	case 17:d="";break;
	case 18:d="";break;
	case 19:d="";break;
	case 20:d="";break;
	case 21:d="";break;
	case 22:d="";break;
	case 23:d="";break;
	case 24:d="";break;
	case 25:d="";break;
	case 26:d="";break;
	case 27:d="";break;
	case 28:d="";break;
	case 29:d="";break;
	case 30:d="";break;
	case 31:d="";break;
	case 32:d="";break;
	case 33:d="";break;
	case 34:d="";break;
	case 35:d="";break;
	case 36:d="";break;
	case 37:d="";break;
	case 38:d="";break;
	case 39:d="";break;
	case 40:d="";break;
	case 41:d="";break;
	case 42:d="";break;
	case 43:d="";break;
	case 44:d="";break;
	case 45:d="";break;
	case 46:d="";break;
	case 47:d="";break;
	case 48:d="";break;
	case 49:d="";break;
	case 50:d="";break;}

	switch(randomInt(1, 50)){
	case 1:z="";break;
	case 2:z="";break;
	case 3:z="";break;
	case 4:z="";break;
	case 5:z="";break;
	case 6:z="";break;
	case 7:z="";break;
	case 8:z="";break;
	case 9:z="";break;
	case 10:z="";break;
	case 11:z="";break;
	case 12:z="";break;
	case 13:z="";break;
	case 14:z="";break;
	case 15:z="";break;
	case 16:z="";break;
	case 17:z="";break;
	case 18:z="";break;
	case 19:z="";break;
	case 20:z="";break;
	case 21:z="";break;
	case 22:z="";break;
	case 23:z="";break;
	case 24:z="";break;
	case 25:z="";break;
	case 26:z="";break;
	case 27:z="";break;
	case 28:z="";break;
	case 29:z="";break;
	case 30:z="";break;
	case 31:z="";break;
	case 32:z="";break;
	case 33:z="";break;
	case 34:z="";break;
	case 35:z="";break;
	case 36:z="";break;
	case 37:z="";break;
	case 38:z="";break;
	case 39:z="";break;
	case 40:z="";break;
	case 41:z="";break;
	case 42:z="";break;
	case 43:z="";break;
	case 44:z="";break;
	case 45:z="";break;
	case 46:z="";break;
	case 47:z="";break;
	case 48:z="";break;
	case 49:z="";break;
	case 50:z="";break;}


	switch(randomInt(1, 50)){
	case 1:x="";break;
	case 2:x="";break;
	case 3:x="";break;
	case 4:x="";break;
	case 5:x="";break;
	case 6:x="";break;
	case 7:x="";break;
	case 8:x="";break;
	case 9:x="";break;
	case 10:x="";break;
	case 11:x="";break;
	case 12:x="";break;
	case 13:x="";break;
	case 14:x="";break;
	case 15:x="";break;
	case 16:x="";break;
	case 17:x="";break;
	case 18:x="";break;
	case 19:x="";break;
	case 20:x="";break;
	case 21:x="";break;
	case 22:x="";break;
	case 23:x="";break;
	case 24:x="";break;
	case 25:x="";break;
	case 26:x="";break;
	case 27:x="";break;
	case 28:x="";break;
	case 29:x="";break;
	case 30:x="";break;
	case 31:x="";break;
	case 32:x="";break;
	case 33:x="";break;
	case 34:x="";break;
	case 35:x="";break;
	case 36:x="";break;
	case 37:x="";break;
	case 38:x="";break;
	case 39:x="";break;
	case 40:x="";break;
	case 41:x="";break;
	case 42:x="";break;
	case 43:x="";break;
	case 44:x="";break;
	case 45:x="";break;
	case 46:x="";break;
	case 47:x="";break;
	case 48:x="";break;
	case 49:x="";break;
	case 50:x="";break;}

	if(gender==1)
	return q+w;

	}
	public: static var Dryad(){
	var q,w,e;
	var a,s,d;
	var x,f,z;

	/*
	Ael

	lyna
	*/
	switch(randomInt(1, 50)){
	case 1:q="";break;
	case 2:q="";break;
	case 3:q="";break;
	case 4:q="";break;
	case 5:q="";break;
	case 6:q="";break;
	case 7:q="";break;
	case 8:q="";break;
	case 9:q="";break;
	case 10:q="";break;
	case 11:q="";break;
	case 12:q="";break;
	case 13:q="";break;
	case 14:q="";break;
	case 15:q="";break;
	case 16:q="";break;
	case 17:q="";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}


	switch(randomInt(1, 50)){
	case 1:w="";break;
	case 2:w="";break;
	case 3:w="";break;
	case 4:w="";break;
	case 5:w="";break;
	case 6:w="";break;
	case 7:w="";break;
	case 8:w="";break;
	case 9:w="";break;
	case 10:w="";break;
	case 11:w="";break;
	case 12:w="";break;
	case 13:w="";break;
	case 14:w="";break;
	case 15:w="";break;
	case 16:w="";break;
	case 17:w="";break;
	case 18:w="";break;
	case 19:w="";break;
	case 20:w="";break;
	case 21:w="";break;
	case 22:w="";break;
	case 23:w="";break;
	case 24:w="";break;
	case 25:w="";break;
	case 26:w="";break;
	case 27:w="";break;
	case 28:w="";break;
	case 29:w="";break;
	case 30:w="";break;
	case 31:w="";break;
	case 32:w="";break;
	case 33:w="";break;
	case 34:w="";break;
	case 35:w="";break;
	case 36:w="";break;
	case 37:w="";break;
	case 38:w="";break;
	case 39:w="";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}
	switch(randomInt(1, 50)){
	case 1:e="";break;
	case 2:e="";break;
	case 3:e="";break;
	case 4:e="";break;
	case 5:e="";break;
	case 6:e="";break;
	case 7:e="";break;
	case 8:e="";break;
	case 9:e="";break;
	case 10:e="";break;
	case 11:e="";break;
	case 12:e="";break;
	case 13:e="";break;
	case 14:e="";break;
	case 15:e="";break;
	case 16:e="";break;
	case 17:e="";break;
	case 18:e="";break;
	case 19:e="";break;
	case 20:e="";break;
	case 21:e="";break;
	case 22:e="";break;
	case 23:e="";break;
	case 24:e="";break;
	case 25:e="";break;
	case 26:e="";break;
	case 27:e="";break;
	case 28:e="";break;
	case 29:e="";break;
	case 30:e="";break;
	case 31:e="";break;
	case 32:e="";break;
	case 33:e="";break;
	case 34:e="";break;
	case 35:e="";break;
	case 36:e="";break;
	case 37:e="";break;
	case 38:e="";break;
	case 39:e="";break;
	case 40:e="";break;
	case 41:e="";break;
	case 42:e="";break;
	case 43:e="";break;
	case 44:e="";break;
	case 45:e="";break;
	case 46:e="";break;
	case 47:e="";break;
	case 48:e="";break;
	case 49:e="";break;
	case 50:e="";break;}



	return q+w;

	}
	public: static var Water(){
	var q,w,e;
	var a;

	switch(randomInt(1, 21)){
	case 1:q="Black";break;
	case 2:q="Red";break;
	case 3:q="Grey";break;
	case 4:q="Blue";break;
	case 5:q="Green";break;
	case 6:q="Salt";break;
	case 7:q="Warm";break;
	case 8:q="Cold";break;
	case 9:q="Storm";break;
	case 10:q="Calm";break;
	case 11:q="Summer";break;
	case 12:q="Strong";break;
	case 13:q="Crag";break;
	case 14:q="Stone";break;
	case 15:q="Bitter";break;
	case 16:q="Rain";break;
	case 17:q="Frost";break;
	case 18:q="Deep";break;
	case 19:q="Still";break;
	case 20:q="Murk";break;
	case 21:q="Sweet";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}


	switch(randomInt(1, 8)){
	case 1:w="water";break;
	case 2:w="water";break;
	case 3:w="water";break;
	case 4:w="water";break;
	case 5:w=" Bay";break;
	case 6:w="lake";break;
	case 7:w="sea";break;
	case 8:w="sea";break;
	case 9:w="";break;
	case 10:w="";break;
	case 11:w="";break;
	case 12:w="";break;
	case 13:w="";break;
	case 14:w="";break;
	case 15:w="";break;
	case 16:w="";break;
	case 17:w="";break;
	case 18:w="";break;
	case 19:w="";break;
	case 20:w="";break;
	case 21:w="";break;
	case 22:w="";break;
	case 23:w="";break;
	case 24:w="";break;
	case 25:w="";break;
	case 26:w="";break;
	case 27:w="";break;
	case 28:w="";break;
	case 29:w="";break;
	case 30:w="";break;
	case 31:w="";break;
	case 32:w="";break;
	case 33:w="";break;
	case 34:w="";break;
	case 35:w="";break;
	case 36:w="";break;
	case 37:w="";break;
	case 38:w="";break;
	case 39:w="";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}



	return q+w;

	}
	public: static var unu(){
	return "unu";
	}
	public: static var Shark(){
	var q,w,e;
	var a;




	switch(randomInt(1, 11)){
	case 1:q="White";break;
	case 2:q="Black";break;
	case 3:q="Sharp";break;
	case 4:q="Bull";break;
	case 5:q="Iron";break;
	case 6:q="Muckle";break;
	case 7:q="Reef";break;
	case 8:q="Blood";break;
	case 9:q="Razor";break;
	case 10:q="Rake";break;
	case 11:q="Murk";break;
	case 12:q="";break;
	case 13:q="";break;
	case 14:q="";break;
	case 15:q="";break;
	case 16:q="";break;
	case 17:q="";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}


	switch(randomInt(1, 10)){
	case 1:w="head";break;
	case 2:w="nose";break;
	case 3:w="fin";break;
	case 4:w="gill";break;
	case 5:w="tooth";break;
	case 6:w="fang";break;
	case 7:w="eye";break;
	case 8:w="jaws";break;
	case 9:w="stalker";break;
	case 10:w="maw";break;
	case 11:w="";break;
	case 12:w="";break;
	case 13:w="";break;
	case 14:w="";break;
	case 15:w="";break;
	case 16:w="";break;
	case 17:w="";break;
	case 18:w="";break;
	case 19:w="";break;
	case 20:w="";break;
	case 21:w="";break;
	case 22:w="";break;
	case 23:w="";break;
	case 24:w="";break;
	case 25:w="";break;
	case 26:w="";break;
	case 27:w="";break;
	case 28:w="";break;
	case 29:w="";break;
	case 30:w="";break;
	case 31:w="";break;
	case 32:w="";break;
	case 33:w="";break;
	case 34:w="";break;
	case 35:w="";break;
	case 36:w="";break;
	case 37:w="";break;
	case 38:w="";break;
	case 39:w="";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}
	switch(randomInt(1, 50)){
	case 1:e="";break;
	case 2:e="";break;
	case 3:e="";break;
	case 4:e="";break;
	case 5:e="";break;
	case 6:e="";break;
	case 7:e="";break;
	case 8:e="";break;
	case 9:e="";break;
	case 10:e="";break;
	case 11:e="";break;
	case 12:e="";break;
	case 13:e="";break;
	case 14:e="";break;
	case 15:e="";break;
	case 16:e="";break;
	case 17:e="";break;
	case 18:e="";break;
	case 19:e="";break;
	case 20:e="";break;
	case 21:e="";break;
	case 22:e="";break;
	case 23:e="";break;
	case 24:e="";break;
	case 25:e="";break;
	case 26:e="";break;
	case 27:e="";break;
	case 28:e="";break;
	case 29:e="";break;
	case 30:e="";break;
	case 31:e="";break;
	case 32:e="";break;
	case 33:e="";break;
	case 34:e="";break;
	case 35:e="";break;
	case 36:e="";break;
	case 37:e="";break;
	case 38:e="";break;
	case 39:e="";break;
	case 40:e="";break;
	case 41:e="";break;
	case 42:e="";break;
	case 43:e="";break;
	case 44:e="";break;
	case 45:e="";break;
	case 46:e="";break;
	case 47:e="";break;
	case 48:e="";break;
	case 49:e="";break;
	case 50:e="";break;}

	switch(randomInt(1, 50)){
	case 1:a="";break;
	case 2:a="";break;
	case 3:a="";break;
	case 4:a="";break;
	case 5:a="";break;
	case 6:a="";break;
	case 7:a="";break;
	case 8:a="";break;
	case 9:a="";break;
	case 10:a="";break;
	case 11:a="";break;
	case 12:a="";break;
	case 13:a="";break;
	case 14:a="";break;
	case 15:a="";break;
	case 16:a="";break;
	case 17:a="";break;
	case 18:a="";break;
	case 19:a="";break;
	case 20:a="";break;
	case 21:a="";break;
	case 22:a="";break;
	case 23:a="";break;
	case 24:a="";break;
	case 25:a="";break;
	case 26:a="";break;
	case 27:a="";break;
	case 28:a="";break;
	case 29:a="";break;
	case 30:a="";break;
	case 31:a="";break;
	case 32:a="";break;
	case 33:a="";break;
	case 34:a="";break;
	case 35:a="";break;
	case 36:a="";break;
	case 37:a="";break;
	case 38:a="";break;
	case 39:a="";break;
	case 40:a="";break;
	case 41:a="";break;
	case 42:a="";break;
	case 43:a="";break;
	case 44:a="";break;
	case 45:a="";break;
	case 46:a="";break;
	case 47:a="";break;
	case 48:a="";break;
	case 49:a="";break;
	case 50:a="";break;}



	return q+w;

	}
	public: static var Boar(){
	var q,w,e;

	switch(randomInt(1, 17)){
	case 1:q="Muzzle";break;
	case 2:q="Bristle";break;
	case 3:q="Bramble";break;
	case 4:q="Dirt";break;
	case 5:q="Muffle";break;
	case 6:q="Battle";break;
	case 7:q="Mottle";break;
	case 8:q="Might";break;
	case 9:q="Red";break;
	case 10:q="Blood";break;
	case 11:q="Rage";break;
	case 12:q="Charge";break;
	case 13:q="Tackle";break;
	case 14:q="Dust";break;
	case 15:q="Dredge";break;
	case 16:q="Flak";break;
	case 17:q="Crag";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}


	switch(randomInt(1, 12)){
	case 1:w="snout";break;
	case 2:w="tusk";break;
	case 3:w="fang";break;
	case 4:w="flank";break;
	case 5:w="skank";break;
	case 6:w="snuff";break;
	case 7:w="hog";break;
	case 8:w="hogger";break;
	case 9:w="horn";break;
	case 10:w="husk";break;
	case 11:w="spine";break;
	case 12:w="back";break;
	case 13:w="";break;
	case 14:w="";break;
	case 15:w="";break;
	case 16:w="";break;
	case 17:w="";break;
	case 18:w="";break;
	case 19:w="";break;
	case 20:w="";break;
	case 21:w="";break;
	case 22:w="";break;
	case 23:w="";break;
	case 24:w="";break;
	case 25:w="";break;
	case 26:w="";break;
	case 27:w="";break;
	case 28:w="";break;
	case 29:w="";break;
	case 30:w="";break;
	case 31:w="";break;
	case 32:w="";break;
	case 33:w="";break;
	case 34:w="";break;
	case 35:w="";break;
	case 36:w="";break;
	case 37:w="";break;
	case 38:w="";break;
	case 39:w="";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}

	return q+w;

	}
	public: static var GameName(){
	var q,w,e;
	var a,s,d;
	var x,f,z;

	/*
	Over
	Blast
	Flame
	Fire
	Time
	War
	Half
	Metal
	Dead
	Dread
	Waste
	Border
	Hype
	Bleak
	Quarter
	Star
	Car
	Scrap

	blast
	land
	crash
	cram
	stance
	lands
	burst
	zone
	log
	spark
	storm
	hog
	dog
	shock
	stalk
	flame
	watch
	craft


	*/



	switch(randomInt(1, 17)){
	case 1:q="Over";break;
	case 2:q="Blast";break;
	case 3:q="Flame";break;
	case 4:q="Fire";break;
	case 5:q="War";break;
	case 6:q="Half";break;
	case 7:q="Metal";break;
	case 8:q="Dead";break;
	case 9:q="Dread";break;
	case 10:q="Waste";break;
	case 11:q="Border";break;
	case 12:q="Hype";break;
	case 13:q="Bleak";break;
	case 14:q="Quarter";break;
	case 15:q="Star";break;
	case 16:q="Car";break;
	case 17:q="Scrap";break;
	case 18:q="";break;
	case 19:q="";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}


	switch(randomInt(1, 18)){
	case 1:w="blast";break;
	case 2:w="land";break;
	case 3:w="crash";break;
	case 4:w="cram";break;
	case 5:w="stance";break;
	case 6:w="lands";break;
	case 7:w="zone";break;
	case 8:w="log";break;
	case 9:w="spark";break;
	case 10:w="storm";break;
	case 11:w="hog";break;
	case 12:w="dog";break;
	case 13:w="shock";break;
	case 14:w="stalk";break;
	case 15:w="flame";break;
	case 16:w="watch";break;
	case 17:w="craft";break;
	case 18:w="";break;
	case 19:w="";break;
	case 20:w="";break;
	case 21:w="";break;
	case 22:w="";break;
	case 23:w="";break;
	case 24:w="";break;
	case 25:w="";break;
	case 26:w="";break;
	case 27:w="";break;
	case 28:w="";break;
	case 29:w="";break;
	case 30:w="";break;
	case 31:w="";break;
	case 32:w="";break;
	case 33:w="";break;
	case 34:w="";break;
	case 35:w="";break;
	case 36:w="";break;
	case 37:w="";break;
	case 38:w="";break;
	case 39:w="";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}
	switch(randomInt(1, 50)){
	case 1:e="";break;
	case 2:e="";break;
	case 3:e="";break;
	case 4:e="";break;
	case 5:e="";break;
	case 6:e="";break;
	case 7:e="";break;
	case 8:e="";break;
	case 9:e="";break;
	case 10:e="";break;
	case 11:e="";break;
	case 12:e="";break;
	case 13:e="";break;
	case 14:e="";break;
	case 15:e="";break;
	case 16:e="";break;
	case 17:e="";break;
	case 18:e="";break;
	case 19:e="";break;
	case 20:e="";break;
	case 21:e="";break;
	case 22:e="";break;
	case 23:e="";break;
	case 24:e="";break;
	case 25:e="";break;
	case 26:e="";break;
	case 27:e="";break;
	case 28:e="";break;
	case 29:e="";break;
	case 30:e="";break;
	case 31:e="";break;
	case 32:e="";break;
	case 33:e="";break;
	case 34:e="";break;
	case 35:e="";break;
	case 36:e="";break;
	case 37:e="";break;
	case 38:e="";break;
	case 39:e="";break;
	case 40:e="";break;
	case 41:e="";break;
	case 42:e="";break;
	case 43:e="";break;
	case 44:e="";break;
	case 45:e="";break;
	case 46:e="";break;
	case 47:e="";break;
	case 48:e="";break;
	case 49:e="";break;
	case 50:e="";break;}

	switch(randomInt(1, 50)){
	case 1:a="";break;
	case 2:a="";break;
	case 3:a="";break;
	case 4:a="";break;
	case 5:a="";break;
	case 6:a="";break;
	case 7:a="";break;
	case 8:a="";break;
	case 9:a="";break;
	case 10:a="";break;
	case 11:a="";break;
	case 12:a="";break;
	case 13:a="";break;
	case 14:a="";break;
	case 15:a="";break;
	case 16:a="";break;
	case 17:a="";break;
	case 18:a="";break;
	case 19:a="";break;
	case 20:a="";break;
	case 21:a="";break;
	case 22:a="";break;
	case 23:a="";break;
	case 24:a="";break;
	case 25:a="";break;
	case 26:a="";break;
	case 27:a="";break;
	case 28:a="";break;
	case 29:a="";break;
	case 30:a="";break;
	case 31:a="";break;
	case 32:a="";break;
	case 33:a="";break;
	case 34:a="";break;
	case 35:a="";break;
	case 36:a="";break;
	case 37:a="";break;
	case 38:a="";break;
	case 39:a="";break;
	case 40:a="";break;
	case 41:a="";break;
	case 42:a="";break;
	case 43:a="";break;
	case 44:a="";break;
	case 45:a="";break;
	case 46:a="";break;
	case 47:a="";break;
	case 48:a="";break;
	case 49:a="";break;
	case 50:a="";break;}


	switch(randomInt(1, 50)){
	case 1:s="";break;
	case 2:s="";break;
	case 3:s="";break;
	case 4:s="";break;
	case 5:s="";break;
	case 6:s="";break;
	case 7:s="";break;
	case 8:s="";break;
	case 9:s="";break;
	case 10:s="";break;
	case 11:s="";break;
	case 12:s="";break;
	case 13:s="";break;
	case 14:s="";break;
	case 15:s="";break;
	case 16:s="";break;
	case 17:s="";break;
	case 18:s="";break;
	case 19:s="";break;
	case 20:s="";break;
	case 21:s="";break;
	case 22:s="";break;
	case 23:s="";break;
	case 24:s="";break;
	case 25:s="";break;
	case 26:s="";break;
	case 27:s="";break;
	case 28:s="";break;
	case 29:s="";break;
	case 30:s="";break;
	case 31:s="";break;
	case 32:s="";break;
	case 33:s="";break;
	case 34:s="";break;
	case 35:s="";break;
	case 36:s="";break;
	case 37:s="";break;
	case 38:s="";break;
	case 39:s="";break;
	case 40:s="";break;
	case 41:s="";break;
	case 42:s="";break;
	case 43:s="";break;
	case 44:s="";break;
	case 45:s="";break;
	case 46:s="";break;
	case 47:s="";break;
	case 48:s="";break;
	case 49:s="";break;
	case 50:s="";break;}

	switch(randomInt(1, 50)){
	case 1:d="";break;
	case 2:d="";break;
	case 3:d="";break;
	case 4:d="";break;
	case 5:d="";break;
	case 6:d="";break;
	case 7:d="";break;
	case 8:d="";break;
	case 9:d="";break;
	case 10:d="";break;
	case 11:d="";break;
	case 12:d="";break;
	case 13:d="";break;
	case 14:d="";break;
	case 15:d="";break;
	case 16:d="";break;
	case 17:d="";break;
	case 18:d="";break;
	case 19:d="";break;
	case 20:d="";break;
	case 21:d="";break;
	case 22:d="";break;
	case 23:d="";break;
	case 24:d="";break;
	case 25:d="";break;
	case 26:d="";break;
	case 27:d="";break;
	case 28:d="";break;
	case 29:d="";break;
	case 30:d="";break;
	case 31:d="";break;
	case 32:d="";break;
	case 33:d="";break;
	case 34:d="";break;
	case 35:d="";break;
	case 36:d="";break;
	case 37:d="";break;
	case 38:d="";break;
	case 39:d="";break;
	case 40:d="";break;
	case 41:d="";break;
	case 42:d="";break;
	case 43:d="";break;
	case 44:d="";break;
	case 45:d="";break;
	case 46:d="";break;
	case 47:d="";break;
	case 48:d="";break;
	case 49:d="";break;
	case 50:d="";break;}

	switch(randomInt(1, 50)){
	case 1:z="";break;
	case 2:z="";break;
	case 3:z="";break;
	case 4:z="";break;
	case 5:z="";break;
	case 6:z="";break;
	case 7:z="";break;
	case 8:z="";break;
	case 9:z="";break;
	case 10:z="";break;
	case 11:z="";break;
	case 12:z="";break;
	case 13:z="";break;
	case 14:z="";break;
	case 15:z="";break;
	case 16:z="";break;
	case 17:z="";break;
	case 18:z="";break;
	case 19:z="";break;
	case 20:z="";break;
	case 21:z="";break;
	case 22:z="";break;
	case 23:z="";break;
	case 24:z="";break;
	case 25:z="";break;
	case 26:z="";break;
	case 27:z="";break;
	case 28:z="";break;
	case 29:z="";break;
	case 30:z="";break;
	case 31:z="";break;
	case 32:z="";break;
	case 33:z="";break;
	case 34:z="";break;
	case 35:z="";break;
	case 36:z="";break;
	case 37:z="";break;
	case 38:z="";break;
	case 39:z="";break;
	case 40:z="";break;
	case 41:z="";break;
	case 42:z="";break;
	case 43:z="";break;
	case 44:z="";break;
	case 45:z="";break;
	case 46:z="";break;
	case 47:z="";break;
	case 48:z="";break;
	case 49:z="";break;
	case 50:z="";break;}


	switch(randomInt(1, 50)){
	case 1:x="";break;
	case 2:x="";break;
	case 3:x="";break;
	case 4:x="";break;
	case 5:x="";break;
	case 6:x="";break;
	case 7:x="";break;
	case 8:x="";break;
	case 9:x="";break;
	case 10:x="";break;
	case 11:x="";break;
	case 12:x="";break;
	case 13:x="";break;
	case 14:x="";break;
	case 15:x="";break;
	case 16:x="";break;
	case 17:x="";break;
	case 18:x="";break;
	case 19:x="";break;
	case 20:x="";break;
	case 21:x="";break;
	case 22:x="";break;
	case 23:x="";break;
	case 24:x="";break;
	case 25:x="";break;
	case 26:x="";break;
	case 27:x="";break;
	case 28:x="";break;
	case 29:x="";break;
	case 30:x="";break;
	case 31:x="";break;
	case 32:x="";break;
	case 33:x="";break;
	case 34:x="";break;
	case 35:x="";break;
	case 36:x="";break;
	case 37:x="";break;
	case 38:x="";break;
	case 39:x="";break;
	case 40:x="";break;
	case 41:x="";break;
	case 42:x="";break;
	case 43:x="";break;
	case 44:x="";break;
	case 45:x="";break;
	case 46:x="";break;
	case 47:x="";break;
	case 48:x="";break;
	case 49:x="";break;
	case 50:x="";break;}

	return q+w;

	}
	public: static var Village(){
	var q,w;

	switch(randomInt(1, 36)){
	case 1:q="High";break;
	case 2:q="Hald";break;
	case 3:q="River";break;
	case 4:q="Lake";break;
	case 5:q="Ivern";break;
	case 6:q="Dawn";break;
	case 7:q="Day";break;
	case 8:q="Devil";break;
	case 9:q="Maiden";break;
	case 10:q="Gold";break;
	case 11:q="Merry";break;
	case 12:q="Snow";break;
	case 13:q="Lumber";break;
	case 14:q="Hearth";break;
	case 15:q="Amber";break;
	case 16:q="Pearl";break;
	case 17:q="Opal";break;
	case 18:q="Black";break;
	case 19:q="Red";break;
	case 20:q="Blue";break;
	case 21:q="White";break;
	case 22:q="Far";break;
	case 23:q="West";break;
	case 24:q="North";break;
	case 25:q="East";break;
	case 26:q="South";break;
	case 27:q="Dusk";break;
	case 28:q="Oak";break;
	case 29:q="Belle";break;
	case 30:q="Dire";break;
	case 31:q="Silver";break;
	case 32:q="Shade";break;
	case 33:q="Summer";break;
	case 34:q="Spring";break;
	case 35:q="Fall";break;
	case 36:q="Winter";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}


	switch(randomInt(1, 37)){
	case 1:w="shire";break;
	case 2:w="mire";break;
	case 3:w="stead";break;
	case 4:w="town";break;
	case 5:w="'s Cross";break;
	case 6:w=" Farm";break;
	case 7:w="brair";break;
	case 8:w="grove";break;
	case 9:w="fair";break;
	case 10:w="hut";break;
	case 11:w="shack";break;
	case 12:w="watch";break;
	case 13:w="mill";break;
	case 14:w="shod";break;
	case 15:w="light";break;
	case 16:w="wood";break;
	case 17:w="'s Retreat";break;
	case 18:w="post";break;
	case 19:w="side";break;
	case 20:w="glen";break;
	case 21:w="haven";break;
	case 22:w="ridge";break;
	case 23:w="shore";break;
	case 24:w="field";break;
	case 25:w="run";break;
	case 26:w="road";break;
	case 27:w="cairn";break;
	case 28:w="'s Rest";break;
	case 29:w="crest";break;
	case 30:w="moor";break;
	case 31:w="crag";break;
	case 32:w="den";break;
	case 33:w="rose";break;
	case 34:w="'s Shield";break;
	case 35:w="fall";break;
	case 36:w="dell";break;
	case 37:w="pass";break;
	case 38:w="";break;
	case 39:w="";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}

	return q+w;
	}
	public: static var Inn(){
	var q, w, g;

	switch(randomInt(1, 19)){
	case 1:q="The Sleeping ";break;
	case 2:q="The Jealous ";break;
	case 3:q="The Stinky ";break;
	case 4:q="The Drowned ";break;
	case 5:q="The Mad ";break;
	case 6:q="The Honey ";break;
	case 7:q="The Blind ";break;
	case 8:q="The Deaf ";break;
	case 9:q="The Angry ";break;
	case 10:q="The Saucy ";break;
	case 11:q="The Tasty ";break;
	case 12:q="The Black ";break;
	case 13:q="The Brown ";break;
	case 14:q="The Humble";break;
	case 15:q="The Roasted ";break;
	case 16:q="The Rusty ";break;
	case 17:q="The Old ";break;
	case 18:q="The Evil ";break;
	case 19:q="The Crazed ";break;
	case 20:q="";break;
	case 21:q="";break;
	case 22:q="";break;
	case 23:q="";break;
	case 24:q="";break;
	case 25:q="";break;
	case 26:q="";break;
	case 27:q="";break;
	case 28:q="";break;
	case 29:q="";break;
	case 30:q="";break;
	case 31:q="";break;
	case 32:q="";break;
	case 33:q="";break;
	case 34:q="";break;
	case 35:q="";break;
	case 36:q="";break;
	case 37:q="";break;
	case 38:q="";break;
	case 39:q="";break;
	case 40:q="";break;
	case 41:q="";break;
	case 42:q="";break;
	case 43:q="";break;
	case 44:q="";break;
	case 45:q="";break;
	case 46:q="";break;
	case 47:q="";break;
	case 48:q="";break;
	case 49:q="";break;
	case 50:q="";break;}


	switch(randomInt(1, 29)){
	case 1:w="Cat";break;
	case 2:w="Weasel";break;
	case 3:w="Gull";break;
	case 4:w="Hound";break;
	case 5:w="Mule";break;
	case 6:w="Maiden";break;
	case 7:w="Giant";break;
	case 8:w="Gnoll";break;
	case 9:w="Horseman";break;
	case 10:w="Horse";break;
	case 11:w="Mare";break;
	case 12:w="Huntsman";break;
	case 13:w="Knight";break;
	case 14:w="Lion";break;
	case 15:w="Panther";break;
	case 16:w="Badger";break;
	case 17:w="Bear";break;
	case 18:w="Fox";break;
	case 19:w="Raven";break;
	case 20:w="Granny";break;
	case 21:w="Nun";break;
	case 22:w="Rose";break;
	case 23:w="Stag";break;
	case 24:w="Mage";break;
	case 25:w="Priest";break;
	case 26:w="Bastard";break;
	case 27:w="Prince";break;
	case 28:w="Cauldron";break;
	case 29:w="Imp";break;
	case 30:w="";break;
	case 31:w="";break;
	case 32:w="";break;
	case 33:w="";break;
	case 34:w="";break;
	case 35:w="";break;
	case 36:w="";break;
	case 37:w="";break;
	case 38:w="";break;
	case 39:w="";break;
	case 40:w="";break;
	case 41:w="";break;
	case 42:w="";break;
	case 43:w="";break;
	case 44:w="";break;
	case 45:w="";break;
	case 46:w="";break;
	case 47:w="";break;
	case 48:w="";break;
	case 49:w="";break;
	case 50:w="";break;}

	switch(randomInt(1, 4)){
	case 1:g=" Inn";break;
	case 2:g=" Tavern";break;
	case 3:g="";break;
	case 4:g="";break;
	}

	return q+w+g;
	}
