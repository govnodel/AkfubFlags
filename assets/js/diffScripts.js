var regime;

$( document ).ready(function() {
  $(".pol1").animate({
    marginRight: '0',
    marginTop: '0'
  }, 600);

  $(".pol2").animate({
    marginLeft: '0',
    marginTop: '0'
  }, 600, function(){
    document.body.style.animation = "white 0.1s linear forwards";
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
