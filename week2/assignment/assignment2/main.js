const questions = 
[
    {question: 'What is the capital of Belgium?', answer: 'Brussels'},
    {question: 'What language do I speak?', answer: 'Flemish'},
    {question: 'How old am I?', answer: '24'}
];

console.log('The questions are', questions);

// program to get a random item from an array

function getRandomItem(questions) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * questions.length);

    // get random item
    const item = questions[randomIndex];
}

const result = getRandomItem(questions);
console.log(result);

const yourAnswer = window.prompt(questions);
console.log('Your answer is ', yourAnswer);

window.alert('Your answer is ' + yourAnswer);
window.alert('The correct answer was ')


