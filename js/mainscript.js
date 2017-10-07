var toggleable = true;
var termisopen = false;

$('.hidden').hide();

$(".G").hover(function(){
  if (toggleable) {
    $('.hidden').toggle();
  }
});

$(".draggable").hide();
$("#Btn1").click(function(){

  $('.hidden').slideUp();
  $('.G').slideUp();
  $('#win1').show(300);

})

$("#term1").click(function(){

  $('#win2').show(300);

})

$(function() {
    $( ".draggable" ).draggable();
  });
