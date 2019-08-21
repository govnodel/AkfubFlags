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

var names = [];
var flags = [];
var winPos;
var winName;

function setFlags(){
  let numbers = [];
  for (let i = 0; i < count; i++){
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

  for(let i = 0; i < numbers.length; i++){
    flags[i] = names[numbers[i]];
  }
  winPos = Math.round(Math.random() * 3);
  winName = flags[winPosition];

  nameEl.textContent = winName;
  for(var i = 0; i < 4; i++){
    flagsEl[i] = document.getElementById("_" + (i + 1));
    flagsEl[i].addEventListener("click",clickFlag);
    flagsEl[i].src = "assets/images/flags/" + flagsFinal[i].replace(/ /g, "_") + ".png";
  }
}
