console.log('Ready to go!');

var myFname = 'Dave'; // string
var toes = 10; // number
var codes = true; // boolean
var interests = ['food', 10, false]; // array
var moreInfo = {
    color: 'red',
    cars: 1,
    interest: ['cheese', 'ham']
};

// function that returns something to do with later on
function topSpeed(){
    return 75;
}
console.log(topSpeed() * 2); 

// functions can accept arguments inside the function

function addTen(numberOne) {
    return numberOne + 10;
}
// invoking addTen, with a value for the numberOne argument
console.log(addTen(100));

// fucntion that does something immediately
function updateHeading(randomString){
    document.getElementById('head').innerText = randomString;
}

updateHeading(topSpeed());

function fullName(fName, lName) {
    document.getElementById('full-name').innerText = fName + ' ' + lName;
}
fullName('Dave', 'Messina');

// Anon func stored in a variable
var myGreatFunction = function() {
    return 'Steve';
}
document.getElementById('friends-name').innerText = myGreatFunction();

// function that updates DOM with middle name
function updateName() {
    document.getElementById('full-name').innerText = 'David Michael Messina';
}
updateName();

function updateNameWithAge(firstName, lastName, myAge) {
    document.getElementById('full-name').innerText = firstName + ' ' + lastName + " is " + myAge
}
updateNameWithAge('David', 'Messina', 39);

if (5 > 2) {
    // we will end up here ifr test is true
    console.log('we end up here, because 5 > 2');
} else {
            console.log('nope, not greater than 5');
}

if (topSpeed() > 100) {
    console.log('We will NOT end up here, because topSpeed returns the num 75');
} else {
    // we WILL end up here
    console.log('if statement returned false, so we ended up here');
}

var myAge = 39;

if (myAge >= 65) {
    console.log('Time for retirement');
} else {
    console.log('No retirement yet! Still a lot of code to write');
}

var number = 25;

if (number < 10) {
    alert('var is less than 10')
} else {
    alert(number);
}

var dog1 = 'Merlin';
var dog2 = 'Lucy';

if (dog1 === dog2) {
    alert('Both dogs have the same name')
} else {
    alert('Both dogs have a different name: ' + dog1 + ' and ' + dog2);
}

var cheese = 'swiss';

if (cheese === 'chedder') {
    // you won't end up here
} else if (cheese === 'swiss') {
    // you WILL end up here
} else {
    // you won't end up here either
}

var cartoons = ['snoopy', 'garfield', 'popeye']

console.log(cartoons[1] === 'garfield');

if (cartoons[1] === 'garfield') {
    // you will end up here
}

console.log(cartoons.indexOf('popeye') === 2) {

if (cartoons.indexOf('popeye') === 2) {

    // you will end up here
}