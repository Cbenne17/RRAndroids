
"use strict";

var app = app || {};

//HANDLES VIDEO CONTENT
app.Vid = (function(){
	
	function Vid(){
		
		//SETUP ALL CONNECTIONS
		this.vid = document.getElementById("video1"); 
		this.videoPos = document.getElementById("videoPos");
		this.vid2 = document.getElementById("video2"); 
		this.videoPos2 = document.getElementById("videoPos2");
		this.vid3 = document.getElementById("video3"); 
		this.videoPos3 = document.getElementById("videoPos3");
		this.vid4 = document.getElementById("video4"); 
		this.videoPos4 = document.getElementById("videoPos4");
		this.vid5 = document.getElementById("video5"); 
		this.videoPos5 = document.getElementById("videoPos5");
		
		
		this.border = document.getElementById("border");
		this.bar = document.getElementById("bar");
		this.bar2 = document.getElementById("smallBar1");
		this.bar3 = document.getElementById("smallBar2");
		this.canvasEX = document.getElementById("trueTop");
	}
	
	
	//A HANDFUL OF FUCNTIONS TO PLAY, PAUSE, STOP, AND RELOCATE VIDEO CONTENT
	
	Vid.prototype.start = function(){
		this.bar.style.zIndex = 3;
		this.videoPos.style.zIndex = 2;
		this.vid.play();
	};
	
	Vid.prototype.end = function(){
		this.bar.style.zIndex = -3;
		this.videoPos.style.zIndex = -1;
		this.vid.pause();
	};
	
	Vid.prototype.rewind = function(){
		app.main.finished1 = false;
		app.main.finished2 = false;
		app.main.finished3 = false;
		app.main.finished4 = false;
		app.main.finished5 = false;
		this.vid.currentTime = 0;
		this.vid2.currentTime = 0;
		this.vid3.currentTime = 0;
		this.vid4.currentTime = 0;
		this.vid5.currentTime = 0;
	};
	
	
	Vid.prototype.check1 = function(){
		if(this.vid.currentTime < this.vid.duration && !this.vid.paused){
			app.main.finished1 = false;
		} else if(this.vid.currentTime == this.vid.duration) {
			app.main.finished1 = true;
			app.main.sceneCounter = 0;
		}
	};
	
	Vid.prototype.check2 = function(){
		if(this.vid2.currentTime < this.vid2.duration && !this.vid2.paused){
			app.main.finished2 = false;
		} else if(this.vid2.currentTime == this.vid2.duration) {
			app.main.finished2 = true;
			app.main.sceneCounter = 0;
		}
	};
	
	Vid.prototype.check3 = function(){
		if(this.vid3.currentTime < this.vid3.duration && !this.vid3.paused){
			app.main.finished3 = false;
		} else if(this.vid3.currentTime == this.vid3.duration) {
			app.main.finished3 = true;
			app.main.sceneCounter = 0;
		}
	};
	
	Vid.prototype.check4 = function(){
		if(this.vid4.currentTime < this.vid4.duration && !this.vid4.paused){
			app.main.finished4 = false;
		} else if(this.vid4.currentTime == this.vid4.duration) {
			app.main.finished4 = true;
			app.main.sceneCounter = 0;
		}
	};
	
	Vid.prototype.check5 = function(){
		if(this.vid5.currentTime < this.vid5.duration - 2 && !this.vid5.paused){
			app.main.finished5 = false;
			app.main.vid5Run = true;
			app.main.drawHUD2(app.main.ctx3);
		} else if(this.vid5.currentTime == this.vid5.duration) {
			app.main.finished5 = true;
			app.main.vid5Run = false;
			app.main.drawHUD2(app.main.ctx3);
			app.main.sceneCounter = 0;
			upVidTimer = 0;
		}
	};
	
	Vid.prototype.rewind5 = function(){
		this.vid5.currentTime = 0;
	};
	
	Vid.prototype.startE = function(){
		this.videoPos2.style.zIndex = 3;
		this.vid2.play();
	};
	
	Vid.prototype.endE = function(){
		this.videoPos2.style.zIndex = -2;
		this.vid2.pause();
	};
	
	Vid.prototype.startO = function(){
		this.canvasEX.style.zIndex = -3;
		this.bar2.style.zIndex = 3;
		this.bar3.style.zIndex = 3;
		this.border.style.zIndex = 4;
		this.videoPos3.style.zIndex = 3;
		this.vid3.play();
	};
	
	Vid.prototype.pauseU = function(){
		this.vid5.pause();
	};
	
	Vid.prototype.pauseS = function(){
		this.vid4.pause();
	};
	
	Vid.prototype.pauseO = function(){
		this.vid3.pause();
	};
	
	Vid.prototype.pauseE = function(){
		this.vid2.pause();
	};
	
	Vid.prototype.pause = function(){
		this.vid.pause();
	};
	
	Vid.prototype.endO = function(){
		this.bar2.style.zIndex = -3;
		this.bar3.style.zIndex = -3;
		this.videoPos3.style.zIndex = -2;
		this.border.style.zIndex = -3;
		this.vid3.pause();
	};
	
	Vid.prototype.startS = function(){
		this.videoPos4.style.zIndex = 5;
		this.vid4.play();
	};
	
	Vid.prototype.endS = function(){
		this.videoPos4.style.zIndex = -2;
		this.vid4.pause();
	};
	
	Vid.prototype.startU = function(){
		this.videoPos5.style.zIndex = 5;
		app.main.vid5Run = true;
		app.main.drawHUD2(app.main.ctx3);
		this.vid5.play();
	};
	
	Vid.prototype.endU = function(){
		this.videoPos5.style.zIndex = -2;
		app.main.vid5Run = false;
		app.main.drawHUD2(app.main.ctx3);
		this.vid5.pause();
	};
	
	
	return Vid; 
})(); //end IIFE