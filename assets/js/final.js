var last = 0;
var WIDTH = document.documentElement.clientWidth;

window.onload = function (){
  document.getElementById("home").addEventListener("click", exits);
  if (document.cookie.replace(/(?:(?:^|.*;\s*)userIdInFlags\s*\=\s*([^;]*).*$)|^.*$/, "$1") != "") {
    draw(avatar, document.getElementById("canvas"));
  } else {
    document.getElementById("logIn").addEventListener("click", exits);
    document.getElementById("signUp").addEventListener("click", exits);
  }

  document.body.style.animation = "end 0.8s linear forwards";

  let length = WIDTH / 10 - 4;

  let children1 = document.getElementById("firstFlags").children;
  let children2 = document.getElementById("secondFlags").children;

  let start1 = (WIDTH - length * children1.length) / 2 / WIDTH * 100;
  let start2 = (WIDTH - length * children2.length) / 2 / WIDTH * 100;

  for (var i = 0; i < children1.length; i++) {
    children1[i].style.left = 10 * i + start1 + "%";
    children1[i].children[0].style.width = length + "px";
  }

  for (var i = 0; i < children2.length; i++) {
    children2[i].style.left = 10 * i + start2 + "%";
    children2[i].children[0].style.width = length + "px";
  }

  for (var i = 0; i < document.getElementsByClassName("flag").length; i++) {
    document.getElementsByClassName("flag")[i].parentNode.addEventListener("click", clickFlag);
  }
}

function exits(){
  document.getElementById("home").style.animation = "nameDis 0.3s linear forwards";
  document.getElementById("nameContainer").style.animation = "nameDis 0.3s linear forwards";
  document.getElementById("tableContainer").style.animation = "nameDis 0.3s linear forwards";
  document.getElementById("firstFlags").style.animation = "nameDis 0.3s linear forwards";
  document.getElementById("secondFlags").style.animation = "nameDis 0.3s linear forwards";

  if (this.id == "logIn") {
    document.body.style.animation = "colorSign 0.3s linear forwards";
    setTimeout(function(){
      window.location.href = "logIn.php";
    }, 300);
  } else if (this.id == "signUp") {
    document.body.style.animation = "colorSign 0.3s linear forwards";
    setTimeout(function(){
      window.location.href = "signUp.php";
    }, 300);
  } else {
    document.body.style.animation = "colorIndex 0.3s linear forwards";
    setTimeout(function(){
      window.location.href = "index.php";
    }, 300);
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
