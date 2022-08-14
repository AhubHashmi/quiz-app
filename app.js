var questions = [{
        question: "Independence Day of Pakistan",
        options: ["14th August", "15th August", "16th August"],
        correctAnswer: "14th August",
    },
    {
        question: "HTML stands for _______________________",
        options: ["HyperTextMakeupLanguage", "HyperTextMarkupLanguage", "HoTMaiL"],
        correctAnswer: "HyperTextMarkupLanguage",
    },
    {
        question: "CSS stands for ___________________",
        options: ["ComputerSourceStyle", "CodeStyleStructure", "CascadingStyleSheet"],
        correctAnswer: "CascadingStyleSheet",
    },
    {
        question: "JavaScript is a: ",
        options: ["Programming Language", "Data Base", "Computer Language"],
        correctAnswer: "Programming Language",
    },
];

var question = document.getElementById("question");
var currentQuestion = document.getElementById("currentQuestion");
var totalQuestions = document.getElementById("totalQuestions");
var answerParent = document.getElementById("answerParent");
var indexNumber = 0;
var score = 0;

function startQuiz() {
    question.innerHTML = questions[indexNumber].question;
    answerParent.innerHTML = "";
    for (var i = 0; i < questions[indexNumber].options.length; i++) {
        answerParent.innerHTML += `<div class="col-md-6 py-2"><button onclick="checkQuestion(this, '${questions[indexNumber].correctAnswer}')" class="btn w-100 btn-info">${questions[indexNumber].options[i]}</button></div>`;
    }
    totalQuestions.innerHTML = questions.length;
    currentQuestion.innerHTML = indexNumber + 1;
}
startQuiz();

function nextQuestion() {
    answerParent.innerHTML = "";
    if (indexNumber == questions.length - 1) {
        alert("Quiz Completed");
        alert("Your Score is " + score + "/4");
    } else {
        indexNumber = indexNumber + 1;
        startQuiz();
    }
}

function checkQuestion(elem, correctOption) {
    var userOption = elem.innerHTML;
    if (userOption == correctOption) {
        score = score + 1;
    }
    console.log(score);
    var allOptionBtns = answerParent.getElementsByTagName("BUTTON");
    for (var i = 0; i < allOptionBtns.length; i++) {
        allOptionBtns[i].disabled = true;
        if (allOptionBtns[i].innerHTML === correctOption) {
            allOptionBtns[i].className += " bg-success"
        } else {
            allOptionBtns[i].className += " bg-danger"
        }
    }
}