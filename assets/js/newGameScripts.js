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
var winPos;
var winName;
var interval;
var start = true;
var seconds = 10;

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

  for(let i = 0; i < 4; i++){
    let flag = document.getElementById("flag" + i);
    flag.addEventListener("click", clickFlag);
    flag.src = "assets/images/flags/" + names[numbers[i]].replace(/ /g, "_") + ".png";
  }

  winPos = Math.round(Math.random() * 3);
  winName = names[numbers[winPosition]];

  $("#country").text(winName);
}

function passSec(){
  seconds--;
  if((seconds == 0)&&(running)){
    minusLife();
    flagsHide();
    setTimeout(animationRem, 800, false);
    setTimeout(refresh, 1200);
    loseornot();
  }
  $("timer_sec").text(seconds);
}
