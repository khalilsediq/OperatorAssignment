
// ✴️ Arithmetic Operator Tasks
// 1. Ask the user to enter two numbers. Show the result of adding them using alert().
const task1 = document.querySelector("#task1")
task1.addEventListener("click", ()=>{
    let userNum = Number(prompt("Enter First Number"))
    let userNum2 = Number(prompt("Enter Second Number"))
    const result = userNum + userNum2;
    alert(result)
})

// 2. Ask for two numbers. Subtract the second number from the first and log the result to the console.
const task2 = document.querySelector("#task2")
task2.addEventListener("click", ()=>{
    const firstNum = Number(prompt("Enter Your first Number"))
    const secondNum = Number(prompt("Enter Your Second Number"))
    const result = secondNum - firstNum;
    console.log(result)
})



// 3. Ask for two numbers. Multiply them and display the answer in an alert.
const task3 = document.querySelector("#task3")
task3.addEventListener("click", ()=>{
    let num1 = Number(prompt("Enter First Num"))
    let num2 = Number(prompt("Enter Second Num"))
    let result = num1 * num2
    alert(result)
})

// 4. Ask the user for two numbers. Divide the first by the second and log the result.
const task4 = document.querySelector("#task4")
task4.addEventListener("click", ()=>{
    let num1 = Number(prompt("Enter First Num"))
    let num2 = Number(prompt("Enter Second Num"))
    let result = num1 / num2
    console.log(result);
})

// 5. Ask the user for two numbers and show the remainder when the first is divided by the second (use %).
const task5 = document.querySelector("#task5")
task5.addEventListener("click", ()=>{
    let num1 = Number(prompt("Enter First Num"))
    let num2 = Number(prompt("Enter Second Num"))
    let result = num1 / num2
    console.log(result);
})
















// ✴️ Assignment Operator Tasks
// 6. Create a variable with the value 10. Add 5 to it using += and log the new value.
let value = 10;
let newValue = value += 5
console.log(newValue);

// 7. Create a variable with the value 20. Subtract 4 from it using -= and alert the result.
const bt7 = document.querySelector("#bt7")
bt7.addEventListener("click", ()=>{
    let vl = 20;
let sub = vl -= 4;
alert(sub)
})


// 8. Create a variable with the value 6. Multiply it by 3 using *= and display the result.
const h2 = document.querySelector("#h2")
const bt8 = document.querySelector("#bt8")
bt8.addEventListener("click", ()=>{
    let vl = 20;
    let Multiply = vl *= 3;
    h2.innerHTML = Multiply
})

// 9. Set a variable to 50. Divide it by 2 using /= and log the final value.
const variab = 50;
const divi = variab /= 2;
console.log(divi);


// 10. Create a variable, assign it a value from prompt(), then increase it by 10 and show the result.
let create;
let varPrompt = Number(prompt("Enter Value"))
let assign = create + varPrompt;
console.log(assign);





// ✴️ Comparison Operator Tasks
// 11. Ask the user for two numbers. Use > to check if the first number is greater than the
// second, then log the result (true/false).
// 12. Ask the user for two numbers. Use < to check if the first number is less than the second,
// then alert the result.
// 13. Ask the user for a number. Use == to check if it equals 100 and log the result.
// 14. Ask the user for a number. Use === to check if it is exactly equal to the string "100" and
// log the result.
// 15. Ask the user for two numbers. Use != to check if they are not equal and alert the result.
// 16. Ask the user for two numbers. Use !== to check if they are not strictly equal and log
// the result.
// 17. Ask for two numbers and check if the first is greater than or equal to the second.
// Display result using alert.
// 18. Ask for two numbers and check if the first is less than or equal to the second. Show
// result in the console.

// ✴️ Logical Operator Tasks
// 19. Ask the user for age and country. Use && to check if age is over 18 and country is
// "USA". Log the result.
// 20. Ask the user to enter a color and a shape. Use || to check if the color is "red" or the
// shape is "circle". Show the result in an alert.
