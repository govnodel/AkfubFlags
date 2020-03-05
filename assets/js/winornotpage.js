var WIDTH = document.documentElement.clientWidth;
var start = (WIDTH - 10 * document.getElementById("firstFlags").children.length) / WIDTH * 100;

document.body.style.animation = "end 0.8s linear forwards";

for (var i = 0; i < document.getElementById("firstFlags").children.length; i++) {
  document.getElementById("firstFlags").children[i].style.left = 10 * i + start + "%";
}

for (var i = 0; i < document.getElementById("secondFlags").children.length; i++) {
  document.getElementById("secondFlags").children[i].style.left = 10 * i + "%";
}
