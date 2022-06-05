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


let disVal1="";
let disVal2="";
let op="";
function updateDisplay(up){
  screen.textContent += up;
}

function clearDisplay(){
  screen.textContent = "";
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

function resolve() {
  //let str = val.split(/[+-/*]/);
  //updateDisplay(operate(op, str[0], str[1]));
  clearDisplay();
  console.log(op + " " + disVal1 + " " + disVal2)
  updateDisplay(operate(op, disVal2, disVal1));
  
}

equals.addEventListener('click', () =>{
  disVal1 = screen.textContent;
  resolve();
  refresh();
})



specials.forEach(spec =>{
  spec.addEventListener('click', () =>{
    //updateDisplay(spec.value);
    op = spec.value;
    disVal2 = screen.textContent;
    clearDisplay();
    enableDot();
  })
});

function isZero(){
  return (screen.textContent == 0);
}

numbers.forEach(nums =>{
  nums.addEventListener('click', ()=>{
    if (isZero()){
      clearDisplay();}

    updateDisplay(nums.textContent);
    }
  )});

function refresh() {
  op = "";
  disVal1 = 0;
  disVal2 = 0; 
}

clear.forEach(spec =>{
  spec.addEventListener('click', e=>{
    clearDisplay();
    refresh();
    enableDot();
    screen.textContent=0;
  })
});