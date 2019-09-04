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
var seconds = 10;
var lives = 3;
var counter = 0;

start();

function start(){
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

  for(let i = 0; i < 4; i++){//rename flags' id
    $("#flag" + i).bind("click", clickFlag);
    $("#flag" + i).attr("src", "assets/images/flags/" + names[numbers[i]].replace(/ /g, "_") + ".png");
  }

  winPos = Math.round(Math.random() * 3);
  winName = names[numbers[winPos]];

  $("#country").text(winName);
}

function passSec(){//win
  seconds--;
  if(seconds < 0){
    lifeDecrease();
    if((false) || (life <= 0)){
      exit();
    }
  }
  $("timer_sec").text(seconds);
}

function lifeDecrease(){//rename lifes to lives
  lives--;
  let life = document.getElementById("lives").childNodes[lives * 2 + 1];
  life.style.animation = "life" + (lives + 1) + " 1s linear forwards";
}

function exit(){
  stat();
  refresh(true);
}

function refresh(exit){//rename krug and exit
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
  }, 800);

  if (exit) {
    window.location.href = "fggg";
  } else {
    nonExit();
  }
}

function nonExit(){
  counter++;
  seconds = 10;
  repeat[repeat.length] = winName;

  let circleEl = document.getElementById("circle");
  if(circleEl.style.animationName == "timer2"){
    circleEl.style.animation = "timer 10s linear forwards";
  } else {
    circleEl.style.animation = "timer2 10s linear forwards";
  }

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

  $("timer_sec").text(seconds);

  setTimeout(function(){
    $("#flag0, #flag1, #flag2, #flag3, #timer_sec, #country").animate({
      opacity: 1
    }, 300, function(){
      $('#progressBar').animate({
        width: generalCounter * 10 + "%"
      }, 500);
    });
  }, 1200);

  // clearInterval(interval);
  // interval = setInterval(oneSec, 1000);
}

function clickFlag(){

}
