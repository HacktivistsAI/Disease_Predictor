document.getElementById('signup-btn').addEventListener('click',function(){
   document.getElementById('sign-up').style.display="inline";
   document.getElementById('sign-in').style.display="none";
    // alert("Welcome to Sign Up Page");
 });
 document.getElementById('signin-btn').addEventListener('click',function(){
    document.getElementById('sign-up').style.display="none";
    document.getElementById('sign-in').style.display="inline";
    // alert("Welcome to Sign In Page");
 });
