var scrolled;
var was = false;
var up = true;
var can = true;
var pushed = true;
var into = "into 1s linear forwards";
var outto = "outto 1s linear forwards";
var first = document.getElementById("first");
var second = document.getElementById("second");
var HEIGHT = document.documentElement.clientHeight / 2;

$('#buttonprofile').bind("click", pushMenu);

function pushMenu(){
	if (pushed){
		$('#profilemenu').animate({
			left: '0px'
		}, {duration: 200, easing: "linear" });
		$('#buttonprofile').delay(200);
		$('#buttonprofile').animate({
			left: '30%'
		}, {duration: 500, easing: "linear" });
		pushed = false;
	} else {
		$('#buttonprofile').animate({
			left: '0px'
		}, {duration: 500, easing: "linear" });
		$('#profilemenu').animate({
			left: '-30%'
		}, {duration: 200, easing: "linear" });
		pushed = true;
	}
}

window.onscroll = function(){
	scrolled = window.pageYOffset;
	if (scrolled > HEIGHT) {
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
	} else if ((scrolled < HEIGHT * 2 - 10)&&(!up)&&(can)){
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
	// alert("slowScroll");
	can = false;
	setTimeout(invert, 510);
	$('html, body').animate({
		scrollTop: $('#second').offset().top
	}, 500);
}
