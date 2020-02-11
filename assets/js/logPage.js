$(function() {
  if (document.cookie.replace(/(?:(?:^|.*;\s*)enterAttempInFlags\s*\=\s*([^;]*).*$)|^.*$/, "$1") != 1) {
    $('div').animate({
  		marginTop: '12vh',
      opacity: 1
  	}, 700);
  }
});
