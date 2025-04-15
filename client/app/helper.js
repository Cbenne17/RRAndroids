// helper function to display error messages
const handleError = (message) => {
  $("#errorMessage").text(message);
};

// redirection helper function
const redirect = (response) => {
  window.location = response.redirect;
};

// function for all Ajax requests
const sendAjax = (type, action, data, success) => {
  $.ajax({
	cashe: false,
	type: type,
	url: action,
	data: data,
	dataType: "json",
	success: success,
	error: function(xhr, status, error) {
      var messageObj = JSON.parse(xhr.responseText);
	  handleError(messageObj.error);
	}
  });
};

//Function to populate initial modules
function populateMods(){
  let selectedGroup = 1;
  console.log("POPULATE");
  modsList[0] = document.querySelector("#mods0");
  modsList[1] = document.querySelector("#mods1");
  modsList[2] = document.querySelector("#mods2");
  modsList[3] = document.querySelector("#mods3");
  modsList[4] = document.querySelector("#mods4");
  modsList[5] = document.querySelector("#mods5");
  modsList[6] = document.querySelector("#mods6");
  modsList[7] = document.querySelector("#mods7");
		
  if (selectedGroup > 0){
    for(let j = 0; j < 8; j++){
      for (let i = 0; i < modules[selectedGroup].length; i++) {
        modsList[j].options[modsList[j].options.length]=new Option(modules[selectedGroup][i].split("|")[0], modules[selectedGroup][i].split("|")[1]);
        modsList[j].selectedIndex = "0";
	  }
    }
  }
	  
}
 
      
//Function to update currently used modules
function updateMods(){
  changesMade = true;
	
  let selected = new Array();
		
  selected[0] = document.querySelector("#mods0").selectedIndex;
  selected[1] = document.querySelector("#mods1").selectedIndex;
  selected[2] = document.querySelector("#mods2").selectedIndex;
  selected[3] = document.querySelector("#mods3").selectedIndex;
  selected[4] = document.querySelector("#mods4").selectedIndex;
  selected[5] = document.querySelector("#mods5").selectedIndex;
  selected[6] = document.querySelector("#mods6").selectedIndex;
  selected[7] = document.querySelector("#mods7").selectedIndex;
		  
		  
  //Setup and update the array of mods
  let selectedGroup = 1;
  if(selected == 0){
	selectedGroup = 0;
  }
  for(let x = 0; x < 8; x++){
    modsList[x].options.length = 0;
  }
  if (selectedGroup > 0){
    for(let j = 0; j < 8; j++){
      for (let i = 0; i < modules[selectedGroup].length; i++){
	    modsList[j].options[modsList[j].options.length]=new Option(modules[selectedGroup][i].split("|")[0], modules[selectedGroup][i].split("|")[1]);
	    if((selected[0] != i && selected[1] != i && selected[2] != i && selected[3] != i && selected[4] != i && selected[5] != i && selected[6] != i && selected[7] != i)){
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
function displayUpdateMods(){
  let selected = new Array();
		
  selected[0] = document.querySelector("#mods0").selectedIndex;
  selected[1] = document.querySelector("#mods1").selectedIndex;
  selected[2] = document.querySelector("#mods2").selectedIndex;
  selected[3] = document.querySelector("#mods3").selectedIndex;
  selected[4] = document.querySelector("#mods4").selectedIndex;
  selected[5] = document.querySelector("#mods5").selectedIndex;
  selected[6] = document.querySelector("#mods6").selectedIndex;
  selected[7] = document.querySelector("#mods7").selectedIndex;
		  
		  
  //Setup and update the array of mods
  let selectedGroup = 1;
  if(selected == 0){
	selectedGroup = 0;
  }
  for(let x = 0; x < 8; x++){
    modsList[x].options.length = 0;
  }
  if (selectedGroup > 0){
    for(let j = 0; j < 8; j++){
      for (let i = 0; i < modules[selectedGroup].length; i++){
	    modsList[j].options[modsList[j].options.length]=new Option(modules[selectedGroup][i].split("|")[0], modules[selectedGroup][i].split("|")[1]);
	    if((selected[0] != i && selected[1] != i && selected[2] != i && selected[3] != i && selected[4] != i && selected[5] != i && selected[6] != i && selected[7] != i)){
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
  if(currentVersion > 19){
    modsDiv1.style.display = "inline";
    modsDiv2.style.display = "inline";
    modsDiv3.style.display = "inline";
    modsDiv4.style.display = "inline";
  } else if(currentVersion > 14){
    modsDiv1.style.display = "inline";
    modsDiv2.style.display = "inline";
    modsDiv3.style.display = "inline";
    modsDiv4.style.display = "none";
  } else if(currentVersion > 9){
	modsDiv1.style.display = "inline";
    modsDiv2.style.display = "inline";
    modsDiv3.style.display = "none";
	modsDiv4.style.display = "none";
  } else if(currentVersion > 4){
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
const update = () => {
	
  //Maintain update loop
  requestAnimationFrame(update);
	 	
  //Set current time
  let now = new Date().getTime();

  //Update runs here
  if ((now - lastExecution) > (1000 / fps)){
	  
	  
	// play mods video
	if(upVidPlay === true){
	  upVidTimer += 1;
	  if(upVidTimer < 2){
		app.main.videos.startU();
	  }
	  if(app.main.finished5 == false){
		app.main.videos.check5();
	  }
	} else {
	  upVidTimer = 0;
	}
	

	// When mods video finishes
	if(upVidPlay === true && app.main.finished5 == true && upVidTimer > 2){
	  app.main.resetTalents();
	  app.main.setupTalents("T1");
      app.main.setupTalents("T2");
	  app.main.setupTalents("T3");
	  app.main.setupTalents("T4");
	  app.main.setupTalents("T5");
	  upVidPlay = false;
	  if(app.main.gameState !== app.main.GAME_STATE.TUTORIAL){
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
	
	if (myKeys.keydown[myKeys.KEYBOARD.KEY_ENTER] == true && upVidTimer > 60){
	  app.main.finished5 = true;
	}
  
		
    //Fade effect for inner layer
    if(innerAlpha > .35 && innerIncreasing === true){
      innerIncreasing = false;
    } else if(innerAlpha < .15 && innerIncreasing === false){
      innerIncreasing = true;
    }
		
    //Fade effect for inner layer
    if(innerIncreasing === true){
      innerAlpha += .01;
    } else if(innerIncreasing === false){
      innerAlpha -= .01;
    }
		
	// change effect for paused
	if(paused === false){
    if(changeFlow === false && flowTimer < 120){
      flowTimer++;
      flowPosition -= 2;
    } else {
      changeFlow = true;
    }
		
    if(changeFlow === true && flowTimer > 0){
        flowTimer--;
        flowPosition += 2;
      } else {
        changeFlow = false;
      }
    }
	
	
	if(changesMade === true){
	  if(blinkTimer < 20){
	    structureButton.className = "formSubmit";
        blinkTimer++;
      } else {
        structureButton.className = "notifyButton";
        blinkTimer = 0;
      }
	}
	
	if(recentMod === true){
	  if(blinkTimer2 < 10){
	    modsButton.className = "";
        blinkTimer2++;
      } else if(blinkTimer2 < 20) {
        modsButton.className = "notifyLink";
        blinkTimer2++;
      } else {
		blinkTimer2 = 0; 
	  }
    }
	
	
	if(app.main.gameState == app.main.GAME_STATE.DEFAULT){
		modsButton.className = "disabledLink";
	}
	
	
		
	// clear all images
    for(let i = 0; i < 1; i++){
      ctx[i].clearRect(0, 0, canvas[i].width, canvas[i].height);
    }
		
		
    //Background draws
    ctx[0].fillStyle = "black";
    ctx[0].fillRect(0,0,canvas[0].width,canvas[0].height);
    ctx[0].save();
    if(paused === false){
      ctx[0].globalAlpha = (.1 - innerAlpha + outerAlpha);
    } else {
      ctx[0].globalAlpha = (.25 - innerAlpha + outerAlpha);
    }
    ctx[0].translate(0,flowPosition);
    ctx[0].drawImage(circuitry,0,0);
    ctx[0].restore();
		
    lastExecution = new Date().getTime();
  }
};

//Globals
let image = new Image();
image.src =  "images/circuitry.png";
let circuitry = image;
	
const fps = 20;
let lastExecution = new Date().getTime();

//Animation variables
let outerAlpha = .3;
let innerAlpha = .3;
let outerIncreasing = true;
let innerIncreasing = true;
let flowTimer = 0;
let flowPosition = 0;
let changeFlow = false;
let blinkTimer = 0;
let blinkTimer2 = 0;

let paused = true;

// mod and score variables
let modsMain = true;
let statsMain = true;
let scoreState = 0;
let changesMade = false;
let recentMod = false;
	
// needed globals
let canvas = new Array();
let ctx = new Array();

let user = '';
let profilePic = '';
let currentVersion = 1;
let progressType = "/assets/images/RedRibbonRust.png";

let randomPic = 0;

let statsScreen = false;

let upVidPlay = false;
let upVidTimer = 0;

let modules = new Array();
modules[0]="";
modules[1]=[""];

modsDiv1.style.display = "none";
modsDiv2.style.display = "none";
modsDiv3.style.display = "none";
modsDiv4.style.display = "none";


//Turn mods into an array
let modsList = new Array();

let openSong = document.getElementById("openSong");