
function calculate(){
    let num1 = document.getElementById("num1").value;
    num1 = parseFloat(num1)
    let num2 = document.getElementById("num2").value;
    num2 = parseFloat(num2)
    let operation = document.getElementById("operation").value;
    let result = document.getElementById("result");

    if (operation === "add") {
        result.innerHTML = num1 + num2;
    }
    else if(operation === "sub"){

        result.innerHTML = num1 - num2;

    }
    else if(operation === "mul"){
        result.innerHTML = num1 * num2

    }
    else if(operation === "div"){
        result.innerHTML = num1 / num2;
    }
    else{
        result.innerHTML = "Invalid input, choose an operation"
    }
    
}