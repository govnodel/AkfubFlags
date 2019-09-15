var regime;

$( document ).ready(function() {
  setTimeout(function(){
    $(".flack, .chooseArea *").animate({
      opacity: 1
    }, 800);

    $(".cover").animate({
      opacity: 0.7
    }, 800);

    var currentX = '';
    var currentY = '';
    const movConst = .04;
    $(document).mousemove(function(e) {

      if(currentX == '') currentX = e.pageX;
      var xDiff = e.pageX - currentX;
      currentX = e.pageX;

      if(currentY == '') currentY = e.pageY;
      var yDiff = e.pageY - currentY;
      currentY = e.pageY;

      $('.flack').each(function(i, el) {
        var movX = xDiff * movConst;
  	    var movY = yDiff * movConst;
        var newX = $(el).position().left - movX;
  	    var newY = $(el).position().top - movY;
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
  }, 300)
});

function redir(){
  $(".upblock").animate({
    height: '100vh'
  }, 500, function(){
    $(".chooseArea, .flack, .cover").css("opacity", "0");
    document.body.style.backgroundColor = "#E7F1F5";
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
