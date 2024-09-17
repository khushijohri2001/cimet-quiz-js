import { questionList } from "./utils/questionList.js";

const question = document.querySelector(".question");
const options = document.querySelector(".options");
const nextButton = document.querySelector(".next-btn");

let currentQuestion = 0;
let score = 0;

const nextQuestionDetail = () => {
  if (currentQuestion < questionList.length - 1) {
    questionList[currentQuestion].options.forEach(() => deleteOption());

    currentQuestion++;
    startQuiz();
    if(nextButton.innerText === "Submit"){

    }
    
  }
};



const createOption = (optionText) => {
  const createElement = document.createElement("button");
  const createTextNode = document.createTextNode(optionText);

  createElement.appendChild(createTextNode);
  createElement.classList.add("option");

  options.appendChild(createElement);
};



const deleteOption = () => {
  document.querySelector(".option").remove();
};



const startQuiz = () => {
  question.innerText = questionList[currentQuestion].question;
  questionList[currentQuestion].options.forEach((option) => {
    createOption(option);
  });

  if (currentQuestion === questionList.length - 1) {
    nextButton.innerText = "Submit";
  }
};

startQuiz();


nextButton.addEventListener("click", nextQuestionDetail);
