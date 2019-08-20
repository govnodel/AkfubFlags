// $( document ).ready(function() {
//   $('#tr1').animate({
//     // left: '-100%'
//     left: "+=50"
//   }, 500);
//   // alert("hile");
// });
// // $('#tr1, #tr2').fadeOut(0).fadeIn(1000);
$( "#tr1" ).click(function() {
  $( "svg" ).animate({
    opacity: 0.25,
    left: "-100%",
    // height: "toggle"
  }, 1000);
});
