var scrolled;
var was = false;
var into = "into 1s linear forwards";
var outto = "outto 1s linear forwards";
var first = document.getElementById("_1");
var second = document.getElementById("_2");

window.onscroll = function(){
	scrolled = window.pageYOffset || document.documentElement.scrollTop;
	if (scrolled > 400) {
    document.documentElement.clientWidth
    first.style.animation = into;
    // first.style.animationFillMode = "forwards";
    second.style.animation = into;
    // second.style.animationFillMode = "forwards";
    was = true;
	} else if(was){
    first.style.animation = outto;
    // first.style.animationFillMode = "forwards";
    second.style.animation = outto;
    // second.style.animationFillMode = "forwards";
    was = false;
	}
}
