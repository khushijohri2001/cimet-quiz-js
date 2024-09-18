import { questionList } from "./utils/questionList.js";

const question = document.querySelector(".question");
const options = document.querySelector(".options");
const countDownValue = document.querySelector(".countDownValue");

let currentQuestion = 0;
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
            questionList[currentQuestion].options.forEach(() => deleteOption());
            currentQuestion = currentQuestion + 1;
            countDownValue.innerText = 5;

            if (currentQuestion + 1 <= questionList.length) {
                startQuiz();
            }
        }
    }, 1000);
};


const startQuiz = () => {

    if (currentQuestion < questionList.length) {
        countDown();
    }
    question.innerText = `Q ${currentQuestion + 1} ${questionList[currentQuestion].question}`;
    questionList[currentQuestion].options.forEach((option) => {
        createOption(option);
    });

    const optionParent = document.querySelector(".options");

    optionParent.addEventListener("click", (e) => {
        const optionList = document.querySelectorAll("button");

        optionList.forEach(option => {
            const selectedOption = e.target;

            if (selectedOption.nodeName === "BUTTON" && selectedOption.innerText === option.innerText) {
                if (selectedOption.innerText === questionList[currentQuestion].correct) {
                    selectedOption.classList.add("correct-option");
                    console.log(selectedOption);
                    

                } else {
                    selectedOption.classList.add("incorrect-option")
                }
            }
            option.disabled = true
        });
    })
}



startQuiz();
