$(function() {
  if (document.cookie.replace(/(?:(?:^|.*;\s*)enterAttempInFlags\s*\=\s*([^;]*).*$)|^.*$/, "$1") != 1) {
    $('div').animate({
  		marginTop: '12vh',
      opacity: 1
  	}, 700);
  } else {
    document.cookie = "enterAttempInFlags=;";
    $('div').animate({
  		marginTop: '12vh',
      opacity: 1
  	}, 0.1);
  }
});
