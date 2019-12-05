//make stat

var repeat = [];
var right = [];
var winPos;
var winName;
var interval;
var start = true;
var seconds = 10;
var lives = 3;
var counter = 0;

startGame();

function startGame(){
  document.getElementById("timer_sec").setAttributeNS(null, 'x', 30);
  setFlags();
  $("body *:not(#upblock)").animate({
    opacity: 1
  }, 300, function(){
    if(start){
      for(let i = 0; i < 4; i++){
        $("#flag" + i).bind("click", clickFlag);
      }
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
    $("#flag" + i).attr("src", "assets/images/flags/" + names[numbers[i]].replace(/ /g, "_") + ".png");
  }

  winPos = Math.round(Math.random() * 3);
  winName = names[numbers[winPos]];

  $("#country").text(winName);
}

function passSec(){
  seconds--;
  document.getElementById("timer_sec").setAttributeNS(null, 'x', 36);
  $("#timer_sec").text(seconds);
  if(seconds > 100){
    liveDecrease();
  }
}

function liveDecrease(){
  lives--;
  let live = document.getElementById("lives").childNodes[lives * 2 + 1];
  live.style.animation = "live" + (lives + 1) + " 1s linear forwards";

  checkEnd();
}

function checkEnd(){
  if((counter >= 9) || (lives <= 0)){
    refresh(true, stat());
  } else {
    refresh(false, "");
  }
}

function stat(){
  let stats;
  let rightStr = '';
  for (var i = 0; i < right.length; i++) {
    rightStr += ':' + right[i];
  }

  if (lives <= 0) {
    stats = '0'
  } else {
    stats = '1'
  }
  stats += ":" + (counter + 1) + ":" + (3 - lives) + rightStr + ":#";

  for (var i = 0; i < repeat.length; i++) {
    stats += ":" + repeat[i];
  }

  return stats;
}

function refresh(flag, stats){
  clearInterval(interval);

  counter++;
  $('#progressBar').animate({
    width: counter * 10 + "%"
  }, 500);

  for (var i = 0; i < 4; i++) {
    if (i != winPos) {
      $('#flag' + i).animate({
        opacity: 0.2
      }, 300);
    }
    $('#flag' + i).unbind();
  }

  setTimeout(function(){
    $("#flag0, #flag1, #flag2, #flag3, #timer_sec, #country, #circle").animate({
      opacity: 0
    }, 300);
    setTimeout(function(){
      if (flag) {
        repeat[repeat.length] = winName;
        alert(repeat.length);
        $("#upblock, #vsyapoloska").animate({
          marginTop: "-17vh"
        }, 400, function(){
          document.cookie = "statsInFlags=" + encodeURIComponent(stats) + "; path=/";
          window.location.href = "winornot.php";
        });
      } else {
        nonExit();
      }
    }, 600)
  }, 900);
}

function nonExit(){
  seconds = 10;
  repeat[repeat.length] = winName;

  document.getElementById("timer_sec").setAttributeNS(null, 'x', 30);
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
    setTimeout(function(){
      for(let i = 0; i < 4; i++){
        $("#flag" + i).bind("click", clickFlag);
      }
      let circleEl = document.getElementById("circle");
      if(circleEl.style.animationName == "timer2"){
        circleEl.style.animation = "timer 10s linear forwards";
      } else {
        circleEl.style.animation = "timer2 10s linear forwards";
      }
      $("#circle").animate({
        opacity: 1
      }, 320);
      interval = setInterval(passSec, 1000);
    }, 500);
  }, 100);
}

function clickFlag(){
  if(this.id != ("flag" + winPos)){
    liveDecrease();
  } else {
    right[right.length] = winName;
    checkEnd();
  }
}
