function add() {
  return arguments[0] + arguments[1];
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
function updateDisplay(up){
 if (displayValue.length < 25){ screen.textContent += up;
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

equals.addEventListener('click', () =>{
  resolve(displayValue);
})

function resolve(value){
  //enableDot();
}

specials.forEach(spec =>{
  spec.addEventListener('click', () =>{
    updateDisplay(spec.value);
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