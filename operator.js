// let age1 = 50;
// let age2 = 72;
// let num1 = 9;
// let num2 = 3;
// console.log(age1 + age2);
// console.log(age1 - age2);
// console.log(age1 * age2);
// console.log(age1 / age2);
// console.log(num1 ** num2);
// console.log(num1 % num2);

// let x = 5;
// console.log(x);

// x += 3; //x = x + 3
// console.log(x);

// x -= 20 // x = x - 20
// console.log(x);


// x *= 10; //x = x * 10
// console.log(x);

// x /= 5

// let y = 24;
// y+=15 //y = y + 15
// console.log(y);

//Data:

// let num1 = "15";
// let num2 = 15;
// console.log(num1 === num2);

//school admission
// let student_age = parseFloat(prompt("Enter ypour age"));
// if (student_age <= 10) {
//     alert("You are to be in primary school by now")
// }
// else if(student_age > 10 && student_age <= 17){
//     alert("You are to be in secondary school")
// }
// else if (student_age > 17 && student_age < 23){
//     alert("You are to be in the University")
// }
// else{
//     alert("You are out of school")
// }

// let name = "Hanan";
// let password = "abc";
// let userInput;
// let userPassword;

// for (let index = 0; index < 1; index++) {
//     userInput = prompt("Enter your name");
//     userPassword = prompt("enter password")
//     if (userInput === name || userPassword === password) {
//         console.log("Login is successfull");
//         break
        
//     }
//     else{
//         console.log("Invalid login details");
        
//     }
    
// }

// let name = "Hanan";
// let age = 10;
// // console.log("Hello! My name is " + name + ". I am " + age + "years old.");
// console.log(`Hello! My name is ${name}. I am ${age} years old`);



// function display(result){
//     console.log(result);
    
// }

// function add(num1, num2, myCallback){
//     let addIt = num1 + num2;
//     myCallback(addIt)
// }
// add(50, 16, display);


// let div = document.createElement("h1");
// div.innerHTML = "Hello Sedorf";
// document.body.appendChild(div)

function msg(){
    const userName = document.getElementById("greet").value;
    const message = document.createElement("h1");
    message.innerHTML = (`Hello ${userName}, yyou are welcome to TechTutors' class`);
    document.body.appendChild(message)
    
}





