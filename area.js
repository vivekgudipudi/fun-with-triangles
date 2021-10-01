var inputOfTriangle=document.querySelectorAll(".area-input");
var result=document.querySelector("#area-result");
var btnArea=document.querySelector("#btn-area");

function calculateArea(base,height){
    return ((base*height)/2);
}

function displayResult(){
    var base=Number(inputOfTriangle[0].value);
    var height=Number(inputOfTriangle[1].value);
    if(base && height){
        if ((base<0) || (height<0)){
            result.innerText="Base and height values cannot be negative";
        }
        else{
            var area=calculateArea(base,height);
            result.innerText=`The area of triangle is: ${area}`;
        }
    }
    else{
        result.innerText="Enter base and height values greater than zero";
    }
}

btnArea.addEventListener("click",displayResult);