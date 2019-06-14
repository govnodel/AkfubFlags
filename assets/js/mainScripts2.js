var scrolled;
var was = false;
var up = true;
var can = true;
var pushed = true;
var into = "into 1s linear forwards";
var outto = "outto 1s linear forwards";
var profile = document.getElementById('profilemenu');
var button = document.getElementById('buttonprofile');
var first = document.getElementById('first');
var second = document.getElementById('second');
var arrow = document.getElementById('proArrow');
var HEIGHT = document.documentElement.clientHeight / 2;

$('#buttonprofile').bind("click", pushMenu);
$('#buttonplay').bind("click", startGame);

function pushMenu(){
	if (pushed){
		$('#profilemenu').animate({
			left: '0px'
		}, 500);
		//$('#buttonprofile').delay(200);
		$('#buttonprofile').animate({
			left: '25%'
		}, 550);
		button.style.animation = "pushButton 0.8s linear forwards";
		pushed = false;
	} else {
		$('#buttonprofile').animate({
			left: '0px'
		}, 500);
		button.style.animation = "pullButton 0.8s linear forwards";
		$('#profilemenu').animate({
			left: '-30%'
		}, 800);
		pushed = true;
	}
}

window.onscroll = function(){
	scrolled = window.pageYOffset;
	if (scrolled > HEIGHT) {
    first.style.animation = into;
    second.style.animation = into;
		arrow.style.animation = into;
    was = true;
	} else if(was){
    first.style.animation = outto;
    second.style.animation = outto;
		arrow.style.animation = outto;
    was = false;
	}

	if ((scrolled > 10)&&(up)&&(can)){
		up = false;
		can = false;
		setTimeout(invert, 510);
		$('html, body').animate({
			scrollTop: $('#second').offset().top
		}, 500);
	} else if ((scrolled < HEIGHT * 2 - 10)&&(!up)&&(can)){
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

function startGame(){
	window.location.href = "gayme.html";
}

function slowScroll(){
	can = false;
	setTimeout(invert, 510);
	$('html, body').animate({
		scrollTop: $('#second').offset().top
	}, 500);
}
