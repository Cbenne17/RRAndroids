
"use strict";

var app = app || {};


app.Android17 = (function(){
	
	function Android17(start,opponent){
		
		//Core Stats
		this.health = 1000000;
		this.endurance = 1000000;
		this.energy = 1000000;
		this.stamina = -280000;
		
		//STATE VARIABLES
		this.right = false;
		this.left = true;
		this.movingLeft = false;
		this.movingRight = false;
		this.reverse = true;
		this.changeDir = false;
		this.air = false;
		this.ground = false;
		this.decend = false;
		this.flying = false;
		this.fight = false;
		this.intensify = false;
		this.attacking = false;
		this.taunting = false;
		this.basic = false;
		this.hard = false;
		this.blocking = false;
		this.blasting = false;
		this.powerMove = false;
		this.blastRelease = false;
		this.blasted = false;
		this.exhausted = false;
		this.hit = false;
		this.hardHit = false;
		this.punching = false;
		this.punched = false;
		this.fallingKick = false;
		this.arms = false;
		this.kicking = false;
		this.slow = false;
		this.fast = false;
		this.up = false;
		this.down = false;
		this.superSpeed = false;
		this.vanish = false; //change back
		this.aboveBuilding = false;
		this.byBuilding = false;
		this.aboveSky = false;
		this.appear = false;
		this.stun = true; //change back
		this.end = false;
		this.dead = false;
		this.test = false;
		this.tutor = false;
		this.gone = false;
		
		this.backHit = false;
		this.backHit = 0;
		this.backHitTest = false;
		
		this.headbutted = false;
		
		this.mood = getRandom(0,1);
		
		this.fallPrepTele = false;
		
		this.startFallKick = false;
		
		this.protectShield = false;
		
		this.fielding = false;
		
		this.voiceStop = false;
		this.voiceChance = 0;
		
		this.lookUp = false;
		this.lookDown = false;
		
		this.farLeft = false;
		this.farRight = false;
		
		this.fieldOn = false;
		this.fieldTimer = 0;
		this.hoverFix = false;
		
		this.teleDelay = 0;
		this.delayingTele = false;
		this.teleDelayTime = 0;
		
		this.fallingKickCooldown = 0;
		
		this.swoosh = false;
		this.swooshTimer = 0;
		
		this.cinematic = false;
		this.cine = 0;
		
		this.hurtBlasting = false;
		this.hurtBTimer = 0;
		this.nukeCounter = 0;
		this.hurtBTrigger = 0;
		this.hurtBRandom = Math.round(getRandom(250,400));
		
		this.quickHurt = false;
		
		this.fallTimer = 0;
		this.fallHit = false;
		
		//AI
		this.active = false;
		this.city = false;
		this.wentCity = false;
		this.evasion = false;
		this.wentEvasion = false;
		this.encounter = false;
		this.wentEncounter = false;
		this.combo = false;
		this.decision = .9;
		this.decisionTimer = 0;
		this.ouchCounter = 0;
		this.hurtStun = 0;
		
		

		this.selectBlast = Math.random();
		this.fastBlast = false;
		
		this.aggressive = true;
		this.defensive = false;
		this.dodge = false;
		this.defBreak = 0;
		this.aiCounter = 0;
		
		//Timers
		this.counter = 0;
		this.stunCounter = 0;
		this.speedCounter = 0;
		this.exhaustedCounter = 0;
		this.randomEffect = 0;
		this.flySoundDelay = 0;
		this.smoothTimer = 0;
		this.tauntPick = getRandom(10, 16);
		
		
		// CONSTANTS
		this.BUILDING = new Victor(650,270);
		this.GROUND = new Victor(0,620);
		this.SKY = new Victor(0,220);
		this.SKYTOP = new Victor(0,25);
		this.LEFTWALL = new Victor(0,0);
		this.RIGHTWALL = new Victor(950,0);
		this.MAX_STAMINA = 100;
		
		
		//VECTORS (Victors)
		this.attackSize = new Victor(30, 60);
		this.position = new Victor(start, this.GROUND.y);
		//this.position = new Victor(start, 400);
		this.attackPosition = new Victor(0, 0);
		this.hardAttackPosition = new Victor(0, 0);
		this.velocity = new Victor(0, 0);
		this.direction = new Victor(1, 0);
		this.accel = new Victor(2, 0);
		this.decel = new Victor(0, 0);
		this.jumpVelocity = new Victor(0,-15);
		this.jumpAccel = new Victor(0,-2.3);
		this.gravity = new Victor(0,1.7);
		this.size = new Victor(50, 100);
		this.positionLast = new Victor(this.position.x,this.position.y);
		
		
		// IMAGE SETUP 
		
		// ---- 17 IMAGES ------------------
		
		var image = new Image();
		image.src =  app.images17.stance;
		this.stance = image;
		
		image = new Image();
		image.src =  app.images17.stanceUp;
		this.stanceUp = image;
		
		image = new Image();
		image.src =  app.images17.stanceDown;
		this.stanceDown = image;
		
		image = new Image();
		image.src =  app.images17.slowFly;
		this.slowFly = image;
		
		image = new Image();
		image.src =  app.images17.fastFly;
		this.fastFly = image;
		
		image = new Image();
		image.src =  app.images17.flyUp;
		this.flyUp = image;
		
		image = new Image();
		image.src =  app.images17.flyUpUp;
		this.flyUpUp = image;
		
		image = new Image();
		image.src =  app.images17.flyUpDown;
		this.flyUpDown = image;
		
		image = new Image();
		image.src =  app.images17.flyDown;
		this.flyDown = image;
		
		image = new Image();
		image.src =  app.images17.reverse;
		this.moveReverse = image;
		
		image = new Image();
		image.src =  app.images17.leftPunch;
		this.leftPunch = image;
		
		image = new Image();
		image.src =  app.images17.rightPunch;
		this.rightPunch = image;
		
		image = new Image();
		image.src =  app.images17.punchPrep;
		this.punchPrep = image;
		
		image = new Image();
		image.src =  app.images17.hit1;
		this.hit1 = image;
		
		image = new Image();
		image.src =  app.images17.attackE;
		this.attackE = image;
		
		image = new Image();
		image.src =  app.images17.hardKick;
		this.hardKick = image;
		
		image = new Image();
		image.src =  app.images17.ground;
		this.ground17 = image;
		
		image = new Image();
		image.src =  app.images17.fallSide;
		this.fallSide = image;
		
		image = new Image();
		image.src =  app.images17.fallKick2;
		this.fallKick2 = image;
		
		image = new Image();
		image.src =  app.images17.hardKickPrep;
		this.hardKickPrep = image;
		
		image = new Image();
		image.src =  app.images17.hitHard;
		this.hitHard = image;
		
		image = new Image();
		image.src =  app.images17.kick;
		this.kick = image;
		
		image = new Image();
		image.src =  app.images17.kickPrep;
		this.kickPrep = image;
		
		image = new Image();
		image.src =  app.images17.blast;
		this.blast = image;
		
		image = new Image();
		image.src =  app.images17.block;
		this.block = image;
		
		image = new Image();
		image.src =  app.images17.fallKick;
		this.fallKick = image;
		
		image = new Image();
		image.src =  app.images17.fallKick2;
		this.fallKick2 = image;
		
		image = new Image();
		image.src =  app.images17.fallDown;
		this.fallDown = image;
		
		image = new Image();
		image.src =  app.images17.launch;
		this.launch = image;
		
		image = new Image();
		image.src =  app.images17.finger;
		this.finger = image;
		
		image = new Image();
		image.src =  app.images17.drop;
		this.drop = image;
		
		image = new Image();
		image.src =  app.images17.injured;
		this.injured = image;
		
		image = new Image();
		image.src =  app.images17.injuredUp;
		this.injuredUp = image;
		
		image = new Image();
		image.src =  app.images17.injured2;
		this.injured2 = image;
		
		image = new Image();
		image.src =  app.images17.injuredHit;
		this.injuredHit = image;

		image = new Image();
		image.src =  app.images17.injuredBlast;
		this.injuredBlast = image;
		
		image = new Image();
		image.src =  app.images17.injuredBlast2;
		this.injuredBlast2 = image;
		
		image = new Image();
		image.src =  app.images17.field1;
		this.field1 = image;
		
		image = new Image();
		image.src =  app.images17.special1;
		this.special1 = image;
		
		image = new Image();
		image.src =  app.images17.special2;
		this.special2 = image;
		
		image = new Image();
		image.src =  app.images17.field1;
		this.useField1 = image;
		
		
		//Attack IMAGES
		
		image = new Image();
		image.src =  app.attack.blastCharge1;
		this.blastCharge1 = image;
		
		image = new Image();
		image.src =  app.attack.tele4;
		this.teleport = image;
		
		image = new Image();
		image.src =  app.attack.tele4Thin;
		this.teleportThin = image;
		
		image = new Image();
		image.src =  app.attack.nuke1;
		this.nuke1 = image;
		
		image = new Image();
		image.src =  app.attack.nuke2;
		this.nuke2 = image;
		
		image = new Image();
		image.src =  app.attack.nuke3;
		this.nuke3 = image;
		
		image = new Image();
		image.src =  app.attack.nuke4;
		this.nuke4 = image;
		
		image = new Image();
		image.src =  app.attack.nuke5;
		this.nuke5 = image;
		
		image = new Image();
		image.src =  app.attack.nuke6;
		this.nuke6 = image;
		
		
		image = new Image();
		image.src =  app.attack.field1;
		this.field1 = image;
		
		image = new Image();
		image.src =  app.attack.field2;
		this.field2 = image;
		
		image = new Image();
		image.src =  app.attack.field3;
		this.field3 = image;
		
		image = new Image();
		image.src =  app.attack.field4;
		this.field4 = image;
		
		image = new Image();
		image.src =  app.attack.field5;
		this.field5 = image;
		
		image = new Image();
		image.src =  app.attack.field6;
		this.field6 = image;
		
		image = new Image();
		image.src =  app.attack.field7;
		this.field7 = image;
		
		image = new Image();
		image.src =  app.attack.field8;
		this.field8 = image;
		
		image = new Image();
		image.src =  app.attack.fieldMain;
		this.fieldMain = image;
		
		image = new Image();
		image.src =  app.attack.PBC1;
		this.PBC1 = image;
		
		image = new Image();
		image.src =  app.attack.PBC2;
		this.PBC2 = image;
		
		image = new Image();
		image.src =  app.attack.PBC3;
		this.PBC3 = image;
		
		image = new Image();
		image.src =  app.attack.PBC4;
		this.PBC4 = image;
		
		image = new Image();
		image.src =  app.attack.PBC5;
		this.PBC5 = image;
		
		image = new Image();
		image.src =  app.attack.PBC6;
		this.PBC6 = image;
		
		
	}
	
	//FUNCTION TO UPDATE MANY VALUES
	Android17.prototype.update = function(){
		
		if(app.main.scene == false && app.main.vegeta.gero == false){
		//17 State changer
		if(this.decision >= .7){
			app.main.sound.pauseBackground();
			this.evasion = true;
			this.wentEvasion = true;
			this.active = false;
			this.wentCity = false;
			this.wentEncounter = false;
		} else if(this.decision >= .3 && this.decision < .7){
			this.encounter = true;
			if(this.wentEncounter == false){
				app.main.sound.pauseBackground();
				if(app.main.android18.call17 == false){
					app.main.sound.playTaunt5(Math.round(getRandom(0,3)));
				} else {
					app.main.android18.call17 = false;
				}
				this.wentEncounter = true;
			}
			this.wentCity = false;
			this.wentEvasion = false;
			this.active = true;
		} else if(this.decision >= 0 && this.decision < .3 && app.main.vegeta.piccolo != true && app.main.vegeta.gero != true){
			this.active = false;
			if(this.wentCity == false){
				app.main.sound.playTaunt5(Math.round(getRandom(4,7)));
				app.main.sound.playSpecialReaction3(19);
				this.wentCity = true;
			}
			//app.main.sound.playBackground(1);
			this.city = true;
			this.wentEncounter = false;
			this.wentEvasion = false;

		} else if(this.decision >= 0 && this.decision < .3 && (app.main.vegeta.piccolo == true || app.main.vegeta.gero == true)){
			this.evasion = true;
			this.wentEvasion = true;
			this.active = false;
			this.wentCity = false;
			this.wentEncounter = false;
			app.main.sound.pauseBackground();

		}
		}
		
		//console.log("WENT CITY :" + this.wentCity + " WENT EVASION: " + this.wentEvasion + " WENT ENCOUNTER: " + this.wentEncounter);
		
		//console.log("CITY :" + this.city + " EVASION: " + this.evasion + " ENCOUNTER: " + this.encounter);
		
		if(this.city == true){
			this.superSpeed = true;
			if(this.vanish == true){
				this.gone = true;
			}
		}
	
		this.hurtBTrigger++;
		
		if(app.main.vegeta.gohan == true && app.main.vegeta.superForm == true && app.main.scene == false && this.hurtBTrigger > this.hurtBRandom){
			if(app.main.vegeta.position.y < 500){
				this.hurtBlasting = true;
				//this.selectBlast = Math.random();
			} else {
				this.fastBlast = true;
				//this.selectBlast = Math.random();
			}
			this.hurtBTimer = 0;
			this.hurtBTrigger = 0;
			this.hurtBRandom = Math.round(getRandom(250,400));
		}
		
		if(app.main.battle == 3 && app.main.scene == false){
			this.velocity.x = 0;
			this.decel.x = 0;
			//this.position
		}
		
		if((this.powerMove == true) && this.air == true){
			this.hover = true;
			if(this.hoverFix == false){
				this.jumpVelocity.y = 0;
				this.hoverFix = true;
			}
		} else {
			this.hoverFix = false;
		}
		
		//Look around
		if(this.position.y < app.main.vegeta.position.y - 150){
			this.lookDown = true;
		} else if(this.position.y > app.main.vegeta.position.y + 150){
			this.lookUp = true;
		} else {
			this.lookUp = false;
			this.lookDown = false;
		}
		
		/* this.decisionTimer++;
		console.log("DECISIONS DECISIONS DECISIONS: " + this.decision);
		if((this.decisionTimer > 100 && this.city == false) || (this.decisionTimer > 200 && this.city == true)){
			this.decision = Math.random();
			
			if(this.city == true && this.decision >= .3) {
				this.superSpeed = true;
				this.gone = false;
				this.city = false;
			}
			
			if(this.evasion == true && this.decision < .6){
				this.evasion = false;
			}
			
			if(this.encounter == true && (this.decision >= .6 || this.decision < .3)){
				this.encounter = false;
			}
			
			/* if(this.wentCity == true && this.wentEncounter == true && this.wentEvasion == true){
				this.wentCity = false;
				this.wentEvasion = false;
				this.wentEncounter = false;
			}
			this.decisionTimer = 0;
		} */
		
		
		this.flySoundDelay++;
		
		
		//WALL POSITIONING
		if(this.position.x < this.LEFTWALL.x + 30 && (hardAttackHitTest(app.main.android17, app.main.vegeta) != true) && (hitTest(app.main.android17, app.main.vegeta) != true) && this.stun == false && this.attacking == false && this.blasting == false && this.blocking == false){
			this.farLeft = true;
			this.farRight = false;
			this.right = true;
			this.left = false;
		} else if(this.position.x > this.RIGHTWALL.x - 30 && (hardAttackHitTest(app.main.android17, app.main.vegeta) != true) && (hitTest(app.main.android17, app.main.vegeta) != true) && this.stun == false && this.attacking == false && this.blasting == false && this.blocking == false){
			this.farRight = true;
			this.farleft = false;
			this.right = false;
			this.left = true;
		} else {
			this.farLeft = false;
			this.farRight = false;
		}
		
	
		//CREATE BOUNDRIES
		if(this.ground == false && ((this.position.y > this.GROUND.y && (this.jumpVelocity.y < 11 || this.up == true)) || (this.position.y > this.GROUND.y - 35 && this.jumpVelocity.y > 10 && this.up == false))){
			this.prevX = this.position.x;
			this.position.copyY(this.GROUND);
			//this.jumpVelocity = new Victor(0,-15);
			this.velocity.divideScalar(3);
			this.ground = true;
			this.air = false;
			this.decend = false;
			if((this.end == true && this.vanish == false) || (this.jumpVelocity.y > 20 && this.hardHit == true)){
				app.main.environment.shake = true;
				this.fallDust = true;
				if(this.dead == false){
					app.main.sound.playSpecialReaction3(2);
				}
			} else if(this.vanish == false && this.superSpeed == false && this.end == false && this.hover == false){
				this.landDust = true;
				app.main.sound.playSpecialReaction3(3);
			}
		} 
		if(this.ground == false && ((this.position.y > this.BUILDING.y && (this.jumpVelocity.y < 11 || this.up == true)) || (this.position.y > this.BUILDING.y - 35 && this.jumpVelocity.y > 10 && this.up == false)) && this.aboveBuilding == true && this.down == false && this.aboveBuilding == true && this.down == false){
			this.position.copyY(this.BUILDING);
			//this.jumpVelocity = new Victor(0,-15);
			this.velocity.divideScalar(3);
			this.ground = true;
			this.air = false;
			this.decend = false;
			if((this.end == true && this.vanish == false) || (this.jumpVelocity.y > 20 && this.hardHit == true)){
				app.main.environment.shake = true;
				if(this.dead == false){
					app.main.sound.playSpecialReaction3(2);
				}
			} else if(this.vanish == false && this.superSpeed == false && this.end == false && this.hover == false){
				app.main.sound.playSpecialReaction3(3);
			}
		} 
		if(this.position.y < this.SKY.y){
			this.aboveSky = true;
		} else {
			this.aboveSky = false;
		}
		if(this.position.y < this.SKYTOP.y){
			this.position.copyY(this.SKYTOP);
			if(this.stun == false){
				this.jumpVelocity = new Victor(0,0);
			}
		}
		if(this.position.x < this.LEFTWALL.x){
			this.position.copyX(this.LEFTWALL);
			this.decel = new Victor(0,0);
			this.velocity = new Victor(0,0);
		} 
		if(this.position.x > this.RIGHTWALL.x){
			this.position.copyX(this.RIGHTWALL);
			this.decel = new Victor(0,0);
			this.velocity = new Victor(0,0);
		}
		if(this.position.y < this.BUILDING.y && this.position.x > this.BUILDING.x && this.down == false){
			this.aboveBuilding = true;
		}
		if((this.position.x < this.BUILDING.x && this.position.y < this.GROUND.y) || (this.position.y > this.BUILDING.y && this.position.y < this.GROUND.y)) {
			this.air = true;
			this.aboveBuilding = false;
		}
		if(app.main.vegeta.air == true && this.vanish == true){ //bug fix
			this.flying = true;
			this.air = true;
			this.jumpVelocity.y = 0;
		}
		
		//GROUND CHECK
		if(this.ground == true) {
			if(this.stun == false && this.hardhit == false){
				this.jumpVelocity = new Victor(0,0);
			}
			if(this.up == true){
				if(app.main.BA == true){
					this.jumpAccel = new Victor(0,-3.5);
					this.jumpVelocity = new Victor(0,-25);
				} else {
					this.jumpAccel = new Victor(0,-2.3);
					this.jumpVelocity = new Victor(0,-15);
				}
			}
			
			if(this.air == true){
				this.prevX = this.position.x;
				if(this.aboveBuilding == false){
					this.flyDust = true;
				}
			}
		}
		
		if(this.teleDelay == this.teleDelayTime){
			this.delayingTele = false;
		}
		
		
		if(this.superSpeed == true && this.protectShield == false && this.fieldOn == false){
			this.blocking = false;
		}
		
		/* if(this.jumpVelocity.y > 10 && this.up == true && this.stun == false && this.end == false && this.hardHit == false && this.fight == false && this.blasting == false && this.superSpeed == false){
			this.jumpVelocity.y = -20;
		} */
		
		/* if(this.fieldOn == true){
			this.attacking = false;
			this.fight = false;
			this.blasting = false;
		} */
		
		if(this.ground == true && this.hardHit == true){
			this.jumpVelocity.y = 0;
		}
		
		if(app.main.vegeta.vanish == true){
			if(this.velocity.x < 0){
				this.velocity.x += .1;
			} else if(this.velocity.x > 0){
				this.velocity.x -= .1;
			} else {
				this.velocity.x = 0;
			}
		}
		
		if(this.ground == true){
			 this.startFallKick = false;
			 if(this.fallingKick == true){
				 //this.stun = false;
				 this.fallingKick = false;
				 //this.stun = false;
				 app.main.aiChoice4 = Math.random();
			 }
		}
		
		if(this.hardHit == true || this.hit == true){
			if(this.fallingKick == true){
				app.main.aiChoice4 = Math.random();
				//this.stun = false;
			}
			this.startFallKick = false;
			this.fallingKick = false;
		}
		
		if(this.air == false || this.up == true){
			this.fallHit = false;
		}
		
		/* if(this.position.y > app.main.vegeta.position.y + 75){
			this.startFallKick = false;
			this.fallingKick = false;
				if(this.fallingKick == true){
					app.main.aiChoice4 = Math.random();
				}
		} */
		
		if((this.startFallKick == true || this.fallingKick == true) && this.jumpVelocity.y < 20){
			this.jumpVelocity.y = 20;
		}
		
		if(this.position.y < app.main.vegeta.position.y && this.jumpVelocity.y < 0 && this.air == true && this.taunting == false && this.blasting == false && this.stun == false && app.main.scene == false){
			this.jumpVelocity.y = 0;
		}
		
		/* if(this.up == true && (this.startFallKick == true || this.fallingKick == true)){
			this.startFallKick = false;
			this.fallingKick = false
			app.main.aiChoice4 = Math.random();
			this.stun = false;
		} */
		
		if(this.fallingKick == true && this.fallHit == false && (attackHitTest(app.main.android17,app.main.vegeta))){
			this.startFallKick = false;
			this.fallingKick = false;
			app.main.aiChoice4 = Math.random();
			//this.stun = false;
		}
		
		if(this.startFallKick == true || this.fallingKick == true){
			this.hover = false;
			this.flying = false;
		}
		
		if(this.swoosh == false && this.fallingKick == false && this.reverse == false && this.hit == false && this.stun == false && (this.velocity.x > 19 || this.velocity.x < -19)){
			this.swooshTimer++;
			if(this.swooshTimer > 6 && this.fallingKick == false){
				app.main.sound.playSpecialReaction3(74);
				this.swoosh = true;
			}
		} else if(this.swoosh == true && (this.velocity.x < 5 && this.velocity.x > -5)){
			this.swoosh = false;
			this.swooshTimer = 0;
		}
		
		//Fall kick assist
		if(this.fallingKick == true && hitTest(app.main.android17,app.main.vegeta) != true && ((this.position.x > app.main.vegeta.position.x - 200) && (this.position.x < app.main.vegeta.position.x + 200)) && this.air == true && app.main.vegeta.superSpeed == false){
			if(this.position.x < app.main.vegeta.position.x + 10){
				this.velocity.x += 2;
			} else if(this.position.x > app.main.vegeta.position.x + 10){
				this.velocity.x -= 2;
			} else {
				this.velocity.x = 0;
				this.decel.x = 0;
			}
			this.decel = this.velocity.clone();
		} else if(this.fallingKick == true && hitTest(app.main.android17,app.main.vegeta) == true && this.up == false){
			this.decel.x = 0;
			this.position.x == app.main.vegeta.position.x;
			this.position.y == app.main.vegeta.position.y;
		}
		
		
		//Ground recovery
		if(this.punched == true && this.hardHit == true && this.stun == true && (this.position.y > this.BUILDING.y && this.aboveBuilding == true)){
			this.position.copyY(this.BUILDING);
			this.air = false;
		}
		
		if(this.punched == true && this.hardHit == true && this.stun == true && (this.position.y > this.GROUND.y && this.aboveBuilding == false)){
			this.position.copyY(this.GROUND);
			this.air = false;
		}
		
		//console.log(this.fallingKick + " FALL");
		//console.log(this.startFallKick + " Start");
		
		
		//Field ON
		if(this.fieldOn == true){
		
		this.energy -= .45;
		
		this.velocity.x = 0;
		this.decel.x = 0;
			
		if(this.position.y < app.main.vegeta.position.y + 150 && this.position.y > app.main.vegeta.position.y - 150){
		if(this.position.x < app.main.vegeta.position.x + 150 && this.position.x > app.main.vegeta.position.x - 150){
			if(app.main.vegeta.left == true){
				if(this.behind == true && this.position.x > app.main.vegeta.position.x){
					app.main.vegeta.velocity.x = -30;
				} else {
					app.main.vegeta.velocity.x = 30;
				}
				if(app.main.android17.active == true){
					app.main.vegeta.focus17 = false;
				} else {
					app.main.aiChoice1 = 0;
					app.main.vegeta.defensive = true;
					app.main.vegeta.aggressive = false;
					app.main.aiReason = 3;
				}
			} else {
				if(this.behind == true && this.position.x < app.main.vegeta.position.x){
					app.main.vegeta.velocity.x = 30;
				} else {
					app.main.vegeta.velocity.x = -30;
				}
				if(app.main.android17.active == true){
					app.main.vegeta.focus17 = false;
				} else {
					app.main.aiChoice1 = 0;
					app.main.vegeta.defensive = true;
					app.main.vegeta.aggressive = false;
					app.main.aiReason = 3;
				}
			}
		}
		}
		}
		
		//Endurance recovery
		if(this.endurance < 100 && this.stun == false && this.end == false){
			this.endurance += .2;
		}
		//Energy recovery (NO RECOVER ENERGY)
		if(this.energy < 100 && this.stun == false && this.end == false){
			this.energy += .1;
		}
		//Stamina recovery
		if(this.stamina > 28 && (this.stun == false && this.end == false && this.blocking == false) || this.exhausted == true){
			this.stamina -= .2;
		}
		//console.log("attacking = " + this.attacking);
		//console.log("fighting = " + this.fight);
		//console.log("stunned = " + this.stun); //reverse
		//console.log("AI = " + app.main.aiChoice4);
		//console.log(app.main.detectedHard3);
		
		//Exhaustion 
		/*
		if(this.exhausted == true){
			this.exhaustedCounter++;
			if(this.exhaustedCounter > 2000){ //aiChoice4
				this.exhausted = false;
			}
		}
		if(this.exhausted == false){
			//this.exhaustedCounter = 0;
		}*/
		/*
		//Death location
		if(this.end != true){
			app.main.environment.deathLocationVegeta.x = this.position.x;
			app.main.environment.deathLocationVegeta.y = this.position.y;
		}
		*/
		//AI FIXES
		if(app.main.vegeta.attacking == false && this.blocking == true && this.fieldOn == false){
			this.exhaustedCounter++;
			if(this.exhaustedCounter > 2){
				this.blocking = false;
				app.main.aiChoice5 = 10;
				this.exhaustedCounter = 0;
			}
		}
		
		//hover smooth
		if(this.hover == true){
			this.smoothTimer++;
			if(this.smoothTimer < 4){
				this.position.y -= 1.5;
			} else if(this.smoothTimer < 8){
				this.position.y += 1.5;
			} else {
				this.smoothTimer = 0;
			}
		} else {
			this.smoothTimer = 0;
		}
		
		//blast close push
		if(hardAttackHitTest(app.main.android17, app.main.vegeta) == true && app.main.vegeta.blasting == true && this.behind == false) {
			if(app.main.vegeta.left == true){
				this.velocity.x -= 2;
			} else {
			    this.velocity.x -= 2;
			}
		}
		
		if(this.superSpeed == true && this.position.y < this.GROUND.y){
			this.air = true;
		}
		
		//HOVER
		if(app.main.scene == false && app.main.gameState != app.main.GAME_STATE.TUTORIAL){
		if(this.air == true && this.down == false && this.position.y > this.SKYTOP.y && this.up == false && this.hit == false && this.hardHit == false && this.end == false && app.main.vegeta.end == false && ((hardAttackHitTest(app.main.android17,app.main.vegeta) && this.hardHit == false) || this.blasting == true || this.fieldOn == true || this.powerMove == true || this.taunting == true || (this.superSpeed == true && this.fallPrepTele == false) || this.blocking == true || this.attacking == true)){ //Hover
			this.hoverCounter++;
			this.hover = true;
			if(hardAttackHitTest(app.main.android17,app.main.vegeta)){
				if(this.hoverCounter < 5){
					this.flying = false;
				} else {
					this.flying = true;
					this.hoverCounter = 0;
				}
			} else {
				if(this.hoverCounter < 6){
					this.flying = false;
				} else {
					this.flying = true;
					this.hoverCounter = 0;
				}
			}
		} else {
			this.hover = false;
		}
		}
		if(app.main.scene == true && app.main.battle == 0 && this.hover == true){
			this.hoverCounter++;
				if(this.hoverCounter < 6){
					this.flying = false;
				} else {
					this.flying = true;
					this.hoverCounter = 0;
				}
		}
		
		
		
		if(this.attacking == false && this.stun == false && this.fight == false && this.taunting == false  && this.charging == false){
			if(this.aiCounter > 1){
				app.main.action2 = false;
			} else {
				this.aiCounter++;
			}
			//app.main.aiChoice = Math.random();
		}
		if(this.taunting == false){
			this.tauntPick = getRandom(10, 16);
		}
		
		if(this.hit == true || this.hardHit == true){
			if(this.blasting == true){
				app.main.aiChoice4 = Math.random();
				app.main.chance3 = Math.random();
			}
			this.blasting = false;
			this.powerMove = false;
			
			this.hurtBTrigger = 0; //Special
		}
		
		if(this.hit == true || this.hardHit == true || app.main.vegeta.blastRelease == true){
			app.main.dodgeChance2 = Math.random();
			if(this.blocking == false){
				app.main.aiChoice5 = Math.random();
			}
		}
		
		//Mute Voice
		if(this.hit == true && this.voiceStop == false){
			if(app.main.vegeta.gohan == true && app.main.vegeta.superForm == true){
				
			} else {
				app.main.sound.pauseVoice5();
			}
			app.main.sound.pauseEffect17();
			this.voiceStop = true;
		} else if(this.hit == false){
			this.voiceStop = false;
		}
		
		if(this.fieldOn == true){
			this.hover = true;
		}
		
		/* if(this.hover == true && this.flying == true && this.fieldOn == true){
			this.jumpVelocity = new Victor(0,-4);
		} */

		//Flight control
		if(this.flying == true && ((this.stun == false || this.fieldOn == true) && this.end == false || this.hover == true)){
			if((this.position.y == this.GROUND.y || this.position.y == this.BUILDING.y) && this.stun == false && this.hover == false && (app.main.scene == false || app.main.sceneNum == 5) && this.end == false && this.flySoundDelay > 10){
				app.main.sound.playSpecialReaction3(4);
				this.flySoundDelay = 0;
			}
			if(this.hover == true){
				this.jumpVelocity = new Victor(0,-4);
				this.jumpAccel = new Victor(0,-1);
			} else if(this.jumpVelocity.y > 0 && this.down == false){
				if(app.main.BA == true){
					this.jumpAccel = new Victor(0,-3.5);
					this.jumpVelocity = new Victor(0,-25);
				} else if(app.main.HM == true){
					this.jumpAccel = new Victor(0,-3.5);
				} else {
					this.jumpAccel = new Victor(0,-2.3);
					this.jumpVelocity = new Victor(0,-15);
				}
			}
			this.jumpVelocity.addY(this.jumpAccel);
			this.gravity.zero();
		} else if(this.decend == true){
			/* if(this.jumpVelocity.y < 10){
				this.jumpVelocity.y = 10;
			} */
			this.gravity = new Victor(0,5.5);
			this.velocity.multiplyScalar(1.3);
		} else {
			if(app.main.scene == false && this.tauting == false && this.hardHit == false && app.main.gameState != app.main.GAME_STATE.TUTORIAL){
					//this.gravity = new Victor(0,3);
					this.gravity = new Victor(0,1.7);
				} else {
					this.gravity = new Victor(0,1.7);
				}
		}
		
		if(this.air == true){
			this.ground = false;
			this.jumpVelocity.addY(this.gravity);
			this.position.addY(this.jumpVelocity);
		}
		
		if(this.hardHit == true && this.air == true){
			this.taunting = false;
			this.flying = false;
		} else if (this.hardHit == true && this.air == false && this.hit == false){
			this.stun = false;
			this.hardHit = false;
		}
		
		if(this.hit == true || this.hardHit == true){
			app.main.aiTaunting = false;
			app.main.aiCharging = false;
			if(this.blasting == true){
				app.main.aiChoice4 = Math.random();
				app.main.chance3 = Math.random();
			}
			if(this.powerMove == true){
				this.blasting = false;
				this.attacking = false
				this.intensify = false;
				this.powerMove = false;
				this.fight = false;
			}
			this.taunting = false;
			this.charging = false;
			this.intensify = false;
		}
		
		this.decelerate(); //DECEL
		
		
		if(this.velocity.x < .1 && this.velocity.x > -.1 && this.hit == false){
			this.velocity.zero();
		}
		
		
		//PUSH 
		if(app.main.vegeta.vanish == false && this.superSpeed == false && app.main.vegeta.superSpeed == false && app.main.gameState != app.main.GAME_STATE.TUTORIAL && app.main.battle != 3){
		if(hitTest(app.main.android17,app.main.vegeta) && this.behind == false){
			if(app.main.vegeta.left == true){
				this.position.x -= 10;
			} else {
				this.position.x += 10;
			}
		} else if(hitTest(app.main.android17,app.main.vegeta) && this.behind == true){
			if(app.main.vegeta.left == true){
				this.position.x += 10;
			} else {
				this.position.x -= 10;
			}
		}
		}
		
		if(app.main.battle == 3 && this.hardHit == true){
			this.ouchCounter++;
			if(this.ouchCounter < 2){
				app.main.sound.pauseVoice5();
				app.main.sound.pauseEffect17();
				app.main.sound.playTaunt5(Math.round(getRandom(9,11)));
			} else if(this.ouchCounter < 20){
				
			} else {
				this.hardHit = false;
				this.ouchCounter = 0;
			}
		}
		
		if(this.basic == true && attackHitTest(app.main.android17, app.main.vegeta) != true){
			app.main.sound.playBasicReaction3(Math.round(getRandom(61,63)));
		}
		
		//safety net hover
		if(this.jumpVelocity.y > 3 && this.end == false && this.dead == false && (this.powerMove == true || this.taunting == true || this.fieldOn == true)){
			this.jumpVelocity.y = -4;
		}
		
		//Mute Voice
		/* if(this.hit == true){
			app.main.sound.pauseVoice5();
		} */
		
		//Varible resets
		if(this.attacking == false && this.fight == false && this.superSpeed == false && this.blasting == false && this.powerMove == false && this.hit == false && this.hardHit == false && this.charging == false && this.taunting == false && this.stun == false && this.fieldOn == false && this.end == false){
			//app.main.detected = false;
			//app.main.detectedHard = false;
			//console.log("RESET");
			this.hard = false;
			//this.counter = 0;
			this.dodge = false;
			this.basic = false;
			this.kicking = false;
			this.punching = false;
			//this.fieldOn = false;
			//this.blastRelease = false;
		}
		
		
		if(this.stun == false && this.end == false && this.dead == false){
			this.stunCounter = 0;
		} else if(this.stunCounter > 50 && this.end == false && this.dead == false && app.main.gameState != app.main.GAME_STATE.TUTORIAL && app.main.scene == false){ //Stun stuck fix
			this.stun = false;
		}
		
		if(this.stun == false){
			this.attacking = false;
			this.powerMove = false;
			this.blasting = false;
			this.fight = false;
		}
		
		if(this.blasting == false){
			this.blastRelease = false;
		}
		
		/* if(this.blocking == false){
			this.fieldOn = false;
		} */
		
		/* if(this.fielding == true){
			this.fieldOn = true;
			this.blocking = true;
		} */
		
		/*
		if(this.attacking == true && this.superSpeed == true && this.speedCounter > 1) { //AI FIX FOR 17
			this.superSpeed = false;
		} */
		
		if(this.position.y > this.GROUND.y){
			this.position.y = this.GROUND.y;
			this.hover = false;
			this.air = false;
			this.ground = true;
			this.punched = false;
		}
		
		if(this.air == false){
			this.punched = false;
		}
		
		//Checks for behind
		if(this.left == true && app.main.vegeta.left == true && this.position.x > app.main.vegeta.position.x){
			this.behind = true;
		} else if(this.left == false && app.main.vegeta.left == false && this.position.x < app.main.vegeta.position.x){
			this.behind = true;
		} else {
			this.behind = false;
		}
		
		if(this.position.x > 690){
			this.byBuilding = true;
		} else {
			this.byBuilding = false;
		}
		
		if(app.main.scene == true && app.main.battle == 1){
			this.flying = false;
			if(this.air == false){
				this.jumpVelocity.y = 0;
			}
		}
		
		if(this.fieldOn == true){
			this.hit = false;
			this.hardHit = false;
		}
		
		//Back Hit
		if(this.hardHit == true && this.decel.x < 0 && this.left == true && this.movingLeft == false){
			this.backHit = 1;
			this.backHitTest = true;
		} else if(this.hardHit == true && this.decel.x > 0 && this.right == true && this.movingRight == false){
			this.backHit = 2;
			this.backHitTest = true;
		}
		
		if(this.hardHit == false){
			this.backHit = 0;
			this.backHitTest = false;
			this.headbutted = false;
		}
		
		if(app.main.gameState == app.main.GAME_STATE.TUTORIAL){
			this.BUILDING = new Victor(0,135);
		} else {
			if(app.main.environment.buildingActive == true){
				this.BUILDING = new Victor(650,250);
			} else {
				this.BUILDING = new Victor(700,520);
			}
		}
		
	};
	
	//Starts a jump/flight
	Android17.prototype.jump = function(){
		this.air = true;
	};
	
	//BEGIN SUPER SPEED
	Android17.prototype.speed = function(){
		this.delayingTele = false;
		this.energy -= 5;
		if(app.main.scene == true && app.main.gameState != app.main.GAME_STATE.TUTORIAL){
			this.position.y = this.GROUND.y;
		} else if(this.fallPrepTele == true){
			if(app.main.vegeta.position.y < app.main.vegeta.SKYTOP.y + 150){
				this.position.y = this.GROUND.y;
				this.aboveBuilding = false;
				this.fallPrepTele = false;
			} else {
				this.position.y = app.main.vegeta.position.y - 300;
				this.position.x = app.main.vegeta.position.x;
				this.startFallKick = true;
				this.fallPrepTele = false;
			}
		} else if(this.protectShield == true){
			if(app.main.vegeta.left == true){
				this.position.x = app.main.android18.position.x + 70;
			} else {
				this.position.x = app.main.android18.position.x - 70;
			}
			this.position.y = app.main.android18.position.y;
			this.superSpeed = false;
			this.vanish = false;
			this.stun = false;
			this.fight = false;
			this.blocking = true;
			this.fieldOn = true;
			this.protectShield = false;
			this.counter = 0;
		} else if(app.main.vegeta.left == true && app.main.gameState == app.main.GAME_STATE.TUTORIAL){
			if(app.main.vegeta.aboveBuilding == false){
				this.aboveBuilding = false;
			}
			this.position.x = app.main.vegeta.position.x + 50;
			this.position.y = app.main.vegeta.position.y;
		} else if(app.main.vegeta.right == true && app.main.gameState == app.main.GAME_STATE.TUTORIAL){
			if(app.main.vegeta.aboveBuilding == false){
				this.aboveBuilding = false;
			}
			this.position.x = app.main.vegeta.position.x - 50;
			this.position.y = app.main.vegeta.position.y;
		} else if(this.positionLast.x - 120 <= this.LEFTWALL.x && this.evasion == true &&  app.main.gameState != app.main.GAME_STATE.TUTORIAL){
			this.position.x = this.RIGHTWALL.x;			
		} else if(this.positionLast.x + 120 >= this.RIGHTWALL.x && this.evasion == true &&  app.main.gameState != app.main.GAME_STATE.TUTORIAL){
			this.position.x = this.LEFTWALL.x;
		} else if(this.left == true && ((app.main.vegeta.position.x < this.LEFTWALL.x + 50 && this.reverse == false && app.main.environment.enemyInSmog == false) || app.main.gameState == app.main.GAME_STATE.TUTORIAL)){
			if(app.main.vegeta.aboveBuilding == false){
				this.aboveBuilding = false;
			}
			this.position.x = app.main.vegeta.position.x + 50;
			this.position.y = app.main.vegeta.position.y;
		} else if(this.right == true && ((app.main.vegeta.position.x > this.RIGHTWALL.x - 50 && this.reverse == false && app.main.environment.enemyInSmog == false) || app.main.gameState == app.main.GAME_STATE.TUTORIAL)){
			if(app.main.vegeta.aboveBuilding == false){
				this.aboveBuilding = false;
			}
			this.position.x = app.main.vegeta.position.x - 50;
			this.position.y = app.main.vegeta.position.y;
		} else if(this.left == true && this.reverse == true){
			this.position.x = this.RIGHTWALL.x;
		} else if(this.right == true && this.reverse == true){
			this.position.x = this.LEFTWALL.x;
		} else if(this.left == true && app.main.environment.enemyInSmog == false){
			if(app.main.vegeta.aboveBuilding == false){
				this.aboveBuilding = false;
			}
			this.position.x = app.main.vegeta.position.x - 50;
			this.position.y = app.main.vegeta.position.y;
		} else if(this.right == true && app.main.environment.enemyInSmog == false){
			if(app.main.vegeta.aboveBuilding == false){
				this.aboveBuilding = false;
			}
			this.position.x = app.main.vegeta.position.x + 50;
			this.position.y = app.main.vegeta.position.y;
		}
	};
	
	//MOVE TO THE RIGHT
	Android17.prototype.moveRight = function(){
		//console.log("17 movingRight");
		this.movingRight = true;
		this.movingLeft = false;
		if(app.main.BA == true){
			this.accel = new Victor(5,0);
		} else {
			this.accel = new Victor(2.3,0);
		}
		this.velocity.addX(this.accel);
		if(app.main.HM == true){
			this.velocity.limit(50, .80);
		} else {
			this.velocity.limit(25, .80);
		}
		this.decel = this.velocity.clone();
		this.position.addX(this.velocity);
	};
	
	//MOVE TO THE LEFT
	Android17.prototype.moveLeft = function(){
		//console.log("17 movingLeft");
		this.movingLeft = true;
		this.movingRight = false;
		if(app.main.BA == true){
			this.accel = new Victor(5,0);
		} else {
			this.accel = new Victor(2.3,0);
		}
		this.velocity.subtractX(this.accel);
		if(app.main.HM == true){
			this.velocity.limit(50, .80);
		} else {
			this.velocity.limit(25, .80);
		}
		//console.log("VELOCITY" + this.velocity);
		this.decel = this.velocity.clone();
		this.position.addX(this.velocity);
	};
	
	//DECEL AFTER MOVING
	Android17.prototype.decelerate = function(){
		if(this.decel.x < 2 && this.decel.x > -2){
			this.decel.zero();
		}
		
		if(this.air == false && this.blasting == false){
			this.velocity = this.decel.clone();
			this.decel.multiplyScalar(.82);
			this.position.addX(this.decel);
		} else if(this.air == true && this.blasting == false) {
			this.velocity = this.decel.clone();
			this.decel.multiplyScalar(.94);
			this.position.addX(this.decel);
		} else {
			this.velocity = this.decel.clone();
			this.decel.multiplyScalar(.8);
			this.position.addX(this.decel);
		}
		
	};
	
	
	//FUNCTION TO DRAW ANDROID17 AND CHANGE MANY VARIABLES (MOST IMPORANT)
	Android17.prototype.draw = function(ctx){
		
		this.counter++;
		this.stunCounter++;
		
		if(this.movingLeft == true){
			if(this.velocity.x < 0 && this.velocity.x > -20){
				this.slow = true;
				this.fast = false;
			} else if(this.velocity.x < -20){
				this.fast = true;
				this.slow = false;
			} else if(this.velocity.x >= 0){
				this.fast = false;
				this.slow = false;
			}
		}
		if(this.movingRight == true){
			if(this.velocity.x > 0 && this.velocity.x < 20){
				this.slow = true;
				this.fast = false;
			} else if(this.velocity.x > 20){
				this.fast = true;
				this.slow = false;
			} else if(this.velocity.x <= 0){
				this.fast = false;
				this.slow = false;
			}
		}
		
		ctx.save();
		
		//FLIPPING
		if(((this.left == true || this.right == true && this.position.x > this.RIGHTWALL.x - 20) && this.backHitTest == false) || (this.backHit == 2 && this.backHitTest == true)){
			ctx.translate(this.position.x + 40, this.position.y + 5);
			this.attackPosition.x = this.position.x - 30;
			this.attackPosition.y = this.position.y + 20;
			this.hardAttackPosition.x = this.position.x - 60;
			this.hardAttackPosition.y = this.position.y + 20;
			ctx.scale(-1.5, 1.5);
			if(this.movingRight = true && this.movingLeft == false){
				this.reverse = true;
			} else {
				this.reverse = false;
			}
		} else if(((this.right == true || this.left == true && this.position.x < this.LEFTWALL.x + 20) && this.backHitTest == false) || (this.backHit == 1 && this.backHitTest == true)){
			ctx.translate(this.position.x + 7, this.position.y + 5);
			this.attackPosition.x = this.position.x + 50;
			this.attackPosition.y = this.position.y + 20;
			this.hardAttackPosition.x = this.position.x + 80;
			this.hardAttackPosition.y = this.position.y + 20;
			ctx.scale(1.5, 1.5);
			if(this.movingLeft = true && this.movingRight == false){
				this.reverse = true;
			} else {
				this.reverse = false;
			}
		}
		
		// ------------ DRAWS FOR ANDROID17 ------------------------------------------
		// ------------ DRAWS FOR ANDROID17 ------------------------------------------
		// ------------ DRAWS FOR ANDROID17 ------------------------------------------
		
		if(this.vanish == false){
		//NON MOVING DRAWS
		if(this.cinematic == true){
			if(this.cine == 0){
				ctx.drawImage(this.drop,-10,-15);
			} else if(this.cine == 1){
				ctx.drawImage(this.attackE,-12,10);
				if((this.counter % 2) == 0){
					ctx.drawImage(this.blastCharge1,53,19,10,14);
				} else {
					ctx.drawImage(this.blastCharge1,50,16,15,21);
				}
			} else if(this.cine == 2){
				ctx.drawImage(this.fastFly,0,10);
			} else if(this.cine == 3){
				if(this.hit == true || this.hardHit == true){
					this.hurtStun++;
					ctx.drawImage(this.injuredHit,-5,0);
					app.main.environment.powerUp = false;
					this.hurtBlasting = false;
					this.nukeCounter = 0;
					this.hurtBTimer = 0;
					if(this.hurtStun < 2 && this.hurtStun > 0 && this.hardHit == true && this.quickHurt == false){
						app.main.sound.pauseVoice5();
						app.main.sound.pauseEffect17();
						app.main.sound.playTaunt5(Math.round(getRandom(9,11)));
						this.quickHurt = true;
						this.hurtBlasting = false;
					}
					if(this.hurtStun > 20 && this.hardHit == true){
						this.hit = false;
						this.hardHit = false;
						this.quickHurt = false;
						this.hurtStun = 0;
					} else if(this.hurtStun > 10 && this.hardHit == false){
						this.hit = false;
						this.quickHurt = false;
						this.hurtStun = 0;
					}
				} else if(this.hurtBlasting == true){
					this.hurtBTimer++;
					//this.nukeCounter = 0;
					if(this.hurtBTimer < 10){
						if(this.hurtBTimer < 2){
							app.main.sound.playIntro(8);
						} else if(this.hurtBTimer < 5 && this.hurtBTimer > 3){
							app.main.sound.pauseVoice5();
							app.main.sound.playTaunt5(Math.round(getRandom(22,23)));
						}
						if(this.hurtBTimer < 8 && this.hurtBTimer > 6){
							if((app.main.vegeta.exhausted == false && app.main.vegeta.attacking == false && app.main.vegeta.blocking == false && app.main.vegeta.superSpeed == false && app.main.vegeta.stun == false && app.main.vegeta.blasting == false) || (app.main.vegeta.blasting == true && app.main.powerMove == true && app.main.chance2 > .5 && app.main.vegeta.justTurned == false)){
								if(!(app.main.vegeta.farLeft == true && this.farLeft == true) && !(app.main.vegeta.farRight == true && this.farRight == true)){
									app.main.sound.playTaunt6(Math.round(getRandom(49,50)));
									app.main.vegeta.fast17 = true;
								} else {
									app.main.vegeta.taunting = false;
									app.main.vegeta.charging = false;
									app.main.vegeta.intensify = false;
									app.main.environment.powerUp = false;
									app.main.vegeta.velocity.x = 0;
									app.main.vegeta.decel.x = 0;
									app.main.aiChoice2 = 10;
									app.main.vegeta.counter = 0;
									app.main.cooldownAI = 0;
									app.main.vegeta.superSpeed = true;
									if(this.left == true){
										app.main.vegeta.position.x = this.position.x - 200;
									} else {
										app.main.vegeta.position.x = this.position.x + 200;
									}
									
									app.main.vegeta.position.y = app.main.vegeta.GROUND.y;
									app.main.vegeta.fast17 = true;
									/* app.main.vegeta.fast17 = true;
									app.main.vegeta.attacking = true;
									app.main.vegeta.fallingKick = true;
									app.main.vegeta.fight = true; */
								}
							} else {
								
							}
						}
						if(this.hurtBTimer < 9 && this.hurtBTimer > 7){
							if(app.main.vegeta.fast17 == true){
								if(app.main.vegeta.powerMove == false){
									app.main.vegeta.taunting = false;
									app.main.vegeta.charging = false;
									app.main.vegeta.intensify = false;
									app.main.environment.powerUp = false;
									app.main.vegeta.velocity.x = 0;
									app.main.vegeta.decel.x = 0;
									app.main.chance2 = .6;
									app.main.aiChoice2 = 10;
									app.main.vegeta.counter = 0;
									app.main.cooldownAI = 0;
									app.main.vegeta.powerMove = true;
									app.main.vegeta.attacking = true;
									app.main.vegeta.blasting = true;
									app.main.vegeta.fight = true;
								}
								
							}
						}
					} else if(this.hurtBTimer < 30){
						if(this.hurtBTimer < 11){
							app.main.sound.playEffect3(27);
						}
						if((this.counter % 2) == 0){
							ctx.drawImage(this.blastCharge1,30,34,10,14);
						} else {
							ctx.drawImage(this.blastCharge1,28,31,15,21);
						}
						/* if(this.hurtBTimer < 16 && this.hurtBTimer > 14){
							app.main.vegeta.success = getRandom(0,1);
							if(app.main.vegeta.exhausted == true || app.main.vegeta.attacking == true || app.main.vegeta.blocking == true || app.main.vegeta.superSpeed == true || app.main.vegeta.stun == true || app.main.vegeta.blasting == true){
								app.main.sound.playTaunt6(Math.round(getRandom(46,48)));
							} else {
								app.main.sound.playTaunt6(Math.round(getRandom(49,50)));
								app.main.sound.playSpecialReaction(19);
								app.main.vegeta.attacking = false;
								app.main.vegeta.blocking = false;
								app.main.vegeta.stun = false;
								app.main.vegeta.hit = false;
								app.main.vegeta.hardHit = false;
								app.main.vegeta.blasting = false;
								app.main.vegeta.powerMove = false;
								app.main.vegeta.fight = false;
								app.main.vegeta.taunting = false;
								app.main.vegeta.charging = false;
								app.main.vegeta.superSpeed = false;
								app.main.vegeta.velocity.x = 0;
								app.main.vegeta.decel.x = 0;
								app.main.vegeta.saveThem = true;
								
							}
							
						} */
					} else if(this.hurtBTimer < 31){
						app.main.roundScore2 += (70 + Math.round(getRandom(0,80)));
						app.main.environment.flash = true;
						app.main.sound.playEffect3(64);
						
						app.main.environment.shake = true;
						app.main.environment.nuked = true;
						app.main.environment.powerUp = true;
						
						
						/* if(app.main.vegeta.saveThem == false){
							app.main.environment.shake = true;
							app.main.environment.nuked = true;
							app.main.environment.powerUp = true;
						} else {
							if(app.main.android17.farLeft == true){
								app.main.vegeta.position.x = 150;
								app.main.vegeta.position.y = 420;
								app.main.environment.smogPos.push(new Victor(50,400));
								app.main.environment.smogSize.push(new Victor(250,250));
								app.main.environment.smogAlpha.push(1.1);
								app.main.environment.smogTimer.push(0);
								app.main.environment.smogAngle.push(0);
								app.main.environment.smogCount += 1;
							} else {
								app.main.vegeta.position.x = 700;
								app.main.vegeta.position.y = 420;
								app.main.environment.smogPos.push(new Victor(600,400));
								app.main.environment.smogSize.push(new Victor(250,250));
								app.main.environment.smogAlpha.push(1.1);
								app.main.environment.smogTimer.push(0);
								app.main.environment.smogAngle.push(0);
								app.main.environment.smogCount += 1;
							}
							if(app.main.vegeta.saveThem == true){
							if(app.main.vegeta.success < 0){ //doesnt work
								app.main.vegeta.counter = 0;
								app.main.vegeta.specialBlock = true;
							} else {
								app.main.vegeta.counter = 0;
								app.main.vegeta.stun = true;
								app.main.vegeta.stunCounter = 0;
								app.main.vegeta.hardHit = true;
								app.main.vegeta.hit = true;
								app.main.vegeta.blasted = true;
								app.main.vegeta.punched = true;
								app.main.vegeta.jumpVelocity.y = 10;
								if(app.main.SB == true){
									app.main.vegeta.blastBurnLength = 100;
								} else {
									app.main.vegeta.blastBurnLength = 80;
								}
								app.main.vegeta.blastBurn = true;
							//app.main.sound.playTaunt6(Math.round(getRandom(40,42)));
							}
							app.main.vegeta.aboveBuilding = false;
							app.main.vegeta.saveThem = false;
							}
							app.main.environment.powerUp = false;
							this.hurtBlasting = false;
							this.nukeCounter = 0;
							this.hurtBTimer = 0;
						} */
						//app.main.environment.decay = true;
					} else if(this.hurtBTimer < 40){
						this.nukeCounter++;
						ctx.save();
						ctx.globalAlpha = .4;
						ctx.scale(1.5,.8);
						if(this.hurtBTimer > 2 && this.hurtBTimer < 4){
							app.main.sound.resumeBackground(1);
						}
						if(this.hurtBTimer > 32 && this.hurtBTimer < 34){
							app.main.sound.playTaunt6(Math.round(getRandom(46,48)));
						}
						if(this.nukeCounter < 2){
							if(this.right == true){
								ctx.drawImage(this.nuke1,100,-222);
							} else {
								ctx.drawImage(this.nuke1,137,-222);
							}
						} else if(this.nukeCounter < 4){
							if(this.right == true){
								ctx.drawImage(this.nuke2,100,-222);
							} else {
								ctx.drawImage(this.nuke2,137,-222);
							}
						} else if(this.nukeCounter < 6){
							if(this.right == true){
								ctx.drawImage(this.nuke3,100,-222);
							} else {
								ctx.drawImage(this.nuke3,137,-222);
							}
						} else if(this.nukeCounter < 8){
							if(this.right == true){
								ctx.drawImage(this.nuke4,100,-222);
							} else {
								ctx.drawImage(this.nuke4,137,-222);
							}
						} else if(this.nukeCounter < 10){
							if(this.right == true){
								ctx.drawImage(this.nuke5,100,-222);
							} else {
								ctx.drawImage(this.nuke5,137,-222);
							}
						} else if(this.nukeCounter < 11){
							if(this.right == true){
								ctx.drawImage(this.nuke6,100,-222);
							} else {
								ctx.drawImage(this.nuke6,137,-222);
							}
							//console.log("NUKE");
						}
						ctx.restore();
					} else {
						app.main.sound.pauseBackground();
						app.main.environment.powerUp = false;
						this.hurtBlasting = false;
						this.nukeCounter = 0;
						this.hurtBTimer = 0;
						app.main.vegeta.fast17 = false;
					}
					
					ctx.drawImage(this.injuredBlast,-10,0);
				} else if(this.fastBlast == true){
					this.hurtBTimer++;
					if(this.hurtBTimer < 2){
						app.main.sound.playIntro(8);
					} else if(this.hurtBTimer > 2 && this.hurtBTimer < 4){
						app.main.sound.playTaunt5(Math.round(getRandom(46,48)));
					} else if(this.hurtBTimer > 3 && this.hurtBTimer < 5){
						app.main.sound.playEnergyAttack3(77);
						if(this.left == true){
							app.main.blasts.push(new app.Energy(this.position.x + 10,this.position.y + 65,this.left, 6, 8));
						} else {
							app.main.blasts.push(new app.Energy(this.position.x + 40,this.position.y + 65,this.left, 6, 8));
						}
					} else if(this.hurtBTimer < 20){
						
					} else {
						this.fastBlast = false;
						this.hurtBTimer = 0;
						this.selectBlast = Math.random();
					}
					ctx.drawImage(this.injuredBlast2,-10,0);
					
				} else if(this.lookUp == true){
					ctx.drawImage(this.injuredUp,-5,0);
					this.stunCounter = 0;
				} else {
					this.stunCounter = 0;
					ctx.drawImage(this.injured,-5,0);
				}
			} else if(this.cine == 4){
				ctx.drawImage(this.injured2,-5,0);
			} else if(this.cine == 5){
				ctx.drawImage(this.block,0,5);
			} else if(this.cine == 6){
				ctx.drawImage(this.drop,-10,-15);
				if((this.counter % 2) == 0){
					ctx.drawImage(this.blastCharge1,-10,-25,10,14);
				} else {
					ctx.drawImage(this.blastCharge1,-13,-28,15,21);
				}
			} else if(this.cine == 7){
				ctx.drawImage(this.punchPrep,0,10);
			} else if(this.cine == 8){
				ctx.drawImage(this.special1,-13,0);
			} else if(this.cine == 9){
				ctx.drawImage(this.special2,-13,-2);
			} else if(this.cine == 10){
				ctx.drawImage(this.stanceUp,0,0);
			} else if(this.cine == 11){ //blast hand only
				ctx.drawImage(this.attackE,-12,10);
			} else if(this.cine == 12){
				ctx.drawImage(this.useField1,-15,0);
			}
		} else if((this.velocity.x == 0 || this.startFallKick == true) && this.attacking != true && this.blocking != true && this.taunting != true && this.hit == false && this.hardHit != true && this.end == false) {
			if((this.up == true && this.flying == true) || (this.jumpVelocity.y < 15 && this.air == true) && this.startFallKick == false){
				if(this.lookUp == true){
					ctx.drawImage(this.flyUpUp,-5,0);
				} else if(this.lookDown == true){
					ctx.drawImage(this.flyUpDown,-5,0);
				} else {
					ctx.drawImage(this.flyUp,-5,0);
				}
			} else if(this.air == true && this.startFallKick == true) {
				ctx.drawImage(this.fallKick2,-5,0);
				this.fallingKick = true;
				this.attacking = false;
				this.fight = false;
				this.flying = false;
				this.aboveBuilding = false;
				this.fallTimer++;
				//this.stun = true;
				/* this.gravity = new Victor(0,5.5);
				this.velocity.multiplyScalar(1.3); */
				//this.stun = true;
				if(this.kickSound == false){
					app.main.sound.playBasicAttack3(Math.round(getRandom(61,63)));
					this.kickSound = true;
					this.fallTimer = 0;
				}
				if(this.fallTimer > 3 && this.fallTimer < 5){
					app.main.sound.playSpecialReaction3(74);
				}
				if((app.main.vegeta.ground == true && app.main.vegeta.superSpeed == false && (hitTest(app.main.android17, app.main.vegeta) == true))){
					this.startFallKick = false;
					this.fallingKick = false;
					app.main.aiChoice4 = Math.random();
					app.main.chance3 = Math.random();
					app.main.detected3 = false;
					this.fallingKickCooldown = 0;
					this.counter = 0;
					if(app.main.vegeta.blocking == false){
						app.main.sound.playSpecialReaction2(18);
						app.main.environment.shake = true;
						app.main.vegeta.hit = true;
						app.main.vegeta.hardHit = true;
						app.main.vegeta.stun = true;
					}
					this.jumpVelocity.y = -40;
					if(this.right == true){
						this.velocity.x -= 25;
						app.main.vegeta.velocity.x += 15;
					} else {
						this.velocity.x += 25;
						app.main.vegeta.velocity.x -= 15;
					}
					this.decel = this.velocity.clone();
					app.main.vegeta.decel = app.main.vegeta.velocity.clone();
					
					app.main.sound.playSpecialReaction3(4);
					
					if(app.main.vegeta.stamina > 64 && app.main.vegeta.exhausted == true){
						app.main.vegeta.stamina = app.main.vegeta.stamina - 10;
					}
					if(app.main.vegeta.endurance > 14){
						app.main.vegeta.endurance = app.main.vegeta.endurance - (7 + getRandom(0, 5));
					} else if(app.main.vegeta.endurance < 15){
						app.main.vegeta.health = app.main.vegeta.health - (7 + getRandom(0, 5));
					}

				}
				if((((hitTest(app.main.android17, app.main.vegeta) == true))) && this.fallHit == false){
					if(app.main.vegeta.superSpeed == false && app.main.vegeta.blocking == false && this.position.y < app.main.vegeta.position.y - 20){
						this.fallHit = true;
						var rand = getRandom(0,1);
						if(rand > .5){
							this.startFallKick = false;
							this.fallingKick = false;
						}
						app.main.sound.playSpecialReaction3(16);
							app.main.vegeta.hit = true;
							app.main.vegeta.hardHit = true;
							app.main.vegeta.stun = true;
							if(app.main.vegeta.air == true) {
								app.main.vegeta.flying = false;
								app.main.vegeta.jumpVelocity.y = 50;
								app.main.vegeta.punched = true;
							} else {
								app.main.vegeta.punched = false;
							}
							if(app.main.vegeta.air == true){
							if(app.main.vegeta.right == true){
								app.main.vegeta.velocity.x = this.velocity.x;
							} else {
								app.main.vegeta.velocity.x = this.velocity.x;
							}
							}
							app.main.vegeta.decel = app.main.vegeta.velocity.clone();
							if(app.main.vegeta.stamina > 64 && app.main.vegeta.exhausted == true){
								app.main.vegeta.stamina = app.main.vegeta.stamina - 10;
							}
							if(app.main.vegeta.endurance > 14){
								app.main.vegeta.endurance = app.main.vegeta.endurance - (7 + getRandom(0, 5));
							} else if(app.main.vegeta.endurance < 15){
								app.main.vegeta.health = app.main.vegeta.health - (7 + getRandom(0, 5));
							}
						}
				}
				
				/* if(this.ground == true){
					this.fallingKick = false;
					this.startFallKick = false;
					this.velocity.x = 0;
					this.gravity = new Victor(0,1.7);
					app.main.aiChoice4 = Math.random();
					//this.stun = false;
				} */
				
			} else if(this.down == true && this.air == true) {
				ctx.drawImage(this.flyDown,0,-15);
			} else if(this.down == false && this.air == true && this.up == false) {
				ctx.drawImage(this.flyDown,0,-15);
			} else {
				if(this.lookUp == true){
					ctx.drawImage(this.stanceUp,0,0);
				} else if(this.lookDown == true){
					ctx.drawImage(this.stanceDown,0,0);
				} else {
					ctx.drawImage(this.stance,0,0);
				}
			}
		//MOVING DRAWS
		} else if(this.velocity.x != 0 && this.attacking != true && this.blocking != true && this.hit == false && this.hardHit != true && this.end == false){ //&& (this.fallingKick == false || this.air == false)
			if(this.slow == true && this.reverse == false){
				ctx.drawImage(this.slowFly,0,0);
			} else if(this.fast == true && this.reverse == false){
				ctx.drawImage(this.fastFly,0,10);
			} else if(this.reverse == true && this.farLeft == false && this.farRight  == false){
				ctx.drawImage(this.moveReverse,0,0);
			} else if(this.air == true && this.up == false){
				ctx.drawImage(this.flyDown,0,-15);
			} else {
				if(this.lookUp == true){
					ctx.drawImage(this.stanceUp,0,0);
				} else if(this.lookDown == true){
					ctx.drawImage(this.stanceDown,0,0);
				} else {
					ctx.drawImage(this.stance,0,0);
				}
			}
		//BASIC ATTACK
		} else if(this.attacking == true && this.air == false && this.hit == false && this.blasting == false && this.intensify == false){
			this.randomEffect = Math.random();
			//app.main.chance3 = .2;
			//console.log(this.arms);
			this.stun = true;
			if(this.counter < 3 && app.main.chance3 > .3){
				ctx.drawImage(this.punchPrep,0,10);
			} else if(this.counter < 3 && app.main.chance3 <= .3){
				ctx.drawImage(this.kickPrep,-25,5);
			} else if(this.counter < 5 && app.main.chance3 > .3){
				if(this.counter < 4){
					if(app.main.PE == true){
						this.stamina += 2;
					} else {
						this.stamina += 4;
					}
					this.basic = true;
					if(this.arms == false){
						this.arms = true;
					} else if(this.arms == true){
						this.arms = false;
					}			
				} else {
					this.basic = false;
				}
				if(this.arms == false){
					ctx.drawImage(this.rightPunch,0,10);
				} else if(this.arms == true){
					ctx.drawImage(this.leftPunch,0,8);
				}
			} else if(this.counter < 5 && app.main.chance3 <= .3){
				if(this.counter < 4){
					if(app.main.PE == true){
						this.stamina += 2;
					} else {
						this.stamina += 4;
					}
					this.basic = true;
				} else {
					this.basic = false;
				}
				ctx.drawImage(this.kick,5,3);
			} else if(app.main.chance3 > .3) {
				this.fight = false;
				this.attacking = false;
				this.basic = false;
				ctx.drawImage(this.punchPrep,0,10);
				app.main.aiChoice4 = Math.random();
				app.main.chance3 = Math.random();
				app.main.detected3 = false;
				this.counter = 0;
				this.stun = false;
			} else if(app.main.chance3 <= .3) {
				this.fight = false;
				this.attacking = false;
				this.basic = false;
				ctx.drawImage(this.kick,5,3);
				app.main.aiChoice4 = Math.random();
				app.main.chance3 = Math.random();
				app.main.detected3 = false;
				this.counter = 0;
				this.stun = false;
			} 
		//AIR BASIC ATTACK
		} else if(this.attacking == true && this.air == true && this.hit == false && this.down == false && this.intensify == false && this.blasting == false){
			this.randomEffect = Math.random();
			//app.main.chance3 = .4;
			//console.log(this.arms);
			this.stun = true;
			if(this.counter < 3 && app.main.chance3 > .3){
				ctx.drawImage(this.punchPrep,0,10);
			} else if(this.counter < 3 && app.main.chance3 <= .3){
				ctx.drawImage(this.kickPrep,-25,5);
			} else if(this.counter < 5 && app.main.chance3 > .3){
				if(this.counter < 4){
					if(app.main.PE == true){
						this.stamina += 2;
					} else {
						this.stamina += 4;
					}
					this.basic = true;
					if(this.arms == false){
						this.arms = true;
					} else if(this.arms == true){
						this.arms = false;
					}			
				} else {
					this.basic = false;
				}
				if(this.arms == false){
					ctx.drawImage(this.rightPunch,0,10);
				} else if(this.arms == true){
					ctx.drawImage(this.leftPunch,0,8);
				}
			} else if(this.counter < 5 && app.main.chance3 <= .3){
				if(this.counter < 4){
					if(app.main.PE == true){
						this.stamina += 2;
					} else {
						this.stamina += 4;
					}
					this.basic = true;
				} else {
					this.basic = false;
				}
				ctx.drawImage(this.kick,5,3);
			} else if(app.main.chance3 > .3) {
				this.fight = false;
				this.attacking = false;
				this.basic = false;
				ctx.drawImage(this.punchPrep,0,10);
				app.main.aiChoice4 = Math.random();
				app.main.chance3 = Math.random();
				app.main.detected3 = false;
				this.counter = 0;
				this.stun = false;
			} else if(app.main.chance3 <= .3) {
				this.fight = false;
				this.attacking = false;
				this.basic = false;
				ctx.drawImage(this.kick,5,3);
				app.main.aiChoice4 = Math.random();
				app.main.chance3 = Math.random();
				app.main.detected3 = false;
				this.counter = 0;
				this.stun = false;
			} 
		//AIR HARD DROP KICK
		/*
		} else if(this.fallingKick == true && this.air == true && this.hit == false && this.stun == false){
			if(this.air == true){
				ctx.drawImage(this.fallKick,0,0);
			} else {
				ctx.drawImage(this.stance,0,0);
				this.fight = false;
				this.attacking = false;
			} */
		//HARD PUNCH AND KICK
		} else if(this.attacking == true && this.intensify == true && this.air == false && this.hit == false && this.down == false){
			this.stun = true;
			this.randomEffect = Math.random();
			this.hard = true;
			//app.main.chance3 = .4;
			if(app.main.chance3 > 1){ //NO HARD PUNCH CURRENTLY
				if(this.counter < 3){
					//ctx.drawImage(this.hardPunchPrep,-15,28);
				} else if(this.counter < 4){
					if(app.main.PE == true){
						this.stamina += 5;
					} else {
						this.stamina += 10;
					}
					this.punching = true;
					//ctx.drawImage(this.hardPunch,-45,28);
				} else if(this.counter < 10){
					this.punching = false;
					//ctx.drawImage(this.hardPunch,-45,28);
				} else {
					//ctx.drawImage(this.hardPunch,-45,28);
					this.hard = false;
					this.fight = false;
					this.attacking = false;
					this.intensify = false;
					app.main.aiChoice4 = Math.random();
					app.main.chance3 = Math.random();
					this.counter = 0;
					app.main.detectedHard3 = false;
					this.stun = false;
				} 
			} else if(app.main.chance3 > .5){
				if(this.counter < 3){
					ctx.drawImage(this.kickPrep,-25,5);
				} else if(this.counter < 4){
					if(app.main.PE == true){
						this.stamina += 5;
					} else {
						this.stamina += 10;
					}
					/* if(hardAttackHitTest(app.main.android17, app.main.vegeta) == true && app.main.vegeta.blocking == false && app.main.vegeta.superSpeed == false){
						//app.main.vegeta.stun = true;
						app.main.vegeta.jumpVelocity = new Victor(0,-30);
						app.main.vegeta.air = true;
					} */
					this.kicking = true;
					ctx.drawImage(this.launch,10,0);; //No swing
				} else if(this.counter < 5){
					if(hardAttackHitTest(app.main.android17, app.main.vegeta) == true && app.main.vegeta.blocking == false && app.main.vegeta.superSpeed == false && app.main.vegeta.hardHit == true){
						//app.main.vegeta.stun = true;
						app.main.vegeta.jumpVelocity = new Victor(0,-30);
						app.main.vegeta.air = true;
					}
					ctx.drawImage(this.launch,10,0);; //No swing
				} else if(this.counter < 10){
					this.kicking = false;
					ctx.drawImage(this.launch,10,0);
				} else {
					ctx.drawImage(this.launch,10,0);
					this.hard = false;
					this.fight = false;
					this.attacking = false;
					this.intensify = false;
					app.main.aiChoice4 = Math.random();
					app.main.chance3 = Math.random();
					this.counter = 0;
					app.main.detectedHard3 = false;
					this.stun = false;
				}
			} else {
				if(this.counter < 3){
					ctx.drawImage(this.hardKickPrep,-5,5);
				} else if(this.counter < 4){
					if(app.main.PE == true){
						this.stamina += 5;
					} else {
						this.stamina += 10;
					}
					this.kicking = true;
					ctx.drawImage(this.hardKick,-10,5); //No swing
				} else if(this.counter < 10){
					this.kicking = false;
					ctx.drawImage(this.hardKick,-10,5);
				} else {
					ctx.drawImage(this.hardKick,-10,5);
					this.hard = false;
					this.fight = false;
					this.attacking = false;
					this.intensify = false;
					app.main.aiChoice4 = Math.random();
					app.main.chance3 = Math.random();
					this.counter = 0;
					app.main.detectedHard3 = false;
					this.stun = false;
				} 
			}
		//AIR HARD PUNCH
		} else if(this.attacking == true && this.intensify == true && this.air == true && this.hit == false && this.down == false){
			this.randomEffect = Math.random();
			//app.main.chance3 = .6;
			this.stun = true;
			this.hard = true;
			if(app.main.chance3 > .5){
				if(this.counter < 3){
					ctx.drawImage(this.hardKickPrep,0,10);
				} else if(this.counter < 4){
					if(app.main.PE == true){
						this.stamina += 5;
					} else {
						this.stamina += 10;
					}
					this.punching = true;
					ctx.drawImage(this.fallKick,0,0); //No swing (maybe tele lines)
				} else if(this.counter < 10){
					this.punching = false;
					ctx.drawImage(this.fallKick,0,0);
				} else {
					ctx.drawImage(this.fallKick,0,0);
					this.hard = false;
					this.fight = false;
					this.attacking = false;
					this.intensify = false;
					app.main.aiChoice4 = Math.random();
					app.main.chance3 = Math.random();
					this.counter = 0;
					app.main.detectedHard3 = false;
					this.stun = false;
				} 
			} else {
				if(this.counter < 3){
					ctx.drawImage(this.hardKickPrep,-5,5);
				} else if(this.counter < 4){
					if(app.main.PE == true){
						this.stamina += 5;
					} else {
						this.stamina += 10;
					}
					this.kicking = true;
					ctx.drawImage(this.hardKick,-10,5); //No swing
				} else if(this.counter < 10){
					this.kicking = false;
					ctx.drawImage(this.hardKick,-10,5);
				} else {
					ctx.drawImage(this.hardKick,-10,5);
					this.hard = false;
					this.fight = false;
					this.attacking = false;
					this.intensify = false;
					app.main.aiChoice4 = Math.random();
					app.main.chance3 = Math.random();
					this.counter = 0;
					app.main.detectedHard3 = false;
					this.stun = false;
				} 
			}	
		//BLAST ATTACK
		} else if(this.attacking == true && this.hit == false && this.intensify == false && this.powerMove == false){ //KEY CHANGE
			if(this.counter < 3){
				this.stun = true;
				ctx.drawImage(this.flyUp,-4,0);
				if(this.arms == false){
					this.arms = true;
				} else if(this.arms == true){
					this.arms = false;
				}
			} else if(this.counter < 6){
				if(this.arms == false){
					if(this.counter < 4){
						app.main.sound.playEnergyAttack3(5);
						if(app.main.EE == true){
							this.energy -= 1;
						} else {
							this.energy -= 2;
						}
						if(app.main.HZ == true){
							if(this.left == true){
								app.main.blasts.push(new app.Energy(this.position.x - 15,this.position.y + 55,this.left, 6, 5));
							} else {
								app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 55,this.left, 6, 5));
							}
						} else {
							if(this.left == true){
								app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 30,this.left, 6, 0));
							} else {
								app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 30,this.left, 6, 0));
							}
						}
					}
					if(app.main.BH == true){
						this.counter += 3;
					}
					ctx.drawImage(this.blast,0,-1);
				} else if(this.arms == true){
					if(this.counter < 4){
						app.main.sound.playEnergyAttack3(5);
						if(app.main.EE == true){
							this.energy -= 1;
						} else {
							this.energy -= 2;
						}
						if(this.left == true){
							app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 30,this.left, 6, 0));
						} else {
							app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 30,this.left, 6, 0));
						}
					}
					if(app.main.BH == true){
						this.counter += 3;
					}
					ctx.drawImage(this.blast,0,-1);
					//console.log("RIGHT");
				}
			} else {
				ctx.drawImage(this.blast,0,-1);
				//ctx.drawImage(this.flyUp,-5,0);
				this.fight = false;
				this.attacking = false;
				this.blasting = false;
				app.main.aiChoice4 = Math.random();
				app.main.chance3 = Math.random();
				this.counter = 0;
				this.stun = false;
			}
		//POWERFUL BLAST ATTACK
		} else if(this.powerMove == true && this.blasting == true && this.attacking == true && this.hit == false && this.fallingKick == false){
			//app.main.chance3 = .3;
			this.powerMove = true;
			this.stun = true;
			
			//app.main.chance3 = 1.1;
				/* this.intensify = false;
				this.powerMove = false;
				this.fight = false;
				this.attacking = false;
				this.blasting = false;
				this.blastRelease = false;
				this.blocking = true;
				this.fieldOn = true; */
				//this.fielding = true;
				
				if(app.main.LG == true){
					if(this.chance3 < .3){
						this.chance3 = .3;
					} else if(this.chance3 <= .6){
						this.chance3 = .6;
					} else {
						this.chance3 = 1.1;
					}
					if(app.main.CF == true){
						this.chance3 = 1.1;
					}
				}
				if(app.main.CF == true && app.main.LG == false){
					ctx.drawImage(this.punchPrep,0,10);
					app.main.aiChoice4 = Math.random();
					app.main.chance3 = Math.random();
					this.intensify = false;
					this.powerMove = false;
					this.fight = false;
					this.attacking = false;
					this.blasting = false;
					this.blastRelease = false;
					this.counter = 0;
					this.stun = false;
				}
			
			if(app.main.chance3 > .5 && app.main.chance3 <= 1 && app.main.CF == false){
			if(this.counter < 3){
				ctx.drawImage(this.punchPrep,0,10);
				if(this.arms == false){
					this.arms = true;
				} else if(this.arms == true){
					this.arms = false;
				}
			} else if(this.counter < 5){
				ctx.drawImage(this.attackE,0,5);
			} else if(this.counter < 6){
				ctx.drawImage(this.attackE,0,5);
			} else if(this.counter < 7){
				ctx.drawImage(this.attackE,0,5);
				//ctx.drawImage(this.blastCharge1,-32,23.5,5,7);
			} else if(this.counter < 8){
				app.main.sound.playEnergyAttack3(76);
				ctx.drawImage(this.attackE,0,5);
				ctx.drawImage(this.PBC1,36,-5);
				//ctx.drawImage(this.blastCharge1,-37,20,10,14);
			} else if(this.counter < 9){
				ctx.drawImage(this.attackE,0,5);
				ctx.drawImage(this.PBC2,36,-5);
				//ctx.drawImage(this.blastCharge1,-42,16.5,15,21);
			} else if(this.counter < 10){
				ctx.drawImage(this.attackE,0,5);
				ctx.drawImage(this.PBC3,36,-5);
				//ctx.drawImage(this.blastCharge1,-47,13,20,28);
			} else if(this.counter < 11){
				ctx.drawImage(this.attackE,0,5);
				ctx.drawImage(this.PBC4,36,-5);
				//ctx.drawImage(this.blastCharge1,-52,9.5,25,35);
			} else if(this.counter < 12){
				ctx.drawImage(this.attackE,0,5);
				ctx.drawImage(this.PBC5,36,-5);
				//ctx.drawImage(this.blastCharge1,-52,9.5,25,35);
			} else if(this.counter < 13){
				ctx.drawImage(this.attackE,0,5);
				ctx.drawImage(this.PBC6,36,-5);
			} else if(this.counter < 20){
				if(this.counter < 14){
					//console.log("TALKING");
					this.blastRelease = true;
					app.main.sound.playTaunt5(Math.round(getRandom(15,18)));
				} else {
					this.blastRelease = false;
				}
				if(this.arms == false){
					if(this.counter < 14){
						app.main.sound.playEnergyAttack3(77);
						if(app.main.EE == true){
							this.energy -= 3;
						} else {
							this.energy -= 5;
						}
						if(this.left == true){
							app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 27,this.left, 6, 8));
						} else {
							app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 27,this.left, 6, 8));
						}
						if(app.main.BR == true && app.main.AI == false){
							this.counter = 20;
						}
					}
					if(app.main.AI == true){
						if(this.counter < 17 && this.counter > 15){
						app.main.sound.playEnergyAttack3(77);
						if(app.main.EE == true){
							this.energy -= 3;
						} else {
							this.energy -= 5;
						}
						if(this.left == true){
							app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 27,this.left, 6, 8));
						} else {
							app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 27,this.left, 6, 8));
						}
						if(app.main.BR == true){
							this.counter = 20;
						}
					}
					}
					ctx.drawImage(this.attackE,0,5);
					
				} else if(this.arms == true){
					if(this.counter == 14){
						app.main.sound.playEnergyAttack3(77);
						if(app.main.EE == true){
							this.energy -= 3;
						} else {
							this.energy -= 5;
						}
						if(this.left == true){
							app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 27,this.left, 6, 8));
						} else {
							app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 27,this.left, 6, 8));
						}
						if(app.main.BR == true && app.main.AI == false){
							this.counter = 20;
						}
					}
					if(app.main.AI == true){
						if(this.counter < 17 && this.counter > 15){
						app.main.sound.playEnergyAttack3(77);
						if(app.main.EE == true){
							this.energy -= 3;
						} else {
							this.energy -= 5;
						}
						if(this.left == true){
							app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 27,this.left, 6, 8));
						} else {
							app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 27,this.left, 6, 8));
						}
						if(app.main.BR == true){
							this.counter = 20;
						}
					}
					}
					ctx.drawImage(this.attackE,0,5);
				}
			} else {
				ctx.drawImage(this.punchPrep,0,10);
				app.main.aiChoice4 = Math.random();
				app.main.chance3 = Math.random();
				this.intensify = false;
				this.powerMove = false;
				this.fight = false;
				this.attacking = false;
				this.blasting = false;
				this.blastRelease = false;
				this.counter = 0;
				this.stun = false;
			}
			} else if(app.main.chance3 <= .5 && app.main.CF == false) { //FINGER BLAST
				if(this.counter < 3){
				ctx.drawImage(this.finger,0,5);
				if(this.arms == false){
					this.arms = true;
				} else if(this.arms == true){
					this.arms = false;
				}
			} else if(this.counter < 5){
				ctx.drawImage(this.finger,0,5);
			} else if(this.counter < 6){
				app.main.sound.playEnergyAttack3(27);
				ctx.drawImage(this.finger,0,5);
			} else if(this.counter < 7){
				ctx.drawImage(this.finger,0,5);
				ctx.drawImage(this.blastCharge1,39,20,10,10);
			} else if(this.counter < 8){
				ctx.drawImage(this.finger,0,5);
				ctx.drawImage(this.blastCharge1,44,16.5,15,17);
			} else if(this.counter < 9){
				ctx.drawImage(this.finger,0,5);
				ctx.drawImage(this.blastCharge1,39,20,10,10);
			} else if(this.counter < 10){
				ctx.drawImage(this.finger,0,5);
				ctx.drawImage(this.blastCharge1,44,16.5,15,17);
			} else if(this.counter < 11){
				ctx.drawImage(this.finger,0,5);
				ctx.drawImage(this.blastCharge1,39,20,10,10);
			} else if(this.counter < 12){
				ctx.drawImage(this.finger,0,5);
				ctx.drawImage(this.blastCharge1,44,16.5,15,17);
			} else if(this.counter < 13){
				ctx.drawImage(this.finger,0,5);
				ctx.drawImage(this.blastCharge1,39,20,10,10);
			} else if(this.counter < 20){
				if(this.counter < 14){
					//console.log("TALKING");
					this.blastRelease = true;
					app.main.sound.playTaunt5(Math.round(getRandom(15,18)));
				} else {
					this.blastRelease = false;
				}
				if(this.arms == false){
					if(this.counter < 14){
						app.main.sound.playEnergyAttack3(1);
						if(app.main.EE == true){
							this.energy -= 3;
						} else {
							this.energy -= 5;
						}
						if(this.left == true){
							app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 27,this.left, 6, 2));
						} else {
							app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 27,this.left, 6, 2));
						}
						if(app.main.BR == true && app.main.DB == false){
							this.counter = 20;
						}
					}
					if(app.main.DB == true){
						if(this.counter < 17 && this.counter > 15){
						app.main.sound.playEnergyAttack3(1);
						if(app.main.EE == true){
							this.energy -= 3;
						} else {
							this.energy -= 5;
						}
						if(this.left == true){
							app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 27,this.left, 6, 2));
						} else {
							app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 27,this.left, 6, 2));
						}
						if(app.main.BR == true){
							this.counter = 20;
						}
					    }
					}
					ctx.drawImage(this.finger,0,5);
				} else if(this.arms == true){
					if(this.counter < 14){
						app.main.sound.playEnergyAttack3(1);
						if(app.main.EE == true){
							this.energy -= 3;
						} else {
							this.energy -= 5;
						}
						
						if(this.left == true){
							app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 27,this.left, 6, 2));
						} else {
							app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 27,this.left, 6, 2));
						}
						if(app.main.BR == true && app.main.DB == false){
							this.counter = 20;
						}
					}
					if(app.main.DB == true){
						if(this.counter < 17 && this.counter > 15){
						app.main.sound.playEnergyAttack3(1);
						if(app.main.EE == true){
							this.energy -= 3;
						} else {
							this.energy -= 5;
						}
						if(this.left == true){
							app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 27,this.left, 6, 2));
						} else {
							app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 27,this.left, 6, 2));
						}
						if(app.main.BR == true){
							this.counter = 20;
						}
					    }
					}
					ctx.drawImage(this.finger,0,5);
				}
			} else {
				ctx.drawImage(this.finger,0,5);
				app.main.aiChoice4 = Math.random();
				app.main.chance3 = Math.random();
				this.intensify = false;
				this.powerMove = false;
				this.fight = false;
				this.attacking = false;
				this.blasting = false;
				this.counter = 0;
				this.blastRelease = false;
				this.stun = false;
			}
			} else if(app.main.LG == true) { //Blast Barrage
				if(this.counter < 4){
				this.stun = true;
				ctx.drawImage(this.blast,0,-1);
			} else if(this.counter < 5){
				ctx.drawImage(this.blast,0,-1);
				app.main.sound.playTaunt5(Math.round(getRandom(38,39)));
			} else if(this.counter < 6){
				this.blastRelease = true;
				app.main.sound.playEnergyAttack2(5);
				this.energy -= 2;
				if(app.main.HZ == true){
					if(this.left == true){
						app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 30,this.left, 6, 0));
					} else {
						app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 30,this.left, 6, 0));
					}
				} else {
					if(this.left == true){
						app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 30,this.left, 6, 0));
					} else {
						app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 30,this.left, 6, 0));
					}
				}
				ctx.drawImage(this.blast,0,-1);
			} else if(this.counter < 8){
				this.blastRelease = false;
				ctx.drawImage(this.blast,0,-1);
			} else if(this.counter < 9){
				this.blastRelease = true;
				app.main.sound.playEnergyAttack2(5);
				this.energy -= 2;
				if(this.left == true){
					app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 30,this.left, 6, 0));
				} else {
					app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 30,this.left, 6, 0));
				}
				ctx.drawImage(this.blast,0,-1);
			} else if(this.counter < 11){
				this.blastRelease = false;
				ctx.drawImage(this.blast,0,-1);
			} else if(this.counter < 12){
				this.blastRelease = true;
				app.main.sound.playEnergyAttack2(5);
				this.energy -= 2;
				if(app.main.HZ == true){
					if(this.left == true){
						app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 30,this.left, 6, 0));
					} else {
						app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 30,this.left, 6, 0));
					}
				} else {
					if(this.left == true){
						app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 30,this.left, 6, 0));
					} else {
						app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 30,this.left, 6, 0));
					}
				}
				ctx.drawImage(this.blast,0,-1);
			} else if(this.counter < 14){
				this.blastRelease = false;
				ctx.drawImage(this.blast,0,-1);
			} else if(this.counter < 15){
				this.blastRelease = true;
				app.main.sound.playEnergyAttack2(5);
				this.energy -= 2;
				if(this.left == true){
					app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 30,this.left, 6, 0));
				} else {
					app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 30,this.left, 6, 0));
				}
				ctx.drawImage(this.blast,0,-1);
			} else if(this.counter < 17){
				this.blastRelease = false;
				ctx.drawImage(this.blast,0,-1);
			} else if(this.counter < 18){
				this.blastRelease = true;
				app.main.sound.playEnergyAttack2(5);
				this.energy -= 2;
				if(app.main.HZ == true){
					if(this.left == true){
						app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 30,this.left, 6, 0));
					} else {
						app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 30,this.left, 6, 0));
					}
				} else {
					if(this.left == true){
						app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 30,this.left, 6, 0));
					} else {
						app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 30,this.left, 6, 0));
					}
				}
				ctx.drawImage(this.blast,0,-1);
			} else if(this.counter < 20){
				this.blastRelease = false;
				ctx.drawImage(this.blast,0,-1);
			} else if(this.counter < 21){
				this.blastRelease = true;
				app.main.sound.playEnergyAttack2(5);
				this.energy -= 2;
				if(this.left == true){
					app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 30,this.left, 6, 0));
				} else {
					app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 30,this.left, 6, 0));
				}
				ctx.drawImage(this.blast,0,-1);
			} else if(this.counter < 25){
				this.blastRelease = false;
				ctx.drawImage(this.blast,0,-1);
			} else {
				if(this.arms == false){
					this.arms = true;
				} else if(this.arms == true){
					this.arms = false;
				}
				ctx.drawImage(this.blast,0,-1);
				app.main.aiChoice4 = Math.random();
				app.main.chance3 = Math.random();
				this.intensify = false;
				this.powerMove = false;
				this.fight = false;
				this.attacking = false;
				this.blasting = false;
				this.blastRelease = false;
				this.counter = 0;
				this.stun = false;
			}
			}
		//BLOCK
		} else if(this.blocking == true && this.hit == false && (this.stun == false || this.superSpeed == true) && this.fieldOn == false){
			ctx.drawImage(this.block,0,5);

		//FIELD
		} else if(this.blocking == true && this.fieldOn == true){
			if(this.counter < 50){
				this.blocking = true;
				this.fieldOn = true;
				this.stun = true;
				this.fieldTimer++;
				if((this.counter %2) == 0){
					ctx.drawImage(this.useField1,-15,0);
				} else {
					ctx.drawImage(this.useField1,-15,0);
				}
				
				if(this.counter < 2){
					app.main.sound.playEnergyAttack3(51);
				} else if(this.counter < 5 && this.counter > 3){
					app.main.sound.playTaunt5(Math.round(getRandom(19,21)));
				}
				
				ctx.save();
				ctx.translate(-12,5);
				if(this.counter < 5){
					ctx.globalAlpha = this.counter / 10;
					ctx.scale((((this.counter * 2)/10)),(((this.counter * 2)/10)));
					if(this.counter < 2){
						ctx.drawImage(this.fieldMain,35.2,-2);
					} else if(this.counter < 3){
						ctx.drawImage(this.fieldMain,-28.8,-3);
					} else if(this.counter < 4){
						ctx.drawImage(this.fieldMain,-38.4,-4);
					}
				} else {
					ctx.scale(.8,.8);
					ctx.globalAlpha = .4;
					ctx.drawImage(this.fieldMain,-48,-5);
				}
				ctx.globalAlpha = .5;
				if(this.counter > 4){
				if(this.fieldTimer < 2){
					ctx.drawImage(this.field1,-48,-5);
				} else if(this.fieldTimer < 3){
					ctx.drawImage(this.field2,-48,-5);
				} else if(this.fieldTimer < 4){
					ctx.drawImage(this.field3,-48,-5);
				} else if(this.fieldTimer < 5){
					ctx.drawImage(this.field4,-48,-5);
				} else if(this.fieldTimer < 6){
					ctx.drawImage(this.field5,-48,-5);
				} else if(this.fieldTimer < 7){
					ctx.drawImage(this.field6,-48,-5);
				} else if(this.fieldTimer < 8){
					ctx.drawImage(this.field7,-48,-5);
				} else if(this.fieldTimer < 9){
					ctx.drawImage(this.field8,-48,-5);
					this.fieldTimer = 0;
				} else {
					this.fieldTimer = 0;
				}
				}
				ctx.restore();
				
			} else {
				if((this.counter %2) == 0){
					ctx.drawImage(this.useField1,-15,0);
				} else {
					ctx.drawImage(this.useField1,-15,0);
				}
				this.fieldOn = false;
				this.blocking = false;
				this.stun = false;
				//this.fielding = false;
				app.main.aiChoice4 = Math.random();
				app.main.chance3 = Math.random();
				this.counter = 0;
			}
		//TAUNT
		} else if(this.taunting == true && this.hit == false && this.hardHit != true){
			if((this.counter < 25 && app.main.vegeta.teleDelay < 2) || (this.counter < 12 && app.main.vegeta.teleDelay > 1)){
				this.stun = true;
				ctx.drawImage(this.stance,0,0);
				if(this.counter > 19 && this.counter < 21){
					app.main.sound.playTaunt5(Math.round(this.tauntPick));
				}
			} else {
				ctx.drawImage(this.stance,0,0);
				//this.counter = 0;
				this.stamina = 28;
				this.stun = false;
				this.intensify = false;
				this.taunting = false;
				this.counter = 0;
			}
		//BASIC HIT
		} else if(this.hit == true && this.hardHit == false && this.taunting == false){
			if(this.stunCounter < 3){
				if(app.main.activeSupport == false){
					if(app.main.vegeta.attacking == true){
						if(hardAttackHitTest(app.main.vegeta, app.main.android17)){
							app.main.roundScore2 -= 6;
						}
					}
				} else {
					if(app.main.vegeta.attacking == true || app.main.support[0].attacking == true || app.main.support[1].attacking == true){
						if(hardAttackHitTest(app.main.vegeta, app.main.android17)){
							app.main.roundScore2 -= 6;
						}
					}
				}
				this.stun = true;
				ctx.drawImage(this.hit1,-10,0);
			} else {
				this.decisionTimer += 10;
				this.defBreak++;
				ctx.drawImage(this.hit1,-10,0);
				this.stun = false;
				this.hit = false; 
				this.counter = 0;
			}
		/*
		} else if(this.hardHit == true && this.hit == true){
			console.log("HITHITHITHITHITHTI");
			if(this.stunCounter < 10){
				this.stun = true;
				ctx.drawImage(this.fallSide,5,0);
			} else {
				ctx.drawImage(this.fallSide,5,0);
				this.stun = false;
				this.hit = false;
			}
			*/
		//HARD HIT
		} else if(this.hardHit == true && this.hit == true && (this.air == false || this.blasted == true)){
			if(this.stunCounter < 22){
				this.voiceChance = Math.random();
				if(this.stunCounter < 2 && app.main.battle != 3 && (this.voiceChance > .5 || this.blasted == true)){
					app.main.sound.playTaunt5(Math.round(getRandom(12,14)));
				} else if(this.stunCounter < 2 && app.main.battle == 3){
					app.main.sound.playTaunt5(Math.round(getRandom(9,11)));
				}
				if(app.main.activeSupport == false){
					if(app.main.vegeta.attacking == true){
						if(hardAttackHitTest(app.main.vegeta, app.main.android17)){
							app.main.roundScore2 -= 3;
						}
					}
				} else {
					if(app.main.vegeta.attacking == true || app.main.support[0].attacking == true || app.main.support[1].attacking == true){
						if(hardAttackHitTest(app.main.vegeta, app.main.android17)){
							app.main.roundScore2 -= 3;
						}
					}
				}
				if(app.main.IR == true && this.stunCounter > 8){
					this.stunCounter = 22;
				}
				this.stun = true;
				ctx.drawImage(this.hitHard,-15,2);
			} else {
				ctx.drawImage(this.hitHard,-15,2);
				this.decisionTimer += 10;
				this.stun = false;
				this.hardHit = false;
				this.hit = false; 
				this.blasted = false;
				this.counter = 0;
			}
		//HARD HIT AIR
		} else if(this.hardHit == true && this.hit == true && this.air == true){
			if(this.punched == true){
				if(this.stunCounter < 22){
				this.voiceChance = Math.random();
				if(this.stunCounter < 2 && this.voiceChance > .5){
					app.main.sound.playTaunt5(Math.round(getRandom(12,14)));
				}
				if(app.main.activeSupport == false){
					if(app.main.vegeta.attacking == true){
						if(hardAttackHitTest(app.main.vegeta, app.main.android17)){
							app.main.roundScore2 -= 3;
						}
					}
				} else {
					if(app.main.vegeta.attacking == true || app.main.support[0].attacking == true || app.main.support[1].attacking == true){
						if(hardAttackHitTest(app.main.vegeta, app.main.android17)){
							app.main.roundScore2 -= 3;
						}
					}
				}
					this.stun = true;
					if(app.main.IR == true && this.stunCounter > 8){
					    this.stunCounter = 22;
				    }
					ctx.drawImage(this.fallDown,-5,20);		
				} else {
					this.decisionTimer += 10;
					ctx.drawImage(this.fallDown,-5,20);
					this.stun = false;
					this.hardHit = false;
					this.hit = false; 
					this.counter = 0;
				}
			} else {
				if(this.stunCounter < 22){
				this.voiceChance = Math.random();
				if(this.stunCounter < 2 && this.voiceChance > .5){
					app.main.sound.playTaunt5(Math.round(getRandom(12,14)));
				}
				if(app.main.activeSupport == false){
					if(app.main.vegeta.attacking == true){
						if(hardAttackHitTest(app.main.vegeta, app.main.android17)){
							app.main.roundScore2 -= 3;
						}
					}
				} else {
					if(app.main.vegeta.attacking == true || app.main.support[0].attacking == true || app.main.support[1].attacking == true){
						if(hardAttackHitTest(app.main.vegeta, app.main.android17)){
							app.main.roundScore2 -= 3;
						}
					}
				}
					this.stun = true;
					if(app.main.IR == true && this.stunCounter > 8){
						this.stunCounter = 22;
					}
					ctx.drawImage(this.fallSide,0,20);
				} else {
					ctx.drawImage(this.fallSide,0,20);
					this.stun = false;
					this.hardHit = false;
					this.hit = false; 
					this.counter = 0;
				}
			}
		} else if(this.end == true){
				if(this.air == true){
					this.stun = true;
					ctx.drawImage(this.fallDown,-5,20);		
				} else {
					this.stun = true;
					ctx.drawImage(this.ground17,-15,70);
					/*
					if(this.stunCounter > 10){
						this.vanish = true;
						
						app.main.environment.deathVegetaDirLeft = this.left;
						app.main.environment.deathLocationVegeta = new Victor(this.position.x, this.position.y);
						
						this.dead = true;
					}
					*/
				}
		}
		
		}//end if
				
		//SUPER SPEED (TELEPORT) DRAW 
		if(this.superSpeed == true && this.appear == false){
			this.speedCounter++;
			ctx.save();
			//ctx.scale(1.2,1.2);
			if(this.counter < 4){
				if(this.counter < 2){
					this.positionLast = new Victor(this.position.x,this.position.y);
					app.main.sound.playSpecialReaction3(19);
					var first = getRandom(0,1);
					var second = getRandom(0,25);
					app.main.environment.clashDelay = 0;
					if(first > .7 && app.main.gameState != app.main.GAME_STATE.TUTORIAL){
						this.teleDelayTime = second;
						this.delayingTele = true;
					}
				}
				if(this.speedCounter < 2){
					if(this.velocity.x != 0){
						ctx.drawImage(this.teleport,-40,-5);
					} else {
						ctx.drawImage(this.teleportThin,-30,-5);
					}
				} else if(this.speedCounter < 3){
					//blink
				} else {
					this.speedCounter = 0;
				}
			} else if(this.counter < 7){
				this.stun = true;
				this.vanish = true;
				if(this.speedCounter < 2){
					if(this.velocity.x != 0){
						ctx.drawImage(this.teleport,-40,-5);
						ctx.drawImage(this.teleport,-40,-2);
					} else {
						ctx.drawImage(this.teleport,-30,-5);
						ctx.drawImage(this.teleport,-30,-2);
					}
				} else if(this.speedCounter < 3){
					//blink
				} else {
					this.speedCounter = 0;
				}
				
			} else if(this.counter < 8){
			if(((this.end == false || app.main.gameState == app.main.GAME_STATE.TUTORIAL) && (this.delayingTele == false || this.teleDelay > 25)) || app.main.scene == true){
				this.teleDelay = 0;
				this.speed();
				
				if(app.main.ES == true){
					this.counter = 13;
				}
				
				} else {
					this.aboveBuilding = false;
					if(app.main.scene == false){
						this.position.x = getRandom(0,1024);
						this.position.y = getRandom(0,450);
					}
					this.aboveBuilding = false;
					this.teleDelay++;
					this.counter = 6;
				}
				
			} else if(this.counter < 12){
				if(this.speedCounter < 2){
					ctx.drawImage(this.teleportThin,-30,-5);
					ctx.drawImage(this.teleportThin,-30,-2);
				} else if(this.speedCounter < 3){
					//blink
				} else {
					this.speedCounter = 0;
				}
			} else if(this.counter < 15){
				this.velocity.x = 0;
				this.decel.x = 0;
				//this.jumpVelocity.y = 0;
				this.vanish = false;
				if(this.speedCounter < 2){
					ctx.drawImage(this.teleportThin,-30,-5);
				} else if(this.speedCounter < 3){
					//blink
				} else {
					this.speedCounter = 0;
				}
			} else {
				app.main.sound.playSpecialReaction3(20);
				this.stun = false;
				this.fight = false;
				app.main.aiChoice4 = Math.random();
				this.counter = 0;
				this.superSpeed = false;
				/* if(this.protectShield == true){
					this.stun = false;
					this.fight = false;
					this.blocking = true;
					this.fieldOn = true;
					this.protectShield = false;
					this.counter = 0;
					this.superSpeed = false;
				} */
			}
			ctx.restore();
		} 
		
		
		//SPECIAL SCENE VERSION OF SUPER SPEED
		if(this.appear == true && this.superSpeed == true){
				this.speedCounter++;
				ctx.save();
				//ctx.scale(1.2,1.2);
			if(this.counter < 5){
				if(this.speedCounter < 2){
					ctx.drawImage(this.teleport,-40,-5);
					ctx.drawImage(this.teleport,-40,-2);
				} else if(this.speedCounter < 3){
					//blink
				} else {
					this.speedCounter = 0;
				}
			} else if(this.counter < 8){
				this.vanish = false;
				if(this.speedCounter < 2){
					ctx.drawImage(this.teleport,-40,-5);
				} else if(this.speedCounter < 3){
					//blink
				} else {
					this.speedCounter = 0;
				}
			} else {
				app.main.sound.playSpecialReaction3(20);
				this.fight = false;
				this.superSpeed = false;
				this.appear = false;
				this.counter = 0;
			}
			ctx.restore();
		}
		
		ctx.restore();
	};
	
	
	return Android17; 
})(); //end IIFE