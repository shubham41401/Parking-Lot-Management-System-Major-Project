function signInFun() {
    var username = window.document.getElementById('username').value;
    var password = window.document.getElementById('password').value;

   if(username=="admin" && password=="1234")
   {
       alert("login succesfully");
       window.location = "./entry_page.html";
       return false;
   }
   else{
       alert("login failed");
   }
}