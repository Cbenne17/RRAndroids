// Check mods and set abilties
const setActiveMods = () => {
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
  const mod0 = document.querySelector("#mods0").value;
  const mod1 = document.querySelector("#mods1").value;
  const mod2 = document.querySelector("#mods2").value;
  const mod3 = document.querySelector("#mods3").value;
  const mod4 = document.querySelector("#mods4").value;
  const mod5 = document.querySelector("#mods5").value;
  const mod6 = document.querySelector("#mods6").value;
  const mod7 = document.querySelector("#mods7").value;
  
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
  if(mod0 !== -1){ //No 3 or 10 currently
    $('.check1').show();
	if(mod0 == 0){
      modsT1 = "GI";
	  $("#body17T1").text("GI:T1");
	  $("#body18T1").text("GI:T1");
    } else if(mod0 == 1){
      modsT1 = "HM";
	  $("#body17T1").text("HM:T1");
	  $("#body18T1").text("HM:T1");
    } else if(mod0 == 2){
      modsT1 = "IB";
	  $("#body17T1").text("IB:T1");
	  $("#body18T1").text("IB:T1");
    } else if(mod0 == 3){
      $('.nope1').show();
	  $('.check1').hide();
    } else if(mod0 == 4){
      modsT1 = "CP";
	  $("#body17T1").text("CP:T1");
	  $("#body18T1").text("CP:T1");
    } else if(mod0 == 5){
      modsT1 = "SB";
	  $("#body17T1").text("SB:T1");
	  $("#body18T1").text("SB:T1");
    } else if(mod0 == 6){
      modsT1 = "EI";
	  $("#body17T1").text("EI:17");
	  $("#body18T1").text("EI:18");
    } else if(mod0 == 7){
      modsT1 = "BH";
	  $("#body17T1").text("BH:T1");
	  $("#body18T1").text("BH:T1");
    } else if(mod0 == 8){
      modsT1 = "FR";
	  $("#body17T1").text("FR:T1");
	  $("#body18T1").text("FR:T1");
    } else if(mod0 == 9){
      modsT1 = "EF";
	  $("#body17T1").text("EF:T1");
	  $("#body18T1").text("EF:T1");
    } else if(mod0 == 10){
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
  if(mod1 !== -1 && mod2 !== -1){
	$('.check2').show();
	if((mod1 == 0 && mod2 == 1) || (mod1 == 1 && mod2 == 0)){
      modsT2 = "BA";
	  $("#body17T2").text("BA:T2");
	  $("#body18T2").text("BA:T2");
    } else if((mod1 == 0 && mod2 == 2) || (mod1 == 2 && mod2 == 0)){
      modsT2 = "IR";
	  $("#body17T2").text("IR:T2");
	  $("#body18T2").text("IR:T2");
    } else if((mod1 == 0 && mod2 == 4) || (mod1 == 4 && mod2 == 0)){
      modsT2 = "PE";
	  $("#body17T2").text("PE:T2");
	  $("#body18T2").text("PE:T2");
    } else if((mod1 == 0 && mod2 == 7) || (mod1 == 7 && mod2 == 0)){
      modsT2 = "BB";
	  $("#body17T2").text("BB:17");
	  $("#body18T2").text("BB:18");
    } else if((mod1 == 1 && mod2 == 3) || (mod1 == 3 && mod2 == 1)){
      modsT2 = "BR";
	  $("#body17T2").text("BR:T2");
	  $("#body18T2").text("BR:T2");
    } else if((mod1 == 1 && mod2 == 5) || (mod1 == 5 && mod2 == 1)){
      modsT2 = "ES";
	  $("#body17T2").text("ES:T2");
	  $("#body18T2").text("ES:T2");
    } else if((mod1 == 1 && mod2 == 7) || (mod1 == 7 && mod2 == 1)){
      modsT2 = "LG";
	  $("#body17T2").text("LG:T2");
	  $("#body18T2").text("LG:T2");
    } else if((mod1 == 1 && mod2 == 10) || (mod1 == 10 && mod2 == 1)){
      modsT2 = "AI";
	  $("#body17T2").text("AI:17");
	  $("#body18T2").text("AI:18");
    } else if((mod1 == 2 && mod2 == 3) || (mod1 == 3 && mod2 == 2)){
      modsT2 = "ER";
	  $("#body17T2").text("ER:17");
	  $("#body18T2").text("ER:18");
    } else if((mod1 == 2 && mod2 == 5) || (mod1 == 5 && mod2 == 2)){
      modsT2 = "AB";
	  $("#body17T2").text("AB:17");
	  $("#body18T2").text("AB:18");
    } else if((mod1 == 2 && mod2 == 9) || (mod1 == 9 && mod2 == 2)){
      modsT2 = "SF";
	  $("#body17T2").text("SF:17");
	  $("#body18T2").text("SF:18");
    } else if((mod1 == 3 && mod2 == 4) || (mod1 == 4 && mod2 == 3)){
      modsT2 = "EE";
	  $("#body17T2").text("EE:T2");
	  $("#body18T2").text("EE:T2");
    } else if((mod1 == 3 && mod2 == 6) || (mod1 == 6 && mod2 == 3)){
      modsT2 = "NR";
	  $("#body17T2").text("NR:17");
	  $("#body18T2").text("NR:18");
    } else if((mod1 == 3 && mod2 == 9) || (mod1 == 9 && mod2 == 3)){
      modsT2 = "DB";
	  $("#body17T2").text("DB:T2");
	  $("#body18T2").text("DB:T2");
    } else if((mod1 == 4 && mod2 == 6) || (mod1 == 6 && mod2 == 4)){
      modsT2 = "HZ";
	  $("#body17T2").text("HZ:T2");
	  $("#body18T2").text("HZ:T2");
    } else if((mod1 == 4 && mod2 == 8) || (mod1 == 8 && mod2 == 4)){
      modsT2 = "SC";
	  $("#body17T2").text("SC:17");
	  $("#body18T2").text("SC:18");
    } else if((mod1 == 5 && mod2 == 8) || (mod1 == 8 && mod2 == 5)){
      modsT2 = "MS";
	  $("#body17T2").text("MS:17");
	  $("#body18T2").text("MS:18");
    } else if((mod1 == 5 && mod2 == 10) || (mod1 == 10 && mod2 == 5)){
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
  if(mod3 !== -1){ //No 3 or 10 currently
    $('.check3').show();
	if(mod3 == 0){
      modsT3 = "GI";
	  $("#body17T3").text("GI:T3");
	  $("#body18T3").text("GI:T3");
    } else if(mod3 == 1){
      modsT3 = "HM";
	  $("#body17T3").text("HM:T3");
	  $("#body18T3").text("HM:T3");
    } else if(mod3 == 2){
      modsT3 = "IB";
	  $("#body17T3").text("IB:T3");
	  $("#body18T3").text("IB:T3");
    } else if(mod3 == 3){
      $('.nope3').show();
	  $('.check3').hide();
    } else if(mod3 == 4){
      modsT3 = "CP";
	  $("#body17T3").text("CP:T3");
	  $("#body18T3").text("CP:T3");
    } else if(mod3 == 5){
      modsT3 = "SB";
	  $("#body17T3").text("SB:T3");
	  $("#body18T3").text("SB:T3");
    } else if(mod3 == 6){
      modsT3 = "EI";
	  $("#body17T3").text("EI:17");
	  $("#body18T3").text("EI:18");
    } else if(mod3 == 7){
      modsT3 = "BH";
	  $("#body17T3").text("BH:T3");
	  $("#body18T3").text("BH:T3");
    } else if(mod3 == 8){
      modsT3 = "FR";
	  $("#body17T3").text("FR:T3");
	  $("#body18T3").text("FR:T3");
    } else if(mod3 == 9){
      modsT3 = "EF";
	  $("#body17T3").text("EF:T3");
	  $("#body18T3").text("EF:T3");
    } else if(mod3 == 10){
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
  if(mod4 !== -1 && mod5 !== -1){
	$('.check4').show();
	if((mod4 == 0 && mod5 == 1) || (mod4 == 1 && mod5 == 0)){
      modsT4 = "BA";
	  $("#body17T4").text("BA:T4");
	  $("#body18T4").text("BA:T4");
    } else if((mod4 == 0 && mod5 == 2) || (mod4 == 2 && mod5 == 0)){
      modsT4 = "IR";
	  $("#body17T4").text("IR:T4");
	  $("#body18T4").text("IR:T4");
    } else if((mod4 == 0 && mod5 == 4) || (mod4 == 4 && mod5 == 0)){
      modsT4 = "PE";
	  $("#body17T4").text("PE:T4");
	  $("#body18T4").text("PE:T4");
    } else if((mod4 == 0 && mod5 == 7) || (mod4 == 7 && mod5 == 0)){
      modsT4 = "BB";
	  $("#body17T4").text("BB:17");
	  $("#body18T4").text("BB:18");
    } else if((mod4 == 1 && mod5 == 3) || (mod4 == 3 && mod5 == 1)){
      modsT4 = "BR";
	  $("#body17T4").text("BR:T4");
	  $("#body18T4").text("BR:T4");
    } else if((mod4 == 1 && mod5 == 5) || (mod4 == 5 && mod5 == 1)){
      modsT4 = "ES";
	  $("#body17T4").text("ES:T4");
	  $("#body18T4").text("ES:T4");
    } else if((mod4 == 1 && mod5 == 7) || (mod4 == 7 && mod5 == 1)){
      modsT4 = "LG";
	  $("#body17T4").text("LG:T4");
	  $("#body18T4").text("LG:T4");
    } else if((mod4 == 1 && mod5 == 10) || (mod4 == 10 && mod5 == 1)){
      modsT4 = "AI";
	  $("#body17T4").text("AI:17");
	  $("#body18T4").text("AI:18");
    } else if((mod4 == 2 && mod5 == 3) || (mod4 == 3 && mod5 == 2)){
      modsT4 = "ER";
	  $("#body17T4").text("ER:17");
	  $("#body18T4").text("ER:18");
    } else if((mod4 == 2 && mod5 == 5) || (mod4 == 5 && mod5 == 2)){
      modsT4 = "AB";
	  $("#body17T4").text("AB:17");
	  $("#body18T4").text("AB:18");
    } else if((mod4 == 2 && mod5 == 9) || (mod4 == 9 && mod5 == 2)){
      modsT4 = "SF";
	  $("#body17T4").text("SF:17");
	  $("#body18T4").text("SF:18");
    } else if((mod4 == 3 && mod5 == 4) || (mod4 == 4 && mod5 == 3)){
      modsT4 = "EE";
	  $("#body17T4").text("EE:T4");
	  $("#body18T4").text("EE:T4");
    } else if((mod4 == 3 && mod5 == 6) || (mod4 == 6 && mod5 == 3)){
      modsT4 = "NR";
	  $("#body17T4").text("NR:17");
	  $("#body18T4").text("NR:18");
    } else if((mod4 == 3 && mod5 == 9) || (mod4 == 9 && mod5 == 3)){
      modsT4 = "DB";
	  $("#body17T4").text("DB:T4");
	  $("#body18T4").text("DB:T4");
    } else if((mod4 == 4 && mod5 == 6) || (mod4 == 6 && mod5 == 4)){
      modsT4 = "HZ";
	  $("#body17T4").text("HZ:T4");
	  $("#body18T4").text("HZ:T4");
    } else if((mod4 == 4 && mod5 == 8) || (mod4 == 8 && mod5 == 4)){
      modsT4 = "SC";
	  $("#body17T4").text("SC:17");
	  $("#body18T4").text("SC:18");
    } else if((mod4 == 5 && mod5 == 8) || (mod4 == 8 && mod5 == 5)){
      modsT4 = "MS";
	  $("#body17T4").text("MS:17");
	  $("#body18T4").text("MS:18");
    } else if((mod4 == 5 && mod5 == 10) || (mod4 == 10 && mod5 == 5)){
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
  if(mod6 !== -1 && mod7 !== -1){
	$('.check5').show();
	if((mod6 == 0 && mod7 == 1) || (mod6 == 1 && mod7 == 0)){
      modsT5 = "BA";
	  $("#body17T5").text("BA:T5");
	  $("#body18T5").text("BA:T5");
    } else if((mod6 == 0 && mod7 == 2) || (mod6 == 2 && mod7 == 0)){
      modsT5 = "IR";
	  $("#body17T5").text("IR:T5");
	  $("#body18T5").text("IR:T5");
    } else if((mod6 == 0 && mod7 == 4) || (mod6 == 4 && mod7 == 0)){
      modsT5 = "PE";
	  $("#body17T5").text("PE:T5");
	  $("#body18T5").text("PE:T5");
    } else if((mod6 == 0 && mod7 == 7) || (mod6 == 7 && mod7 == 0)){
      modsT5 = "BB";
	  $("#body17T5").text("BB:17");
	  $("#body18T5").text("BB:18");
    } else if((mod6 == 1 && mod7 == 3) || (mod6 == 3 && mod7 == 1)){
      modsT5 = "BR";
	  $("#body17T5").text("BR:T5");
	  $("#body18T5").text("BR:T5");
    } else if((mod6 == 1 && mod7 == 5) || (mod6 == 5 && mod7 == 1)){
      modsT5 = "ES";
	  $("#body17T5").text("ES:T5");
	  $("#body18T5").text("ES:T5");
    } else if((mod6 == 1 && mod7 == 7) || (mod6 == 7 && mod7 == 1)){
      modsT5 = "LG";
	  $("#body17T5").text("LG:T5");
	  $("#body18T5").text("LG:T5");
    } else if((mod6 == 1 && mod7 == 10) || (mod6 == 10 && mod7 == 1)){
      modsT5 = "AI";
	  $("#body17T5").text("AI:17");
	  $("#body18T5").text("AI:18");
    } else if((mod6 == 2 && mod7 == 3) || (mod6 == 3 && mod7 == 2)){
      modsT5 = "ER";
	  $("#body17T5").text("ER:17");
	  $("#body18T5").text("ER:18");
    } else if((mod6 == 2 && mod7 == 5) || (mod6 == 5 && mod7 == 2)){
      modsT5 = "AB";
	  $("#body17T5").text("AB:17");
	  $("#body18T5").text("AB:18");
    } else if((mod6 == 2 && mod7 == 9) || (mod6 == 9 && mod7 == 2)){
      modsT5 = "SF";
	  $("#body17T5").text("SF:17");
	  $("#body18T5").text("SF:18");
    } else if((mod6 == 3 && mod7 == 4) || (mod6 == 4 && mod7 == 3)){
      modsT5 = "EE";
	  $("#body17T5").text("EE:T5");
	  $("#body18T5").text("EE:T5");
    } else if((mod6 == 3 && mod7 == 6) || (mod6 == 6 && mod7 == 3)){
      modsT5 = "NR";
	  $("#body17T5").text("NR:17");
	  $("#body18T5").text("NR:18");
    } else if((mod6 == 3 && mod7 == 9) || (mod6 == 9 && mod7 == 3)){
      modsT5 = "DB";
	  $("#body17T5").text("DB:T5");
	  $("#body18T5").text("DB:T5");
    } else if((mod6 == 4 && mod7 == 6) || (mod6 == 6 && mod7 == 4)){
      modsT5 = "HZ";
	  $("#body17T5").text("HZ:T5");
	  $("#body18T5").text("HZ:T5");
    } else if((mod6 == 4 && mod7 == 8) || (mod6 == 8 && mod7 == 4)){
      modsT5 = "SC";
	  $("#body17T5").text("SC:17");
	  $("#body18T5").text("SC:18");
    } else if((mod6 == 5 && mod7 == 8) || (mod6 == 8 && mod7 == 5)){
      modsT5 = "MS";
	  $("#body17T5").text("MS:17");
	  $("#body18T5").text("MS:18");
    } else if((mod6 == 5 && mod7 == 10) || (mod6 == 10 && mod7 == 5)){
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
  
  
  
  console.log(modsT1);
  console.log(modsT2);
  console.log(modsT3);
  console.log(modsT4);
  console.log(modsT5);

  return false;
};

// function to show the currently used mods
const showActiveMods = () => {
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
  if(modsT1 !== ""){
	if(modsT1 == "GI"){
	  $("#body17T1").text("GI:T1");
	  $("#body18T1").text("GI:T1");
    } else if(modsT1 == "HM"){
	  $("#body17T1").text("HM:T1");
	  $("#body18T1").text("HM:T1");
    } else if(modsT1 == "IB"){
	  $("#body17T1").text("IB:T1");
	  $("#body18T1").text("IB:T1");
    } else if(modsT1 == "CP"){
	  $("#body17T1").text("CP:T1");
	  $("#body18T1").text("CP:T1");
    } else if(modsT1 == "SB"){
	  $("#body17T1").text("SB:T1");
	  $("#body18T1").text("SB:T1");
    } else if(modsT1 == "EI"){
	  $("#body17T1").text("EI:17");
	  $("#body18T1").text("EI:18");
    } else if(modsT1 == "BH"){
	  $("#body17T1").text("BH:T1");
	  $("#body18T1").text("BH:T1");
    } else if(modsT1 == "FR"){
	  $("#body17T1").text("FR:T1");
	  $("#body18T1").text("FR:T1");
    } else if(modsT1 == "EF"){
	  $("#body17T1").text("EF:T1");
	  $("#body18T1").text("EF:T1");
    } else if(modsT1 == "CF"){
	  $("#body17T1").text("CF:T1");
	  $("#body18T1").text("CF:T1");
    }
  }
  
  //Tier 2
  if(modsT2 !== ""){
	if( modsT2 == "BA"){
	  $("#body17T2").text("BA:T2");
	  $("#body18T2").text("BA:T2");
    } else if(modsT2 == "IR"){
	  $("#body17T2").text("IR:T2");
	  $("#body18T2").text("IR:T2");
    } else if(modsT2 == "PE"){
	  $("#body17T2").text("PE:T2");
	  $("#body18T2").text("PE:T2");
    } else if(modsT2 == "BB"){
	  $("#body17T2").text("BB:17");
	  $("#body18T2").text("BB:18");
    } else if(modsT2 == "BR"){
	  $("#body17T2").text("BR:T2");
	  $("#body18T2").text("BR:T2");
    } else if(modsT2 == "ES"){
	  $("#body17T2").text("ES:T2");
	  $("#body18T2").text("ES:T2");
    } else if(modsT2 == "LG"){
	  $("#body17T2").text("LG:T2");
	  $("#body18T2").text("LG:T2");
    } else if(modsT2 == "AI"){
	  $("#body17T2").text("AI:17");
	  $("#body18T2").text("AI:18");
    } else if(modsT2 == "ER"){
	  $("#body17T2").text("ER:17");
	  $("#body18T2").text("ER:18");
    } else if(modsT2 == "AB"){
	  $("#body17T2").text("AB:17");
	  $("#body18T2").text("AB:18");
    } else if(modsT2 == "SF"){
	  $("#body17T2").text("SF:17");
	  $("#body18T2").text("SF:18");
    } else if(modsT2 == "EE"){
	  $("#body17T2").text("EE:T2");
	  $("#body18T2").text("EE:T2");
    } else if(modsT2 == "NR"){
	  $("#body17T2").text("NR:17");
	  $("#body18T2").text("NR:18");
    } else if(modsT2 == "DB"){
	  $("#body17T2").text("DB:T2");
	  $("#body18T2").text("DB:T2");
    } else if(modsT2 == "HZ"){
	  $("#body17T2").text("HZ:T2");
	  $("#body18T2").text("HZ:T2");
    } else if(modsT2 == "SC"){
	  $("#body17T2").text("SC:17");
	  $("#body18T2").text("SC:18");
    } else if(modsT2 == "MS"){
	  $("#body17T2").text("MS:17");
	  $("#body18T2").text("MS:18");
    } else if(modsT2 == "DD"){
	  $("#body17T2").text("DD:17");
	  $("#body18T2").text("DD:18");
    }
  }
  
  //Tier 3
  if(modsT3 !== ""){
	if(modsT3 == "GI"){
	  $("#body17T3").text("GI:T3");
	  $("#body18T3").text("GI:T3");
    } else if(modsT3 == "HM"){
	  $("#body17T3").text("HM:T3");
	  $("#body18T3").text("HM:T3");
    } else if(modsT3 == "IB"){
	  $("#body17T3").text("IB:T3");
	  $("#body18T3").text("IB:T3");
    } else if(modsT3 == "CP"){
	  $("#body17T3").text("CP:T3");
	  $("#body18T3").text("CP:T3");
    } else if(modsT3 == "SB"){
	  $("#body17T3").text("SB:T3");
	  $("#body18T3").text("SB:T3");
    } else if(modsT3 == "EI"){
	  $("#body17T3").text("EI:17");
	  $("#body18T3").text("EI:18");
    } else if(modsT3 == "BH"){
	  $("#body17T3").text("BH:T3");
	  $("#body18T3").text("BH:T3");
    } else if(modsT3 == "FR"){
	  $("#body17T3").text("FR:T3");
	  $("#body18T3").text("FR:T3");
    } else if(modsT3 == "EF"){
	  $("#body17T3").text("EF:T3");
	  $("#body18T3").text("EF:T3");
    } else if(modsT3 == "CF"){
	  $("#body17T3").text("CF:T3");
	  $("#body18T3").text("CF:T3");
    }
  }
  
  //Tier 4
  if(modsT4 !== ""){
	if( modsT4 == "BA"){
	  $("#body17T4").text("BA:T4");
	  $("#body18T4").text("BA:T4");
    } else if(modsT4 == "IR"){
	  $("#body17T4").text("IR:T4");
	  $("#body18T4").text("IR:T4");
    } else if(modsT4 == "PE"){
	  $("#body17T4").text("PE:T4");
	  $("#body18T4").text("PE:T4");
    } else if(modsT4 == "BB"){
	  $("#body17T4").text("BB:17");
	  $("#body18T4").text("BB:18");
    } else if(modsT4 == "BR"){
	  $("#body17T4").text("BR:T4");
	  $("#body18T4").text("BR:T4");
    } else if(modsT4 == "ES"){
	  $("#body17T4").text("ES:T4");
	  $("#body18T4").text("ES:T4");
    } else if(modsT4 == "LG"){
	  $("#body17T4").text("LG:T4");
	  $("#body18T4").text("LG:T4");
    } else if(modsT4 == "AI"){
	  $("#body17T4").text("AI:17");
	  $("#body18T4").text("AI:18");
    } else if(modsT4 == "ER"){
	  $("#body17T4").text("ER:17");
	  $("#body18T4").text("ER:18");
    } else if(modsT4 == "AB"){
	  $("#body17T4").text("AB:17");
	  $("#body18T4").text("AB:18");
    } else if(modsT4 == "SF"){
	  $("#body17T4").text("SF:17");
	  $("#body18T4").text("SF:18");
    } else if(modsT4 == "EE"){
	  $("#body17T4").text("EE:T4");
	  $("#body18T4").text("EE:T4");
    } else if(modsT4 == "NR"){
	  $("#body17T4").text("NR:17");
	  $("#body18T4").text("NR:18");
    } else if(modsT4 == "DB"){
	  $("#body17T4").text("DB:T4");
	  $("#body18T4").text("DB:T4");
    } else if(modsT4 == "HZ"){
	  $("#body17T4").text("HZ:T4");
	  $("#body18T4").text("HZ:T4");
    } else if(modsT4 == "SC"){
	  $("#body17T4").text("SC:17");
	  $("#body18T4").text("SC:18");
    } else if(modsT4 == "MS"){
	  $("#body17T4").text("MS:17");
	  $("#body18T4").text("MS:18");
    } else if(modsT4 == "DD"){
	  $("#body17T4").text("DD:17");
	  $("#body18T4").text("DD:18");
    }
  }
  
  //Tier 5
  if(modsT5 !== ""){
	if( modsT5 == "BA"){
	  $("#body17T5").text("BA:T5");
	  $("#body18T5").text("BA:T5");
    } else if(modsT5 == "IR"){
	  $("#body17T5").text("IR:T5");
	  $("#body18T5").text("IR:T5");
    } else if(modsT5 == "PE"){
	  $("#body17T5").text("PE:T5");
	  $("#body18T5").text("PE:T5");
    } else if(modsT5 == "BB"){
	  $("#body17T5").text("BB:17");
	  $("#body18T5").text("BB:18");
    } else if(modsT5 == "BR"){
	  $("#body17T5").text("BR:T5");
	  $("#body18T5").text("BR:T5");
    } else if(modsT5 == "ES"){
	  $("#body17T5").text("ES:T5");
	  $("#body18T5").text("ES:T5");
    } else if(modsT5 == "LG"){
	  $("#body17T5").text("LG:T5");
	  $("#body18T5").text("LG:T5");
    } else if(modsT5 == "AI"){
	  $("#body17T5").text("AI:17");
	  $("#body18T5").text("AI:18");
    } else if(modsT5 == "ER"){
	  $("#body17T5").text("ER:17");
	  $("#body18T5").text("ER:18");
    } else if(modsT5 == "AB"){
	  $("#body17T5").text("AB:17");
	  $("#body18T5").text("AB:18");
    } else if(modsT5 == "SF"){
	  $("#body17T5").text("SF:17");
	  $("#body18T5").text("SF:18");
    } else if(modsT5 == "EE"){
	  $("#body17T5").text("EE:T5");
	  $("#body18T5").text("EE:T5");
    } else if(modsT5 == "NR"){
	  $("#body17T5").text("NR:17");
	  $("#body18T5").text("NR:18");
    } else if(modsT5 == "DB"){
	  $("#body17T5").text("DB:T5");
	  $("#body18T5").text("DB:T5");
    } else if(modsT5 == "HZ"){
	  $("#body17T5").text("HZ:T5");
	  $("#body18T5").text("HZ:T5");
    } else if(modsT5 == "SC"){
	  $("#body17T5").text("SC:17");
	  $("#body18T5").text("SC:18");
    } else if(modsT5 == "MS"){
	  $("#body17T5").text("MS:17");
	  $("#body18T5").text("MS:18");
    } else if(modsT5 == "DD"){
	  $("#body17T5").text("DD:17");
	  $("#body18T5").text("DD:18");
    }
  }
  
  
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
  
  
  console.log(modsT1);
  console.log(modsT2);
  console.log(modsT3);
  console.log(modsT4);
  console.log(modsT5);

  return false;
}; 

// function to set and display the names and info of mod abilities
const displayInfo = function(type){
  app.main.sound.playEffect(68);
  let info = "";

  // figure out which tier
  if(type === "T1"){
	info = modsT1;
  } else if(type === "T2"){
	info = modsT2;
  } else if(type === "T3"){
	info = modsT3;
  } else if(type === "T4"){
	info = modsT4;
  } else if(type === "T5"){
	info = modsT5;
  }
  
  if(info === "GI"){
	$("#nameData").text("Greater Intensity");
    $("#contentData").text("BOTH -- All blasts push with much greater force");
	$("#contentData2").text("");
  }
  if(info === "HM"){
	$("#nameData").text("Hasty Movement");
    $("#contentData").text("BOTH -- Overload max movement speeds");
	$("#contentData2").text("");
  }
  if(info === "IB"){
	$("#nameData").text("Iron Block");
    $("#contentData").text("BOTH -- Blocking will now withstand normal blasts at a fatigue cost.");
	$("#contentData2").text("");
  }
  if(info === "CP"){
	$("#nameData").text("Crafty Points");
    $("#contentData").text("BOTH -- All blows are more precise.  Awarding more points for suffering.");
	$("#contentData2").text("");
  }
  if(info === "SB"){
	$("#nameData").text("Scalding Blasts");
    $("#contentData").text("BOTH -- Blasts are much hotter with longer lasting blast burn effects.");
	$("#contentData2").text("");
  }
  if(info === "EI"){
	$("#nameData").text("Endurance Improved");
    $("#contentData").text("UNIT 18 -- Data enhanced ability to recover endurance a bit faster.");
	$("#contentData2").text("UNIT 17 -- Will join the fight more willingly when called");
  }
  if(info === "BH"){
	$("#nameData").text("Blast Haste");
    $("#contentData").text("BOTH -- Data enhanced ability to faster fire normal blasts.");
	$("#contentData2").text("");
  }
  if(info === "FR"){
	$("#nameData").text("Fatigue Resist");
    $("#contentData").text("BOTH -- Data enhanced ability to reduce faigue at a bit faster rate.");
	$("#contentData2").text("");
  }
  if(info === "EF"){
	$("#nameData").text("Energy Flow");
    $("#contentData").text("BOTH -- Data enhanced ability to generate energy reserve more efficiently.");
	$("#contentData2").text("");
  }
  if(info === "CF"){
	$("#nameData").text("Calculated Flaw");
    $("#contentData").text("BOTH -- Data induced systems change renders both original powerful energy attacks no longer functional.");
	$("#contentData2").text("");
  }
  if(info === "BA"){
	$("#nameData").text("Boost Acceleration");
    $("#contentData").text("BOTH -- Quickly accelerate to top speeds.");
	$("#contentData2").text("");
  }
  if(info === "IR"){
	$("#nameData").text("Impact Recovery");
    $("#contentData").text("BOTH -- Systems recover from stun more quickly.");
	$("#contentData2").text("");
  }
  if(info === "PE"){
	$("#nameData").text("Power Efficiency");
    $("#contentData").text("BOTH -- All attacks generate less fatigue.");
	$("#contentData2").text("");
  }
  if(info === "BB"){
	$("#nameData").text("Big Bang");
    $("#contentData").text("UNIT 18 -- Replicate Vegeta's Big Bang attack as part of powerful energy attacks.");
	$("#contentData2").text("UNIT 17 -- Data induced increase of Units Power Blitz Damage and Impact.");
  }
  if(info === "BR"){
	$("#nameData").text("Blast Recovery");
    $("#contentData").text("BOTH: Ability to move again quickly after firing off a powerful energy attack.");
	$("#contentData2").text("");
  }
  if(info === "ES"){
	$("#nameData").text("Extreme Speed");
    $("#contentData").text("BOTH -- Leave a super speed state much faster.");
	$("#contentData2").text("");
  }
  if(info === "LG"){
	$("#nameData").text("Lucora Gun");
    $("#contentData").text("BOTH -- Replicate Vegeta's rapid barrage of low energy cost seeking blasts as part of powerful energy attacks.");
	$("#contentData2").text("");
  }
  if(info === "AI"){
	$("#nameData").text("After Image");
    $("#contentData").text("UNIT 18 -- Create a false image while in super speed state that can be a distraction.");
	$("#contentData2").text("UNIT 17 -- Fire 2 Power Blitz attacks in quick succession.");
  }
  if(info === "ER"){
	$("#nameData").text("Energy Resilience");
    $("#contentData").text("UNIT 18 -- Blast burn effect against this unit is reduced greatly.");
	$("#contentData2").text("UNIT 17 -- Reduced impact by hits from energy attacks");
  }
  if(info === "AB"){
	$("#nameData").text("Android Barrier");
    $("#contentData").text("UNIT 18 -- Greatly Reduce energy drain from the android barrier.");
	$("#contentData2").text("UNIT 17 -- May protect 18 from incoming powerful energy attacks when spectating");
  }
  if(info === "SF"){
	$("#nameData").text("Solar Flare");
    $("#contentData").text("UNIT 18 -- Replicate Tien's Solar Flare technique to blind the target as part of powerful energy attacks -- Must be high up to activate and facing target.");
	$("#contentData2").text("UNIT 17 -- May join the fight when spectating and facing an allied Solar Flare");
  }
  if(info === "EE"){
	$("#nameData").text("Energy Efficiency");
    $("#contentData").text("BOTH -- All attacks cost less energy.");
	$("#contentData2").text("");
  }
  if(info === "NR"){
	$("#nameData").text("Namekian Regen");
    $("#contentData").text("UNIT 18 -- Mildly Replicate Piccolo's generation allowing for health to very slowly regenerate.");
	$("#contentData2").text("UNIT 17 -- Will attack for longer intervals than usual");
  }
  if(info === "DB"){
	$("#nameData").text("Double Beam");
    $("#contentData").text("BOTH -- Fire 2 concentrated beam energy attacks in quick succession every time with no addional energy cost.");
	$("#contentData2").text("");
  }
  if(info === "HZ"){
	$("#nameData").text("Hell Zone Mines");
    $("#contentData").text("BOTH -- Replicate Piccolo's ability to have alternating normal energy blasts remain as air mines.");
	$("#contentData2").text("");
  }
  if(info === "SC"){
	$("#nameData").text("Super Charge");
    $("#contentData").text("UNIT 18 -- While taunting an opponent systems will recharge energy much faster.");
	$("#contentData2").text("UNIT 17 -- Extra energy is spent firing off powerful energy attacks while spectating");
  }
  if(info === "MS"){
	$("#nameData").text("Mesenko");
    $("#contentData").text("UNIT 18 -- Replicate Gohan's mesenko technique as part of powerful energy attacks.");
	$("#contentData2").text("UNIT 17 -- Data incuded improvement of Power Blitz homing ability");
  }
  if(info === "DD"){
	$("#nameData").text("Destructo Disk");
    $("#contentData").text("UNIT 18 -- Replicate Krillin's slow but killer Destructo Disk technique as part of powerful energy attacks.");
	$("#contentData2").text("UNIT 17 -- Data induced blast accuracy preventing blasts from hitting an ally");
  }

};



// acitve mod variables
let modsT1 = "";
let modsT2 = "";
let modsT3 = "";
let modsT4 = "";
let modsT5 = "";



