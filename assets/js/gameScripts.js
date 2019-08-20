//<==========================================<метод main>============================================>
var winCounter = 0; //<-- количество правильных ответов
var generalCounter = 0; //<-- счётчик попыток
var maxWin = 10; //<-- сколько нужно ответить
var life = 3; //<-- количество попыток
var timer = 10; //<-- время, за которое нужно ответить
var winPosition;
var winName;
var anima = false;
var repeat = ["first"];
var elCirc = document.getElementById("krug");
var lifesEl = document.getElementById("lifes").childNodes;
var nameEl = document.getElementById("country"); //<-- элемент названия флага
var flagsFinal = []; //<-- массив с именами флагов, которые будут в итоге
var flagsEl = []; //<-- массив с элементами флагов
var arrayWithPos;
var running = true;
var flagLoad1 = false;
var flagLoad2 = false;
var flagLoad3 = false;
var flagLoad4 = false;
var first = true;
autoFill();//<-- заполнение
dom();
setTimeout(function(){
  var interval = setInterval(oneSec, 1000);
}, 300);
$("body *:not(#upblock)").animate({
  opacity: 1
}, 300, function(){

});
//<==================================================================================================>

$("#_1").on('load', function(){flagLoad1 = true; checkImages()});
$("#_2").on('load', function(){flagLoad2 = true; checkImages()});
$("#_3").on('load', function(){flagLoad3 = true; checkImages()});
$("#_4").on('load', function(){flagLoad4 = true; checkImages()});


function autoFill(){
  arrayWithPos = Randomizer(4, names.length - 1, 0);
  for(var i = 0; i < arrayWithPos.length; i++){
    flagsFinal[i] = names[arrayWithPos[i]];
  }
  winPosition = Math.round(Math.random() * (4 - 1) + 1);
  winName = flagsFinal[winPosition - 1];
}


function clickFlag(){
  if(this.id == ("_" + winPosition)){ //верный ответ
    winCounter++;
  } else lifeMinus(); //неверный ответ
  first = false;
  running = false;
  flagsHide();
  setTimeout(animationRem, 800, false);
  setTimeout(refresh, 1200);
  loseornot();
}


function oneSec(){
  timer--;
  if((timer == 11)&&(running)){
    lifeMinus();
    flagsHide();
    setTimeout(animationRem, 800, false);
    setTimeout(refresh, 1200);
    loseornot();
  }
  document.getElementById("timer_sec").textContent = timer;
}


function Randomizer(count, max, min){
  var numbers = [];
  for(var i = 0; i < count; i++){
    numbers[i] = Math.round(Math.random() * (max - min) + min);
    for (var j = 0; j < numbers.length; j++) {
      if(i == j){
        continue;
      } else {
        if(numbers[i] == numbers[j]){
          i--;
          break;
        }}}}
  return numbers;
}


function checkRep(){
  for (var i = 0; i < repeat.length; i++) {
    if(flagsFinal[winPosition-1] == repeat[i]){
      autoFill();
      i = -1;
    }
  }
}


function dom(){
  nameEl.textContent = winName;
  for(var i = 0; i < 4; i++){
    flagsEl[i] = document.getElementById("_" + (i + 1));
    flagsEl[i].addEventListener("click",clickFlag);
    flagsEl[i].src = "assets/images/flags/" + flagsFinal[i].replace(/ /g, "_") + ".png";
  }
}


function repAnim(){
  if(anima){
    elCirc.style.animation = "timer 10s linear forwards";
  } else {
    elCirc.style.animation = "timer2 10s linear forwards";
  }
  anima = !anima;
}


function refresh(){
  generalCounter++;
  timer = 10;
  running = true;
  repeat[repeat.length] = winName;
  repAnim();
  autoFill();//<-- повторное заполнение
  checkRep();
  dom();
  clearInterval(interval);
  document.getElementById("timer_sec").textContent = timer;
  alert("hi1");
  interval = setInterval(oneSec, 1000);
  alert("hi2");
  progressBar();
}


function loseornot(){ // всё ответил или проиграл
  if((generalCounter == maxWin - 1) || (life < 1)){
    animationRem(false);
    setTimeout(transition, 400);
    function transition(){
      if(life < 1){
        stat(false);
      } else {
        stat(true);
      }
      window.location.href = "winornot.php?stat=" + str;
    }
  }
}


function animationRem(bool){//если true, то появляется, иначе пропадает
  if(bool){
    document.getElementById("timer_sec").style.animation = "flagApp 0.3s linear forwards";
    nameEl.style.animation = "flagApp 0.3s linear forwards";
    flagsEl.forEach(function(element){
      element.addEventListener("click",clickFlag);
      element.style.animation = "flagApp 0.3s linear forwards";
    });
  } else{
    document.getElementById("timer_sec").style.animation = "Rem 0.3s linear forwards";
    nameEl.style.animation = "Rem 0.3s linear forwards";
    flagsEl.forEach(function(element){
      element.removeEventListener("click",clickFlag);
      element.style.animation = "flagRem 0.3s linear forwards";
    });
  }
}

function lifeMinus(){
  life--;
  switch (life) {
    case 2:
      lifesEl[5].style.animation = "life3 1s linear forwards";
      break;
    case 1:
      lifesEl[3].style.animation = "life2 1s linear forwards";
      break;
    case 0:
      lifesEl[1].style.animation = "life 1s linear forwards";
      break;
  }
}


function flagsHide(){
  flagsEl.forEach(function(element){
    if(element.id != ("_" + winPosition)){
      element.removeEventListener("click",clickFlag);
      element.style.animation = "flagHide 0.3s linear forwards";
    }
  });
}


function stat(qWin){//количество правильных, количество сыгранных игр и побед
  str = winCounter + "";
  if (qWin){
    str = str + "I1";
  } else {
    str = str + "I0";
  }
}


function checkImages(){
  if((flagLoad1) && (flagLoad2) && (flagLoad3) && (flagLoad4) && (!first)){
    flagLoad1 = false;
    flagLoad2 = false;
    flagLoad3 = false;
    flagLoad4 = false;
    animationRem(true);
  }
}


function progressBar(){
  alert("hi");
  $('#whitepoloska').animate({
    width: generalCounter * 10 + "%"
  }, 500);
}
