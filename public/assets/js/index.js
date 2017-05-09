$(document).ready(function() {
  //loading
  $(window).load(function() {
    $("#loading").delay(600).fadeOut();
  });
  var progress = 0;
  $("img").load(function() {
    progress += 100 / $("img").length;
    var percent = Math.round(progress) + "%";
    $("#loading .txt").text(percent);
    $("#loading .ld-bar").css("width", percent);
  });
  //loading END

  $(".number-20").animateNumbers(20, true, 2800);
  $(".number-100").animateNumbers(100, true, 3800);

});

// FANCY BOX
$(".btn").click(function(){
  $(".modal-bg").css("display","flex");
  var src = $(".modal-content iframe").attr('src');
    $(".modal-content iframe").attr('src', src);
})
// close
$(".close").click(function(){
  $(".modal-bg").css("display","none");

})

