


$(function () {

 $('#contact-form').validate();

 
 rules:{
  name:{
   required:true

  }
  email:{
   required:true
   email:true
  }
 }

 messages:{
  email:{
   required: 'We need your email adress!';
   email: 'Enter a valid email adress!';

  }
  name:{
   req:'Please enter your name!'
  }
 }
})