//card
var cardHeaderEl = document.querySelector("#cardHeader");
var cardTextEl = document.querySelector("#cardText");
//form
var scoreFormEl = document.querySelector("#scoreForm");
var formLabelEl = document.querySelector("#formLabel");
var formButtonEl = document.querySelector("#formButton");
//buttons
var buttonsEl = document.querySelector("#buttons");
// Array of objects, contains question, choices[], answer
var questions = [
  {
    question: "How would you hide an element?",
    choices: [
      "el.style.display = 'none';",
      "el.display = 'none';",
      "el.display.style = 'none';",
      "el.style = 'none';",
    ],
    answer: "el.style.display = 'none';",
  },
  {
    question:
      "How would you assign an element to a variable using an id selector?",
    choices: [
      "var El =  document.querySelector('#selector');",
      "var El =  quesrySelector('#selector');",
      "var El =  document(querySelector('#selector'));",
      "var El =  document.query.selector('#selector');",
    ],
    answer: "var El =  document.querySelector('#selector');",
  },
  {
    question: "What is a viable for loop header?",
    choices: [
      "for (var i = 0; i < 10; i++)",
      "for (var i = 0, i < 10, i++)",
      "for [var i = 0; i < 10; i++]",
      "for (var i = 0: i < 10: i++)",
    ],
    answer: "for (var i = 0; i < 10; i++)",
  },
  {
    question:
      "How do you change the text in an element using a parameter named li?",
    choices: [
      "li.textContent = newText;",
      "li.display.textContent = newText;",
      "li = textContent(newText);",
      "li.style.textContent = newText;",
    ],
    answer: "li.textContent = newText;",
  },
];

function displayTitleCard() {
  // The form is not used upon page loadup
  scoreFormEl.style.display = "none";
  // set the header and paragraph text
  cardHeaderEl.textContent = "Coding Quiz Challenge";
  cardTextEl.textContent =
    'Try to enter as many coding questions as you can in under a minute and save your score. Click on "View Highscores" to show all the scores.';
}

function displayQuestions() {
  // hide form
  scoreFormEl.style.display = "none";
  //display question
  // cardHeaderEl.textContent = questions[0].question;
  //hide paragraph
  cardTextEl.textContent = "";
  for (var i = 0; i < questions.length; i++) {
    cardHeaderEl.textContent = questions[i].question;
    displayChoices(questions[i].choices);
    buttons.addEventListener("click", function (event) {
      var button = event.target;
    });
  }
}

function displayChoices(choices) {
  buttonsEl.innerHTML = "";
  for (var i = 0; i < choices.length; i++) {
    var li = document.createElement("li"); // create <li>
    var button = document.createElement("button"); // create <button>
    button.textContent = choices[i]; // add choice text to button
    li.appendChild(button); // append button to li (<li><button> </button><li>)
    buttonsEl.appendChild(li); // append the li to ul id = "buttons"
  }
}
 
function displaySubmitCard() {}

function displayHighScores() {}

// displayTitleCard();
// displayQuestions();
// displayChoices(questions[0].choices);
