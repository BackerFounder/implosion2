$(document).ready(function() {
  $(".character").fadeIn(1000)
  // init the character position
  $('.popup')
    .css('left', 0  +'px')
    .css('top', 0 +'px')
});

// btn click and modal show up
$(".btn").click(function(){
  $(".modal-bg").css("display","flex");
  var src = $("#video").attr('src');
    $(".modal-content iframe").attr('src', src);
})
// close modal and video stop
$(".close").click(function(){
  $(".modal-bg").css("display","none");
  $('#video').attr('src', '');
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
  console.log(moveX, moveY)
  $('.popup')
    .css('left', moveX * 0.5  +'px')
    .css('top', moveY * 0.5 +'px')
});