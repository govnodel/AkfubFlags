$(function() {
  alert(document.cookie.replace(/(?:(?:^|.*;\s*)test2\s*\=\s*([^;]*).*$)|^.*$/, "$1"););
	$('div').animate({
		marginTop: '12vh',
    opacity: 1
	}, 700);
});
