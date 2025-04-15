"use strict";

// checks and posts login data to server
var handleLogin = function handleLogin(e) {
  e.preventDefault();
  if ($("#user").val() == '' || $("#pass").val() == '') {
    handleError("Username or password is empty");
    return false;
  }

  sendAjax('POST', $("#loginForm").attr("action"), $("#loginForm").serialize(), redirect);

  return false;
};

// checks and posts signup data to server
var handleSignup = function handleSignup(e) {
  e.preventDefault();

  if ($("#user").val() == '' || $("#pass").val() == '' || $("pass2").val() == '') {
    handleError("All fields are required");
    return false;
  }

  if ($("#pass").val() !== $("#pass2").val()) {
    handleError("Passwords do not match");
    return false;
  }

  sendAjax('POST', $("#signupForm").attr("action"), $("#signupForm").serialize(), redirect);

  return false;
};

// builds the login form
var LoginWindow = function LoginWindow(props) {
  return React.createElement(
    "form",
    { id: "loginForm", name: "loginForm",
      onSubmit: handleLogin,
      action: "/login",
      method: "POST",
      className: "mainForm"
    },
    React.createElement(
      "label",
      { htmlFor: "username" },
      "Username: "
    ),
    React.createElement("input", { id: "user", type: "text", name: "username", maxLength: "15", placeholder: "username" }),
    React.createElement(
      "label",
      { htmlFor: "pass" },
      "Password: "
    ),
    React.createElement("input", { id: "pass", type: "password", name: "pass", placeholder: "password" }),
    React.createElement("input", { type: "hidden", name: "_csrf", value: props.csrf }),
    React.createElement("input", { className: "formSubmit", type: "submit", value: "Access" })
  );
};

// builds the signup form
var SignupWindow = function SignupWindow(props) {
  return React.createElement(
    "form",
    { id: "signupForm",
      name: "signupForm",
      onSubmit: handleSignup,
      action: "/signup",
      method: "POST",
      className: "mainForm"
    },
    React.createElement(
      "label",
      { htmlFor: "username" },
      "Username: "
    ),
    React.createElement("input", { id: "user", type: "text", name: "username", maxLength: "15", placeholder: "username" }),
    React.createElement(
      "label",
      { htmlFor: "pass" },
      "Password: "
    ),
    React.createElement("input", { id: "pass", type: "password", name: "pass", placeholder: "password" }),
    React.createElement(
      "label",
      { htmlFor: "pass2" },
      "Password: "
    ),
    React.createElement("input", { id: "pass2", type: "password", name: "pass2", placeholder: "retype password" }),
    React.createElement("input", { type: "hidden", name: "_csrf", value: props.csrf }),
    React.createElement("input", { className: "formSubmit", type: "submit", value: "Create" })
  );
};

// react call to display login form
var createLoginWindow = function createLoginWindow(csrf) {
  $("#mainMessage").text("Log in");
  ReactDOM.render(React.createElement(LoginWindow, { csrf: csrf }), document.querySelector("#content"));
};

// react call to display signup form
var createSignupWindow = function createSignupWindow(csrf) {
  $("#mainMessage").text("Regester");
  ReactDOM.render(React.createElement(SignupWindow, { csrf: csrf }), document.querySelector("#content"));
};

// initialize setup data
var setup = function setup(csrf) {
  // setup canvas
  canvas[0] = document.querySelector('#canvasBack');
  ctx[0] = canvas[0].getContext('2d');

  // reduce music volume
  openSong.volume = 0.2;

  // setup buttons
  var loginButton = document.querySelector("#loginButton");
  var signupButton = document.querySelector("#signupButton");

  // actions for the signup button
  signupButton.addEventListener("click", function (e) {
    e.preventDefault();
    createSignupWindow(csrf);
    return false;
  });

  // actions for the login button
  loginButton.addEventListener("click", function (e) {
    e.preventDefault();
    createLoginWindow(csrf);
    return false;
  });

  loginButton.focus();

  //Begin update loop
  requestAnimationFrame(update);

  createLoginWindow(csrf); //default view
};

// get a csrf token
var getToken = function getToken() {
  sendAjax('GET', '/getToken', null, function (result) {
    setup(result.csrfToken);
  });
};

$(document).ready(function () {
  getToken();
});

// auto pause song
window.onblur = function () {
  openSong.pause();
};

// auto resume song
window.onfocus = function () {
  openSong.play();
};
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

// main site update loop
var update = function update() {

  //Maintain update loop
  requestAnimationFrame(update);

  //Set current time
  var now = new Date().getTime();

  //Update runs here
  if (now - lastExecution > 1000 / fps) {

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

var paused = false;

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

//Turn mods into an array
var modsList = new Array();

var openSong = document.getElementById("openSong");
