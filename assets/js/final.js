var last = 0;
var WIDTH = document.documentElement.clientWidth;

window.onload = function (){
  if (document.cookie.replace(/(?:(?:^|.*;\s*)userIdInFlags\s*\=\s*([^;]*).*$)|^.*$/, "$1") != "") {
    draw(avatar);
  } else {
    document.getElementById("logIn").addEventListener("click", signUp);
    document.getElementById("signUp").addEventListener("click", signUp);
  }

  document.body.style.animation = "end 0.8s linear forwards";

  let length = WIDTH / 10;

  let children1 = document.getElementById("firstFlags").children;
  let children2 = document.getElementById("secondFlags").children;

  let start1 = (WIDTH - length * children1.length) / 2 / WIDTH * 100;
  let start2 = (WIDTH - length * children2.length) / 2 / WIDTH * 100;

  for (var i = 0; i < children1.length; i++) {
    children1[i].style.left = 10 * i + start1 + "%";
    children1[i].style.width = length + "px";
  }

  for (var i = 0; i < children2.length; i++) {
    children2[i].style.left = 10 * i + start2 + "%";
    children2[i].style.width = length + "px";
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
