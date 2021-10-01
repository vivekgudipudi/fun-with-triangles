var isHypotenuseButton=document.querySelector("#btn-hypotenuse");
var hypotenuseinput=document.querySelectorAll('.hypotenuseinput');
var resultHypotenuse=document.querySelector('#result-hypotenuse');

function calculateHypotenuse(base,height){
    return Math.sqrt((baseHypotenuse**2)+(heightHypotenuse**2));
}

function displayIfHypotenuse(){
    baseHypotenuse=Number(hypotenuseinput[0].value);
    heightHypotenuse=Number(hypotenuseinput[1].value);
    var hypotenuse;
    if (baseHypotenuse && heightHypotenuse){
        if ((baseHypotenuse<0) || (heightHypotenuse<0)){
            resultHypotenuse.innerText="Base or Height values cannot be negative";
        }
        else {
            hypotenuse= calculateHypotenuse(baseHypotenuse,heightHypotenuse);
            resultHypotenuse.innerText=`Hypotenuse is ${hypotenuse}`;
    
        }
    } 
    else{
        resultHypotenuse.innerText="Enter base and height values greater than zero";
    }  
    
}


isHypotenuseButton.addEventListener("click",displayIfHypotenuse);