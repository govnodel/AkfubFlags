var last = 0;
var WIDTH = document.documentElement.clientWidth;
var start = (WIDTH - 190 * document.getElementById("firstFlags").children.length) / 2 / WIDTH * 100;

window.onload = function (){
  var color1 = new Color(0, 35, 149);
  var color2 = new Color(255, 255, 255);
  var color3 = new Color(237, 41, 57);

  draw(2, color1, color2, color3);
  
  document.body.style.animation = "end 0.8s linear forwards";

  for (var i = 0; i < document.getElementById("firstFlags").children.length; i++) {
    document.getElementById("firstFlags").children[i].style.left = 10 * i + start + "%";
  }

  for (var i = 0; i < document.getElementById("secondFlags").children.length; i++) {
    document.getElementById("secondFlags").children[i].style.left = 10 * i + start + "%";
  }

  for (var i = 0; i < document.getElementsByClassName("flag").length; i++) {
    document.getElementsByClassName("flag")[i].parentNode.addEventListener("click", clickFlag);
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
