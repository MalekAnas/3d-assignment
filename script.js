

$(document).ready(function(){

//toggle hamburgare menu button class to apply x animation
 $('.nav-button').click(function(){
  $('.nav-button').toggleClass('change');
 });


$(window).scroll(function(){

 let position = $(this).scrollTop();
 console.log(position);

 if(position >= 200){
  $('.nav-menu').addClass('custom-navbar');
 }
 else{
  $('.nav-menu').removeClass('custom-navbar');

 }
 
})
 
});

































