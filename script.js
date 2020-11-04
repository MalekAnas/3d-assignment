

$(document).ready(function(){

//toggle hamburgare menu button class to apply x animation
 $('.nav-button').click(function(){
  $('.nav-button').toggleClass('change');
 });


//change navbar style on scroll
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


 //sliding effect for the section mission
 $(window).scroll(function() {

  let position = $(this).scrollTop();
  console.log(position);

  if(position >= 650){
   $('.camera-img').addClass('from-left');
   $('.mission-text').addClass('from-right');
  }

  
  else{
   
   $('.camer-img').removeClass('from-left');
   $('.mission-text').removeClass('from-right');
  }
  
 })
 
});

































