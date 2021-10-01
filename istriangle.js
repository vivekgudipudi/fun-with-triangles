var isTrianglebutton=document.querySelector("#btn-is-triangle");
var isTriangleangle=document.querySelectorAll(".angle");
var isTriangleresult=document.querySelector("#result-is-triangle");


function calculateSumOfAngles(ang1,ang2,ang3){
    return (ang1+ang2+ang3);

}

function isTriangle(){
    var angle1=Number(isTriangleangle[0].value);
    var angle2=Number(isTriangleangle[1].value);
    var angle3=Number(isTriangleangle[2].value);
     if ((angle1 && angle2) && angle3){
        if (((angle1<0) || (angle2<0))|| (angle3<0)){
            isTriangleresult.innerText="The values of angles cannot be negative";
        }
        else{
            var total=calculateSumOfAngles(angle1,angle2,angle3);
            if ((total)===180){
                isTriangleresult.innerText="Yay! It is a triangle";
            }
            else{
                isTriangleresult.innerText="No sorry not a triangle";
            }
        }
        
    }
    else{
        isTriangleresult.innerText="Please enter all the values greater than zero";
    }
    
}



isTrianglebutton.addEventListener("click",isTriangle);