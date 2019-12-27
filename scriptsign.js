function store(){
    var mail=document.getElementById('mail');
    var pass=document.getElementById('pass');
    var repass=document.getElementById('re-pass');
    if(pass.value==repass.value)
    {
    localStorage.setItem('mail',mail.value);
    localStorage.setItem('pass',pass.value);
    alert("Registered");
    }
    else
    {
       alert("password mismatch");
    }
}
function check(){
    var storedname=localStorage.getItem('mail');
    var storedpass=localStorage.getItem('pass');

    var username=document.getElementById('logmail');
    var password=document.getElementById('logpass')

    if(username.value==storedname && password.value==storedpass)
    {
        window.location.replace("mixbook.html");
    }
    else
    {
        alert("wrong credentials");
    }
}
