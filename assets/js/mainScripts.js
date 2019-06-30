var scrolled;
var was = false;
var up = true;
var can = true;
var pushed = true;
var stopColoring = false;
var into = "into 1s linear forwards";
var outto = "outto 1s linear forwards";
var profInto = "profileButtonInto 1s linear forwards";
var profOutto = "profileButtonOutto 1s linear forwards";
var profile = document.getElementById('profilemenu');
var button = document.getElementById('buttonprofile');
var first = document.getElementById('first');
var second = document.getElementById('second');
var arrow = document.getElementById('proArrow');
var HEIGHT = document.documentElement.clientHeight / 2;

$('#buttonprofile').bind("click", pushMenu);
$('#buttonplay').bind("click", startGame);
$('#login').bind("click", {index: 1}, signUp);
$('#register').bind("click", {index: 2}, signUp);
$("#profilemenu *:not(#logRegMenu)").fadeOut(100);

function pushMenu(){
	if (pushed){
		$("#profilemenu *:not(#logRegMenu)").fadeIn(500);
		$('#profilemenu').animate({
			left: '0px'
		}, 500);
		$('#buttonprofile').animate({
			left: '25%'
		}, 550);
		button.style.animation = "pushButton 0.8s linear forwards";
		pushed = false;
	} else {
		$("#profilemenu *:not(#logRegMenu)").fadeOut(800);
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
	if(!stopColoring){
		scrolled = window.pageYOffset;
		if (scrolled > HEIGHT) {
	    first.style.animation = into;
	    second.style.animation = into;
			arrow.style.animation = profInto;
	    was = true;
		} else if(was){
	    first.style.animation = outto;
	    second.style.animation = outto;
			arrow.style.animation = profOutto;
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
			if(!pushed){
				$('#buttonprofile').animate({
					left: '0px'
				}, 250);
				button.style.animation = "pullButton 0.4s linear forwards";
				$('#profilemenu').animate({
					left: '-30%'
				}, 400);
				pushed = true;
			}
			$('html, body').animate({
				scrollTop: $('#first').offset().top
			}, 500);
		}
	}
}

function invert() {
  can = true;
}

function signUp(event){
	if(event.data.index == 1){
		// window.location.href = "login.html";
	} else {
		window.location.href = "regPage.php";
	}
}

function startGame(){
	stopColoring = true;
	$("#second *, #first").fadeOut();
	setTimeout(function () {
		window.location.href = "gayme.html";
	}, 600);
}

function slowScroll(){
	can = false;
	setTimeout(invert, 510);
	$('html, body').animate({
		scrollTop: $('#second').offset().top
	}, 500);
}
