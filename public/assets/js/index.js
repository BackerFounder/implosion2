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
// close modal
$(".close").click(function(){
  $(".modal-bg").css("display","none");

})
// 3d move
var moveForce = 30; // max popup movement in pixels
var rotateForce = 20; // max popup rotation in deg

$(document).mousemove(function(e) {
    var docX = $(document).width();
    var docY = $(document).height();

    var moveX = (e.pageX - docX/2) / (docX/2) * -moveForce;
    var moveY = (e.pageY - docY/2) / (docY/2) * -moveForce;

    var rotateY = (e.pageX / docX * rotateForce*2) - rotateForce;
    var rotateX = -((e.pageY / docY * rotateForce*2) - rotateForce);

    $('.popup')
        .css('left', moveX * 0.5  +'px')
        .css('top', moveY * 0.5 +'px')
        .css('transform', 'rotateX('+rotateX * 0.5+'deg) rotateY('+rotateY * 0.5+'deg)');
});