
var startBtn = document.getElementById('start-quiz')
var mainContent = document.querySelector(".quiz-content")


var quizTime = document.querySelector(".timer")
var quizStartTime = 60;
//"Commonly used data types DO Not Include:";

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
    quizOption3.className = "answer-choice c-choice"
    quizOption3.textContent = "3. alerts"
    mainContent.appendChild(quizOption3)

    var quizOption4 = document.createElement('button');
    quizOption4.setAttribute("style", "height: 35px; width: 160px;")
    quizOption4.className = "answer-choice"
    quizOption4.textContent = "4. numbers"
    mainContent.appendChild(quizOption4)

    // if "strings", "booleans", "numbers" then quiztime - 10000
    // grading function
    var answerChoiceBtn = document.querySelector(".c-choice")
    answerChoiceBtn.addEventListener("click", immediateFeedback)
    
    function immediateFeedback() { 
        if (answerChoiceBtn) {
            var feedback = document.createElement('p')
            feedback.textContent = "Correct!";
            mainContent.appendChild(feedback)
        }
    
}
}

// time remaining function
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
    mainContent.appendChild(intialTextArea)
    var initialBtn = document.createElement('button')
    initialBtn.setAttribute("type", "submit")
    initialBtn.setAttribute("style", "width: 160px; height: 80px;")
    mainContent.appendChild(initialBtn)
    initialBtn.addEventListener("click", quizHighScores);

   

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
    goBackBtn.setAttribute("type", "submit")
    goBackBtn.setAttribute("style", "width: 160px; height: 80px;")
    mainContent.appendChild(goBackBtn)
    var clearHighScores = document.createElement('button')
    clearHighScores.setAttribute("type", "submit")
    clearHighScores.setAttribute("style", "width: 160px; height: 80px;")
    mainContent.appendChild(clearHighScores)

    
    
    
    
};




// event listener for correct answer

startBtn.addEventListener("click", startQuiz);
startBtn.addEventListener("click", timeRemaining);


