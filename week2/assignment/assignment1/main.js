function random_item(items)
{
return items[Math.floor(Math.random()*items.length)];    
}

var items = [
    {question: 'What is the capital of Belgium?', answer: 'Brussels'},
    {question: 'What language do I speak?', answer: 'Flemish'},
    {question: 'How old am I?', answer: '24'}];
console.log(random_item(items));

const item = window.prompt(random_item(items)['question']);
console.log('Your answer is', item);

window.alert('Your answer is ' + item);

window.alert('The correct answer is ' + random_item(items)['answer']);


