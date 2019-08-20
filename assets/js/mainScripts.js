var reload;
var pushed = true;
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
var WIDTH = document.documentElement.clientWidth;
// alert(WIDTH);
// alert(HEIGHT);

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
		}, 700);
		button.style.animation = "pullButton 0.8s linear forwards";
		$('#profilemenu').animate({
			left: '-30%'
		}, 800);
		pushed = true;
	}
}

$(function() {
	reload = sessionStorage.getItem("reload");
	if(reload == "1"){
		first.style.animation = outto;
		second.style.animation = outto;
		arrow.style.animation = profOutto;
		reload = "0";
		sessionStorage.setItem("reload", reload);
	}
	$('html, body').animate({
		scrollTop: $('#first').offset().top
	}, 500);
});

function slowScroll(){
	first.style.animation = into;
	second.style.animation = into;
	arrow.style.animation = profInto;
	$('html, body').animate({
		scrollTop: $('#second').offset().top
	}, 500);
	reload = "1";
	sessionStorage.setItem("reload", reload);
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
		window.location.href = "difficuty.html";
	}, 200);
}
