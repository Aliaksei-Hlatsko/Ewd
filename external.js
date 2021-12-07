btn =document.getElementById("button");
btn.addEventListener("click", myScript);
var a = 0;
function myScript(){
    b = a+=1;
    console.log("You clicked the button " + b + " times");

}