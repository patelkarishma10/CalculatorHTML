//index.js
/*global window*/
//window.alert('Hello world!');
//console.log('hey');
function Calc(){
        let a = Number(document.getElementById("num1").value);
        let b = Number(document.getElementById("num2").value);
        sessionStorage.setItem('num1', a);
        sessionStorage.setItem('num2', b);
    return {
        Addition: function(){
        let e = a + b;
        //document.getElementById("result").innerHTML = e;
        sessionStorage.setItem('operator', '+');
        sessionStorage.setItem('result', e);
        },
        
        Multiply: function(){
            let e = a * b;
           // document.getElementById("result").innerHTML = e;
            sessionStorage.setItem('operator', '*');
            sessionStorage.setItem('result', e);
            },

        Minus: function(){
            let e = a - b;
            //document.getElementById("result").innerHTML = e;
            sessionStorage.setItem('operator', '-');
            sessionStorage.setItem('result', e);
            },
        
        Divide: function(){
            let e = a / b;
            //document.getElementById("result").innerHTML = e;
            sessionStorage.setItem('operator', '/');
            sessionStorage.setItem('result', e);
            },
        Power: function(){
            let e = Math.pow(a,b);
            //document.getElementById("result").innerHTML = e;
            sessionStorage.setItem('operator', '^');
            sessionStorage.setItem('result', e);
            }
        
    }
    

    

    
}

