let submitAnswerButton;
let questionInput;
let currentQuestion;
let response;
let responseColor = 'green';
let heading;
let statements = [
    { question: 'How old am I?', answer: '24' },
    { question: 'What language do I speak?', answer: 'Flemish' },
    { question: 'What is the capital of Belgium?', answer: 'Brussels' },
    { question: 'What is my dogs name?', answer: 'Odille' }
];

function next() {
    if (statements.lenght < 1) {
        window.alert('you won'); 
        return;
    }
    const randomIndex = Math.ceil(Math.random() * statements.length - 1);
    return statements[randomIndex];
}

function checkQuestion() {
    if (currentQuestion.answer === questionInput.value()) {
        // remove correct answer from array
        statements = statements.filter(statementObj => {
            return currentQuestion.answer !== statementObj.answer;
        });
        // this is the correct condition
        response = 'Correct! Next question.';
    } else {
        // this is the wrong answer condition
        response = 'Oops, that was\'t quite right! Try another';
        responseColor = 'red';
    }
    currentQuestion = next(); 
    questionInput.value('');
    if(currentQuestion) {
        message = currentQuestion.question;
    };
}

currentQuestion = next();
let message = currentQuestion.question;

function setup() {
    createCanvas(800, 600);
    heading = createElement('h1', ['Quiz about me']);
    heading.position(100, 100);
    questionInput = createInput('');
    questionInput.size(250, 24);
    questionInput.position(100, 220);
    submitAnswerButton = createButton('submit answer');
    submitAnswerButton.size(250, 24);
    submitAnswerButton.mousePressed(checkQuestion);
    submitAnswerButton.position(100, 250);
}

function draw() {
    background('lightblue');
    fill('purple');
    textSize(24);
    text(message, 100, 200);
    fill(responseColor);
    text(response, 100, 350);
}
