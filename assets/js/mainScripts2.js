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
	// alert(scrolled);
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

	if ((scrolled > 10)&&(up)&&(can)){
		// alert("down");
		up = false;
		can = false;
		setTimeout(invert, 510);
		$('html, body').animate({
			scrollTop: $('#second').offset().top
		}, 500);
	} else if ((scrolled < WIDTH * 2 - 10)&&(!up)&&(can)){
		// alert("up");
		up = true;
		can = false;
		setTimeout(invert, 510);
		$('html, body').animate({
			scrollTop: $('#first').offset().top
		}, 500);
	}
}

function invert() {
  can = true;
}

function slowScroll(){
	alert("slowScroll");
	can = false;
	setTimeout(invert, 510);
	$('html, body').animate({
		scrollTop: $('#second').offset().top
	}, 500);
}
