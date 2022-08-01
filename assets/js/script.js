// variable selecting the start quiz button by class
var quizStartBtn = document.querySelector('.start-quiz')
// variable containing the the main content that will be dynamically changed; contains h1, p, ul and button
var mainContent = document.querySelector(".quiz-content")
// variable containing the the span element containing the quiz timer
var quizTime = document.querySelector(".timer")
// value set for the quiz start time
var quizStartTime = 60;
var timerProgress = true;

// accessing the stored user initials and score from local storage
localStorage.getItem("initials");
localStorage.getItem("score");

// this function sets the time limit for the quiz and counts down by 1 sec; also used to stop the quiz when time runs out
function quizTimer() {
    var timer = setInterval(function() {
        if (timerProgress) {
        quizStartTime--;
        quizTime.textContent = quizStartTime;
        }
        if(quizStartTime === 0) {
            clearInterval(timer);
            quizDone();
        }
    },
    1000);
}

// function that is being called when the quiz loads and is used to display the content of the first page
function init(){
    mainContent.textContent = "";
    var quizIntro = document.createElement('h1')
    quizIntro.textContent = "Coding Quiz Challenge";
    mainContent.appendChild(quizIntro)

    var quizRules = document.createElement('p');
    quizRules.textContent = "The following quiz will test your knowledge on common code related topics. You will have 60 seconds and wrong answers will deduct 10 seconds!. Good Luck!!"
    mainContent.appendChild(quizRules)

    var quizStartBtn = document.createElement('button')
    quizStartBtn.setAttribute("type", 'button')
    quizStartBtn.textContent = "Start the Quiz";
    quizStartBtn.className = "start-quiz"
    mainContent.appendChild(quizStartBtn)

    // event listener for when the start quiz button is clicked, the quiz starts
    quizStartBtn.addEventListener("click", startQuiz);

    // event listener so that when the quiz starts, the timer also starts
    quizStartBtn.addEventListener("click", quizTimer);
}

// this function is triggered when the start button is clicked and starts to show the first question
function startQuiz() {
    quizTime.textContent = quizStartTime;
    quizStartTime = 60;
    timerProgress = true;
    mainContent.textContent = "";
    var quizQuestion = document.createElement('h2')
    quizQuestion.textContent = "Ideally, where should the script element be placed in the HTML document?";
    mainContent.appendChild(quizQuestion)

    var quizOption1 = document.createElement('button');
    quizOption1.setAttribute("style", "height: 35px; width: fit-content;")
    quizOption1.className = "answer-choice"
    quizOption1.textContent = "1. Within the <head>"
    mainContent.appendChild(quizOption1)

    var quizOption2 = document.createElement('button');
    quizOption2.setAttribute("style", "height: 35px; width: fit-content;")
    quizOption2.className = "answer-choice"
    quizOption2.textContent = "2. Just below the opening <body> tag"
    mainContent.appendChild(quizOption2)

    var quizOption3 = document.createElement('button');
    quizOption3.setAttribute("style", "height: 35px; width: fit-content;")
    quizOption3.className = "c-choice answer-choice"
    quizOption3.textContent = "3. Just above the closing </body> tag"
    mainContent.appendChild(quizOption3)

    var quizOption4 = document.createElement('button');
    quizOption4.setAttribute("style", "height: 35px; width: fit-content;")
    quizOption4.className = "answer-choice"
    quizOption4.textContent = "4. Anywhere is fine"
    mainContent.appendChild(quizOption4)

    var answerChoiceBtn = document.getElementsByClassName("answer-choice")
    var nextBtn = document.createElement('button')
        nextBtn.addEventListener('click', questionTwo)
        nextBtn.textContent = "Next"
        nextBtn.classList.add("next-btn")
        nextBtn.classList.add("hde-btn")
        mainContent.appendChild(nextBtn)

    // for loop to set up grading of the answer choices
    for ( var i = 0; i < answerChoiceBtn.length; i++)
    if (answerChoiceBtn[i].classList == "answer-choice") {
        
       answerChoiceBtn[i].addEventListener("click", wrongFeedback)
       
    //    answerChoiceBtn[i].addEventListener("click", questionTwo)
    } else if (answerChoiceBtn[i].classList == "c-choice answer-choice") {
        answerChoiceBtn[i].addEventListener("click", correctFeedback) 
        // answerChoiceBtn[i].addEventListener("click", questionTwo)
        
    };
    
};

// this function shows the 2nd quiz question and is called when the user answers the first question and hits next
function questionTwo() {
    mainContent.textContent = "";
    var quizQuestionTwo = document.createElement('h2')
    quizQuestionTwo.textContent = "All of the following are used within Javascript except";
    mainContent.appendChild(quizQuestionTwo)

    var quizOption1Q2 = document.createElement('button');
    quizOption1Q2.setAttribute("style", "height: 35px; width: fit-content;")
    quizOption1Q2.className = "c-choice answer-choice"
    quizOption1Q2.textContent = "1. Arrows"
    mainContent.appendChild(quizOption1Q2)

    var quizOption2Q2 = document.createElement('button');
    quizOption2Q2.setAttribute("style", "height: 35px; width: fit-content;")
    quizOption2Q2.className = "answer-choice"
    quizOption2Q2.textContent = "2. Objects"
    mainContent.appendChild(quizOption2Q2)

    var quizOption3Q2 = document.createElement('button');
    quizOption3Q2.setAttribute("style", "height: 35px; width: fit-content;")
    quizOption3Q2.className = "answer-choice"
    quizOption3Q2.textContent = "3. Functions"
    mainContent.appendChild(quizOption3Q2)

    var quizOption4Q2 = document.createElement('button');
    quizOption4Q2.setAttribute("style", "height: 35px; width: fit-content;")
    quizOption4Q2.className = "answer-choice"
    quizOption4Q2.textContent = "4. Variables"
    mainContent.appendChild(quizOption4Q2)

    var answerChoiceBtn = document.getElementsByClassName("answer-choice")
    var nextBtn = document.createElement('button')
        nextBtn.addEventListener('click', questionThree)
        nextBtn.textContent = "Next"
        nextBtn.classList.add("next-btn")
        nextBtn.classList.add("hde-btn")
        mainContent.appendChild(nextBtn)

    // for loop to set up grading of the answer choices
    for ( var i = 0; i < answerChoiceBtn.length; i++)
    if (answerChoiceBtn[i].classList == "answer-choice") {
       answerChoiceBtn[i].addEventListener("click", wrongFeedback) 
       
    } 
     
       
     else if (answerChoiceBtn[i].classList == "c-choice answer-choice") {
        answerChoiceBtn[i].addEventListener("click", correctFeedback) 
        
        
    }
}

// this function shows the 3rd quiz question and is called when the user answers the previous question and hits next
function questionThree() {
    mainContent.textContent = "";
    var quizQuestionThree = document.createElement('h2')
    quizQuestionThree.textContent = "All HTML elements have an opening and a closing tag.";
    mainContent.appendChild(quizQuestionThree)

    var quizOption1Q3 = document.createElement('button');
    quizOption1Q3.setAttribute("style", "height: 35px; width: fit-content;")
    quizOption1Q3.className = "answer-choice"
    quizOption1Q3.textContent = "1. True"
    mainContent.appendChild(quizOption1Q3)

    var quizOption2Q3 = document.createElement('button');
    quizOption2Q3.setAttribute("style", "height: 35px; width: fit-content;")
    quizOption2Q3.className = "answer-choice c-choice"
    quizOption2Q3.textContent = "2. False"
    mainContent.appendChild(quizOption2Q3)

    var answerChoiceBtn = document.getElementsByClassName("answer-choice")
    var nextBtn = document.createElement('button')
        nextBtn.addEventListener('click', questionFour)
        nextBtn.textContent = "Next"
        nextBtn.classList.add("next-btn")
        nextBtn.classList.add("hde-btn")
        mainContent.appendChild(nextBtn)

    // for loop to set up grading of the answer choices
    for ( var i = 0; i < answerChoiceBtn.length; i++)
    if (answerChoiceBtn[i].classList == "answer-choice") {
       answerChoiceBtn[i].addEventListener("click", wrongFeedback)
       
    } else if (answerChoiceBtn[i].classList == "answer-choice c-choice") {
        answerChoiceBtn[i].addEventListener("click", correctFeedback) 
        
    };
}

// this function shows the 4th quiz question and is called when the user answers the previous question and hits next
function questionFour() {
    mainContent.textContent = "";
    var quizQuestionFour = document.createElement('h2')
    quizQuestionFour.textContent = "What does DOM stand for?";
    mainContent.appendChild(quizQuestionFour)

    var quizOption1Q4 = document.createElement('button');
    quizOption1Q4.setAttribute("style", "height: 35px; width: fit-content;")
    quizOption1Q4.className = "answer-choice c-choice"
    quizOption1Q4.textContent = "Document Object Model"
    mainContent.appendChild(quizOption1Q4)

    var quizOption2Q4 = document.createElement('button');
    quizOption2Q4.setAttribute("style", "height: 35px; width: fit-content;")
    quizOption2Q4.className = "answer-choice"
    quizOption2Q4.textContent = "Document Operator Model"
    mainContent.appendChild(quizOption2Q4)
    var quizOption1Q4 = document.createElement('button');
    quizOption1Q4.setAttribute("style", "height: 35px; width: fit-content;")
    quizOption1Q4.className = "answer-choice"
    quizOption1Q4.textContent = "Document Objects and Methods"
    mainContent.appendChild(quizOption1Q4)

    var quizOption2Q4 = document.createElement('button');
    quizOption2Q4.setAttribute("style", "height: 35px; width: fit-content;")
    quizOption2Q4.className = "answer-choice c-choice"
    quizOption2Q4.textContent = "Distinguished Operators Method"
    mainContent.appendChild(quizOption2Q4)

    var answerChoiceBtn = document.getElementsByClassName("answer-choice")
    var nextBtn = document.createElement('button')
        nextBtn.addEventListener('click', questionFive)
        nextBtn.textContent = "Next"
        nextBtn.classList.add("next-btn")
        nextBtn.classList.add("hde-btn")
        mainContent.appendChild(nextBtn)

    // for loop to set up grading of the answer choices
    for ( var i = 0; i < answerChoiceBtn.length; i++)
    if (answerChoiceBtn[i].classList == "answer-choice") {
       answerChoiceBtn[i].addEventListener("click", wrongFeedback) 
       
       
    } else if (answerChoiceBtn[i].classList == "answer-choice c-choice") {
        answerChoiceBtn[i].addEventListener("click", correctFeedback) 
         
        
    }
}

// this function shows the final quiz question and is called when the user answers the previous question and hits next
function questionFive() {

    mainContent.textContent = "";
    var quizQuestionFive = document.createElement('h2')
    quizQuestionFive.textContent = "The method querySelector is used to select an element either by class or id.";
    mainContent.appendChild(quizQuestionFive)

    var quizOption1Q5 = document.createElement('button');
    quizOption1Q5.setAttribute("style", "height: 35px; width: fit-content;")
    quizOption1Q5.className = "answer-choice c-choice"
    quizOption1Q5.textContent = "True"
    mainContent.appendChild(quizOption1Q5)

    var quizOption2Q5 = document.createElement('button');
    quizOption2Q5.setAttribute("style", "height: 35px; width: fit-content;")
    quizOption2Q5.className = "answer-choice"
    quizOption2Q5.textContent = "False"
    mainContent.appendChild(quizOption2Q5)   

    var answerChoiceBtn = document.getElementsByClassName("answer-choice")
    var nextBtn = document.createElement('button')
        nextBtn.addEventListener('click', quizDone)
        nextBtn.textContent = "Next"
        nextBtn.classList.add("next-btn")
        nextBtn.classList.add("hde-btn")
        mainContent.appendChild(nextBtn)

    // for loop to set up grading of the answer choices
    for ( var i = 0; i < answerChoiceBtn.length; i++)
    if (answerChoiceBtn[i].classList == "answer-choice") {
       answerChoiceBtn[i].addEventListener("click", wrongFeedback)
       
       
    } else if (answerChoiceBtn[i].classList == "answer-choice c-choice") {
        answerChoiceBtn[i].addEventListener("click", correctFeedback) 
       
        
    }
}

// this function shows the page once the quiz is over or time has run out
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

    var intialTextArea = document.createElement('input')
    intialTextArea.className = "user-input"
    mainContent.appendChild(intialTextArea)
    
    var initialBtn = document.createElement('button')
    initialBtn.textContent = "Submit"
    initialBtn.setAttribute("type", "button")
    initialBtn.className = "submit-initials"
    initialBtn.setAttribute("style", "width: 160px; height: 80px;")
    mainContent.appendChild(initialBtn)

    
    var nameInput = document.querySelector(".user-input");
    
    var subResponse = document.createElement('h3')

   
    
// function to display the quiz scores using stored user initials and score    
function quizHighScores() {
    mainContent.innerHTML = ""
    var quizFinalPage = document.createElement('h1')
    quizFinalPage.textContent = "High Scores";
    mainContent.appendChild(quizFinalPage)

    var goBackBtn = document.createElement('button')
    goBackBtn.textContent = "Go Back"
    goBackBtn.className = "go-back"
    goBackBtn.setAttribute("type", "button")
    goBackBtn.setAttribute("style", "width: 120px; height: 50px;")
    mainContent.appendChild(goBackBtn)

    goBackBtn.addEventListener("click", init);

    var clearHighScores = document.createElement('button')
    clearHighScores.setAttribute("type", "button")
    clearHighScores.textContent = "Clear Scores"
    clearHighScores.className = "clear-scores"
    clearHighScores.setAttribute("style", "width: 160px; height: 50px;")
    mainContent.appendChild(clearHighScores)
    clearHighScores.addEventListener('click', clearScores)

    var response = `Thanks, ${nameInput.value}!`
     mainContent.appendChild(subResponse)
    subResponse.textContent = response;
// storing the user's initials and quiz score to local storage
    localStorage.setItem("initials", nameInput.value);
    localStorage.setItem("score", quizStartTime);

    localStorage.getItem("initials");
    localStorage.getItem("score");

    var finalScore = document.createElement('ol')
    quizFinalPage.appendChild(finalScore)
    var finalClassScore = document.createElement("li")
    finalScore.appendChild(finalClassScore)
    finalClassScore.setAttribute("class", "user-score")
    finalClassScore.textContent = `${nameInput.value}; Score: ${quizStartTime}`;
}
// event listener for when the submit button is clicked, the user initials are stored and the next page is shown
initialBtn.addEventListener("click", function() {
    if (nameInput.value) {
        return quizHighScores();
    } else {
        
        alert("Please enter initials")
    }
});

var scoresPage = document.getElementById('high-scores')
scoresPage.addEventListener("click", quizHighScores)

}

// function that is triggered when the user clicks the clear scores button, which removes the user's initials and quiz score
function clearScores() {
    window.confirm("Are you sure?")
    if (clearScores) {
        var finalClassScore = document.querySelector(".user-score")
        finalClassScore.textContent = ""
    }
}

// function to provide feedback for wrong answers and deduct 10 seconds from the quiz time
function wrongFeedback() { 
    var nextBtn = document.querySelector(".next-btn")
    nextBtn.classList.remove("hde-btn")
    quizStartTime-= 10;
    var feedback = document.createElement('p')
    feedback.textContent = "wrong!";
    mainContent.appendChild(feedback)
    feedback.setAttribute("style", "background-color: red; font-style: oblique; padding: 12px; font-weight: bold; border-radius: 8px;")
            
}

// function to provide feedback for correct answers when selected
function correctFeedback() { 
    var nextBtn = document.querySelector(".next-btn")
    nextBtn.classList.remove("hde-btn")
    var feedback = document.createElement('p')
    feedback.textContent = "Correct!";
    mainContent.appendChild(feedback)
    feedback.setAttribute("style", "background-color: green; font-style: oblique; padding: 12px; font-weight: bold; border-radius: 8px;")
}
// loads the init function when the browswer first loads
init();