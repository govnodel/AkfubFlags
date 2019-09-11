//fill flags first time
    //1) choose 4 random flags from list
    //2) set random position
    //3) set name of country
    //4) add event listeners
    //5) set timer
//set all elements' opacity to 1
//start timer
//waiting clicks ========================
//check answer
    //1) right or not?
    //2) final or not?
        //exit if lose
//refresh
//waiting timer ========================
//decrease lives
//check final or not?
    //exit if lose
//refresh
var repeat = [];
var winPos;
var winName;
var interval;
var start = true;
var seconds = 9;
var lives = 3;
var counter = 0;

startGame();

function startGame(){
  setFlags();
  $("body *:not(#upblock)").animate({
    opacity: 1
  }, 300, function(){
    if(start){
      interval = setInterval(passSec, 1000);
      start = false;
    }
  });
}

function setFlags(){
  let numbers = [];
  for (let i = 0; i < 4; i++){
    numbers[i] = Math.round(Math.random() * (names.length - 1));
    for (let j = 0; j < numbers.length; j++) {
      if(i == j){
        continue;
      } else {
        if(numbers[i] == numbers[j]){
          i--;
          break;
        }
      }
    }
  }

  for(let i = 0; i < 4; i++){
    $("#flag" + i).bind("click", clickFlag);
    $("#flag" + i).attr("src", "assets/images/flags/" + names[numbers[i]].replace(/ /g, "_") + ".png");
  }

  winPos = Math.round(Math.random() * 3);
  winName = names[numbers[winPos]];

  $("#country").text(winName);
}

function passSec(){//win
  seconds--;
  $("#timer_sec").text(seconds);
  if(seconds == 0){
    liveDecrease();
    if((false) || (lives <= 0)){
      exit();
    } else {
      refresh(false);
    }
  }
}

function liveDecrease(){
  lives--;
  let live = document.getElementById("lives").childNodes[lives * 2 + 1];
  live.style.animation = "live" + (lives + 1) + " 1s linear forwards";
}

function exit(){
  stat();
  refresh(true);
}

function stat(){

}

function refresh(exit){//rename krug
  clearInterval(interval);
  for (var i = 0; i < 4; i++) {
    if (i != winPos) {
      $('#flag' + i).animate({
        opacity: 0.2
      }, 300);
    }
    $('#flag' + i).unbind();
  }

  setTimeout(function(){
    $("#flag0, #flag1, #flag2, #flag3, #timer_sec, #country").animate({
      opacity: 0
    }, 300);
    setTimeout(function(){
      if (exit) {
        window.location.href = "fggg";
      } else {
        nonExit();
      }
    }, 600)
  }, 1300);
}

function nonExit(){
  counter++;
  seconds = 10;
  repeat[repeat.length] = winName;

  $("#timer_sec").text(seconds);

  let endFlag = true;
  do {
    setFlags();
    for (var i = 0; i < repeat.length; i++) {
      if (winName == repeat[i]) {
        break;
      } else {
        if (i == repeat.length - 1) {
          endFlag = false;
        }
      }
    }
  } while (endFlag);

  setTimeout(function(){
    $("#flag0, #flag1, #flag2, #flag3, #timer_sec, #country").animate({
      opacity: 1
    }, 500);
    $('#progressBar').animate({
      width: counter * 10 + "%"
    }, 500, function(){
      let circleEl = document.getElementById("krug");
      if(circleEl.style.animationName == "timer2"){
        circleEl.style.animation = "timer 10s linear forwards";
      } else {
        circleEl.style.animation = "timer2 10s linear forwards";
      }

      interval = setInterval(passSec, 1000);
    });
  }, 400);
}

function clickFlag(){

}
