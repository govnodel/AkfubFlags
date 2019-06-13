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
		}, 200);
		$('#buttonprofile').delay(500);
		$('#buttonprofile').animate({
			left: '25%'
		}, 500);
		pushed = false;
	} else {
		$('#buttonprofile').animate({
			left: '0px'
		}, 500);
		$('#profilemenu').delay(500);
		$('#profilemenu').animate({
			left: '-30%'
		}, 200);
		pushed = true;
	}
}

window.onscroll = function(){
	scrolled = window.pageYOffset;
	// alert(scrolled);
	if (scrolled > HEIGHT) {
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
