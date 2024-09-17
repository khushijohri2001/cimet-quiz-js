import {questionList} from "./utils/questionList.js";

const question = document.querySelector(".question");
const options = document.querySelector(".options");
const nextButton = document.querySelector(".next-btn");

let currentQuestion = 0;

const nextQuestion = () => {
    if(currentQuestion <= questionList.length){
        
        currentQuestion++;
        startQuiz()
    }
}

const startQuiz = () => {
    question.innerText = questionList[currentQuestion].question;
    questionList[currentQuestion].options.forEach((option) => {
        const createOption = document.createElement("button");
        const optionText = document.createTextNode(option)

        createOption.appendChild(optionText);

        options.appendChild(createOption)
    });
}


startQuiz();

nextButton.addEventListener("click", nextQuestion)
console.log(currentQuestion);



// for(let i = 0; i < questionList.length; i++){
    
// }




