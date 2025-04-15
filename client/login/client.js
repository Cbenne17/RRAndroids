// checks and posts login data to server
const handleLogin = (e) => {
  e.preventDefault();
  if($("#user").val() == '' || $("#pass").val() == '') {
    handleError("Username or password is empty");
	return false;
  }
  
  sendAjax('POST', $("#loginForm").attr("action"), $("#loginForm").serialize(), redirect);
  
  return false;
};

// checks and posts signup data to server
const handleSignup = (e) => {
  e.preventDefault();
  
  if($("#user").val() == '' || $("#pass").val() == '' || $("pass2").val() == '') {
    handleError("All fields are required");
	return false;
  }
  
  if($("#pass").val() !== $("#pass2").val()) {
    handleError("Passwords do not match");
	return false;
  } 

  sendAjax('POST', $("#signupForm").attr("action"), $("#signupForm").serialize(), redirect);

  return false;
};  

// builds the login form
const LoginWindow = (props) => {
  return (
  <form id="loginForm" name="loginForm"
    onSubmit={handleLogin}
    action="/login"
    method="POST"
    className="mainForm"
   >
   <label htmlFor="username">Username: </label>
   <input id="user" type="text" name="username" maxLength="15" placeholder="username"/>
   <label htmlFor="pass">Password: </label>
   <input id="pass" type="password" name="pass" placeholder="password"/>
   <input type="hidden" name="_csrf" value={props.csrf}/>
   <input className="formSubmit" type="submit" value="Access" />
  
  </form>
  );
};

// builds the signup form
const SignupWindow = (props) => {
  return (
    <form id="signupForm"
	  name="signupForm"
	  onSubmit={handleSignup}
	  action="/signup"
	  method="POST"
	  className="mainForm"
	>
	  <label htmlFor="username">Username: </label>
	  <input id="user" type="text" name="username" maxLength="15" placeholder="username"/>
	  <label htmlFor="pass">Password: </label>
	  <input id="pass" type="password" name="pass" placeholder="password"/>
	  <label htmlFor="pass2">Password: </label>
	  <input id="pass2" type="password" name="pass2" placeholder="retype password"/>
	  <input type="hidden" name="_csrf" value={props.csrf} />
	  <input className="formSubmit" type="submit" value="Create" />
	
	</form>
  );
};

// react call to display login form
const createLoginWindow = (csrf) => {
  $("#mainMessage").text("Log in");
  ReactDOM.render(
    <LoginWindow csrf={csrf} />,
	document.querySelector("#content")
  );
};

// react call to display signup form
const createSignupWindow = (csrf) => {
  $("#mainMessage").text("Regester");
  ReactDOM.render(
    <SignupWindow csrf={csrf} />,
	document.querySelector("#content")
  );
};

// initialize setup data
const setup = (csrf) => {
  // setup canvas
  canvas[0] = document.querySelector('#canvasBack');
  ctx[0] = canvas[0].getContext('2d'); 
  
  // reduce music volume
  openSong.volume = 0.2;
	
  // setup buttons
  const loginButton = document.querySelector("#loginButton");
  const signupButton = document.querySelector("#signupButton");
  
  // actions for the signup button
  signupButton.addEventListener("click", (e) => {
    e.preventDefault();
	createSignupWindow(csrf);
	return false;
  });
  
  // actions for the login button
  loginButton.addEventListener("click", (e) => {
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
const getToken = () => {
  sendAjax('GET', '/getToken', null, (result) => {
    setup(result.csrfToken);
  });
};

$(document).ready(function() {
  getToken();
});

// auto pause song
window.onblur = function(){
	openSong.pause(); 
};

// auto resume song
window.onfocus = function(){
	openSong.play(); 
};
  