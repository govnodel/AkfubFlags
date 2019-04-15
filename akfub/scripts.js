

//метод main
//<----------------------------------------------------------------->
var winPosition;
var winName;
var flags = []; //<-- массив с флагами, которые будут в итоге             <-- нужно сократить
var flagsN = []; //<-- массив с именами флагов, которые будут в итоге     <-- нужно сократить
var flagsName = []; //<-- массив с именами флагов
var flagsLink = []; //<-- массив с ссылками на флаги
autoFill(flagsLink);//<-- их заполнение
generateWin(flags); //<-- генерация флага, который нужно выбрать
//alert("win = " + winPosition); //<-- cheker
document.getElementById("name").textContent = winName; //<-- элемент названия флага, который нужно выбрать
//переменные изображений
//нужно сократить
document.getElementById("1").children[0].src = flags[0];
document.getElementById("2").children[0].src = flags[1];
document.getElementById("3").children[0].src = flags[2];
document.getElementById("4").children[0].src = flags[3];;
//<----------------------------------------------------------------->


function autoFill(){
  flagsLink[1] = "flags/Georgia_(1918–1921).png";
  flagsLink[2] = "flags/the_Ottoman_Empire.png";
  flagsLink[3] = "flags/Bavaria.png";
  flagsLink[4] = "flags/the_Kingdom_of_the_Two_Sicilies_(1816).png";
  flagsLink[5] = "flags/Texas.png";
  flagsLink[6] = "flags/Hanover_(1837-1866).png";
  flagsLink[7] = "flags/Golden_Horde_(1339).png";
  flagsLink[8] = "flags/the_United_States_of_the_Ionian_Islands.png";
  //нужно сократить
  flagsName[1] = "Georgia (1918–1921)";
  flagsName[2] = "the Ottoman Empire";
  flagsName[3] = "Bavaria";
  flagsName[4] = "the Kingdom of the Two Sicilies (1816)";
  flagsName[5] = "Texas";
  flagsName[6] = "Hanover (1837-1866)";
  flagsName[7] = "Golden Horde (1339)";
  flagsName[8] = "the United States of the Ionian Islands";

  var arrayWithPos = Randomizer(4, 8, 1);
  //alert(arrayWithPos); //<-- cheker
  for(var i = 0; i < arrayWithPos.length; i++){
    flags[i] = flagsLink[arrayWithPos[i]];
    flagsN[i] = flagsName[arrayWithPos[i]];
  }
}

function clickFlag(id){ //<-- нужно переписать весь метод
     if(id == winPosition){
       alert("win");
     } else {
       alert("lose");
     }
}

function generateWin(){
     winPosition = Math.round(Math.random() * (4 - 1) + 1);
     switch(winPosition) {
       case 1:
         winName = flagsN[0];
       break;
       case 2:
         winName = flagsN[1];
       break;
       case 3:
         winName = flagsN[2];
       break;
       case 4:
         winName = flagsN[3];
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
