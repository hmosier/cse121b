/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
// Step 2: In the function, return the sum of the parameters number1 and number2
function add(number1, number2) {
    return number1 + number2;
}

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
// Step 4: Assign the return value to an HTML form element with an ID of sum
function addNumbers() {
    let number1 = parseFloat(document.querySelector("#addend1").value);
    let number2 = parseFloat(document.querySelector("#addend2").value);
    document.querySelector("#sum").value = add(number1, number2);
}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
const subtract = function (number3, number4) {
    return number3 - number4;
}

const subtractNumbers = function() {
    let number3 = parseFloat(document.querySelector("#minuend").value);
    let number4 = parseFloat(document.querySelector("#subtrahend").value);
    let difference = subtract(number3, number4);
    document.querySelector("#difference").value = difference
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
const multiply = (number5, number6) => number5 * number6;

const multiplyNumbers = () => {
    let number5 = parseInt(document.querySelector("#factor1").value);
    let number6 = parseInt(document.querySelector("#factor2").value);
    let product = multiply(number5, number6);
    document.querySelector("#product").value = product
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
const divide = (number7, number8) => number7 / number8;

const divideNumbers = () => {
    let number7 = parseFloat(document.querySelector("#dividend").value);
    let number8 = parseFloat(document.querySelector("#divisor").value);
    let quotient = divide(number7, number8);
    document.querySelector("#quotient").value = quotient
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const currentDate = new Date();

// Step 2: Declare a variable to hold the current year
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
const currentYear = currentDate.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector("#year").textContent = currentYear

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const numbers = [];
for (let i = 1; i <= 25; i ++) {
    numbers.push(i);
}

/* '++' increments by one */

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector('#array').textContent = numbers;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
const odds = numbers.filter(number => number % 2 );
document.querySelector('#odds').textContent = odds;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
const evens = numbers.filter(number => number % 2 === 0);
document.querySelector('#evens').textContent = evens;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const sumOfArray = numbers.reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfArray').textContent = sumOfArray;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const multiplied = numbers.map(number => number * 2);
document.querySelector("#multiplied").textContent = multiplied

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const sumOfMultiplied = numbers.map(number => number * 2).reduce((sum, number) => sum + number, 0);
document.querySelector("#sumOfMultiplied").textContent = sumOfMultiplied