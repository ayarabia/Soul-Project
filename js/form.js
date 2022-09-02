// form validation
var yourname=document.getElementById("name")
var email=document.getElementById("email")
var password=document.getElementById("pass")
var submit=document.getElementById("submit")
var notvalid=document.getElementsByClassName("notvalid")
var counter=0;
console.log(yourname)
function nameValid(){
    if(!(yourname.value.match(/^[a-z ]{3,15}$/i))){
notvalid[0].innerHTML="Enter valid name !! name must be letters"
notvalid[0].style.color="white"
counter++;
    }else{
        notvalid[0].innerHTML=""
    }
}
function emailValid(){
    if(!(email.value.match(/^[a-z0-9_\.]{5,20}@[a-z]{4,9}\.[a-z]{3,5}$/i))){
notvalid[1].innerHTML="Enter valid email"
notvalid[1].style.color="white"
counter++;
    }else{
        notvalid[1].innerHTML=""
    }
}
function passValid(){
    if(!(password.value.length==8)){
notvalid[2].innerHTML="password must be at least 8 characters"
notvalid[2].style.color="white"
counter++;
    }else{
        notvalid[2].innerHTML=""
    }
}

submit.addEventListener("click",function(e){
    e.preventDefault();
    counter=0;
    nameValid()  
    emailValid()
    passValid()
    if(counter==0){
document.getElementById("form").reset()
    } 
   



})