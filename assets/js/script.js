var timerEl = document.querySelector("#timer");
//card
var cardHeaderEl = document.querySelector("#cardHeader");
var cardTextEl = document.querySelector("#cardText");
var scoresEl = document.querySelector("#scores");
//form
var scoreFormEl = document.querySelector("#scoreForm");
var formLabelEl = document.querySelector("#formLabel");
var formInputEl = document.querySelector("#formInput");
var formButtonEl = document.querySelector("#formButton");
//buttons
var buttonsEl = document.querySelector("#buttons");
//choice status under question card
var choiceStatusEl = document.querySelector("#choiceStatus");
// Array of objects, contains question, choices[], answer
var questions = [
  {
    question: "How would you hide an element?",
    choices: [
      "el.display = 'none';",
      "el.display.style = 'none';",
      "el.style.display = 'none';",
      "el.style = 'none';",
    ],
    answer: 2,
  },
  {
    question: "How would you assign an element to a variable using an id selector?",
    choices: [
      "var El =  quesrySelector('#selector');",
      "var El =  document.querySelector('#selector');",
      "var El =  document(querySelector('#selector'));",
      "var El =  document.query.selector('#selector');",
    ],
    answer: 1,
  },
  {
    question: "What is a viable for loop header?",
    choices: [
      "for (var i = 0; i < 10; i++)",
      "for (var i = 0, i < 10, i++)",
      "for [var i = 0; i < 10; i++]",
      "for (var i = 0: i < 10: i++)",
    ],
    answer: 0,
  },
  {
    question: "How do you change the text in an element using a parameter named li?",
    choices: [
      "li.display.textContent = newText;",
      "li = textContent(newText);",
      "li.textContent = newText;",
      "li.style.textContent = newText;",
    ],
    answer: 2,
  },
  {
    question: "How can you determin the type of the variable var?",
    choices: [
      "var.typeof;",
      "var.typeof();",
      "typeof.var;",
      "typeof var;",
    ],
    answer: 3,
  },
];

var score = 0;

var secondsLeft = 30;
function displayTitleCard() {
  // The form is not used upon page loadup
  scoreFormEl.style.display = "none";
  // set the header and paragraph text
  cardHeaderEl.textContent = "Coding Quiz Challenge";
  cardTextEl.textContent =
    'Try to enter as many coding questions as you can in under a minute and save your score. Click on "View Highscores" to show all the scores.';

  var li = document.createElement("li"); // create <li>
  var button = document.createElement("button"); // create <button>
  button.textContent = "Start Your Quiz!"; // add choice text to button
  button.setAttribute("id", "start");
  li.appendChild(button); // append button to li (<li><button> </button><li>)
  buttonsEl.appendChild(li); // append the li to ul id = "buttons"

  var start = document.querySelector("#start")
  start.addEventListener("click", timer);
}

function timer(e) {
  e.preventDefault();
  displayQuestions();
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;

    if (secondsLeft <= 0) {
      // Calls function to create and append image
      displaySubmitCard();
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }
  }, 1000);
}

function displayQuestions() {
  // hide the unecessary
  scoreFormEl.style.display = "none";
  cardTextEl.style.display = "none";
  choiceStatusEl.textContent = "";

  // Initialize first question
  var questionNum = 0;
  cardHeaderEl.textContent = questions[questionNum].question;
  displayChoices(questions[questionNum].choices);

  // if button is clicked then check answer and display the next
  buttons.addEventListener("click", function (event) {
    var button = event.target;
    // compare clicked ID to answer
    if (button.id == questions[questionNum].answer) {
      score++;
      choiceStatusEl.textContent = "Correct!";
    } else {
      choiceStatusEl.textContent = "Wrong!";
    }
    // Set up next question if available
    if (questionNum < questions.length - 1) {
      questionNum++;
      cardHeaderEl.textContent = questions[questionNum].question;
      displayChoices(questions[questionNum].choices);
    } else {
      // set up form if no more questions are left
      displaySubmitCard();
    }
    console.log(score);
  });
}

function displayChoices(choices) {
  buttonsEl.innerHTML = "";
  for (var i = 0; i < choices.length; i++) {
    var li = document.createElement("li"); // create <li>
    var button = document.createElement("button"); // create <button>
    button.textContent = choices[i]; // add choice text to button
    button.setAttribute("id", i);
    li.appendChild(button); // append button to li (<li><button> </button><li>)
    buttonsEl.appendChild(li); // append the li to ul id = "buttons"
  }
}

//form
// var scoreFormEl = document.querySelector("#scoreForm");
// var formLabelEl = document.querySelector("#formLabel");
// var formButtonEl = document.querySelector("#formButton");
function displaySubmitCard() {
  // Show form element, hide buttons
  scoreFormEl.style.display = "block";
  buttonsEl.innerHTML = "";
  cardHeaderEl.textContent = "Submit your score!";
  formButtonEl.addEventListener("click", function (event) {
    var initials = formInputEl.value;
    localStorage.setItem(initials, score);
    displayHighScores()
  });
}

function displayHighScores() {
  scoreFormEl.style.display = "none";
  cardHeaderEl.textContent = "Highscores";
  keys = Object.keys(localStorage);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var li = document.createElement("li"); // create <li>
    score = key + ": " + localStorage[key];
    li.textContent = score;
    scoresEl.appendChild(li); // append the li to ul id = "buttons"
  }
}

displayTitleCard();
// displayQuestions();
// displayChoices(questions[0].choices);
// displaySubmitCard();
// displayHighScores();


