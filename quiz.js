import { questionList } from "./utils/questionList.js";

const question = document.querySelector(".question");
const options = document.querySelector(".options");
const countDownValue = document.querySelector(".countDownValue");
const quizCard = document.querySelector(".card");
const quizCardElements = document.querySelectorAll(".card div");

let currentQuestionIndex = 0;
let score = 0;

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
    countDownValue.innerText = initialCountDownValue;
    initialCountDownValue--;

    if (initialCountDownValue < 0) {
      clearInterval(timer);
      questionList[currentQuestionIndex].options.forEach(() => deleteOption());
      currentQuestionIndex = currentQuestionIndex + 1;
      countDownValue.innerText = 5;

      if (currentQuestionIndex + 1 <= questionList.length) {
        startQuiz();
      } else {
        quizCardElements.forEach((element) =>
          element.classList.add("display-hide")
        );

        displayResult();
      }
    }
  }, 1000);
};

const displayResult = () => {
  const createHeading = document.createElement("h3");
  createHeading.innerText = `Your score is: ${score}/${questionList.length}`;
  quizCard.append(createHeading);
};

const startQuiz = () => {
  if (currentQuestionIndex < questionList.length) {
    countDown();
  }
  question.innerText = `Q ${currentQuestionIndex + 1} ${
    questionList[currentQuestionIndex].question
  }`;
  questionList[currentQuestionIndex].options.forEach((option) => {
    createOption(option);
  });

  const optionParent = document.querySelector(".options");

  optionParent.addEventListener("click", (e) => {
    const optionList = document.querySelectorAll("button");

    optionList.forEach((option) => {
      const selectedOption = e.target;

      if (
        selectedOption.nodeName === "BUTTON" &&
        selectedOption.innerText === option.innerText
      ) {
        if (
          selectedOption.innerText === questionList[currentQuestionIndex].correct
        ) {
          selectedOption.classList.add("correct-option");

          console.log(selectedOption);
        } else {
          selectedOption.classList.add("incorrect-option");
        }
      }
      option.disabled = true;
    });
  });
};

startQuiz();
