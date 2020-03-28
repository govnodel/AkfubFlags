$(function() {
  $('.text').animate({
    opacity: 1
  }, 500);

  setTimeout(function(){
    $('.text').animate({
      opacity: 0
    }, 300, function(){
      window.location.href = "index.php";
    });
  }, 1500);
});
