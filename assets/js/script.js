// variable containing the start quiz button
var quizStartBtn = document.getElementById('start-quiz')
// variable containing the the main content that will be dynamically changed; contains h1, p, ul and button
var mainContent = document.querySelector(".quiz-content")
// variable containing the the span element containing the quiz timer
var quizTime = document.querySelector(".timer")

var quizStartTime = 60;

var timerProgress = true;

// event listen so that when the start quiz button is clicked, the quiz starts
quizStartBtn.addEventListener("click", startQuiz);
// event listener so that when the quiz starts, the timer also starts
quizStartBtn.addEventListener("click", quizTimer);

// this function sets the time limit for the quiz
function quizTimer() {
    var timer = setInterval(function() {
        if (timerProgress) {
        quizStartTime--;
        quizTime.textContent = quizStartTime;
        }
        if(quizStartTime === 0) {
            clearInterval(timer);
        }
        
    },
    1000);
}


function startQuiz() {
    quizTime.textContent = quizStartTime;
    quizStartTime = 60;
    timerProgress = true;
    mainContent.textContent = "";
    var quizQuestion = document.createElement('h2')
    quizQuestion.textContent = "Commonly used data types DO Not Include:";
    mainContent.appendChild(quizQuestion)

    var quizOption1 = document.createElement('button');
    quizOption1.setAttribute("style", "height: 35px; width: 160px;")
    quizOption1.className = "answer-choice"
    quizOption1.textContent = "1. strings"
    mainContent.appendChild(quizOption1)

    var quizOption2 = document.createElement('button');
    quizOption2.setAttribute("style", "height: 35px; width: 160px;")
    quizOption2.className = "answer-choice"
    quizOption2.textContent = "2. booleans"
    mainContent.appendChild(quizOption2)

    var quizOption3 = document.createElement('button');
    quizOption3.setAttribute("style", "height: 35px; width: 160px;")
    quizOption3.className = "c-choice answer-choice"
    quizOption3.textContent = "3. alerts"
    mainContent.appendChild(quizOption3)

    var quizOption4 = document.createElement('button');
    quizOption4.setAttribute("style", "height: 35px; width: 160px;")
    quizOption4.className = "answer-choice"
    quizOption4.textContent = "4. numbers"
    mainContent.appendChild(quizOption4)

    var answerChoiceBtn = document.getElementsByClassName("answer-choice")

    // for loop to set up grading of the answer choices
    for ( var i = 0; i < answerChoiceBtn.length; i++)
    if (answerChoiceBtn[i].classList == "answer-choice") {
       answerChoiceBtn[i].addEventListener("click", wrongFeedback)
       answerChoiceBtn[i].addEventListener("click", questionTwo)
    } else if (answerChoiceBtn[i].classList == "c-choice answer-choice") {
        answerChoiceBtn[i].addEventListener("click", correctFeedback) 
        answerChoiceBtn[i].addEventListener("click", questionTwo)
    };
    
};

function questionTwo() {
    mainContent.textContent = "";
    var quizQuestionTwo = document.createElement('h2')
    quizQuestionTwo.textContent = "Arrays in Javascript can be used to store _________.";
    mainContent.appendChild(quizQuestionTwo)

    var quizOption1Q2 = document.createElement('button');
    quizOption1Q2.setAttribute("style", "height: 35px; width: 250px;")
    quizOption1Q2.className = "answer-choice"
    quizOption1Q2.textContent = "1. numbers and strings"
    mainContent.appendChild(quizOption1Q2)

    var quizOption2Q2 = document.createElement('button');
    quizOption2Q2.setAttribute("style", "height: 35px; width: 250px;")
    quizOption2Q2.className = "answer-choice"
    quizOption2Q2.textContent = "2. other arrays"
    mainContent.appendChild(quizOption2Q2)

    var quizOption3Q2 = document.createElement('button');
    quizOption3Q2.setAttribute("style", "height: 35px; width: 250px;")
    quizOption3Q2.className = "answer-choice"
    quizOption3Q2.textContent = "3. booleans"
    mainContent.appendChild(quizOption3Q2)

    var quizOption4Q2 = document.createElement('button');
    quizOption4Q2.setAttribute("style", "height: 35px; width: 250px;")
    quizOption4Q2.className = "c-choice answer-choice"
    quizOption4Q2.textContent = "4. all of the above"
    mainContent.appendChild(quizOption4Q2)

    var answerChoiceBtn = document.getElementsByClassName("answer-choice")

    // for loop to set up grading of the answer choices
    for ( var i = 0; i < answerChoiceBtn.length; i++)
    if (answerChoiceBtn[i].classList == "answer-choice") {
       answerChoiceBtn[i].addEventListener("click", wrongFeedback) 
       answerChoiceBtn[i].addEventListener("click", quizDone) 
       
    } else if (answerChoiceBtn[i].classList == "c-choice answer-choice") {
        answerChoiceBtn[i].addEventListener("click", correctFeedback) 
        answerChoiceBtn[i].addEventListener("click", quizDone) 
        
    };
};


function quizDone(){
    mainContent.innerHTML = ""
    timerProgress = false;
    var quizFinalText = document.createElement('h2')
    quizFinalText.textContent = "All done!";
    mainContent.appendChild(quizFinalText)
   
    var finalScoreText = document.createElement('p')
    finalScoreText.textContent = `Your final score is ${quizStartTime}`;
    mainContent.appendChild(finalScoreText)

    var enterInitial = document.createElement('p')
    enterInitial.textContent = "Enter initials:"
    mainContent.appendChild(enterInitial)

    var intialTextArea = document.createElement('textarea')
    intialTextArea.className = "user-input"
    mainContent.appendChild(intialTextArea)
    
    var initialBtn = document.createElement('button')
    initialBtn.textContent = "Submit"
    initialBtn.setAttribute("type", "button")
    initialBtn.className = "submit-initials"
    initialBtn.setAttribute("style", "width: 160px; height: 80px;")
    mainContent.appendChild(initialBtn)

    
    var nameInput = document.querySelector(".user-input");
    var submissionResponseEl = document.createElement('p')
    
function quizHighScores() {
  
    mainContent.innerHTML = ""
    var quizFinalPage = document.createElement('h1')
    quizFinalPage.textContent = "High Scores";
    mainContent.appendChild(quizFinalPage)
   
    var finalClassScore = document.createElement('h2')
    finalClassScore.textContent = `1. ${nameInput.value}; Score: ${quizStartTime}`;
    mainContent.appendChild(finalClassScore)

    var goBackBtn = document.createElement('button')
    goBackBtn.textContent = "Go Back"
    goBackBtn.className = "go-back"
    goBackBtn.setAttribute("type", "button")
    goBackBtn.setAttribute("style", "width: 160px; height: 80px;")
    mainContent.appendChild(goBackBtn)

    goBackBtn.addEventListener("click", startQuiz);

    var clearHighScores = document.createElement('button')
    clearHighScores.setAttribute("type", "button")
    clearHighScores.textContent = "Clear Scores"
    clearHighScores.setAttribute("style", "width: 160px; height: 80px;")
    mainContent.appendChild(clearHighScores)

    var response = `Thank you for taking the Code Quiz, ${nameInput.value}!`
     mainContent.appendChild(submissionResponseEl)
    submissionResponseEl.textContent = response;
}

initialBtn.addEventListener("click", quizHighScores);    
  

}


// function to provide feedback for wrong answers and deduct 10 seconds from the quiz time
function wrongFeedback() { 
    quizStartTime-= 10;
    var feedback = document.createElement('p')
    feedback.textContent = "wrong!";
    mainContent.appendChild(feedback)
            
};

// function to provide feedback for correct answers
function correctFeedback() { 
    var feedback = document.createElement('p')
    feedback.textContent = "Correct!";
    mainContent.appendChild(feedback)
}


