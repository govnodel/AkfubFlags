var scrolled;
var was = false;
var up = true;
var can = true;
var into = "into 1s linear forwards";
var outto = "outto 1s linear forwards";
var first = document.getElementById("first");
var second = document.getElementById("second");
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

	if ((scrolled > 100)&&(up)&&(can)){
		up = false;
		can = false;
		setTimeout(invert, 450);
		$('html, body').animate({
			scrollTop: $('#second').offset().top
		}, 500);
	} else if ((scrolled < WIDTH * 2 - 100)&&(!up)&&(can)){
		up = true;
		can = false;
		setTimeout(invert, 450);
		$('html, body').animate({
			scrollTop: $('#first').offset().top
		}, 500);
	}
}

function invert() {
  can = true;
}

function slowScroll(){
	$('html, body').animate({
		scrollTop: $('#second').offset().top
	}, 500);
}
