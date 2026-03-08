function calculate(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = document.getElementById("result");
    let operation = document.getElementById("operation").value;

    if (operation === "add") {
        result.innerHTML = parseFloat(num1) + parseFloat(num2)
    }
    else if(operation === "sub"){
        result.innerHTML = parseInt

    }
}