var slid=document.getElementsByClassName("slid2")
var text=document.getElementsByClassName("text2")
slid[0].addEventListener("click",function(){
// var nextElement=slid[0].nextElementSibling;
// console.log(nextElement)
    if(text[0].offsetHeight>0){
        console.log("true")
        text[0].style.height=`0`

    }else{
        text[0].style.height=`${text[0].scrollHeight}px`
        console.log("fals")
    }
})
slid[1].addEventListener("click",function(){

    if(text[1].offsetHeight>0){
        console.log("true")
        text[1].style.height=`0`
    }else{
        text[1].style.height=`${text[0].scrollHeight}px`
        var nextElement=slid[1].previousElementSibling;
        nextElement.style.height="0"
        console.log("fals")
    }
})