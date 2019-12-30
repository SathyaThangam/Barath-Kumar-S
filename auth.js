$(function(){
  const signupform= document.querySelector("#signup-form");
signupform.addEventListener('submit', function(e){
  e.preventDefault();

  const email = signupform['signup-email'].value;
  const password = signupform['signup-password'].value;
  auth.createUserWithEmailAndPassword(email,password).then(cred =>{
  var modals= document.getElementById("modal-signup");
  modals.style.display="none";
  signupform.querySelector(".error").innerHTML= '';
  signupform.reset();
  }).catch( err =>{
    signupform.querySelector(".error").innerHTML= err.message;
  });
})

 const logout=document.querySelector("#logout");
 logout.addEventListener('click',function(e){
   e.preventDefault();
   auth.signOut().then(()=>{
     console.log("signed out");
   })
 })

 const loginform= document.querySelector("#login-form");
 loginform.addEventListener('submit',function(e){
    e.preventDefault();
    const email = loginform['login-email'].value;
    const password = loginform['login-password'].value;
    auth.signInWithEmailAndPassword(email,password).then(cred=>{
      var modall= document.getElementById("modal-login");
      modall.style.display="none";
      loginform.reset();
    }).catch( err =>{
      loginform.querySelector(".error").innerHTML= err.message;
    });
 })
 var loggedout=document.querySelectorAll(".logged-out");
  var loggedin=document.querySelectorAll(".logged-in");
  var account=document.querySelector(".account-details") 
 
 auth.onAuthStateChanged(user=>{
   if(user){
     const html=`
     <div style="margin-top:20px"> Logged In as ${user.email};
     `;
     account.innerHTML = html;
    loggedin.forEach(item=> item.style.display = 'block'); 
    loggedout.forEach(item=> item.style.display = 'none');
  }else{
    account.innerHTML = '';
    loggedin.forEach(item=> item.style.display = 'none'); 
    loggedout.forEach(item=> item.style.display = 'block');
   }
 })
})

  