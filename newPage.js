function displayResult(){
    
//    window.location = "result.html";
    
    let num1 = sessionStorage.getItem('num1');
    let num2 = sessionStorage.getItem('num2');
    let operator = sessionStorage.getItem('operator');
    let result = sessionStorage.getItem('result');
    
    let mynum1 = document.createElement('span');
    mynum1.innerHTML = num1;
    
    
    let myoperator = document.createElement('span');
    myoperator.innerHTML = operator;
    let mynum2 = document.createElement('span');
    mynum2.innerHTML = num2;
    let myequal = document.createElement('span');
    myequal.innerHTML = "=";

    let myresult = document.createElement('span');
    myresult.innerHTML = result;
    
    const container = document.getElementById('displayResult');
    container.appendChild(mynum1);
    container.appendChild(myoperator);
    container.appendChild(mynum2);
    container.appendChild(myequal);
    container.appendChild(myresult);
    
    
}