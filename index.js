var button = document.querySelectorAll('.btn');
var display = document.getElementById('display');
var op1 = 0;
var op2 = null;
var operator = null;
var result = 0;

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function(){
    console.log(this.getAttribute('data-value'));
    var value = this.getAttribute('data-value');
    if (value == '+') {
      op1 = parseFloat(display.textContent);
      operator = '+';
      display.textContent = '';
    } else if (value == '-') {
       op1 = parseFloat(display.textContent);
       operator = "-";
       display.textContent = "";
     } else if (value == "*") {
       op1 = parseFloat(display.textContent);
       operator = "*";
       display.textContent = "";
     } else if (value == "/") {
       op1 = parseFloat(display.textContent);
       operator = "/";
       display.textContent = "";
     } else if (value == "%") {
       op1 = parseFloat(display.textContent);
       operator = "%";
       display.textContent = "";
     } else if (value == "=") {
       op2 = parseFloat(display.textContent);
       result = eval(op1 + " " + operator + " " + op2);
       display.textContent = result;
     } else if (value == "ac") {
       op1 = 0;
       op2 = null;
       operator = null;
       display.textContent = "";
     } else {
       display.innerText += value;
     }
  });
}


