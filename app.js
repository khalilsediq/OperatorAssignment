
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
let setVar = 50
let newSet = setVar /= 2;
console.log(newSet);




// 10. Create a variable, assign it a value from prompt(), then increase it by 10 and show the result.
const task10 = document.querySelector("#task10")
task10.addEventListener("click", ()=>{
    let varPrompt = Number(prompt("Enter Value"))
    let create = varPrompt;
    let assign = create += 10;
    console.log(assign);
})





// ✴️ Comparison Operator Tasks
// 11. Ask the user for two numbers. Use > to check if the first number is greater than the second, then log the result (true/false).
const task11 = document.querySelector("#task11")
task11.addEventListener("click", ()=>{
    let num1 = Number(prompt("Enter A Number"))
    let num2 = Number(prompt("Enter Sercond Number"))
   if (num1 > num2) {
    console.log(true)
   }
   else{
    console.log(false)
   }
})

// 12. Ask the user for two numbers. Use < to check if the first number is less than the second, then alert the result.
const task12 = document.querySelector("#task12")
task12.addEventListener("click", ()=>{
    let num1 = Number(prompt("Enter First Number"))
    let num2 = Number(prompt("Enter Second Number"))
    let check = num1 > num2;
    alert(check)
//    if (num1 < num2) {
//     alert("The First Number is less than the second")
//    }
//    else{
//     alert("the first is greater then the second")
//    }
})



// 13. Ask the user for a number. Use == to check if it equals 100 and log the result.
const task13 = document.querySelector("#task13")
task13.addEventListener("click", ()=>{
    let user = Number(prompt("Enter A Number"))
    if (user == 100) {
        console.log(user);        
    } else(
        console.log("Sorry Can't log The results because it's not equal to 100")
        
    )
})

// 14. Ask the user for a number. Use === to check if it is exactly equal to the string "100" and log the result.
const task14 = document.querySelector("#task14")
task14.addEventListener("click", ()=>{
    let ask = prompt("Enter A number")
    let check = ask === "100"
    console.log(check)
})



/*
//Instructions:-> 15. Ask the user for two numbers. Use != to check if they are not equal and alert the result.
let userAsk = Number(prompt("Enter a number"))
let userAsk2 = Number(prompt("Enter Second Number"))
let checking = userAsk != userAsk2
alert(checking)




//16.Instructions:-> Ask the user for two numbers. Use !== to check if they are not strictly equal and log the result.
const numFirst = Number(prompt('Enter A num'))
const numSecond = Number(prompt("Enter Second Num"))
let checkNum = numFirst !== numSecond;
console.log(checkNum);


// 17. Ask for two numbers and check if the first is greater than or equal to the second. Display result using alert.
let oneNum = Number(prompt("Enter Num")) 
let secondNum = Number(prompt("Enter Second"))
let toCheck = oneNum >= secondNum
alert(toCheck)

// 18. Ask for two numbers and check if the first is less than or equal to the second. Show result in the console.
let fNum = Number(prompt("Enter A Num"))
let sNum = Number(prompt("Enter Second Num"))
let checktheNum = fNum <= sNum;
console.log(checktheNum);
*/



// ✴️ Logical Operator Tasks

// 19.Instructions:-> Ask the user for age and country. Use && to check if age is over 18 and country is "USA". Log the result.
const task19 = document.querySelector("#task19")
task19.addEventListener("click", ()=>{
    let userAge = Number(prompt("Enter YOur age"))
    let userCountry = prompt("Enter Your country").toUpperCase()
    let checkINs = userAge > 18 && userCountry === 'USA'
    console.log(checkINs);
})

// 20. instructions Ask the user to enter a color and a shape. Use || to check if the color is "red" or the
// shape is "circle". Show the result in an alert.
const task20 = document.querySelector("#task20")
task20.addEventListener("click", ()=>{
    let user = prompt("Enter A color")
    let shape = prompt("Enter A shape")
    alert(user === 'red' || shape === 'circle')

})