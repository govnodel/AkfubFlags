var regime;

$( document ).ready(function() {

  $(".flack").animate({
    opacity: 1
  }, 800);

  $(".cover").animate({
    opacity: 0.7
  }, 800);

  var currentX = '';
  var currentY = '';
  var movementConstant = .05;
  $(document).mousemove(function(e) {

    if(currentX == '') currentX = e.pageX;
    var xdiff = e.pageX - currentX;
    currentX = e.pageX;

    if(currentY == '') currentY = e.pageY;
    var ydiff = e.pageY - currentY;
    currentY = e.pageY;

    $('.flack').each(function(i, el) {
      var movement = (i + 1) * (xdiff * movementConstant);
	    var movementy = (i + 1) * (ydiff * movementConstant);
      var newX = $(el).position().left + movement;
	    var newY = $(el).position().top + movementy;
      $(el).css('left', newX + 'px');
	    $(el).css('top', newY + 'px');
    });
  });

  $("#historical").on("click", function() {
    regime = "h:o";
    redir();
  });

  $("#modern").on("click", function() {
    regime = "m:o";
    redir();
  });
});

function redir(){
  $(".upblock").animate({
    height: '100vh'
  }, 500, function(){
    $(".chooseArea").css("opacity", "0");
    setTimeout(function(){
      $(".upblock").animate({
        height: '16vh'
      }, 460);
      setTimeout(function(){
        window.location.href = "gayme.php?op=" + regime;
      }, 460);
    }, 140);
  });
}
