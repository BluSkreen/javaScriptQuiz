var formEl = document.querySelector("#scoreForm");
var buttons = document.querySelector("#buttons");

var questions = [
    {
        "question": "How would you hide an element?",
        "o1": "el.style.display = 'none';",
        "o2": "el.display = 'none';",
        "o3": "el.display.style = 'none';",
        "o4": "el.style = 'none';",
        "answer": "el.style.display = 'none';",
    },
    {
        "question": "How would you assign an element to a variable using an id selector?",
        "o1": "var El =  document.querySelector('#selector');",
        "o2": "var El =  quesrySelector('#selector');",
        "o3": "var El =  document(querySelector('#selector'));",
        "o4": "var El =  document.query.selector('#selector');",
        "answer": "var El =  document.querySelector('#selector');",
    },
    {
        "question": "What is a viable for loop header?",
        "o1": "for (var i = 0; i < 10; i++)",
        "o2": "for (var i = 0, i < 10, i++)",
        "o3": "for [var i = 0; i < 10; i++]",
        "o4": "for (var i = 0: i < 10: i++)",
        "answer": "for (var i = 0; i < 10; i++)",
    },
    {
        "question": "How do you change the text in an element using a parameter named li?",
        "o1": "li.textContent = newText;",
        "o2": "li.display.textContent = newText;",
        "o3": "li = textContent(newText);",
        "o4": "li.style.textContent = newText;",
        "answer": "li.textContent = newText;",
    }
]

formEl.style.display = "none";