import data from './data.json' assert { type: 'json' };

const questionContainter = document.getElementById("question");
const userInput = document.getElementById("ans");
const submitBtn = document.getElementById("btn");

const generateQuestion = () => {
    const num = Math.floor(Math.random() * data.length);
    const dataQuestion = data[num].question;
    const question = dataQuestion.charAt(0).toUpperCase() + dataQuestion.slice(1);
    
    questionContainter.innerText = question;

    submitBtn.onclick = () => {
        const userAnswer = userInput.value;
    
    if(userAnswer.toLowerCase() == data[num].answer) {
        console.log("correct!");
        userInput.value = "";
        generateQuestion();
    } else {
        console.log("wrong");
        alert("wrong");
    }
    };
}

generateQuestion()
