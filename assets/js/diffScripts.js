var regime;
var diff = 1;
const maxDiff = 3;
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

    $(".rightLevelArrow").bind("click", right);

    $(".leftLevelArrow").on("click", left);

  }, 300)
});

function right(){
  $('.rightLevelArrow').unbind();
  $('.leftLevelArrow').unbind();
  diff++;
  if(diff > maxDiff){
    diff = 1;
  }
  document.getElementsByClassName("lvl")[0].style.animation = "forward 0.4s linear forwards";
  $(".lvl").animate({
    left: "+=3%"
  }, 400, function(){
    $(".lvl").text("lv. " + diff);
    $(".lvl").css("left", "-=6%");
    document.getElementsByClassName("lvl")[0].style.animation = "back 0.4s linear forwards";
    $(".lvl").animate({
      left: "+=3%"
    }, 400, function(){
      $(".rightLevelArrow").bind("click", right);
      $(".leftLevelArrow").bind("click", left);
    });
  });
}

function left(){
  $('.rightLevelArrow').unbind();
  $('.leftLevelArrow').unbind();
  diff--;
  if(diff < 1){
    diff = maxDiff;
  }
  document.getElementsByClassName("lvl")[0].style.animation = "forward 0.4s linear forwards";
  $(".lvl").animate({
    left: "-=3%"
  }, 400, function(){
    $(".lvl").text("lv. " + diff);
    $(".lvl").css("left", "+=6%");
    document.getElementsByClassName("lvl")[0].style.animation = "back 0.4s linear forwards";
    $(".lvl").animate({
      left: "-=3%"
    }, 400, function(){
      $(".rightLevelArrow").bind("click", right);
      $(".leftLevelArrow").bind("click", left);
    });
  });
}

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
        window.location.href = "gayme.php?op=" + regime + ":" + diff;
      }, 460);
    }, 140);
  });
}
