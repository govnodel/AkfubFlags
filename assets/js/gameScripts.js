var repeat = [];
var right = [];
var winPos;
var winName;
var interval;
var start = true;
var seconds = 10;
var lives = 3;
var counter = 0;

window.onload = function (){
  startGame();
}

function startGame(){
  setRegimeText();
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
  if (document.getElementById("regime").textContent.split("|")[0] == "MODERN") {
    winName = names[numbers[winPos]];
  } else {
    winName = names[numbers[winPos]].slice(0, names[numbers[winPos]].length - 1);
  }

  let dat = dates[numbers[winPos]];
  let popNum = pops[numbers[winPos]].slice(0, pops[numbers[winPos]].length - 3);
  if (popNum.length > 3){
    if (popNum.length > 6){
      popNum = popNum.slice(0, 1) + " " + popNum.slice(1, popNum.length - 3) + " " + popNum.slice(popNum.length - 3);
    } else {
      popNum = popNum.slice(0, popNum.length - 3) + " " + popNum.slice(popNum.length - 3);
    }
  }

  $("#country").text(winName);
  $("#dat").text(dat);
  $("#pop").text(popNum + "k");
  $("#cap, #cap1").text(capitals[numbers[winPos]]);
}

function passSec(){
  seconds--;
  document.getElementById("timer_sec").setAttributeNS(null, 'x', 36);
  $("#timer_sec").text(seconds);
  if(seconds > 111){
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
    refresh(true);
  } else {
    refresh(false);
  }
}

function setRegimeText() {
  let res = document.getElementById("regime").textContent.split("|")[0];

  res += "|";
  res += "LVL" + diff;

  document.getElementById("regime").textContent = res;
}

function stat(flag){
  let stats;
  if (flag) {
    let rightStr = '';
    for (var i = 0; i < right.length; i++) {
      rightStr += ':' + right[i];
    }

    if (lives <= 0) {
      stats = '0'
    } else {
      stats = '1'
    }
    stats += ":" + counter + ":" + (3 - lives) + rightStr;
  }

  if (!flag) {
    for (var i = 0; i < repeat.length; i++) {
      stats += ":" + repeat[i];
    }
    stats.substring(1, stats.length);
  }

  return stats;
}

function refresh(flag){
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

  $("#circle").animate({
    opacity: 0
  }, 300);

  setTimeout(function(){
    $("#flag0, #flag1, #flag2, #flag3, #timer_sec, #country, #pop, #cap").animate({
      opacity: 0
    }, 300);
    setTimeout(function(){
      if (flag) {
        repeat[repeat.length] = winName;
        $("#upblock, #vsyapoloska").animate({
          marginTop: "-17vh"
        }, 400, function(){
          document.cookie = "statsInFlags=" + encodeURIComponent(stat(true)) + "; path=/";
          document.cookie = "answeredInFlags=" + encodeURIComponent(stat(false)) + "; path=/";
          window.location.href = "stats.php";
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
    $("#flag0, #flag1, #flag2, #flag3, #timer_sec, #country, #pop, #cap").animate({
      opacity: 1
    }, 500);
    setTimeout(function(){
      for(let i = 0; i < 4; i++){
        $("#flag" + i).bind("click", clickFlag);
      }
      let circleEl = document.getElementById("circle");
      if(circleEl.style.animationName == "timer2"){
        circleEl.style.animation = "timer 11s linear forwards";
      } else {
        circleEl.style.animation = "timer2 11s linear forwards";
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
