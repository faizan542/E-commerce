var MenuItems =document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle(){
if (MenuItems.style.maxHeight == "0px")
{
MenuItems.style.maxHeight = "200px"
}else{
MenuItems.style.maxHeight = "0px"
}

}

// ----------------Js for Toggle Form--------------------------

var logInForm = document.getElementById("LoginForm");
var regForm = document.getElementById("RegForm");
var indicator = document.getElementById("Indicator");

function register(){
    regForm.style.transform = "translateX(0px)";
    logInForm.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)";
}

function login(){
    regForm.style.transform = "translateX(300px)";
    logInForm.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0px)";
}
