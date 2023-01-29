const firstGame = {
    title: 'Kolonisten van Catan',
    type: 'Boardgame', 
    numberOfPlayers: '3 until 6', 
    rating: '5 stars',
    shortDescription: 'Each player starts the game with two villages in his possession. These villages have hills, forests, fields and so on. By throwing the dice it will be known which raw materials the players may receive. Then you can trade between the other players or with the bank. It is possible that you are missing essential resources, which are necessary to successfully expand your village.',
}

console.log('Get to know my first game', firstGame);

const secondGame = {
    title: 'Online Soccer Manager', 
    type: 'Online game',
    numberOfPlayers: 'unlimited',
    rating: '2 stars',
    shortDescription: 'In OSM you are a coach without a job. To get started you need to sign a contract (for one season) by choosing a club from one of the leagues in OSM. You can also start your own competition by using Boss Coins. You can also play with friends, each with a different team.',
}

console.log('Get to know my second game', secondGame);

const thirdGame = {
    title: 'UNO',
    type: 'Card game',
    numberOfPlayers: '2 until 10',
    rating: '4 stars',
    shortDescription: 'The aim of the game is to be the first player to score 500 points, achieved (usually over several rounds of play) by being the first to play all of ones own cards and scoring points for the cards still held by the other players',
}

console.log('Get to know my third game', thirdGame);


const pickNumber = window.prompt('I have 3 games in my collection. Pick a number between 1 and 3 and I will tell you about that game.');
console.log('You chose', pickNumber);

if (pickNumber ==="1") {
    window.alert('You chose ' + firstGame['title'] + '.' + ' It is a ' + firstGame['type'] + ' that can be played by ' + firstGame['numberOfPlayers'] + ' players. ' + firstGame['shortDescription'] + ' I would give it ' + firstGame['rating'] + '.' );
}

if (pickNumber ==="2") {
    window.alert('You chose ' + secondGame['title'] + '.' + ' It is a ' + secondGame['type'] + ' that can be played by ' + secondGame['numberOfPlayers'] + ' players. ' + secondGame['shortDescription'] + ' I would give it ' + secondGame['rating'] + '.' );
}

if (pickNumber ==="2") {
    window.alert('You chose ' + thirdGame['title'] + '.' + ' It is a ' + thirdGame['type'] + ' that can be played by ' + thirdGame['numberOfPlayers'] + ' players. ' + thirdGame['shortDescription'] + ' I would give it ' + thirdGame['rating'] + '.' );
}

if (pickNumber >"3") {
    window.alert('Plaese pick a number between 1 and 3');
}