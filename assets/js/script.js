
var startBtn = document.getElementById('start-quiz')
var mainContent = document.querySelector(".quiz-content")
var quizTime = document.querySelector(".timer")
var quizStartTime = 60;
// var userScore = 0;
// var userInitials = "";

function init() {
    getUserInitials();
    getUserScore();
}

function getUserInitials() {  
    var storedWins = localStorage.getItem("winCount");
    if (storedWins === null) {
      winCounter = 0;
    } else {
      winCounter = storedWins;
    }
    
  };

  function getUserScore() {
    var storedLosses = localStorage.getItem("loseCount");
    if (storedLosses === null) {
      loseCounter = 0;
    } else {
      loseCounter = storedLosses;
    }
    
  };


function timeRemaining () {
    var quizTimer = setInterval(function() {
        quizStartTime--;
        quizTime.textContent = quizStartTime;
        if(quizStartTime === 0) {
            clearInterval(quizTimer);
            return quizDone();
        } 
    },
    1000);
}

function startQuiz() {
    quizTime.textContent = "60";
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

    for ( var i = 0; i < answerChoiceBtn.length; i++)
    if (answerChoiceBtn[i].classList == "answer-choice") {
       answerChoiceBtn[i].addEventListener("click", wrongFeedback) 
    } else if (answerChoiceBtn[i].classList == "c-choice answer-choice") {
        answerChoiceBtn[i].addEventListener("click", correctFeedback) 
    };

    function wrongFeedback() { 
            var feedback = document.createElement('p')
            feedback.textContent = "wrong!";
            mainContent.appendChild(feedback)
            return questionTwo();
    };
    function correctFeedback() { 
        var feedback = document.createElement('p')
        feedback.textContent = "Correct!";
        mainContent.appendChild(feedback)
        return questionTwo();
    }

};

    function questionTwo() {
        // mainContent.textContent = "";
        var quizQuestionTwo = document.createElement('h2')
        quizQuestionTwo.textContent = "Arrays in Javascript can be used to store _________.";
        mainContent.appendChild(quizQuestionTwo)
    
        var quizOption1 = document.createElement('button');
        quizOption1.setAttribute("style", "height: 35px; width: 160px;")
        quizOption1.className = "answer-choice"
        quizOption1.textContent = "1. numbers and strings"
        mainContent.appendChild(quizOption1)
    
        var quizOption2 = document.createElement('button');
        quizOption2.setAttribute("style", "height: 35px; width: 160px;")
        quizOption2.className = "answer-choice"
        quizOption2.textContent = "2. other arrays"
        mainContent.appendChild(quizOption2)
    
        var quizOption3 = document.createElement('button');
        quizOption3.setAttribute("style", "height: 35px; width: 160px;")
        quizOption3.className = "answer-choice"
        quizOption3.textContent = "3. booleans"
        mainContent.appendChild(quizOption3)
    
        var quizOption4 = document.createElement('button');
        quizOption4.setAttribute("style", "height: 35px; width: 160px;")
        quizOption4.className = "c-choice answer-choice"
        quizOption4.textContent = "4. all of the above"
        mainContent.appendChild(quizOption4)
    
// --------------------------------------- NOTES
    // need to create a function for each question and call it
    // need to set up correct grading
    // need to tie in correct/wrong answers to score and time
// ------------------------------------------
    // grading function
    
    var answerChoiceBtn = document.getElementsByClassName("answer-choice")

    for ( var i = 0; i < answerChoiceBtn.length; i++)
    if (answerChoiceBtn[i].classList == "answer-choice") {
       answerChoiceBtn[i].addEventListener("click", wrongFeedback) 
    } else if (answerChoiceBtn[i].classList == "c-choice answer-choice") {
        answerChoiceBtn[i].addEventListener("click", correctFeedback) 
    };

    function wrongFeedback() { 
            var feedback = document.createElement('p')
            feedback.textContent = "wrong!";
            mainContent.appendChild(feedback)
            return quizDone();
    };
    function correctFeedback() { 
        var feedback = document.createElement('p')
        feedback.textContent = "Correct!";
        mainContent.appendChild(feedback)
        return quizDone();
    }

}

// selects all correct choices
var correctChoice = document.getElementsByClassName('correct-answer')

// quiz done
function quizDone(){
    mainContent.innerHTML = ""
    var quizFinalText = document.createElement('h2')
    quizFinalText.textContent = "All done!";
    mainContent.appendChild(quizFinalText)
   
    var finalScoreText = document.createElement('p')
    finalScoreText.textContent = "Your final score is " + quizStartTime;
    mainContent.appendChild(finalScoreText)
    var enterInitial = document.createElement('p')
    enterInitial.textContent = "Enter initials:"
    mainContent.appendChild(enterInitial)
    var intialTextArea = document.createElement('textarea')
    intialTextArea.className = "user-input"
    // intialTextArea.textContent = ""
    mainContent.appendChild(intialTextArea)
    
    var initialBtn = document.createElement('button')
    initialBtn.textContent = "Submit"
    initialBtn.setAttribute("type", "submit")
    initialBtn.className = "submit-initials"
    initialBtn.setAttribute("style", "width: 160px; height: 80px;")
    mainContent.appendChild(initialBtn)

    initialBtn.addEventListener("click", quizHighScores);

    initialBtn.addEventListener("click", submitInitials);


    function submitInitials() {
    var intialsSubmitBtn = document.querySelector(".submit-initials")
        if (intialsSubmitBtn) {
            alert("Hi")
        }
    }
};

// final score tracking function
function quizHighScores(){
    mainContent.innerHTML = ""
    var quizFinalPage = document.createElement('h2')
    quizFinalPage.textContent = "High Scores";
    mainContent.appendChild(quizFinalPage)
   
    var finalClassScore = document.createElement('ol')
    finalClassScore.textContent = "1. AB - " + quizStartTime;
    mainContent.appendChild(finalClassScore)

    var goBackBtn = document.createElement('button')
    goBackBtn.textContent = "Go Back"
    goBackBtn.className = "go-back"
    goBackBtn.setAttribute("type", "submit")
    goBackBtn.setAttribute("style", "width: 160px; height: 80px;")
    mainContent.appendChild(goBackBtn)

    var clearHighScores = document.createElement('button')
    clearHighScores.setAttribute("type", "submit")
    clearHighScores.textContent = "Clear Scores"
    clearHighScores.setAttribute("style", "width: 160px; height: 80px;")
    mainContent.appendChild(clearHighScores)

    goBackBtn.addEventListener("click", init);

};




// event listener for correct answer
init();
startBtn.addEventListener("click", startQuiz);
startBtn.addEventListener("click", timeRemaining);


