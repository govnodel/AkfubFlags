/* Список задач:
    1)
*/

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

//<=============================================<БД>=================================================>
// Бiльше флагов нада
// Скорее нужно убрать это отсюда нахер
var names = []; //<-- массив с именами флагов

names[0] = "Georgia (1918-1921)";
names[1] = "the Ottoman Empire";
names[2] = "Bavaria";
names[3] = "the Kingdom of the Two Sicilies (1816)";
names[4] = "Texas";
names[5] = "Hanover (1837-1866)";
names[6] = "Golden Horde (1339)";
names[7] = "the United States of the Ionian Islands";
names[8] = "Taiping Heavenly Kingdom";
names[9] = "the German Empire";
names[10] = "US 26 Star Flag";
names[11] = "Austria-Hungary (1869-1918)";
names[12] = "Transcaucasian SFSR (1925-1936)";
names[13] = "Scotland";
names[14] = "Rzeczpospolita";
names[15] = "Rwanda (1959-1961)";
names[16] = "Rhodesia (1968-1979)";
names[17] = "Republic of Maryland";
names[18] = "Napoleonic Kingdom of Italy";
names[19] = "Merina Kingdom";
names[20] = "German Confederation";
names[21] = "Crimean Khanate";
names[22] = "Cossack Hetmanat";
names[23] = "Benin Empire";

flagsName = names;
//<==================================================================================================>
autoFill();//<-- заполнение
dom();
var interval = setInterval(oneSec, 1000);
//<==================================================================================================>


function autoFill(){
  arrayWithPos = Randomizer(4, flagsName.length - 1, 0);
  for(var i = 0; i < arrayWithPos.length; i++){
    flagsFinal[i] = flagsName[arrayWithPos[i]];
  }
  winPosition = Math.round(Math.random() * (4 - 1) + 1);
  winName = flagsFinal[winPosition - 1];
}


function clickFlag(){
  if(this.id == ("_" + winPosition)){ //верный ответ
    winCounter++;
  } else lifeMinus(); //неверный ответ
  running = false;
  flagsHide();
  setTimeout(animationRem, 800, false);
  setTimeout(refresh, 1200);
  loseornot();
}


function oneSec(){
  timer--;
  if((timer == 0)&&(running)){
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
  interval = setInterval(oneSec, 1000);
  animationRem(true);
}


function loseornot(){ // всё ответил или проиграл
  if((generalCounter == maxWin - 1) || (life < 1)){
    animationRem(false);
    setTimeout(transition, 400);
    function transition(){
      // alert(winCounter + "/" + maxWin);
      if(life < 1){
        stat(false);
      } else {
        stat(true);
      }
      alert("winornot.php?stat=" + str);
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
