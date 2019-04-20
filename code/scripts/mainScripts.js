/*
@как по мне ваня страдает хернёй
@ага, возможно
 я тут сижу и вдруг слышу, как гуси летят... или утки, хуй его знает
*/

/* Список задач:
    1) оптимизировать dataBase
    2) добавить категории по континентам эпохам
    3) добавить таймер (timeBar) <-- остался только Bar
*/

//<==========================================<метод main>============================================>
var winPosition;
var winName;
var winCounter = 0; //<-- количество правильных ответов
var generalCounter = 0; //<-- счётчик попыток
var maxWin = 50; //<-- количество попыток
var repeat = ["first"];
//---нужно сократить---
var flagsFinal = []; //<-- массив с флагами, которые будут в итоге
var flagsFinalNames = []; //<-- массив с именами флагов, которые будут в итоге
var flagsName; //<-- массив с именами флагов
var flagsLink; //<-- массив с ссылками на флаги
var arrayWithPos;
flagsLink = window.links;
flagsName = window.names;
//---------------------
var nameEl = document.getElementById("country"); //<-- элемент названия флага, который нужно выбрать
var flagsEl = []; //<-- массив с элементами флагов
autoFill();//<-- заполнение
dom();
var timer = 10;
setInterval(oneSec, 1000);
//<==================================================================================================>



function autoFill(){
  arrayWithPos = Randomizer(4, flagsLink.length - 1, 0);
  for(var i = 0; i < arrayWithPos.length; i++){
    flagsFinal[i] = flagsLink[arrayWithPos[i]];
    flagsFinalNames[i] = flagsName[arrayWithPos[i]];
  }
  generateWin(); //<-- генерация флага, который нужно выбрать
}



function clickFlag(){
     if(this.id == ("_" + winPosition)){
       winCounter++;
       generalCounter++;
       alert("Right answer!");
     } else {
       generalCounter++;
       alert("Wrong answer!");
     }
     if(generalCounter >= maxWin){
       alert(winCounter + "/" + maxWin);
       window.location.href = "main.html";
     } else {
       repeat[repeat.length] = winName;
       autoFill();
       checkRep();
       dom();
     }
     timer = 10;
     document.getElementById("timer_sec").textContent = timer;
}



function generateWin(){
     winPosition = Math.round(Math.random() * (4 - 1) + 1);
     switch(winPosition) {
       case 1:
         winName = flagsFinalNames[0];
       break;
       case 2:
         winName = flagsFinalNames[1];
       break;
       case 3:
         winName = flagsFinalNames[2];
       break;
       case 4:
         winName = flagsFinalNames[3];
       break;
       default: alert("error");

     }
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
        }
      }
    }
  }
  return numbers;
}

function oneSec(){
  timer--;
  if(timer == 0){
    timer = 10;
    generalCounter++;
    //alert("Time out!");
    repAnim();
    autoFill();//<-- повторное заполнение
    dom();
  }
  document.getElementById("timer_sec").textContent = timer;
}


function checkRep(){
  for (var i = 0; i < repeat.length; i++) {
    if(flagsFinalNames[winPosition-1] == repeat[i]){
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
    flagsEl[i].src = flagsFinal[i];
  }
}

function repAnim(){
  var elCirc = document.getElementById("");
  elCirc.style.animationName = "timer";
  elCirc.style.animationTimingFunction = "linear";
  elCirc.style.animationDuration = "10s";

}
