var last = 0;
var WIDTH = document.documentElement.clientWidth;
var start = (WIDTH - 190 * document.getElementById("firstFlags").children.length) / 2 / WIDTH * 100;

document.body.style.animation = "end 0.8s linear forwards";

for (var i = 0; i < document.getElementById("firstFlags").children.length; i++) {
  document.getElementById("firstFlags").children[i].style.left = 10 * i + start + "%";
}

for (var i = 0; i < document.getElementById("secondFlags").children.length; i++) {
  document.getElementById("secondFlags").children[i].style.left = 10 * i + start + "%";
}

document.getElementsByClassName("flag").addEventListener('click', clickFlag);

function clickFlag(){
  if (last != this) {
    if (last != 0) {
      last.style.animation = "flagApp 0.1s linear forwards";
      last.parentNode.children[1].style.animation = "nameApp 0.1s linear forwards";
    }
    this.style.animation = "flagDis 0.1s linear forwards";
    this.parentNode.children[1].style.animation = "nameDis 0.1s linear forwards";
    last = this;
  } else {
    this.style.animation = "flagApp 0.1s linear forwards";
    this.parentNode.children[1].style.animation = "nameApp 0.1s linear forwards";
    last = 0;
  }
}
