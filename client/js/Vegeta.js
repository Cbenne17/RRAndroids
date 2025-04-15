
"use strict";

var app = app || {};


app.Vegeta = (function(){
	
	function Vegeta(start,type,opponent){
		
		//Core Stats
		this.health = 100;
		this.endurance = 100;
		this.energy = 100;
		this.stamina = 28;
		
		//Special Stats
		this.specialHealth = 10;
		
		this.specialDamage = false;
		this.spSaying = false;
		
		//STATE VARIABLES dodge
		this.vegeta = false;
		
		this.gero = false;
		this.piccolo = false;
		this.gohan = false;
		this.tien = false;
		this.krillin = false;
		this.right = true;
		this.left = false;
		this.movingLeft = false;
		this.movingRight = false;
		this.reverse = true;
		this.changeDir = false;
		this.behind = false;
		this.air = false;
		this.ground = false;
		this.decend = false;
		this.flying = false;
		this.fight = false;
		this.intensify = false;
		this.attacking = false;
		this.taunting = false;
		this.charging = false;
		this.basic = false;
		this.hard = false;
		this.hover = false;
		this.blocking = false;
		this.blasting = false;
		this.powerMove = false;
		this.blastRelease = false;
		this.blastTrigger = false;
		this.blasted = false;
		this.smallBlasted = false;
		this.exhausted = false;
		this.blastBurn = false;
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
		this.superForm = false;
		this.superSpeed = false;
		this.superSpeedExhaustion = false;
		this.vanish = true; //change back
		this.byBuilding = false;
		this.aboveBuilding = false;
		this.aboveSky = false;
		this.appear = false;
		this.stun = true; //change back
		this.end = false;
		this.dead = false;
		this.trueDead = false;
		this.unable = false;
		this.test = false;
		this.tutor = false;
		this.unstoppable = false;
		this.fallHit = false;
		this.stuckInBlast = false;
		this.stuckYell = false;
		
		this.flareHit = false;
		
		this.fallTimer = 0;
		
		this.supportCounter = 0;
		
		this.quickDodge = 0;
		this.rollDodge = false;
		
		this.startFallKick = false;
		
		this.angryTaunt = false;
		this.specialBlock = false;
		
		this.unstopTimer = 0;
		
		this.voiceStop = false;
		this.voiceChance = 0;
		
		this.farRight = false;
		this.farleft = false;
		this.backHit = 0;
		this.backHitTest = false;
		
		this.kickSound = false;
		
		this.hoverFix = false;
		
		this.teleDelay = 0;
		this.delayingTele = false;
		this.teleDelayTime = 0;
		
		this.stillChance =  Math.random();
		
		this.swoosh = false;
		this.swooshTimer = 0;
		
		this.headbuttGohan = false;
		
		this.saveThem = false;
		
		this.sparkCounter = 0;
		
		this.lookUp = false;
		this.lookDown = false;
		
		this.teleUp = false;
		this.teleDown = false;
		this.teleFace = false;
		
		this.aboveMid = false;
		
		this.specMove = false;
		this.specChance = 0;
		this.specTimer = 0;
		
		this.effortTimer = 0;
		this.lastEffort = false;
		
		this.hits17 = false;
		this.hits18 = false;
		
		this.turnsUp = false;
		this.turnsDown = false;
		this.turnTalk = false;
		this.justTurned = false;
		
		this.backOffGero = false;
		
		this.prepToBlast = 0;
		
		this.stuckCooldown = 0;
		
		this.cinematic = false;
		this.cine = 0;
		
		this.almostSS = false;
		this.almostCounter = 0;
		this.almostFade = 100;
		this.lockSS = false;
		
		this.sceneOpen = true;
		this.scenePlay = false;
		this.fallPrepTele = true;
		
		this.focus17 = false;
		
		this.deadCount = false;
		
		this.stillGero = false;
		
		this.backDown = false;
		
		//Extras
		this.flyDust = false;
		this.landDust = false;
		this.fallDust = false;
		this.prevX = null;
		this.lastKnown = new Victor(0,0);
		this.flySoundDelay = 0;
		
		//AI
		this.aggressive = true;
		this.defensive = false;
		this.dodge = false;
		this.defBreak = 0;
		this.aiCounter = 0;
		this.blastCount = 0;
		this.prepBlast = true;
		this.triggerBlast = false;
		this.striking = false;
		this.energyUse = 0;
		
		this.fallHitSpecial = false;
		
		//Timers
		this.counter = 0;
		this.stunCounter = 0;
		this.speedCounter = 0;
		this.hoverCounter = 0;
		this.chargeCounter = 0;
		this.sceneCounter = 0;
		this.exhaustedCounter = 0;
		this.blastBurnCounter = 0;
		this.speedExhaust = 0;
		this.randomEffect = 0;
		this.extraCounter = 0;
		this.smoothTimer = 0;
		this.tauntPick = getRandom(10, 16);
		this.tauntRand = getRandom(6,15);
		this.fallingKickCooldown = 0;
		
		this.auraTimer = 0;
		this.auraTrigger = false;
		
		this.exhaustTalk = false;
		this.deathTalk = false;
		
		this.fast17 = false;
		
		this.firstDeadSupport = false;
		
		//Value holders
		this.blastBurnLength = 20;
		
		
		// CONSTANTS
		this.BUILDING = new Victor(650,270);
		this.GROUND = new Victor(0,620);
		this.SKY = new Victor(0,220);
		this.SKYTOP = new Victor(0,25);
		this.MAX_STAMINA = 100;
		
		
		//VECTORS (Victors)
		this.attackSize = new Victor(30, 60);
		this.position = new Victor(start, this.GROUND.y);
		this.attackPosition = new Victor(0, 0);
		this.hardAttackPosition = new Victor(0, 0);
		this.velocity = new Victor(0, 0);
		this.direction = new Victor(1, 0);
		this.accel = new Victor(2, 0);
		this.decel = new Victor(0, 0);
		this.jumpVelocity = new Victor(0,-15);
		this.jumpAccel = new Victor(0,-1.5);
		this.gravity = new Victor(0,1.7);
		this.positionLast = new Victor(this.position.x,this.position.y);
		
		if(type == 0){
			this.vegeta = true;
		} else if(type == 1){
			this.energy = 40;
			this.gero = true;
		} else if(type == 2){
			this.piccolo = true;
		} else if(type == 3){
			this.gohan = true;
		} else if(type == 4){
			this.tien = true;
			this.endurance = 0;
			this.energy = 10000;
		} else if(type == 5){
			this.krillin = true;
			this.endurance = 0;
			this.energy = 10000;
			this.GROUND = new Victor(0,640);
		}
		
		if(this.vegeta == true) {
			this.size = new Victor(50, 100);
			this.LEFTWALL = new Victor(0,0);
			this.RIGHTWALL = new Victor(950,0);
		} else if(this.piccolo == true) {
			this.size = new Victor(60, 100);
			this.LEFTWALL = new Victor(25,0);
			this.RIGHTWALL = new Victor(925,0);
		} else if(this.gohan == true) {
			this.size = new Victor(50, 100);
			this.LEFTWALL = new Victor(0,0);
			this.RIGHTWALL = new Victor(950,0);
			this.position.y = this.GROUND.y - 100;
			this.jumpVelocity.y = -5;
		} else if(this.gero == true) {
			this.size = new Victor(50, 100);
			this.LEFTWALL = new Victor(0,0);
			this.RIGHTWALL = new Victor(950,0);
		} else if(this.tien == true) {
			this.position.y = this.GROUND.y - 100;
			this.size = new Victor(50, 100);
			this.LEFTWALL = new Victor(0,0);
			this.RIGHTWALL = new Victor(950,0);
		} else if(this.krillin == true) {
			this.size = new Victor(50, 80);
			this.LEFTWALL = new Victor(0,0);
			this.RIGHTWALL = new Victor(950,0);
		}
		
		// IMAGE SETUP 
		
		// ---- VEGETA IMAGES ------------------
		if(this.vegeta == true){
		var image = new Image();
		image.src =  app.imagesVegeta.stance;
		this.stance = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.stanceUp;
		this.stanceUp = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.stanceDown;
		this.stanceDown = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.slowFly;
		this.slowFly = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.fastFly;
		this.fastFly = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.flyUp;
		this.flyUp = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.flyUpUp;
		this.flyUpUp = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.flyUpDown;
		this.flyUpDown = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.flyDownSlow;
		this.flyDownSlow = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.flyDownFast;
		this.flyDownFast = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.reverse;
		this.moveReverse = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.punch;
		this.punch = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.knee;
		this.knee = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.punchPrep;
		this.punchPrep = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.hit1;
		this.hit1 = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.attackE;
		this.attackE = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.hardKick;
		this.hardKick = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.ground;
		this.groundVegeta = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.fallSide;
		this.fallSide = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.hardKickPrep;
		this.hardKickPrep = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.hardKickSwing;
		this.hardKickSwing = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.hardPunch;
		this.hardPunch = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.hardPunchAir;
		this.hardPunchAir = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.hardPunchAirPrep;
		this.hardPunchAirPrep = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.hardPunchAirSwing;
		this.hardPunchAirSwing = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.hardPunchPrep;
		this.hardPunchPrep = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.hitHard;
		this.hitHard = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.injured;
		this.injured = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.kick;
		this.kick = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.kickPrep;
		this.kickPrep = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.leftBlast;
		this.leftBlast = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.rightBlast;
		this.rightBlast = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.block;
		this.block = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.fallKick;
		this.fallKick = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.fallDown;
		this.fallDown = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.launchPrep;
		this.launchPrep = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.launchSwing;
		this.launchSwing = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.launch;
		this.launch = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.taunt;
		this.taunt = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.charge;
		this.charge = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.pose1;
		this.pose1Vegeta = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.pose2;
		this.pose2Vegeta = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.pose3;
		this.pose3Vegeta = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.pose4;
		this.pose4Vegeta = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.special1;
		this.special1Vegeta = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.burst1;
		this.burst1Vegeta = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.burst2;
		this.burst2Vegeta = image;
		
		image = new Image();
		image.src =  app.imagesVegeta.struggle1;
		this.struggle1Vegeta = image;
		
		}
		
		// ---- PICCOLO IMAGES ------------------
		if(this.piccolo == true){
		
		var image = new Image();
		image.src =  app.imagesPiccolo.stance;
		this.stancePiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.stanceUp;
		this.stanceUpPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.stanceDown;
		this.stanceDownPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.slowFly;
		this.slowFlyPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.fastFly;
		this.fastFlyPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.flyUp;
		this.flyUpPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.flyUpUp;
		this.flyUpUpPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.flyUpDown;
		this.flyUpDownPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.flyDownSlow;
		this.flyDownSlowPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.flyDownFast;
		this.flyDownFastPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.reverse;
		this.moveReversePiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.fallKick;
		this.fallKickPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.punch;
		this.punchPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.kneePrep;
		this.kneePrepPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.knee;
		this.kneePiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.punchPrep;
		this.punchPrepPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.hit1;
		this.hit1Piccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.hit2;
		this.hit2Piccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.hardKick;
		this.hardKickPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.ground;
		this.groundPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.fallSide;
		this.fallSidePiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.hardKickPrep;
		this.hardKickPrepPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.hardKickSwing;
		this.hardKickSwingPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.hardPunch;
		this.hardPunchPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.hardPunchAir;
		this.hardPunchAirPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.hardPunchAirPrep;
		this.hardPunchAirPrepPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.hardPunchAirSwing;
		this.hardPunchAirSwingPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.hardPunchPrep;
		this.hardPunchPrepPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.hitHard;
		this.hitHardPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.injured;
		this.injuredPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.kick;
		this.kickPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.kickPrep;
		this.kickPrepPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.blastPrep;
		this.blastPrepPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.blastPrepAir;
		this.blastPrepAirPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.blast;
		this.blastPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.blast2;
		this.blast2Piccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.blastAir;
		this.blastAirPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.block;
		this.blockPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.fallDown;
		this.fallDownPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.launchPrep;
		this.launchPrepPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.launchSwing;
		this.launchSwingPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.launch;
		this.launchPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.taunt;
		this.tauntPiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.pose1;
		this.pose1Piccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.pose2;
		this.pose2Piccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.pose3;
		this.pose3Piccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.pose4;
		this.pose4Piccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.energy1;
		this.energy1Piccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.energy2;
		this.energy2Piccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.energy3;
		this.energy3Piccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.energy4;
		this.energy4Piccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.charge;
		this.chargePiccolo = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.beamPrep;
		this.beamPrep = image;
		
		image = new Image();
		image.src =  app.imagesPiccolo.beam;
		this.beam = image;
		
		}
		
		// ---- GOHAN IMAGES ------------------
		
		if(this.gohan == true){
		
		var image = new Image();
		image.src =  app.imagesGohan.stance;
		this.stanceGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.stanceUp;
		this.stanceUpGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.stanceDown;
		this.stanceDownGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.slowFly;
		this.slowFlyGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.fastFly;
		this.fastFlyGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.flyUp;
		this.flyUpGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.flyUpUp;
		this.flyUpUpGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.flyUpDown;
		this.flyUpDownGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.flyDownSlow;
		this.flyDownSlowGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.flyDownFast;
		this.flyDownFastGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.reverse;
		this.moveReverseGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.leftPunch;
		this.leftPunchGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.rightPunch;
		this.rightPunchGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.punchPrep;
		this.punchPrepGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.fallKick;
		this.fallKickGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.hit1;
		this.hit1Gohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.beam;
		this.beamGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.beamUp;
		this.beamUpGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.beamDown;
		this.beamDownGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.beamPrep;
		this.beamPrepGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.hardKick;
		this.hardKickGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.ground;
		this.groundGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.fallSide;
		this.fallSideGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.hardKickPrep;
		this.hardKickPrepGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.hardKickSwing;
		this.hardKickSwingGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.hardPunchAir;
		this.hardPunchAirGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.hardPunchAirPrep;
		this.hardPunchAirPrepGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.hardPunchAirSwing;
		this.hardPunchAirSwingGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.hardPunchSwing;
		this.hardPunchSwingGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.hardPunchSwing2;
		this.hardPunchSwing2Gohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.hardPunchPrep;
		this.hardPunchPrepGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.hitHard;
		this.hitHardGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.injured;
		this.injuredGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.kick;
		this.kickGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.kickPrep;
		this.kickPrepGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.blast;
		this.blastGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.blastPrep;
		this.blastPrepGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.head;
		this.headGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.headPrep;
		this.headPrepGohan = image;
		
		
		image = new Image();
		image.src =  app.imagesGohan.block;
		this.blockGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.fallDown;
		this.fallDownGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.launchPrep;
		this.launchPrepGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.launchSwing;
		this.launchSwingGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.launch;
		this.launchGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.taunt;
		this.tauntGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.charge;
		this.chargeGohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.gohanSevere;
		this.gohanSevere = image;
		
		image = new Image();
		image.src =  app.imagesGohan.gohanSevere2;
		this.gohanSevere2 = image;
		
		image = new Image();
		image.src =  app.imagesGohan.mad1;
		this.mad1Gohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.ss2;
		this.SS2Gohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.aura1;
		this.aura1Gohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.aura2;
		this.aura2Gohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.aura3;
		this.aura3Gohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.aura4;
		this.aura4Gohan = image;
		
		image = new Image();
		image.src =  app.imagesGohan.aura5;
		this.aura5Gohan = image;
		
		}
		
		// ---- TIEN IMAGES ------------------
		
		if(this.tien == true){
		
		var image = new Image();
		image.src =  app.imagesTien.stance;
		this.stanceTien = image;
		
		image = new Image();
		image.src =  app.imagesTien.stanceUp;
		this.stanceUpTien = image;
		
		image = new Image();
		image.src =  app.imagesTien.stanceDown;
		this.stanceDownTien = image;
		
		image = new Image();
		image.src =  app.imagesTien.slowFly;
		this.slowFlyTien = image;
		
		image = new Image();
		image.src =  app.imagesTien.fastFly;
		this.fastFlyTien = image;
		
		image = new Image();
		image.src =  app.imagesTien.flyUp;
		this.flyUpTien = image;
		
		image = new Image();
		image.src =  app.imagesTien.flyUpUp;
		this.flyUpUpTien = image;
		
		image = new Image();
		image.src =  app.imagesTien.flyUpDown;
		this.flyUpDownTien = image;
		
		image = new Image();
		image.src =  app.imagesTien.flyDownSlow;
		this.flyDownSlowTien = image;
		
		image = new Image();
		image.src =  app.imagesTien.flyDownFast;
		this.flyDownFastTien = image;
		
		image = new Image();
		image.src =  app.imagesTien.reverse;
		this.moveReverseTien = image;
		
		image = new Image();
		image.src =  app.imagesTien.hit1;
		this.hit1Tien = image;
		
		image = new Image();
		image.src =  app.imagesTien.ground;
		this.groundTien = image;
		
		image = new Image();
		image.src =  app.imagesTien.fallSide;
		this.fallSideTien = image;
		
		image = new Image();
		image.src =  app.imagesTien.hitHard;
		this.hitHardTien = image;
		
		image = new Image();
		image.src =  app.imagesTien.injured;
		this.injuredTien = image;
		
		image = new Image();
		image.src =  app.imagesTien.fallDown;
		this.fallDownTien = image;
		
		image = new Image();
		image.src =  app.imagesTien.taunt;
		this.tauntTien = image;
		
		image = new Image();
		image.src =  app.imagesTien.solar;
		this.solarTien = image;
		
		image = new Image();
		image.src =  app.imagesTien.triBeam1;
		this.triBeam1 = image;
		
		image = new Image();
		image.src =  app.imagesTien.triBeam2;
		this.triBeam2 = image;
		
		image = new Image();
		image.src =  app.imagesTien.triBeam3;
		this.triBeam3 = image;
		
		image = new Image();
		image.src =  app.imagesTien.triBeam4;
		this.triBeam4 = image;
		
		image = new Image();
		image.src =  app.imagesTien.triBeam5;
		this.triBeam5 = image;
		
		image = new Image();
		image.src =  app.imagesTien.mad1;
		this.mad1Tien = image;
		
		}
		
		// ---- KRILLIN IMAGES ------------------
		
		if(this.krillin == true){
		
		var image = new Image();
		image.src =  app.imagesKrillin.stance;
		this.stanceKrillin = image;
		
		image = new Image();
		image.src =  app.imagesKrillin.stanceUp;
		this.stanceUpKrillin = image;
		
		image = new Image();
		image.src =  app.imagesKrillin.stanceDown;
		this.stanceDownKrillin = image;
		
		image = new Image();
		image.src =  app.imagesKrillin.slowFly;
		this.slowFlyKrillin = image;
		
		image = new Image();
		image.src =  app.imagesKrillin.fastFly;
		this.fastFlyKrillin = image;
		
		image = new Image();
		image.src =  app.imagesKrillin.flyUp;
		this.flyUpKrillin = image;
		
		image = new Image();
		image.src =  app.imagesKrillin.flyUpUp;
		this.flyUpUpKrillin = image;
		
		image = new Image();
		image.src =  app.imagesKrillin.flyUpDown;
		this.flyUpDownKrillin = image;
		
		image = new Image();
		image.src =  app.imagesKrillin.flyDownSlow;
		this.flyDownSlowKrillin = image;
		
		image = new Image();
		image.src =  app.imagesKrillin.flyDownFast;
		this.flyDownFastKrillin = image;
		
		image = new Image();
		image.src =  app.imagesKrillin.reverse;
		this.moveReverseKrillin = image;
		
		image = new Image();
		image.src =  app.imagesKrillin.hit1;
		this.hit1Krillin = image;
		
		image = new Image();
		image.src =  app.imagesKrillin.ground;
		this.groundKrillin = image;
		
		image = new Image();
		image.src =  app.imagesKrillin.fallSide;
		this.fallSideKrillin = image;
		
		image = new Image();
		image.src =  app.imagesKrillin.hitHard;
		this.hitHardKrillin = image;
		
		image = new Image();
		image.src =  app.imagesKrillin.injured;
		this.injuredKrillin = image;
		
		image = new Image();
		image.src =  app.imagesKrillin.fallDown;
		this.fallDownKrillin = image;
		
		image = new Image();
		image.src =  app.imagesKrillin.taunt;
		this.tauntKrillin = image;
		
		image = new Image();
		image.src =  app.imagesKrillin.solar;
		this.solarKrillin = image;
		
		image = new Image();
		image.src =  app.imagesKrillin.disk1;
		this.disk1 = image;
		
		image = new Image();
		image.src =  app.imagesKrillin.disk2;
		this.disk2 = image;
		
		image = new Image();
		image.src =  app.imagesKrillin.disk3;
		this.disk3 = image;
		
		image = new Image();
		image.src =  app.imagesKrillin.disk4;
		this.disk4 = image;
		
		image = new Image();
		image.src =  app.imagesKrillin.mad1;
		this.mad1Krillin = image;
		
		image = new Image();
		image.src =  app.imagesKrillin.mad2;
		this.mad2Krillin = image;
		
		}
		
		// ---- GERO IMAGES ------------------
		
		if(this.gero == true){
		
		image = new Image();
		image.src =  app.imagesGero.stance;
		this.stanceGero = image;
		
		image = new Image();
		image.src =  app.imagesGero.slowFly;
		this.slowFlyGero = image;
		
		image = new Image();
		image.src =  app.imagesGero.fastFly;
		this.fastFlyGero = image;
		
		image = new Image();
		image.src =  app.imagesGero.flyUp;
		this.flyUpGero = image;
		
		image = new Image();
		image.src =  app.imagesGero.flyDownSlow;
		this.flyDownSlowGero = image;
		
		image = new Image();
		image.src =  app.imagesGero.flyDownFast;
		this.flyDownFastGero = image;
		
		image = new Image();
		image.src =  app.imagesGero.reverse;
		this.moveReverseGero = image;
		
		image = new Image();
		image.src =  app.imagesGero.leftPunch;
		this.leftPunchGero = image;
		
		image = new Image();
		image.src =  app.imagesGero.rightPunch;
		this.rightPunchGero = image;
		
		image = new Image();
		image.src =  app.imagesGero.punchPrep;
		this.punchPrepGero = image;
		
		image = new Image();
		image.src =  app.imagesGero.hit1;
		this.hit1Gero = image;
		
		image = new Image();
		image.src =  app.imagesGero.kick;
		this.kickGero = image;
		
		image = new Image();
		image.src =  app.imagesGero.kickPrep;
		this.kickPrepGero = image;
		
		image = new Image();
		image.src =  app.imagesGero.hitHard;
		this.hitHardGero = image;
		
		image = new Image();
		image.src =  app.imagesGero.fallSide;
		this.fallSideGero = image;
		
		image = new Image();
		image.src =  app.imagesGero.injured;
		this.injuredGero = image;
		
		image = new Image();
		image.src =  app.imagesGero.fallDown;
		this.fallDownGero = image;
		
		image = new Image();
		image.src =  app.imagesGero.geroStill1;
		this.geroStill1 = image;
		
		image = new Image();
		image.src =  app.imagesGero.geroStill2;
		this.geroStill2 = image;
		
		image = new Image();
		image.src =  app.imagesGero.geroStill3;
		this.geroStill3 = image;
		
		image = new Image();
		image.src =  app.imagesGero.geroStill4;
		this.geroStill4 = image;
		
		}
		
		//Attack IMAGES
		
		image = new Image();
		image.src =  app.attack.blastCharge1;
		this.blastCharge1 = image;
		
		image = new Image();
		image.src =  app.attack.tele;
		this.teleport = image;
		
		image = new Image();
		image.src =  app.attack.tele2;
		this.teleport2 = image;
		
		image = new Image();
		image.src =  app.attack.tele3;
		this.teleport3 = image;
		
		image = new Image();
		image.src =  app.attack.teleThin;
		this.teleportThin = image;
		
		image = new Image();
		image.src =  app.attack.tele2Thin;
		this.teleport2Thin = image;
		
		image = new Image();
		image.src =  app.attack.tele3Thin;
		this.teleport3Thin = image;
		
		image = new Image();
		image.src =  app.attack.tele5;
		this.teleport5 = image;
		
		image = new Image();
		image.src =  app.attack.tele6;
		this.teleport6 = image;
		
		image = new Image();
		image.src =  app.attack.auraWhite1;
		this.auraWhite1 = image;
		
		image = new Image();
		image.src =  app.attack.auraWhite2;
		this.auraWhite2 = image;
		
		image = new Image();
		image.src =  app.attack.auraWhite3;
		this.auraWhite3 = image;
		
		image = new Image();
		image.src =  app.attack.auraWhite4;
		this.auraWhite4 = image;
		
		image = new Image();
		image.src =  app.attack.auraYellow1;
		this.auraYellow1 = image;
		
		image = new Image();
		image.src =  app.attack.auraYellow2;
		this.auraYellow2 = image;
		
		image = new Image();
		image.src =  app.attack.auraYellow3;
		this.auraYellow3 = image;
		
		image = new Image();
		image.src =  app.attack.auraYellow4;
		this.auraYellow4 = image;
		
		image = new Image();
		image.src =  app.attack.sparks1;
		this.sparks1 = image;
		
		image = new Image();
		image.src =  app.attack.sparks2;
		this.sparks2 = image;
		
		image = new Image();
		image.src =  app.attack.sparks3;
		this.sparks3 = image;
		
		image = new Image();
		image.src =  app.attack.sparks4;
		this.sparks4 = image;
		
		image = new Image();
		image.src =  app.attack.disk1;
		this.energyDisk1 = image;
		
		image = new Image();
		image.src =  app.attack.burst1;
		this.burst1 = image;
		
		image = new Image();
		image.src =  app.attack.burst2;
		this.burst2 = image;
		
		image = new Image();
		image.src =  app.attack.burst3;
		this.burst3 = image;
		
		image = new Image();
		image.src =  app.attack.burst4;
		this.burst4 = image;
	}
	
	//FUNCTION TO UPDATE MANY VALUES
	Vegeta.prototype.update = function(){
		
		if((this.gero == true || this.piccolo == true || this.vegeta == true) && this.stun == true && app.main.scene == true){
			this.position.y = this.GROUND.y;
			this.air = false;
			this.ground = true;
			this.jumpVelocity.y = 0;
		}
		
		if(this.focus17 == false && app.main.android18.vanish == true){
			this.velocity.x = 0;
		}

		//Hit detection adjustment
		/*
		if(this.vegeta == true) {
			if(this.left == false){
				this.size = new Victor(20, 100);
			} else {
				this.size = new Victor(35, 100);
			}
		} else if(this.piccolo == true) {
			if(this.left == false){
				this.size = new Victor(20, 100);
			} else {
				this.size = new Victor(40, 100);
			}
		} else if(this.gohan == true) {
			this.size = new Victor(20, 100);
		} else if(this.gero == true) {
			this.size = new Victor(20, 100);
		}
		*/
		if(this.vegeta == true){
			this.jumpAccel = new Victor(0,-2);
		} else if(this.gohan == true && this.superForm == true){
			this.jumpAccel = new Victor(0,-2.5);
		}
		
		/* if(this.jumpVelocity.y > 10 && this.up == true && this.stun == false && this.end == false && this.hardHit == false && this.fight == false && this.blasting == false && this.superSpeed == false){
			this.jumpVelocity.y = -20;
		} */
		
		this.flySoundDelay++;
		
		this.stuckCooldown++;
		
		//console.log(this.stuckCooldown + " STUCKCPPPLDOWN!");
		//console.log(this.stuckInBlast + " STUCKBLASTTTTTT");
		
		//Handling 17
		if(this.fast17 == false){
		
		if(app.main.android17.active == true){
			//console.log("FOCUS FOCUS FOCUS 17 17 17 @@@@: " + this.focus17);
			if(hardAttackHitTest(app.main.vegeta,app.main.android18) == true){
				//console.log("TOUCHING 18");
				this.focus17 = false;
			} else if(hardAttackHitTest(app.main.vegeta,app.main.android17) == true){
				//console.log("TOUCHING 17");
				this.focus17 = true;
			}
		} else {
			//console.log("FOCUS FOCUS FOCUS 17 17 17 @@@@: " + this.focus17);
			this.focus17 = false;
		}
		
		
		if(app.main.android17.encounter != true){
			this.focus17 = false;
		}
		
		} else {
			this.focus17 = true;
		}
		
		if(this.fast17 == true && app.main.android17.hurtBlasting == false){
			this.fast17 = false;
		}
		
		
		//Looking around
		if(this.focus17 == false){
			if(this.position.y < app.main.android18.position.y - 150){
				this.lookDown = true;
			} else if(this.position.y > app.main.android18.position.y + 150){
				this.lookUp = true;
			} else {
				this.lookUp = false;
				this.lookDown = false;
			}
		} else {
			if(this.position.y < app.main.android17.position.y - 100){
				this.lookDown = true;
			} else if(this.position.y > app.main.android17.position.y + 100){
				this.lookUp = true;
			} else {
				this.lookUp = false;
				this.lookDown = false;
			}
		}
		
		//WALL POSITIONING
		if(this.focus17 == false){
			if(this.position.x < this.LEFTWALL.x + 30 && (hardAttackHitTest(app.main.vegeta, app.main.android18) != true) && (hitTest(app.main.vegeta, app.main.android18) != true) && this.stun == false && this.attacking == false && this.blasting == false && this.blocking == false && this.charging == false){
				this.farLeft = true;
				this.farRight = false;
				this.right = true;
				this.left = false;
			} else if(this.position.x > this.RIGHTWALL.x - 30 && (hardAttackHitTest(app.main.vegeta, app.main.android18) != true) && (hitTest(app.main.vegeta, app.main.android18) != true) && this.stun == false && this.attacking == false && this.blasting == false && this.blocking == false && this.charging == false){
				this.farRight = true;
				this.farLeft = false;
				this.right = false;
				this.left = true;
			} else {
				this.farLeft = false;
				this.farRight = false;
			}
		} else {
			if(this.position.x < this.LEFTWALL.x + 30 && (hardAttackHitTest(app.main.vegeta, app.main.android17) != true) && (hitTest(app.main.vegeta, app.main.android17) != true) && this.stun == false && this.attacking == false && this.blasting == false && this.blocking == false && this.charging == false){
				this.farLeft = true;
				this.farRight = false;
				this.right = true;
				this.left = false;
			} else if(this.position.x > this.RIGHTWALL.x - 30 && (hardAttackHitTest(app.main.vegeta, app.main.android17) != true) && (hitTest(app.main.vegeta, app.main.android17) != true) && this.stun == false && this.attacking == false && this.blasting == false && this.blocking == false && this.charging == false){
				this.farRight = true;
				this.farLeft = false;
				this.right = false;
				this.left = true;
			} else {
				this.farLeft = false;
				this.farRight = false;
			}
		}
		
		//OVERLAP
		if(this.end == false && this.stun == false && this.hardHit == false && app.main.android18.fallingKick == false && app.main.android17.fallingKick == false){
		if((this.position.x < this.LEFTWALL.x + 30) && (app.main.android18.position.x < app.main.android18.LEFTWALL.x + 30) && hitTest(app.main.vegeta,app.main.android18) == true){
			/* this.superSpeed = true;
			this.position.x = this.position.x + 50; */
			this.moveRight();
		} else if((this.position.x > this.RIGHTWALL.x - 30) && (app.main.android18.position.x > app.main.android18.RIGHTWALL.x - 30) && hitTest(app.main.vegeta,app.main.android18) == true){
			/* this.superSpeed = true;
			this.position.x = this.position.x - 50; */
			this.moveLeft();
		}
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
					app.main.sound.playSpecialReaction2(2);
				}
			} else if(this.vanish == false && this.superSpeed == false && this.end == false && this.hover == false){
				this.landDust = true;
				app.main.sound.playSpecialReaction2(3);
			}
		} 
		if(this.ground == false && ((this.position.y > this.BUILDING.y && (this.jumpVelocity.y < 11 || this.up == true)) || (this.position.y > this.BUILDING.y - 35 && this.jumpVelocity.y > 10 && this.up == false)) && ((this.velocity.x < 5 && this.velocity.x > -5) || this.hardHit == true) && this.aboveBuilding == true && this.down == false && this.end == false){
			this.position.copyY(this.BUILDING);
			//this.jumpVelocity = new Victor(0,-15);
			this.velocity.divideScalar(3);
			this.ground = true;
			this.air = false;
			this.decend = false;
			if((this.end == true && this.vanish == false) || (this.jumpVelocity.y > 20 && this.hardHit == true)){
				app.main.environment.shake = true;
				if(this.dead == false){
					app.main.sound.playSpecialReaction2(2);
				}
			} else if(this.vanish == false && this.superSpeed == false && this.end == false && this.hover == false){
				app.main.sound.playSpecialReaction2(3);
			}
		} 
		if(this.tien == false && this.krillin == false){
		if(this.position.y < this.SKY.y){
			this.aboveSky = true;
		} else {
			this.aboveSky = false;
		}
		} else {
			if(this.focus17 == false){
			if(this.position.y < this.SKYTOP.y + app.main.android18.position.y + 50){
				this.aboveSky = true;
			} else {
				this.aboveSky = false;
			}
			} else {
			if(this.position.y < this.SKYTOP.y + app.main.android17.position.y + 50){
				this.aboveSky = true;
			} else {
				this.aboveSky = false;
			}
			}
			if(this.position.y < this.SKY.y + 100){
				this.aboveMid = true;
			} else {
				this.aboveMid = false;
			}
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
		if(this.position.y < this.BUILDING.y && this.position.x > this.BUILDING.x && this.down == false && this.end == false){
			this.aboveBuilding = true;
		}
		if((this.position.x < this.BUILDING.x && this.position.y < this.GROUND.y) || (this.position.y > this.BUILDING.y && this.position.y < this.GROUND.y)) {
			this.air = true;
			this.aboveBuilding = false;
		}
		if(app.main.android18.air == true && this.vanish == true){ //bug fix
			this.flying = true;
			this.air = true;
			this.jumpVelocity.y = 0;
		}
		
		//Fix
		if(this.powerMove == true && this.jumpVelocity.y < -10){
			this.flying = false;
			this.jumpVelocity.y = 0;
		}
		
		//Fix
		if(this.position.y < this.SKYTOP.y + 20){
			this.ground = false;
			this.air = true;
		}
		
		//SCENE SKIP
		if(app.main.scene == true && app.main.gameState == app.main.GAME_STATE.TUTORIAL && (this.hit == true || this.blasted == true)){
			app.main.sound.pauseSceneVoice();
			app.main.sceneTimer = 190;
			app.main.vegeta.stun = false;
		}
		
		//GROUND CHECK
		if(this.ground == true && this.end == false) {
			if(this.stun == false && this.hardhit == false){
				this.jumpVelocity = new Victor(0,0);
			}
			if(this.up == true){
				this.jumpVelocity = new Victor(0,-15);
			}
			
			if(this.air == true){
				this.prevX = this.position.x;
				if(this.aboveBuilding == false){
					this.flyDust = true;
				}
			}
		}
		
		if(this.blocking == true){
			if(this.reverse == false){
				this.velocity.x = 0;
			}
		}
		
		if(this.dodge == true){
			this.smallBlasted = false;
		}
		
		if(this.ground == false){
			this.air = true;
		}
		
		if(this.smallBlasted == true && this.superSpeed == false && this.stun == false && this.hit == false && this.hardHit == false && this.end == false && app.main.scene == false){
			if(this.quickDodge > .6){
				this.superSpeedExhaustion = false;
				this.superSpeed = true;
				this.quickDodge = 0;
				this.smallBlasted = false;
			} else {
				this.smallBlasted = false;
			}
		} else {
			this.smallBlasted = false;
		}
		
		/* if(hitTest(app.main.vegeta, app.main.android18) == true && this.stun == false && this.end == false && ((this.farRight == true && app.main.android18.farRight == true) || (this.farLeft == true && app.main.android18.farLeft == true))){
			this.superSpeed = true;
		} */
		
		if((this.powerMove == true || this.taunting == true || this.charging == true) && this.air == true){
			this.hover = true;
			if(this.hoverFix == false){
				this.jumpVelocity.y = 0;
				this.hoverFix = true;
			}
		} else {
			this.hoverFix = false;
		}
		
		
		//UNSTOPPABLE
		if(this.unstoppable == true){
			this.hit = false;
			this.hardHit = false;
			this.stun = false;
			
			this.unstopTimer++;
			
			if(this.unstopTimer > 5){
				this.unstoppable = false;
				this.unstopTimer = 0;
			}
		}
		
		if(app.main.scene == false && this.superSpeed == false && this.end == false){
			this.vanish = false;
		}
		
		if(this.vegeta != true) {
			this.unstoppable = false;
		}
		
		if(this.ground == true){
			 this.startFallKick = false;
			 if(this.fallingKick == true){
				 //this.stun = false;
				 this.fallingKick = false;
				 app.main.aiChoice2 = Math.random();
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
		
		//Blast Close Push
		if(attackHitTest(app.main.vegeta, app.main.android18) == true && app.main.android18.blasting == true && this.behind == false) {
			if(app.main.android18.left == true){
				this.velocity.x -= 2;
			} else {
			    this.velocity.x += 2;
			}
			this.decel = this.velocity.clone();
		}
	    if(attackHitTest(app.main.vegeta, app.main.android17) == true && app.main.android17.blasting == true && this.behind == false) {
			if(app.main.android17.left == true){
				this.velocity.x -= 2;
			} else {
			    this.velocity.x += 2;
			}
			this.decel = this.velocity.clone();
		}
		
		if(this.basic == true && (attackHitTest(app.main.vegeta, app.main.android18) != true && attackHitTest(app.main.vegeta, app.main.android17) != true)){
			app.main.sound.playBasicReaction2(Math.round(getRandom(61,63)));
		}
		
		/* if(this.charging == true || this.powerMove == true){
			if(this.hit == true || this.hardHit == true || this.superSpeed == true || this.stun == true || this.end == true){
				//app.main.sound.stopEffect();
			}
		} */
		
		if((this.hardHit == true || this.hit == true) && this.blastBurn == true){
			this.blastBurnCounter = 0;
		}
		
		if(this.charging == false && app.main.scene == false){
			app.main.environment.powerUp = false;
		}
		
		if(this.hardHit == true || this.hit == true){
			if(this.fallingKick == true){
				app.main.aiChoice2 = Math.random();
			}
			this.startFallKick = false;
			this.fallingKick = false;
		}
		
		//NOT DURING SCENES
		if(app.main.scene == true){
			this.flying = false;
			this.blastBurn = false;
			this.blastBurnLength = 0;
			this.health = 100;
			this.endurance = 100;
			this.energy = 100;
		}
		
		if(this.focus17 == false){
			if(this.position.y > app.main.android18.position.y + 75){
				this.startFallKick = false;
				this.fallingKick = false;
				if(this.fallingKick == true){
					app.main.aiChoice2 = Math.random();
				}
			}
		} else if(this.focus17 == true){
			if(this.position.y > app.main.android17.position.y + 75){
				this.startFallKick = false;
				this.fallingKick = false;
				if(this.fallingKick == true){
					app.main.aiChoice2 = Math.random();
				}
			}
		}
		
		
		if(this.superSpeedExhaustion == true){
			//console.log(this.speedExhaust + "SPEED EXHAUST");
			this.speedExhaust++;
			if(this.speedExhaust > 20){
				this.superSpeedExhaustion = false;
				this.speedExhaust = 0;
			}
		}
		
		if(this.krillin == true || this.tien == true){
			this.superSpeedExhaustion = false;
			this.supportCounter++;
		}
		
		//Endurance recovery
		if(this.blastBurn == true){ //Blast burn
			this.blastBurnCounter++;
			if(this.blastBurnCounter > this.blastBurnLength){
				this.blastBurn = false;
				this.blastBurnCounter = 0;
			}
		} else {
			if(this.endurance < 100 && this.stun == false && this.end == false && this.tien == false && this.krillin == false){
				this.endurance += .2;
			}
		}
		//Energy recovery (NO RECOVER ENERGY)
		/*
		if(this.energy < 100 && this.stun == false && this.end == false){
			this.energy += .1;
		}*/
		//Stamina recovery
		if(this.stamina > 28 && (this.stun == false && this.end == false && this.blocking == false) || this.exhausted == true){
			this.stamina -= .2;
		}
		//Stamina recovery
		if((this.stamina > 28 && (this.stun == false && this.end == false && this.blocking == false) || this.exhausted == true) && this.gero == true){
			this.stamina -= .2;
		}
		//console.log("attacking = " + this.attacking);
		//console.log("fighting = " + this.fight);
		//console.log("stunned = " + this.stun); //reverse
		//console.log("AI = " + app.main.aiChoice2);
		//console.log(app.main.detectedHard2);
		
		//Exhaustion 
		/*
		if(this.exhausted == true){
			this.exhaustedCounter++;
			if(this.exhaustedCounter > 2000){ //aiChoice2
				this.exhausted = false;
			}
		}
		if(this.exhausted == false){
			//this.exhaustedCounter = 0;
		}*/
		
		//Death location
		/* if(this.end != true){
			app.main.environment.deathLocationVegeta.x = this.position.x;
			app.main.environment.deathLocationVegeta.y = this.position.y;
		} */
		
		/* if(app.main.android18.headbutted == true){
			this.position.x = app.main.android18.position.x;
			this.position.y = app.main.android18.position.y;
		} */
		
		
		if(this.focus17 == false){
		if(this.position.y < app.main.android18.position.y && this.jumpVelocity.y < 0 && this.air == true && this.charging == false && this.taunting == false && this.blasting == false && this.stun == false && app.main.scene == false){
			this.jumpVelocity.y = 0;
		}
		} else {
		if(this.position.y < app.main.android17.position.y && this.jumpVelocity.y < 0 && this.air == true && this.charging == false && this.taunting == false && this.blasting == false && this.stun == false && app.main.scene == false){
			this.jumpVelocity.y = 0;
		}
		}
		
		//AI FIXES
		if(app.main.android18.attacking == false && this.blocking == true){
			this.exhaustedCounter++;
			if(this.exhaustedCounter > 2){
				this.blocking = false;
				app.main.aiChoice3 = 10;
				this.exhaustedCounter = 0;
			}
		}
		
		//Tele delay response
		if(this.focus17 == false && app.main.android18.teleDelay > 5){
			if(app.main.android17.active == true){
				this.focus17 = true;
			} else if((this.focus17 == false && app.main.android18.teleDelay > this.tauntRand) && this.gero == false){
				if(this.krillin == false && this.tien == false && this.stun == false && this.blasting == false && this.superSpeed == false && this.end == false && this.attacking == false && this.charging == false){
					if(this.angryTaunt == false){
						this.pursueChance = Math.random();
						if(this.pursueChance < .4 || this.superSpeedExhaustion == true){
							this.taunting = true;
							this.tauntRand = getRandom(6,15);
							this.angryTaunt = true;
						} else {
							this.superSpeed = true;
						}
					}
				}
			}
		}
		
		
		if(this.focus17 == true && hardAttackHitTest(app.main.vegeta,app.main.android17) == true && this.powerMove == false && this.taunting == false && this.attacking == false && this.superSpeed == false && this.stun == false && this.end == false){
			this.charging = false;
			this.blasting = false;
			this.attacking = true;
			this.fight = true;
		}
		
		if(this.focus17 == false && hardAttackHitTest(app.main.vegeta,app.main.android18) == true && this.charging == true && this.vegeta.gero == false){
			this.charging = false;
			this.blasting = false;
			this.attacking = true;
			this.intensify = true;
			this.fight = true;
		}
		
		
		
		if(app.main.android18.teleDelay == 0){
			this.angryTaunt = false;
		}
		
		if(this.end == true && this.krillin == false && this.tien == false){
			this.flying = false;
			this.hover = false;
			this.attacking = false;
			this.blasting = false;
			this.intensify = false;
			this.taunting = false;
			this.powerMove = false;
			this.blocking = false;
			this.delayingTele = false;
			this.superSpeed = false;
			this.vanish = false;
		}
		
		if(this.stun == false && this.attacking == false && this.powerMove == false){
			this.blasting == false;
			this.flareHit = false;
		}
		
		/* if(this.vegeta == true && this.specMove == true){
			this.hit = false;
			this.stun = false;
		} */
		
		if(this.vegeta == true){
			this.specTimer++;
		}
		
		if(this.dead == true && this.firstDeadSupport == false){
		
		if(this.tien == true && app.main.krillinDead == false){
			app.main.sound.playTaunt8(18);
		}
		
		if(this.krillin == true && app.main.tienDead == false){
			app.main.sound.playTaunt7(17);
		}
		
		this.firstDeadSupport = true;
		
		}
		
		
		if(this.gero == true && this.health < 40){
			app.main.tutAdvance = true;
		}
		
		//console.log("STUCK IN BLAST " + this.stuckInBlast);
		//console.log("STUCK YELL " + this.stuckYell);
		
		//BLAST SCREAMS
		if(this.stuckInBlast == true){
			if(this.stuckYell == false){
			if(this.vegeta == true){
				app.main.sound.playTaunt2(Math.round(getRandom(90,92)));
			} else if(this.piccolo == true){
				app.main.sound.playTaunt4(Math.round(getRandom(25,27)));
			} else if(this.gohan == true){
				if(this.superForm == true){
					app.main.sound.playTaunt6(Math.round(getRandom(53,54)));
				} else {
					app.main.sound.playTaunt6(Math.round(getRandom(51,52)));
				}
			} else if(this.gero == true){
				app.main.sound.playTaunt2(Math.round(getRandom(94,96)));
			}
			this.stuckYell = true;
			}
			//this.stuckInBlast = false;
		}

		//HOVER
		if(app.main.scene == false || (app.main.sceneNum == 4 && app.main.scene == true)){
		if(this.air == true && this.down == false && this.position.y > this.SKYTOP.y && this.up == false && this.hit == false && this.hardHit == false && this.end == false && ((app.main.android18.air == true || (app.main.android17.air == true && this.focus17 == true)) || this.charging == true || this.taunting == true) || (((hardAttackHitTest(app.main.vegeta,app.main.android18) || hardAttackHitTest(app.main.vegeta,app.main.android17)) && this.hardHit == false) || this.blasting == true || this.powerMove == true || this.charging == true || this.taunting == true || (this.superSpeed == true && this.fallPrepTele == false) || this.blocking == true || this.attacking == true) && this.position.y > this.SKYTOP.y && this.up == false && this.hit == false && this.hardHit == false && this.end == false){ //Hover
			this.hoverCounter++;
			this.hover = true;
			if((this.tien == false && this.krillin == false) || this.blasting == true){
			if((this.blasting == true || this.taunting == true || this.charging == true || this.powerMove == true || this.superSpeed == true) || ((this.focus17 == false && app.main.android18.position.y < this.position.y) || (this.focus17 == true && app.main.android17.position.y < this.position.y)) ){
				if(this.hoverCounter < 6){
					this.flying = false;
				} else {
					this.flying = true;
					//this.decend = false;
					this.hoverCounter = 0;
				}
			} else {
				this.hover = false;
			}
		} else {
			this.hover = false;
		}
		} else {
			if(this.powerMove == false){
				this.hover = false;
			}
		}
		} else {
			this.hover = false;
		}
		
		
		if(this.attacking == false && this.stun == false && this.fight == false && this.taunting == false  && this.charging == false){
			if(this.aiCounter > 1){
				app.main.action = false;
			} else {
				this.aiCounter++;
			}
			//app.main.aiChoice = Math.random();
		}
		if(this.taunting == false && this.vegeta.vegeta == true){
			this.tauntPick = getRandom(10, 16);
		}
		/*
		if(this.taunting == false && this.vegeta.piccolo == true){
			this.tauntPick = getRandom(0, 6);
		}*/
		
		if(this.exhausted == true){ // END BLOCKING
			this.blocking = false;
			this.specialBlock = false;
		}
		
		if((this.startFallKick == true || this.fallingKick == true) && this.jumpVelocity.y < 20){
			this.jumpVelocity.y = 20;
		}
		
		if(this.air == false || this.up == true){
			this.fallHit = false;
		}
		
		if(this.hardHit == true || this.blasted == true){
			this.fight = false;
			this.blasting = false;
			this.powerMove = false;
		}
		
		if((this.up == true || this.jumpVelocity.y < 0) && (this.startFallKick == true || this.fallingKick == true)){
			this.startFallKick = false;
			this.fallingKick = false;
			app.main.aiChoice2 = Math.random();
		}
		
		if((this.hit == true || this.hardHit == true || app.main.android18.blastRelease == true || app.main.android17.blastRelease == true) && this.krillin == false && this.tien == false){
			app.main.dodgeChance = Math.random();
			if(this.blocking == false){
				app.main.aiChoice3 = Math.random();
			}
		} else if((this.krillin == true || this.tien == true) && (this.hit == true || this.hardHit == true || app.main.android18.blastRelease == true || app.main.android17.blastRelease == true)){
			app.main.dodgeChance3 = Math.random();
		}
		
		if(this.focus17 == false){
		if(app.main.aiChoice3 < .7 && app.main.aiChoice3 > .25 && this.fight == false && this.taunting == false && this.exhausted == false && this.end == false && hardAttackHitTest(app.main.android18, app.main.vegeta) == true  && this.gero == false){
			if(app.main.action == false){
				app.main.action = true;
				app.main.aiChoice3 = 10;
				this.blocking = true;
				if(attackHitTest(app.main.android18, app.main.vegeta) == true && (app.main.android18.basic == true || app.main.android18.punching == true || app.main.android18.kicking == true) && app.main.android18.attacking == true){
					this.stamina += 1;
				}
				if(app.main.android18.attacking == false || hardAttackHitTest(app.main.android18, app.main.vegeta) != true){
					this.blocking = false;
				}
			}
		}
		
		} else {
			
		if(app.main.aiChoice3 < .7 && app.main.aiChoice3 > .25 && this.fight == false && this.taunting == false && this.exhausted == false && this.end == false && hardAttackHitTest(app.main.android17, app.main.vegeta) == true  && this.gero == false){
			if(app.main.action == false){
				app.main.action = true;
				app.main.aiChoice3 = 10;
				this.blocking = true;
				if(attackHitTest(app.main.android17, app.main.vegeta) == true && (app.main.android17.basic == true || app.main.android17.punching == true || app.main.android17.kicking == true) && app.main.android17.attacking == true){
					this.stamina += 1;
				}
				if(app.main.android17.attacking == false || hardAttackHitTest(app.main.android17, app.main.vegeta) != true){
					this.blocking = false;
				}
			}
		}
			
		}
		
		if(this.fallingKick == true && this.fallHit == false && (attackHitTest(app.main.vegeta,app.main.android18) || attackHitTest(app.main.vegeta,app.main.android17))){
			this.startFallKick = false;
			this.fallingKick = false;
			app.main.aiChoice2 = Math.random();
		}
		
		//console.log("DODGE CHANCE 3 " + app.main.dodgeChance3);
		
		if(this.fallingKick == true && (hitTest(app.main.vegeta,app.main.android18) != true) && this.focus17 == false && ((this.position.x > app.main.vegeta.position.x - 200) && (this.position.x < app.main.vegeta.position.x + 200)) && this.air == true  && app.main.android18.superSpeed == false){
			if(this.position.x < app.main.android18.position.x + 10){
				this.velocity.x += 2;
			} else if(this.position.x > app.main.android18.position.x + 10){
				this.velocity.x -= 2;
			} else {
				this.velocity.x = 0;
				this.decel.x = 0;
			}
			this.decel = this.velocity.clone();
		} else if(this.fallingKick == true && this.focus17 == false && hitTest(app.main.vegeta,app.main.android18) == true && this.up == false){
			this.decel.x = 0;
			this.position.x == app.main.android18.position.x;
			this.position.y == app.main.android18.position.y;
		}
			
		if(this.fallingKick == true && this.focus17 == true && (hitTest(app.main.vegeta,app.main.android17) != true) && ((this.position.x > app.main.vegeta.position.x - 200) && (this.position.x < app.main.vegeta.position.x + 200)) && this.air == true  && app.main.android17.superSpeed == false){
			if(this.position.x < app.main.android17.position.x + 10){
				this.velocity.x += 2;
			} else if(this.position.x > app.main.android17.position.x + 10){
				this.velocity.x -= 2;
			} else {
				this.velocity.x = 0;
				this.decel.x = 0;
			}
			this.decel = this.velocity.clone();
		} else if(this.fallingKick == true && this.focus17 == true && hitTest(app.main.vegeta,app.main.android17) == true && this.up == false){
			this.decel.x = 0;
			this.position.x == app.main.android17.position.x;
			this.position.y == app.main.android17.position.y;
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
		
		
		if(this.hit == false && this.hardHit == false){
			this.punched = false;
		}
		
		if(this.fight == false){
			this.blasting = false;
			this.powerMove = false;
		}
		
		if(this.blasting == false){
			this.blastRelease = false;
		}
		
		/* if(this.blasting == true){
			this.decel.x = 0;
		} */

		//Flight control
		if(this.flying == true && (this.stun == false && this.end == false || this.hover == true) || (app.main.sceneNum == 4 && this.attacking == true && this.hover == true)){
			if((this.position.y == this.GROUND.y || this.position.y == this.BUILDING.y) && this.hover == false && (app.main.scene == false || this.sceneNum == 5) && this.stun == false && this.end == false && this.flySoundDelay > 10){
				app.main.sound.playSpecialReaction2(4);
				this.flySoundDelay = 0;
			}
			if(this.hover == true){
				this.jumpVelocity = new Victor(0,-4);
				this.jumpAccel = new Victor(0,-1);
			} else if(this.jumpVelocity.y > 0 && this.down == false){
				this.jumpVelocity = new Victor(0,-15);
			}
			this.jumpVelocity.addY(this.jumpAccel);
			this.gravity.zero();
		} else if(this.decend == true || this.fallingKick == true){
			//this.hover = false;
			/* if(this.jumpVelocity.y < 10){
				this.jumpVelocity.y = 10;
			} */
			this.gravity = new Victor(0,5.5);
			this.velocity.multiplyScalar(1.3);
		} else {
			if(app.main.scene == false && this.hardHit == false && this.charging == false && this.tauting == false){
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
		
		
		if(this.hit == true || this.hardHit == true || this.blasted == true){
			app.main.aiTaunting = false;
			app.main.aiCharging = false;
			this.attacking = false;
			this.blasting = false;
			this.blocking = false;
			this.specialBlock = false;
			this.powerMove = false;
			this.taunting = false;
			this.charging = false;
			this.intensify = false;
			this.fast17 = false;
			if(this.rollDodge == false){
				this.quickDodge = getRandom(0,1);
				this.rollDodge = true;
			}
			//this.blastRelease = false;
			//this.unstoppable = false;
			//this.specMove = false;
		} 
		
		if(this.hit == false && this.hardHit == false && this.blasted == false && this.stun == false) {
			this.rollDodge = false;
		}
		
		this.decelerate(); //DECEL
		
		
		if(this.velocity.x < .1 && this.velocity.x > -.1 && this.hit == false){
			this.velocity.zero();
		}
		
		if(this.dead == true){
			this.flying = false;
			this.hover = false;
			this.blasting = false;
			this.fight = false;
		}
		
		if(((app.main.scene == true && app.main.gameState != app.main.GAME_STATE.TUTORIAL) || app.main.introState == true)){
			this.stun = true;
		}
		
		if(this.gero == true && this.aboveBuilding == true && app.main.android18.aboveBuilding == false && (this.position.y < app.main.android18.position.y + 50) && this.air == false && this.stun == false){
			//this.position.y -= 4;
			this.air = true;
			this.aboveBuilding = false;
		}
		
		//FLIGHT DRAIN
		if(this.gero == false && this.superForm == false && this.flying == true){
			this.energy -= .01;
		}
		
		if(this.superSpeed == true && this.position.y < this.GROUND.y){
			this.air = true;
		}
		
		if(this.superSpeed == true && this.speedCounter > 8 && this.speedCounter < 12){
			this.vanish = true;
		}
		
		if(this.stun == false){
			this.blasted = false;
		}
		
		
		//PUSH 
		if(app.main.android17.vanish == false && this.superSpeed == false && app.main.android17.superSpeed == false && app.main.android17.gone == false){
		if(hitTest(app.main.vegeta,app.main.android17) && this.behind == false && app.main.android17.moving == false){
			if(app.main.android17.left == true){
				this.position.x -= 10;
			} else {
				this.position.x += 10;
			}
		} else if(hitTest(app.main.android17,app.main.vegeta) && this.behind == true && app.main.android17.moving == false){
			if(app.main.android17.left == true){
				this.position.x += 10;
			} else {
				this.position.x -= 10;
			}
		}
		}
		
		
		if(this.vanish == true){
			this.blocking = false;
			if(this.end == false){
				this.hit = false;
				this.hardHit = false;
				this.punched = false;
			}
		}
		
		if(this.swoosh == false && this.fallingKick == false && this.reverse == false && this.hit == false && this.stun == false && (this.velocity.x > 19 || this.velocity.x < -19)){
			this.swooshTimer++;
			if(this.swooshTimer > 6 && this.fallingKick == false){
				app.main.sound.playSpecialReaction2(74);
				this.swoosh = true;
			}
		} else if(this.swoosh == true && (this.velocity.x < 5 && this.velocity.x > -5)){
			this.swoosh = false;
			this.swooshTimer = 0;
		}
		
		//Mute Voice
		if(this.hit == true && this.tien == false && this.krillin == false && app.main.discHit == false && this.deathTalk == false && this.exhaustTalk == false && this.exhausted == false && this.end == false && this.specMove == false && this.voiceStop == false && this.stuckInBlast == false){
			app.main.sound.pauseVoice2();
			app.main.sound.pauseVoice4();
			app.main.sound.pauseVoice6();
			app.main.sound.pauseEffectVegeta();
			app.main.environment.powerUp = false;
			this.voiceStop = true;
		} else if(this.hit == false){
			this.voiceStop = false;
		}
		
		
		//Mute Voice Support
		/* if(this.hit == true && this.blasting == true && (this.tien == true || this.krillin == true && app.main.discHit == false)){
			app.main.sound.pauseVoice7();
			app.main.sound.pauseVoice8();
		} */
		
		
		//Varible resets
		if(this.attacking == false && this.blasting == false && this.taunting == false && this.charging == false && this.superSpeed == false && this.end == false){
			//app.main.detected = false;
			//app.main.detectedHard = false;
			//console.log("RESET");
			this.fight = false;
			this.hard = false;
			this.turnsDown = false;
			this.turnsUp = false;
			this.counter = 0;
			this.dodge = false;
			this.basic = false;
			this.kicking = false;
			this.punching = false;
			//this.unstoppable = false;
			//this.specMove = false;
		}
		
		if(this.stun == false && this.end == false && this.dead == false){
			this.stunCounter = 0;
		} else if(this.stunCounter > 60 && this.end == false && this.dead == false && app.main.gameState != app.main.GAME_STATE.TUTORIAL && app.main.scene == false){ //Stun stuck fix
			this.stun = false;
		}
		
		if(this.end == true && this.position.y < this.GROUND.y){
			this.air = true;
			this.aboveBuilding = false;
		}
		
		/* if(this.blocking == false){
			this.specialBlock = false;
		} */
		
		
		if(this.gohan == true && this.end == true && this.dead == false){ //Gohan adjust
			if(this.right == true){
				this.position.x -= 10;
			} else {
				this.position.x += 10;
			}
		}
		
		//Falling Kick Support Damage
		/* if(app.main.activeSupport == true){
		if(((this.krillin == true && hitTest(app.main.android18, app.main.support[1]) == true ) || (this.tien == true && hitTest(app.main.android18, app.main.support[0]) == true )) && app.main.android18.fallingKick == true && this.fallHitSpecial == false){
			this.punched = true;
			this.hardHit = true;
			this.hit = true;
			app.main.sound.playSpecialReaction(16);
			this.flying = false;
			this.stun = true;
			this.fallHitSpecial = true;
			this.specialHealth -= 1;
			this.jumpVelocity.y = 50;
			if(this.ground == true){
			app.main.android18.jumpVelocity.y = -50;
			if(app.main.android18.right == true){
				app.main.android18.velocity.x -= 30;
				this.velocity.x += 25;
			} else {
				app.main.android18.velocity.x += 30;
				this.velocity.x -= 25;
			}
			}
		}
		
		} */
		
		/* if((this.krillin == true || this.tien == true) && this.superSpeed == true){
			this.fallHitSpecial = false;
		} */
		
		if(this.teleDelay == this.teleDelayTime){
			this.delayingTele = false;
		}
		
		if(this.krillin == true || this.tien == true){
			this.startFallKick = false;
			this.fallKick = false;
			this.fallPrepTele = false;
			this.angryTaunt = false;
			this.energy = 10000;
			//app.main.cooldownAI2 += 100
			if(this.superSpeed == false && app.main.scene == false && this.end == false){
				this.vanish = false;
			}
		}
		
		//Checks for behind
		if(this.focus17 == false){
			if(this.left == true && app.main.android18.left == true && this.position.x > app.main.android18.position.x){
				this.behind = true;
			} else if(this.left == false && app.main.android18.left == false && this.position.x < app.main.android18.position.x){
				this.behind = true;
			} else {
				this.behind = false;
			}
		} else {
			if(this.left == true && app.main.android17.left == true && this.position.x > app.main.android17.position.x){
				this.behind = true;
			} else if(this.left == false && app.main.android17.left == false && this.position.x < app.main.android17.position.x){
				this.behind = true;
			} else {
				this.behind = false;
			}
		}
		
		
		
		if(this.position.x > 690){
			this.byBuilding = true;
		} else {
			this.byBuilding = false;
		}
		
		
		//Support Characters
		if(this.tien == true || this.krillin == true){
			//console.log("SPECIAL HEALTH HEALTH: " + this.specialHealth);
			if(this.hardHit == true && this.specialDamage == false){
				this.specialHealth -= 2;
				this.specialDamage = true;
				this.spSaying = false;
			} else if(this.hit == true && this.specialDamage == false){
				this.specialHealth -= 1;
				this.specialDamage = true;
				this.spSaying = false;
			}
			
			if(this.hit == false && this.hardHit == false){
				this.specialDamage = false;
			}
			
			if(this.tien == true){
				
				if(this.exhausted == true && app.main.scene == false){
					if(this.extraCounter < 50){
						this.extraCounter++;
					} else {
						this.exhausted = false;
						this.extraCounter = 0;
						this.energyUse = 0;
						app.main.chance4 = Math.random();
					}
				}
				
				if(this.spSaying == false){
					if(this.specialHealth == 0){
						app.main.sound.pauseVoice7();
						app.main.sound.playTaunt7(6);
						this.spSaying = true;
					} else if(this.specialHealth == 4){
						app.main.sound.pauseVoice7();
						app.main.sound.playTaunt7(5);
						this.spSaying = true;
						if((app.main.android18.farLeft == true && this.farLeft == false) || (app.main.android18.farRight == true && this.farRight == false)){
							if(this.position.y < 400){
								this.teleDown = true;
							} else {
								this.teleUp = true;
							}
							this.superSpeed = true;
						} else {
							this.superSpeed = true;
						}
					} else if(this.specialHealth == 8){
						app.main.sound.pauseVoice7();
						app.main.sound.playTaunt7(4);
						this.spSaying = true;
						if((app.main.android18.farLeft == true && this.farLeft == false) || (app.main.android18.farRight == true && this.farRight == false)){
							if(this.position.y < 400){
								this.teleDown = true;
							} else {
								this.teleUp = true;
							}
							this.superSpeed = true;
						} else {
							this.superSpeed = true;
						}
					}/*  else if(this.specialHealth < 10) {
						app.main.sound.playTaunt7(getRandom(12,14));
						this.spSaying = true;
					} */
				}
			}
			
			if(this.krillin == true){
				
				if(this.exhausted == true && app.main.scene == false){
					if(this.extraCounter < 50){
						this.extraCounter++;
					} else {
						this.exhausted = false;
						this.extraCounter = 0;
						this.energyUse = 0;
						app.main.chance4 = Math.random();
					}
				}
				
				if(this.spSaying == false){
					if(this.specialHealth == 0){
						app.main.sound.pauseVoice8();
						app.main.sound.playTaunt8(10);
						this.spSaying = true;
					} else if(this.specialHealth == 4){
						app.main.sound.pauseVoice8();
						app.main.sound.playTaunt8(9);
						this.spSaying = true;
						if((app.main.android18.farLeft == true && this.farLeft == false) || (app.main.android18.farRight == true && this.farRight == false)){
							if(this.position.y < 400){
								this.teleDown = true;
							} else {
								this.teleUp = true;
							}
							this.superSpeed = true;
						} else {
							this.superSpeed = true;
						}
					} else if(this.specialHealth == 8){
						app.main.sound.pauseVoice8();
						app.main.sound.playTaunt8(8);
						this.spSaying = true;
						if((app.main.android18.farLeft == true && this.farLeft == false) || (app.main.android18.farRight == true && this.farRight == false)){
							if(this.position.y < 400){
								this.teleDown = true;
							} else {
								this.teleUp = true;
							}
								this.superSpeed = true;
							} else {
								this.superSpeed = true;
							}
						}/*  else if(this.specialHealth < 10) {
						app.main.sound.playTaunt8(getRandom(15,17));
						this.spSaying = true;
					} */
				}
			}
			
			if(this.specialHealth < 1){
				this.end = true;
				//this.dead = true;
			}
		}
		
		
		if(this.startFallKick == true || this.fallingKick == true){
			this.hover = false;
			this.flying = false;
		}
		
		//safety net hover
		if(this.jumpVelocity.y > 3 && this.end == false && this.dead == false && (this.powerMove == true || this.taunting == true || this.charge == true || (this.flareHit == true && this.punched == false))){
			this.jumpVelocity.y = -4;
		}
		
		
		//Injured talk
			if(this.exhausted == true && this.exhaustTalk == false){
				this.exhaustTalk = true;
				if(this.vegeta == true){
					app.main.sound.pauseVoice2();
					app.main.sound.playTaunt2(Math.round(getRandom(43,44)));
				} else if(this.gero == true){
					app.main.sound.playIntro(72);
					app.main.sound.pauseVoice2();
					app.main.sound.playTaunt2(Math.round(getRandom(49,50)));
				} else if(this.piccolo == true){
					app.main.sound.pauseVoice4();
					app.main.sound.playTaunt4(Math.round(getRandom(16,17)));
				} else if(this.gohan == true && this.superForm == false){
					app.main.sound.pauseVoice6();
					app.main.sound.playTaunt6(Math.round(getRandom(30,31)));
				} else if(this.gohan == true && this.superForm == true){
					app.main.sound.pauseVoice6();
					app.main.sound.playTaunt6(Math.round(getRandom(32,33)));
				} else if(this.tien == true && app.main.tienDead == false){
					app.main.sound.pauseVoice7();
					app.main.sound.playTaunt7(Math.round(getRandom(7,8)));
				} else if(this.krillin == true && app.main.krillinDead == false && app.main.discHit == false){
					app.main.sound.pauseVoice8();
					app.main.sound.playTaunt8(Math.round(getRandom(13,14)));
				}

			} else if(this.exhausted == false){
				this.exhaustTalk = false;
			}
			
			
			//Death Talk
			if(this.end == true && this.deathTalk == false){
				this.deathTalk = true;
				if(this.vegeta == true){
					app.main.sound.pauseVoice2();
					if(this.position.y < 350){
						app.main.sound.playTaunt2(47);
					} else {
						app.main.sound.playTaunt2(48);
					}
				} else if(this.piccolo == true){
					app.main.sound.pauseVoice4();
					if(this.position.y < 350){
						app.main.sound.playTaunt4(18);
					} else {
						app.main.sound.playTaunt4(19);
					}
				} else if(this.gohan == true && this.superForm == false){
					app.main.sound.pauseVoice6();
					if(this.position.y < 350){
						app.main.sound.playTaunt6(34);
					} else {
						app.main.sound.playTaunt6(35);
					}
				}
			}
			
			
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
		
		//SPECIAL CASES
		if(this.gero == true){
			app.main.aiChoice2 = .4;
			if(this.ground == true && this.stun == true){
				this.flying = false;
				this.hover = false;
			}
		}
		
		if(this.krillin == true || this.tien == true){
			this.blastCount = 0;
			if(this.powerMove == false){
				this.attacking = false;
				this.fight = false;
			}
		}
		
		if(this.ground == true && this.hardHit == true){
			this.jumpVelocity.y = 0;
		}
		
		if(this.superSpeed == true && this.powerBlast == true){
			this.superSpeed = false;
		}
		
		//Back Hit
		if(this.hardHit == true && this.decel.x < 0 && this.left == true && this.movingLeft == false){
			this.backHit = 1;
			this.backHitTest = true;
		} else if(this.hardHit == true && this.decel.x > 0 && this.right == true && this.movingRight == false){
			this.backHit = 2;
			this.backHitTest = true;
		}
		
		if(this.hardHit == false || this.end == true){
			this.backHit = 0;
			this.backHitTest = false;
		}
		
		
		if(this.backOffGero == true){
		this.stillGero = true;
		this.flying = false;
		this.stun = true;
		if(this.air == true || hardAttackHitTest(app.main.vegeta, app.main.android18)){
			if(this.left == true){
				this.moveRight();
			} else if(this.right == true){
				this.moveLeft();
			}
			if(this.air == true){
				this.jumpVelocity.y += 5;
			}
		} else {
			this.backOffGero = false;
		}
		}
		
		if(this.stun == false && this.gero == true){
			this.stillGero = false;
		}
		
		if(this.superSpeed == true){
			this.flying = false;
			this.up = false;
			//this.hover = false;
		}
		
		if(app.main.gameState == app.main.GAME_STATE.TUTORIAL){
			this.BUILDING = new Victor(0,135);
		} else {
			if(app.main.environment.buildingActive == true && this.end == false){
				this.BUILDING = new Victor(650,250);
			} else {
				if(this.krillin == true){
					this.BUILDING = new Victor(700,530);
				} else {
					this.BUILDING = new Victor(700,520);
				}
			}
		}
		
	};
	
	//Starts a jump/flight
	Vegeta.prototype.jump = function(){
		this.air = true;
	};
	
	//BEGIN SUPER SPEED
	Vegeta.prototype.speed = function(){
		this.delayingTele = false;
		if(this.focus17 == false){
		if(this.gero == false){
			this.energy -= 5;
		}
		if(this.teleUp == true){
			this.position.y = this.SKYTOP.y;
			this.teleUp = false;
		} else if(this.teleDown == true){
			this.position.y = this.GROUND.y;
			this.aboveBuilding = false;
			this.teleDown = false;
		} else if(this.fallPrepTele == true){
			if(app.main.android18.position.y < app.main.android18.SKYTOP.y + 150){
				this.position.y = this.GROUND.y;
				this.aboveBuilding = false;
				this.fallPrepTele = false;
			} else {
				this.position.y = app.main.android18.position.y - 300;
				this.position.x = app.main.android18.position.x;
				this.startFallKick = true;
				this.fallPrepTele = false;
			}
		} else if(this.left == true && this.teleFace == true){
			this.position.x = this.lastKnown.x + 25;
			this.position.y = this.lastKnown.y;
			this.teleFace = false;
		} else if(this.right == true && this.teleFace == true){
			this.position.x = this.lastKnown.x - 25;
			this.position.y = this.lastKnown.y;
			this.teleFace = false;
		} else if(this.left == true && app.main.android18.position.x < this.LEFTWALL.x + 50 && app.main.environment.inSmog18 == false){
			if(app.main.android18.aboveBuilding == false){
				this.aboveBuilding = false;
			}
			this.position.x = app.main.android18.position.x + 50;
			this.position.y = app.main.android18.position.y;
		} else if(this.right == true && app.main.android18.position.x > this.RIGHTWALL.x - 50 && app.main.environment.inSmog18 == false){
			if(app.main.android18.aboveBuilding == false){
				this.aboveBuilding = false;
			}
			this.position.x = app.main.android18.position.x - 50;
			this.position.y = app.main.android18.position.y; 
		} else if(this.positionLast.x - 100 <= this.LEFTWALL.x){
			this.position.x = this.RIGHTWALL.x;
		} else if(this.positionLast.x + 100 >= this.RIGHTWALL.x){
			this.position.x = this.LEFTWALL.x;
		} else if(this.left == true && this.reverse == true){
			this.position.x = this.RIGHTWALL.x;
		} else if(this.right == true && this.reverse == true){
			this.position.x = this.LEFTWALL.x;
		} else if(this.left == true && app.main.environment.inSmog18 == false){
			if(app.main.android18.aboveBuilding == false){
				this.aboveBuilding = false;
			}
			this.position.x = app.main.android18.position.x - 50;
			this.position.y = app.main.android18.position.y;
		} else if(this.right == true && app.main.environment.inSmog18 == false){
			if(app.main.android18.aboveBuilding == false){
				this.aboveBuilding = false;
			}
			this.position.x = app.main.android18.position.x + 50;
			this.position.y = app.main.android18.position.y;
		}
		
		} else {
		//17 Version
		this.energy -= 5;
		if(this.teleUp == true){
			this.position.y = this.SKYTOP.y;
			this.teleUp = false;
		} else if(this.teleDown == true){
			this.position.y = this.GROUND.y;
			this.aboveBuilding = false;
			this.teleDown = false;
		} else if(this.fallPrepTele == true){
			if(app.main.android17.position.y < app.main.android17.SKYTOP.y + 150){
				this.position.y = this.GROUND.y;
				this.aboveBuilding = false;
				this.fallPrepTele = false;
			} else {
				this.position.y = app.main.android17.position.y - 300;
				this.position.x = app.main.android17.position.x;
				if(this.gero == false){
					this.startFallKick = true;
				}
				this.fallPrepTele = false;
			}
		} else if(this.left == true && this.teleFace == true){
			this.position.x = this.lastKnown.x + 25;
			this.position.y = this.lastKnown.y;
			this.teleFace = false;
		} else if(this.right == true && this.teleFace == true){
			this.position.x = this.lastKnown.x - 25;
			this.position.y = this.lastKnown.y;
			this.teleFace = false;
		} else if(this.left == true && app.main.android17.position.x < this.LEFTWALL.x + 50 && app.main.environment.inSmog17 == false){
			if(app.main.android17.aboveBuilding == false){
				this.aboveBuilding = false;
			}
			this.position.x = app.main.android17.position.x + 50;
			this.position.y = app.main.android17.position.y;
		} else if(this.right == true && app.main.android17.position.x > this.RIGHTWALL.x - 50 && app.main.environment.inSmog17 == false){
			if(app.main.android17.aboveBuilding == false){
				this.aboveBuilding = false;
			}
			this.position.x = app.main.android17.position.x - 50;
			this.position.y = app.main.android17.position.y; 
		} else if(this.positionLast.x - 100 <= this.LEFTWALL.x){
			this.position.x = this.RIGHTWALL.x;
		} else if(this.positionLast.x + 100 >= this.RIGHTWALL.x){
			this.position.x = this.LEFTWALL.x;
		} else if(this.left == true && this.reverse == true){
			this.position.x = this.RIGHTWALL.x;
		} else if(this.right == true && this.reverse == true){
			this.position.x = this.LEFTWALL.x;
		} else if(this.left == true && app.main.environment.inSmog18 == false){
			if(app.main.android17.aboveBuilding == false){
				this.aboveBuilding = false;
			}
			this.position.x = app.main.android17.position.x - 50;
			this.position.y = app.main.android17.position.y;
		} else if(this.right == true && app.main.environment.inSmog18 == false){
			if(app.main.android17.aboveBuilding == false){
				this.aboveBuilding = false;
			}
			this.position.x = app.main.android17.position.x + 50;
			this.position.y = app.main.android17.position.y;
		}
		}
	};
	
	//MOVE TO THE RIGHT
	Vegeta.prototype.moveRight = function(){
		this.movingRight = true;
		this.movingLeft = false;
		this.velocity.addX(this.accel);
		this.velocity.limit(24, .80);
		this.decel = this.velocity.clone();
		this.position.addX(this.velocity);
	};
	
	//MOVE TO THE LEFT
	Vegeta.prototype.moveLeft = function(){
		this.movingLeft = true;
		this.movingRight = false;
		this.velocity.subtractX(this.accel);
		this.velocity.limit(24, .80);
		//console.log("VELOCITY" + this.velocity);
		this.decel = this.velocity.clone();
		this.position.addX(this.velocity);
	};
	
	//DECEL AFTER MOVING
	Vegeta.prototype.decelerate = function(){
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
	
	
	//FUNCTION TO DRAW VEGETA AND CHANGE MANY VARIABLES (MOST IMPORANT)
	Vegeta.prototype.draw = function(ctx){
		
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
		if(((this.left == true || (this.right == true && this.position.x > this.RIGHTWALL.x - 20 && this.fallingKick == false && this.headbuttGohan != true)) && this.backHitTest == false) || (this.backHit == 2 && this.backHitTest == true)){
			if(this.piccolo == true){
				ctx.translate(this.position.x - 30, this.position.y + 20);
				this.attackPosition.x = this.position.x - 30;
				this.attackPosition.y = this.position.y + 20;
				this.hardAttackPosition.x = this.position.x - 60;
				this.hardAttackPosition.y = this.position.y + 20;
			} else if(this.gohan == true){
				ctx.translate(this.position.x - 50, this.position.y - 20);
				this.attackPosition.x = this.position.x - 30;
				this.attackPosition.y = this.position.y + 20;
				this.hardAttackPosition.x = this.position.x - 60;
				this.hardAttackPosition.y = this.position.y + 20;
			} else if(this.vegeta == true){
				ctx.translate(this.position.x - 15, this.position.y + 12);
				this.attackPosition.x = this.position.x - 30;
				this.attackPosition.y = this.position.y + 20;
				this.hardAttackPosition.x = this.position.x - 60;
				this.hardAttackPosition.y = this.position.y + 20;
			} else if(this.tien == true){
				ctx.translate(this.position.x - 175, this.position.y - 80);
				this.attackPosition.x = this.position.x - 30;
				this.attackPosition.y = this.position.y + 20;
				this.hardAttackPosition.x = this.position.x - 60;
				this.hardAttackPosition.y = this.position.y + 20;
			} else if(this.krillin == true){
				ctx.translate(this.position.x - 150, this.position.y - 75);
				this.attackPosition.x = this.position.x - 30;
				this.attackPosition.y = this.position.y + 20;
				this.hardAttackPosition.x = this.position.x - 60;
				this.hardAttackPosition.y = this.position.y + 20;
			} else if(this.gero == true){
				ctx.translate(this.position.x + 5, this.position.y);
				this.attackPosition.x = this.position.x - 30;
				this.attackPosition.y = this.position.y + 20;
				this.hardAttackPosition.x = this.position.x - 60;
				this.hardAttackPosition.y = this.position.y + 20;
			} else {
				ctx.translate(this.position.x - 15, this.position.y);
				this.attackPosition.x = this.position.x - 30;
				this.attackPosition.y = this.position.y + 20;
				this.hardAttackPosition.x = this.position.x - 60;
				this.hardAttackPosition.y = this.position.y + 20;
			}
			ctx.scale(1, 1);
			if(this.movingRight = true && this.movingLeft == false){
				this.reverse = true;
			} else {
				this.reverse = false;
			}
		} else if(((this.right == true || this.left == true && this.position.x < this.LEFTWALL.x + 20) && this.backHitTest == false) || (this.backHit == 1 && this.backHitTest == true)){
			if(this.piccolo == true){
				ctx.translate(this.position.x + 80, this.position.y + 20);
				this.attackPosition.x = this.position.x + 50;
				this.attackPosition.y = this.position.y + 20;
				this.hardAttackPosition.x = this.position.x + 80;
				this.hardAttackPosition.y = this.position.y + 20;
			} else if(this.gohan == true){
				ctx.translate(this.position.x + 100, this.position.y - 20);
				this.attackPosition.x = this.position.x + 50;
				this.attackPosition.y = this.position.y + 20;
				this.hardAttackPosition.x = this.position.x + 80;
				this.hardAttackPosition.y = this.position.y + 20;
			} else if(this.vegeta == true){
				ctx.translate(this.position.x + 65, this.position.y + 12);
				this.attackPosition.x = this.position.x + 50;
				this.attackPosition.y = this.position.y + 20;
				this.hardAttackPosition.x = this.position.x + 80;
				this.hardAttackPosition.y = this.position.y + 20;
			} else if(this.tien == true){
				ctx.translate(this.position.x + 225, this.position.y - 80);
				this.attackPosition.x = this.position.x + 50;
				this.attackPosition.y = this.position.y + 20;
				this.hardAttackPosition.x = this.position.x + 80;
				this.hardAttackPosition.y = this.position.y + 20;
			} else if(this.krillin == true){
				ctx.translate(this.position.x + 200, this.position.y - 75);
				this.attackPosition.x = this.position.x + 50;
				this.attackPosition.y = this.position.y + 20;
				this.hardAttackPosition.x = this.position.x + 80;
				this.hardAttackPosition.y = this.position.y + 20;
			} else if(this.gero == true){
				ctx.translate(this.position.x + 40, this.position.y);
				this.attackPosition.x = this.position.x + 50;
				this.attackPosition.y = this.position.y + 20;
				this.hardAttackPosition.x = this.position.x + 80;
				this.hardAttackPosition.y = this.position.y + 20;
			} else {
				ctx.translate(this.position.x + 65, this.position.y);
				this.attackPosition.x = this.position.x + 50;
				this.attackPosition.y = this.position.y + 20;
				this.hardAttackPosition.x = this.position.x + 80;
				this.hardAttackPosition.y = this.position.y + 20;
			}
			ctx.scale(-1, 1);
			if(this.movingLeft = true && this.movingRight == false){
				this.reverse = true;
			} else {
				this.reverse = false;
			}
		}
		
		// ------------ DRAWS FOR VEGETA HIMSELF ------------------------------------------
		// ------------ DRAWS FOR VEGETA HIMSELF ------------------------------------------
		// ------------ DRAWS FOR VEGETA HIMSELF ------------------------------------------
		
		if(this.vanish == false && this.vegeta == true){
		//NON MOVING DRAWS
		
		ctx.save();
		ctx.scale(1,.9);
		if(this.cinematic == true){
			if(this.cine == 0){
				ctx.drawImage(this.taunt,20,-13);
			} else if(this.cine == 1){
				ctx.drawImage(this.special1Vegeta,0,-10);
			}
		} else if((this.velocity.x == 0 || this.startFallKick == true) && this.attacking != true && this.blocking != true && this.taunting != true && this.hit == false && this.hardHit != true && this.charging != true && this.sceneOpen == false && this.end == false && this.specMove == false) {
			if((this.up == true && this.flying == true) || (this.jumpVelocity.y < 15 && this.air == true) && this.startFallKick == false){
				if(this.lookUp == true){
					ctx.drawImage(this.flyUpUp,0,0);
				} else if(this.lookDown == true){
					ctx.drawImage(this.flyUpDown,0,0);
				} else {
					ctx.drawImage(this.flyUp,0,0);
				}
			} else if(this.air == true && this.startFallKick == true) {
				ctx.drawImage(this.fallKick,0,0);
				this.fallingKick = true;
				this.attacking = false;
				this.fight = false;
				this.flying = false;
				this.aboveBuilding = false;
				this.fallTimer++;
				/* this.gravity = new Victor(0,5.5);
				this.velocity.multiplyScalar(1.3); */
				//this.stun = true;
				if(this.kickSound == false){
					app.main.sound.playBasicAttack2(Math.round(getRandom(61,63)));
					this.kickSound = true;
					this.fallTimer = 0;
				}
				if(this.fallTimer > 3 && this.fallTimer < 5){
					app.main.sound.playSpecialReaction2(74);
				}
				if((app.main.android17.ground == true && (hitTest(app.main.android17, app.main.vegeta) == true) && app.main.android17.superSpeed == false && this.focus17 == true) || (app.main.android18.ground == true && (hitTest(app.main.android18, app.main.vegeta) == true) && app.main.android18.superSpeed == false && this.focus17 == false)){
					this.startFallKick = false;
					this.fallingKick = false;
					app.main.aiChoice2 = Math.random();
					app.main.chance2 = Math.random();
					app.main.detected2 = false;
					this.fallingKickCooldown = 0;
					this.counter = 0;
					if(this.focus17 == false){
						if(app.main.android18.fieldOn == false && app.main.android18.blocking == false){
							app.main.sound.playSpecialReaction(18);
							app.main.environment.shake = true;
							app.main.android18.hit = true;
							app.main.android18.hardHit = true;
							app.main.android18.stun = true;
						}
					} else {
						if(app.main.android17.fieldOn == false && app.main.android17.blocking == false){
							app.main.sound.playSpecialReaction3(18);
							app.main.environment.shake = true;
							app.main.android17.hit = true;
							app.main.android17.hardHit = true;
							app.main.android17.stun = true;
						}
					}
					this.jumpVelocity.y = -40;
					if(this.right == true){
						this.velocity.x -= 25;
						if(this.focus17 == false){
							app.main.android18.velocity.x += 15;
						} else {
							app.main.android17.velocity.x += 15;
						}
					} else {
						this.velocity.x += 25;
						if(this.focus17 == false){
							app.main.android18.velocity.x -= 15;
						} else {
							app.main.android17.velocity.x -= 15;
						}
					}
					this.decel = this.velocity.clone();
					if(this.focus17 == false){
						app.main.android18.decel = app.main.android18.velocity.clone();
					} else {
						app.main.android17.decel = app.main.android17.velocity.clone();
					}
					app.main.sound.playSpecialReaction2(4);
					if(this.focus17 == false){
					if(app.main.android18.stamina > 64 && app.main.android18.exhausted == true){
						app.main.android18.stamina = app.main.android18.stamina - 10;
					}
					if(app.main.android18.endurance > 14){
						app.main.android18.endurance = app.main.android18.endurance - (7 + getRandom(0, 5));
					} else if(app.main.android18.endurance < 15){
						app.main.android18.health = app.main.android18.health - (7 + getRandom(0, 5));
					}
					}

				}
				if((((hitTest(app.main.android18, app.main.vegeta) == true) && this.focus17 == false)) && this.fallHit == false){
					if(app.main.android18.superSpeed == false && app.main.android18.blocking == false && this.position.y < app.main.android18.position.y - 20){
						this.fallHit = true;
						var rand = getRandom(0,1);
						if(rand > .5){
							this.startFallKick = false;
							this.fallingKick = false;
						}
							app.main.sound.playSpecialReaction(16);
							app.main.android18.hit = true;
							app.main.android18.hardHit = true;
							app.main.android18.stun = true;
							if(app.main.android18.air == true) {
								app.main.android18.flying = false;
								app.main.android18.jumpVelocity.y = 50;
								app.main.android18.punched = true;
							} else {
								app.main.android18.punched = false;
							}
							if(app.main.android18.air == true){
							if(app.main.android18.right == true){
								app.main.android18.velocity.x = this.velocity.x;
							} else {
								app.main.android18.velocity.x = this.velocity.x;
							}
							}
							app.main.android18.decel = app.main.android18.velocity.clone();
							if(app.main.android18.stamina > 64 && app.main.android18.exhausted == true){
								app.main.android18.stamina = app.main.android18.stamina - 10;
							}
							if(app.main.android18.endurance > 14){
								app.main.android18.endurance = app.main.android18.endurance - (7 + getRandom(0, 5));
							} else if(app.main.android18.endurance < 15){
								app.main.android18.health = app.main.android18.health - (7 + getRandom(0, 5));
							}
						}
				} else if((((hitTest(app.main.android17, app.main.vegeta) == true) && this.focus17 == true)) && this.fallHit == false){
					if(app.main.android17.superSpeed == false && app.main.android17.blocking == false && this.position.y < app.main.android17.position.y - 20){
						this.fallHit = true;
						app.main.sound.playSpecialReaction3(16);
							app.main.android17.hit = true;
							app.main.android17.hardHit = true;
							app.main.android17.stun = true;
							if(app.main.android17.air == true) {
								app.main.android17.flying = false;
								app.main.android17.jumpVelocity.y = 50;
								app.main.android17.punched = true;
							} else {
								app.main.android17.punched = false;
							}
							if(app.main.android17.air == true){
							if(app.main.android17.right == true){
								app.main.android17.velocity.x = this.velocity.x;
							} else {
								app.main.android17.velocity.x = this.velocity.x;
							}
							}
							app.main.android17.decel = app.main.android17.velocity.clone();
							if(app.main.android17.stamina > 64 && app.main.android17.exhausted == true){
								app.main.android17.stamina = app.main.android17.stamina - 10;
							}
							if(app.main.android17.endurance > 14){
								app.main.android17.endurance = app.main.android17.endurance - (7 + getRandom(0, 5));
							} else if(app.main.android17.endurance < 15){
								app.main.android17.health = app.main.android17.health - (7 + getRandom(0, 5));
							}
						}
				}
				
				if(this.ground == true || this.up == true){
					this.fallingKick = false;
					this.startFallKick = false;
					this.velocity.x = 0;
					this.gravity = new Victor(0,1.7);
					app.main.aiChoice2 = Math.random();
					//this.stun = false;
				}
				
			} else if(this.down == true && this.air == true) {
				ctx.drawImage(this.flyDownFast,0,0);
			} else if(this.down == false && this.air == true && this.up == false) {
				ctx.drawImage(this.flyDownSlow,0,0);
			} else if(this.exhausted == true){
				ctx.drawImage(this.injured,0,0);
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
		} else if(this.velocity.x != 0 && this.attacking != true && this.blocking != true && this.taunting != true && this.hit == false && this.hardHit != true && this.charging == false && this.end == false  && this.specMove == false){ //&& (this.fallingKick == false || this.air == false)
			if(this.slow == true && this.reverse == false){
				ctx.drawImage(this.slowFly,0,0);
			} else if(this.fast == true && this.reverse == false){
				ctx.drawImage(this.fastFly,0,10);
			} else if(this.reverse == true && this.farLeft == false && this.farRight  == false){
				ctx.drawImage(this.moveReverse,0,0);
			} else if(this.air == true && this.up == false){
				ctx.drawImage(this.flyDownSlow,0,0);
			} else if(this.exhausted == true){
				ctx.drawImage(this.injured,0,0);
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
		} else if(this.attacking == true && this.air == false && this.hit == false && this.blasting == false && this.intensify == false && this.specMove == false){
			this.randomEffect = Math.random();
			//this.chance2 = Math.random();
			if(this.counter < 3 && app.main.chance2 > .3){
				ctx.drawImage(this.punchPrep,0,10);
			} else if(this.counter < 3 && app.main.chance2 <= .3){
				ctx.drawImage(this.kickPrep,0,10);
			} else if(this.counter < 5 && app.main.chance2 > .3){
				if(this.counter < 4){
					this.stamina += 4;
					this.basic = true;
					//console.log("attack");//action
				} else {
					this.basic = false;
				}
				ctx.drawImage(this.punch,-20,8);
			} else if(this.counter < 5 && app.main.chance2 <= .3){
				if(this.counter < 4){
					this.stamina += 4;
					this.basic = true;
				} else {
					this.basic = false;
				}
				if(this.arms == false){
					ctx.drawImage(this.kick,-25,8);
				} else if(this.arms == true){
					ctx.drawImage(this.knee,-25,8);
				}
			} else if(app.main.chance2 > .3) {
				this.fight = false;
				this.attacking = false;
				this.basic = false;
				ctx.drawImage(this.stance,0,0);
				app.main.aiChoice2 = Math.random();
				app.main.chance2 = Math.random();
				app.main.detected2 = false;
				this.counter = 0;
			} else if(app.main.chance2 <= .3) {
				this.fight = false;
				this.attacking = false;
				this.basic = false;
				if(this.arms == false){
					ctx.drawImage(this.stance,0,0);
					this.arms = true;
				} else if(this.arms == true){
					ctx.drawImage(this.stance,0,0);
					this.arms = false;
				}
				//ctx.drawImage(this.kickPrep,0,10);
				app.main.aiChoice2 = Math.random();
				app.main.chance2 = Math.random();
				app.main.detected2 = false;
				this.counter = 0;
			} 
		//AIR BASIC ATTACK
		} else if(this.attacking == true && this.air == true && this.hit == false && this.down == false && this.intensify == false && this.blasting == false && this.specMove == false){
			this.randomEffect = Math.random();
			//this.chance2 = Math.random();
			if(this.counter < 3 && app.main.chance2 > .3){
				ctx.drawImage(this.punchPrep,0,10);
			} else if(this.counter < 3 && app.main.chance2 <= .3){
				ctx.drawImage(this.kickPrep,0,10);
			} else if(this.counter < 5 && app.main.chance2 > .3){
				if(this.counter < 4){
					this.stamina += 4;
					this.basic = true;
				} else {
					this.basic = false;
				}
				ctx.drawImage(this.punch,-20,8);
			} else if(this.counter < 5 && app.main.chance2 <= .3){
				if(this.counter < 4){
					this.stamina += 4;
					this.basic = true;
				} else {
					this.basic = false;
				}
				if(this.arms == false){
					ctx.drawImage(this.kick,-25,8);
				} else if(this.arms == true){
					ctx.drawImage(this.knee,-25,8);
				}
			} else if(app.main.chance2 > .3) {
				this.basic = false;
				ctx.drawImage(this.flyUp,0,0);
				this.fight = false;
				this.attacking = false;
				app.main.aiChoice2 = Math.random();
				app.main.chance2 = Math.random();
				app.main.detected2 = false;
				this.counter = 0;
			} else if(app.main.chance2 <= .3) {
				if(this.arms == false){
					ctx.drawImage(this.flyUp,0,0);
					this.arms = true;
				} else if(this.arms == true){
					ctx.drawImage(this.flyUp,0,0);
					this.arms = false;
				}
				this.basic = false;
				//ctx.drawImage(this.kickPrep,0,10);
				this.fight = false;
				this.attacking = false;
				app.main.aiChoice2 = Math.random();
				app.main.chance2 = Math.random();
				app.main.detected2 = false;
				this.counter = 0;
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
		} else if(this.attacking == true && this.intensify == true && this.air == false && this.hit == false && this.down == false && this.specMove == false){
			this.randomEffect = Math.random();
			this.hard = true;
			//app.main.chance2 = .3;
			if(app.main.chance2 > .6){
				if(this.counter < 3){
					ctx.drawImage(this.hardPunchPrep,-15,28);
				} else if(this.counter < 4){
					this.stamina += 10;
					this.punching = true;
					ctx.drawImage(this.hardPunch,-45,28);
				} else if(this.counter < 10){
					this.punching = false;
					ctx.drawImage(this.hardPunch,-45,28);
				} else {
					ctx.drawImage(this.stance,0,0);
					this.hard = false;
					this.fight = false;
					this.attacking = false;
					this.intensify = false;
					app.main.aiChoice2 = Math.random();
					app.main.chance2 = Math.random();
					this.counter = 0;
					app.main.detectedHard2 = false;
				} 
			} else if(app.main.chance2 < .61 && app.main.chance2 > .25){
				if(this.counter < 3){
					ctx.drawImage(this.launchPrep,-16,5);
				} else if(this.counter < 4){
					this.stamina += 10;
					/* if(this.focus17 == false){
						if(app.main.android18.blocking == false && app.main.android18.superSpeed == false){
							//app.main.android18.stun = true;
							app.main.android18.jumpVelocity = new Victor(0,-30);
							app.main.android18.air = true;
						}
					} else {
						if(app.main.android17.blocking == false && app.main.android17.superSpeed == false){
							//app.main.android18.stun = true;
							app.main.android17.jumpVelocity = new Victor(0,-30);
							app.main.android17.air = true;
						}
					} */
					this.kicking = true;
					ctx.drawImage(this.launchSwing,-60,10);
				} else if(this.counter < 5){
					if(this.focus17 == false){
						if(hardAttackHitTest(app.main.vegeta, app.main.android18) == true && app.main.android18.blocking == false && app.main.android18.superSpeed == false && app.main.android18.hardHit == true){
							//app.main.android18.stun = true;
							app.main.android18.jumpVelocity = new Victor(0,-30);
							app.main.android18.air = true;
						}
					} else {
						if(hardAttackHitTest(app.main.vegeta, app.main.android17) == true && app.main.android17.blocking == false && app.main.android17.superSpeed == false && app.main.android17.hardHit == true){
							//app.main.android18.stun = true;
							app.main.android17.jumpVelocity = new Victor(0,-30);
							app.main.android17.air = true;
						}
					}
					ctx.drawImage(this.launch,-60,0);
				} else if(this.counter < 10){
					this.kicking = false;
					ctx.drawImage(this.launch,-60,0);
				} else {
					ctx.drawImage(this.stance,0,0);
					this.hard = false;
					this.fight = false;
					this.attacking = false;
					this.intensify = false;
					app.main.aiChoice2 = Math.random();
					app.main.chance2 = Math.random();
					this.counter = 0;
					app.main.detectedHard2 = false;
				}
			} else {
				if(this.counter < 3){
					ctx.drawImage(this.hardKickPrep,15,15);
				} else if(this.counter < 4){
					this.stamina += 10;
					this.kicking = true;
					ctx.drawImage(this.hardKickSwing,-38,22);
				} else if(this.counter < 10){
					this.kicking = false;
					ctx.drawImage(this.hardKick,-38,22);
				} else {
					ctx.drawImage(this.stance,0,0);
					this.hard = false;
					this.fight = false;
					this.attacking = false;
					this.intensify = false;
					app.main.aiChoice2 = Math.random();
					app.main.chance2 = Math.random();
					this.counter = 0;
					app.main.detectedHard2 = false;
				} 
			}
		//AIR HARD PUNCH
		} else if(this.attacking == true && this.intensify == true && this.air == true && this.hit == false && this.down == false && this.specMove == false){
			this.randomEffect = Math.random();
			this.hard = true;
			if(app.main.chance2 > .5){
				if(this.counter < 3){
					ctx.drawImage(this.hardPunchAirPrep,-2,5);
				} else if(this.counter < 4){
					this.stamina += 10;
					this.punching = true;
					ctx.drawImage(this.hardPunchAirSwing,-2,5);
				} else if(this.counter < 10){
					this.punching = false;
					ctx.drawImage(this.hardPunchAir,-2,25);
				} else {
					ctx.drawImage(this.flyUp,0,0);
					this.hard = false;
					this.fight = false;
					this.attacking = false;
					this.intensify = false;
					app.main.aiChoice2 = Math.random();
					app.main.chance2 = Math.random();
					this.counter = 0;
					app.main.detectedHard2 = false;
				} 
			} else {
				if(this.counter < 3){
					ctx.drawImage(this.hardKickPrep,20,15);
				} else if(this.counter < 4){
					this.stamina += 10;
					this.kicking = true;
					ctx.drawImage(this.hardKick,-38,20);
				} else if(this.counter < 10){
					this.kicking = false;
					ctx.drawImage(this.hardKick,-38,20);
				} else {
					ctx.drawImage(this.flyUp,-38,20);
					this.hard = false;
					this.fight = false;
					this.attacking = false;
					this.intensify = false;
					app.main.aiChoice2 = Math.random();
					app.main.chance2 = Math.random();
					this.counter = 0;
					app.main.detectedHard2 = false;
				} 
			}	
		//BURST ATTACK
		} else if((this.attacking == true || this.specMove == true) && (this.hit == false || this.specMove == true) && this.intensify == false && this.powerMove == false && this.charging == false){ //KEY CHANGE
			if(this.specMove == true && this.specTimer > 50){
				/* this.specMove = true;
				this.attacking = false;
				this.blasting = false;
				this.powerMove = false;
				this.taunting = false;
				this.charging = false;
				if(this.end == false){
					this.stun = false;
				}
				this.hard = false;
				this.fight = false;
				this.intensify = false; */
				this.unstoppable = true;
				if(this.counter < 4){
					ctx.drawImage(this.burst1Vegeta,-20,0);
					if(this.counter < 2){
						app.main.sound.playEnergyAttack2(50);
						app.main.sound.playTaunt2(Math.round(getRandom(51,54)));
					}
				} else if(this.counter < 5){
					ctx.drawImage(this.burst2Vegeta,-20,0);
					ctx.save();
					ctx.globalAlpha = .7;
					ctx.drawImage(this.burst1,-105,-80);
					ctx.restore();
				} else if(this.counter < 6){
					ctx.drawImage(this.burst2Vegeta,-20,0);
					ctx.save();
					ctx.globalAlpha = .7;
					ctx.drawImage(this.burst2,-105,-80);
					ctx.restore();
					app.main.environment.flash = true;
				} else if(this.counter < 7){
					ctx.drawImage(this.burst2Vegeta,-20,0);
					ctx.save();
					ctx.globalAlpha = .7;
					ctx.drawImage(this.burst3,-105,-80);
					ctx.restore();
				} else if(this.counter < 8){
					ctx.drawImage(this.burst2Vegeta,-20,0);
					ctx.save();
					ctx.globalAlpha = .7;
					ctx.drawImage(this.burst4,-105,-80);
					ctx.restore();
					//HIT BLAST
					this.energy -= 2;
					if(this.hits17 == true){
						if(app.main.android17.left == true){
							if(this.behind == true && this.position.x > app.main.android17.position.x){
								app.main.android17.velocity.x = -70;
							} else {
								app.main.android17.velocity.x = -70;
							}
						} else {
							if(this.behind == true && this.position.x < app.main.android17.position.x){
								app.main.android17.velocity.x = 70;
							} else {
								app.main.android17.velocity.x = -70;
							}
						}
						app.main.android17.decel = app.main.android17.velocity.clone();
						this.hits17 = false;
					}
					if(this.hits18 == true){
						if(app.main.android18.left == true){
							if(this.behind == true && this.position.x > app.main.android18.position.x){
								app.main.android18.velocity.x = -70;
							} else {
								app.main.android18.velocity.x = 70;
							}
						} else {
							if(this.behind == true && this.position.x < app.main.android18.position.x){
								app.main.android18.velocity.x = 70;
							} else {
								app.main.android18.velocity.x = -70;
							}
						}
						app.main.android18.decel = app.main.android18.velocity.clone();
						this.hits18 = false;
					}
				} else if(this.counter < 9){
					ctx.drawImage(this.burst2Vegeta,-20,0);
				} else {
					ctx.drawImage(this.burst2Vegeta,-20,0);
					this.specTimer = 0;
					this.unstoppable = false;
					this.specMove = false;
					this.fight = false;
					this.attacking = false;
					this.blasting = false;
					app.main.aiChoice2 = Math.random();
					app.main.chance2 = Math.random();
					this.counter = 0;
				}
					
				} else {
			if(this.counter < 3){
				ctx.drawImage(this.punchPrep,1,6);
			} else if(this.counter < 6){
				if(this.arms == false){
					if(this.counter < 4){
						app.main.sound.playEnergyAttack2(5);
						this.energy -= 2;
						if(this.left == true){
							app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 40,this.left, 1, 0));
						} else {
							app.main.blasts.push(new app.Energy(this.position.x + 70,this.position.y + 40,this.left, 1, 0));
						}
					}
					//console.log("RIGHT");
					ctx.drawImage(this.rightBlast,-28,5);
				} else if(this.arms == true){
					if(this.counter < 4){
						app.main.sound.playEnergyAttack2(5);
						this.energy -= 2;
						if(this.left == true){
							app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 37,this.left, 1, 0));
						} else {
							app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 37,this.left, 1, 0));
						}
					}
					ctx.drawImage(this.leftBlast,-10,5);
					//console.log("RIGHT");
				}
			} else {
				if(this.arms == false){
					this.arms = true;
				} else if(this.arms == true){
					this.arms = false;
				}
				ctx.drawImage(this.punchPrep,1,6);
				this.fight = false;
				this.attacking = false;
				this.blasting = false;
				app.main.aiChoice2 = Math.random();
				app.main.chance2 = Math.random();
				this.counter = 0;
			}
		}
		//POWERFUL BLAST ATTACK
		} else if(this.powerMove == true && this.blasting == true && this.attacking == true && this.hit == false && this.fallingKick == false){
			//console.log("POWERMOVEEEEE");
			//app.main.chance2 = .4;
			
			if(app.main.chance2 > .5){
			if(this.counter < 3){
				ctx.drawImage(this.attackE,-15,-5);
			} else if(this.counter < 5){
				ctx.drawImage(this.attackE,-15,-5);
			} else if(this.counter < 6){
				app.main.sound.playEnergyAttack2(25);
				ctx.drawImage(this.attackE,-15,-5);
			} else if(this.counter < 7){
				ctx.drawImage(this.attackE,-15,-5);
				ctx.drawImage(this.blastCharge1,-27,20,10,14);
			} else if(this.counter < 8){
				ctx.drawImage(this.attackE,-15,-5);
				ctx.drawImage(this.blastCharge1,-32,16.5,15,21);
			} else if(this.counter < 9){
				ctx.drawImage(this.attackE,-15,-5);
				ctx.drawImage(this.blastCharge1,-37,13,20,28);
			} else if(this.counter < 10){
				ctx.drawImage(this.attackE,-15,-5);
				ctx.drawImage(this.blastCharge1,-42,9.5,25,35);
			} else if(this.counter < 11){
				ctx.drawImage(this.attackE,-15,-5);
				ctx.drawImage(this.blastCharge1,-47,6,30,42);
			} else if(this.counter < 12){
				ctx.drawImage(this.attackE,-15,-5);
				ctx.drawImage(this.blastCharge1,-52,2.5,35,49);
			} else if(this.counter < 13){
				ctx.drawImage(this.attackE,-15,-5);
				ctx.drawImage(this.blastCharge1,-52,2.5,35,49);
			} else if(this.counter < 20){
				if(this.arms == false){
					if(this.counter < 14){
						this.blastRelease = true;
						app.main.sound.playEnergyAttack2(26);
						this.energy -= 15;
						if(this.left == true){
							app.main.sound.playTaunt2(26);
							app.main.blasts.push(new app.Energy(this.position.x - 32,this.position.y + 27,this.left, 1, 3));
						} else {
							app.main.sound.playTaunt2(27);
							app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 27,this.left, 1, 3));
						}
					} else {
						this.blastRelease = false;
					}
					ctx.drawImage(this.attackE,-15,-5);
				} else if(this.arms == true){
					if(this.counter < 14){
						this.blastRelease = true;
						app.main.sound.playEnergyAttack2(26);
						this.energy -= 15;
						if(this.left == true){
							app.main.sound.playTaunt2(26);
							app.main.blasts.push(new app.Energy(this.position.x - 32,this.position.y + 27,this.left, 1, 3));
						} else {
							app.main.sound.playTaunt2(27);
							app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 27,this.left, 1, 3));
						}
					} else {
						this.blastRelease = false;
					}
					ctx.drawImage(this.attackE,-15,-5);
				}
			} else {
				if(this.arms == false){
					this.arms = true;
				} else if(this.arms == true){
					this.arms = false;
				}
				app.main.chance2 = Math.random();
				ctx.drawImage(this.attackE,-15,-5);
				this.intensify = false;
				this.powerMove = false;
				this.fight = false;
				this.attacking = false;
				this.blasting = false;
				this.blastRelease = false;
			}
			} else { //Blast Barrage
				if(this.counter < 4){
				ctx.drawImage(this.punchPrep,1,6);
			} else if(this.counter < 5){
				ctx.drawImage(this.punchPrep,1,6);
				app.main.sound.playTaunt2(Math.round(getRandom(33,34)));
			} else if(this.counter < 6){
				this.blastRelease = true;
				app.main.sound.playEnergyAttack2(5);
				this.energy -= 2;
				if(this.left == true){
					app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 37,this.left, 1, 0));
				} else {
					app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 37,this.left, 1, 0));
				}
				ctx.drawImage(this.leftBlast,-10,5);
			} else if(this.counter < 8){
				this.blastRelease = false;
				ctx.drawImage(this.punchPrep,1,6);
			} else if(this.counter < 9){
				this.blastRelease = true;
				app.main.sound.playEnergyAttack2(5);
				this.energy -= 2;
				if(this.left == true){
					app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 37,this.left, 1, 0));
				} else {
					app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 37,this.left, 1, 0));
				}
				ctx.drawImage(this.rightBlast,-28,5);
			} else if(this.counter < 11){
				this.blastRelease = false;
				ctx.drawImage(this.punchPrep,1,6);
			} else if(this.counter < 12){
				this.blastRelease = true;
				app.main.sound.playEnergyAttack2(5);
				this.energy -= 2;
				if(this.left == true){
					app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 37,this.left, 1, 0));
				} else {
					app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 37,this.left, 1, 0));
				}
				ctx.drawImage(this.leftBlast,-10,5);
			} else if(this.counter < 14){
				this.blastRelease = false;
				ctx.drawImage(this.punchPrep,1,6);
			} else if(this.counter < 15){
				this.blastRelease = true;
				app.main.sound.playEnergyAttack2(5);
				this.energy -= 2;
				if(this.left == true){
					app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 37,this.left, 1, 0));
				} else {
					app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 37,this.left, 1, 0));
				}
				ctx.drawImage(this.rightBlast,-28,5);
			} else if(this.counter < 17){
				this.blastRelease = false;
				ctx.drawImage(this.punchPrep,1,6);
			} else if(this.counter < 18){
				this.blastRelease = true;
				app.main.sound.playEnergyAttack2(5);
				this.energy -= 2;
				if(this.left == true){
					app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 37,this.left, 1, 0));
				} else {
					app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 37,this.left, 1, 0));
				}
				ctx.drawImage(this.leftBlast,-10,5);
			} else if(this.counter < 20){
				this.blastRelease = false;
				ctx.drawImage(this.punchPrep,1,6);
			} else if(this.counter < 21){
				this.blastRelease = true;
				app.main.sound.playEnergyAttack2(5);
				this.energy -= 2;
				if(this.left == true){
					app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 37,this.left, 1, 0));
				} else {
					app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 37,this.left, 1, 0));
				}
				ctx.drawImage(this.rightBlast,-28,5);
			} else if(this.counter < 25){
				this.blastRelease = false;
				ctx.drawImage(this.punchPrep,1,6);
			} else {
				if(this.arms == false){
					this.arms = true;
				} else if(this.arms == true){
					this.arms = false;
				}
				ctx.drawImage(this.punchPrep,1,6);
				app.main.chance2 = Math.random();
				this.intensify = false;
				this.powerMove = false;
				this.fight = false;
				this.attacking = false;
				this.blasting = false;
			}
			}
		//BLOCK
		} else if(this.blocking == true && this.hit == false && (this.stun == false || this.superSpeed == true)){
			ctx.drawImage(this.block,0,10);
		//TAUNT
		} else if(this.taunting == true && this.hit == false && this.hardHit != true){
			if((this.counter < 25 && app.main.android18.teleDelay < 2) || (this.counter < 12 && app.main.android18.teleDelay > 1)){
				//this.stun = true;
				ctx.drawImage(this.taunt,20,0);
				if(this.counter > 5 && this.counter < 7){
					var check = Math.round(getRandom(0,1));
					if(app.main.android18.teleDelay == 0){
						app.main.sound.playTaunt2(Math.round(this.tauntPick));
					} else {
						if(check < .7){
							app.main.sound.playTaunt2(Math.round(getRandom(75,76)));
						} else {
							app.main.sound.playTaunt2(Math.round(this.tauntPick));
						}
					}
				}
				if(this.hit == true || this.hardHit == true || this.taunting == false) {
					this.aiTaunting = false;
					this.intensify = false;
					this.taunting = false;
					//this.stun = false;
				}
			} else {
				ctx.drawImage(this.taunt,20,0);
				//this.counter = 0;
				this.stamina = 28;
				this.exhausted = false;
				//this.stun = false;
				this.intensify = false;
				this.taunting = false;
			}
		//Energy Charge
		} else if(this.charging == true && this.hit == false && this.hardHit != true){
			if(this.counter < 100){
				if(this.counter == 5){
					app.main.sound.playTaunt2(Math.round(getRandom(28,29)));
				}
				//this.stun = true;
				if(this.counter > 8){
					this.energy += 2;
				}
				ctx.drawImage(this.charge,0,14);
				if(this.counter > 6){
				if(this.counter < 8){
					app.main.sound.playEffect2(28);
				}
				this.chargeCounter++;
				ctx.save();
				ctx.globalAlpha = (.006 * this.energy);
				if(this.chargeCounter < 2){
					if(this.superForm == false){
						ctx.drawImage(this.auraWhite1,-73,-100);
					} else {
						ctx.drawImage(this.auraYellow1,-73,-100);
					}
				} else if (this.chargeCounter < 3){
					if(this.superForm == false){
						ctx.drawImage(this.auraWhite2,-73,-100);
					} else {
						ctx.drawImage(this.auraYellow2,-73,-100);
					}
				} else if (this.chargeCounter < 4){
					if(this.superForm == false){
						ctx.drawImage(this.auraWhite3,-73,-100);
					} else {
						ctx.drawImage(this.auraYellow3,-73,-100);
					}
				} else if (this.chargeCounter < 5){
					if(this.superForm == false){
						ctx.drawImage(this.auraWhite4,-73,-100);
					} else {
						ctx.drawImage(this.auraYellow4,-73,-100);
					}
					this.chargeCounter = 0;
				}
				ctx.restore();
				}
				if(this.energy > 99) {
					app.main.sound.stopEffect();
					//Play voice
					//this.stun = false;
					this.intensify = false;
					this.charging = false;
				}
				if(this.hit == true || this.hardHit == true || this.charging == false) {
					app.main.sound.stopEffect();
					this.aiCharging = false;
					this.intensify = false;
					this.charging = false;
					//this.stun = false;
				}
				
				/*
				if(this.counter > 19 && this.counter < 21){
					app.main.sound.playTaunt2(Math.round(this.tauntPick));
				}
				*/
			} else {
				ctx.drawImage(this.charge,0,14);
				//this.stun = false;
				this.intensify = false;
				this.charging = false;
			}
		//Scene
		} else if(this.sceneOpen == true){
				this.stun = true;
				if(this.scenePlay == true){
					this.chargeCounter++;
					this.sceneCounter++;
				}
				if(this.sceneCounter > 2){
				ctx.save();
				ctx.globalAlpha = (.006 * this.energy);
				if(this.chargeCounter < 2){
					if(this.superForm == false){
						ctx.drawImage(this.auraWhite1,-73,-100);
					} else {
						ctx.drawImage(this.auraYellow1,-73,-100);
					}
				} else if (this.chargeCounter < 3){
					if(this.superForm == false){
						ctx.drawImage(this.auraWhite2,-73,-100);
					} else {
						ctx.drawImage(this.auraYellow2,-73,-100);
					}
				} else if (this.chargeCounter < 4){
					if(this.superForm == false){
						ctx.drawImage(this.auraWhite3,-73,-100);
					} else {
						ctx.drawImage(this.auraYellow3,-73,-100);
					}
				} else if (this.chargeCounter < 5){
					if(this.superForm == false){
						ctx.drawImage(this.auraWhite4,-73,-100);
					} else {
						ctx.drawImage(this.auraYellow4,-73,-100);
					}
					this.chargeCounter = 0;
				}
				ctx.restore();
				}
				
				if(this.sceneCounter < 1){
					ctx.drawImage(this.pose1Vegeta,0,-10);
				} else if(this.sceneCounter < 2){
					ctx.drawImage(this.special1Vegeta,0,-10);
				} else if (this.sceneCounter < 3){
					ctx.drawImage(this.special1Vegeta,0,-10);
					//ctx.drawImage(this.pose2Vegeta,5,20);
				} else if (this.sceneCounter < 70){
					app.main.environment.powerUp = true;
					ctx.drawImage(this.pose3Vegeta,5,17);
				} else if (this.sceneCounter < 120){
					this.superForm = true;
					app.main.environment.superFlash = true;
					app.main.environment.decay = true;
					app.main.android18.velocity.x += 10;
					app.main.android18.decelerate();
					if(this.sceneCounter < 71){
						app.main.sound.playEffect2(28);
					}
					if(this.sceneCounter < 120 && this.sceneCounter > 118){
						app.main.sound.playTaunt2(32);
					}
					ctx.drawImage(this.pose4Vegeta,5,20);
				} else {
					ctx.drawImage(this.pose4Vegeta,5,20);
					app.main.environment.powerUp = false;
					this.scenePlay = false;
					this.sceneOpen = false;
					this.sceneCounter = 0;
				}
		//BASIC HIT
		} else if(this.hit == true && this.hardHit == false && this.unstoppable == false && this.end == false){
			if(this.unstoppable == true){
				this.defBreak++;
				ctx.drawImage(this.hit1,5,0);
				this.stun = false;
				this.hit = false; 
			}
			if(this.stunCounter < 3){
				if(app.main.CP == true){
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 11;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 11;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 11;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 11;
						}
					}
				}
				} else {
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 7;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 7;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 7;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 7;
						}
					}
				}
				}
				
				this.stun = true;
				ctx.drawImage(this.hit1,5,0);
			} else {
				this.defBreak++;
				ctx.drawImage(this.hit1,5,0);
				this.stun = false;
				this.hit = false; 
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
		} else if(this.hardHit == true && this.hit == true && (this.air == false || this.blasted == true) && this.unstoppable == false && this.end == false){
			if(this.unstoppable == true){
				ctx.drawImage(this.hitHard,5,20);
				this.stun = false;
				this.hardHit = false;
				this.hit = false; 
				this.blasted = false;
				this.smallBlasted = false;
			}
			if(this.stunCounter < 22){
				this.voiceChance = Math.random();
				if(this.stunCounter < 4 && this.stunCounter > 2 && this.voiceChance > .5 && this.stuckInBlast == false && this.end == false){
						app.main.sound.playTaunt2(Math.round(getRandom(66,68)));
				}
				if(app.main.CP == true){
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					}
				}
				} else {
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					}
				}
				}
				this.stun = true;
				if(this.flareHit == true){
					ctx.drawImage(this.hit1,5,0);
				} else {
					ctx.drawImage(this.hitHard,5,20);
				}
			} else {
				if(this.flareHit == true){
					ctx.drawImage(this.hit1,5,0);
				} else {
					ctx.drawImage(this.hitHard,5,20);
				}
				this.stun = false;
				this.hardHit = false;
				this.hit = false; 
				this.blasted = false;
			}
		//HARD HIT AIR
		} else if(this.hardHit == true && this.hit == true && this.air == true && this.unstoppable == false && this.end == false){
			if(this.punched == true){
				if(this.unstoppable == true){
					ctx.drawImage(this.fallDown,5,20);
					this.stun = false;
					this.hardHit = false;
					this.hit = false; 
				}
				if(this.stunCounter < 22){
					this.voiceChance = Math.random();
					if(this.stunCounter < 4 && this.stunCounter > 2 && this.voiceChance > .5 && this.stuckInBlast == false && this.end == false){
						app.main.sound.playTaunt2(Math.round(getRandom(66,68)));
					}
					if(app.main.CP == true){
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					}
				}
				} else {
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					}
				}
				}
					this.stun = true;
					ctx.drawImage(this.fallDown,5,20);		
				} else {
					ctx.drawImage(this.fallDown,5,20);
					this.stun = false;
					this.hardHit = false;
					this.hit = false; 
				}
			} else {
				if(this.stunCounter < 22){
					if(this.unstoppable == true){
						ctx.drawImage(this.fallDown,5,20);
						this.stun = false;
						this.hardHit = false;
						this.hit = false; 
				    }
					this.voiceChance = Math.random();
					if(this.stunCounter < 4 && this.stunCounter > 2 && this.voiceChance > .5 && this.end == false){
						app.main.sound.playTaunt2(Math.round(getRandom(66,68)));
					}
					if(app.main.CP == true){
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					}
				}
				} else {
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					}
				}
				}
					this.stun = true;
					if(this.flareHit == true){
						ctx.drawImage(this.hit1,5,0);
					} else {
						ctx.drawImage(this.fallSide,5,20);
					}
				} else {
					if(this.flareHit == true){
						ctx.drawImage(this.hit1,5,0);
					} else {
						ctx.drawImage(this.fallSide,5,20);
					}
					this.stun = false;
					this.hardHit = false;
					this.hit = false; 
				}
			}
		} else if(this.end == true){
				this.effortTimer++;
				if(this.lastEffort == false){
					this.hits17 = true;
					this.hits18 = true;
				if(this.effortTimer < 4){
					ctx.drawImage(this.struggle1Vegeta,-20,0);
					if(this.counter < 2){
						app.main.sound.playEnergyAttack2(50);
						//app.main.sound.playTaunt2(Math.round(getRandom(51,54)));
					}
				} else if(this.effortTimer < 5){
					ctx.drawImage(this.struggle1Vegeta,-20,0);
					ctx.save();
					ctx.globalAlpha = .7;
					ctx.drawImage(this.burst1,-105,-80);
					ctx.restore();
				} else if(this.effortTimer < 6){
					ctx.drawImage(this.struggle1Vegeta,-20,0);
					ctx.save();
					ctx.globalAlpha = .7;
					ctx.drawImage(this.burst2,-105,-80);
					ctx.restore();
					app.main.environment.flash = true;
				} else if(this.effortTimer < 7){
					ctx.drawImage(this.struggle1Vegeta,-20,0);
					ctx.save();
					ctx.globalAlpha = .7;
					ctx.drawImage(this.burst3,-105,-80);
					ctx.restore();
				} else if(this.effortTimer < 8){
					ctx.drawImage(this.struggle1Vegeta,-20,0);
					ctx.save();
					ctx.globalAlpha = .7;
					ctx.drawImage(this.burst4,-105,-80);
					ctx.restore();
					//HIT BLAST
					this.energy -= 2;
					if(this.hits17 == true){
						if(app.main.android17.left == true){
							if(this.behind == true && this.position.x > app.main.android17.position.x){
								app.main.android17.velocity.x = -70;
							} else {
								app.main.android17.velocity.x = -70;
							}
						} else {
							if(this.behind == true && this.position.x < app.main.android17.position.x){
								app.main.android17.velocity.x = 70;
							} else {
								app.main.android17.velocity.x = -70;
							}
						}
						app.main.android17.decel = app.main.android17.velocity.clone();
						this.hits17 = false;
					}
					if(this.hits18 == true){
						if(app.main.android18.left == true){
							if(this.behind == true && this.position.x > app.main.android18.position.x){
								app.main.android18.velocity.x = -70;
							} else {
								app.main.android18.velocity.x = 70;
							}
						} else {
							if(this.behind == true && this.position.x < app.main.android18.position.x){
								app.main.android18.velocity.x = 70;
							} else {
								app.main.android18.velocity.x = -70;
							}
						}
						app.main.android18.decel = app.main.android18.velocity.clone();
						this.hits18 = false;
					}
				} else if(this.effortTimer < 9){
					ctx.drawImage(this.burst2Vegeta,-20,0);
				} else {
					ctx.drawImage(this.burst2Vegeta,-20,0);
					this.lastEffort = true;
					//this.counter = 0;
				}
				}	
				if((this.air == true || this.position.y < this.GROUND.y) && this.lastEffort == true){
					this.stun = true;
					ctx.drawImage(this.fallDown,5,20);		
				} else if(this.air == false && this.lastEffort == true){
					this.unable = true;
					this.stun = true;
					if(this.stunCounter < 2){
						ctx.drawImage(this.hitHard,5,20);
					} else {
						ctx.drawImage(this.groundVegeta,5,95);
					}
					if(this.deadCount == false) {
						app.main.kills += 1;
						app.main.vegetaKill += 1;
						this.deadCount = true;
					}
					if(this.stunCounter > 40){
						//app.main.sound.playEffect2(57);
						this.vanish = true;
						app.main.environment.deathVegetaDirLeft = this.left;
						app.main.environment.deathLocationVegeta = new Victor(this.position.x, this.position.y);
						this.dead = true;
						app.main.targetHidden = true;
						app.main.targetDead = true;
					}
				}
		}
		ctx.restore();
		}//end if
		
		// ------------ DRAWS FOR GERO ---------------------------------------------
		// ------------ DRAWS FOR GERO ---------------------------------------------
		// ------------ DRAWS FOR GERO ---------------------------------------------
		
		if(this.vanish == false && this.gero == true){
		ctx.save();
		ctx.scale(2,2);
		//NON MOVING DRAWS
		if(this.velocity.x == 0 && this.attacking != true && this.blocking != true && this.taunting != true && this.hit == false && this.hardHit != true) {
			if((this.up == true && this.flying == true) || (this.jumpVelocity.y < 15 && this.air == true)){
				ctx.drawImage(this.flyUpGero,0,0);
			} else if(this.down == true && this.air == true) {
				ctx.drawImage(this.flyDownFastGero,0,0);
			} else if(this.down == false && this.air == true && this.up == false) {
				ctx.drawImage(this.flyDownSlowGero,0,0);
			} else if(this.exhausted == true){
				ctx.drawImage(this.injuredGero,-13,0);
			} else {
				if((this.stillGero == true && app.main.sceneChange == 0)){
					ctx.save();
					ctx.scale(-1,1);
					if(this.stillChance >= .7){
						ctx.drawImage(this.geroStill1,-23,0);
					} else if(this.stillChance >= .4 && this.stillChance < .7){
						ctx.drawImage(this.geroStill3,-30,0);
					} else if(this.stillChance < .4){
						ctx.drawImage(this.geroStill2,-25,0);
					}
					ctx.restore();
				} else {
					if(app.main.sceneChance == 0 || app.main.scene == true){
						ctx.drawImage(this.stanceGero,0,0);
					} else {
						ctx.save();
						ctx.scale(-1,1);
						ctx.drawImage(this.geroStill4,-30,5);
						ctx.restore();
					}
				}
			}
		//MOVING DRAWS
		} else if(this.velocity.x != 0 && this.attacking != true && this.blocking != true && this.hit == false && this.hardHit != true){ //&& (this.fallingKick == false || this.air == false)
			this.stillChance =  Math.random();
			if(this.slow == true && this.reverse == false){
				ctx.drawImage(this.slowFlyGero,0,0);
			} else if(this.fast == true && this.reverse == false){
				ctx.drawImage(this.fastFlyGero,0,0);
			} else if(this.reverse == true && this.farLeft == false && this.farRight  == false){
				ctx.drawImage(this.moveReverseGero,0,0);
			} else if(this.air == true && this.up == false){
				ctx.drawImage(this.flyDownSlowGero,0,0);
			} else if(this.exhausted == true){
				ctx.drawImage(this.injuredGero,-13,0);
			} else {
				ctx.drawImage(this.stanceGero,0,0);
			}
		//BASIC ATTACK
		} else if(this.attacking == true && this.air == false && this.hit == false && this.blasting == false && this.intensify == false){
			this.randomEffect = Math.random();
			this.stillChance =  Math.random();
			//this.chance2 = Math.random();
			if(this.counter < 3 && app.main.chance2 > .3){
				ctx.drawImage(this.punchPrepGero,-10,10);
			} else if(this.counter < 3 && app.main.chance2 <= .3){
				ctx.drawImage(this.kickPrepGero,-10,10);
			} else if(this.counter < 5 && app.main.chance2 > .3){
				if(this.counter < 4){
					this.stamina += 4;
					this.basic = true;
					//console.log("attack");//action
				} else {
					this.basic = false;
				}
				if(this.arms == false){
					ctx.drawImage(this.leftPunchGero,-20,8);
				} else if(this.arms == true){
					ctx.drawImage(this.rightPunchGero,-20,8);
				}
				
			} else if(this.counter < 5 && app.main.chance2 <= .3){
				if(this.counter < 4){
					this.stamina += 4;
					this.basic = true;
				} else {
					this.basic = false;
				}
				ctx.drawImage(this.kickGero,-25,8);
			} else if(app.main.chance2 > .3) {
				if(this.arms == false){
					this.arms = true;
				} else if(this.arms == true){
					this.arms = false;
				}
				this.fight = false;
				this.attacking = false;
				this.basic = false;
				ctx.drawImage(this.punchPrepGero,-10,10);
				app.main.aiChoice2 = Math.random();
				app.main.chance2 = Math.random();
				app.main.detected2 = false;
				this.counter = 0;
			} else if(app.main.chance2 <= .3) {
				this.fight = false;
				this.attacking = false;
				this.basic = false;
				ctx.drawImage(this.kickGero,-25,8);
				app.main.aiChoice2 = Math.random();
				app.main.chance2 = Math.random();
				app.main.detected2 = false;
				this.counter = 0;
			} 
		//AIR BASIC ATTACK
		} else if(this.attacking == true && this.air == true && this.hit == false && this.down == false && this.intensify == false && this.blasting == false){
			this.randomEffect = Math.random();
			//this.chance2 = Math.random();
			if(this.counter < 3 && app.main.chance2 > .3){
				ctx.drawImage(this.punchPrepGero,0,10);
			} else if(this.counter < 3 && app.main.chance2 <= .3){
				ctx.drawImage(this.kickPrepGero,0,10);
			} else if(this.counter < 5 && app.main.chance2 > .3){
				if(this.counter < 4){
					this.stamina += 4;
					this.basic = true;
					//console.log("attack");//action
				} else {
					this.basic = false;
				}
				if(this.arms == false){
					ctx.drawImage(this.leftPunchGero,-20,8);
				} else if(this.arms == true){
					ctx.drawImage(this.rightPunchGero,-20,8);
				}
				
			} else if(this.counter < 5 && app.main.chance2 <= .3){
				if(this.counter < 4){
					this.stamina += 4;
					this.basic = true;
				} else {
					this.basic = false;
				}
				ctx.drawImage(this.kickGero,-25,8);
			} else if(app.main.chance2 > .3) {
				if(this.arms == false){
					this.arms = true;
				} else if(this.arms == true){
					this.arms = false;
				}
				this.fight = false;
				this.attacking = false;
				this.basic = false;
				ctx.drawImage(this.punchPrepGero,0,10);
				app.main.aiChoice2 = Math.random();
				app.main.chance2 = Math.random();
				app.main.detected2 = false;
				this.counter = 0;
			} else if(app.main.chance2 <= .3) {
				this.fight = false;
				this.attacking = false;
				this.basic = false;
				ctx.drawImage(this.kickPrepGero,0,10);
				app.main.aiChoice2 = Math.random();
				app.main.chance2 = Math.random();
				app.main.detected2 = false;
				this.counter = 0;
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
			this.randomEffect = Math.random();
			this.hard = true;
			//app.main.chance2 = .3;
			if(app.main.chance2 > .6){
				if(this.counter < 5){
					ctx.drawImage(this.hardPunchPrep,-15,28);
				} else if(this.counter < 6){
					this.stamina += 10;
					this.punching = true;
					ctx.drawImage(this.hardPunch,-45,28);
				} else if(this.counter < 10){
					this.punching = false;
					ctx.drawImage(this.hardPunch,-45,28);
				} else {
					ctx.drawImage(this.hardPunchPrep,-15,28);
					this.hard = false;
					this.fight = false;
					this.attacking = false;
					this.intensify = false;
					app.main.aiChoice2 = Math.random();
					app.main.chance2 = Math.random();
					this.counter = 0;
					app.main.detectedHard2 = false;
				} 
			} else if(app.main.chance2 < .61 && app.main.chance2 > .25){
				if(this.counter < 5){
					ctx.drawImage(this.launchPrep,-16,5);
				} else if(this.counter < 6){
					this.stamina += 10;
					if(app.main.android18.blocking == false && app.main.android18.superSpeed == false){
						app.main.android18.stun = true;
						app.main.android18.jumpVelocity = new Victor(0,-30);
						app.main.android18.air = true;
					}
					this.kicking = true;
					ctx.drawImage(this.launchSwing,-60,10);
				} else if(this.counter < 10){
					this.kicking = false;
					ctx.drawImage(this.launch,-60,0);
				} else {
					ctx.drawImage(this.launchPrep,-16,5);
					this.hard = false;
					this.fight = false;
					this.attacking = false;
					this.intensify = false;
					app.main.aiChoice2 = Math.random();
					app.main.chance2 = Math.random();
					this.counter = 0;
					app.main.detectedHard2 = false;
				}
			} else {
				if(this.counter < 5){
					ctx.drawImage(this.hardKickPrep,15,15);
				} else if(this.counter < 6){
					this.stamina += 10;
					this.kicking = true;
					ctx.drawImage(this.hardKickSwing,-38,22);
				} else if(this.counter < 10){
					this.kicking = false;
					ctx.drawImage(this.hardKick,-38,22);
				} else {
					ctx.drawImage(this.hardKickPrep,15,15);
					this.hard = false;
					this.fight = false;
					this.attacking = false;
					this.intensify = false;
					app.main.aiChoice2 = Math.random();
					app.main.chance2 = Math.random();
					this.counter = 0;
					app.main.detectedHard2 = false;
				} 
			}
		//AIR HARD PUNCH
		} else if(this.attacking == true && this.intensify == true && this.air == true && this.hit == false && this.down == false){
			this.randomEffect = Math.random();
			this.hard = true;
			if(app.main.chance2 > .5){
				if(this.counter < 5){
					ctx.drawImage(this.hardPunchAirPrep,-2,5);
				} else if(this.counter < 6){
					this.stamina += 10;
					this.punching = true;
					ctx.drawImage(this.hardPunchAirSwing,-2,5);
				} else if(this.counter < 10){
					this.punching = false;
					ctx.drawImage(this.hardPunchAir,-2,25);
				} else {
					ctx.drawImage(this.hardPunchAir,-2,25);
					this.hard = false;
					this.fight = false;
					this.attacking = false;
					this.intensify = false;
					app.main.aiChoice2 = Math.random();
					app.main.chance2 = Math.random();
					this.counter = 0;
					app.main.detectedHard2 = false;
				} 
			} else {
				if(this.counter < 5){
					ctx.drawImage(this.hardKickPrep,20,15);
				} else if(this.counter < 6){
					this.stamina += 10;
					this.kicking = true;
					ctx.drawImage(this.hardKick,-38,20);
				} else if(this.counter < 10){
					this.kicking = false;
					ctx.drawImage(this.hardKick,-38,20);
				} else {
					ctx.drawImage(this.hardKickPrep,20,15);
					this.hard = false;
					this.fight = false;
					this.attacking = false;
					this.intensify = false;
					app.main.aiChoice2 = Math.random();
					app.main.chance2 = Math.random();
					this.counter = 0;
					app.main.detectedHard2 = false;
				} 
			}	
		//BLAST ATTACK
		} else if(this.attacking == true && this.hit == false && this.intensify == false){
			if(this.counter < 3){
				ctx.drawImage(this.punchPrep,1,6);
				if(this.arms == false){
					this.arms = true;
				} else if(this.arms == true){
					this.arms = false;
				}
			} else if(this.counter < 6){
				if(this.arms == false){
					if(this.counter < 4){
						app.main.sound.playEnergyAttack2(5);
						this.energy -= 2;
						if(this.left == true){
							app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 37,this.left, 0));
						} else {
							app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 37,this.left, 0));
						}
					}
					//console.log("RIGHT");
					ctx.drawImage(this.rightBlast,-15,11);
				} else if(this.arms == true){
					if(this.counter < 4){
						app.main.sound.playEnergyAttack2(5);
						this.energy -= 2;
						if(this.left == true){
							app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 47,this.left, 0));
						} else {
							app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 47,this.left, 0));
						}
					}
					ctx.drawImage(this.leftBlast,-18,5);
					//console.log("RIGHT");
				}
			} else {
				ctx.drawImage(this.punchPrep,1,6);
				this.fight = false;
				this.attacking = false;
				this.blasting = false;
				app.main.aiChoice2 = Math.random();
				app.main.chance2 = Math.random();
				this.counter = 0;
			}
		//BLOCK
		} else if(this.blocking == true && this.hit == false && (this.stun == false || this.superSpeed == true)){
			ctx.drawImage(this.block,0,10);
		//TAUNT
		} else if(this.taunting == true && this.hit == false && this.hardHit != true){
			if((this.counter < 25 && app.main.android18.teleDelay < 2) || (this.counter < 12 && app.main.android18.teleDelay > 1)){
				this.stun = true;
				ctx.drawImage(this.taunt,20,0);
				if(this.counter > 5 && this.counter < 7){
					app.main.sound.playTaunt2(Math.round(this.tauntPick));
				}
			} else {
				ctx.drawImage(this.taunt,20,0);
				//this.counter = 0;
				this.stamina = 28;
				this.exhausted = false;
				this.stun = false;
				this.intensify = false;
				this.taunting = false;
			}
		//BASIC HIT
		} else if(this.hit == true && this.hardHit == false && this.end == false){
			if(this.stunCounter < 3){
				if(app.main.CP == true){
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 11;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 11;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 11;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 11;
						}
					}
				}
				} else {
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 7;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 7;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 7;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 7;
						}
					}
				}
				}
				this.stun = true;
				ctx.drawImage(this.hit1Gero,-5,0);
			} else {
				this.defBreak++;
				ctx.drawImage(this.hit1Gero,-5,0);
				this.stun = false;
				this.hit = false; 
				this.flareHit = false;
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
		} else if(this.hardHit == true && this.hit == true && (this.air == false || this.blasted == true) && this.end == false){
			if(this.stunCounter < 22){
				this.voiceChance = Math.random();
				if(this.stunCounter < 4 && this.stunCounter > 2 && this.voiceChance > .2 && this.stuckInBlast == false && this.end == false){
					app.main.sound.playTaunt2(Math.round(getRandom(69,71)));
				}
				if(app.main.CP == true){
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					}
				}
				} else {
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					}
				}
				}
				this.stun = true;
				if(this.flareHit == true){
					ctx.drawImage(this.hit1Gero,-5,0);
				} else {
					ctx.drawImage(this.hitHardGero,-5,0);
				}
			} else {
				if(this.flareHit == true){
					ctx.drawImage(this.hit1Gero,-5,0);
				} else {
					ctx.drawImage(this.hitHardGero,-5,0);
				}
				this.stun = false;
				this.hardHit = false;
				this.hit = false; 
				this.blasted = false;
				this.flareHit = false;
			}
		//HARD HIT AIR
		} else if(this.hardHit == true && this.hit == true && this.air == true && this.end == false){
			if(this.punched == true){
				if(this.stunCounter < 22){
					this.voiceChance = Math.random();
					if(this.stunCounter < 4 && this.stunCounter > 2 && this.voiceChance > .2 && this.stuckInBlast == false && this.end == false){
						app.main.sound.playTaunt2(Math.round(getRandom(69,71)));
					}
					if(app.main.CP == true){
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					}
				}
				} else {
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					}
				}
				}
					this.stun = true;
					ctx.drawImage(this.fallDownGero,-5,20);		
				} else {
					ctx.drawImage(this.fallDownGero,-5,20);
					this.stun = false;
					this.hardHit = false;
					this.hit = false; 
					this.flareHit = false;
				}
			} else {
				if(this.stunCounter < 22){
					if(app.main.CP == true){
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					}
				}
				} else {
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					}
				}
				}
					this.stun = true;
					if(this.flareHit == true){
						ctx.drawImage(this.hit1Gero,-5,0);
					} else {
						ctx.drawImage(this.fallSideGero,-5,20);
					}
				} else {
					if(this.flareHit == true){
						ctx.drawImage(this.hit1Gero,-5,0);
					} else {
						ctx.drawImage(this.fallSideGero,-5,20);
					}
					this.stun = false;
					this.hardHit = false;
					this.hit = false;
					this.flareHit = false;					
				}
			}
		}
		ctx.restore();
		
		}//end if
		

		// ------------ DRAWS FOR PICCOLO ---------------------------------------------
		// ------------ DRAWS FOR PICCOLO ---------------------------------------------
		// ------------ DRAWS FOR PICCOLO ---------------------------------------------
		
		if(this.vanish == false && this.piccolo == true){
		ctx.save();
		ctx.scale(.8,.8);
		//NON MOVING DRAWS
		if((this.velocity.x == 0 || this.startFallKick == true) && this.attacking != true && this.blocking != true && this.taunting != true && this.charging != true && this.hit == false && this.hardHit != true && this.sceneOpen == false && this.end == false) {
			if(((this.up == true && this.flying == true) || (this.jumpVelocity.y < 15 && this.air == true)) && this.startFallKick == false){
				if(this.lookUp == true){
					ctx.drawImage(this.flyUpUpPiccolo,10,-20);
				} else if(this.lookDown == true){
					ctx.drawImage(this.flyUpDownPiccolo,10,-20);
				} else {
					ctx.drawImage(this.flyUpPiccolo,10,-20);
				}
			} else if(this.air == true && this.startFallKick == true) {
				ctx.drawImage(this.fallKickPiccolo,10,-20);
				this.fallingKick = true;
				this.attacking = false;
				this.fight = false;
				this.flying = false;
				this.aboveBuilding = false;
				this.fallTimer++;
				/* this.gravity = new Victor(0,5.5);
				this.velocity.multiplyScalar(1.3); */
				//this.stun = true;
				if(this.kickSound == false){
					app.main.sound.playBasicAttack2(Math.round(getRandom(61,63)));
					this.kickSound = true;
					this.fallTimer = 0;
				}
				if(this.fallTimer > 3 && this.fallTimer < 5){
					app.main.sound.playSpecialReaction2(74);
				}
				if((app.main.android17.ground == true && (hitTest(app.main.android17, app.main.vegeta) == true) && app.main.android17.superSpeed == false && this.focus17 == true) || (app.main.android18.ground == true && (hitTest(app.main.android18, app.main.vegeta) == true) && app.main.android18.superSpeed == false && this.focus17 == false)){
					this.fallingKick = false;
					this.startFallKick = false;
					//this.fallingKick = false;
					app.main.aiChoice2 = Math.random();
					app.main.chance2 = Math.random();
					app.main.detected2 = false;
					this.fallingKickCooldown = 0;
					this.counter = 0;
					if(this.focus17 == false){
						if(app.main.android18.fieldOn == false && app.main.android18.blocking == false){
							app.main.sound.playSpecialReaction(18);
							app.main.environment.shake = true;
							app.main.android18.hit = true;
							app.main.android18.hardHit = true;
							app.main.android18.stun = true;
						}
					} else {
						if(app.main.android17.fieldOn == false && app.main.android17.blocking == false){
							app.main.sound.playSpecialReaction3(18);
							app.main.environment.shake = true;
							app.main.android17.hit = true;
							app.main.android17.hardHit = true;
							app.main.android17.stun = true;
						}
					}
					this.jumpVelocity.y = -50;
					if(this.right == true){
						this.velocity.x -= 25;
						if(this.focus17 == false){
							app.main.android18.velocity.x += 15;
						} else {
							app.main.android17.velocity.x += 15;
						}
					} else {
						this.velocity.x += 25;
						if(this.focus17 == false){
							app.main.android18.velocity.x -= 15;
						} else {
							app.main.android17.velocity.x -= 15;
						}
					}
					this.decel = this.velocity.clone();
					if(this.focus17 == false){
						app.main.android18.decel = app.main.android18.velocity.clone();
					} else {
						app.main.android17.decel = app.main.android17.velocity.clone();
					}
					app.main.sound.playSpecialReaction2(4);
					if(this.focus17 == false){
					if(app.main.android18.stamina > 64 && app.main.android18.exhausted == true){
						app.main.android18.stamina = app.main.android18.stamina - 10;
					}
					if(app.main.android18.endurance > 14){
						app.main.android18.endurance = app.main.android18.endurance - (7 + getRandom(0, 5));
					} else if(app.main.android18.endurance < 15){
						app.main.android18.health = app.main.android18.health - (7 + getRandom(0, 5));
					}
					}

				}
				if((((hitTest(app.main.android18, app.main.vegeta) == true) && this.focus17 == false)) && this.fallHit == false){
					if(app.main.android18.superSpeed == false && app.main.android18.blocking == false && this.position.y < app.main.android18.position.y - 20){
						this.fallHit = true;
						var rand = getRandom(0,1);
						if(rand > .5){
							this.startFallKick = false;
							this.fallingKick = false;
						}
						app.main.sound.playSpecialReaction(16);
							app.main.android18.hit = true;
							app.main.android18.hardHit = true;
							app.main.android18.stun = true;
							if(app.main.android18.air == true) {
								app.main.android18.flying = false;
								app.main.android18.jumpVelocity.y += 60;
								app.main.android18.punched = true;
							} else {
								app.main.android18.punched = false;
							}
							if(app.main.android18.right == true){
								app.main.android18.velocity.x = this.velocity.x;
							} else {
								app.main.android18.velocity.x = this.velocity.x;
							}
							app.main.android18.decel = app.main.android18.velocity.clone();
							if(app.main.android18.stamina > 64 && app.main.android18.exhausted == true){
								app.main.android18.stamina = app.main.android18.stamina - 10;
							}
							if(app.main.android18.endurance > 14){
								app.main.android18.endurance = app.main.android18.endurance - (7 + getRandom(0, 5));
							} else if(app.main.android18.endurance < 15){
								app.main.android18.health = app.main.android18.health - (7 + getRandom(0, 5));
							}
						}
				} else if((((hitTest(app.main.android17, app.main.vegeta) == true) && this.focus17 == true)) && this.fallHit == false){
					if(app.main.android17.superSpeed == false && app.main.android17.blocking == false && this.position.y < app.main.android17.position.y - 20){
						this.fallHit = true;
						app.main.sound.playSpecialReaction3(16);
							app.main.android17.hit = true;
							app.main.android17.hardHit = true;
							app.main.android17.stun = true;
							if(app.main.android17.air == true) {
								app.main.android17.flying = false;
								app.main.android17.jumpVelocity.y += 60;
								app.main.android17.punched = true;
							} else {
								app.main.android17.punched = false;
							}
							if(app.main.android17.right == true){
								app.main.android17.velocity.x = this.velocity.x;
							} else {
								app.main.android17.velocity.x = this.velocity.x;
							}
							app.main.android17.decel = app.main.android17.velocity.clone();
							if(app.main.android17.stamina > 64 && app.main.android17.exhausted == true){
								app.main.android17.stamina = app.main.android17.stamina - 10;
							}
							if(app.main.android17.endurance > 14){
								app.main.android17.endurance = app.main.android17.endurance - (7 + getRandom(0, 5));
							} else if(app.main.android17.endurance < 15){
								app.main.android17.health = app.main.android17.health - (7 + getRandom(0, 5));
							}
						}
				}
				
				if(this.ground == true || this.up == true){
					this.fallingKick = false;
					this.startFallKick = false;
					this.velocity.x = 0;
					if(app.main.scene == false){
					//this.gravity = new Victor(0,3);
					this.gravity = new Victor(0,1.7);
				} else {
					this.gravity = new Victor(0,1.7);
				}
					app.main.aiChoice2 = Math.random();
					//this.stun = false;
				}
				
			} else if(this.down == true && this.air == true) {
				ctx.drawImage(this.flyDownFastPiccolo,10,-40);
			} else if(this.down == false && this.air == true && this.up == false) {
				ctx.drawImage(this.flyDownSlowPiccolo,10,-40);
			} else if(this.exhausted == true){
				ctx.drawImage(this.injuredPiccolo,0,0);
			} else {
				if(this.lookUp == true){
					ctx.drawImage(this.stanceUpPiccolo,0,0);
				} else if(this.lookDown == true){
					ctx.drawImage(this.stanceDownPiccolo,0,0);
				} else {
					ctx.drawImage(this.stancePiccolo,0,0);
				}
			}
		//MOVING DRAWS
		} else if(this.velocity.x != 0 && this.attacking != true && this.blocking != true && this.hit == false && this.hardHit != true && this.taunting != true && this.charging != true && this.end == false){ //&& (this.fallingKick == false || this.air == false)
			if(this.slow == true && this.reverse == false){
				ctx.drawImage(this.slowFlyPiccolo,0,0);
			} else if(this.fast == true && this.reverse == false){
				ctx.drawImage(this.fastFlyPiccolo,0,10);
			} else if(this.reverse == true && this.farLeft == false && this.farRight  == false){
				ctx.drawImage(this.moveReversePiccolo,0,0);
			} else if(this.air == true && this.up == false){
				ctx.drawImage(this.flyDownSlowPiccolo,0,0);
			} else if(this.exhausted == true){
				ctx.drawImage(this.injuredPiccolo,0,0);
			} else {
				if(this.lookUp == true){
					ctx.drawImage(this.stanceUpPiccolo,0,0);
				} else if(this.lookDown == true){
					ctx.drawImage(this.stanceDownPiccolo,0,0);
				} else {
					ctx.drawImage(this.stancePiccolo,0,0);
				}
			}
		//BASIC ATTACK
		} else if(this.attacking == true && this.air == false && this.hit == false && this.blasting == false && this.intensify == false){
			this.randomEffect = Math.random();
			//this.chance2 = Math.random();
			//app.main.chance2 = .2;
			if(this.counter < 3 && app.main.chance2 < .3){
				ctx.drawImage(this.punchPrepPiccolo,20,-10);
			} else if(this.counter < 3 && app.main.chance2 >= .3){
				if(this.arms == false){
					ctx.drawImage(this.kickPrepPiccolo,-10,-5);
				} else if(this.arms == true){
					ctx.drawImage(this.kneePrepPiccolo,0,-5);
				}
			} else if(this.counter < 5 && app.main.chance2 < .3){
				if(this.counter < 4){
					this.stamina += 4;
					this.basic = true;
					//console.log("attack");//action
				} else {
					this.basic = false;
				}
				ctx.drawImage(this.punchPiccolo,0,-8);
			} else if(this.counter < 5 && app.main.chance2 >= .3){
				if(this.counter < 4){
					this.stamina += 4;
					this.basic = true;
				} else {
					this.basic = false;
				}
				if(this.arms == false){
					ctx.drawImage(this.kickPiccolo,-35,-8);
				} else if(this.arms == true){
					ctx.drawImage(this.kneePiccolo,-25,-8);
				}
			} else if(app.main.chance2 < .3) {
				this.fight = false;
				this.attacking = false;
				this.basic = false;
				ctx.drawImage(this.stancePiccolo,0,0);
				app.main.aiChoice2 = Math.random();
				app.main.chance2 = Math.random();
				app.main.detected2 = false;
				this.counter = 0;
			} else if(app.main.chance2 >= .3) {
				this.fight = false;
				this.attacking = false;
				this.basic = false;
				if(this.arms == false){
					ctx.drawImage(this.stancePiccolo,0,0);
					this.arms = true;
				} else if(this.arms == true){
					ctx.drawImage(this.stancePiccolo,0,0);
					this.arms = false;
				}
				app.main.aiChoice2 = Math.random();
				app.main.chance2 = Math.random();
				app.main.detected2 = false;
				this.counter = 0;
			} 
		//AIR BASIC ATTACK
		} else if(this.attacking == true && this.air == true && this.hit == false && this.down == false && this.intensify == false && this.blasting == false){
			this.randomEffect = Math.random();
			//this.chance2 = Math.random();
			//app.main.chance2 = .2;
			if(this.counter < 3 && app.main.chance2 < .3){
				ctx.drawImage(this.punchPrepPiccolo,20,-10);
			} else if(this.counter < 3 && app.main.chance2 >= .3){
				if(this.arms == false){
					ctx.drawImage(this.kickPrepPiccolo,-10,-5);
				} else if(this.arms == true){
					ctx.drawImage(this.kneePrepPiccolo,0,-5);
				}
			} else if(this.counter < 5 && app.main.chance2 < .3){
				if(this.counter < 4){
					this.stamina += 4;
					this.basic = true;
					//console.log("attack");//action
				} else {
					this.basic = false;
				}
				ctx.drawImage(this.punchPiccolo,0,-8);
			} else if(this.counter < 5 && app.main.chance2 >= .3){
				if(this.counter < 4){
					this.stamina += 4;
					this.basic = true;
				} else {
					this.basic = false;
				}
				if(this.arms == false){
					ctx.drawImage(this.kickPiccolo,-35,-8);
				} else if(this.arms == true){
					ctx.drawImage(this.kneePiccolo,-25,-8);
				}
			} else if(app.main.chance2 < .3) {
				this.fight = false;
				this.attacking = false;
				this.basic = false;
				ctx.drawImage(this.flyUpPiccolo,0,-20);
				app.main.aiChoice2 = Math.random();
				app.main.chance2 = Math.random();
				app.main.detected2 = false;
				this.counter = 0;
			} else if(app.main.chance2 >= .3) {
				this.fight = false;
				this.attacking = false;
				this.basic = false;
				if(this.arms == false){
					ctx.drawImage(this.flyUpPiccolo,0,-20);
					this.arms = true;
				} else if(this.arms == true){
					ctx.drawImage(this.flyUpPiccolo,0,-20);
					this.arms = false;
				}
				app.main.aiChoice2 = Math.random();
				app.main.chance2 = Math.random();
				app.main.detected2 = false;
				this.counter = 0;
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
			this.randomEffect = Math.random();
			this.hard = true;
			//app.main.chance2 = .7;
			if(app.main.chance2 > .6){
				if(this.counter < 3){
					ctx.drawImage(this.hardPunchPrepPiccolo,-10,-5);
				} else if(this.counter < 4){
					this.stamina += 10;
					this.punching = true;
					ctx.drawImage(this.hardPunchPiccolo,-35,15);
				} else if(this.counter < 10){
					this.punching = false;
					ctx.drawImage(this.hardPunchPiccolo,-35,15);
				} else {
					ctx.drawImage(this.stancePiccolo,0,0);
					this.hard = false;
					this.fight = false;
					this.attacking = false;
					this.intensify = false;
					app.main.aiChoice2 = Math.random();
					app.main.chance2 = Math.random();
					this.counter = 0;
					app.main.detectedHard2 = false;
				} 
			} else if(app.main.chance2 < .61 && app.main.chance2 > .25){
				if(this.counter < 3){
					ctx.drawImage(this.launchPrepPiccolo,36,-15);
				} else if(this.counter < 4){
					this.stamina += 10;
					/* if(this.focus17 == false){
						if(app.main.android18.blocking == false && app.main.android18.superSpeed == false){
							//app.main.android18.stun = true;
							app.main.android18.jumpVelocity = new Victor(0,-30);
							app.main.android18.air = true;
						}
					} else {
						if(app.main.android17.blocking == false && app.main.android17.superSpeed == false){
							//app.main.android18.stun = true;
							app.main.android17.jumpVelocity = new Victor(0,-30);
							app.main.android17.air = true;
						}
					} */
					this.kicking = true;
					ctx.drawImage(this.launchSwingPiccolo,-60,-25);
				} else if(this.counter < 5){
					if(this.focus17 == false){
						if(hardAttackHitTest(app.main.vegeta, app.main.android18) == true && app.main.android18.blocking == false && app.main.android18.superSpeed == false && app.main.android18.hardHit == true){
							//app.main.android18.stun = true;
							app.main.android18.jumpVelocity = new Victor(0,-30);
							app.main.android18.air = true;
						}
					} else {
						if(hardAttackHitTest(app.main.vegeta, app.main.android17) == true && app.main.android17.blocking == false && app.main.android17.superSpeed == false && app.main.android17.hardHit == true){
							//app.main.android18.stun = true;
							app.main.android17.jumpVelocity = new Victor(0,-30);
							app.main.android17.air = true;
						}
					}
					ctx.drawImage(this.launchPiccolo,-60,-15);
				} else if(this.counter < 10){
					this.kicking = false;
					ctx.drawImage(this.launchPiccolo,-60,-15);
				} else {
					ctx.drawImage(this.stancePiccolo,0,0);
					this.hard = false;
					this.fight = false;
					this.attacking = false;
					this.intensify = false;
					app.main.aiChoice2 = Math.random();
					app.main.chance2 = Math.random();
					this.counter = 0;
					app.main.detectedHard2 = false;
				}
			} else {
				if(this.counter < 3){
					ctx.drawImage(this.hardKickPrepPiccolo,28,-25);
				} else if(this.counter < 4){
					this.stamina += 10;
					this.kicking = true;
					ctx.drawImage(this.hardKickPiccolo,-18,-30);
				} else if(this.counter < 10){
					this.kicking = false;
					ctx.drawImage(this.hardKickPiccolo,-18,-30);
				} else {
					ctx.drawImage(this.stancePiccolo,0,0);
					this.hard = false;
					this.fight = false;
					this.attacking = false;
					this.intensify = false;
					app.main.aiChoice2 = Math.random();
					app.main.chance2 = Math.random();
					this.counter = 0;
					app.main.detectedHard2 = false;
				} 
			}
		//AIR HARD PUNCH
		} else if(this.attacking == true && this.intensify == true && this.air == true && this.hit == false && this.down == false){
			this.randomEffect = Math.random();
			this.hard = true;
			//app.main.chance2 = .7;
			if(app.main.chance2 > .5){
				if(this.counter < 5){
					ctx.drawImage(this.hardPunchAirPrepPiccolo,-12,-20);
				} else if(this.counter < 6){
					this.stamina += 10;
					this.punching = true;
					ctx.drawImage(this.hardPunchAirSwingPiccolo,-12,-20);
				} else if(this.counter < 10){
					this.punching = false;
					ctx.drawImage(this.hardPunchAirPiccolo,-12,20);
				} else {
					ctx.drawImage(this.flyUpPiccolo,0,-20);
					this.hard = false;
					this.fight = false;
					this.attacking = false;
					this.intensify = false;
					app.main.aiChoice2 = Math.random();
					app.main.chance2 = Math.random();
					this.counter = 0;
					app.main.detectedHard2 = false;
				} 
			} else {
				if(this.counter < 3){
					ctx.drawImage(this.hardKickPrepPiccolo,28,-25);
				} else if(this.counter < 4){
					this.stamina += 10;
					this.kicking = true;
					ctx.drawImage(this.hardKickPiccolo,-18,-30);
				} else if(this.counter < 10){
					this.kicking = false;
					ctx.drawImage(this.hardKickPiccolo,-18,-30);
				} else {
					ctx.drawImage(this.flyUpPiccolo,0,-20);
					this.hard = false;
					this.fight = false;
					this.attacking = false;
					this.intensify = false;
					app.main.aiChoice2 = Math.random();
					app.main.chance2 = Math.random();
					this.counter = 0;
					app.main.detectedHard2 = false;
				} 
			}	
		//BLAST ATTACK
		} else if(this.attacking == true && this.hit == false && this.intensify == false && this.powerMove == false && this.charging == false){
			
			
			if(this.blastCount > 20){
				this.fight = false;
				this.attacking = false;
				this.blasting = false;
				app.main.aiChoice2 = Math.random();
				app.main.chance2 = Math.random();
				this.counter = 0;
				if(this.air == false){
					ctx.drawImage(this.blastPiccolo,-15,-23);
				} else {
					ctx.drawImage(this.blastAirPiccolo,-8,-15);
				}
			}
			
			if(this.counter < 3){
				if(this.air == false){
					ctx.drawImage(this.blastPrepPiccolo,1,-15);
				} else {
					ctx.drawImage(this.blastPrepAirPiccolo,-8,-15);
				}
			} else if(this.counter < 6){
				if(this.specMove == true){
					if(this.counter < 4){
						app.main.sound.playEnergyAttack2(5);
						this.energy -= 2;
						this.blastCount += 2;
						if(this.left == true){
							app.main.blasts.push(new app.Energy((this.position.x) / app.main.camX,(this.position.y + 37) / app.main.camX,true, 2, 5));
							app.main.blasts.push(new app.Energy((this.position.x + 48) / app.main.camX,(this.position.y + 45) / app.main.camX,false, 2, 5));
						} else {
							app.main.blasts.push(new app.Energy((this.position.x + 60) / app.main.camX,(this.position.y + 37) / app.main.camX,false, 2, 5));
							app.main.blasts.push(new app.Energy((this.position.x - 13) / app.main.camX,(this.position.y + 45) / app.main.camX,true, 2, 5));
						}
					}
					ctx.drawImage(this.blast2Piccolo,-15,-23);
				} else if(this.air == false){
					if(this.counter < 4){
						app.main.sound.playEnergyAttack2(5);
						this.energy -= 1;
						this.blastCount += 1;
						if(this.left == true){
							app.main.blasts.push(new app.Energy((this.position.x) / app.main.camX,(this.position.y + 37) / app.main.camX,this.left, 2, 5));
						} else {
							app.main.blasts.push(new app.Energy((this.position.x + 60) / app.main.camX,(this.position.y + 37) / app.main.camX,this.left, 2, 5));
						}
					}
					ctx.drawImage(this.blastPiccolo,-15,-23);
				} else if(this.air == true){
					if(this.counter < 4){
						app.main.sound.playEnergyAttack2(5);
						this.energy -= 1;
						this.blastCount += 1;
						if(this.left == true){
							app.main.blasts.push(new app.Energy((this.position.x) / app.main.camX,(this.position.y + 60) / app.main.camX,this.left, 2, 5));
						} else {
							app.main.blasts.push(new app.Energy((this.position.x + 60) / app.main.camX,(this.position.y + 60) / app.main.camX,this.left, 2, 5));
						}
					}
					ctx.drawImage(this.blastAirPiccolo,-8,-15);
				}
			} else {
				if(this.air == false){
					ctx.drawImage(this.blastPiccolo,-15,-23);
				} else {
					ctx.drawImage(this.blastAirPiccolo,-8,-15);
				}
				this.fight = false;
				this.attacking = false;
				this.blasting = false;
				app.main.aiChoice2 = Math.random();
				app.main.chance2 = Math.random();
				this.counter = 0;
			}
		//POWERFUL BLAST ATTACK
		}  else if(this.powerMove == true && this.blasting == true && this.attacking == true && this.hit == false && this.fallingKick == false){
			//console.log("POWERMOVEEEEE");
			//app.main.chance = .4;
			
			if(app.main.chance2 > .5){
			if(this.counter < 3){
				ctx.drawImage(this.energy1Piccolo,5,-32);
				if(this.arms == false){
					this.arms = true;
				} else if(this.arms == true){
					this.arms = false;
				}
			} else if(this.counter < 5){
				ctx.drawImage(this.energy1Piccolo,5,-32);
			} else if(this.counter < 6){
				ctx.drawImage(this.energy2Piccolo,5,-15);
			} else if(this.counter < 7){
				app.main.sound.playEffect2(Math.round(getRandom(8,10)));
				ctx.drawImage(this.energy3Piccolo,5,17);
			} else if(this.counter < 8){
				ctx.drawImage(this.energy4Piccolo,5,32);
			} else if(this.counter < 15){
				if(this.arms == false){
					if(this.counter < 9){
						//app.main.sound.playEnergyAttack(26);
						this.energy -= 5;
						if(this.left == true){
							app.main.sound.playTaunt4(7);
							this.blastTrigger = true;
						} else {
							app.main.sound.playTaunt4(8);
							this.blastTrigger = true;
						}
					}
					ctx.drawImage(this.energy4Piccolo,5,32);
				} else if(this.arms == true){
					if(this.counter < 9){
						//app.main.sound.playEnergyAttack(26);
						this.energy -= 5;
						if(this.left == true){
							app.main.sound.playTaunt4(9);
							this.blastTrigger = true;
						} else {
							app.main.sound.playTaunt4(7);
							this.blastTrigger = true;
						}
					}
					ctx.drawImage(this.energy4Piccolo,5,32);
				}
			} else {
				ctx.drawImage(this.energy4Piccolo,5,32);
				app.main.chance2 = Math.random();
				this.intensify = false;
				this.powerMove = false;
				this.fight = false;
				this.attacking = false;
				this.blasting = false;
			}
			} else { //SPECIAL BEAM CANNON
				if(this.counter < 3){
				ctx.drawImage(this.beamPrep,6,16);
				if(this.arms == false){
					this.arms = true;
				} else if(this.arms == true){
					this.arms = false;
				}
			} else if(this.counter < 5){
				app.main.sound.playEnergyAttack2(37);
				ctx.drawImage(this.beamPrep,6,16);
			} else if(this.counter < 6){
				ctx.drawImage(this.beamPrep,6,16);
			} else if(this.counter < 7){
				ctx.drawImage(this.beamPrep,6,16);
				//ctx.drawImage(this.blastCharge1,-39,20,10,10);
			} else if(this.counter < 8){
				ctx.drawImage(this.beamPrep,6,16);
				//ctx.drawImage(this.blastCharge1,-44,16.5,15,17);
			} else if(this.counter < 12){
				ctx.drawImage(this.beamPrep,6,16);
				//ctx.drawImage(this.blastCharge1,-39,20,10,10);
			} else if(this.counter < 13){
				app.main.sound.playTaunt4(12);
				ctx.drawImage(this.beamPrep,6,16);
				//ctx.drawImage(this.blastCharge1,-44,16.5,15,17);
			} else if(this.counter < 16){
				ctx.drawImage(this.beamPrep,6,16);
				//ctx.drawImage(this.blastCharge1,-39,20,10,10);
			} else if(this.counter < 25){
				if(this.arms == false){
					if(this.counter < 17){
						this.blastRelease = true;
						app.main.sound.playEnergyAttack2(38);
						this.energy -= 5;
						if(this.left == true){
							app.main.blasts.push(new app.Energy(this.position.x + 5,this.position.y + 17,this.left, 2, 6));
						} else {
							app.main.blasts.push(new app.Energy(this.position.x + 8,this.position.y + 17,this.left, 2, 6));
						}
					} else {
						this.blastRelease = false;
					}
					ctx.drawImage(this.beam,-4,3);
				} else if(this.arms == true){
					if(this.counter < 17){
						this.blastRelease = true;
						app.main.sound.playEnergyAttack2(38);
						this.energy -= 5;
						if(this.left == true){
							app.main.blasts.push(new app.Energy(this.position.x + 5,this.position.y + 17,this.left, 2, 6));
						} else {
							app.main.blasts.push(new app.Energy(this.position.x + 8,this.position.y + 17,this.left, 2, 6));
						}
					} else {
						this.blastRelease = false;
					}
					ctx.drawImage(this.beam,-4,3);
				}
			} else {
				ctx.drawImage(this.beam,-4,3);
				app.main.chance2 = Math.random();
				this.intensify = false;
				this.powerMove = false;
				this.fight = false;
				this.attacking = false;
				this.blasting = false;
				this.blastRelease = false;
			}
			}
		//BLOCK
		} else if(this.blocking == true && this.hit == false && (this.stun == false || this.superSpeed == true)){
			ctx.drawImage(this.blockPiccolo,0,10);
		//TAUNT
		} else if(this.taunting == true && this.hit == false && this.hardHit != true){
			if((this.counter < 25 && app.main.android18.teleDelay < 2) || (this.counter < 12 && app.main.android18.teleDelay > 1)){
				//this.stun = true;
				ctx.drawImage(this.tauntPiccolo,20,-25);
				if(this.counter > 5 && this.counter < 7){
					var check = Math.round(getRandom(0,1));
					if(app.main.android18.teleDelay == 0){
						app.main.sound.playTaunt4(Math.round(getRandom(0,6)));
					} else {
						if(check < .7){
							app.main.sound.playTaunt4(Math.round(getRandom(23,24)));
						} else {
							app.main.sound.playTaunt4(Math.round(getRandom(0,6)));
						}
					}
				}
				if(this.hit == true || this.hardHit == true || this.taunting == false) {
					this.aiTaunting = false;
					this.intensify = false;
					this.taunting = false;
					//this.stun = false;
				}
			} else {
				ctx.drawImage(this.tauntPiccolo,20,-25);
				//this.counter = 0;
				this.stamina = 28;
				this.exhausted = false;
				//this.stun = false;
				this.intensify = false;
				this.taunting = false;
			}
		//Energy Charge
		} else if(this.charging == true && this.hit == false && this.hardHit != true){
			if(this.counter < 100){
				if(this.counter == 5){
					app.main.sound.playTaunt4(Math.round(getRandom(10,11)));
				}
				//this.stun = true;
				if(this.counter > 8){
					this.energy += 1.5;
				}
				ctx.drawImage(this.chargePiccolo,5,22);
				if(this.counter > 6){
				if(this.counter < 8){
					app.main.sound.playEffect2(28);
				}
				this.chargeCounter++;
				ctx.save();
				ctx.globalAlpha = (.006 * this.energy);
				if(this.chargeCounter < 2){
					ctx.drawImage(this.auraWhite1,-55,-100);
				} else if (this.chargeCounter < 3){
					ctx.drawImage(this.auraWhite2,-55,-100);
				} else if (this.chargeCounter < 4){
					ctx.drawImage(this.auraWhite3,-55,-100);
				} else if (this.chargeCounter < 5){
					ctx.drawImage(this.auraWhite4,-55,-100);
					this.chargeCounter = 0;
				}
				ctx.restore();
				}
				if(this.energy > 99) {
					app.main.sound.stopEffect();
					//Play voice
					//this.stun = false;
					this.intensify = false;
					this.charging = false;
				}
				if(this.hit == true || this.hardHit == true || this.charging == false) {
					app.main.sound.stopEffect();
					this.aiCharging = false;
					this.intensify = false;
					this.charging = false;
					//this.stun = false;
				}
				
				/*
				if(this.counter > 19 && this.counter < 21){
					app.main.sound.playTaunt2(Math.round(this.tauntPick));
				}
				*/
			} else {
				ctx.drawImage(this.chargePiccolo,5,22);
				//this.stun = false;
				this.intensify = false;
				this.charging = false;
			}
		//Piccolo Scene
		} else if(this.sceneOpen == true){
				this.stun = true;
				if(this.scenePlay == true){
					this.chargeCounter++;
				}
				
				if(this.chargeCounter < 1){
					ctx.drawImage(this.pose1Piccolo,20,-26);
				} else if(this.chargeCounter < 3){
					ctx.drawImage(this.pose1Piccolo,20,-26);
				} else if (this.chargeCounter < 5){
					ctx.drawImage(this.pose2Piccolo,20,-26);
				} else if (this.chargeCounter < 7){
					ctx.drawImage(this.pose3Piccolo,20,-26);
				} else if (this.chargeCounter < 8){
					ctx.drawImage(this.pose4Piccolo,20,-26);
				} else {
					ctx.drawImage(this.stancePiccolo,0,0);
					app.main.environment.shake = true;
					app.main.sound.playSpecialReaction2(2);
					app.main.environment.cape = true;
					this.scenePlay = false;
					this.sceneOpen = false;
					this.chargeCounter = 0;
				}
		//BASIC HIT
		} else if(this.hit == true && this.hardHit == false && this.end == false){
			if(this.stunCounter < 3){
				if(app.main.CP == true){
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 11;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 11;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 11;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 11;
						}
					}
				}
				} else {
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 7;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 7;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 7;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 7;
						}
					}
				}
				}
				this.stun = true;
				ctx.drawImage(this.hit1Piccolo,15,-20);
			} else {
				this.defBreak++;
				ctx.drawImage(this.hit1Piccolo,15,-20);
				this.stun = false;
				this.hit = false; 
				this.flareHit = false;
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
		} else if(this.hardHit == true && this.hit == true && (this.air == false || this.blasted == true) && this.end == false){
			if(this.stunCounter < 22){
				this.voiceChance = Math.random();
				if(this.stunCounter < 4 && this.stunCounter > 2 && (this.voiceChance > .2 || this.blasted == true) && this.stuckInBlast == false && this.end == false){
					app.main.sound.playTaunt4(Math.round(getRandom(20,22)));
				}
				if(app.main.CP == true){
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					}
				}
				} else {
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					}
				}
				}
				this.stun = true;
				if(this.flareHit == true){
					ctx.drawImage(this.hit1Piccolo,15,-20);
				} else {
					ctx.drawImage(this.hitHardPiccolo,5,20);
				}
			} else {
				if(this.flareHit == true){
					ctx.drawImage(this.hit1Piccolo,15,-20);
				} else {
					ctx.drawImage(this.hitHardPiccolo,5,20);
				}
				this.stun = false;
				this.hardHit = false;
				this.hit = false; 
				this.blasted = false;
				this.flareHit = false;
			}
		//HARD HIT AIR
		} else if(this.hardHit == true && this.hit == true && this.air == true && this.end == false){
			if(this.punched == true){
				if(this.stunCounter < 22){
					this.voiceChance = Math.random();
					if(this.stunCounter < 4 && this.stunCounter > 2 && (this.voiceChance > .2 || this.blasted == true) && this.stuckInBlast == false && this.end == false){
						app.main.sound.playTaunt4(Math.round(getRandom(20,22)));
					}
					if(app.main.CP == true){
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					}
				}
				} else {
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					}
				}
				}
					this.stun = true;
					ctx.drawImage(this.fallDownPiccolo,5,20);		
				} else {
					ctx.drawImage(this.fallDownPiccolo,5,20);
					this.stun = false;
					this.hardHit = false;
					this.hit = false; 
					this.flareHit = false;
				}
			} else {
				if(this.stunCounter < 22){
					this.voiceChance = Math.random();
					if(this.stunCounter < 4 && this.stunCounter > 2 && this.voiceChance > .5 && this.end == false){
						app.main.sound.playTaunt4(Math.round(getRandom(20,22)));
					}
					if(app.main.CP == true){
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					}
				}
				} else {
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					}
				}
				}
					this.stun = true;
					if(this.flareHit == true){
						ctx.drawImage(this.hit1Piccolo,15,-20);
					} else {
						ctx.drawImage(this.fallSidePiccolo,5,20);
					}
				} else {
					if(this.flareHit == true){
						ctx.drawImage(this.hit1Piccolo,15,-20);
					} else {
						ctx.drawImage(this.fallSidePiccolo,5,20);
					}
					this.stun = false;
					this.hardHit = false;
					this.hit = false; 
					this.flareHit = false;
				}
			}
		} else if(this.end == true){
				if(this.air == true || this.position.y < this.GROUND.y){
					this.stun = true;
					ctx.drawImage(this.fallDownPiccolo,5,20);		
				} else {
					this.unable = true;
					this.stun = true;
					ctx.drawImage(this.groundPiccolo,5,80);
					if(this.deadCount == false) {
						app.main.kills += 1;
						app.main.piccoloKill += 1;
						this.deadCount = true;
					}
					if(this.stunCounter > 10){
						this.vanish = true;
						app.main.environment.deathPiccoloDirLeft = this.left;
						app.main.environment.deathLocationPiccolo = new Victor(this.position.x, this.position.y);
						this.dead = true;
						app.main.targetHidden = true;
						app.main.targetDead = true;
					}
				}
		}
		ctx.restore();
		}//end if
		
		// ------------ DRAWS FOR GOHAN ---------------------------------------------
		// ------------ DRAWS FOR GOHAN ---------------------------------------------
		// ------------ DRAWS FOR GOHAN ---------------------------------------------
		
		if(this.vanish == false && this.gohan == true){
		//NON MOVING DRAWS
		if(this.cinematic == true){
			if(this.cine == 0){
				ctx.drawImage(this.mad1Gohan,-5,0);
			} else if(this.cine == 1){
				ctx.drawImage(this.injuredGohan,0,0);
			} else if(this.cine == 2){
				ctx.drawImage(this.chargeGohan,0,0);
			}
		} else if((this.velocity.x == 0 || this.startFallKick == true) && this.attacking != true && this.blocking != true && this.specialBlock != true && this.taunting != true && this.hit == false && this.hardHit != true && this.charging != true && this.end == false) {
			if((this.up == true && this.flying == true) || (this.jumpVelocity.y < 15 && this.air == true) && this.startFallKick == false){
				if(this.lookUp == true){
					ctx.drawImage(this.flyUpUpGohan,0,0);
				} else if(this.lookDown == true){
					ctx.drawImage(this.flyUpDownGohan,0,0);
				} else {
					ctx.drawImage(this.flyUpGohan,0,0);
				}
			} else if(this.air == true && this.startFallKick == true) {
				ctx.drawImage(this.fallKickGohan,0,0);
				this.fallingKick = true;
				this.attacking = false;
				this.fight = false;
				this.flying = false;
				this.aboveBuilding = false;
				this.fallTimer++;
				/* this.gravity = new Victor(0,5.5);
				this.velocity.multiplyScalar(1.3); */
				//this.stun = true;
				if(this.kickSound == false){
					app.main.sound.playBasicAttack2(Math.round(getRandom(61,63)));
					this.kickSound = true;
					this.fallTimer = 0;
				}
				if(this.fallTimer > 3 && this.fallTimer < 5){
					app.main.sound.playSpecialReaction2(74);
				}
				if((app.main.android17.ground == true && (hitTest(app.main.android17, app.main.vegeta) == true) && app.main.android17.superSpeed == false && this.focus17 == true) || (app.main.android18.ground == true && (hitTest(app.main.android18, app.main.vegeta) == true) && app.main.android18.superSpeed == false && this.focus17 == false)){
					this.fallingKick = false;
					this.startFallKick = false;
					this.fallingKick = false;
					app.main.aiChoice2 = Math.random();
					app.main.chance2 = Math.random();
					app.main.detected2 = false;
					this.fallingKickCooldown = 0;
					this.counter = 0;
					if(this.focus17 == false){
						if(app.main.android18.fieldOn == false && app.main.android18.blocking == false){
							app.main.sound.playSpecialReaction(18);
							app.main.environment.shake = true;
							app.main.android18.hit = true;
							app.main.android18.hardHit = true;
							app.main.android18.stun = true;
						}
					} else {
						if(app.main.android17.fieldOn == false && app.main.android17.blocking == false){
							app.main.sound.playSpecialReaction3(18);
							app.main.environment.shake = true;
							app.main.android17.hit = true;
							app.main.android17.hardHit = true;
							app.main.android17.stun = true;
						}
					}
					this.jumpVelocity.y = -40;
					if(this.right == true){
						this.velocity.x -= 25;
						if(this.focus17 == false){
							app.main.android18.velocity.x += 15;
						} else {
							app.main.android17.velocity.x += 15;
						}
					} else {
						this.velocity.x += 25;
						if(this.focus17 == false){
							app.main.android18.velocity.x -= 15;
						} else {
							app.main.android17.velocity.x -= 15;
						}
					}
					this.decel = this.velocity.clone();
					if(this.focus17 == false){
						app.main.android18.decel = app.main.android18.velocity.clone();
					} else {
						app.main.android17.decel = app.main.android17.velocity.clone();
					}
					app.main.sound.playSpecialReaction2(4);
					if(this.focus17 == false){
					if(app.main.android18.stamina > 64 && app.main.android18.exhausted == true){
						app.main.android18.stamina = app.main.android18.stamina - 10;
					}
					if(app.main.android18.endurance > 14){
						app.main.android18.endurance = app.main.android18.endurance - (7 + getRandom(0, 5));
					} else if(app.main.android18.endurance < 15){
						app.main.android18.health = app.main.android18.health - (7 + getRandom(0, 5));
					}
					}

				}
				if((((hitTest(app.main.android18, app.main.vegeta) == true) && this.focus17 == false)) && this.fallHit == false){
					if(app.main.android18.superSpeed == false && app.main.android18.blocking == false && this.position.y < app.main.android18.position.y - 20){
						this.fallHit = true;
						var rand = getRandom(0,1);
						if(rand > .5){
							this.startFallKick = false;
							this.fallingKick = false;
						}
						app.main.sound.playSpecialReaction(16);
							app.main.android18.hit = true;
							app.main.android18.hardHit = true;
							app.main.android18.stun = true;
							if(app.main.android18.air == true) {
								app.main.android18.flying = false;
								app.main.android18.jumpVelocity.y += 60;
								app.main.android18.punched = true;
							} else {
								app.main.android18.punched = false;
							}
							if(app.main.android18.right == true){
								app.main.android18.velocity.x = this.velocity.x;
							} else {
								app.main.android18.velocity.x = this.velocity.x;
							}
							app.main.android18.decel = app.main.android18.velocity.clone();
							if(app.main.android18.stamina > 64 && app.main.android18.exhausted == true){
								app.main.android18.stamina = app.main.android18.stamina - 10;
							}
							if(app.main.android18.endurance > 14){
								app.main.android18.endurance = app.main.android18.endurance - (7 + getRandom(0, 5));
							} else if(app.main.android18.endurance < 15){
								app.main.android18.health = app.main.android18.health - (7 + getRandom(0, 5));
							}
						}
				} else if((((hitTest(app.main.android17, app.main.vegeta) == true) && this.focus17 == true)) && this.fallHit == false){
					if(app.main.android17.superSpeed == false && app.main.android17.blocking == false && this.position.y < app.main.android17.position.y - 20){
						this.fallHit = true;
						app.main.sound.playSpecialReaction3(16);
							app.main.android17.hit = true;
							app.main.android17.hardHit = true;
							app.main.android17.stun = true;
							if(app.main.android17.air == true) {
								app.main.android17.flying = false;
								app.main.android17.jumpVelocity.y += 60;
								app.main.android17.punched = true;
							} else {
								app.main.android17.punched = false;
							}
							if(app.main.android17.right == true){
								app.main.android17.velocity.x = this.velocity.x;
							} else {
								app.main.android17.velocity.x = this.velocity.x;
							}
							app.main.android17.decel = app.main.android17.velocity.clone();
							if(app.main.android17.stamina > 64 && app.main.android17.exhausted == true){
								app.main.android17.stamina = app.main.android17.stamina - 10;
							}
							if(app.main.android17.endurance > 14){
								app.main.android17.endurance = app.main.android17.endurance - (7 + getRandom(0, 5));
							} else if(app.main.android17.endurance < 15){
								app.main.android17.health = app.main.android17.health - (7 + getRandom(0, 5));
							}
						}
				}
				
				if(this.ground == true || this.up == true){
					this.fallingKick = false;
					this.startFallKick = false;
					this.velocity.x = 0;
					if(app.main.scene == false){
						//this.gravity = new Victor(0,3);
						this.gravity = new Victor(0,1.7);
					} else {
						this.gravity = new Victor(0,1.7);
					}
					app.main.aiChoice2 = Math.random();
					//this.stun = false;
				}
				
			} else if(this.down == true && this.air == true) {
				ctx.drawImage(this.flyDownFastGohan,0,0);
			} else if(this.down == false && this.air == true && this.up == false) {
				ctx.drawImage(this.flyDownSlowGohan,0,0);
			} else if(this.exhausted == true){
				ctx.drawImage(this.injuredGohan,0,0);
			} else {
				if(this.lookUp == true){
					ctx.drawImage(this.stanceUpGohan,0,0);
				} else if(this.lookDown == true){
					ctx.drawImage(this.stanceDownGohan,0,0);
				} else {
					ctx.drawImage(this.stanceGohan,0,0);
				}
			}
		//MOVING DRAWS
		} else if(this.velocity.x != 0 && this.attacking != true && this.blocking != true && this.specialBlock != true && this.hit == false && this.hardHit != true && this.taunting != true && this.charging == false && this.end == false ){ //&& (this.fallingKick == false || this.air == false)
			if(this.slow == true && this.reverse == false){
				ctx.drawImage(this.slowFlyGohan,0,0);
			} else if(this.fast == true && this.reverse == false){
				ctx.drawImage(this.fastFlyGohan,0,0);
			} else if(this.reverse == true && this.farLeft == false && this.farRight  == false){
				ctx.drawImage(this.moveReverseGohan,0,0);
			} else if(this.air == true && this.up == false){
				ctx.drawImage(this.flyDownSlowGohan,0,0);
			} else if(this.exhausted == true){
				ctx.drawImage(this.injuredGohan,0,0);
			} else {
				if(this.lookUp == true){
					ctx.drawImage(this.stanceUpGohan,0,0);
				} else if(this.lookDown == true){
					ctx.drawImage(this.stanceDownGohan,0,0);
				} else {
					ctx.drawImage(this.stanceGohan,0,0);
				}
			}
		//BASIC ATTACK
		} else if(this.attacking == true && this.air == false && this.hit == false && this.blasting == false && this.intensify == false){
			this.randomEffect = Math.random();
			//this.chance2 = Math.random();
			//console.log(this.arms + "ARMS");
			if(this.counter < 3 && app.main.chance2 > .3){
				ctx.drawImage(this.punchPrepGohan,0,0);
			} else if(this.counter < 3 && app.main.chance2 <= .3){
				ctx.drawImage(this.kickPrepGohan,0,0);
			} else if(this.counter < 5 && app.main.chance2 > .3){
				if(this.counter < 4){
					this.stamina += 4;
					this.basic = true;
					//console.log("attack");//action
				} else {
					this.basic = false;
				}
				if(this.arms == false){
					ctx.drawImage(this.leftPunchGohan,0,0);
				} else if(this.arms == true){
					ctx.drawImage(this.rightPunchGohan,0,0);
				}
			} else if(this.counter < 5 && app.main.chance2 <= .3){
				if(this.counter < 4){
					this.stamina += 4;
					this.basic = true;
				} else {
					this.basic = false;
				}
				ctx.drawImage(this.kickGohan,0,0);
			} else if(app.main.chance2 > .3) {
				this.fight = false;
				this.attacking = false;
				this.basic = false;
				if(this.arms == false){
					ctx.drawImage(this.stanceGohan,0,0);
					this.arms = true;
				} else if(this.arms == true){
					ctx.drawImage(this.stanceGohan,0,0);
					this.arms = false;
				}
				app.main.aiChoice2 = Math.random();
				app.main.chance2 = Math.random();
				app.main.detected2 = false;
				this.counter = 0;
			} else if(app.main.chance2 <= .3) {
				this.fight = false;
				this.attacking = false;
				this.basic = false;
				ctx.drawImage(this.stanceGohan,0,0);
				//ctx.drawImage(this.kickPrep,0,10);
				app.main.aiChoice2 = Math.random();
				app.main.chance2 = Math.random();
				app.main.detected2 = false;
				this.counter = 0;
			} 
		//AIR BASIC ATTACK
		} else if(this.attacking == true && this.air == true && this.hit == false && this.down == false && this.intensify == false && this.blasting == false){
			this.randomEffect = Math.random();
			//this.chance2 = Math.random();
			if(this.counter < 3 && app.main.chance2 > .3){
				ctx.drawImage(this.punchPrepGohan,0,0);
			} else if(this.counter < 3 && app.main.chance2 <= .3){
				ctx.drawImage(this.kickPrepGohan,0,0);
			} else if(this.counter < 5 && app.main.chance2 > .3){
				if(this.counter < 4){
					this.stamina += 4;
					this.basic = true;
					//console.log("attack");//action
				} else {
					this.basic = false;
				}
				if(this.arms == false){
					ctx.drawImage(this.leftPunchGohan,0,0);
				} else if(this.arms == true){
					ctx.drawImage(this.rightPunchGohan,0,0);
				}
			} else if(this.counter < 5 && app.main.chance2 <= .3){
				if(this.counter < 4){
					this.stamina += 4;
					this.basic = true;
				} else {
					this.basic = false;
				}
				ctx.drawImage(this.kickGohan,0,0);
			} else if(app.main.chance2 > .3) {
				this.fight = false;
				this.attacking = false;
				this.basic = false;
				if(this.arms == false){
					ctx.drawImage(this.flyUpGohan,0,0);
					this.arms = true;
				} else if(this.arms == true){
					ctx.drawImage(this.flyUpGohan,0,0);
					this.arms = false;
				}
				app.main.aiChoice2 = Math.random();
				app.main.chance2 = Math.random();
				app.main.detected2 = false;
				this.counter = 0;
			} else if(app.main.chance2 <= .3) {
				this.fight = false;
				this.attacking = false;
				this.basic = false;
				ctx.drawImage(this.flyUpGohan,0,0);
				//ctx.drawImage(this.kickPrep,0,10);
				app.main.aiChoice2 = Math.random();
				app.main.chance2 = Math.random();
				app.main.detected2 = false;
				this.counter = 0;
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
			this.randomEffect = Math.random();
			this.hard = true;
			//app.main.chance2 = .3;
			if(app.main.chance2 > .6){
				if(this.counter < 3){
					ctx.drawImage(this.hardPunchPrepGohan,0,0);
				} else if(this.counter < 4){
					this.stamina += 10;
					this.punching = true;
					ctx.drawImage(this.hardPunchSwingGohan,0,0);
				} else if(this.counter < 5){
					ctx.drawImage(this.hardPunchSwing2Gohan,0,0);
				} else if(this.counter < 10){
					this.punching = false;
					ctx.drawImage(this.hardPunchPrepGohan,0,0);
				} else {
					ctx.drawImage(this.stanceGohan,0,0);
					this.hard = false;
					this.fight = false;
					this.attacking = false;
					this.intensify = false;
					app.main.aiChoice2 = Math.random();
					app.main.chance2 = Math.random();
					this.counter = 0;
					app.main.detectedHard2 = false;
				} 
			} else if(app.main.chance2 < .61 && app.main.chance2 > .25){
				if(this.counter < 3){
					ctx.drawImage(this.launchPrepGohan,0,0);
				} else if(this.counter < 4){
					this.stamina += 10;
					/* if(this.focus17 == false){
						if(app.main.android18.blocking == false && app.main.android18.superSpeed == false){
							//app.main.android18.stun = true;
							app.main.android18.jumpVelocity = new Victor(0,-30);
							app.main.android18.air = true;
						}
					} else {
						if(app.main.android17.blocking == false && app.main.android17.superSpeed == false){
							//app.main.android18.stun = true;
							app.main.android17.jumpVelocity = new Victor(0,-30);
							app.main.android17.air = true;
						}
					} */
					this.kicking = true;
					ctx.drawImage(this.launchSwingGohan,0,0);
				} else if(this.counter < 5){
					if(this.focus17 == false){
						if(hardAttackHitTest(app.main.vegeta, app.main.android18) == true && app.main.android18.blocking == false && app.main.android18.superSpeed == false && app.main.android18.hardHit == true){
							//app.main.android18.stun = true;
							app.main.android18.jumpVelocity = new Victor(0,-30);
							app.main.android18.air = true;
						}
					} else {
						if(hardAttackHitTest(app.main.vegeta, app.main.android17) == true && app.main.android17.blocking == false && app.main.android17.superSpeed == false && app.main.android17.hardHit == true){
							//app.main.android18.stun = true;
							app.main.android17.jumpVelocity = new Victor(0,-30);
							app.main.android17.air = true;
						}
					}
					ctx.drawImage(this.launchGohan,0,0);
				} else if(this.counter < 10){
					this.kicking = false;
					ctx.drawImage(this.launchGohan,0,0);
				} else {
					ctx.drawImage(this.stanceGohan,0,0);
					this.hard = false;
					this.fight = false;
					this.attacking = false;
					this.intensify = false;
					app.main.aiChoice2 = Math.random();
					app.main.chance2 = Math.random();
					this.counter = 0;
					app.main.detectedHard2 = false;
				}
			} else {
				if(this.counter < 3){
					ctx.drawImage(this.hardKickPrepGohan,0,0);
				} else if(this.counter < 4){
					this.stamina += 10;
					this.kicking = true;
					ctx.drawImage(this.hardKickSwingGohan,0,0);
				} else if(this.counter < 10){
					this.kicking = false;
					ctx.drawImage(this.hardKickGohan,0,0);
				} else {
					ctx.drawImage(this.stanceGohan,0,0);
					this.hard = false;
					this.fight = false;
					this.attacking = false;
					this.intensify = false;
					app.main.aiChoice2 = Math.random();
					app.main.chance2 = Math.random();
					this.counter = 0;
					app.main.detectedHard2 = false;
				} 
			}
		//AIR HARD PUNCH
		} else if(this.attacking == true && this.intensify == true && this.air == true && this.hit == false && this.down == false){
			this.randomEffect = Math.random();
			this.hard = true;
			if(app.main.chance2 > .5){
				if(this.counter < 3){
					ctx.drawImage(this.hardPunchAirPrepGohan,0,0);
				} else if(this.counter < 4){
					this.stamina += 10;
					this.punching = true;
					ctx.drawImage(this.hardPunchAirSwingGohan,0,0);
				} else if(this.counter < 10){
					this.punching = false;
					ctx.drawImage(this.hardPunchAirGohan,0,0);
				} else {
					ctx.drawImage(this.flyUpGohan,0,0);
					this.hard = false;
					this.fight = false;
					this.attacking = false;
					this.intensify = false;
					app.main.aiChoice2 = Math.random();
					app.main.chance2 = Math.random();
					this.counter = 0;
					app.main.detectedHard2 = false;
				} 
			} else {
				if(this.counter < 3){
					ctx.drawImage(this.hardKickPrepGohan,0,0);
				} else if(this.counter < 4){
					this.stamina += 10;
					this.kicking = true;
					ctx.drawImage(this.hardKickGohan,0,0);
				} else if(this.counter < 10){
					this.kicking = false;
					ctx.drawImage(this.hardKickGohan,0,0);
				} else {
					ctx.drawImage(this.flyUpGohan,0,0);
					this.hard = false;
					this.fight = false;
					this.attacking = false;
					this.intensify = false;
					app.main.aiChoice2 = Math.random();
					app.main.chance2 = Math.random();
					this.counter = 0;
					app.main.detectedHard2 = false;
				} 
			}	
		//BLAST ATTACK
		} else if(this.attacking == true && this.hit == false && this.intensify == false && this.powerMove == false && this.charging == false){ //KEY CHANGE
			if(this.farLeft == true){
				this.right = true;
				this.left = false;
			} else if(this.farRight == true){
				this.right = false;
				this.left = true;
			}
			
			if(this.counter < 3){
				ctx.drawImage(this.blastPrepGohan,0,0);
			} else if(this.counter < 6){
				
				if(this.arms == false){
					if(this.counter < 4){
						app.main.sound.playEnergyAttack2(5);
						this.energy -= 2;
						if(this.left == true){
							app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 37,this.left, 1, 0));
						} else {
							app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 37,this.left, 1, 0));
						}
					}
					//console.log("RIGHT");
					ctx.drawImage(this.blastGohan,0,0);
				} else if(this.arms == true){
					if(this.counter < 4){
						app.main.sound.playEnergyAttack2(5);
						this.energy -= 2;
						if(this.left == true){
							app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 37,this.left, 1, 0));
						} else {
							app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 37,this.left, 1, 0));
						}
					}
					ctx.drawImage(this.blastGohan,0,0);
					//console.log("RIGHT");
				}
			} else {
				if(this.arms == false){
					this.arms = true;
				} else if(this.arms == true){
					this.arms = false;
				}
				ctx.drawImage(this.blastPrepGohan,0,0);
				this.turnsDown = false;
				this.turnsUp = false;
				this.fight = false;
				this.attacking = false;
				this.blasting = false;
				app.main.aiChoice2 = Math.random();
				app.main.chance2 = Math.random();
				this.counter = 0;
			}
		//POWERFUL BLAST ATTACK
		} else if(this.powerMove == true && this.blasting == true && this.attacking == true && this.hit == false && this.fallingKick == false){
			//console.log("POWERMOVEEEEE");
			if(this.superForm == false){
				app.main.chance2 = .6;
			}
			
			
			if(app.main.chance2 > .5){
			if(this.counter < 2){
				this.flying = false;
				this.jumpVelocity.y = 0;
				this.velocity.y = 0;
				this.hover = true;
				if(this.superForm == false){
					app.main.sound.playTaunt6(Math.round(getRandom(9,10)));
				} else {
					app.main.sound.playEnergyAttack2(23);
				}
				ctx.drawImage(this.beamPrepGohan,0,0);
			} else if(this.counter < 3){
				ctx.drawImage(this.beamPrepGohan,0,0);
			} else if(this.counter < 5){
				ctx.drawImage(this.beamPrepGohan,0,0);
			} else if(this.counter < 6){
				if(this.superForm == false){
					app.main.sound.playEnergyAttack2(23);
				} else {
					this.counter = 16;
				}
				ctx.drawImage(this.beamPrepGohan,0,0);
			} else if(this.counter < 7){
				ctx.drawImage(this.beamPrepGohan,0,0);
				//ctx.drawImage(this.blastCharge1,-27,20,10,14);
			} else if(this.counter < 8){
				ctx.drawImage(this.beamPrepGohan,0,0);
				//ctx.drawImage(this.blastCharge1,-32,16.5,15,21);
			} else if(this.counter < 9){
				ctx.drawImage(this.beamPrepGohan,0,0);
				//ctx.drawImage(this.blastCharge1,-37,13,20,28);
			} else if(this.counter < 10){
				ctx.drawImage(this.beamPrepGohan,0,0);
				//ctx.drawImage(this.blastCharge1,-42,9.5,25,35);
			} else if(this.counter < 11){
				ctx.drawImage(this.beamPrepGohan,0,0);
				//ctx.drawImage(this.blastCharge1,-47,6,30,42);
			} else if(this.counter < 12){
				ctx.drawImage(this.beamPrepGohan,0,0);
				//ctx.drawImage(this.blastCharge1,-52,2.5,35,49);
			} else if(this.counter < 17){
				//app.main.sound.playTaunt6(Math.round(getRandom(11,12)));
				ctx.drawImage(this.beamPrepGohan,0,0);
				//ctx.drawImage(this.blastCharge1,-52,2.5,35,49);
			} else if(this.counter < 45){
				if(this.arms == false){
					if(this.counter < 18){
						app.main.sound.pauseVoice6();
						app.main.sound.pauseEffectVegeta();
						this.blastRelease = true;
						app.main.sound.playEnergyAttack2(29);
						this.energy -= 15;
						app.main.sound.playTaunt6(Math.round(getRandom(11,12)));
						if(this.left == true){
							//app.main.sound.playTaunt2(26);
							app.main.blasts.push(new app.Energy(this.position.x + 10,this.position.y + 55,this.left, 2, 7));
						} else {
							//app.main.sound.playTaunt2(27);
							app.main.blasts.push(new app.Energy(this.position.x + 30,this.position.y + 55,this.left, 2, 7));
						}
					} else {
						this.blastRelease = false;
					}
					if(this.turnsUp == true){
						ctx.drawImage(this.beamUpGohan,0,0);
						if(this.turnTalk == false && this.justTurned == false && this.counter > 24){
							app.main.sound.playTaunt6(Math.round(getRandom(37,39)));
							this.turnTalk = true;
						}
						this.justTurned = true;
					} else if(this.turnsDown == true){
						ctx.drawImage(this.beamDownGohan,0,0);
						if(this.turnTalk == false && this.justTurned == false && this.counter > 24){
							app.main.sound.playTaunt6(Math.round(getRandom(37,39)));
							this.turnTalk = true;
						}
						this.justTurned = true;
					} else {
						this.justTurned = false;
						this.turnTalk = false;
						ctx.drawImage(this.beamGohan,0,0);
					}
				} else if(this.arms == true){
					if(this.counter < 18){
						app.main.sound.pauseVoice6();
						app.main.sound.pauseEffectVegeta();
						this.blastRelease = true;
						app.main.sound.playEnergyAttack2(29);
						this.energy -= 15;
						app.main.sound.playTaunt6(Math.round(getRandom(11,12)));
						if(this.left == true){
							//app.main.sound.playTaunt2(26);
							app.main.blasts.push(new app.Energy(this.position.x + 10,this.position.y + 55,this.left, 2, 7));
						} else {
							//app.main.sound.playTaunt2(27);
							app.main.blasts.push(new app.Energy(this.position.x + 30,this.position.y + 55,this.left, 2, 7));
						}
					} else {
						this.blastRelease = false;
					}
					if(this.turnsUp == true){
						ctx.drawImage(this.beamUpGohan,0,0);
						if(this.turnTalk == false && this.justTurned == false && this.counter > 24){
							app.main.sound.playTaunt6(Math.round(getRandom(37,39)));
							this.turnTalk = true;
						}
						this.justTurned = true;
					} else if(this.turnsDown == true){
						ctx.drawImage(this.beamDownGohan,0,0);
						if(this.turnTalk == false && this.justTurned == false && this.counter > 24){
							app.main.sound.playTaunt6(Math.round(getRandom(37,39)));
							this.turnTalk = true;
						}
						this.justTurned = true;
					} else {
						this.justTurned = false;
						this.turnTalk = false;
						ctx.drawImage(this.beamGohan,0,0);
					}
				}
			} else {
				if(this.arms == false){
					this.arms = true;
				} else if(this.arms == true){
					this.arms = false;
				}
				app.main.chance2 = Math.random();
				ctx.drawImage(this.beamGohan,0,0);
				this.intensify = false;
				this.powerMove = false;
				this.fight = false;
				this.attacking = false;
				this.blasting = false;
				this.blastRelease = false;
				this.fast17 = false;
			}
			} else { //HEAD SMASH
			
			if((hardAttackHitTest(app.main.vegeta,app.main.android18) == true || hitTest(app.main.vegeta,app.main.android18) == true ) && app.main.android18.superSpeed == false && app.main.android18.fieldOn == false && this.striking == true){
				if(this.left == true){
					app.main.android18.velocity.x -= 40;
					this.velocity.x = -40;
				} else {
					app.main.android18.velocity.x += 40;
					this.velocity.x = 40;
				}
				this.decel = this.velocity.clone();
				app.main.android18.decel = app.main.android18.velocity.clone();
				app.main.sound.playSpecialReaction2(49);
				app.main.sound.playEnergyReaction2(16);
				app.main.android18.punched = false;
				app.main.android18.hit = true;
				app.main.android18.stun = true;
				app.main.android18.hardHit = true;
				app.main.android18.headbutted = true;
				if(app.main.android18.endurance > 14){
					app.main.android18.endurance = app.main.android18.endurance - (10 + getRandom(2, 8));
				} else if(app.main.android18.endurance < 15){
					app.main.android18.health = app.main.android18.health - (10 + getRandom(2, 8));
				}
				this.striking = false;
			} else if((hardAttackHitTest(app.main.vegeta,app.main.android17) == true || hardAttackHitTest(app.main.vegeta,app.main.android17) == true ) && app.main.android17.superSpeed == false && app.main.android18.fieldOn == false && this.striking == true){
				if(this.left == true){
					app.main.android17.velocity.x -= 40;
					this.velocity.x = -40;
				} else {
					app.main.android17.velocity.x += 40;
					this.velocity.x = 40;
				}
				this.decel = this.velocity.clone();
				app.main.android17.decel = app.main.android17.velocity.clone();
				app.main.sound.playSpecialReaction2(49);
				app.main.sound.playEnergyReaction2(16);
				app.main.android17.punched = false;
				app.main.android17.hit = true;
				app.main.android17.stun = true;
				app.main.android17.hardHit = true;
				if(app.main.android17.endurance > 14){
					app.main.android17.endurance = app.main.android17.endurance - (10 + getRandom(2, 8));
				} else if(app.main.android17.endurance < 15){
					app.main.android17.health = app.main.android17.health - (10 + getRandom(2, 8));
				}
				this.striking = false;
			}
			
			if(this.focus17 == false && app.main.android18.superSpeed == true && app.main.android18.fieldOn == true){
				this.intensify = false;
				this.powerMove = false;
				this.fight = false;
				this.attacking = false;
				this.blasting = false;
				this.striking = false;
			} else if(this.focus17 == true && app.main.android17.superSpeed == true && app.main.android17.fieldOn == true){
				this.intensify = false;
				this.powerMove = false;
				this.fight = false;
				this.attacking = false;
				this.blasting = false;
				this.striking = false;
			}
			
			if(this.counter < 2){
				this.headbuttGohan = true;
				/* this.lastKnown.x = app.main.android18.position.x;
				this.lastKnown.y = app.main.android18.position.y; */
				if(this.hit == false){
					this.flying = false;
					this.jumpVelocity.y = 0;
					this.velocity.y = 0;
					this.hover = true;
				}
				ctx.drawImage(this.headPrepGohan,0,0);
				if(app.main.android18.vanish == false){
					this.lastKnown.x = app.main.android18.position.x;
					this.lastKnown.y = app.main.android18.position.y;
				}
			} else if(this.counter < 3){
				app.main.sound.playTaunt6(Math.round(getRandom(23,24)));
				ctx.drawImage(this.headPrepGohan,0,0);
				if(app.main.android18.vanish == false){
					this.lastKnown.x = app.main.android18.position.x;
					this.lastKnown.y = app.main.android18.position.y;
				}
			} else if(this.counter < 6){
				ctx.drawImage(this.headPrepGohan,0,0);
				if(app.main.android18.vanish == false){
					this.lastKnown.x = app.main.android18.position.x;
					this.lastKnown.y = app.main.android18.position.y;
				}
			} else if(this.counter < 7){
				ctx.drawImage(this.headPrepGohan,0,0);
				if(app.main.android18.vanish == false){
					this.lastKnown.x = app.main.android18.position.x;
					this.lastKnown.y = app.main.android18.position.y;
				}
			} else if(this.counter < 8){
				this.teleFace = true;
				this.superSpeedExhaustion = false;
				this.speedExhaust = 0;
				this.superSpeed = true;
				ctx.drawImage(this.headGohan,0,0);
			} else if(this.counter < 9){
				this.striking = true;
				if((hardAttackHitTest(app.main.vegeta, app.main.android18) != true || hitTest(app.main.vegeta, app.main.android18) != true) && app.main.android18.headbutted == false){
					if(this.left == true){
						this.position.x = this.LEFTWALL.x + 75;
						this.velocity.x = -30;
					} else {
						this.position.x = this.RIGHTWALL.x - 75;
						this.velocity.x = 30;
					}
					this.decel = this.velocity.clone();
					this.superSpeedExhaustion = false;
					this.superSpeed = true;
				}
				ctx.drawImage(this.headGohan,0,0);
			} else if(this.counter < 14){
				/* if(hardAttackHitTest(app.main.vegeta, app.main.android18) != true || hitTest(app.main.vegeta, app.main.android18) != true){
					if(this.left == true){
						this.position.x = this.LEFTWALL.x + 50;
						this.velocity.x = -30;
					} else {
						this.position.x = this.RIGHTWALL.x - 50;
						this.velocity.x = 30;
					}
					this.decel = this.velocity.clone();
					this.superSpeed = true;
				} */
				ctx.drawImage(this.headGohan,0,0);
			} else if(this.counter < 15){
				ctx.drawImage(this.headGohan,0,0);
				
			} else if(this.counter < 30){
				
			} else {
				ctx.drawImage(this.headGohan,0,0);
				app.main.chance2 = Math.random();
				this.intensify = false;
				this.powerMove = false;
				this.fight = false;
				this.attacking = false;
				this.blasting = false;
				this.headbuttGohan = false;
				this.striking = false;
			}
			}
		//BLOCK
		} else if((this.blocking == true || this.specialBlock == true) && this.hit == false && (this.stun == false || this.superSpeed == true)){
			if(this.specialBlock == true){
				if(this.counter < 50){
					this.specialBlock = true;
					if(this.counter > 1 && this.counter < 3){
						app.main.sound.playEffect2(48);
					}
					this.stun = true;
					ctx.drawImage(this.blockGohan,0,0);
					ctx.save();
						ctx.scale(2,2);
						ctx.globalAlpha = .9;
						if(this.sparkCounter == 0){
							ctx.drawImage(this.sparks1,5,0);
						} else if(this.sparkCounter == 3){
							ctx.drawImage(this.sparks2,10,0);
						} else if(this.sparkCounter == 6){
							ctx.drawImage(this.sparks3,10,0);
						} else if(this.sparkCounter == 9){
							ctx.drawImage(this.sparks4,10,0);
						}
					ctx.restore();
					if(this.sparkCounter < 9){
						this.sparkCounter++;
					} else {
						this.sparkCounter = 0;
					}
				} else {
					this.stun = false;
					this.blocking = false;
					this.specialBlock = false;
					this.counter = 0;
				}
			} else {
				ctx.drawImage(this.blockGohan,0,0);
			}
		//TAUNT
		} else if(this.taunting == true && this.hit == false && this.hardHit != true){
			if((this.counter < 25 && app.main.android18.teleDelay < 2) || (this.counter < 12 && app.main.android18.teleDelay > 1)){
				//this.stun = true;

				ctx.drawImage(this.tauntGohan,0,0);
				if(this.counter > 1 && this.counter < 3 && this.superForm == true){
					app.main.sound.playEffect2(48);
				}
				if(this.counter > 5 && this.counter < 7){
					var check = Math.round(getRandom(0,1));
					if(app.main.android18.teleDelay == 0){
						if(this.superForm == false){
							app.main.sound.playTaunt6(Math.round(getRandom(0,6)));
						} else {
							app.main.sound.playTaunt6(Math.round(getRandom(16,22)));
						}
					} else {
						if(check < .7){
							if(this.superForm == false){
								app.main.sound.playTaunt6(Math.round(getRandom(43,44)));
							} else {
								app.main.sound.playTaunt6(Math.round(getRandom(44,45)));
							}
						} else {
							if(this.superForm == false){
								app.main.sound.playTaunt6(Math.round(getRandom(0,6)));
							} else {
								app.main.sound.playTaunt6(Math.round(getRandom(16,22)));
							}
						}
					}
					
					
					if(this.superForm == false){
						app.main.sound.playTaunt6(Math.round(getRandom(0,6)));
					} else {
						app.main.sound.playTaunt6(Math.round(getRandom(16,22)));
					}
				}
				if(this.hit == true || this.hardHit == true || this.taunting == false) {
					this.aiTaunting = false;
					this.intensify = false;
					this.taunting = false;
					//this.stun = false;
				}
				
				this.chargeCounter++;
				ctx.save();
				ctx.globalAlpha = (.006 * this.energy);
				if(this.chargeCounter < 2){
					if(this.superForm == false){
						//ctx.drawImage(this.auraWhite1,-35,-90);
					} else {
						//ctx.drawImage(this.auraYellow1,-35,-90);
						ctx.save();
						ctx.scale(2,2);
						ctx.globalAlpha = .9;
						if(this.sparkCounter == 0){
							ctx.drawImage(this.sparks1,5,0);
						} else if(this.sparkCounter == 3){
							ctx.drawImage(this.sparks2,10,0);
						} else if(this.sparkCounter == 6){
							ctx.drawImage(this.sparks3,10,0);
						} else if(this.sparkCounter == 9){
							ctx.drawImage(this.sparks4,10,0);
						}
						ctx.restore();
					}
					if(this.sparkCounter < 9){
						this.sparkCounter++;
					} else {
						this.sparkCounter = 0;
					}
				} else if (this.chargeCounter < 3){
					if(this.superForm == false){
						//ctx.drawImage(this.auraWhite2,-35,-90);
					} else {
						//ctx.drawImage(this.auraYellow2,-35,-90);
					}
				} else if (this.chargeCounter < 4){
					if(this.superForm == false){
						//ctx.drawImage(this.auraWhite3,-35,-90);
					} else {
						//ctx.drawImage(this.auraYellow3,-35,-90);
					}
				} else if (this.chargeCounter < 5){
					if(this.superForm == false){
						//ctx.drawImage(this.auraWhite4,-35,-90);
					} else {
						//ctx.drawImage(this.auraYellow4,-35,-90);
					}
					this.chargeCounter = 0;
				}
				ctx.restore();
			} else {
				ctx.drawImage(this.tauntGohan,0,0);
				//this.counter = 0;
				this.stamina = 28;
				this.exhausted = false;
				//this.stun = false;
				this.intensify = false;
				this.taunting = false;
			}
		//Energy Charge
		} else if(this.charging == true && this.hit == false && this.hardHit != true){
			if(this.counter < 100 || app.main.scene == true){
				if(this.counter == 5 && app.main.scene == false){
					app.main.sound.playTaunt6(Math.round(getRandom(7,8)));
				}
				//this.stun = true;
				
				if(this.counter < 2 && this.superForm == true && app.main.scene == false){
					this.almostSS = true;
					app.main.environment.powerUp = true;
					app.main.sound.playBackgroundLoud(0);
				}
				
				if(this.counter > 8){
					if(this.superForm == false){
						this.energy += 1.5;
					} else {
						this.energy += 2.7;
					}
				}
				if((this.superForm == false || app.main.scene == false) && this.almostSS == false){
					ctx.drawImage(this.chargeGohan,0,0);
				} else if(this.almostSS == true){
					ctx.drawImage(this.chargeGohan,0,0);
					ctx.save();
					ctx.globalAlpha = this.almostFade / 100;
					ctx.drawImage(this.SS2Gohan,0,0);
					ctx.restore();
					if(this.lockSS == true){
						//KEEP FORM
					} else if(this.almostCounter < 20){
						this.almostCounter++;
						this.almostFade -= 5;
					} else {
						this.almostCounter = 0;
						this.almostFade = 100;
						this.almostSS = false;
					}
				} else {
					ctx.drawImage(this.tauntGohan,5,0);
				}
				if(this.counter > 6){
				if(this.counter < 8){
					if(this.superForm == false){
						app.main.sound.playEffect2(28);
					} else {
						app.main.sound.playEffect2(42);
					}
				}
				this.chargeCounter++;
				ctx.save();
				ctx.globalAlpha = (.006 * this.energy);
				if(this.chargeCounter < 2){
					if(this.superForm == false){
						ctx.drawImage(this.auraWhite1,-35,-90);
					} else {
						ctx.drawImage(this.auraYellow1,-35,-90);
						ctx.save();
						ctx.scale(2,2);
						ctx.globalAlpha = .9;
						if(this.sparkCounter == 0){
							ctx.drawImage(this.sparks1,5,0);
						} else if(this.sparkCounter == 3){
							ctx.drawImage(this.sparks2,10,0);
						} else if(this.sparkCounter == 6){
							ctx.drawImage(this.sparks3,10,0);
						} else if(this.sparkCounter == 9){
							ctx.drawImage(this.sparks4,10,0);
						}
						ctx.restore();
					}
					if(this.sparkCounter < 9){
						this.sparkCounter++;
					} else {
						this.sparkCounter = 0;
					}
				} else if (this.chargeCounter < 3){
					if(this.superForm == false){
						ctx.drawImage(this.auraWhite2,-35,-90);
					} else {
						ctx.drawImage(this.auraYellow2,-35,-90);
					}
				} else if (this.chargeCounter < 4){
					if(this.superForm == false){
						ctx.drawImage(this.auraWhite3,-35,-90);
					} else {
						ctx.drawImage(this.auraYellow3,-35,-90);
					}
				} else if (this.chargeCounter < 5){
					if(this.superForm == false){
						ctx.drawImage(this.auraWhite4,-35,-90);
					} else {
						ctx.drawImage(this.auraYellow4,-35,-90);
					}
					this.chargeCounter = 0;
				}
				ctx.restore();
				}
				if(this.energy > 99 && app.main.scene == false) {
					app.main.sound.stopEffect();
					//Play voice
					//this.stun = false;
					this.intensify = false;
					this.charging = false;
					app.main.environment.powerUp = false;
				}
				if(this.hit == true || this.hardHit == true || this.charging == false) {
					app.main.sound.stopEffect();
					this.aiCharging = false;
					this.intensify = false;
					this.charging = false;
					app.main.environment.powerUp = false;
					//this.stun = false;
				}
				
				/*
				if(this.counter > 19 && this.counter < 21){
					app.main.sound.playTaunt2(Math.round(this.tauntPick));
				}
				*/
			} else {
				ctx.drawImage(this.chargeGohan,0,0);
				//this.stun = false;
				this.intensify = false;
				this.charging = false;
				app.main.environment.powerUp = false;
			}
		//BASIC HIT
		} else if(this.hit == true && this.hardHit == false && this.end == false){
			if(this.stunCounter < 3){
				if(app.main.CP == true){
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 11;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 11;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 11;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 11;
						}
					}
				}
				} else {
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 7;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 7;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 7;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 7;
						}
					}
				}
				}
				this.stun = true;
				ctx.drawImage(this.hit1Gohan,0,10);
			} else {
				this.defBreak++;
				ctx.drawImage(this.hit1Gohan,0,10);
				this.stun = false;
				this.hit = false; 
				this.flareHit = false;
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
		} else if(this.hardHit == true && this.hit == true && (this.air == false || this.blasted == true) && this.end == false){
			if(this.stunCounter < 22){
				this.voiceChance = Math.random();
				if(this.stunCounter < 4 && this.stunCounter > 2 && (this.voiceChance > .2 || this.blasted == true) && this.stuckInBlast == false && this.end == false){
					app.main.sound.playTaunt6(Math.round(getRandom(40,42)));
					//this.blasted = false;
				}
				if(app.main.CP == true){
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					}
				}
				} else {
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					}
				}
				}
				this.stun = true;
				if(this.flareHit == true){
					ctx.drawImage(this.hit1Gohan,0,10);
				} else {
					ctx.drawImage(this.hitHardGohan,0,0);
				}
			} else {
				if(this.flareHit == true){
					ctx.drawImage(this.hit1Gohan,0,10);
				} else {
					ctx.drawImage(this.hitHardGohan,0,0);
				}
				this.stun = false;
				this.hardHit = false;
				this.hit = false; 
				this.blasted = false;
				this.flareHit = false;
			}
		//HARD HIT AIR
		} else if(this.hardHit == true && this.hit == true && this.air == true && this.end == false){
			if(this.punched == true){
				if(this.stunCounter < 22){
					this.voiceChance = Math.random();
					if(this.stunCounter < 4 && this.stunCounter > 2 && (this.voiceChance > .5 || this.blasted == true) && this.stuckInBlast == false && this.end == false){
						app.main.sound.playTaunt6(Math.round(getRandom(40,42)));
					}
					if(app.main.CP == true){
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					}
				}
				} else {
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					}
				}
				}
					this.stun = true;
					ctx.drawImage(this.fallDownGohan,0,0);
				} else {
					ctx.drawImage(this.fallDownGohan,0,0);
					this.stun = false;
					this.hardHit = false;
					this.hit = false; 
					this.flareHit = false;
				}
			} else {
				if(this.stunCounter < 22){
					this.voiceChance = Math.random();
					if(this.stunCounter < 4 && this.stunCounter > 2 && this.voiceChance > .5 && this.end == false){
						app.main.sound.playTaunt6(Math.round(getRandom(40,42)));
					}
					if(app.main.CP == true){
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					}
				}
				} else {
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					}
				}
				}
					this.stun = true;
					if(this.flareHit == true){
						ctx.drawImage(this.hit1Gohan,0,10);
					} else {
						ctx.drawImage(this.fallSideGohan,0,0);
					}	
				} else {
					if(this.flareHit == true){
						ctx.drawImage(this.hit1Gohan,0,10);
					} else {
						ctx.drawImage(this.fallSideGohan,0,0);
					}
					this.stun = false;
					this.hardHit = false;
					this.hit = false; 
					this.flareHit = false;
				}
			}
		} else if(this.end == true){
				//this.stunCounter++;
				if(this.air == true || this.position.y < this.GROUND.y){
					this.stun = true;
					ctx.drawImage(this.fallDownGohan,0,0);
				} else {
					this.unable = true;
					this.stun = true;
					if(this.superForm == false){
						ctx.drawImage(this.gohanSevere,30,90);
						app.main.targetHidden = true;
					} else {
						if(this.trueDead == false){
						ctx.drawImage(this.gohanSevere2,0,0);
						app.main.targetHidden = true;
						} else {
							if(this.deadCount == false) {
								app.main.targetDead = true;
								app.main.kills += 1;
								app.main.gohanKill += 1;
								this.deadCount = true;
								app.main.sound.playBackgroundLoud(0);
							}
							ctx.drawImage(this.groundGohan,0,10);
						}
					}
					this.dead = true;
					/* if(this.stunCounter > 10){
						this.vanish = true;
						app.main.environment.deathVegetaDirLeft = this.left;
						app.main.environment.deathLocationVegeta = new Victor(this.position.x, this.position.y);
						this.dead = true;
					} */
				}
		}
		
		if(this.superForm == true && this.charging == false && this.taunting == false && this.attacking == false && this.blasting == false && this.hardHit == false && this.hit == false && this.end == false){
			this.auraTimer++;
			ctx.save();
			ctx.globalAlpha = .6;
			if(this.auraTimer < 2){
				ctx.drawImage(this.aura1Gohan,0,0);
			} else if(this.auraTimer < 3){
				ctx.drawImage(this.aura2Gohan,0,0);
			} else if(this.auraTimer < 4){
				ctx.drawImage(this.aura3Gohan,0,0);
			} else if(this.auraTimer < 5){
				ctx.drawImage(this.aura4Gohan,0,0);
			} else if(this.auraTimer < 6){
				ctx.drawImage(this.aura5Gohan,0,0);
				//this.auraTrigger = true;
				//this.auraTimer = 0;
			} else if(this.auraTimer > 80){
				this.auraTimer = 0;
			}
			ctx.restore();
		}/*  else if(this.velocity.x > .5 || this.velocity.x < -.5 && this.auraTrigger == true){
			this.auraTimer = 0;
			this.auraTrigger = false;
		} */
		if(this.hit == true && this.auraTimer < 6){
			this.auraTimer = 0;
		}
		
		}//end if
		
		
		// ------------ DRAWS FOR TIEN ---------------------------------------------
		// ------------ DRAWS FOR TIEN ---------------------------------------------
		// ------------ DRAWS FOR TIEN ---------------------------------------------
		if(this.vanish == false && this.tien == true){
		ctx.save();
		ctx.scale(1.15,1.15);
		//NON MOVING DRAWS
		if(this.cinematic == true){
			if(this.cine == 0){
				ctx.drawImage(this.solarTien,0,0);
			} else if(this.cine == 1){
				ctx.drawImage(this.mad1Tien,0,0);
			}
		} else if(this.velocity.x == 0 && this.attacking != true && this.blocking != true && this.taunting != true && this.hit == false && this.hardHit != true && this.charging != true && this.blasting == false && this.end == false) {
			if(this.exhausted == true){
				ctx.drawImage(this.injuredTien,0,0);
			} else if((this.up == true && this.flying == true) || (this.jumpVelocity.y < 15 && this.air == true)){
				if(this.lookUp == true){
					ctx.drawImage(this.flyUpUpTien,0,0);
				} else if(this.lookDown == true){
					ctx.drawImage(this.flyUpDownTien,0,0);
				} else {
					ctx.drawImage(this.flyUpTien,0,0);
				}
			} else if(this.down == true && this.air == true) {
				if(this.lookUp == true){
					ctx.drawImage(this.flyUpUpTien,0,0);
				} else if(this.lookDown == true){
					ctx.drawImage(this.flyUpDownTien,0,0);
				} else {
					ctx.drawImage(this.flyUpTien,0,0);
				}
			} else if(this.down == false && this.air == true && this.up == false) {
				if(this.lookUp == true){
					ctx.drawImage(this.flyUpUpTien,0,0);
				} else if(this.lookDown == true){
					ctx.drawImage(this.flyUpDownTien,0,0);
				} else {
					ctx.drawImage(this.flyUpTien,0,0);
				}
			} else {
				if(this.lookUp == true){
					ctx.drawImage(this.stanceUpTien,0,0);
				} else if(this.lookDown == true){
					ctx.drawImage(this.stanceDownTien,0,0);
				} else {
					ctx.drawImage(this.stanceTien,0,0);
				}
			}
		//MOVING DRAWS
		} else if(this.velocity.x != 0 && this.attacking != true && this.blocking != true && this.hit == false && this.hardHit != true && this.blasting == false && this.taunting != true && this.charging == false && this.end == false ){ //&& (this.fallingKick == false || this.air == false)
			if(this.exhausted == true){
				ctx.drawImage(this.injuredTien,0,0);
			} else if(this.slow == true && this.reverse == false){
				ctx.drawImage(this.slowFlyTien,0,0);
			} else if(this.fast == true && this.reverse == false){
				ctx.drawImage(this.fastFlyTien,0,0);
			} else if(this.reverse == true && this.farLeft == false && this.farRight == false){
				ctx.drawImage(this.moveReverseTien,0,0);
			} else if(this.air == true && this.up == false){
				if(this.lookUp == true){
					ctx.drawImage(this.flyUpUpTien,0,0);
				} else if(this.lookDown == true){
					ctx.drawImage(this.flyUpDownTien,0,0);
				} else {
					ctx.drawImage(this.flyUpTien,0,0);
				}
			} else {
				if(this.lookUp == true){
					ctx.drawImage(this.stanceUpTien,0,0);
				} else if(this.lookDown == true){
					ctx.drawImage(this.stanceDownTien,0,0);
				} else {
					ctx.drawImage(this.stanceTien,0,0);
				}
			}
		//POWERFUL BLAST
		} else if(this.powerMove == true && this.blasting == true && this.hit == false && this.fallingKick == false){
			//console.log("POWERMOVEEEEE");
			
			app.main.chance4 = .6;
			if(app.main.chance4 > .5){
			if(this.counter < 3){
				app.main.blastExploded = false;
				ctx.drawImage(this.triBeam1,0,0);
			} else if(this.counter < 5){
				ctx.drawImage(this.triBeam1,0,0);
			} else if(this.counter < 6){
				if(this.energyUse > 3){
					this.intensify = false;
					this.powerMove = false;
					this.fight = false;
					this.attacking = false;
					this.blasting = false;
					this.exhausted = true;
				} else {
					this.energyUse++;
					app.main.sound.playEnergyAttack2(25);
				}
				ctx.drawImage(this.triBeam1,0,0);
			} else if(this.counter < 7){
				ctx.drawImage(this.triBeam2,0,0);
				//ctx.drawImage(this.blastCharge1,-27,20,10,14);
			} else if(this.counter < 8){
				ctx.drawImage(this.triBeam3,0,0);
				//ctx.drawImage(this.blastCharge1,-32,16.5,15,21);
			} else if(this.counter < 9){
				ctx.drawImage(this.triBeam4,0,0);
				//ctx.drawImage(this.blastCharge1,-37,13,20,28);
			} else if(this.counter < 10){
				ctx.drawImage(this.triBeam4,0,0);
				//ctx.drawImage(this.blastCharge1,-42,9.5,25,35);
			} else if(this.counter < 11){
				ctx.drawImage(this.triBeam4,0,0);
				//ctx.drawImage(this.blastCharge1,-47,6,30,42);
			} else if(this.counter < 12){
				ctx.drawImage(this.triBeam4,0,0);
				//ctx.drawImage(this.blastCharge1,-52,2.5,35,49);
			} else if(this.counter < 20){
				ctx.drawImage(this.triBeam4,0,0);
				//ctx.drawImage(this.blastCharge1,-52,2.5,35,49);
			} else if(this.counter < 42){
				if(this.counter < 22 && this.counter > 20){
				if(app.main.blastExploded == true){
					app.main.sound.playTaunt7(Math.round(getRandom(9,10)));
				} else {
					app.main.sound.playTaunt7(Math.round(getRandom(0,3)));
				}
				}
				if(this.arms == false){
					if(this.counter < 21){
						this.blastRelease = true;
						app.main.environment.flash = true;
						app.main.sound.playEnergyAttack2(36);
						this.energy -= 15;
						if(this.left == true){
							/* if(app.main.blastExploded == true){
								app.main.sound.playTaunt7(9);
								app.main.blastExploded = false;
							} else {
								app.main.sound.playTaunt7(0);
							} */
							app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 40,this.left, 4, 9));
						} else {
							/* if(app.main.blastExploded == true){
								app.main.sound.playTaunt7(9);
								app.main.blastExploded = false;
							} else {
								app.main.sound.playTaunt7(1);
							} */
							app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 40,this.left, 4, 9));
						}
					} else {
						this.blastRelease = false;
					}
					if(app.main.blastExploded == true){
						ctx.drawImage(this.tauntTien,0,0);
					} else {
						ctx.drawImage(this.triBeam5,0,0);
					}
				} else if(this.arms == true){
					if(this.counter < 21){
						this.blastRelease = true;
						app.main.environment.flash = true;
						app.main.sound.playEnergyAttack2(36);
						this.energy -= 15;
						if(this.left == true){
							/* if(app.main.blastExploded == true){
								app.main.sound.playTaunt7(9);
								app.main.blastExploded = false;
							} else {
								app.main.sound.playTaunt7(0);
							} */
							app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 27,this.left, 4, 9));
						} else {
							/* if(app.main.blastExploded == true){
								app.main.sound.playTaunt7(9);
								app.main.blastExploded = false;
							} else {
								app.main.sound.playTaunt7(2);
							} */
							app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 27,this.left, 4, 9));
						}
					} else {
						this.blastRelease = false;
					}
					if(app.main.blastExploded == true){
						ctx.drawImage(this.tauntTien,0,0);
					} else {
						ctx.drawImage(this.triBeam5,0,0);
					}
				}
			} else {
				if(this.arms == false){
					this.arms = true;
				} else if(this.arms == true){
					this.arms = false;
				}
				app.main.chance4 = Math.random();
				if(app.main.blastExploded == true){
					ctx.drawImage(this.mad1Tien,0,0);
				} else {
					ctx.drawImage(this.triBeam5,0,0);
				}
				app.main.blastExploded = false;
				this.intensify = false;
				this.powerMove = false;
				this.fight = false;
				this.attacking = false;
				this.blasting = false;
				this.blastRelease = false;
			}
			} else { //FINGER BLAST
				if(this.counter < 3){
				ctx.drawImage(this.blastPrep,1,6);
			} else if(this.counter < 5){
				//ctx.drawImage(this.finger,-30,5);
			} else if(this.counter < 6){
				app.main.sound.playEnergyAttack2(27);
				//ctx.drawImage(this.finger,-30,5);
			} else if(this.counter < 7){
				//ctx.drawImage(this.finger,-30,5);
				ctx.drawImage(this.blastCharge1,-39,20,10,10);
			} else if(this.counter < 8){
				//ctx.drawImage(this.finger,-30,5);
				ctx.drawImage(this.blastCharge1,-44,16.5,15,17);
			} else if(this.counter < 9){
				//ctx.drawImage(this.finger,-30,5);
				ctx.drawImage(this.blastCharge1,-39,20,10,10);
			} else if(this.counter < 10){
				//ctx.drawImage(this.finger,-30,5);
				ctx.drawImage(this.blastCharge1,-44,16.5,15,17);
			} else if(this.counter < 11){
				//ctx.drawImage(this.finger,-30,5);
				ctx.drawImage(this.blastCharge1,-39,20,10,10);
			} else if(this.counter < 20){
				if(this.arms == false){
					if(this.counter < 12){
						app.main.sound.playEnergyAttack2(1);
						this.energy -= 5;
						if(this.left == true){
							app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 27,this.left, 4, 9));
						} else {
							app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 27,this.left, 4, 9));
						}
					}
					ctx.drawImage(this.finger,-30,5);
				} else if(this.arms == true){
					if(this.counter < 12){
						app.main.sound.playEnergyAttack2(1);
						this.energy -= 5;
						if(this.left == true){
							app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 27,this.left, 4, 9));
						} else {
							app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 27,this.left, 4, 9));
						}
					}
					ctx.drawImage(this.finger,-30,5);
				}
			} else {
				if(this.arms == false){
					this.arms = true;
				} else if(this.arms == true){
					this.arms = false;
				}
				ctx.drawImage(this.blastPrep,1,6);
				app.main.chance4 = Math.random();
				this.intensify = false;
				this.powerMove = false;
				this.fight = false;
				this.attacking = false;
				this.blasting = false;
			}
			}
		//TAUNT
		} else if(this.taunting == true && this.hit == false && this.hardHit != true){
			if(this.counter < 50){
				//this.stun = true;
				ctx.drawImage(this.tauntTien,0,0);
				if(this.counter > 5 && this.counter < 7){
					//app.main.sound.playTaunt2(Math.round(this.tauntPick));
				}
				if(this.hit == true || this.hardHit == true || this.taunting == false) {
					this.aiTaunting = false;
					this.intensify = false;
					this.taunting = false;
					//this.stun = false;
				}
			} else {
				ctx.drawImage(this.tauntTien,0,0);
				//this.counter = 0;
				this.stamina = 28;
				this.exhausted = false;
				//this.stun = false;
				this.intensify = false;
				this.taunting = false;
			}
		//Energy Charge
		} else if(this.charging == true && this.hit == false && this.hardHit != true){
			if(this.counter < 100){
				if(this.counter == 5){
					app.main.sound.playTaunt2(Math.round(getRandom(28,29)));
				}
				//this.stun = true;
				if(this.counter > 8){
					this.energy += 1.5;
				}
				ctx.drawImage(this.charge,0,14);
				if(this.counter > 6){
				if(this.counter < 8){
					app.main.sound.playEffect2(28);
				}
				this.chargeCounter++;
				ctx.save();
				ctx.globalAlpha = (.006 * this.energy);
				if(this.chargeCounter < 2){
					if(this.superForm == false){
						ctx.drawImage(this.auraWhite1,-73,-100);
					} else {
						ctx.drawImage(this.auraYellow1,-73,-100);
					}
				} else if (this.chargeCounter < 3){
					if(this.superForm == false){
						ctx.drawImage(this.auraWhite2,-73,-100);
					} else {
						ctx.drawImage(this.auraYellow2,-73,-100);
					}
				} else if (this.chargeCounter < 4){
					if(this.superForm == false){
						ctx.drawImage(this.auraWhite3,-73,-100);
					} else {
						ctx.drawImage(this.auraYellow3,-73,-100);
					}
				} else if (this.chargeCounter < 5){
					if(this.superForm == false){
						ctx.drawImage(this.auraWhite4,-73,-100);
					} else {
						ctx.drawImage(this.auraYellow4,-73,-100);
					}
					this.chargeCounter = 0;
				}
				ctx.restore();
				}
				if(this.energy > 99) {
					app.main.sound.stopEffect();
					//Play voice
					//this.stun = false;
					this.intensify = false;
					this.charging = false;
				}
				if(this.hit == true || this.hardHit == true || this.charging == false) {
					app.main.sound.stopEffect();
					this.aiCharging = false;
					this.intensify = false;
					this.charging = false;
					//this.stun = false;
				}
				
				/*
				if(this.counter > 19 && this.counter < 21){
					app.main.sound.playTaunt2(Math.round(this.tauntPick));
				}
				*/
			} else {
				ctx.drawImage(this.charge,0,14);
				//this.stun = false;
				this.intensify = false;
				this.charging = false;
			}
		//BASIC HIT
		} else if(this.hit == true && this.hardHit == false && this.end == false){
			if(this.stunCounter < 30){
				if(app.main.CP == true){
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 11;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 11;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 11;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 11;
						}
					}
				}
				} else {
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 7;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 7;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 7;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 7;
						}
					}
				}
				}
				this.stun = true;
				ctx.drawImage(this.hit1Tien,0,0);
			} else {
				this.defBreak++;
				ctx.drawImage(this.hit1Tien,0,0);
				this.stun = false;
				this.hit = false; 
				this.flareHit = false;
			}
		//HARD HIT
		} else if(this.hardHit == true && this.hit == true && (this.air == false || this.blasted == true) && this.end == false){
			if(this.stunCounter < 60){
				if(app.main.CP == true){
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					}
				}
				} else {
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					}
				}
				}
				this.stun = true;
				if(this.flareHit == true){
					ctx.drawImage(this.hit1Tien,0,0);
				} else {
					ctx.drawImage(this.hitHardTien,0,0);
				}
			} else {
				if(this.flareHit == true){
					ctx.drawImage(this.hit1Tien,0,0);
				} else {
					ctx.drawImage(this.hitHardTien,0,0);
				}
				this.stun = false;
				this.hardHit = false;
				this.hit = false; 
				this.blasted = false;
				this.prepBlast = false;
				this.flareHit = false;
			}
		//HARD HIT AIR
		} else if(this.hardHit == true && this.hit == true && this.air == true && this.end == false){
			if(this.punched == true){
				if(this.stunCounter < 60){
				if(app.main.CP == true){
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					}
				}
				} else {
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					}
				}
				}
					this.stun = true;
					if(this.flareHit == true){
						ctx.drawImage(this.hit1Tien,0,0);
					} else {
						ctx.drawImage(this.fallSideTien,0,0);
					}
				} else {
					if(this.flareHit == true){
						ctx.drawImage(this.hit1Tien,0,0);
					} else {
						ctx.drawImage(this.fallSideTien,0,0);
					}
					this.stun = false;
					this.hardHit = false;
					this.hit = false; 
					this.prepBlast = false;
					this.flareHit = false;
				}
			} else {
				if(this.stunCounter < 60){
					if(app.main.CP == true){
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					}
				}
				} else {
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					}
				}
				}
					this.stun = true;
					if(this.flareHit == true){
						ctx.drawImage(this.hit1Tien,0,0);
					} else {
						ctx.drawImage(this.fallSideTien,0,0);
					}
				} else {
					if(this.flareHit == true){
						ctx.drawImage(this.hit1Tien,0,0);
					} else {
						ctx.drawImage(this.fallSideTien,0,0);
					}
					this.stun = false;
					this.hardHit = false;
					this.hit = false; 
					this.prepBlast = false;
					this.flareHit = false;
				}
			}
		} else if(this.end == true){
				if(this.air == true){
					this.stun = true;
					ctx.drawImage(this.fallDownTien,0,0);		
				} else {
					this.unable = true;
					this.prepBlast = false;
					this.stun = true;
					ctx.drawImage(this.groundTien,0,0);
					if(this.deadCount == false) {
						app.main.kills += 1;
						app.main.tienKill += 1;
						this.deadCount = true;
					}
					if(this.stunCounter > 10){
						this.vanish = true;
						app.main.environment.deathTienDirLeft = this.left;
						app.main.environment.deathLocationTien = new Victor(this.position.x, this.position.y);
						this.dead = true;
					}
				}
		}
		ctx.restore();
		}//end if
		
		
		// ------------ DRAWS FOR KRILLIN ---------------------------------------------
		// ------------ DRAWS FOR KRILLIN ---------------------------------------------
		// ------------ DRAWS FOR KRILLIN ---------------------------------------------
		if(this.vanish == false && this.krillin == true){
		//NON MOVING DRAWS
		if(this.cinematic == true){
			if(this.cine == 0){
				ctx.drawImage(this.solarKrillin,0,0);
			} else if(this.cine == 1){
				ctx.drawImage(this.mad1Krillin,0,0);
			} else if(this.cine == 2){
				ctx.drawImage(this.mad2Krillin,0,0);
			}
		} else if(this.velocity.x == 0 && this.attacking != true && this.blocking != true && this.taunting != true && this.hit == false && this.hardHit != true && this.blasting == false && this.charging != true && this.end == false) {
			if((this.up == true && this.flying == true) || (this.jumpVelocity.y < 15 && this.air == true)){
				if(this.lookUp == true){
					ctx.drawImage(this.flyUpUpKrillin,0,0);
				} else if(this.lookDown == true){
					ctx.drawImage(this.flyUpDownKrillin,0,0);
				} else {
					ctx.drawImage(this.flyUpKrillin,0,0);
				}
			} else if(this.exhausted == true){
				ctx.drawImage(this.injuredKrillin,0,0);
			} else if(this.down == true && this.air == true) {
				ctx.drawImage(this.flyDownFastKrillin,0,0);
			} else if(this.down == false && this.air == true && this.up == false) {
				ctx.drawImage(this.flyDownSlowKrillin,0,0);
			} else {
				if(this.lookUp == true){
					ctx.drawImage(this.stanceUpKrillin,0,0);
				} else if(this.lookDown == true){
					ctx.drawImage(this.stanceDownKrillin,0,0);
				} else {
					ctx.drawImage(this.stanceKrillin,0,0);
				}
			}
		//MOVING DRAWS
		} else if(this.velocity.x != 0 && this.attacking != true && this.blocking != true && this.hit == false && this.hardHit != true && this.blasting == false && this.taunting != true && this.charging == false && this.end == false ){ //&& (this.fallingKick == false || this.air == false)
			if(this.slow == true && this.reverse == false){
				ctx.drawImage(this.slowFlyKrillin,0,0);
			} else if(this.fast == true && this.reverse == false){
				ctx.drawImage(this.fastFlyKrillin,0,0);
			} else if(this.exhausted == true){
				ctx.drawImage(this.injuredKrillin,0,0);
			} else if(this.reverse == true && this.farLeft == false && this.farRight  == false){
				ctx.drawImage(this.moveReverseKrillin,0,0);
			} else if(this.air == true && this.up == false){
				ctx.drawImage(this.flyDownSlowKrillin,0,0);
			} else {
				if(this.lookUp == true){
					ctx.drawImage(this.stanceUpKrillin,0,0);
				} else if(this.lookDown == true){
					ctx.drawImage(this.stanceDownKrillin,0,0);
				} else {
					ctx.drawImage(this.stanceKrillin,0,0);
				}
			}
		//POWERFUL BLAST
		} else if(this.powerMove == true && this.blasting == true && this.hit == false && this.fallingKick == false){
			//console.log("POWERMOVEEEEE");
			app.main.chance5 = .6;
			if(app.main.chance5 > .5){
			if(this.counter < 4){
				ctx.drawImage(this.disk1,0,0);
			} else if(this.counter < 5){
				if(this.energyUse > 3){
					this.intensify = false;
					this.powerMove = false;
					this.fight = false;
					this.attacking = false;
					this.blasting = false;
					this.exhausted = true;
				} else {
					this.energyUse++;
				}
				ctx.drawImage(this.disk1,0,0);
				app.main.sound.playTaunt8(Math.round(getRandom(0,2)));
			} else if(this.counter < 6){
				//app.main.sound.playEnergyAttack(25);
				app.main.sound.playEnergyAttack2(32);
				ctx.drawImage(this.disk1,0,0);
			} else if(this.counter < 7){
				ctx.drawImage(this.disk1,0,0);
				ctx.drawImage(this.energyDisk1,150,65, 39, 12);
			} else if(this.counter < 8){
				ctx.drawImage(this.disk1,0,0);
				ctx.drawImage(this.energyDisk1,146,63, 45, 14);
			} else if(this.counter < 9){
				ctx.drawImage(this.disk1,0,0);
				ctx.drawImage(this.energyDisk1,150,65, 39, 12);
			} else if(this.counter < 10){
				ctx.drawImage(this.disk1,0,0);
				ctx.drawImage(this.energyDisk1,146,63, 45, 14);
			} else if(this.counter < 11){
				ctx.drawImage(this.disk1,0,0);
				if(this.triggerBlast == false){
					this.counter = 6;
				} else if(this.triggerBlast == true && app.main.tienDead == false && this.prepToBlast < 3){
					this.counter = 6;
					this.prepToBlast += 1;
				} else {
					this.prepToBlast = 0;
				}
			} else if(this.counter < 12){
				ctx.drawImage(this.disk2,0,0);
			} else if(this.counter < 13){
				ctx.drawImage(this.disk3,0,0);
				
			} else if(this.counter < 40){
				if(this.arms == false){
					if(this.counter < 14){
						this.blastRelease = true;
						app.main.sound.playEnergyAttack2(33);
						this.energy -= 15;
						if(this.left == true){
							app.main.sound.playTaunt8(3);
							app.main.blasts.push(new app.Energy(this.position.x - 20,this.position.y + 67,this.left, 5, 10));
						} else {
							app.main.sound.playTaunt8(4);
							app.main.blasts.push(new app.Energy(this.position.x + 80,this.position.y + 67,this.left, 5, 10));
						}
					} else {
						this.blastRelease = false;
					}
					ctx.drawImage(this.disk4,0,0);
				} else if(this.arms == true){
					if(this.counter < 14){
						this.blastRelease = true;
						app.main.sound.playEnergyAttack2(33);
						this.energy -= 15;
						if(this.left == true){
							app.main.sound.playTaunt8(3);
							app.main.blasts.push(new app.Energy(this.position.x - 20,this.position.y + 67,this.left, 5, 10));
						} else {
							app.main.sound.playTaunt8(4);
							app.main.blasts.push(new app.Energy(this.position.x + 80,this.position.y + 67,this.left, 5, 10));
						}
					} else {
						this.blastRelease = false;
					}
					ctx.drawImage(this.disk4,0,0);
				}
			} else {
				if(this.arms == false){
					this.arms = true;
				} else if(this.arms == true){
					this.arms = false;
				}
				app.main.chance5 = Math.random();
				ctx.drawImage(this.stanceKrillin,0,0);
				this.intensify = false;
				this.powerMove = false;
				this.fight = false;
				this.attacking = false;
				this.blasting = false;
			}
			} else { //FINGER BLAST
				if(this.counter < 3){
				ctx.drawImage(this.blastPrep,1,6);
			} else if(this.counter < 5){
				//ctx.drawImage(this.finger,-30,5);
			} else if(this.counter < 6){
				app.main.sound.playEnergyAttack2(27);
				//ctx.drawImage(this.finger,-30,5);
			} else if(this.counter < 7){
				//ctx.drawImage(this.finger,-30,5);
				ctx.drawImage(this.blastCharge1,-39,20,10,10);
			} else if(this.counter < 8){
				//ctx.drawImage(this.finger,-30,5);
				ctx.drawImage(this.blastCharge1,-44,16.5,15,17);
			} else if(this.counter < 9){
				//ctx.drawImage(this.finger,-30,5);
				ctx.drawImage(this.blastCharge1,-39,20,10,10);
			} else if(this.counter < 10){
				//ctx.drawImage(this.finger,-30,5);
				ctx.drawImage(this.blastCharge1,-44,16.5,15,17);
			} else if(this.counter < 11){
				//ctx.drawImage(this.finger,-30,5);
				ctx.drawImage(this.blastCharge1,-39,20,10,10);
			} else if(this.counter < 20){
				if(this.arms == false){
					if(this.counter < 12){
						app.main.sound.playEnergyAttack2(1);
						this.energy -= 5;
						if(this.left == true){
							app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 27,this.left, 1, 2));
						} else {
							app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 27,this.left, 1, 2));
						}
					}
					ctx.drawImage(this.finger,-30,5);
				} else if(this.arms == true){
					if(this.counter < 12){
						app.main.sound.playEnergyAttack2(1);
						this.energy -= 5;
						if(this.left == true){
							app.main.blasts.push(new app.Energy(this.position.x,this.position.y + 27,this.left, 1, 2));
						} else {
							app.main.blasts.push(new app.Energy(this.position.x + 60,this.position.y + 27,this.left, 2));
						}
					}
					ctx.drawImage(this.finger,-30,5);
				}
			} else {
				if(this.arms == false){
					this.arms = true;
				} else if(this.arms == true){
					this.arms = false;
				}
				ctx.drawImage(this.blastPrep,1,6);
				app.main.chance5 = Math.random();
				this.intensify = false;
				this.powerMove = false;
				this.fight = false;
				this.attacking = false;
				this.blasting = false;
			}
			}
		//TAUNT
		} else if(this.taunting == true && this.hit == false && this.hardHit != true){
			if((this.counter < 25 && app.main.android18.teleDelay < 2) || (this.counter < 12 && app.main.android18.teleDelay > 1)){
				//this.stun = true;
				ctx.drawImage(this.tauntKrillin,0,0);
				if(this.counter > 5 && this.counter < 7){
					app.main.sound.playTaunt2(Math.round(this.tauntPick));
				}
				if(this.hit == true || this.hardHit == true || this.taunting == false) {
					this.aiTaunting = false;
					this.intensify = false;
					this.taunting = false;
					//this.stun = false;
				}
			} else {
				ctx.drawImage(this.tauntKrillin,0,0);
				//this.counter = 0;
				this.stamina = 28;
				this.exhausted = false;
				//this.stun = false;
				this.intensify = false;
				this.taunting = false;
			}
		//Energy Charge
		} else if(this.charging == true && this.hit == false && this.hardHit != true){
			if(this.counter < 100){
				if(this.counter == 5){
					app.main.sound.playTaunt2(Math.round(getRandom(28,29)));
				}
				//this.stun = true;
				if(this.counter > 8){
					this.energy += 1.5;
				}
				ctx.drawImage(this.charge,0,14);
				if(this.counter > 6){
				if(this.counter < 8){
					app.main.sound.playEffect2(28);
				}
				this.chargeCounter++;
				ctx.save();
				ctx.globalAlpha = (.006 * this.energy);
				if(this.chargeCounter < 2){
					if(this.superForm == false){
						ctx.drawImage(this.auraWhite1,-73,-100);
					} else {
						ctx.drawImage(this.auraYellow1,-73,-100);
					}
				} else if (this.chargeCounter < 3){
					if(this.superForm == false){
						ctx.drawImage(this.auraWhite2,-73,-100);
					} else {
						ctx.drawImage(this.auraYellow2,-73,-100);
					}
				} else if (this.chargeCounter < 4){
					if(this.superForm == false){
						ctx.drawImage(this.auraWhite3,-73,-100);
					} else {
						ctx.drawImage(this.auraYellow3,-73,-100);
					}
				} else if (this.chargeCounter < 5){
					if(this.superForm == false){
						ctx.drawImage(this.auraWhite4,-73,-100);
					} else {
						ctx.drawImage(this.auraYellow4,-73,-100);
					}
					this.chargeCounter = 0;
				}
				ctx.restore();
				}
				if(this.energy > 99) {
					app.main.sound.stopEffect();
					//Play voice
					//this.stun = false;
					this.intensify = false;
					this.charging = false;
				}
				if(this.hit == true || this.hardHit == true || this.charging == false) {
					app.main.sound.stopEffect();
					this.aiCharging = false;
					this.intensify = false;
					this.charging = false;
					//this.stun = false;
				}
				
				/*
				if(this.counter > 19 && this.counter < 21){
					app.main.sound.playTaunt2(Math.round(this.tauntPick));
				}
				*/
			} else {
				ctx.drawImage(this.charge,0,14);
				//this.stun = false;
				this.intensify = false;
				this.charging = false;
			}
		//BASIC HIT
		} else if(this.hit == true && this.hardHit == false && this.end == false && this.taunting == false){
			if(this.stunCounter < 30){
				if(app.main.CP == true){
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					}
				}
				} else {
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					}
				}
				}
				this.stun = true;
				ctx.drawImage(this.hit1Krillin,0,0);
			} else {
				this.defBreak++;
				ctx.drawImage(this.hit1Krillin,0,0);
				this.stun = false;
				this.hit = false;
				this.flareHit = false;				
			}
		//HARD HIT
		} else if(this.hardHit == true && this.hit == true && (this.air == false || this.blasted == true) && this.end == false){
			if(this.stunCounter < 60){
				if(app.main.CP == true){
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					}
				}
				} else {
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					}
				}
				}
				this.stun = true;
				if(this.flareHit == true){
					ctx.drawImage(this.hit1Krillin,0,0);
				} else {
					ctx.drawImage(this.hitHardKrillin,0,0);
				}
			} else {
				if(this.flareHit == true){
					ctx.drawImage(this.hit1Krillin,0,0);
				} else {
					ctx.drawImage(this.hitHardKrillin,0,0);
				}
				this.stun = false;
				this.hardHit = false;
				this.hit = false; 
				this.blasted = false;
				this.prepBlast = false;
				this.flareHit = false;
			}
		//HARD HIT AIR
		} else if(this.hardHit == true && this.hit == true && this.air == true && this.end == false){
			if(this.punched == true){
				if(this.stunCounter < 60){
					if(app.main.CP == true){
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					}
				}
				} else {
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					}
				}
				}
					this.stun = true;
					ctx.drawImage(this.fallDownKrillin,0,0);		
				} else {
					ctx.drawImage(this.fallDownKrillin,0,0);
					this.stun = false;
					this.hardHit = false;
					this.hit = false; 
					this.prepBlast = false;
					this.flareHit = false;
				}
			} else {
				if(this.stunCounter < 60){
					if(app.main.CP == true){
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 31;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 31;
						}
					}
				}
				} else {
					if(this.focus17 == false){
					if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					} else if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					}
				} else if(this.focus17 == true){
					if(app.main.android17.attacking == true){
						if(hardAttackHitTest(app.main.android17, app.main.vegeta)){
							app.main.roundScore2 += 21;
						}
					} else if(app.main.android18.attacking == true && app.main.android18.missed == false && app.main.android18.attackPrep == false){
						if(hardAttackHitTest(app.main.android18, app.main.vegeta)){
							app.main.roundScore += 21;
						}
					}
				}
				}
					this.stun = true;
					if(this.flareHit == true){
						ctx.drawImage(this.hit1Krillin,0,0);
					} else {
						ctx.drawImage(this.fallSideKrillin,0,0);
					}
				} else {
					if(this.flareHit == true){
						ctx.drawImage(this.hit1Krillin,0,0);
					} else {
						ctx.drawImage(this.fallSideKrillin,0,0);
					}
					this.stun = false;
					this.hardHit = false;
					this.hit = false; 
					this.prepBlast = false;
					this.flareHit = false;
				}
			}
		} else if(this.end == true){
				if(this.air == true){
					this.stun = true;
					ctx.drawImage(this.fallDownKrillin,0,0);		
				} else {
					this.unable = true;
					this.prepBlast = false;
					this.stun = true;
					ctx.drawImage(this.groundKrillin,0,0);
					if(this.deadCount == false) {
						app.main.kills += 1;
						app.main.krillinKill += 1;
						this.deadCount = true;
					}
					if(this.stunCounter > 10){
						this.vanish = true;
						app.main.environment.deathKrillinDirLeft = this.left;
						app.main.environment.deathLocationKrillin = new Victor(this.position.x, this.position.y);
						this.dead = true;
						if(this.stunCounter == 30){
							app.main.sound.playTaunt7(17);
						}
					}
				}
		}
		
		}//end if
		
		
		//SUPER SPEED (TELEPORT) DRAW 
		if(this.superSpeed == true && this.appear == false && this.superSpeedExhaustion == false){
			this.speedCounter++;
			
			if(this.superSpeed == true && this.speedCounter > 8 && this.speedCounter < 12){
				this.vanish = true;
			}
			
			ctx.save();
			ctx.scale(1.2,1.2);
			//console.log("Counter" + this.counter);
			//console.log("S-Counter" + this.speedCounter);
			if(this.counter < 4){
				if(this.counter < 2){
					this.positionLast = new Victor(this.position.x,this.position.y);
					//console.log("STAGE 2");
					app.main.sound.playSpecialReaction2(19);
					var first = getRandom(0,1);
					var second = getRandom(0,25);
					app.main.environment.clashDelay = 0;
					if(first > .7){
						this.teleDelayTime = second;
						this.delayingTele = true;
					}
				}
				if(this.speedCounter < 2){
					if(this.velocity.x != 0){
						if(this.piccolo == true){
							ctx.drawImage(this.teleport2,-10,-5);
						} else if (this.gero == true){
							ctx.drawImage(this.teleport3,-10,-5);
						} else if(this.vegeta == true){
							ctx.drawImage(this.teleport,-10,-5);
						} else if(this.gohan == true){
							ctx.drawImage(this.teleport2,10,30);
						} else if(this.tien == true){
							ctx.drawImage(this.teleport5,110,70);
						} else if(this.krillin == true){
							ctx.drawImage(this.teleport6,100,70);
						} else {
							ctx.drawImage(this.teleport,-10,-5);
						}
					} else {
						if(this.piccolo == true){
							ctx.drawImage(this.teleport2Thin,0,-5);
						} else if (this.gero == true){
							ctx.drawImage(this.teleport3Thin,0,-5);
						} else if(this.vegeta == true){
							ctx.drawImage(this.teleportThin,0,-5);
						} else if(this.gohan == true){
							ctx.drawImage(this.teleport2Thin,20,30);
						} else if(this.tien == true){
							ctx.drawImage(this.teleport5,110,70);
						} else if(this.krillin == true){
							ctx.drawImage(this.teleport6,100,70);
						} else {
							ctx.drawImage(this.teleport,-10,-5);
						}
					}
					
				} else if(this.speedCounter < 3){
					//blink
				} else {
					//console.log("Speed reset");
					this.speedCounter = 0;
				}
			} else if(this.counter < 7){
				//console.log("STAGE 3");
				if(this.gohan == true){
					this.lastKnown.x = app.main.android18.position.x;
					this.lastKnown.y = app.main.android18.position.y;
					if(this.powerMove == true){
						if(this.left == true){
							this.velocity.x = -30;
						} else {
							this.velocity.x = 30;
						}
						this.decel = this.velocity.clone();
					}
				}
				this.stun = true;
				this.vanish = true;
				if(this.speedCounter < 2){
					if(this.velocity.x != 0){
						if(this.piccolo == true){
							ctx.drawImage(this.teleport2,-10,-5);
							ctx.drawImage(this.teleport2,-10,-2);
						} else if (this.gero == true){
							ctx.drawImage(this.teleport3,-10,-5);
							ctx.drawImage(this.teleport3,-10,-2);
						} else if(this.vegeta == true){
							ctx.drawImage(this.teleport,-10,-5);
							ctx.drawImage(this.teleport,-10,-2);
						} else if(this.gohan == true){
							ctx.drawImage(this.teleport2,10,30);
							ctx.drawImage(this.teleport2,10,33);
						} else if(this.tien == true){
							ctx.drawImage(this.teleport5,110,70);
							ctx.drawImage(this.teleport5,110,73);
						} else if(this.krillin == true){
							ctx.drawImage(this.teleport6,100,70);
							ctx.drawImage(this.teleport6,100,73);
						} else {
							ctx.drawImage(this.teleport,-10,-5);
							ctx.drawImage(this.teleport,-10,-2);
						}
					} else {
						if(this.piccolo == true){
							ctx.drawImage(this.teleport2Thin,0,-5);
							ctx.drawImage(this.teleport2Thin,0,-2);
						} else if (this.gero == true){
							ctx.drawImage(this.teleport3Thin,0,-5);
							ctx.drawImage(this.teleport3Thin,0,-2);
						} else if(this.vegeta == true){
							ctx.drawImage(this.teleportThin,0,-5);
							ctx.drawImage(this.teleportThin,0,-2);
						} else if(this.gohan == true){
							ctx.drawImage(this.teleport2Thin,20,30);
							ctx.drawImage(this.teleport2Thin,20,33);
						} else if(this.tien == true){
							ctx.drawImage(this.teleport5,110,70);
							ctx.drawImage(this.teleport5,110,73);
						} else if(this.krillin == true){
							ctx.drawImage(this.teleport6,100,70);
							ctx.drawImage(this.teleport6,100,73);
						} else {
							ctx.drawImage(this.teleport,-10,-5);
							ctx.drawImage(this.teleport,-10,-2);
						}
					}
					
				} else if(this.speedCounter < 3){
					//blink
				} else {
					this.speedCounter = 0;
				}
				
			} else if(this.counter < 8){
				if(this.end == false && (this.delayingTele == false || this.teleDelay > 25)){
				this.teleDelay = 0;
				this.speed();
				
				} else {
					this.aboveBuilding = false;
					this.position.x = getRandom(0,1024);
					this.position.y = getRandom(0,450);
					this.aboveBuilding = false;
					this.teleDelay++;
					this.counter = 6;
				}
			} else if(this.counter < 12){
				if(this.gohan == true){
					if(this.powerMove == true){
						if(this.left == true){
							this.velocity.x = -40;
						} else {
							this.velocity.x = 40;
						}
						this.decel = this.velocity.clone();
					}
				}
				if(this.speedCounter < 2){
					if(this.piccolo == true){
						ctx.drawImage(this.teleport2,0,-5);
						ctx.drawImage(this.teleport2,0,-2);
					} else if (this.gero == true){
						ctx.drawImage(this.teleport3,0,-5);
						ctx.drawImage(this.teleport3,0,-2);
					} else if(this.vegeta == true){
						ctx.drawImage(this.teleport,0,-5);
						ctx.drawImage(this.teleport,0,-2);
					} else if(this.gohan == true){
						ctx.drawImage(this.teleport2,20,30);
						ctx.drawImage(this.teleport2,20,33);
					} else if(this.tien == true){
						ctx.drawImage(this.teleport5,110,70);
						ctx.drawImage(this.teleport5,110,73);
					} else if(this.krillin == true){
						ctx.drawImage(this.teleport6,100,70);
						ctx.drawImage(this.teleport6,100,73);
					} else {
						ctx.drawImage(this.teleport,-10,-5);
						ctx.drawImage(this.teleport,-10,-2);
					}
				} else if(this.speedCounter < 3){
					//blink
				} else {
					this.speedCounter = 0;
				}
			} else if(this.counter < 15){
				if(this.gohan == false || this.powerMode == false){
					this.velocity.x = 0;
					this.decel.x = 0;
				}
				//this.jumpVelocity.y = 0;
				this.vanish = false;
				if(this.speedCounter < 2){
					if(this.piccolo == true){
						ctx.drawImage(this.teleport2,0,-5);
					} else if (this.gero == true){
						ctx.drawImage(this.teleport3,0,-5);
					} else if(this.vegeta == true){
						ctx.drawImage(this.teleport,0,-5);
					} else if(this.gohan == true){
						ctx.drawImage(this.teleport2,20,30);
					} else if(this.tien == true){
						ctx.drawImage(this.teleport5,110,70);
					} else if(this.krillin == true){
						ctx.drawImage(this.teleport6,100,70);
					} else {
						ctx.drawImage(this.teleport,-10,-5);
					}
				} else if(this.speedCounter < 3){
					//blink
				} else {
					this.speedCounter = 0;
				}
			} else {
				app.main.sound.playSpecialReaction2(20);
				this.stun = false;
				this.fight = false;
				/* if(this.gohan == true){
					if(this.powerMove == true){
						if(this.left == true){
							this.velocity.x = -30;
						} else {
							this.velocity.x = 30;
						}
						this.decel = this.velocity.clone();
					}
				} */
				if(this.krillin == true || this.tien == true){
					app.main.aiChoiceSupport2 = (Math.random());
					this.jumpVelocity.y = 0;
				} else {
					app.main.aiChoice2 = Math.random();
				}
				/* if(this.saveThem == true){
					if(this.success < .5){
						this.counter = 0;
					this.superSpeed = false;
					this.superSpeedExhaustion = true;
					this.speedExhaust = 0;
						this.specialBlock = true;
					} else {
						this.counter = 0;
					this.superSpeed = false;
					this.superSpeedExhaustion = true;
					this.speedExhaust = 0;
						this.stun = true;
						this.stunCounter = 0;
						this.hardHit = true;
						this.hit = true;
						this.blasted = true;
						this.punched = true;
						this.jumpVelocity.y = 15;
						if(this.SB == true){
							this.blastBurnLength = 120;
						} else {
							this.blastBurnLength = 100;
						}
						this.blastBurn = true;
						app.main.sound.playTaunt6(Math.round(getRandom(40,42)));
					}
					this.aboveBuilding = false;
					this.saveThem = false;
				} */
				
				this.counter = 0;
				this.superSpeed = false;
				this.superSpeedExhaustion = true;
				this.speedExhaust = 0;
				
			}
			ctx.restore();
		} 
		
		
		//SPECIAL SCENE VERSION OF SUPER SPEED
		if(this.appear == true && this.superSpeed == true){
			this.speedCounter++;
			ctx.save();
			ctx.scale(1.2,1.2);
			if(this.counter < 5){
				if(this.speedCounter < 2){
					
					if(this.piccolo == true){
						ctx.drawImage(this.teleport2,-10,-5);
						ctx.drawImage(this.teleport2,-10,-2);
					} else if (this.gero == true){
						ctx.drawImage(this.teleport3,-10,-5);
						ctx.drawImage(this.teleport3,-10,-2);
					} else if(this.vegeta == true){
						ctx.drawImage(this.teleport,-10,-5);
						ctx.drawImage(this.teleport,-10,-2);
					} else if(this.gohan == true){
						ctx.drawImage(this.teleport2,10,30);
						ctx.drawImage(this.teleport2,10,33);
					} else if(this.tien == true){
						this.position.y = this.GROUND.y - 300;
						this.jumpVelocity.y = -5;
						ctx.drawImage(this.teleport5,110,70);
						ctx.drawImage(this.teleport5,110,73);
					} else if(this.krillin == true){
						ctx.drawImage(this.teleport6,100,70);
						ctx.drawImage(this.teleport6,100,73);
					} else {
						ctx.drawImage(this.teleport,-10,-5);
						ctx.drawImage(this.teleport,-10,-2);
					}
				} else if(this.speedCounter < 3){
					//blink
				} else {
					this.speedCounter = 0;
				}
			} else if(this.counter < 8){
				this.vanish = false;
				if(this.speedCounter < 2){
					if(this.piccolo == true){
						ctx.drawImage(this.teleport2,-10,-5);
					} else if (this.gero == true){
						ctx.drawImage(this.teleport3,-10,-5);
					} else if(this.vegeta == true){
						ctx.drawImage(this.teleport,-10,-5);
					} else if(this.gohan == true){
						ctx.drawImage(this.teleport,10,30);
					} else if(this.tien == true){
						ctx.drawImage(this.teleport5,110,70);
					} else if(this.krillin == true){
						ctx.drawImage(this.teleport6,100,70);
					} else {
						ctx.drawImage(this.teleport,-10,-5);
					}
				} else if(this.speedCounter < 3){
					//blink
				} else {
					this.speedCounter = 0;
				}
			} else {
				app.main.sound.playSpecialReaction2(20);
				this.fight = false;
				this.superSpeed = false;
				this.appear = false;
				this.counter = 0;
			}
			ctx.restore();
		}
		
		ctx.restore();
	};
	
	
	return Vegeta; 
})(); //end IIFE