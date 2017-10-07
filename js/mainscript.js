var toggleable = true;
var termisopen = false;

$('.hidden').hide()
$(".G").hover(function(){
  if (toggleable) {
    $('.hidden').slideToggle();


  }
})
$('.terminal').hide();
$('.G').click(function(){
  $('.terminal').slideToggle();

  toggleable = !toggleable;
  termisopen = !termisopen;
  if(termisopen){
    $('.header').html("ganesha.exe");
  }else {
      $('.header').html("Click to continue")
  }
})
