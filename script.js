function add() {
  return parseInt(arguments[0]) + parseInt(arguments[1]);
};

function sub() {
  return arguments[0] - arguments[1];
};

function multi() {
  return arguments[0] * arguments[1];
};

function divide() {
  return arguments[0] / arguments[1];
};

function mod() {
  return arguments[0] % arguments[1];
};

function operate(op, a, b){
  switch (op){
    case '+':
      return add(a,b);
    case '-':
      return sub(a,b);
    case '*':
      return multi(a,b);
    case '/':
      return divide(a,b);
    case '%':
      return mod(a,b);
  };
}


let displayValue="";
let op="";
function updateDisplay(up){
 if (displayValue.length < 25){ 
  screen.textContent += up;
  displayValue += up;}
}

function clearDisplay(){
  screen.textContent = "";
  displayValue = "";
}

const screen = document.querySelector('.input');
const clear = document.querySelectorAll('.btnclr');

const numbers = document.querySelectorAll('.num');
const specials = document.querySelectorAll('.special');

const equals = document.querySelector('.equal');

const dot = document.querySelector('.dot');
function enableDot(){
  dot.disabled = false;
}

dot.addEventListener('click', () =>{
  dot.disabled = true;
  updateDisplay(dot.textContent);
})

function resolve(val) {
  let str = val.split(/[+-/*]/);
  //updateDisplay(operate(op, str[0], str[1]));
  clearDisplay();
  updateDisplay(operate(op, str[0], str[1]));
  
}

equals.addEventListener('click', () =>{
  resolve(displayValue);
})



specials.forEach(spec =>{
  spec.addEventListener('click', () =>{
    updateDisplay(spec.value);
    op = spec.value;
    enableDot();
  })
});

numbers.forEach(nums =>{
  nums.addEventListener('click', ()=>{
    updateDisplay(nums.textContent);
  })
});

clear.forEach(spec =>{
  spec.addEventListener('click', e=>{
    clearDisplay();
    enableDot();
  })
});