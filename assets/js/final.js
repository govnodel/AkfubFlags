var last = 0;
var WIDTH = document.documentElement.clientWidth;
var start1, start2, length;

window.onload = function (){
  if (document.cookie.replace(/(?:(?:^|.*;\s*)userIdInFlags\s*\=\s*([^;]*).*$)|^.*$/, "$1") != "") {
    draw(avatar);
  } else {
    document.getElementById("logIn").addEventListener("click", signUp);
    document.getElementById("signUp").addEventListener("click", signUp);
  }

  document.body.style.animation = "end 0.8s linear forwards";

  length = 190;

  start1 = (WIDTH - length * document.getElementById("firstFlags").children.length) / 2 / WIDTH * 100;
  start2 = (WIDTH - length * document.getElementById("secondFlags").children.length) / 2 / WIDTH * 100;

  for (var i = 0; i < document.getElementById("firstFlags").children.length; i++) {
    document.getElementById("firstFlags").children[i].style.left = 10 * i + start1 + "%";
    document.getElementById("firstFlags").children[i].style.width = length + "px";
  }

  for (var i = 0; i < document.getElementById("secondFlags").children.length; i++) {
    document.getElementById("secondFlags").children[i].style.left = 10 * i + start2 + "%";
    document.getElementById("secondFlags").children[i].style.width = length + "px";
  }

  for (var i = 0; i < document.getElementsByClassName("flag").length; i++) {
    document.getElementsByClassName("flag")[i].parentNode.addEventListener("click", clickFlag);
  }
}

function signUp(){
  if (this.id == "logIn") {
  	window.location.href = "logIn.php";
  } else {
    window.location.href = "signUp.php";
  }
}

function clickFlag(){
  if (last != this) {
    if (last != 0) {
      last.children[0].style.animation = "flagApp 0.1s linear forwards";
      last.children[1].style.animation = "nameDis 0.1s linear forwards";
    }
    this.children[0].style.animation = "flagDis 0.1s linear forwards";
    this.children[1].style.animation = "nameApp 0.1s linear forwards";
    last = this;
  } else {
    this.children[0].style.animation = "flagApp 0.1s linear forwards";
    this.children[1].style.animation = "nameDis 0.1s linear forwards";
    last = 0;
  }
}
