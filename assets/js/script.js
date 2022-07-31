// global variable declaration
var startBtn = document.querySelector(".start-btn")
var nextBtn = document.querySelector(".next-btn")
var goBackBtn = document.querySelector(".go-back-btn")
var clearScoresBtn = document.querySelector(".clear-scores-btn")
var submitInitials = document.querySelector(".submit-btn")
var quizHeader = document.querySelector(".quiz-header")
var highScoresList = document.querySelector(".high-scores")
var timerDisplay = document.querySelector(".timer")
var quizText = document.querySelector(".quiz-content")
var quizOptions = document.querySelector(".quiz-options")
var answerChoices = quizOptions.querySelectorAll(".btn-2")
var quizButtons = document.querySelector(".quiz-buttons")
var userInput = document.querySelector(".initials") 
var viewScores = document.querySelector(".view-scores")
var feedback = document.querySelector(".feedback")
var quizTime

// var userScore
// var userInitials
var randomQuestion
var currentQuestionIndex;

localStorage.getItem("initials");
localStorage.getItem("score");

// event listeners
startBtn.addEventListener('click', startQuiz)
goBackBtn.addEventListener('click', quizRules)
nextBtn.addEventListener('click', () => {
  currentQuestionIndex++
  nextQuestion()
  if (currentQuestionIndex >= 4) {
    return quizDone();
  }
})

viewScores.addEventListener('click', function(event) { 
    event.stopPropagation();
    highScores();
    
})   

submitInitials.addEventListener('click', function () {
    if (userInput.value) {
        return highScores();
    } else {
        
        alert("enter initials")
    }
})    

// functions
function quizRules() {
    quizTime = 60;
    timerDisplay.textContent = quizTime
    quizText.classList.remove("hide")
    startBtn.classList.remove("hide")
    goBackBtn.classList.add("hide")
    quizHeader.textContent = "Coding Quiz Challenge!"
    quizText.children[0].textContent = "Try to answer the following code-related questions. You will have 60 seconds to complete the quiz. Wrong answers will deduct 10 seconds from the quiz time. Good Luck!!";
    quizText.children[1].classList.add("hide")
    timerDisplay.classList.remove("hide")   
}

function init() {
    quizTime = 60;
    timerDisplay.textContent = quizTime
    quizText.classList.remove("hide")
    startBtn.classList.remove("hide")
    timerDisplay.classList.remove("hide")
    
}

function quizTimer() {
    var timer = setInterval(function() {
        if (quizTime > 0) {
        quizTime--;
        timerDisplay.textContent = quizTime;
        }
        if(quizTime === 0) {
            clearInterval(timer);
            return quizDone();
        }
         if (currentQuestionIndex >= 4) {
            clearInterval(timer);
        } 
    },
    1000);
}

function startQuiz() {
    quizTimer();
    quizTime = 60;
    quizOptions.classList.remove("hide")
    randomQuestion = quizQuestions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    nextQuestion()
}

function nextQuestion() {
  showQuestion(randomQuestion[currentQuestionIndex])
  feedback.classList.add("hide")
}

function showQuestion(question) {
    nextBtn.classList.remove("hide")
    startBtn.classList.add("hide")
    quizText.children[0].innerText = question.question

    for (var i = 0; i < question.choices.length; i++) {
        quizOptions.children[i].innerText = question.choices[i]
        
    }

    // quizOptions.children[0].innerText = question.choices[0]
    // quizOptions.children[1].innerText = question.choices[1]
    // quizOptions.children[2].innerText = question.choices[2]
    // quizOptions.children[3].innerText = question.choices[3]

    for (var i = 0; i < answerChoices.length; i++) {
        answerChoices[i].addEventListener('click', function(event) {
            
            var userAns = event.target 
            var correctAns = question.answer
            if (userAns.textContent === correctAns) {
                feedback.classList.remove("hide")
                feedback.textContent = "Correct!"
            } else if (userAns.textContent !== correctAns){
                feedback.classList.remove("hide")
                feedback.textContent = "Wrong!"
            }
        });
    }
    for (var i = 0; i < answerChoices.length; i++) {
    answerChoices[i].addEventListener('click', function(event, i) {
        var userAns = event.target 
        var correctAns = question.answer
        if (userAns.textContent !== correctAns) {
            quizTime -= 10;
}
    })
    
}}
                   
function quizDone() {
    quizOptions.classList.add("hide")
    nextBtn.classList.add("hide")
    goBackBtn.classList.add("hide")
    userInput.classList.remove("hide")
    quizText.classList.remove("hide")
    submitInitials.classList.remove("hide")
    quizText.children[0].textContent = "Enter your initials to save your score:"
    userInput.classList.remove("hide")
    quizHeader.textContent = "Quiz Done!"
}

function highScores() {
    highScoresList.classList.remove("hide")
    startBtn.classList.add("hide")
    submitInitials.classList.add("hide")
    goBackBtn.classList.remove("hide")
    quizText.children[0].textContent = "";
    quizText.children[2].textContent = "";
    userInput.classList.add("hide")
    quizHeader.textContent = "High Scores"
    var userScores = document.createElement('li')
    userScores.textContent = `${userInput.value} --- Score: ${quizTime}`;
    highScoresList.appendChild(userScores)

    localStorage.setItem("initials", userInput.value);
    localStorage.setItem("time", quizTime)
}

// questions answer choices and correct answers
var quizQuestions = [
    {
        question: "Ideally, where should the script element be placed in the HTML document?",
        choices: ["Within the <head>", "Just below the opening <body> tag", "Just above the closing </body> tag", "Anywhere is fine"],
        answer: "Just above the closing </body> tag",
    },
    {
        question: "All of the following are used within Javascript except",
        choices: ["Arrows", "Objects", "Functions", "Variables"],
        answer: "Arrows",
    },
    {
        question: "All HTML elements have an opening and a closing tag.",
        choices: ["True", "False"],
        answer: "False",
    },
    {
        question: "What does DOM stand for?",
        choices: ["Document Operator Model", "Distinguished Operators Method", "Document Object Model", "Document Objects and Methods"],
        answer: "Document Object Model",
    },
    {
        question: "The method querySelector can be used to select an element by",
        choices: ["Class", "ID", "Element's tag (e.g. h1 or div)", "All of the above"],
        answer: "All of the above",
    }
]

init();