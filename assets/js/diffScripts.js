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

  $( "#modern" ).on( "click", function() {
    regime = "m";
    $(".upblock").animate({
      height: '100%'
    }, 700, function(){
      setTimeout(redir, 200);
    });
  });
});

function redir(){
  $(".upblock").animate({
    height: '18vh'
  }, 600);
  setTimeout(function(){
    window.location.href = "gayme.php?regime=" + regime;
  }, 600);
}
