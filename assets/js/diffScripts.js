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
$( "body" ).on( "click", function() {
  $(".upblock").animate({
    height: '100%'
  }, 700, redir)
});

function redir(){
  window.location.href = "gayme.php";
}
