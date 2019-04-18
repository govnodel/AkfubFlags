/*
@как по мне ваня страдает хернёй
@ага, возможно
@я тут сижу и вдруг слышу, как гуси летят... или утки, хуй его знает
*/

/* Список задач:
    1) оптимизировать dataBase
    2) убрать повторение флагов
    3) добавить таймер (timeBar) <-- остался только Bar
*/

//<==========================================<метод main>============================================>
var winPosition;
var winName;
var winCounter = 0; //<-- количество правильных ответов
var generalCounter = 0; //<-- счётчик попыток
var maxWin = 4; //<-- количество попыток
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
var timer = 0;
setInterval(oneSec, 1000);
//<==================================================================================================>



function autoFill(){
  arrayWithPos = Randomizer(4, flagsLink.length - 1, 0);
  for(var i = 0; i < arrayWithPos.length; i++){
    flagsFinal[i] = flagsLink[arrayWithPos[i]];
    flagsFinalNames[i] = flagsName[arrayWithPos[i]];
  }
  generateWin(); //<-- генерация флага, который нужно выбрать
  nameEl.textContent = winName;
  for(var i = 0; i < 4; i++){
    flagsEl[i] = document.getElementById("_" + (i + 1));
    flagsEl[i].addEventListener("click",clickFlag);
    flagsEl[i].src = flagsFinal[i];
  }
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
       autoFill();//<-- повторное заполнение
     }
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
  timer++;
  if(timer == 10){
    timer = 0;
    generalCounter++;
    alert("Time out!");
    autoFill();//<-- повторное заполнение
  }
}
