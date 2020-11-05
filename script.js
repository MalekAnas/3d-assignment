

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

  if(position >=200){
   $('.camera-img').addClass('from-left');
   $('.mission-text').addClass('from-right');
  }
  else{
   $('.camer-img').removeClass('from-left');
   $('.mission-text').removeClass('from-right');
  }
 })



 //Gallery select event
$('.gallery-list-item').click(function () {
 let value = $(this).attr('data-filter');

 if( value === 'All'){
  $('.filter').show(300);
 }
 else{
  $('.filter').not('.' + value).hide(300);
  $('.filter').filter('.' + value).show(300);
 }
 
})
 
//dynamic active item 
$('.gallery-list-item').click(function(){
 $(this).addClass('active-item').siblings().removeClass('active-item');
});


});

































