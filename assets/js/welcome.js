$(function() {
  $('#text').animate({
    opacity: 1
  }, 500);

  setTimeout(function(){
    $('#text').animate({
      opacity: 0
    }, 400, function(){
      window.location.href = "http://flags.alfa-omega.pro";
    });
  }, 3000);
});
