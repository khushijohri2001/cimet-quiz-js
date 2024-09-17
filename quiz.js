import { questionList } from "./utils/questionList.js";

const question = document.querySelector(".question");
const options = document.querySelector(".options");
const nextButton = document.querySelector(".next-btn");
const countDownValue = document.querySelector(".countDownValue");

let currentQuestion = 0;
let score = 0;

const nextQuestionDetail = () => {
  if (currentQuestion < questionList.length - 1) {
    questionList[currentQuestion].options.forEach(() => deleteOption());

    currentQuestion++;
    startQuiz();
    if (nextButton.innerText === "Submit") {
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

const countDown = () => {
  let initialCountDownValue = 5;

  const timer = setInterval(() => {
    if (initialCountDownValue > 0) {
      countDownValue.innerText = initialCountDownValue;
      initialCountDownValue--;
    } else {
      clearInterval(timer);
      questionList[currentQuestion].options.forEach(() => deleteOption());
      currentQuestion++;
      startQuiz();
    }
  }, 1000);
};

const startQuiz = () => {
  if (currentQuestion < questionList.length - 1) {
    // countDown();  1 is the initial value of next question timer
  }
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
