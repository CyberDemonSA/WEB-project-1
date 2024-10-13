// TASK 1
var firstName = prompt("Enter your first name:");
var lastName = prompt('Enter your last name:');
var age = prompt('How old are you:');
console.log("Shalom, you identifies you as " + firstName + lastName + " and your age is " + age);


// TASK 2
age = prompt("How old are you(task 2):");
var driverLicense = prompt("Do you have a driver's license? (yes/no)");
var isEliglble = false;

if (age >= 18 && driverLicense.toLowerCase() === "yes") {
    isEliglble = true;
}

console.log("Driver's License: " + isEliglble);

// TASK 3
var num = prompt("Enter a number(task 3):");
var isEven = num % 2 === 0;
var isMultOf5 = num % 5 === 0;
var isGreatThan10 = num > 10;
console.log(`You entered: ${num}\nIs num even: ${isEven}\nIs num multiple of 5: ${isMultOf5}\nIs num greater than 10: ${isGreatThan10}`);

// TASK 4
var intInput = prompt("Enter a number(task 4):");
var strInput = prompt("Enter a string:");
var boolInput = prompt("Enter true or false:");
console.log(`Number Input: ${intInput}, (${typeof parseInt(intInput)}),\nString Input: ${strInput}, (${typeof strInput}),\nBoolean Input: ${boolInput}, (${typeof Boolean(boolInput)})`);

// TASK 5
let length = prompt("Enter a length(task 5):");
let width = prompt("Enter a width:");
console.log(`Area of rectangle: ${length * width}`);
var update = prompt("Do you want to update length or width?");
if (update === "length") {
    length = prompt("Enter the new length:");
} else if (update === "width") {
    width = prompt("Enter the new width:");
}
console.log(`New Area of rectangle: ${length * width}`);

// TASK 6
var numColors = prompt("How many colors would you like to input?(task 6)");
var colors = [];

for (let i = 0; i < numColors; i++) {
    colors.push(prompt(`Enter color ${i + 1}:`));
}
console.log(`First color: ${colors[0]}, Last color: ${colors[colors.length - 1]}`);

// TASK 7
var name = prompt("Enter your name(task 7):");
age = prompt("Enter your age:");
var hobby = prompt("Enter your favorite hobby:");
var userDetails = { name, age, hobby };
console.log(userDetails);

// TASK 8
var num1 = prompt("Enter the first number(task 8):");
var num2 = prompt("Enter the second number:");
console.log(`Is ${num1} greater than ${num2}?`, num1 > num2);
console.log(`Is ${num1} less than ${num2}?`, num1 < num2);
console.log(`Is ${num1} equal to ${num2}?`, num1 == num2);

// TASK 9
var fruits = [];
var numFruits = prompt("How many fruits do you want?(task 9)");
for (let i = 0; i < numFruits; i++) {
    fruits.push(prompt(`Enter fruit ${i + 1}:`));
}
fruits.pop();
const newFruit = prompt("Enter a fruit to add at the beginning:");
fruits.unshift(newFruit);
console.log(fruits);

//TASK 10
num1 = parseFloat(prompt("Enter the first number(task 10): "))
num2 = parseFloat(prompt("Enter the second number: "))
var operation = prompt("Enter an operation (+, -, *, /): ")
let res;
switch (operation) {
    case '+': res = num1 + num2; break;
    case '-': res = num1 - num2; break;
    case '*': res = num1 * num2; break;
    case '/':
        if (num2 !== 0) {
            res = num1 / num2;}
        else {
            res = "You are Invalid: It can't divide by zero";}
        break;
    default: res = "You are Invalid. Please enter (+, -, *, /.)");
}
console.log(`Result: ${res}`);