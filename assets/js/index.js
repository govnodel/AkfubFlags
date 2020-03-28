var reload;
var pushed = true;
var login = false;
var into = "into 1s linear forwards";
var outto = "outto 1s linear forwards";
var profile = document.getElementById('profilemenu');
var button = document.getElementById('buttonprofile');
var first = document.getElementById('first');
var second = document.getElementById('second');
var arrow = document.getElementById('proArrow');
var HEIGHT = document.documentElement.clientHeight / 2;
var WIDTH = document.documentElement.clientWidth;

var currentMenu = "firstCircle";

window.onload = function (){
	if (authorized == '1') {
		draw(avatar);

		document.getElementById("firstCircle").addEventListener("click", slideMenu);
		document.getElementById("secondCircle").addEventListener("click", slideMenu);
	}

	$('#exitSvg').bind("click", exitUser);
	$('#buttonprofile').bind("click", pushMenu);
	$('#buttonplay').bind("click", startGame);
	$('#login').bind("click", {index: 1}, signUp);
	$('#register').bind("click", {index: 2}, signUp);
	$("#profilemenu *:not(#logRegMenu)").fadeOut(100);
}

function pushMenu(){
	if (pushed){
		$("#profilemenu *:not(#logRegMenu)").fadeIn(500);
		$('#profilemenu').animate({
			left: '0px'
		}, 500);
		$('#buttonprofile').animate({
			left: '29%'
		}, 500);
		button.style.animation = "pushButton 0.8s linear forwards";
		pushed = false;
	} else {
		$("#profilemenu *:not(#logRegMenu)").fadeOut(800);
		if (login) {
			$('#buttonprofile').animate({
				left: '0px',
				opacity: '0'
			}, 800);
		} else {
			$('#buttonprofile').animate({
				left: '0px'
			}, 800);
		}
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
		sessionStorage.setItem("reload", "0");
	}
	$('html, body').animate({
		scrollTop: $('#first').offset().top
	}, 500);
});

function slideMenu(){
	if (this.id != currentMenu) {
		currentMenu = this.id;
		if (this.id == "secondCircle") {
			this.innerHTML = "<circle cx='20' cy='20' r='16' fill='#2a5eb2'></circle><circle cx='20' cy='20' r='10' fill='white'></circle>";
			document.getElementById("firstCircle").innerHTML = "<circle cx='20' cy='20' r='16' fill='#2a5eb2'></circle>"

			$('#playerTableContainer, #stats').animate({
				opacity: 0
			}, 300);

			//second menu appearing
		} else {
			this.innerHTML = "<circle cx='20' cy='20' r='16' fill='#2a5eb2'></circle><circle cx='20' cy='20' r='10' fill='white'></circle>";
			document.getElementById("secondCircle").innerHTML = "<circle cx='20' cy='20' r='16' fill='#2a5eb2'></circle>"

			//second menu disappearing

			$('#playerTableContainer, #stats').animate({
				opacity: 1
			}, 300);
		}
	}
}

function slowScroll(){
	first.style.animation = into;
	second.style.animation = into;
	$('html, body').animate({
		scrollTop: $('#second').offset().top
	}, 500);
	sessionStorage.setItem("reload", "1");
}

function signUp(event){
	login = true;
	pushMenu();
	$('#buttonplay').fadeOut(800, function(){
		if(event.data.index == 1){
			window.location.href = "logIn.php";
		} else {
			window.location.href = "signUp.php";
		}
	});
}

function exitUser(){
	document.cookie = 'userIdInFlags=; path=/';
	window.location.reload(false);
}

function startGame(){
	stopColoring = true;
	$("#second *, #first, #exitSvg").fadeOut();
	setTimeout(function () {
		window.location.href = "difficulty.html";
	}, 200);
}
