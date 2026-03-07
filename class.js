

function greet(){
    let userName = document.getElementById("username").value;

    const h1 = document.createElement("h1");

    h1.innerHTML = (`Hello ${userName}, you are welcome to TechTutors class.`)

    document.body.appendChild(h1);
    
}

let pTag = document.getElementById("display");
pTag.innerHTML = "It is a softwork"

