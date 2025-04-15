// process passwork change input
const handlePassword = (e) => {
  e.preventDefault();
  
  if($("#oldPass").val() == '' || $("#pass").val() == '' || $("pass2").val() == '') {
    handleError("All fields required");
	return false;
  }
  
  if($("#pass").val() !== $("#pass2").val()) {
    handleError("Passwords must match");
	return false;
  } 

  sendAjax('POST', $("#passwordForm").attr("action"), $("#passwordForm").serialize(), redirect);

  return false;
};  


// display data for password change form
const PasswordWindow = (props) => {
  return (
  
    <form id="passwordForm"
	  name="passwordForm"
	  onSubmit={handlePassword}
	  action="/passwordChange"
	  method="POST"
	  className="mainForm"
	>
	  <label htmlFor="oldPass">Old Pass: </label>
	  <input id="oldPass" type="password" name="oldPass" placeholder="old password"/>
	  <label htmlFor="pass">New Pass: </label>
	  <input id="pass" type="password" name="pass" placeholder="password"/>
	  <label htmlFor="pass2">New Pass: </label>
	  <input id="pass2" type="password" name="pass2" placeholder="retype password"/>
	  <input type="hidden" name="_csrf" value={props.csrf} />
	  <input className="formSubmit" type="submit" value="Submit" />
	
	</form>
  );
};

// call for building the password change display
const createPasswordWindow = (csrf) => {
  $("#userM").text(user);
  $("#mainMessage").text("Mod Password");
  $("#errorMessage").text("...Awaiting...");
  $("#specialMessage").text("");
	
  $("#container").children().hide();
  
  $("#visuals").children().show();
  $("#visuals2").children().hide();
  $("#visuals3").children().hide();
  $("#profile").children().show(); //bug fix
	
  ReactDOM.render(
	<div />, document.querySelector("#makeStats")
  );
  
  $("#makeStats").children().hide();
  
  ReactDOM.render(
    <div />, document.querySelector("#statss")
  );
  
  ReactDOM.render(
    <div />, document.querySelector("#scores")
  );
  
  ReactDOM.render(
    <div />, document.querySelector("#modsDivv")
  );
	
  ReactDOM.render(
    <PasswordWindow csrf={csrf} />,
	document.querySelector("#moreContent")
  );
  
  ReactDOM.render(
    <div> <img src={profilePic} alt="Profile Not Available" className="profilePic" /> </div>, 
	document.querySelector("#profile")
  );
  
  /* ReactDOM.render(
    <profileChange />,
	document.querySelector("#borderSideBack")
  ); */
  
  //profilePull();
  
};

// call for building the stats display
const createStatsWindow = (csrf) => {
  $("#userM").text("");
  $("#mainMessage").text("");
  $("#errorMessage").text("");
  $("#specialMessage").text("");
	
  $("#container").children().hide();
  
  $("#visuals").children().hide();
  $("#visuals2").children().show();
  $("#visuals3").children().hide();
  $("#profile").children().hide(); //bug fix
  
  ReactDOM.render(
    <div />, document.querySelector("#profile")
  );
	
  ReactDOM.render(
    <div />, document.querySelector("#moreContent")
  );
  
  ReactDOM.render(
    <div />, document.querySelector("#makeStats")
  );
  
  ReactDOM.render(
    <div />, document.querySelector("#modsDivv")
  );
  
  /* ReactDOM.render(
    <StatsForm statss={[]} />, document.querySelector("#statss")
  ); */
  
  ReactDOM.render(
    <div />, document.querySelector("#scores")
  );
  
  
  //document.querySelector("#statsForm").submit();
  
  loadStatssFromServer();
};

// call for building the mods display
const createModsWindow = (csrf) => {
  $("#userM").text("");
  $("#mainMessage").text("");
  $("#errorMessage").text("");
  if(currentVersion < 20){
    $("#specialMessage").text("Increase System version to improve structure and gain components");
  } else {
	$("#specialMessage").text("");
  }
  $("#nameData").text("...awaiting...");
  $("#contentData").text("click integrated mod for information");
  $("#contentData2").text("");
  
  $("#container").children().hide();
  
  $("#visuals").children().hide();
  $("#visuals2").children().hide();
  $("#visuals3").children().show();
  $("#profile").children().hide(); //bug fix
  
  $("#nope3").children().hide();
  
  //Choose chips to display
  if(modsT1 === ""){
	  $("#imgT1").children().hide();
  } else {
	  $("#imgT1").children().show();
  }
  if(modsT2 === ""){
	  $("#imgT2").children().hide();
  } else {
	  $("#imgT2").children().show();
  }
  if(modsT3 === ""){
	  $("#imgT3").children().hide();
  } else {
	  $("#imgT3").children().show();
  }
  if(modsT4 === ""){
	  $("#imgT4").children().hide();
  } else {
	  $("#imgT4").children().show();
  }
  if(modsT5 === ""){
	  $("#imgT5").children().hide();
  } else {
	  $("#imgT5").children().show();
  }
  
  ReactDOM.render(
    <div />, document.querySelector("#profile")
  );
	
  ReactDOM.render(
    <div />, document.querySelector("#moreContent")
  );
  
  ReactDOM.render(
    <div />, document.querySelector("#makeStats")
  );
  
  ReactDOM.render(
    <div />, document.querySelector("#statss")
  );
  
  ReactDOM.render(
    <div />, document.querySelector("#scores")
  );
  
  displayUpdateMods();
  
  //document.querySelector("#statsForm").submit();
  
  //loadModsFromServer();
  
  //populateMods();
};

// call for building the high score display
const createScoreWindow = (csrf) => {
  $("#userM").text("");
  $("#mainMessage").text("");
  $("#errorMessage").text("");
  $("#specialMessage").text("");
	
  $("#container").children().hide();
  
  $("#visuals").children().hide();
  $("#visuals2").children().show();
  $("#visuals3").children().hide();
  $("#profile").children().hide(); //bug fix
  
  ReactDOM.render(
    <div />, document.querySelector("#profile")
  );
	
  ReactDOM.render(
    <div />, document.querySelector("#moreContent")
  );
  
  ReactDOM.render(
    <div />, document.querySelector("#makeStats")
  );
  
  ReactDOM.render(
    <div />, document.querySelector("#statss")
  );
  
  ReactDOM.render(
    <div />, document.querySelector("#modsDivv")
  );
  
  loadScoresFromServer();
};

// call for building the game display
const createGameWindow = (csrf) => {
  $("#userM").text("");
  $("#mainMessage").text("");
  $("#errorMessage").text("");
  $("#specialMessage").text("");
	
  $("#container").children().show();
	
  $("#makeStats").children().hide();
  
  $("#visuals").children().hide();
  $("#visuals2").children().hide();
  $("#visuals3").children().hide();
  $("#profile").children().hide(); //bug fix
	
  ReactDOM.render(
    <StatsForm csrf={csrf} statss={[]}/>, document.querySelector("#makeStats")
  );
  
  $("#makeStats").children().hide();
  
  if(userNew === true){
	randomPic = getRandom(0,100);
	if(randomPic < 25){
	  profilePic = "https://78.media.tumblr.com/b8e9904795e4f1f5eb3f80234a51c7ff/tumblr_o0cnh1xwAb1r72ht7o1_500.gif";
    } else if(randomPic <= 50){
	  profilePic = "https://media.giphy.com/media/RbI2UL5r9Aufm/giphy.gif";
	} else if(randomPic <= 75){
	  profilePic = "https://static.comicvine.com/uploads/original/11118/111184265/4165054-tumblr_lvn753uoaf1qcfgllo1_500.gif";
	} else if(randomPic > 75){
	  profilePic = "https://i.pinimg.com/originals/1a/e0/60/1ae060707eb6dab27bca01fcf5e26f8f.gif";
	}
	ReactDOM.render(
		<StatsForm csrf={csrf} statss={[]}/>, document.querySelector("#makeStats")
	);
	$("#makeStats").children().hide();
	document.querySelector("#statSubmit").click();
	userNew = false;
  }
  
  ReactDOM.render(
    <div />, document.querySelector("#profile")
  );
  
  ReactDOM.render(
    <div />, document.querySelector("#moreContent")
  );
  
  ReactDOM.render(
    <div />, document.querySelector("#statss")
  );
  
  ReactDOM.render(
    <div />, document.querySelector("#scores")
  );
  
  ReactDOM.render(
    <div />, document.querySelector("#modsDivv")
  );

};

// sends stats to server
const handleStats = (e) => {
  e.preventDefault();
  
  sendAjax('POST', $("#statsForm").attr("action"), $("#statsForm").serialize(), function() {
	loadStatssFromServer();
  });
  
  return false;
};

// creates form to game to input its stats
const StatsForm = (props) => {
    return (
	<form id="statsForm"
	  onSubmit={handleStats}
	  name="statsForm"
	  action="/game"
	  method="POST"
	  className="statsForm"
	>
	  <input id="name" type="text" name="name" placeholder="name"/>
	  <input id="version" type="text" name="version" value={app.main.version}/>
	  <input id="exp" type="text" name="exp" value={app.main.exp}/>
	  <input id="profile" type="text" name="profile" value={profilePic}/>
	  <input id="hsTotal" type="text" name="hsTotal" value={app.main.hsTotal}/>
	  <input id="hsTotalT1" type="text" name="hsTotalT1" value={app.main.hsTotalT1}/>
	  <input id="hsTotalT2" type="text" name="hsTotalT2" value={app.main.hsTotalT2}/>
	  <input id="hsTotalT3" type="text" name="hsTotalT3" value={app.main.hsTotalT3}/>
	  <input id="hs18" type="text" name="hs18" value={app.main.hs18}/>
	  <input id="hs17" type="text" name="hs17" value={app.main.hs17}/>
	  <input id="recentVictory" type="boolean" name="recentVictory" value={app.main.recentVictory}/>
	  <input id="victories" type="text" name="victories" value={app.main.victories}/>
	  <input id="hsVictory" type="text" name="hsVictory" value={app.main.hsVictory}/>
	  <input id="kills" type="text" name="kills" value={app.main.kills}/>
	  <input id="recentDomination" type="boolean" name="recentDomination" value={app.main.recentDomination}/>
	  <input id="dominations" type="text" name="dominations" value={app.main.dominations}/>
	  <input id="dominationsRR" type="text" name="dominationsRR" value={app.main.dominationsRR}/>
	  <input id="recentPerfect" type="boolean" name="recentPerfect" value={app.main.recentPerfect}/>
	  <input id="perfects" type="text" name="perfects" value={app.main.perfects}/>
	  <input id="destroyed" type="text" name="destroyed" value={app.main.destroyed}/>
	  <input id="taunts" type="text" name="taunts" value={app.main.taunts}/>
	  <input id="teleports" type="text" name="teleports" value={app.main.teleports}/>
	  <input id="melee" type="text" name="melee" value={app.main.meleeStat}/>
	  <input id="powerMelee" type="text" name="powerMelee" value={app.main.powerMelee}/>
	  <input id="blasts" type="text" name="blasts" value={app.main.blastsStat}/>
	  <input id="powerBlasts" type="text" name="powerBlasts" value={app.main.powerBlasts}/>
	  <input id="blocking" type="text" name="blocking" value={app.main.blockingCount}/>
	  <input id="shielding" type="text" name="shielding" value={app.main.shieldingCount}/>
	  <input id="piccoloKill" type="text" name="piccoloKill" value={app.main.piccoloKill}/>
	  <input id="vegetaKill" type="text" name="vegetaKill" value={app.main.vegetaKill}/>
	  <input id="gohanKill" type="text" name="gohanKill" value={app.main.gohanKill}/>
	  <input id="tienKill" type="text" name="tienKill" value={app.main.tienKill}/>
	  <input id="krillinKill" type="text" name="krillinKill" value={app.main.krillinKill}/>
	  <input id="lootT1" type="text" name="lootT1" value={app.main.lootT1}/>
	  <input id="lootT2" type="text" name="lootT2" value={app.main.lootT2}/>
	  <input id="lootT3" type="text" name="lootT3" value={app.main.lootT3}/>
	  <input id="lootT4" type="text" name="lootT4" value={app.main.lootT4}/>
	  <input id="modsT1" type="text" name="modsT1" value={modsT1}/>
	  <input id="modsT2" type="text" name="modsT2" value={modsT2}/>
	  <input id="modsT3" type="text" name="modsT3" value={modsT3}/>
	  <input id="modsT4" type="text" name="modsT4" value={modsT4}/>
	  <input id="modsT5" type="text" name="modsT5" value={modsT5}/>
	  <input id="powerModule" type="boolean" name="powerModule" value={app.main.powerModule}/>
	  <input id="temporalModule" type="boolean" name="temporalModule" value={app.main.temporalModule}/>
	  <input id="aegisChip" type="boolean" name="aegisChip" value={app.main.aegisChip}/>
	  <input id="synchronousChip" type="boolean" name="synchronousChip" value={app.main.synchronousChip}/>
	  <input id="mindCircuit" type="boolean" name="mindCircuit" value={app.main.mindCircuit}/>
	  <input id="masteryCircuit" type="boolean" name="masteryCircuit" value={app.main.masteryCircuit}/>
	  <input id="dataOfPiccolo" type="boolean" name="dataOfPiccolo" value={app.main.dataOfPiccolo}/>
	  <input id="dataOfVegeta" type="boolean" name="dataOfVegeta" value={app.main.dataOfVegeta}/>
	  <input id="dataOfGohan" type="boolean" name="dataOfGohan" value={app.main.dataOfGohan}/>
	  <input id="dataOfTien" type="boolean" name="dataOfTien" value={app.main.dataOfTien}/>
	  <input id="dataOfKrillin" type="boolean" name="dataOfKrillin" value={app.main.dataOfKrillin}/>
	  <input type="hidden" name="_csrf" value={props.csrf} />
	  <input className="formSubmit" id="statSubmit" type="submit" value="Submit" />
	</form>
  );
};

// function to compile and stat sheet
const StatsList = function(props) {
	
  console.log("checks0");
	console.log(props);
	console.dir(props);
	
  if(props.statss.length === 0) {
      /* return (
	  <div className="statsList">
	    <h3 className="emptyStats">No Statistics accumulated</h3>
      </div>
	  ); */
	userNew = true;
  }
  
  const statsNodes = props.statss.map(function(stats) {
	  
	// set user
	user = stats.name;
	
	// set profile
	profilePic = stats.profile;
	
	// set version
	currentVersion = stats.version;
	
    modsT1 = stats.modsT1;
	modsT2 = stats.modsT2;
    modsT3 = stats.modsT3;
	modsT4 = stats.modsT4;
	modsT5 = stats.modsT5;
	
	showActiveMods();
	
	//build array of usable mods
	modules[1] = [];
	
	modules[1].push("Unoptimized Data|-1");
	
	if(stats.powerModule === true){
		modules[1].push("Power Module|0");
	}
	if(stats.temporalModule === true){
		modules[1].push("Temporal Module|1");
	}
	if(stats.aegisChip === true){
		modules[1].push("Aegis Chip|2");
	}
	if(stats.synchronousChip === true){
		modules[1].push("Synchronous Chip|3");
	}
	if(stats.mindCircuit === true){
		modules[1].push("Mind Circuit|4");
	}
	if(stats.masteryCircuit === true){
		modules[1].push("Mastery Circuit|5");
	}
    if(stats.dataOfPiccolo === true){
		modules[1].push("Data of Piccolo|6");
	}
	if(stats.dataOfVegeta === true){
		modules[1].push("Data of Vegeta|7");
	}
	if(stats.dataOfGohan === true){
		modules[1].push("Data of Gohan|8");
	}
	if(stats.dataOfTien === true){
		modules[1].push("Data of Tien|9");
	}
	if(stats.dataOfKrillin === true){
		modules[1].push("Data of Krillin|10");
	}
	
	//Decide the account status
	if(stats.hsTotalT3 > 0){
		progressType = "/assets/images/RedRibbonGold.png"
		app.main.playerRank = 4;
	} else if(stats.hsTotalT2 > 0){
		progressType = "/assets/images/RedRibbonSilver.png"
		app.main.playerRank = 3;
	} else if(stats.hsTotalT1 > 0){
		progressType = "/assets/images/RedRibbonBronze.png"
		app.main.playerRank = 2;
	} else if(stats.hsTotal > 0){
		progressType = "/assets/images/RedRibbonRust.png"
		app.main.playerRank = 1;
	}
	
	
	//send data to game
	if(app.main.gameState != app.main.GAME_STATE.DEFAULT){
      app.main.version = stats.version;
      app.main.exp = stats.exp;
	  app.main.hsTotal = stats.hsTotal;
	  app.main.hsTotalT1 = stats.hsTotalT1;
	  app.main.hsTotalT2 = stats.hsTotalT2;
	  app.main.hsTotalT3 = stats.hsTotalT3;
	  app.main.hs18 = stats.hs18;
	  app.main.hs17 = stats.hs17;
	  app.main.victories = stats.victories;
	  app.main.hsVictory = stats.hsVictory;
	  app.main.kills = stats.kills;
	  app.main.dominations = stats.dominations;
	  app.main.dominationsRR = stats.dominationsRR;
	  app.main.perfects = stats.perfects;
	  app.main.destroyed = stats.destroyed;
	  app.main.taunts = stats.taunts;
	  app.main.teleports = stats.teleports;
	  app.main.meleeStat = stats.melee;
	  app.main.powerMelee = stats.powerMelee;
	  app.main.blastsStat = stats.blasts;
	  app.main.powerBlasts = stats.powerBlasts;
	  app.main.blockingCount = stats.blocking;
	  app.main.shieldingCount = stats.shielding;
	  app.main.piccoloKill = stats.piccoloKill;
	  app.main.vegetaKill = stats.vegetaKill;
	  app.main.gohanKill = stats.gohanKill;
	  app.main.tienKill = stats.tienKill;
	  app.main.krillinKill = stats.krillinKill;
	  app.main.lootT1 = stats.lootT1;
	  app.main.lootT2 = stats.lootT2;
	  app.main.lootT3 = stats.lootT3;
	  app.main.lootT4 = stats.lootT4;
	  app.main.modsT1 = stats.modsT1;
	  app.main.modsT2 = stats.modsT2;
	  app.main.modsT3 = stats.modsT3;
	  app.main.modsT4 = stats.modsT4;
	  app.main.modsT5 = stats.modsT5;
	  app.main.powerModule = stats.powerModule;
	  app.main.temporalModule = stats.temporalModule;
	  app.main.aegisChip = stats.aegisChip;
	  app.main.synchronousChip = stats.synchronousChip;
	  app.main.mindCircuit = stats.mindCircuit;
	  app.main.masteryCircuit = stats.masteryCircuit;
	  app.main.dataOfPiccolo = stats.dataOfPiccolo;
	  app.main.dataOfVegeta = stats.dataOfVegeta;
	  app.main.dataOfGohan = stats.dataOfGohan;
	  app.main.dataOfTien = stats.dataOfTien;
	  app.main.dataOfKrillin = stats.dataOfKrillin;
	}
	if(statsMain === true && (app.main.loaded === true || paused === false || app.main.gameState === app.main.GAME_STATE.Victory)){
	return (
	  <div key={stats._id} className="stats">
	    <h1 className="labled">Main Statistics</h1>
		<button className="formSubmit2" onClick={() => {changeStats()}}>Extra Stats</button>
		<h3 className="version"> <span className="labled2">System Version:</span> {stats.version}.0 </h3>
		<h3 className="hsTotal"> <span className="labled2">Rust High Score:</span> {stats.hsTotal} </h3>
		<h3 className="hsTotalT1"> <span className="labled2">Bronze High Score:</span> {stats.hsTotalT1} </h3>
		<h3 className="hsTotalT2"> <span className="labled2">Silver High Score:</span> {stats.hsTotalT2} </h3>
		<h3 className="hsTotalT3"> <span className="labled2">Gold High Score:</span> {stats.hsTotalT3} </h3>
		<h3 className="hs18">  <span className="labled2">Android 18 High Score:</span> {stats.hs18} </h3>
		<h3 className="hs17">  <span className="labled2">Android 17 High Score:</span> {stats.hs17} </h3>
		<h3 className="victories">  <span className="labled2">Victories:</span> {stats.victories} </h3>
		<h3 className="hsVictory">  <span className="labled2">Victory High Score:</span> {stats.hsVictory} </h3>
		<h3 className="kills">  <span className="labled2">Total Kills:</span> {stats.kills} </h3>
		<h3 className="dominations">  <span className="labled2">Dominations:</span> {stats.dominations} </h3>
		<h3 className="dominationsRR">  <span className="labled2">RR Dominations:</span> {stats.dominationsRR} </h3>
		<h3 className="perfects">  <span className="labled2">Perfects:</span> {stats.perfects} </h3>
		<h3 className="destroyed">  <span className="labled2">Destroyed:</span> {stats.destroyed} </h3>
	  </div>
    );
	} else if(statsMain === false && (app.main.loaded === true || paused === false || app.main.gameState === app.main.GAME_STATE.Victory)){
	  return (
	  <div key={stats._id} className="stats">
	    <h1 className="labled">Extra Statistics</h1>
		<button className="formSubmit2" onClick={() => {changeStats()}}>Main Stats</button>
		<h3 className="exp">  <span className="labled2">Total Points:</span> {stats.exp} </h3>
		<h3 className="melee">  <span className="labled2">Melee Count:</span> {stats.melee} </h3>
		<h3 className="powerMelee">  <span className="labled2">Power Melee Count:</span> {stats.powerMelee} </h3>
		<h3 className="blasts">  <span className="labled2">Blast Count:</span> {stats.blasts} </h3>
		<h3 className="powerBlasts">  <span className="labled2">Power Blast Count:</span> {stats.powerBlasts} </h3>
		<h3 className="blocking">  <span className="labled2">Seconds Blocked:</span> {stats.blocking} </h3>
		<h3 className="shielding">  <span className="labled2">Seconds Shielded:</span> {stats.shielding}</h3>
		<h3 className="taunts">  <span className="labled2">Taunts:</span> {stats.taunts} </h3>
		<h3 className="teleports">  <span className="labled2">Super Speeds:</span> {stats.teleports} </h3>
		<h3 className="piccoloKills">  <span className="labled2">Piccolo Killed:</span> {stats.piccoloKill} </h3>
		<h3 className="vegetaKills">  <span className="labled2">Vegeta Killed:</span> {stats.vegetaKill} </h3>
		<h3 className="gohanKills">  <span className="labled2">Gohan Killed:</span> {stats.gohanKill} </h3>
		<h3 className="tienKills">  <span className="labled2">Tien Killed:</span> {stats.tienKill} </h3>
		<h3 className="krillinKills">  <span className="labled2">Krillin Killed:</span> {stats.krillinKill} </h3>
	  </div>
      );
	} else {
	  return (<div />);
	}
  });
  
  return (
    <div className="statsList">
	  {statsNodes}
	  <div className="progressType">
	    <img src={progressType} alt="progress type" className="progressFace" />
	  </div>
	</div>
  );
};


// function to compile mods list
const ModsList = function(props) {
	
	console.log("modsLIST");
	
	
	
  if(props.statss.length === 0) {
      /* return (
	  <div className="statsList">
	    <h3 className="emptyStats">No Statistics accumulated</h3>
      </div>
	  ); */
  }
  
  const modsNodes = props.statss.map(function(stats) {
	  
	// set user
	user = stats.name;
	
	// set profile
	profilePic = stats.profile;
	
	// set version
	currentVersion = stats.version;
	
	//modules[1] = stats.modsOwned;
	
	console.dir(stats.modsOwned);
    
	//send data to game
	if(app.main.gameState != app.main.GAME_STATE.DEFAULT){
      app.main.version = stats.version;
      app.main.exp = stats.exp;
	  app.main.hsTotal = stats.hsTotal;
	  app.main.hsTotalT1 = stats.hsTotalT1;
	  app.main.hsTotalT2 = stats.hsTotalT2;
	  app.main.hsTotalT3 = stats.hsTotalT3;
	  app.main.hs18 = stats.hs18;
	  app.main.hs17 = stats.hs17;
	  app.main.victories = stats.victories;
	  app.main.hsVictory = stats.hsVictory;
	  app.main.kills = stats.kills;
	  app.main.dominations = stats.dominations;
	  app.main.dominationsRR = stats.dominationsRR;
	  app.main.perfects = stats.perfects;
	  app.main.destroyed = stats.destroyed;
	  app.main.taunts = stats.taunts;
	  app.main.teleports = stats.teleports;
	  app.main.meleeStat = stats.melee;
	  app.main.powerMelee = stats.powerMelee;
	  app.main.blastsStat = stats.blasts;
	  app.main.powerBlasts = stats.powerBlasts;
	  app.main.blockingCount = stats.blocking;
	  app.main.shieldingCount = stats.shielding;
	  app.main.piccoloKill = stats.piccoloKill;
	  app.main.vegetaKill = stats.vegetaKill;
	  app.main.gohanKill = stats.gohanKill;
	  app.main.tienKill = stats.tienKill;
	  app.main.krillinKill = stats.krillinKill;
	  app.main.lootT1 = stats.lootT1;
	  app.main.lootT2 = stats.lootT2;
	  app.main.lootT3 = stats.lootT3;
	  app.main.lootT4 = stats.lootT4;
	  app.main.modsT1 = stats.modsT1;
	  app.main.modsT2 = stats.modsT2;
	  app.main.modsT3 = stats.modsT3;
	  app.main.modsT4 = stats.modsT4;
	  app.main.modsT5 = stats.modsT5;
	  app.main.modsOwned = stats.modsOwned;
	}
	if(modsMain === true && (app.main.loaded === true || paused === false || app.main.gameState === app.main.GAME_STATE.Victory)){
	return (
	  <div key={stats._id} className="modss">
	    <h1 className="labled">Modification Structure</h1>
		<button className="formSubmit2" onClick={() => {changeStats()}}>Extra Stats</button>
	  <div id="modsDiv0">
	  <label for="mods0"><p><b>Tier 1</b></p></label>
	  <select ref="mods0" name="mods0" id="mods0" size="1" style={{width: 150 + 'px'}}>
	  </select>
	  </div>
	  <div id="modsDiv1">
	    <label for="modsDiv1"><p><b>Tier 2</b></p></label>
	    <select ref="mods1" name="mods1" id="mods1" size="1" style={{width: 150 + 'px'}}>
	    </select>
	    <select ref="mods2" name="mods2" id="mods2" size="1" style={{width: 150 + 'px'}}>
        </select>
	  </div>
	  <div id="modsDiv2">
	    <label for="modsDiv2"><p><b>Tier 3</b></p></label>
	    <select ref="mods3" name="mods3" id="mods3" size="1" style={{width: 150 + 'px'}}>
	    </select>
	  </div>
	  <div id="modsDiv3">
	    <label for="modsDiv3"><p><b>Tier 4</b></p></label>
	    <select ref="mods4" name="mods4" id="mods4" size="1" style={{width: 150 + 'px'}}>
	    </select>
	    <select ref="mods5" name="mods5" id="mods5" size="1" style={{width: 150 + 'px'}}>
        </select>
	  </div>
	  <div id="modsDiv4">
	    <label for="modsDiv4"><p><b>Tier 5</b></p></label>
	    <select ref="mods6" name="mods6" id="mods6" size="1" style={{width: 150 + 'px'}}>
	    </select>
	    <select ref="mods7" name="mods7" id="mods7" size="1" style={{width: 150 + 'px'}}>
        </select>
	  </div>
	  </div>
    );
	}
  });
  
  return (
    <div className="modsList">
	  {modsNodes}
	</div>
  );
};

// Profile submit
const submitProfile = function() {
	profilePic = document.querySelector("#profileChange").value;
    quickStats();
	document.querySelector("#passwordButton").click();
};

// quick stats access without display
const quickStats = function(csrf) {
  ReactDOM.render(
	<StatsForm csrf={csrf} statss={[]}/>, document.querySelector("#makeStats")
  );
  document.querySelector("#statSubmit").click();
  ReactDOM.render(
	<div />, document.querySelector("#makeStats")
  );
};

// game version of quick stats without display
const quickStatsGame = function() {
  document.querySelector("#statSubmit").click();
  ReactDOM.render(
	<div />, document.querySelector("#makeStats")
  );
};


// get scores and build a high score list
const ScoreList = function(props) {
  if(props.scores.length === 0) {
    return (
	  <div className="statsList">
	    <h3 className="emptyStats">No Scores accumulated</h3>
      </div>
	);
  }
  
  let hScores = props.scores;
  
  if(props.scores.length > 1) {
  
  // sort the all current scores
  function compare(a,b) {
    if (a.hsTotal > b.hsTotal)
      return -1;
    if (a.hsTotal < b.hsTotal)
      return 1;
    return 0;
  }
  function compareT1(a,b) {
    if (a.hsTotalT1 > b.hsTotalT1)
      return -1;
    if (a.hsTotalT1 < b.hsTotalT1)
      return 1;
    return 0;
  }
  
  function compareT2(a,b) {
    if (a.hsTotalT2 > b.hsTotalT2)
      return -1;
    if (a.hsTotalT2 < b.hsTotalT2)
      return 1;
    return 0;
  }
  function compareT3(a,b) {
    if (a.hsTotalT3 > b.hsTotalT3)
      return -1;
    if (a.hsTotalT3 < b.hsTotalT3)
      return 1;
    return 0;
  }
  
  if(scoreState == 0){
    hScores.sort(compare);
  } else if(scoreState == 2){
    hScores.sort(compareT2);
  } else if(scoreState == 3){
    hScores.sort(compareT3);
  } else if(scoreState == 4){
    hScores.sort(compareT1);
  }
  
  }
  
  
  hScores.splice(5,1000000000000); //Remove all extra scores
  
  let number = 0;
  
  let scoreNodes;
  
  let scoreType;
  
  if(scoreState === 1){
  const scoreNodes = hScores.map(function(score) {
	number++;
	
	return (
	  <div className="score">
	  </div>
      );
    
  });
  } else if(scoreState === 2){
	  scoreType = "/assets/images/RedRibbonSilver.png";
  scoreNodes = hScores.map(function(score) {
	number++;
	
	return (
	  <div className="score">
	    <img src={score.profile} alt="Missing Profile" className="statsFace" />
		<h3 className="scores"> <span className="labled3">{number}</span> </h3>
		<h3 className="scores"> <span className="labled2">Identity:</span> {score.name}<span className="labled4"> {score.version}.0</span></h3>
		<h3 className="scores"> <span className="labled2">Score:</span> {score.hsTotalT2} </h3>
	  </div>
      );
    
  });
  } else if(scoreState === 3){
	  scoreType = "/assets/images/RedRibbonGold.png";
  scoreNodes = hScores.map(function(score) {
	number++;
	
	return (
	  <div className="score">
	    <img src={score.profile} alt="Missing Profile" className="statsFace" />
		<h3 className="scores"> <span className="labled3">{number}</span> </h3>
		<h3 className="scores"> <span className="labled2">Identity:</span> {score.name}<span className="labled4"> {score.version}.0</span></h3>
		<h3 className="scores"> <span className="labled2">Score:</span> {score.hsTotalT3} </h3>
	  </div>
      );
    
  });
  } else if(scoreState === 4){
	  scoreType = "/assets/images/RedRibbonBronze.png";
  scoreNodes = hScores.map(function(score) {
	number++;
	
	return (
	  <div className="score">
	    <img src={score.profile} alt="Missing Profile" className="statsFace" />
		<h3 className="scores"> <span className="labled3">{number}</span> </h3>
		<h3 className="scores"> <span className="labled2">Identity:</span> {score.name}<span className="labled4"> {score.version}.0</span></h3>
		<h3 className="scores"> <span className="labled2">Score:</span> {score.hsTotalT1} </h3>
	  </div>
      );
    
  });
  } else {
	  scoreType = "/assets/images/RedRibbonRust.png";
	  scoreNodes = hScores.map(function(score) {
	  number++;
	
	  return (
	  <div className="score">
	    <img src={score.profile} alt="Missing Profile" className="statsFace" />
		<h3 className="scores"> <span className="labled3">{number}</span> </h3>
		<h3 className="scores"> <span className="labled2">Identity:</span> {score.name}<span className="labled4"> {score.version}.0</span></h3>
		<h3 className="scores"> <span className="labled2">Score:</span> {score.hsTotal} </h3>
	  </div>
      );
    
    });
  }
  
  return (
    <div className="scoreList">
	  <div className="buttonBlock">
	  <button className="formSubmit3" onClick={() => {changeScores(3)}}>Gold</button>
	  <button className="formSubmit3" onClick={() => {changeScores(2)}}>Silver</button>
	  <button className="formSubmit3" onClick={() => {changeScores(4)}}>Bronze</button>
	  <button className="formSubmit3" onClick={() => {changeScores(0)}}>Rust</button>
	  </div>
	  <div className="scoreType">
	  <img src={scoreType} alt="score type" className="scoreFace" />
	  </div>
	  {scoreNodes}
	</div>
  );
};

// get request and react render for stats
const loadStatssFromServer = () => {
  sendAjax('GET', '/getStatss', null, (data) => {
    ReactDOM.render(
      <StatsList statss={data.statss} />, document.querySelector("#statss")
    );
	if(statsScreen === false){
	  ReactDOM.render(
        <div />, document.querySelector("#statss")
      );
    }
  });
};

// get request and react render for stats
const loadModsFromServer = () => {
  sendAjax('GET', '/getStatss', null, (data) => {
    ReactDOM.render(
      <ModsList statss={data.statss} />, document.querySelector("#modsDivv")
    );
  });
};

// get request and react render for scores
const loadScoresFromServer = () => {
  sendAjax('GET', '/getScores', null, (data) => {
    ReactDOM.render(
      <ScoreList scores={data.scores} />, document.querySelector("#scores")
    );
  });
};

const setup = function(csrf) {

  // prepare canvas
  canvas[0] = document.querySelector('#canvasBack');
  ctx[0] = canvas[0].getContext('2d');
  
  populateMods();
  
  //Make sure to update mods
  for(let i = 0; i < 8; i++){
	modsList[i].onchange = updateMods;
  }
  
  // actions for the password page button
  passwordButton.addEventListener("click", (e) => {
    e.preventDefault();
	createPasswordWindow(csrf);
	createPasswordWindow(csrf);
	app.main.pausedGame();
	gameButton.className = "";
	passwordButton.className = "highlightLink";
	scoreButton.className = "";
	statsButton.className = "";
	modsButton.className = "";
	app.main.onScreen = false;
	statsScreen = false;
	paused = true;
	return false;
  });
  
  // actions for the game page button
  gameButton.addEventListener("click", (e) => {
    e.preventDefault();
	createGameWindow(csrf);
	//app.main.pausedGame();
	gameButton.className = "highlightLink";
	passwordButton.className = "";
	scoreButton.className = "";
	statsButton.className = "";
	modsButton.className = "";
	logoutButton.className = "";
	app.main.onScreen = true;
	app.main.sound.playButton(66);
	if((app.main.gameState != app.main.GAME_STATE.DEFAULT && app.main.gameState != app.main.GAME_STATE.TUTORIAL)
	  || app.main.introState == true || app.main.endingState == true || app.main.specialScene == true){
	  app.main.resumeGame();
	}
	statsScreen = false;
	return false;
  });
  
  // actions for the stats page button
  statsButton.addEventListener("click", (e) => {
    e.preventDefault();
	createStatsWindow(csrf);
	app.main.pausedGame();
	gameButton.className = "";
	passwordButton.className = "";
	scoreButton.className = "";
	statsButton.className = "highlightLink";
	modsButton.className = "";
	app.main.onScreen = false;
	paused = true;
	statsScreen = true;
	return false;
  });
  
  // actions for the mods page button
  modsButton.addEventListener("click", (e) => {
    e.preventDefault();
	showModLayers();
	createModsWindow(csrf);
	app.main.pausedGame();
	gameButton.className = "";
	passwordButton.className = "";
	scoreButton.className = "";
	statsButton.className = "";
	modsButton.className = "highlightLink";
	app.main.onScreen = false;
	recentMod = false;
	paused = true;
	statsScreen = false;
	return false;
  });
  
  // actions for the score page button
  scoreButton.addEventListener("click", (e) => {
    e.preventDefault();
	createScoreWindow(csrf);
	app.main.pausedGame();
	gameButton.className = "";
	passwordButton.className = "";
	scoreButton.className = "highlightLink";
	statsButton.className = "";
	modsButton.className = "";
	app.main.onScreen = false;
	paused = true;
	statsScreen = false;
	return false;
  });
  
  // actions for the password page button
  profileButton.addEventListener("click", (e) => {
	statsScreen = false;
	app.main.sound.playEffect(68);
	profilePic = document.querySelector("#profileChange").value;
	if(profilePic == ""){
	randomPic = getRandom(0,100);
	  if(randomPic < 25){
	    profilePic = "https://78.media.tumblr.com/b8e9904795e4f1f5eb3f80234a51c7ff/tumblr_o0cnh1xwAb1r72ht7o1_500.gif";
      } else if(randomPic <= 50){
	    profilePic = "https://media.giphy.com/media/RbI2UL5r9Aufm/giphy.gif";
	  } else if(randomPic <= 75){
	    profilePic = "https://static.comicvine.com/uploads/original/11118/111184265/4165054-tumblr_lvn753uoaf1qcfgllo1_500.gif";
	  } else if(randomPic > 75){
	    profilePic = "https://i.pinimg.com/originals/1a/e0/60/1ae060707eb6dab27bca01fcf5e26f8f.gif";
	  }
	}
    quickStats(csrf);
	createPasswordWindow(csrf);
	return false;
  });
  
  // actions for the password page button
  structureButton.addEventListener("click", (e) => {
	statsScreen = false;
	app.main.sound.playEffect(68);
	//profilePic = document.querySelector("#profileChange").value;
    quickStats(csrf);
	app.main.videos.rewind5();
	changesMade = false;
	upVidPlay = true;
	document.querySelector("#gameButton").click();
	modsButton.className = "disabledLink";
    passwordButton.className = "disabledLink";
    statsButton.className = "disabledLink";
    scoreButton.className = "disabledLink";
	logoutButton.className = "disabledLink";
	gameButton.className = "disabledLink";
	app.main.pausedGame();
	paused = true;
	//createModWindow(csrf);
	return false;
  });
  
  // to prepare stats
  ReactDOM.render(
    <StatsForm csrf={csrf} statss={[]}/>, document.querySelector("#makeStats")
  );
  
  // prevent changing pages until game loads
  modsButton.className = "disabledLink";
  passwordButton.className = "disabledLink";
  statsButton.className = "disabledLink";
  scoreButton.className = "disabledLink";
  gameButton.className = "disabledLink";
  gameButton.focus();
  
	  
  //Begin update loop
  requestAnimationFrame(update);
  
  paused = false;
  
  /* if(userNew === true){
	document.querySelector("#statSubmit").click();
	userNew = false;
  } */
  
  createGameWindow(csrf); //default view
  
};

// change type of stats displayed
const changeStats = function(){
  app.main.sound.playEffect(68);
  if(statsMain === false){
	  statsMain = true;
  } else {
	  statsMain = false;
  }
  loadStatssFromServer();
};

// change type of scores displayed
const changeScores = function(tier){
  app.main.sound.playEffect(68);
  scoreState = tier;
  loadScoresFromServer();
};

// get csrf token
const getToken = () => {
  sendAjax('GET', '/getToken', null, (result) => {
    setup(result.csrfToken);
  });
};

$(document).ready(function() {
  getToken();
});

// setup buttons
const logoutButton = document.querySelector("#tiny");
const passwordButton = document.querySelector("#passwordButton");
const statsButton = document.querySelector("#stat");
const modsButton = document.querySelector("#modsButton");
const scoreButton = document.querySelector("#scoreButton");
const gameButton = document.querySelector("#gameButton");

// for new user data
let userNew = false;
