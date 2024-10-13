var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var age = prompt("Enter your age:");
console.log(`Hello, ${firstName} ${lastName}, you are ${age} years old.`);

age = prompt("Enter your age:");
var hasLicense = prompt("Do you have a driver's license? (yes/no)");
var isEligible = age >= 18 && hasLicense.toLowerCase() === "yes";
console.log(`Eligible to drive: ${isEligible}`);

var number = prompt("Enter a number:");
var isEven = number % 2 === 0;
var isMultipleOf5 = number % 5 === 0;
var isGreaterThan10 = number > 10;
console.log(`You entered: ${number}\nIs even: ${isEven}\nIs multiple of 5: ${isMultipleOf5}\nIs greater than 10: ${isGreaterThan10}`);



var numInput = prompt("Enter a number:");
var stringInput = prompt("Enter a string:");
var booleanInput = prompt("Enter true or false:");
console.log(`Number: ${typeof parseInt(numInput)}, String: ${typeof stringInput}, Boolean: ${typeof JSON.parse(booleanInput)}`);



let length = prompt("Enter the initial length:");
let width = prompt("Enter the initial width:");
console.log(`Initial Area: ${length * width}`);
var update = prompt("Do you want to update length or width?");
if (update === "length") {
    length = prompt("Enter the new length:");
} else if (update === "width") {
    width = prompt("Enter the new width:");
}
console.log(`New Area: ${length * width}`);

var numColors = prompt("How many colors would you like to input?");
var colors = [];
for (let i = 0; i < numColors; i++) {
    colors.push(prompt(`Enter color ${i + 1}:`));
}
console.log(`First color: ${colors[0]}, Last color: ${colors[colors.length - 1]}`);



var name = prompt("Enter your name:");
age = prompt("Enter your age:");
var hobby = prompt("Enter your favorite hobby:");
var userDetails = { name, age, hobby };
console.log(userDetails);


var num1 = prompt("Enter the first number:");
var num2 = prompt("Enter the second number:");
console.log(`Is ${num1} greater than ${num2}?`, num1 > num2);
console.log(`Is ${num1} less than ${num2}?`, num1 < num2);
console.log(`Is ${num1} equal to ${num2}?`, num1 == num2);


var fruits = [];
var numFruits = prompt("How many fruits?");
for (let i = 0; i < numFruits; i++) {
    fruits.push(prompt(`Enter fruit ${i + 1}:`));
}
fruits.pop();
const newFruit = prompt("Enter a fruit to add at the beginning:");
fruits.unshift(newFruit);
console.log(fruits);


num1 = parseFloat(prompt("Enter the first number:"));
num2 = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Choose operation: +, -, *, /");
let result;
switch (operation) {
    case '+': result = num1 + num2; break;
    case '-': result = num1 - num2; break;
    case '*': result = num1 * num2; break;
    case '/': result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero'; break;
    default: result = 'Invalid operation'; break;
}
console.log(`Result: ${result}`);




