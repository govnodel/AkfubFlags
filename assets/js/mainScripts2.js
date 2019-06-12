var scrolled;
var second = document.getElementById("_2");
var pos = null;
var scroll_1 = 40;
var scroll_2 = 440;

window.onscroll = function(){
	scrolled = window.pageYOffset || document.documentElement.scrollTop;
	if (scrolled < 80) {
		if (pos != 'mid') {
			pos = 'mid';
      alert("nonerror")
			second.style.backgroundColor = "red";
		}
	} else if (scrolled > 440) {
		if (pos != 'blue') {
			pos = 'blue';
			second.style.backgroundColor = "white";
		}
	} else {
    pos = null;
    second.style.backgroundColor = "yellow";
	}
}
// $second.stop().animate({
//   opacity: (scroll_current - scroll_1) / (scroll_2 - scroll_1)
// });
