var slid =document.querySelector(".slider")
var next =document.querySelector(".right")
var previse =document.querySelector(".left")
var slid =document.querySelector(".slid")
var i=1;


next.addEventListener("click",function(){
    i++;
    if(i<6){
slid.src=`imges/portfolio-${i}.jpg`
    }
    else{
      
        slid.src=`imges/portfolio-5.jpg`
        i=0
    }
   
})

previse.addEventListener("click",function(){
 

    if(i>1){
    
        console.log(i)
slid.src=`imges/portfolio-${i}.jpg`
i--

}else{

    slid.src=`imges/portfolio-${i}.jpg`
    i=5
  
}
  
})
// setInterval(function(){
//     console.log(i)
   
//     i++
//     if(i>5 ){
//         console.log("aya")
//         i=1
//       slid.src=`imges/${i}.jpg`
    
//     //   console.log(i)
//     }else{
//         slid.src=`imges/${i}.jpg`
//     }


// },3000)
//our workes section
var element=document.getElementsByClassName("element")
var show=document.getElementsByClassName("show")

 function hidden(){
    for(var i=0;i<element.length;i++){
    element[i].style.display="none";
    }
  }
 function showtheHidden(i,data){
    show[i].addEventListener("click",function(){
        hidden();
        for(var i=0;i<data.length;i++){
      data[i].style.display="block";
        }
    })

 }
 showtheHidden(0,element)
var branding=document.getElementsByClassName("branding")
showtheHidden(1,branding)
var gRAPHIC=document.getElementsByClassName("GRAPHIC")
showtheHidden(2,gRAPHIC)
var vido=document.getElementsByClassName("vido")
showtheHidden(3,vido)
var web=document.getElementsByClassName("web")
showtheHidden(4,web)
PACKAGE
var PACKAGE =document.getElementsByClassName("PACKAGE")
showtheHidden(5,PACKAGE)

var arro=document.getElementById("arro")
var arro2=document.getElementById("arro2")
arro.addEventListener("click",function(){
arro2.href="index.html"
})
var cart=document.getElementById("count")
var add=document.getElementsByClassName("add")
var j=0;
function loop(){
    j++
    for(var i=0;i<add.length;i++){
        add[i].addEventListener("click",function(){
        
           console.log(i)
           cart.innerHTML=`  ${j}`;
           cart.style.color="white"
       })
    }
}
var prodctes=document.querySelectorAll(".prodctes a")
prodctes.forEach(function(a){

 
    a.addEventListener("click",function(){
        prodctes.forEach(function(btn){
           btn.classList.remove("activ");
        })
        a.classList.add("activ")
    })
 

})
