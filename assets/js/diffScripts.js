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
  }, 700, function(){
    // $(".chooseArea").fadeOut(1);
    setTimeout(function(){
      $(".upblock").animate({
        height: '16vh'
      }, 600);
      setTimeout(function(){
        window.location.href = "gayme.php?op=" + regime;
      }, 600);
    }, 2000);
  });
}
