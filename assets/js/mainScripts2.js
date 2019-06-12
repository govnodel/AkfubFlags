var scrolled;
var was = false;
var into = "into 1s linear forwards";
var outto = "outto 1s linear forwards";
var first = document.getElementById("_1");
var second = document.getElementById("_2");
var WIDTH = document.documentElement.clientHeight / 2;

window.onscroll = function(){
	scrolled = window.pageYOffset;
	if (scrolled > WIDTH) {
    document.documentElement.clientWidth
    first.style.animation = into;
    second.style.animation = into;
    was = true;
	} else if(was){
    first.style.animation = outto;
    second.style.animation = outto;
    was = false;
	}
}
