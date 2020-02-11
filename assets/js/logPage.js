$(function() {
  alert(document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  )));
	$('div').animate({
		marginTop: '12vh',
    opacity: 1
	}, 700);
});
