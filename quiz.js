var btnQuiz=document.querySelector('#triangle-quiz');
var outputQuiz=document.querySelector('#quiz-result');
var formQuiz=document.querySelector('form');

const correctAnswers={
    question1:"90",
    question2:"right angled",
    question3:"scalene",
    question4:"equilateral",
    question5:"60"};

function calculateScore(){
    var data=new FormData(formQuiz);
    var score=0;
    for(let value of data.entries()){
        if(correctAnswers[value[0]]===value[1].toLowerCase()){
            score=score+1;
        }
    }

    outputQuiz.innerText=`Your score is ${score}`;

}

btnQuiz.addEventListener('click',calculateScore);