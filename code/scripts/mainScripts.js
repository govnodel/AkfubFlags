/*
@как по мне ваня страдает хернёй
@ага, возможно
@я тут сижу и вдруг слышу, как гуси летят... или утки, хуй его знает
*/

//<==========================================<метод main>============================================>
var winPosition;
var winName;
//---нужно сократить---
var flagsFinal = []; //<-- массив с флагами, которые будут в итоге
var flagsFinalNames = []; //<-- массив с именами флагов, которые будут в итоге
var flagsName = []; //<-- массив с именами флагов
var flagsLink = []; //<-- массив с ссылками на флаги
//---------------------
autoFill(flagsLink);//<-- заполнение
generateWin(flags); //<-- генерация флага, который нужно выбрать
//alert("win = " + winPosition); //<-- cheker
document.getElementById("country").textContent = winName; //<-- элемент названия флага, который нужно выбрать
var flags = []; //<-- массив с элементами флагов
//<-----------------------------------------<цикл заполнения>---------------------------------------->
for(var i = 0; i < 4; i++){
  flags[i] = document.getElementById("_" + (i + 1));
  flags[i].addEventListener("click",clickFlag);
  flags[i].src = flagsFinal[i];
}
//<-------------------------------------------------------------------------------------------------->
//<==================================================================================================>



function autoFill(){
  // flagsLink[1] = "../akfub/flags/Georgia_(1918–1921).png";
  // flagsLink[2] = "../akfub/flags/the_Ottoman_Empire.png";
  // flagsLink[3] = "../akfub/flags/Bavaria.png";
  // flagsLink[4] = "../akfub/flags/the_Kingdom_of_the_Two_Sicilies_(1816).png";
  // flagsLink[5] = "../akfub/flags/Texas.png";
  // flagsLink[6] = "../akfub/flags/Hanover_(1837-1866).png";
  // flagsLink[7] = "../akfub/flags/Golden_Horde_(1339).png";
  // flagsLink[8] = "../akfub/flags/the_United_States_of_the_Ionian_Islands.png";
  // //нужно сократить
  // flagsName[1] = "Georgia (1918–1921)";
  // flagsName[2] = "the Ottoman Empire";
  // flagsName[3] = "Bavaria";
  // flagsName[4] = "the Kingdom of the Two Sicilies (1816)";
  // flagsName[5] = "Texas";
  // flagsName[6] = "Hanover (1837-1866)";
  // flagsName[7] = "Golden Horde (1339)";
  // flagsName[8] = "the United States of the Ionian Islands";

  // import {links, names} from "./dataBase";
  // flagsLink = links;
  // flagsName = names;

  var arrayWithPos = Randomizer(4, 8, 1);
  //alert(arrayWithPos); //<-- cheker
  for(var i = 0; i < arrayWithPos.length; i++){
    flagsFinal[i] = flagsLink[arrayWithPos[i]];
    flagsFinalNames[i] = flagsName[arrayWithPos[i]];
  }
}

function clickFlag(){ //<-- нужно переписать весь метод
     if(this.id == ("_" + winPosition)){
       alert("win");
     } else {
       alert("lose");
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
