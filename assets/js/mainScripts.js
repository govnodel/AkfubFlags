/*
@как по мне ваня страдает хернёй
@ага, возможно
 я тут сижу и вдруг слышу, как гуси летят... или утки, хуй его знает
*/

/* Список задач:
    1) оптимизировать dataBase
    2) добавить категории по континентам эпохам
*/

//<==========================================<метод main>============================================>
var winPosition;
var winName;
var winCounter = 0; //<-- количество правильных ответов
var generalCounter = 0; //<-- счётчик попыток
var maxWin = 10; //<-- количество попыток
var repeat = ["first"];
var anima = false;
var elCirc = document.getElementById("krug");
var lifesEl = document.getElementById("lifes").childNodes;
var life = 3;
//---нужно сократить---
var flagsFinal = []; //<-- массив с флагами, которые будут в итоге
var flagsFinalNames = []; //<-- массив с именами флагов, которые будут в итоге
var flagsName; //<-- массив с именами флагов
var flagsLink; //<-- массив с ссылками на флаги
var arrayWithPos;

//<=============================================<БД>=================================================>
// Бiльше флагов нада
var names = []; //<-- массив с именами флагов
var links = []; //<-- массив с ссылками на флаги

links[0] = "assets/images/flags/Georgia_(1918-1921).png";
links[1] = "assets/images/flags/the_Ottoman_Empire.png";
links[2] = "assets/images/flags/Bavaria.png";
links[3] = "assets/images/flags/the_Kingdom_of_the_Two_Sicilies_(1816).png";
links[4] = "assets/images/flags/Texas.png";
links[5] = "assets/images/flags/Hanover_(1837-1866).png";
links[6] = "assets/images/flags/Golden_Horde_(1339).png";
links[7] = "assets/images/flags/the_United_States_of_the_Ionian_Islands.png";
links[8] = "assets/images/flags/Taiping_Heavenly_Kingdom.png";
links[9] = "assets/images/flags/the_German_Empire.png";
links[10] = "assets/images/flags/US_26_Star_GreatStar_Flag.png";
links[11] = "assets/images/flags/Austria-Hungary_(1869-1918).png";
links[12] = "assets/images/flags/Transcaucasian_SFSR(1925-1936).png";
links[13] = "assets/images/flags/Scotland.png";
links[14] = "assets/images/flags/Rzeczpospolita.png";
links[15] = "assets/images/flags/Rwanda_(1959-1961).png";
links[16] = "assets/images/flags/Rhodesia_(1968-1979).png";
links[17] = "assets/images/flags/Republic_of_Maryland.png";
links[18] = "assets/images/flags/Napoleonic_Kingdom_of_Italy.png";
links[19] = "assets/images/flags/Merina_Kingdom.png";
links[20] = "assets/images/flags/German_Confederation.png";
links[21] = "assets/images/flags/Crimean_Khanate.png";
links[22] = "assets/images/flags/Cossack_Hetmanat.png";
links[23] = "assets/images/flags/Benin_Empire.png";

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
//<==================================================================================================>

flagsLink = links;
flagsName = names;
//---------------------
var nameEl = document.getElementById("country"); //<-- элемент названия флага, который нужно выбрать
var flagsEl = []; //<-- массив с элементами флагов
autoFill();//<-- заполнение
dom();
var timer = 10;
var interval = setInterval(oneSec, 1000);
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
  if(this.id == ("_" + winPosition)){ //верный ответ
    winCounter++;
  } else lifeMinus(); //неверный ответ
  animationRem(false);
  setTimeout(refresh, 800);
  loseornot();
  clearInterval(interval);
  document.getElementById("timer_sec").textContent = timer;
  interval = setInterval(oneSec, 1000);
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
        }}}}
  return numbers;
}


function oneSec(){
  timer--;
  if(timer == 0){
    lifeMinus();
    animationRem(false);
    setTimeout(refresh, 800);
    refresh();
    loseornot();
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
  if(anima){
    elCirc.style.animation = "timer 10s linear";
  } else {
    elCirc.style.animation = "timer2 10s linear";
  }
  anima = !anima;
}


function refresh(){
  generalCounter++;
  timer = 10;
  repeat[repeat.length] = winName;
  repAnim();
  autoFill();//<-- повторное заполнение
  checkRep();
  dom();
  animationRem(true);
}


function loseornot(){ // всё ответил или проиграл
  if((generalCounter >= maxWin) || (life < 1)){
    animationRem(false);
    setTimeout(transition, 800);
    function transition(){
      alert(winCounter + "/" + maxWin);
      window.location.href = "winornot.html";
    }
  }
}


function animationRem(bool){
  if(bool){
    flagsEl.forEach(function(element){
      element.addEventListener("click",clickFlag);
      element.style.animation = "flagApp 0.4s linear";
      element.style.animationFillMode = "forwards";
    });
  } else{
    flagsEl.forEach(function(element){
      element.removeEventListener("click",clickFlag);
      element.style.animation = "flagRem 0.4s linear";
      element.style.animationFillMode = "forwards";
    });
  }
}


function lifeMinus(){
  life--;
  switch (life) {
    case 2:
      lifesEl[1].style.animation = "life 1s linear";
      lifesEl[1].style.animationFillMode = "forwards";
      break;
    case 1:
      lifesEl[3].style.animation = "life 1s linear";
      lifesEl[3].style.animationFillMode = "forwards";
      break;
    case 0:
      lifesEl[5].style.animation = "life 1s linear";
      lifesEl[5].style.animationFillMode = "forwards";
      break;
  }
}

// // Я тут поучу JS, ага
// document.write (winCounter)
