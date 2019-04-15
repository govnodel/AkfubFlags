

//метод main
//<----------------------------------------------------------------->
var winPosition = Math.round(Math.random() * (4 - 1) + 1); //<-- позиция правильного флага
alert("win = " + winPosition); //<-- cheker
var flags = []; //<-- массив с флагами
var flagsLink = []; //<-- массив с ссылками на флаги
autoFill(flagsLink, flags);//<-- его заполнение
//переменные изображений
//нужно сократить
document.getElementById("1").src = flags[0];
document.getElementById("2").src = flags[1];
document.getElementById("3").src = flags[2];
document.getElementById("4").src = flags[3];;
//<----------------------------------------------------------------->


function autoFill(flagsLink, flags){
  flagsLink[1] = "Georgia_(1918–1921).png";
  flagsLink[2] = "the_Ottoman_Empire.png";
  flagsLink[3] = "Bavaria.png";
  flagsLink[4] = "the_Kingdom_of_the_Two_Sicilies_(1816).png";
  flagsLink[5] = "Texas.png";
  flagsLink[6] = "Hanover_(1837-1866).png";
  flagsLink[7] = "Golden_Horde_(1339).png";
  flagsLink[8] = "the_United_States_of_the_Ionian_Islands.png";

  var arrayWithPos = Randomizer(4, 8, 1);
  alert(arrayWithPos); //<-- cheker
  for(var i = 0; i < arrayWithPos.length; i++){
    flags[i] = flagsLink[arrayWithPos[i]];
  }
}

function clickFlag(id){ //<-- нужно переписать весь метод
     if(id == winPosition){
       alert("win");
     } else {
       alert("lose");
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
