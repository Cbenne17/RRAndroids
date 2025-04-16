"use strict";

// process passwork change input
var handlePassword = function handlePassword(e) {
  e.preventDefault();
  if ($("#oldPass").val() == '' || $("#pass").val() == '' || $("pass2").val() == '') {
    handleError("All fields required");
    return false;
  }
  if ($("#pass").val() !== $("#pass2").val()) {
    handleError("Passwords must match");
    return false;
  }
  sendAjax('POST', $("#passwordForm").attr("action"), $("#passwordForm").serialize(), redirect);
  return false;
};

// display data for password change form
var PasswordWindow = function PasswordWindow(props) {
  return /*#__PURE__*/React.createElement("form", {
    id: "passwordForm",
    name: "passwordForm",
    onSubmit: handlePassword,
    action: "/passwordChange",
    method: "POST",
    className: "mainForm"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "oldPass"
  }, "Old Pass: "), /*#__PURE__*/React.createElement("input", {
    id: "oldPass",
    type: "password",
    name: "oldPass",
    placeholder: "old password"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "pass"
  }, "New Pass: "), /*#__PURE__*/React.createElement("input", {
    id: "pass",
    type: "password",
    name: "pass",
    placeholder: "password"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "pass2"
  }, "New Pass: "), /*#__PURE__*/React.createElement("input", {
    id: "pass2",
    type: "password",
    name: "pass2",
    placeholder: "retype password"
  }), /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "_csrf",
    value: props.csrf
  }), /*#__PURE__*/React.createElement("input", {
    className: "formSubmit",
    type: "submit",
    value: "Submit"
  }));
};

// call for building the password change display
var createPasswordWindow = function createPasswordWindow(csrf) {
  $("#userM").text(user);
  $("#mainMessage").text("Mod Password");
  $("#errorMessage").text("...Awaiting...");
  $("#specialMessage").text("");
  $("#container").children().hide();
  $("#visuals").children().show();
  $("#visuals2").children().hide();
  $("#visuals3").children().hide();
  $("#profile").children().show(); //bug fix

  ReactDOM.render(/*#__PURE__*/React.createElement("div", null), document.querySelector("#makeStats"));
  $("#makeStats").children().hide();
  ReactDOM.render(/*#__PURE__*/React.createElement("div", null), document.querySelector("#statss"));
  ReactDOM.render(/*#__PURE__*/React.createElement("div", null), document.querySelector("#scores"));
  ReactDOM.render(/*#__PURE__*/React.createElement("div", null), document.querySelector("#modsDivv"));
  ReactDOM.render(/*#__PURE__*/React.createElement(PasswordWindow, {
    csrf: csrf
  }), document.querySelector("#moreContent"));
  ReactDOM.render(/*#__PURE__*/React.createElement("div", null, " ", /*#__PURE__*/React.createElement("img", {
    src: profilePic,
    alt: "Profile Not Available",
    className: "profilePic"
  }), " "), document.querySelector("#profile"));

  /* ReactDOM.render(
    <profileChange />,
  document.querySelector("#borderSideBack")
  ); */

  //profilePull();
};

// call for building the stats display
var createStatsWindow = function createStatsWindow(csrf) {
  $("#userM").text("");
  $("#mainMessage").text("");
  $("#errorMessage").text("");
  $("#specialMessage").text("");
  $("#container").children().hide();
  $("#visuals").children().hide();
  $("#visuals2").children().show();
  $("#visuals3").children().hide();
  $("#profile").children().hide(); //bug fix

  ReactDOM.render(/*#__PURE__*/React.createElement("div", null), document.querySelector("#profile"));
  ReactDOM.render(/*#__PURE__*/React.createElement("div", null), document.querySelector("#moreContent"));
  ReactDOM.render(/*#__PURE__*/React.createElement("div", null), document.querySelector("#makeStats"));
  ReactDOM.render(/*#__PURE__*/React.createElement("div", null), document.querySelector("#modsDivv"));

  /* ReactDOM.render(
    <StatsForm statss={[]} />, document.querySelector("#statss")
  ); */

  ReactDOM.render(/*#__PURE__*/React.createElement("div", null), document.querySelector("#scores"));

  //document.querySelector("#statsForm").submit();

  loadStatssFromServer();
};

// call for building the mods display
var createModsWindow = function createModsWindow(csrf) {
  $("#userM").text("");
  $("#mainMessage").text("");
  $("#errorMessage").text("");
  if (currentVersion < 20) {
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
  if (modsT1 === "") {
    $("#imgT1").children().hide();
  } else {
    $("#imgT1").children().show();
  }
  if (modsT2 === "") {
    $("#imgT2").children().hide();
  } else {
    $("#imgT2").children().show();
  }
  if (modsT3 === "") {
    $("#imgT3").children().hide();
  } else {
    $("#imgT3").children().show();
  }
  if (modsT4 === "") {
    $("#imgT4").children().hide();
  } else {
    $("#imgT4").children().show();
  }
  if (modsT5 === "") {
    $("#imgT5").children().hide();
  } else {
    $("#imgT5").children().show();
  }
  ReactDOM.render(/*#__PURE__*/React.createElement("div", null), document.querySelector("#profile"));
  ReactDOM.render(/*#__PURE__*/React.createElement("div", null), document.querySelector("#moreContent"));
  ReactDOM.render(/*#__PURE__*/React.createElement("div", null), document.querySelector("#makeStats"));
  ReactDOM.render(/*#__PURE__*/React.createElement("div", null), document.querySelector("#statss"));
  ReactDOM.render(/*#__PURE__*/React.createElement("div", null), document.querySelector("#scores"));
  displayUpdateMods();

  //document.querySelector("#statsForm").submit();

  //loadModsFromServer();

  //populateMods();
};

// call for building the high score display
var createScoreWindow = function createScoreWindow(csrf) {
  $("#userM").text("");
  $("#mainMessage").text("");
  $("#errorMessage").text("");
  $("#specialMessage").text("");
  $("#container").children().hide();
  $("#visuals").children().hide();
  $("#visuals2").children().show();
  $("#visuals3").children().hide();
  $("#profile").children().hide(); //bug fix

  ReactDOM.render(/*#__PURE__*/React.createElement("div", null), document.querySelector("#profile"));
  ReactDOM.render(/*#__PURE__*/React.createElement("div", null), document.querySelector("#moreContent"));
  ReactDOM.render(/*#__PURE__*/React.createElement("div", null), document.querySelector("#makeStats"));
  ReactDOM.render(/*#__PURE__*/React.createElement("div", null), document.querySelector("#statss"));
  ReactDOM.render(/*#__PURE__*/React.createElement("div", null), document.querySelector("#modsDivv"));
  loadScoresFromServer();
};

// call for building the game display
var createGameWindow = function createGameWindow(csrf) {
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

  ReactDOM.render(/*#__PURE__*/React.createElement(StatsForm, {
    csrf: csrf,
    statss: []
  }), document.querySelector("#makeStats"));
  $("#makeStats").children().hide();
  if (userNew === true) {
    randomPic = getRandom(0, 100);
    if (randomPic < 25) {
      profilePic = "https://78.media.tumblr.com/b8e9904795e4f1f5eb3f80234a51c7ff/tumblr_o0cnh1xwAb1r72ht7o1_500.gif";
    } else if (randomPic <= 50) {
      profilePic = "https://media.giphy.com/media/RbI2UL5r9Aufm/giphy.gif";
    } else if (randomPic <= 75) {
      profilePic = "https://static.comicvine.com/uploads/original/11118/111184265/4165054-tumblr_lvn753uoaf1qcfgllo1_500.gif";
    } else if (randomPic > 75) {
      profilePic = "https://i.pinimg.com/originals/1a/e0/60/1ae060707eb6dab27bca01fcf5e26f8f.gif";
    }
    ReactDOM.render(/*#__PURE__*/React.createElement(StatsForm, {
      csrf: csrf,
      statss: []
    }), document.querySelector("#makeStats"));
    $("#makeStats").children().hide();
    document.querySelector("#statSubmit").click();
    userNew = false;
  }
  ReactDOM.render(/*#__PURE__*/React.createElement("div", null), document.querySelector("#profile"));
  ReactDOM.render(/*#__PURE__*/React.createElement("div", null), document.querySelector("#moreContent"));
  ReactDOM.render(/*#__PURE__*/React.createElement("div", null), document.querySelector("#statss"));
  ReactDOM.render(/*#__PURE__*/React.createElement("div", null), document.querySelector("#scores"));
  ReactDOM.render(/*#__PURE__*/React.createElement("div", null), document.querySelector("#modsDivv"));
};

// sends stats to server
var handleStats = function handleStats(e) {
  e.preventDefault();
  sendAjax('POST', $("#statsForm").attr("action"), $("#statsForm").serialize(), function () {
    loadStatssFromServer();
  });
  return false;
};

// creates form to game to input its stats
var StatsForm = function StatsForm(props) {
  return /*#__PURE__*/React.createElement("form", {
    id: "statsForm",
    onSubmit: handleStats,
    name: "statsForm",
    action: "/game",
    method: "POST",
    className: "statsForm"
  }, /*#__PURE__*/React.createElement("input", {
    id: "name",
    type: "text",
    name: "name",
    placeholder: "name"
  }), /*#__PURE__*/React.createElement("input", {
    id: "version",
    type: "text",
    name: "version",
    value: app.main.version
  }), /*#__PURE__*/React.createElement("input", {
    id: "exp",
    type: "text",
    name: "exp",
    value: app.main.exp
  }), /*#__PURE__*/React.createElement("input", {
    id: "profile",
    type: "text",
    name: "profile",
    value: profilePic
  }), /*#__PURE__*/React.createElement("input", {
    id: "hsTotal",
    type: "text",
    name: "hsTotal",
    value: app.main.hsTotal
  }), /*#__PURE__*/React.createElement("input", {
    id: "hsTotalT1",
    type: "text",
    name: "hsTotalT1",
    value: app.main.hsTotalT1
  }), /*#__PURE__*/React.createElement("input", {
    id: "hsTotalT2",
    type: "text",
    name: "hsTotalT2",
    value: app.main.hsTotalT2
  }), /*#__PURE__*/React.createElement("input", {
    id: "hsTotalT3",
    type: "text",
    name: "hsTotalT3",
    value: app.main.hsTotalT3
  }), /*#__PURE__*/React.createElement("input", {
    id: "hs18",
    type: "text",
    name: "hs18",
    value: app.main.hs18
  }), /*#__PURE__*/React.createElement("input", {
    id: "hs17",
    type: "text",
    name: "hs17",
    value: app.main.hs17
  }), /*#__PURE__*/React.createElement("input", {
    id: "recentVictory",
    type: "boolean",
    name: "recentVictory",
    value: app.main.recentVictory
  }), /*#__PURE__*/React.createElement("input", {
    id: "victories",
    type: "text",
    name: "victories",
    value: app.main.victories
  }), /*#__PURE__*/React.createElement("input", {
    id: "hsVictory",
    type: "text",
    name: "hsVictory",
    value: app.main.hsVictory
  }), /*#__PURE__*/React.createElement("input", {
    id: "kills",
    type: "text",
    name: "kills",
    value: app.main.kills
  }), /*#__PURE__*/React.createElement("input", {
    id: "recentDomination",
    type: "boolean",
    name: "recentDomination",
    value: app.main.recentDomination
  }), /*#__PURE__*/React.createElement("input", {
    id: "dominations",
    type: "text",
    name: "dominations",
    value: app.main.dominations
  }), /*#__PURE__*/React.createElement("input", {
    id: "dominationsRR",
    type: "text",
    name: "dominationsRR",
    value: app.main.dominationsRR
  }), /*#__PURE__*/React.createElement("input", {
    id: "recentPerfect",
    type: "boolean",
    name: "recentPerfect",
    value: app.main.recentPerfect
  }), /*#__PURE__*/React.createElement("input", {
    id: "perfects",
    type: "text",
    name: "perfects",
    value: app.main.perfects
  }), /*#__PURE__*/React.createElement("input", {
    id: "destroyed",
    type: "text",
    name: "destroyed",
    value: app.main.destroyed
  }), /*#__PURE__*/React.createElement("input", {
    id: "taunts",
    type: "text",
    name: "taunts",
    value: app.main.taunts
  }), /*#__PURE__*/React.createElement("input", {
    id: "teleports",
    type: "text",
    name: "teleports",
    value: app.main.teleports
  }), /*#__PURE__*/React.createElement("input", {
    id: "melee",
    type: "text",
    name: "melee",
    value: app.main.meleeStat
  }), /*#__PURE__*/React.createElement("input", {
    id: "powerMelee",
    type: "text",
    name: "powerMelee",
    value: app.main.powerMelee
  }), /*#__PURE__*/React.createElement("input", {
    id: "blasts",
    type: "text",
    name: "blasts",
    value: app.main.blastsStat
  }), /*#__PURE__*/React.createElement("input", {
    id: "powerBlasts",
    type: "text",
    name: "powerBlasts",
    value: app.main.powerBlasts
  }), /*#__PURE__*/React.createElement("input", {
    id: "blocking",
    type: "text",
    name: "blocking",
    value: app.main.blockingCount
  }), /*#__PURE__*/React.createElement("input", {
    id: "shielding",
    type: "text",
    name: "shielding",
    value: app.main.shieldingCount
  }), /*#__PURE__*/React.createElement("input", {
    id: "piccoloKill",
    type: "text",
    name: "piccoloKill",
    value: app.main.piccoloKill
  }), /*#__PURE__*/React.createElement("input", {
    id: "vegetaKill",
    type: "text",
    name: "vegetaKill",
    value: app.main.vegetaKill
  }), /*#__PURE__*/React.createElement("input", {
    id: "gohanKill",
    type: "text",
    name: "gohanKill",
    value: app.main.gohanKill
  }), /*#__PURE__*/React.createElement("input", {
    id: "tienKill",
    type: "text",
    name: "tienKill",
    value: app.main.tienKill
  }), /*#__PURE__*/React.createElement("input", {
    id: "krillinKill",
    type: "text",
    name: "krillinKill",
    value: app.main.krillinKill
  }), /*#__PURE__*/React.createElement("input", {
    id: "lootT1",
    type: "text",
    name: "lootT1",
    value: app.main.lootT1
  }), /*#__PURE__*/React.createElement("input", {
    id: "lootT2",
    type: "text",
    name: "lootT2",
    value: app.main.lootT2
  }), /*#__PURE__*/React.createElement("input", {
    id: "lootT3",
    type: "text",
    name: "lootT3",
    value: app.main.lootT3
  }), /*#__PURE__*/React.createElement("input", {
    id: "lootT4",
    type: "text",
    name: "lootT4",
    value: app.main.lootT4
  }), /*#__PURE__*/React.createElement("input", {
    id: "modsT1",
    type: "text",
    name: "modsT1",
    value: modsT1
  }), /*#__PURE__*/React.createElement("input", {
    id: "modsT2",
    type: "text",
    name: "modsT2",
    value: modsT2
  }), /*#__PURE__*/React.createElement("input", {
    id: "modsT3",
    type: "text",
    name: "modsT3",
    value: modsT3
  }), /*#__PURE__*/React.createElement("input", {
    id: "modsT4",
    type: "text",
    name: "modsT4",
    value: modsT4
  }), /*#__PURE__*/React.createElement("input", {
    id: "modsT5",
    type: "text",
    name: "modsT5",
    value: modsT5
  }), /*#__PURE__*/React.createElement("input", {
    id: "powerModule",
    type: "boolean",
    name: "powerModule",
    value: app.main.powerModule
  }), /*#__PURE__*/React.createElement("input", {
    id: "temporalModule",
    type: "boolean",
    name: "temporalModule",
    value: app.main.temporalModule
  }), /*#__PURE__*/React.createElement("input", {
    id: "aegisChip",
    type: "boolean",
    name: "aegisChip",
    value: app.main.aegisChip
  }), /*#__PURE__*/React.createElement("input", {
    id: "synchronousChip",
    type: "boolean",
    name: "synchronousChip",
    value: app.main.synchronousChip
  }), /*#__PURE__*/React.createElement("input", {
    id: "mindCircuit",
    type: "boolean",
    name: "mindCircuit",
    value: app.main.mindCircuit
  }), /*#__PURE__*/React.createElement("input", {
    id: "masteryCircuit",
    type: "boolean",
    name: "masteryCircuit",
    value: app.main.masteryCircuit
  }), /*#__PURE__*/React.createElement("input", {
    id: "dataOfPiccolo",
    type: "boolean",
    name: "dataOfPiccolo",
    value: app.main.dataOfPiccolo
  }), /*#__PURE__*/React.createElement("input", {
    id: "dataOfVegeta",
    type: "boolean",
    name: "dataOfVegeta",
    value: app.main.dataOfVegeta
  }), /*#__PURE__*/React.createElement("input", {
    id: "dataOfGohan",
    type: "boolean",
    name: "dataOfGohan",
    value: app.main.dataOfGohan
  }), /*#__PURE__*/React.createElement("input", {
    id: "dataOfTien",
    type: "boolean",
    name: "dataOfTien",
    value: app.main.dataOfTien
  }), /*#__PURE__*/React.createElement("input", {
    id: "dataOfKrillin",
    type: "boolean",
    name: "dataOfKrillin",
    value: app.main.dataOfKrillin
  }), /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "_csrf",
    value: props.csrf
  }), /*#__PURE__*/React.createElement("input", {
    className: "formSubmit",
    id: "statSubmit",
    type: "submit",
    value: "Submit"
  }));
};

// function to compile and stat sheet
var StatsList = function StatsList(props) {
  console.log("checks0");
  console.log(props);
  console.dir(props);
  if (props.statss.length === 0) {
    /* return (
    <div className="statsList">
    <h3 className="emptyStats">No Statistics accumulated</h3>
    </div>
    ); */
    userNew = true;
  }
  var statsNodes = props.statss.map(function (stats) {
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
    if (stats.powerModule === true) {
      modules[1].push("Power Module|0");
    }
    if (stats.temporalModule === true) {
      modules[1].push("Temporal Module|1");
    }
    if (stats.aegisChip === true) {
      modules[1].push("Aegis Chip|2");
    }
    if (stats.synchronousChip === true) {
      modules[1].push("Synchronous Chip|3");
    }
    if (stats.mindCircuit === true) {
      modules[1].push("Mind Circuit|4");
    }
    if (stats.masteryCircuit === true) {
      modules[1].push("Mastery Circuit|5");
    }
    if (stats.dataOfPiccolo === true) {
      modules[1].push("Data of Piccolo|6");
    }
    if (stats.dataOfVegeta === true) {
      modules[1].push("Data of Vegeta|7");
    }
    if (stats.dataOfGohan === true) {
      modules[1].push("Data of Gohan|8");
    }
    if (stats.dataOfTien === true) {
      modules[1].push("Data of Tien|9");
    }
    if (stats.dataOfKrillin === true) {
      modules[1].push("Data of Krillin|10");
    }

    //Decide the account status
    if (stats.hsTotalT3 > 0) {
      progressType = "/assets/images/RedRibbonGold.png";
      app.main.playerRank = 4;
    } else if (stats.hsTotalT2 > 0) {
      progressType = "/assets/images/RedRibbonSilver.png";
      app.main.playerRank = 3;
    } else if (stats.hsTotalT1 > 0) {
      progressType = "/assets/images/RedRibbonBronze.png";
      app.main.playerRank = 2;
    } else if (stats.hsTotal > 0) {
      progressType = "/assets/images/RedRibbonRust.png";
      app.main.playerRank = 1;
    }

    //send data to game
    if (app.main.gameState != app.main.GAME_STATE.DEFAULT) {
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
    if (statsMain === true && (app.main.loaded === true || paused === false || app.main.gameState === app.main.GAME_STATE.Victory)) {
      return /*#__PURE__*/React.createElement("div", {
        key: stats._id,
        className: "stats"
      }, /*#__PURE__*/React.createElement("h1", {
        className: "labled"
      }, "Main Statistics"), /*#__PURE__*/React.createElement("button", {
        className: "formSubmit2",
        onClick: function onClick() {
          changeStats();
        }
      }, "Extra Stats"), /*#__PURE__*/React.createElement("h3", {
        className: "version"
      }, " ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "System Version:"), " ", stats.version, ".0 "), /*#__PURE__*/React.createElement("h3", {
        className: "hsTotal"
      }, " ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Rust High Score:"), " ", stats.hsTotal, " "), /*#__PURE__*/React.createElement("h3", {
        className: "hsTotalT1"
      }, " ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Bronze High Score:"), " ", stats.hsTotalT1, " "), /*#__PURE__*/React.createElement("h3", {
        className: "hsTotalT2"
      }, " ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Silver High Score:"), " ", stats.hsTotalT2, " "), /*#__PURE__*/React.createElement("h3", {
        className: "hsTotalT3"
      }, " ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Gold High Score:"), " ", stats.hsTotalT3, " "), /*#__PURE__*/React.createElement("h3", {
        className: "hs18"
      }, "  ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Android 18 High Score:"), " ", stats.hs18, " "), /*#__PURE__*/React.createElement("h3", {
        className: "hs17"
      }, "  ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Android 17 High Score:"), " ", stats.hs17, " "), /*#__PURE__*/React.createElement("h3", {
        className: "victories"
      }, "  ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Victories:"), " ", stats.victories, " "), /*#__PURE__*/React.createElement("h3", {
        className: "hsVictory"
      }, "  ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Victory High Score:"), " ", stats.hsVictory, " "), /*#__PURE__*/React.createElement("h3", {
        className: "kills"
      }, "  ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Total Kills:"), " ", stats.kills, " "), /*#__PURE__*/React.createElement("h3", {
        className: "dominations"
      }, "  ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Dominations:"), " ", stats.dominations, " "), /*#__PURE__*/React.createElement("h3", {
        className: "dominationsRR"
      }, "  ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "RR Dominations:"), " ", stats.dominationsRR, " "), /*#__PURE__*/React.createElement("h3", {
        className: "perfects"
      }, "  ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Perfects:"), " ", stats.perfects, " "), /*#__PURE__*/React.createElement("h3", {
        className: "destroyed"
      }, "  ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Destroyed:"), " ", stats.destroyed, " "));
    } else if (statsMain === false && (app.main.loaded === true || paused === false || app.main.gameState === app.main.GAME_STATE.Victory)) {
      return /*#__PURE__*/React.createElement("div", {
        key: stats._id,
        className: "stats"
      }, /*#__PURE__*/React.createElement("h1", {
        className: "labled"
      }, "Extra Statistics"), /*#__PURE__*/React.createElement("button", {
        className: "formSubmit2",
        onClick: function onClick() {
          changeStats();
        }
      }, "Main Stats"), /*#__PURE__*/React.createElement("h3", {
        className: "exp"
      }, "  ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Total Points:"), " ", stats.exp, " "), /*#__PURE__*/React.createElement("h3", {
        className: "melee"
      }, "  ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Melee Count:"), " ", stats.melee, " "), /*#__PURE__*/React.createElement("h3", {
        className: "powerMelee"
      }, "  ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Power Melee Count:"), " ", stats.powerMelee, " "), /*#__PURE__*/React.createElement("h3", {
        className: "blasts"
      }, "  ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Blast Count:"), " ", stats.blasts, " "), /*#__PURE__*/React.createElement("h3", {
        className: "powerBlasts"
      }, "  ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Power Blast Count:"), " ", stats.powerBlasts, " "), /*#__PURE__*/React.createElement("h3", {
        className: "blocking"
      }, "  ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Seconds Blocked:"), " ", stats.blocking, " "), /*#__PURE__*/React.createElement("h3", {
        className: "shielding"
      }, "  ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Seconds Shielded:"), " ", stats.shielding), /*#__PURE__*/React.createElement("h3", {
        className: "taunts"
      }, "  ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Taunts:"), " ", stats.taunts, " "), /*#__PURE__*/React.createElement("h3", {
        className: "teleports"
      }, "  ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Super Speeds:"), " ", stats.teleports, " "), /*#__PURE__*/React.createElement("h3", {
        className: "piccoloKills"
      }, "  ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Piccolo Killed:"), " ", stats.piccoloKill, " "), /*#__PURE__*/React.createElement("h3", {
        className: "vegetaKills"
      }, "  ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Vegeta Killed:"), " ", stats.vegetaKill, " "), /*#__PURE__*/React.createElement("h3", {
        className: "gohanKills"
      }, "  ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Gohan Killed:"), " ", stats.gohanKill, " "), /*#__PURE__*/React.createElement("h3", {
        className: "tienKills"
      }, "  ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Tien Killed:"), " ", stats.tienKill, " "), /*#__PURE__*/React.createElement("h3", {
        className: "krillinKills"
      }, "  ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Krillin Killed:"), " ", stats.krillinKill, " "));
    } else {
      return /*#__PURE__*/React.createElement("div", null);
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "statsList"
  }, statsNodes, /*#__PURE__*/React.createElement("div", {
    className: "progressType"
  }, /*#__PURE__*/React.createElement("img", {
    src: progressType,
    alt: "progress type",
    className: "progressFace"
  })));
};

// function to compile mods list
var ModsList = function ModsList(props) {
  console.log("modsLIST");
  if (props.statss.length === 0) {
    /* return (
    <div className="statsList">
    <h3 className="emptyStats">No Statistics accumulated</h3>
    </div>
    ); */
  }
  var modsNodes = props.statss.map(function (stats) {
    // set user
    user = stats.name;

    // set profile
    profilePic = stats.profile;

    // set version
    currentVersion = stats.version;

    //modules[1] = stats.modsOwned;

    console.dir(stats.modsOwned);

    //send data to game
    if (app.main.gameState != app.main.GAME_STATE.DEFAULT) {
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
    if (modsMain === true && (app.main.loaded === true || paused === false || app.main.gameState === app.main.GAME_STATE.Victory)) {
      return /*#__PURE__*/React.createElement("div", {
        key: stats._id,
        className: "modss"
      }, /*#__PURE__*/React.createElement("h1", {
        className: "labled"
      }, "Modification Structure"), /*#__PURE__*/React.createElement("button", {
        className: "formSubmit2",
        onClick: function onClick() {
          changeStats();
        }
      }, "Extra Stats"), /*#__PURE__*/React.createElement("div", {
        id: "modsDiv0"
      }, /*#__PURE__*/React.createElement("label", {
        "for": "mods0"
      }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, "Tier 1"))), /*#__PURE__*/React.createElement("select", {
        ref: "mods0",
        name: "mods0",
        id: "mods0",
        size: "1",
        style: {
          width: 150 + 'px'
        }
      })), /*#__PURE__*/React.createElement("div", {
        id: "modsDiv1"
      }, /*#__PURE__*/React.createElement("label", {
        "for": "modsDiv1"
      }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, "Tier 2"))), /*#__PURE__*/React.createElement("select", {
        ref: "mods1",
        name: "mods1",
        id: "mods1",
        size: "1",
        style: {
          width: 150 + 'px'
        }
      }), /*#__PURE__*/React.createElement("select", {
        ref: "mods2",
        name: "mods2",
        id: "mods2",
        size: "1",
        style: {
          width: 150 + 'px'
        }
      })), /*#__PURE__*/React.createElement("div", {
        id: "modsDiv2"
      }, /*#__PURE__*/React.createElement("label", {
        "for": "modsDiv2"
      }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, "Tier 3"))), /*#__PURE__*/React.createElement("select", {
        ref: "mods3",
        name: "mods3",
        id: "mods3",
        size: "1",
        style: {
          width: 150 + 'px'
        }
      })), /*#__PURE__*/React.createElement("div", {
        id: "modsDiv3"
      }, /*#__PURE__*/React.createElement("label", {
        "for": "modsDiv3"
      }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, "Tier 4"))), /*#__PURE__*/React.createElement("select", {
        ref: "mods4",
        name: "mods4",
        id: "mods4",
        size: "1",
        style: {
          width: 150 + 'px'
        }
      }), /*#__PURE__*/React.createElement("select", {
        ref: "mods5",
        name: "mods5",
        id: "mods5",
        size: "1",
        style: {
          width: 150 + 'px'
        }
      })), /*#__PURE__*/React.createElement("div", {
        id: "modsDiv4"
      }, /*#__PURE__*/React.createElement("label", {
        "for": "modsDiv4"
      }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, "Tier 5"))), /*#__PURE__*/React.createElement("select", {
        ref: "mods6",
        name: "mods6",
        id: "mods6",
        size: "1",
        style: {
          width: 150 + 'px'
        }
      }), /*#__PURE__*/React.createElement("select", {
        ref: "mods7",
        name: "mods7",
        id: "mods7",
        size: "1",
        style: {
          width: 150 + 'px'
        }
      })));
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "modsList"
  }, modsNodes);
};

// Profile submit
var submitProfile = function submitProfile() {
  profilePic = document.querySelector("#profileChange").value;
  quickStats();
  document.querySelector("#passwordButton").click();
};

// quick stats access without display
var quickStats = function quickStats(csrf) {
  ReactDOM.render(/*#__PURE__*/React.createElement(StatsForm, {
    csrf: csrf,
    statss: []
  }), document.querySelector("#makeStats"));
  document.querySelector("#statSubmit").click();
  ReactDOM.render(/*#__PURE__*/React.createElement("div", null), document.querySelector("#makeStats"));
};

// game version of quick stats without display
var quickStatsGame = function quickStatsGame() {
  document.querySelector("#statSubmit").click();
  ReactDOM.render(/*#__PURE__*/React.createElement("div", null), document.querySelector("#makeStats"));
};

// get scores and build a high score list
var ScoreList = function ScoreList(props) {
  if (props.scores.length === 0) {
    return /*#__PURE__*/React.createElement("div", {
      className: "statsList"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "emptyStats"
    }, "No Scores accumulated"));
  }
  var hScores = props.scores;
  if (props.scores.length > 1) {
    // sort the all current scores
    var compare = function compare(a, b) {
      if (a.hsTotal > b.hsTotal) return -1;
      if (a.hsTotal < b.hsTotal) return 1;
      return 0;
    };
    var compareT1 = function compareT1(a, b) {
      if (a.hsTotalT1 > b.hsTotalT1) return -1;
      if (a.hsTotalT1 < b.hsTotalT1) return 1;
      return 0;
    };
    var compareT2 = function compareT2(a, b) {
      if (a.hsTotalT2 > b.hsTotalT2) return -1;
      if (a.hsTotalT2 < b.hsTotalT2) return 1;
      return 0;
    };
    var compareT3 = function compareT3(a, b) {
      if (a.hsTotalT3 > b.hsTotalT3) return -1;
      if (a.hsTotalT3 < b.hsTotalT3) return 1;
      return 0;
    };
    if (scoreState == 0) {
      hScores.sort(compare);
    } else if (scoreState == 2) {
      hScores.sort(compareT2);
    } else if (scoreState == 3) {
      hScores.sort(compareT3);
    } else if (scoreState == 4) {
      hScores.sort(compareT1);
    }
  }
  hScores.splice(5, 1000000000000); //Remove all extra scores

  var number = 0;
  var scoreNodes;
  var scoreType;
  if (scoreState === 1) {
    var _scoreNodes = hScores.map(function (score) {
      number++;
      return /*#__PURE__*/React.createElement("div", {
        className: "score"
      });
    });
  } else if (scoreState === 2) {
    scoreType = "/assets/images/RedRibbonSilver.png";
    scoreNodes = hScores.map(function (score) {
      number++;
      return /*#__PURE__*/React.createElement("div", {
        className: "score"
      }, /*#__PURE__*/React.createElement("img", {
        src: score.profile,
        alt: "Missing Profile",
        className: "statsFace"
      }), /*#__PURE__*/React.createElement("h3", {
        className: "scores"
      }, " ", /*#__PURE__*/React.createElement("span", {
        className: "labled3"
      }, number), " "), /*#__PURE__*/React.createElement("h3", {
        className: "scores"
      }, " ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Identity:"), " ", score.name, /*#__PURE__*/React.createElement("span", {
        className: "labled4"
      }, " ", score.version, ".0")), /*#__PURE__*/React.createElement("h3", {
        className: "scores"
      }, " ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Score:"), " ", score.hsTotalT2, " "));
    });
  } else if (scoreState === 3) {
    scoreType = "/assets/images/RedRibbonGold.png";
    scoreNodes = hScores.map(function (score) {
      number++;
      return /*#__PURE__*/React.createElement("div", {
        className: "score"
      }, /*#__PURE__*/React.createElement("img", {
        src: score.profile,
        alt: "Missing Profile",
        className: "statsFace"
      }), /*#__PURE__*/React.createElement("h3", {
        className: "scores"
      }, " ", /*#__PURE__*/React.createElement("span", {
        className: "labled3"
      }, number), " "), /*#__PURE__*/React.createElement("h3", {
        className: "scores"
      }, " ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Identity:"), " ", score.name, /*#__PURE__*/React.createElement("span", {
        className: "labled4"
      }, " ", score.version, ".0")), /*#__PURE__*/React.createElement("h3", {
        className: "scores"
      }, " ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Score:"), " ", score.hsTotalT3, " "));
    });
  } else if (scoreState === 4) {
    scoreType = "/assets/images/RedRibbonBronze.png";
    scoreNodes = hScores.map(function (score) {
      number++;
      return /*#__PURE__*/React.createElement("div", {
        className: "score"
      }, /*#__PURE__*/React.createElement("img", {
        src: score.profile,
        alt: "Missing Profile",
        className: "statsFace"
      }), /*#__PURE__*/React.createElement("h3", {
        className: "scores"
      }, " ", /*#__PURE__*/React.createElement("span", {
        className: "labled3"
      }, number), " "), /*#__PURE__*/React.createElement("h3", {
        className: "scores"
      }, " ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Identity:"), " ", score.name, /*#__PURE__*/React.createElement("span", {
        className: "labled4"
      }, " ", score.version, ".0")), /*#__PURE__*/React.createElement("h3", {
        className: "scores"
      }, " ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Score:"), " ", score.hsTotalT1, " "));
    });
  } else {
    scoreType = "/assets/images/RedRibbonRust.png";
    scoreNodes = hScores.map(function (score) {
      number++;
      return /*#__PURE__*/React.createElement("div", {
        className: "score"
      }, /*#__PURE__*/React.createElement("img", {
        src: score.profile,
        alt: "Missing Profile",
        className: "statsFace"
      }), /*#__PURE__*/React.createElement("h3", {
        className: "scores"
      }, " ", /*#__PURE__*/React.createElement("span", {
        className: "labled3"
      }, number), " "), /*#__PURE__*/React.createElement("h3", {
        className: "scores"
      }, " ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Identity:"), " ", score.name, /*#__PURE__*/React.createElement("span", {
        className: "labled4"
      }, " ", score.version, ".0")), /*#__PURE__*/React.createElement("h3", {
        className: "scores"
      }, " ", /*#__PURE__*/React.createElement("span", {
        className: "labled2"
      }, "Score:"), " ", score.hsTotal, " "));
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "scoreList"
  }, /*#__PURE__*/React.createElement("div", {
    className: "buttonBlock"
  }, /*#__PURE__*/React.createElement("button", {
    className: "formSubmit3",
    onClick: function onClick() {
      changeScores(3);
    }
  }, "Gold"), /*#__PURE__*/React.createElement("button", {
    className: "formSubmit3",
    onClick: function onClick() {
      changeScores(2);
    }
  }, "Silver"), /*#__PURE__*/React.createElement("button", {
    className: "formSubmit3",
    onClick: function onClick() {
      changeScores(4);
    }
  }, "Bronze"), /*#__PURE__*/React.createElement("button", {
    className: "formSubmit3",
    onClick: function onClick() {
      changeScores(0);
    }
  }, "Rust")), /*#__PURE__*/React.createElement("div", {
    className: "scoreType"
  }, /*#__PURE__*/React.createElement("img", {
    src: scoreType,
    alt: "score type",
    className: "scoreFace"
  })), scoreNodes);
};

// get request and react render for stats
var loadStatssFromServer = function loadStatssFromServer() {
  sendAjax('GET', '/getStatss', null, function (data) {
    ReactDOM.render(/*#__PURE__*/React.createElement(StatsList, {
      statss: data.statss
    }), document.querySelector("#statss"));
    if (statsScreen === false) {
      ReactDOM.render(/*#__PURE__*/React.createElement("div", null), document.querySelector("#statss"));
    }
  });
};

// get request and react render for stats
var loadModsFromServer = function loadModsFromServer() {
  sendAjax('GET', '/getStatss', null, function (data) {
    ReactDOM.render(/*#__PURE__*/React.createElement(ModsList, {
      statss: data.statss
    }), document.querySelector("#modsDivv"));
  });
};

// get request and react render for scores
var loadScoresFromServer = function loadScoresFromServer() {
  sendAjax('GET', '/getScores', null, function (data) {
    ReactDOM.render(/*#__PURE__*/React.createElement(ScoreList, {
      scores: data.scores
    }), document.querySelector("#scores"));
  });
};
var setup = function setup(csrf) {
  // prepare canvas
  canvas[0] = document.querySelector('#canvasBack');
  ctx[0] = canvas[0].getContext('2d');
  populateMods();

  //Make sure to update mods
  for (var i = 0; i < 8; i++) {
    modsList[i].onchange = updateMods;
  }

  // actions for the password page button
  passwordButton.addEventListener("click", function (e) {
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
  gameButton.addEventListener("click", function (e) {
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
    if (app.main.gameState != app.main.GAME_STATE.DEFAULT && app.main.gameState != app.main.GAME_STATE.TUTORIAL || app.main.introState == true || app.main.endingState == true || app.main.specialScene == true) {
      app.main.resumeGame();
    }
    statsScreen = false;
    return false;
  });

  // actions for the stats page button
  statsButton.addEventListener("click", function (e) {
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
  modsButton.addEventListener("click", function (e) {
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
  scoreButton.addEventListener("click", function (e) {
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
  profileButton.addEventListener("click", function (e) {
    statsScreen = false;
    app.main.sound.playEffect(68);
    profilePic = document.querySelector("#profileChange").value;
    if (profilePic == "") {
      randomPic = getRandom(0, 100);
      if (randomPic < 25) {
        profilePic = "https://78.media.tumblr.com/b8e9904795e4f1f5eb3f80234a51c7ff/tumblr_o0cnh1xwAb1r72ht7o1_500.gif";
      } else if (randomPic <= 50) {
        profilePic = "https://media.giphy.com/media/RbI2UL5r9Aufm/giphy.gif";
      } else if (randomPic <= 75) {
        profilePic = "https://static.comicvine.com/uploads/original/11118/111184265/4165054-tumblr_lvn753uoaf1qcfgllo1_500.gif";
      } else if (randomPic > 75) {
        profilePic = "https://i.pinimg.com/originals/1a/e0/60/1ae060707eb6dab27bca01fcf5e26f8f.gif";
      }
    }
    quickStats(csrf);
    createPasswordWindow(csrf);
    return false;
  });

  // actions for the password page button
  structureButton.addEventListener("click", function (e) {
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
  ReactDOM.render(/*#__PURE__*/React.createElement(StatsForm, {
    csrf: csrf,
    statss: []
  }), document.querySelector("#makeStats"));

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
var changeStats = function changeStats() {
  app.main.sound.playEffect(68);
  if (statsMain === false) {
    statsMain = true;
  } else {
    statsMain = false;
  }
  loadStatssFromServer();
};

// change type of scores displayed
var changeScores = function changeScores(tier) {
  app.main.sound.playEffect(68);
  scoreState = tier;
  loadScoresFromServer();
};

// get csrf token
var getToken = function getToken() {
  sendAjax('GET', '/getToken', null, function (result) {
    setup(result.csrfToken);
  });
};
$(document).ready(function () {
  getToken();
});

// setup buttons
var logoutButton = document.querySelector("#tiny");
var passwordButton = document.querySelector("#passwordButton");
var statsButton = document.querySelector("#stat");
var modsButton = document.querySelector("#modsButton");
var scoreButton = document.querySelector("#scoreButton");
var gameButton = document.querySelector("#gameButton");

// for new user data
var userNew = false;
"use strict";

// helper function to display error messages
var handleError = function handleError(message) {
  $("#errorMessage").text(message);
};

// redirection helper function
var redirect = function redirect(response) {
  window.location = response.redirect;
};

// function for all Ajax requests
var sendAjax = function sendAjax(type, action, data, success) {
  $.ajax({
    cashe: false,
    type: type,
    url: action,
    data: data,
    dataType: "json",
    success: success,
    error: function error(xhr, status, _error) {
      var messageObj = JSON.parse(xhr.responseText);
      handleError(messageObj.error);
    }
  });
};

//Function to populate initial modules
function populateMods() {
  var selectedGroup = 1;
  console.log("POPULATE");
  modsList[0] = document.querySelector("#mods0");
  modsList[1] = document.querySelector("#mods1");
  modsList[2] = document.querySelector("#mods2");
  modsList[3] = document.querySelector("#mods3");
  modsList[4] = document.querySelector("#mods4");
  modsList[5] = document.querySelector("#mods5");
  modsList[6] = document.querySelector("#mods6");
  modsList[7] = document.querySelector("#mods7");
  if (selectedGroup > 0) {
    for (var j = 0; j < 8; j++) {
      for (var i = 0; i < modules[selectedGroup].length; i++) {
        modsList[j].options[modsList[j].options.length] = new Option(modules[selectedGroup][i].split("|")[0], modules[selectedGroup][i].split("|")[1]);
        modsList[j].selectedIndex = "0";
      }
    }
  }
}

//Function to update currently used modules
function updateMods() {
  changesMade = true;
  var selected = new Array();
  selected[0] = document.querySelector("#mods0").selectedIndex;
  selected[1] = document.querySelector("#mods1").selectedIndex;
  selected[2] = document.querySelector("#mods2").selectedIndex;
  selected[3] = document.querySelector("#mods3").selectedIndex;
  selected[4] = document.querySelector("#mods4").selectedIndex;
  selected[5] = document.querySelector("#mods5").selectedIndex;
  selected[6] = document.querySelector("#mods6").selectedIndex;
  selected[7] = document.querySelector("#mods7").selectedIndex;

  //Setup and update the array of mods
  var selectedGroup = 1;
  if (selected == 0) {
    selectedGroup = 0;
  }
  for (var x = 0; x < 8; x++) {
    modsList[x].options.length = 0;
  }
  if (selectedGroup > 0) {
    for (var j = 0; j < 8; j++) {
      for (var i = 0; i < modules[selectedGroup].length; i++) {
        modsList[j].options[modsList[j].options.length] = new Option(modules[selectedGroup][i].split("|")[0], modules[selectedGroup][i].split("|")[1]);
        if (selected[0] != i && selected[1] != i && selected[2] != i && selected[3] != i && selected[4] != i && selected[5] != i && selected[6] != i && selected[7] != i) {
          modsList[j].options[i].disabled = false;
        } else {
          modsList[j].options[i].disabled = true;
          modsList[j].options[0].disabled = false;
        }
      }
      modsList[j].selectedIndex = selected[j];
    }
  }
  setActiveMods();
}

//Function to update currently used modules for display only
function displayUpdateMods() {
  var selected = new Array();
  selected[0] = document.querySelector("#mods0").selectedIndex;
  selected[1] = document.querySelector("#mods1").selectedIndex;
  selected[2] = document.querySelector("#mods2").selectedIndex;
  selected[3] = document.querySelector("#mods3").selectedIndex;
  selected[4] = document.querySelector("#mods4").selectedIndex;
  selected[5] = document.querySelector("#mods5").selectedIndex;
  selected[6] = document.querySelector("#mods6").selectedIndex;
  selected[7] = document.querySelector("#mods7").selectedIndex;

  //Setup and update the array of mods
  var selectedGroup = 1;
  if (selected == 0) {
    selectedGroup = 0;
  }
  for (var x = 0; x < 8; x++) {
    modsList[x].options.length = 0;
  }
  if (selectedGroup > 0) {
    for (var j = 0; j < 8; j++) {
      for (var i = 0; i < modules[selectedGroup].length; i++) {
        modsList[j].options[modsList[j].options.length] = new Option(modules[selectedGroup][i].split("|")[0], modules[selectedGroup][i].split("|")[1]);
        if (selected[0] != i && selected[1] != i && selected[2] != i && selected[3] != i && selected[4] != i && selected[5] != i && selected[6] != i && selected[7] != i) {
          modsList[j].options[i].disabled = false;
        } else {
          modsList[j].options[i].disabled = true;
          modsList[j].options[0].disabled = false;
        }
      }
      modsList[j].selectedIndex = selected[j];
    }
  }
}

// show mod tiers based on version
function showModLayers() {
  if (currentVersion > 19) {
    modsDiv1.style.display = "inline";
    modsDiv2.style.display = "inline";
    modsDiv3.style.display = "inline";
    modsDiv4.style.display = "inline";
  } else if (currentVersion > 14) {
    modsDiv1.style.display = "inline";
    modsDiv2.style.display = "inline";
    modsDiv3.style.display = "inline";
    modsDiv4.style.display = "none";
  } else if (currentVersion > 9) {
    modsDiv1.style.display = "inline";
    modsDiv2.style.display = "inline";
    modsDiv3.style.display = "none";
    modsDiv4.style.display = "none";
  } else if (currentVersion > 4) {
    modsDiv1.style.display = "inline";
    modsDiv2.style.display = "none";
    modsDiv3.style.display = "none";
    modsDiv4.style.display = "none";
  } else {
    modsDiv1.style.display = "none";
    modsDiv2.style.display = "none";
    modsDiv3.style.display = "none";
    modsDiv4.style.display = "none";
  }
}

// main site update loop
var _update = function update() {
  //Maintain update loop
  requestAnimationFrame(_update);

  //Set current time
  var now = new Date().getTime();

  //Update runs here
  if (now - lastExecution > 1000 / fps) {
    // play mods video
    if (upVidPlay === true) {
      upVidTimer += 1;
      if (upVidTimer < 2) {
        app.main.videos.startU();
      }
      if (app.main.finished5 == false) {
        app.main.videos.check5();
      }
    } else {
      upVidTimer = 0;
    }

    // When mods video finishes
    if (upVidPlay === true && app.main.finished5 == true && upVidTimer > 2) {
      app.main.resetTalents();
      app.main.setupTalents("T1");
      app.main.setupTalents("T2");
      app.main.setupTalents("T3");
      app.main.setupTalents("T4");
      app.main.setupTalents("T5");
      upVidPlay = false;
      if (app.main.gameState !== app.main.GAME_STATE.TUTORIAL) {
        app.main.resumeGame();
        paused = false;
      }
      app.main.videos.endU();
      app.main.videos.rewind5();
      app.main.finished5 = false;
      upVidTimer = 0;
      modsButton.className = "";
      passwordButton.className = "";
      statsButton.className = "";
      scoreButton.className = "";
      gameButton.className = "highlightLink";
      logoutButton.className = "";
    }
    if (myKeys.keydown[myKeys.KEYBOARD.KEY_ENTER] == true && upVidTimer > 60) {
      app.main.finished5 = true;
    }

    //Fade effect for inner layer
    if (innerAlpha > .35 && innerIncreasing === true) {
      innerIncreasing = false;
    } else if (innerAlpha < .15 && innerIncreasing === false) {
      innerIncreasing = true;
    }

    //Fade effect for inner layer
    if (innerIncreasing === true) {
      innerAlpha += .01;
    } else if (innerIncreasing === false) {
      innerAlpha -= .01;
    }

    // change effect for paused
    if (paused === false) {
      if (changeFlow === false && flowTimer < 120) {
        flowTimer++;
        flowPosition -= 2;
      } else {
        changeFlow = true;
      }
      if (changeFlow === true && flowTimer > 0) {
        flowTimer--;
        flowPosition += 2;
      } else {
        changeFlow = false;
      }
    }
    if (changesMade === true) {
      if (blinkTimer < 20) {
        structureButton.className = "formSubmit";
        blinkTimer++;
      } else {
        structureButton.className = "notifyButton";
        blinkTimer = 0;
      }
    }
    if (recentMod === true) {
      if (blinkTimer2 < 10) {
        modsButton.className = "";
        blinkTimer2++;
      } else if (blinkTimer2 < 20) {
        modsButton.className = "notifyLink";
        blinkTimer2++;
      } else {
        blinkTimer2 = 0;
      }
    }
    if (app.main.gameState == app.main.GAME_STATE.DEFAULT) {
      modsButton.className = "disabledLink";
    }

    // clear all images
    for (var i = 0; i < 1; i++) {
      ctx[i].clearRect(0, 0, canvas[i].width, canvas[i].height);
    }

    //Background draws
    ctx[0].fillStyle = "black";
    ctx[0].fillRect(0, 0, canvas[0].width, canvas[0].height);
    ctx[0].save();
    if (paused === false) {
      ctx[0].globalAlpha = .1 - innerAlpha + outerAlpha;
    } else {
      ctx[0].globalAlpha = .25 - innerAlpha + outerAlpha;
    }
    ctx[0].translate(0, flowPosition);
    ctx[0].drawImage(circuitry, 0, 0);
    ctx[0].restore();
    lastExecution = new Date().getTime();
  }
};

//Globals
var image = new Image();
image.src = "images/circuitry.png";
var circuitry = image;
var fps = 20;
var lastExecution = new Date().getTime();

//Animation variables
var outerAlpha = .3;
var innerAlpha = .3;
var outerIncreasing = true;
var innerIncreasing = true;
var flowTimer = 0;
var flowPosition = 0;
var changeFlow = false;
var blinkTimer = 0;
var blinkTimer2 = 0;
var paused = true;

// mod and score variables
var modsMain = true;
var statsMain = true;
var scoreState = 0;
var changesMade = false;
var recentMod = false;

// needed globals
var canvas = new Array();
var ctx = new Array();
var user = '';
var profilePic = '';
var currentVersion = 1;
var progressType = "/assets/images/RedRibbonRust.png";
var randomPic = 0;
var statsScreen = false;
var upVidPlay = false;
var upVidTimer = 0;
var modules = new Array();
modules[0] = "";
modules[1] = [""];
modsDiv1.style.display = "none";
modsDiv2.style.display = "none";
modsDiv3.style.display = "none";
modsDiv4.style.display = "none";

//Turn mods into an array
var modsList = new Array();
var openSong = document.getElementById("openSong");
"use strict";

// Check mods and set abilties
var setActiveMods = function setActiveMods() {
  //Mods chart
  //0 - Power Module
  //1 - Temporal Module
  //2 - Aegis Chip
  //3 - Synchronous Chip
  //4 - Mind Circuit
  //5 - Mastery Circuit
  //6 - Data of Piccolo
  //7 - Data of Vegeta
  //8 - Data of Gohan
  //9 - Data of Tien
  //10 - Data of Krillin

  // set mods
  var mod0 = document.querySelector("#mods0").value;
  var mod1 = document.querySelector("#mods1").value;
  var mod2 = document.querySelector("#mods2").value;
  var mod3 = document.querySelector("#mods3").value;
  var mod4 = document.querySelector("#mods4").value;
  var mod5 = document.querySelector("#mods5").value;
  var mod6 = document.querySelector("#mods6").value;
  var mod7 = document.querySelector("#mods7").value;

  // reset actives
  modsT1 = "";
  modsT2 = "";
  modsT3 = "";
  modsT4 = "";
  modsT5 = "";

  // clear texts
  $("#body17T1").text("");
  $("#body18T1").text("");
  $("#body17T2").text("");
  $("#body18T2").text("");
  $("#body17T3").text("");
  $("#body18T3").text("");
  $("#body17T4").text("");
  $("#body18T4").text("");
  $("#body17T5").text("");
  $("#body18T5").text("");
  $("#nameData").text("...awaiting...");
  $("#contentData").text("click integrated mod for information");
  $("#contentData2").text("");
  $('.nope1').hide();
  $('.nope2').hide();
  $('.nope3').hide();
  $('.nope4').hide();
  $('.nope5').hide();
  $('.check1').hide();
  $('.check2').hide();
  $('.check3').hide();
  $('.check4').hide();
  $('.check5').hide();

  //Tier 1
  if (mod0 !== -1) {
    //No 3 or 10 currently
    $('.check1').show();
    if (mod0 == 0) {
      modsT1 = "GI";
      $("#body17T1").text("GI:T1");
      $("#body18T1").text("GI:T1");
    } else if (mod0 == 1) {
      modsT1 = "HM";
      $("#body17T1").text("HM:T1");
      $("#body18T1").text("HM:T1");
    } else if (mod0 == 2) {
      modsT1 = "IB";
      $("#body17T1").text("IB:T1");
      $("#body18T1").text("IB:T1");
    } else if (mod0 == 3) {
      $('.nope1').show();
      $('.check1').hide();
    } else if (mod0 == 4) {
      modsT1 = "CP";
      $("#body17T1").text("CP:T1");
      $("#body18T1").text("CP:T1");
    } else if (mod0 == 5) {
      modsT1 = "SB";
      $("#body17T1").text("SB:T1");
      $("#body18T1").text("SB:T1");
    } else if (mod0 == 6) {
      modsT1 = "EI";
      $("#body17T1").text("EI:17");
      $("#body18T1").text("EI:18");
    } else if (mod0 == 7) {
      modsT1 = "BH";
      $("#body17T1").text("BH:T1");
      $("#body18T1").text("BH:T1");
    } else if (mod0 == 8) {
      modsT1 = "FR";
      $("#body17T1").text("FR:T1");
      $("#body18T1").text("FR:T1");
    } else if (mod0 == 9) {
      modsT1 = "EF";
      $("#body17T1").text("EF:T1");
      $("#body18T1").text("EF:T1");
    } else if (mod0 == 10) {
      modsT1 = "CF";
      $("#body17T1").text("CF:T1");
      $("#body18T1").text("CF:T1");
    } else {
      $('.check1').hide();
      $('.nope1').show();
    }
  } else {
    $('.check1').hide();
  }

  //Tier 2
  if (mod1 !== -1 && mod2 !== -1) {
    $('.check2').show();
    if (mod1 == 0 && mod2 == 1 || mod1 == 1 && mod2 == 0) {
      modsT2 = "BA";
      $("#body17T2").text("BA:T2");
      $("#body18T2").text("BA:T2");
    } else if (mod1 == 0 && mod2 == 2 || mod1 == 2 && mod2 == 0) {
      modsT2 = "IR";
      $("#body17T2").text("IR:T2");
      $("#body18T2").text("IR:T2");
    } else if (mod1 == 0 && mod2 == 4 || mod1 == 4 && mod2 == 0) {
      modsT2 = "PE";
      $("#body17T2").text("PE:T2");
      $("#body18T2").text("PE:T2");
    } else if (mod1 == 0 && mod2 == 7 || mod1 == 7 && mod2 == 0) {
      modsT2 = "BB";
      $("#body17T2").text("BB:17");
      $("#body18T2").text("BB:18");
    } else if (mod1 == 1 && mod2 == 3 || mod1 == 3 && mod2 == 1) {
      modsT2 = "BR";
      $("#body17T2").text("BR:T2");
      $("#body18T2").text("BR:T2");
    } else if (mod1 == 1 && mod2 == 5 || mod1 == 5 && mod2 == 1) {
      modsT2 = "ES";
      $("#body17T2").text("ES:T2");
      $("#body18T2").text("ES:T2");
    } else if (mod1 == 1 && mod2 == 7 || mod1 == 7 && mod2 == 1) {
      modsT2 = "LG";
      $("#body17T2").text("LG:T2");
      $("#body18T2").text("LG:T2");
    } else if (mod1 == 1 && mod2 == 10 || mod1 == 10 && mod2 == 1) {
      modsT2 = "AI";
      $("#body17T2").text("AI:17");
      $("#body18T2").text("AI:18");
    } else if (mod1 == 2 && mod2 == 3 || mod1 == 3 && mod2 == 2) {
      modsT2 = "ER";
      $("#body17T2").text("ER:17");
      $("#body18T2").text("ER:18");
    } else if (mod1 == 2 && mod2 == 5 || mod1 == 5 && mod2 == 2) {
      modsT2 = "AB";
      $("#body17T2").text("AB:17");
      $("#body18T2").text("AB:18");
    } else if (mod1 == 2 && mod2 == 9 || mod1 == 9 && mod2 == 2) {
      modsT2 = "SF";
      $("#body17T2").text("SF:17");
      $("#body18T2").text("SF:18");
    } else if (mod1 == 3 && mod2 == 4 || mod1 == 4 && mod2 == 3) {
      modsT2 = "EE";
      $("#body17T2").text("EE:T2");
      $("#body18T2").text("EE:T2");
    } else if (mod1 == 3 && mod2 == 6 || mod1 == 6 && mod2 == 3) {
      modsT2 = "NR";
      $("#body17T2").text("NR:17");
      $("#body18T2").text("NR:18");
    } else if (mod1 == 3 && mod2 == 9 || mod1 == 9 && mod2 == 3) {
      modsT2 = "DB";
      $("#body17T2").text("DB:T2");
      $("#body18T2").text("DB:T2");
    } else if (mod1 == 4 && mod2 == 6 || mod1 == 6 && mod2 == 4) {
      modsT2 = "HZ";
      $("#body17T2").text("HZ:T2");
      $("#body18T2").text("HZ:T2");
    } else if (mod1 == 4 && mod2 == 8 || mod1 == 8 && mod2 == 4) {
      modsT2 = "SC";
      $("#body17T2").text("SC:17");
      $("#body18T2").text("SC:18");
    } else if (mod1 == 5 && mod2 == 8 || mod1 == 8 && mod2 == 5) {
      modsT2 = "MS";
      $("#body17T2").text("MS:17");
      $("#body18T2").text("MS:18");
    } else if (mod1 == 5 && mod2 == 10 || mod1 == 10 && mod2 == 5) {
      modsT2 = "DD";
      $("#body17T2").text("DD:17");
      $("#body18T2").text("DD:18");
    } else {
      $('.nope2').show();
      $('.check2').hide();
    }
  } else {
    $('.check2').hide();
  }

  //Tier 3
  if (mod3 !== -1) {
    //No 3 or 10 currently
    $('.check3').show();
    if (mod3 == 0) {
      modsT3 = "GI";
      $("#body17T3").text("GI:T3");
      $("#body18T3").text("GI:T3");
    } else if (mod3 == 1) {
      modsT3 = "HM";
      $("#body17T3").text("HM:T3");
      $("#body18T3").text("HM:T3");
    } else if (mod3 == 2) {
      modsT3 = "IB";
      $("#body17T3").text("IB:T3");
      $("#body18T3").text("IB:T3");
    } else if (mod3 == 3) {
      $('.nope3').show();
      $('.check3').hide();
    } else if (mod3 == 4) {
      modsT3 = "CP";
      $("#body17T3").text("CP:T3");
      $("#body18T3").text("CP:T3");
    } else if (mod3 == 5) {
      modsT3 = "SB";
      $("#body17T3").text("SB:T3");
      $("#body18T3").text("SB:T3");
    } else if (mod3 == 6) {
      modsT3 = "EI";
      $("#body17T3").text("EI:17");
      $("#body18T3").text("EI:18");
    } else if (mod3 == 7) {
      modsT3 = "BH";
      $("#body17T3").text("BH:T3");
      $("#body18T3").text("BH:T3");
    } else if (mod3 == 8) {
      modsT3 = "FR";
      $("#body17T3").text("FR:T3");
      $("#body18T3").text("FR:T3");
    } else if (mod3 == 9) {
      modsT3 = "EF";
      $("#body17T3").text("EF:T3");
      $("#body18T3").text("EF:T3");
    } else if (mod3 == 10) {
      modsT3 = "CF";
      $("#body17T3").text("CF:T3");
      $("#body18T3").text("CF:T3");
    } else {
      $('.nope3').show();
      $('.check3').hide();
    }
  } else {
    $('.check3').hide();
  }

  //Tier 4
  if (mod4 !== -1 && mod5 !== -1) {
    $('.check4').show();
    if (mod4 == 0 && mod5 == 1 || mod4 == 1 && mod5 == 0) {
      modsT4 = "BA";
      $("#body17T4").text("BA:T4");
      $("#body18T4").text("BA:T4");
    } else if (mod4 == 0 && mod5 == 2 || mod4 == 2 && mod5 == 0) {
      modsT4 = "IR";
      $("#body17T4").text("IR:T4");
      $("#body18T4").text("IR:T4");
    } else if (mod4 == 0 && mod5 == 4 || mod4 == 4 && mod5 == 0) {
      modsT4 = "PE";
      $("#body17T4").text("PE:T4");
      $("#body18T4").text("PE:T4");
    } else if (mod4 == 0 && mod5 == 7 || mod4 == 7 && mod5 == 0) {
      modsT4 = "BB";
      $("#body17T4").text("BB:17");
      $("#body18T4").text("BB:18");
    } else if (mod4 == 1 && mod5 == 3 || mod4 == 3 && mod5 == 1) {
      modsT4 = "BR";
      $("#body17T4").text("BR:T4");
      $("#body18T4").text("BR:T4");
    } else if (mod4 == 1 && mod5 == 5 || mod4 == 5 && mod5 == 1) {
      modsT4 = "ES";
      $("#body17T4").text("ES:T4");
      $("#body18T4").text("ES:T4");
    } else if (mod4 == 1 && mod5 == 7 || mod4 == 7 && mod5 == 1) {
      modsT4 = "LG";
      $("#body17T4").text("LG:T4");
      $("#body18T4").text("LG:T4");
    } else if (mod4 == 1 && mod5 == 10 || mod4 == 10 && mod5 == 1) {
      modsT4 = "AI";
      $("#body17T4").text("AI:17");
      $("#body18T4").text("AI:18");
    } else if (mod4 == 2 && mod5 == 3 || mod4 == 3 && mod5 == 2) {
      modsT4 = "ER";
      $("#body17T4").text("ER:17");
      $("#body18T4").text("ER:18");
    } else if (mod4 == 2 && mod5 == 5 || mod4 == 5 && mod5 == 2) {
      modsT4 = "AB";
      $("#body17T4").text("AB:17");
      $("#body18T4").text("AB:18");
    } else if (mod4 == 2 && mod5 == 9 || mod4 == 9 && mod5 == 2) {
      modsT4 = "SF";
      $("#body17T4").text("SF:17");
      $("#body18T4").text("SF:18");
    } else if (mod4 == 3 && mod5 == 4 || mod4 == 4 && mod5 == 3) {
      modsT4 = "EE";
      $("#body17T4").text("EE:T4");
      $("#body18T4").text("EE:T4");
    } else if (mod4 == 3 && mod5 == 6 || mod4 == 6 && mod5 == 3) {
      modsT4 = "NR";
      $("#body17T4").text("NR:17");
      $("#body18T4").text("NR:18");
    } else if (mod4 == 3 && mod5 == 9 || mod4 == 9 && mod5 == 3) {
      modsT4 = "DB";
      $("#body17T4").text("DB:T4");
      $("#body18T4").text("DB:T4");
    } else if (mod4 == 4 && mod5 == 6 || mod4 == 6 && mod5 == 4) {
      modsT4 = "HZ";
      $("#body17T4").text("HZ:T4");
      $("#body18T4").text("HZ:T4");
    } else if (mod4 == 4 && mod5 == 8 || mod4 == 8 && mod5 == 4) {
      modsT4 = "SC";
      $("#body17T4").text("SC:17");
      $("#body18T4").text("SC:18");
    } else if (mod4 == 5 && mod5 == 8 || mod4 == 8 && mod5 == 5) {
      modsT4 = "MS";
      $("#body17T4").text("MS:17");
      $("#body18T4").text("MS:18");
    } else if (mod4 == 5 && mod5 == 10 || mod4 == 10 && mod5 == 5) {
      modsT4 = "DD";
      $("#body17T4").text("DD:17");
      $("#body18T4").text("DD:18");
    } else {
      $('.nope4').show();
      $('.check4').hide();
    }
  } else {
    $('.check4').hide();
  }

  //Tier 5
  if (mod6 !== -1 && mod7 !== -1) {
    $('.check5').show();
    if (mod6 == 0 && mod7 == 1 || mod6 == 1 && mod7 == 0) {
      modsT5 = "BA";
      $("#body17T5").text("BA:T5");
      $("#body18T5").text("BA:T5");
    } else if (mod6 == 0 && mod7 == 2 || mod6 == 2 && mod7 == 0) {
      modsT5 = "IR";
      $("#body17T5").text("IR:T5");
      $("#body18T5").text("IR:T5");
    } else if (mod6 == 0 && mod7 == 4 || mod6 == 4 && mod7 == 0) {
      modsT5 = "PE";
      $("#body17T5").text("PE:T5");
      $("#body18T5").text("PE:T5");
    } else if (mod6 == 0 && mod7 == 7 || mod6 == 7 && mod7 == 0) {
      modsT5 = "BB";
      $("#body17T5").text("BB:17");
      $("#body18T5").text("BB:18");
    } else if (mod6 == 1 && mod7 == 3 || mod6 == 3 && mod7 == 1) {
      modsT5 = "BR";
      $("#body17T5").text("BR:T5");
      $("#body18T5").text("BR:T5");
    } else if (mod6 == 1 && mod7 == 5 || mod6 == 5 && mod7 == 1) {
      modsT5 = "ES";
      $("#body17T5").text("ES:T5");
      $("#body18T5").text("ES:T5");
    } else if (mod6 == 1 && mod7 == 7 || mod6 == 7 && mod7 == 1) {
      modsT5 = "LG";
      $("#body17T5").text("LG:T5");
      $("#body18T5").text("LG:T5");
    } else if (mod6 == 1 && mod7 == 10 || mod6 == 10 && mod7 == 1) {
      modsT5 = "AI";
      $("#body17T5").text("AI:17");
      $("#body18T5").text("AI:18");
    } else if (mod6 == 2 && mod7 == 3 || mod6 == 3 && mod7 == 2) {
      modsT5 = "ER";
      $("#body17T5").text("ER:17");
      $("#body18T5").text("ER:18");
    } else if (mod6 == 2 && mod7 == 5 || mod6 == 5 && mod7 == 2) {
      modsT5 = "AB";
      $("#body17T5").text("AB:17");
      $("#body18T5").text("AB:18");
    } else if (mod6 == 2 && mod7 == 9 || mod6 == 9 && mod7 == 2) {
      modsT5 = "SF";
      $("#body17T5").text("SF:17");
      $("#body18T5").text("SF:18");
    } else if (mod6 == 3 && mod7 == 4 || mod6 == 4 && mod7 == 3) {
      modsT5 = "EE";
      $("#body17T5").text("EE:T5");
      $("#body18T5").text("EE:T5");
    } else if (mod6 == 3 && mod7 == 6 || mod6 == 6 && mod7 == 3) {
      modsT5 = "NR";
      $("#body17T5").text("NR:17");
      $("#body18T5").text("NR:18");
    } else if (mod6 == 3 && mod7 == 9 || mod6 == 9 && mod7 == 3) {
      modsT5 = "DB";
      $("#body17T5").text("DB:T5");
      $("#body18T5").text("DB:T5");
    } else if (mod6 == 4 && mod7 == 6 || mod6 == 6 && mod7 == 4) {
      modsT5 = "HZ";
      $("#body17T5").text("HZ:T5");
      $("#body18T5").text("HZ:T5");
    } else if (mod6 == 4 && mod7 == 8 || mod6 == 8 && mod7 == 4) {
      modsT5 = "SC";
      $("#body17T5").text("SC:17");
      $("#body18T5").text("SC:18");
    } else if (mod6 == 5 && mod7 == 8 || mod6 == 8 && mod7 == 5) {
      modsT5 = "MS";
      $("#body17T5").text("MS:17");
      $("#body18T5").text("MS:18");
    } else if (mod6 == 5 && mod7 == 10 || mod6 == 10 && mod7 == 5) {
      modsT5 = "DD";
      $("#body17T5").text("DD:17");
      $("#body18T5").text("DD:18");
    } else {
      $('.nope5').show();
      $('.check5').hide();
    }
  } else {
    $('.check5').hide();
  }
  if (modsT1 === "") {
    $("#imgT1").children().hide();
  } else {
    $("#imgT1").children().show();
  }
  if (modsT2 === "") {
    $("#imgT2").children().hide();
  } else {
    $("#imgT2").children().show();
  }
  if (modsT3 === "") {
    $("#imgT3").children().hide();
  } else {
    $("#imgT3").children().show();
  }
  if (modsT4 === "") {
    $("#imgT4").children().hide();
  } else {
    $("#imgT4").children().show();
  }
  if (modsT5 === "") {
    $("#imgT5").children().hide();
  } else {
    $("#imgT5").children().show();
  }
  console.log(modsT1);
  console.log(modsT2);
  console.log(modsT3);
  console.log(modsT4);
  console.log(modsT5);
  return false;
};

// function to show the currently used mods
var showActiveMods = function showActiveMods() {
  //Mods chart
  //0 - Power Module
  //1 - Temporal Module
  //2 - Aegis Chip
  //3 - Synchronous Chip
  //4 - Mind Circuit
  //5 - Mastery Circuit
  //6 - Data of Piccolo
  //7 - Data of Vegeta
  //8 - Data of Gohan
  //9 - Data of Tien
  //10 - Data of Krillin

  // clear text
  $("#body17T1").text("");
  $("#body18T1").text("");
  $("#body17T2").text("");
  $("#body18T2").text("");
  $("#body17T3").text("");
  $("#body18T3").text("");
  $("#body17T4").text("");
  $("#body18T4").text("");
  $("#body17T5").text("");
  $("#body18T5").text("");

  //Tier 1
  if (modsT1 !== "") {
    if (modsT1 == "GI") {
      $("#body17T1").text("GI:T1");
      $("#body18T1").text("GI:T1");
    } else if (modsT1 == "HM") {
      $("#body17T1").text("HM:T1");
      $("#body18T1").text("HM:T1");
    } else if (modsT1 == "IB") {
      $("#body17T1").text("IB:T1");
      $("#body18T1").text("IB:T1");
    } else if (modsT1 == "CP") {
      $("#body17T1").text("CP:T1");
      $("#body18T1").text("CP:T1");
    } else if (modsT1 == "SB") {
      $("#body17T1").text("SB:T1");
      $("#body18T1").text("SB:T1");
    } else if (modsT1 == "EI") {
      $("#body17T1").text("EI:17");
      $("#body18T1").text("EI:18");
    } else if (modsT1 == "BH") {
      $("#body17T1").text("BH:T1");
      $("#body18T1").text("BH:T1");
    } else if (modsT1 == "FR") {
      $("#body17T1").text("FR:T1");
      $("#body18T1").text("FR:T1");
    } else if (modsT1 == "EF") {
      $("#body17T1").text("EF:T1");
      $("#body18T1").text("EF:T1");
    } else if (modsT1 == "CF") {
      $("#body17T1").text("CF:T1");
      $("#body18T1").text("CF:T1");
    }
  }

  //Tier 2
  if (modsT2 !== "") {
    if (modsT2 == "BA") {
      $("#body17T2").text("BA:T2");
      $("#body18T2").text("BA:T2");
    } else if (modsT2 == "IR") {
      $("#body17T2").text("IR:T2");
      $("#body18T2").text("IR:T2");
    } else if (modsT2 == "PE") {
      $("#body17T2").text("PE:T2");
      $("#body18T2").text("PE:T2");
    } else if (modsT2 == "BB") {
      $("#body17T2").text("BB:17");
      $("#body18T2").text("BB:18");
    } else if (modsT2 == "BR") {
      $("#body17T2").text("BR:T2");
      $("#body18T2").text("BR:T2");
    } else if (modsT2 == "ES") {
      $("#body17T2").text("ES:T2");
      $("#body18T2").text("ES:T2");
    } else if (modsT2 == "LG") {
      $("#body17T2").text("LG:T2");
      $("#body18T2").text("LG:T2");
    } else if (modsT2 == "AI") {
      $("#body17T2").text("AI:17");
      $("#body18T2").text("AI:18");
    } else if (modsT2 == "ER") {
      $("#body17T2").text("ER:17");
      $("#body18T2").text("ER:18");
    } else if (modsT2 == "AB") {
      $("#body17T2").text("AB:17");
      $("#body18T2").text("AB:18");
    } else if (modsT2 == "SF") {
      $("#body17T2").text("SF:17");
      $("#body18T2").text("SF:18");
    } else if (modsT2 == "EE") {
      $("#body17T2").text("EE:T2");
      $("#body18T2").text("EE:T2");
    } else if (modsT2 == "NR") {
      $("#body17T2").text("NR:17");
      $("#body18T2").text("NR:18");
    } else if (modsT2 == "DB") {
      $("#body17T2").text("DB:T2");
      $("#body18T2").text("DB:T2");
    } else if (modsT2 == "HZ") {
      $("#body17T2").text("HZ:T2");
      $("#body18T2").text("HZ:T2");
    } else if (modsT2 == "SC") {
      $("#body17T2").text("SC:17");
      $("#body18T2").text("SC:18");
    } else if (modsT2 == "MS") {
      $("#body17T2").text("MS:17");
      $("#body18T2").text("MS:18");
    } else if (modsT2 == "DD") {
      $("#body17T2").text("DD:17");
      $("#body18T2").text("DD:18");
    }
  }

  //Tier 3
  if (modsT3 !== "") {
    if (modsT3 == "GI") {
      $("#body17T3").text("GI:T3");
      $("#body18T3").text("GI:T3");
    } else if (modsT3 == "HM") {
      $("#body17T3").text("HM:T3");
      $("#body18T3").text("HM:T3");
    } else if (modsT3 == "IB") {
      $("#body17T3").text("IB:T3");
      $("#body18T3").text("IB:T3");
    } else if (modsT3 == "CP") {
      $("#body17T3").text("CP:T3");
      $("#body18T3").text("CP:T3");
    } else if (modsT3 == "SB") {
      $("#body17T3").text("SB:T3");
      $("#body18T3").text("SB:T3");
    } else if (modsT3 == "EI") {
      $("#body17T3").text("EI:17");
      $("#body18T3").text("EI:18");
    } else if (modsT3 == "BH") {
      $("#body17T3").text("BH:T3");
      $("#body18T3").text("BH:T3");
    } else if (modsT3 == "FR") {
      $("#body17T3").text("FR:T3");
      $("#body18T3").text("FR:T3");
    } else if (modsT3 == "EF") {
      $("#body17T3").text("EF:T3");
      $("#body18T3").text("EF:T3");
    } else if (modsT3 == "CF") {
      $("#body17T3").text("CF:T3");
      $("#body18T3").text("CF:T3");
    }
  }

  //Tier 4
  if (modsT4 !== "") {
    if (modsT4 == "BA") {
      $("#body17T4").text("BA:T4");
      $("#body18T4").text("BA:T4");
    } else if (modsT4 == "IR") {
      $("#body17T4").text("IR:T4");
      $("#body18T4").text("IR:T4");
    } else if (modsT4 == "PE") {
      $("#body17T4").text("PE:T4");
      $("#body18T4").text("PE:T4");
    } else if (modsT4 == "BB") {
      $("#body17T4").text("BB:17");
      $("#body18T4").text("BB:18");
    } else if (modsT4 == "BR") {
      $("#body17T4").text("BR:T4");
      $("#body18T4").text("BR:T4");
    } else if (modsT4 == "ES") {
      $("#body17T4").text("ES:T4");
      $("#body18T4").text("ES:T4");
    } else if (modsT4 == "LG") {
      $("#body17T4").text("LG:T4");
      $("#body18T4").text("LG:T4");
    } else if (modsT4 == "AI") {
      $("#body17T4").text("AI:17");
      $("#body18T4").text("AI:18");
    } else if (modsT4 == "ER") {
      $("#body17T4").text("ER:17");
      $("#body18T4").text("ER:18");
    } else if (modsT4 == "AB") {
      $("#body17T4").text("AB:17");
      $("#body18T4").text("AB:18");
    } else if (modsT4 == "SF") {
      $("#body17T4").text("SF:17");
      $("#body18T4").text("SF:18");
    } else if (modsT4 == "EE") {
      $("#body17T4").text("EE:T4");
      $("#body18T4").text("EE:T4");
    } else if (modsT4 == "NR") {
      $("#body17T4").text("NR:17");
      $("#body18T4").text("NR:18");
    } else if (modsT4 == "DB") {
      $("#body17T4").text("DB:T4");
      $("#body18T4").text("DB:T4");
    } else if (modsT4 == "HZ") {
      $("#body17T4").text("HZ:T4");
      $("#body18T4").text("HZ:T4");
    } else if (modsT4 == "SC") {
      $("#body17T4").text("SC:17");
      $("#body18T4").text("SC:18");
    } else if (modsT4 == "MS") {
      $("#body17T4").text("MS:17");
      $("#body18T4").text("MS:18");
    } else if (modsT4 == "DD") {
      $("#body17T4").text("DD:17");
      $("#body18T4").text("DD:18");
    }
  }

  //Tier 5
  if (modsT5 !== "") {
    if (modsT5 == "BA") {
      $("#body17T5").text("BA:T5");
      $("#body18T5").text("BA:T5");
    } else if (modsT5 == "IR") {
      $("#body17T5").text("IR:T5");
      $("#body18T5").text("IR:T5");
    } else if (modsT5 == "PE") {
      $("#body17T5").text("PE:T5");
      $("#body18T5").text("PE:T5");
    } else if (modsT5 == "BB") {
      $("#body17T5").text("BB:17");
      $("#body18T5").text("BB:18");
    } else if (modsT5 == "BR") {
      $("#body17T5").text("BR:T5");
      $("#body18T5").text("BR:T5");
    } else if (modsT5 == "ES") {
      $("#body17T5").text("ES:T5");
      $("#body18T5").text("ES:T5");
    } else if (modsT5 == "LG") {
      $("#body17T5").text("LG:T5");
      $("#body18T5").text("LG:T5");
    } else if (modsT5 == "AI") {
      $("#body17T5").text("AI:17");
      $("#body18T5").text("AI:18");
    } else if (modsT5 == "ER") {
      $("#body17T5").text("ER:17");
      $("#body18T5").text("ER:18");
    } else if (modsT5 == "AB") {
      $("#body17T5").text("AB:17");
      $("#body18T5").text("AB:18");
    } else if (modsT5 == "SF") {
      $("#body17T5").text("SF:17");
      $("#body18T5").text("SF:18");
    } else if (modsT5 == "EE") {
      $("#body17T5").text("EE:T5");
      $("#body18T5").text("EE:T5");
    } else if (modsT5 == "NR") {
      $("#body17T5").text("NR:17");
      $("#body18T5").text("NR:18");
    } else if (modsT5 == "DB") {
      $("#body17T5").text("DB:T5");
      $("#body18T5").text("DB:T5");
    } else if (modsT5 == "HZ") {
      $("#body17T5").text("HZ:T5");
      $("#body18T5").text("HZ:T5");
    } else if (modsT5 == "SC") {
      $("#body17T5").text("SC:17");
      $("#body18T5").text("SC:18");
    } else if (modsT5 == "MS") {
      $("#body17T5").text("MS:17");
      $("#body18T5").text("MS:18");
    } else if (modsT5 == "DD") {
      $("#body17T5").text("DD:17");
      $("#body18T5").text("DD:18");
    }
  }
  if (modsT1 === "") {
    $("#imgT1").children().hide();
  } else {
    $("#imgT1").children().show();
  }
  if (modsT2 === "") {
    $("#imgT2").children().hide();
  } else {
    $("#imgT2").children().show();
  }
  if (modsT3 === "") {
    $("#imgT3").children().hide();
  } else {
    $("#imgT3").children().show();
  }
  if (modsT4 === "") {
    $("#imgT4").children().hide();
  } else {
    $("#imgT4").children().show();
  }
  if (modsT5 === "") {
    $("#imgT5").children().hide();
  } else {
    $("#imgT5").children().show();
  }
  console.log(modsT1);
  console.log(modsT2);
  console.log(modsT3);
  console.log(modsT4);
  console.log(modsT5);
  return false;
};

// function to set and display the names and info of mod abilities
var displayInfo = function displayInfo(type) {
  app.main.sound.playEffect(68);
  var info = "";

  // figure out which tier
  if (type === "T1") {
    info = modsT1;
  } else if (type === "T2") {
    info = modsT2;
  } else if (type === "T3") {
    info = modsT3;
  } else if (type === "T4") {
    info = modsT4;
  } else if (type === "T5") {
    info = modsT5;
  }
  if (info === "GI") {
    $("#nameData").text("Greater Intensity");
    $("#contentData").text("BOTH -- All blasts push with much greater force");
    $("#contentData2").text("");
  }
  if (info === "HM") {
    $("#nameData").text("Hasty Movement");
    $("#contentData").text("BOTH -- Overload max movement speeds");
    $("#contentData2").text("");
  }
  if (info === "IB") {
    $("#nameData").text("Iron Block");
    $("#contentData").text("BOTH -- Blocking will now withstand normal blasts at a fatigue cost.");
    $("#contentData2").text("");
  }
  if (info === "CP") {
    $("#nameData").text("Crafty Points");
    $("#contentData").text("BOTH -- All blows are more precise.  Awarding more points for suffering.");
    $("#contentData2").text("");
  }
  if (info === "SB") {
    $("#nameData").text("Scalding Blasts");
    $("#contentData").text("BOTH -- Blasts are much hotter with longer lasting blast burn effects.");
    $("#contentData2").text("");
  }
  if (info === "EI") {
    $("#nameData").text("Endurance Improved");
    $("#contentData").text("UNIT 18 -- Data enhanced ability to recover endurance a bit faster.");
    $("#contentData2").text("UNIT 17 -- Will join the fight more willingly when called");
  }
  if (info === "BH") {
    $("#nameData").text("Blast Haste");
    $("#contentData").text("BOTH -- Data enhanced ability to faster fire normal blasts.");
    $("#contentData2").text("");
  }
  if (info === "FR") {
    $("#nameData").text("Fatigue Resist");
    $("#contentData").text("BOTH -- Data enhanced ability to reduce faigue at a bit faster rate.");
    $("#contentData2").text("");
  }
  if (info === "EF") {
    $("#nameData").text("Energy Flow");
    $("#contentData").text("BOTH -- Data enhanced ability to generate energy reserve more efficiently.");
    $("#contentData2").text("");
  }
  if (info === "CF") {
    $("#nameData").text("Calculated Flaw");
    $("#contentData").text("BOTH -- Data induced systems change renders both original powerful energy attacks no longer functional.");
    $("#contentData2").text("");
  }
  if (info === "BA") {
    $("#nameData").text("Boost Acceleration");
    $("#contentData").text("BOTH -- Quickly accelerate to top speeds.");
    $("#contentData2").text("");
  }
  if (info === "IR") {
    $("#nameData").text("Impact Recovery");
    $("#contentData").text("BOTH -- Systems recover from stun more quickly.");
    $("#contentData2").text("");
  }
  if (info === "PE") {
    $("#nameData").text("Power Efficiency");
    $("#contentData").text("BOTH -- All attacks generate less fatigue.");
    $("#contentData2").text("");
  }
  if (info === "BB") {
    $("#nameData").text("Big Bang");
    $("#contentData").text("UNIT 18 -- Replicate Vegeta's Big Bang attack as part of powerful energy attacks.");
    $("#contentData2").text("UNIT 17 -- Data induced increase of Units Power Blitz Damage and Impact.");
  }
  if (info === "BR") {
    $("#nameData").text("Blast Recovery");
    $("#contentData").text("BOTH: Ability to move again quickly after firing off a powerful energy attack.");
    $("#contentData2").text("");
  }
  if (info === "ES") {
    $("#nameData").text("Extreme Speed");
    $("#contentData").text("BOTH -- Leave a super speed state much faster.");
    $("#contentData2").text("");
  }
  if (info === "LG") {
    $("#nameData").text("Lucora Gun");
    $("#contentData").text("BOTH -- Replicate Vegeta's rapid barrage of low energy cost seeking blasts as part of powerful energy attacks.");
    $("#contentData2").text("");
  }
  if (info === "AI") {
    $("#nameData").text("After Image");
    $("#contentData").text("UNIT 18 -- Create a false image while in super speed state that can be a distraction.");
    $("#contentData2").text("UNIT 17 -- Fire 2 Power Blitz attacks in quick succession.");
  }
  if (info === "ER") {
    $("#nameData").text("Energy Resilience");
    $("#contentData").text("UNIT 18 -- Blast burn effect against this unit is reduced greatly.");
    $("#contentData2").text("UNIT 17 -- Reduced impact by hits from energy attacks");
  }
  if (info === "AB") {
    $("#nameData").text("Android Barrier");
    $("#contentData").text("UNIT 18 -- Greatly Reduce energy drain from the android barrier.");
    $("#contentData2").text("UNIT 17 -- May protect 18 from incoming powerful energy attacks when spectating");
  }
  if (info === "SF") {
    $("#nameData").text("Solar Flare");
    $("#contentData").text("UNIT 18 -- Replicate Tien's Solar Flare technique to blind the target as part of powerful energy attacks -- Must be high up to activate and facing target.");
    $("#contentData2").text("UNIT 17 -- May join the fight when spectating and facing an allied Solar Flare");
  }
  if (info === "EE") {
    $("#nameData").text("Energy Efficiency");
    $("#contentData").text("BOTH -- All attacks cost less energy.");
    $("#contentData2").text("");
  }
  if (info === "NR") {
    $("#nameData").text("Namekian Regen");
    $("#contentData").text("UNIT 18 -- Mildly Replicate Piccolo's generation allowing for health to very slowly regenerate.");
    $("#contentData2").text("UNIT 17 -- Will attack for longer intervals than usual");
  }
  if (info === "DB") {
    $("#nameData").text("Double Beam");
    $("#contentData").text("BOTH -- Fire 2 concentrated beam energy attacks in quick succession every time with no addional energy cost.");
    $("#contentData2").text("");
  }
  if (info === "HZ") {
    $("#nameData").text("Hell Zone Mines");
    $("#contentData").text("BOTH -- Replicate Piccolo's ability to have alternating normal energy blasts remain as air mines.");
    $("#contentData2").text("");
  }
  if (info === "SC") {
    $("#nameData").text("Super Charge");
    $("#contentData").text("UNIT 18 -- While taunting an opponent systems will recharge energy much faster.");
    $("#contentData2").text("UNIT 17 -- Extra energy is spent firing off powerful energy attacks while spectating");
  }
  if (info === "MS") {
    $("#nameData").text("Mesenko");
    $("#contentData").text("UNIT 18 -- Replicate Gohan's mesenko technique as part of powerful energy attacks.");
    $("#contentData2").text("UNIT 17 -- Data incuded improvement of Power Blitz homing ability");
  }
  if (info === "DD") {
    $("#nameData").text("Destructo Disk");
    $("#contentData").text("UNIT 18 -- Replicate Krillin's slow but killer Destructo Disk technique as part of powerful energy attacks.");
    $("#contentData2").text("UNIT 17 -- Data induced blast accuracy preventing blasts from hitting an ally");
  }
};

// acitve mod variables
var modsT1 = "";
var modsT2 = "";
var modsT3 = "";
var modsT4 = "";
var modsT5 = "";
