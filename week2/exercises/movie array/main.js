const myArr = ['The age of Adeline' , 'Norbit' , 'Avatar' , 'Fast and the Furious' , 'Niet schieten'];
console.log('My favorite movies are', myArr);

const yourArr = window.prompt('What is your favorite movie?');
console.log('Your favorite movie is', yourArr);

myArr.push('' + yourArr);
console.log('Our favorite movies are: ', myArr);

window.alert('Our favorite movies are: ' + myArr);

