function add() {
  return Number(arguments[0]) + Number(arguments[1]);
};

function sub() {
  return arguments[0] - arguments[1];
};

function multi() {
  return arguments[0] * arguments[1];
};

function divide() {
  if (arguments[1] == 0){
    alert("You are a funny guy!");
    return 0;
  } else{
    return arguments[0] / arguments[1];
  }
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
  checkDot(screen.textContent);
}

function clearDisplay(){
  screen.textContent = "";
}

const screen = document.querySelector('.input');


const numbers = document.querySelectorAll('.num');
const specials = document.querySelectorAll('.special');

const equals = document.querySelector('.equal');

const dot = document.querySelector('.dot');
function enableDot(){
  dot.disabled = false;
}

dot.addEventListener('click', () =>{
  if (flag){
    clearDisplay();
    flag = false;
  }

  dot.disabled = true;
  updateDisplay(dot.textContent);
})

function resolve() {
  disVal2 = screen.textContent;
  clearDisplay();
  updateDisplay(operate(op, disVal1, disVal2));
  typedFlag = false;
  
}

equals.addEventListener('click', () =>{
 
 if (op != "") {   
    resolve();
    refresh();
  }
})

let flag = false;

specials.forEach(spec =>{
  spec.addEventListener('click', () =>{
    if (op !== "" && !flag){
      resolve();
    }
    op = spec.value;
    disVal1 = screen.textContent;
    typedFlag = false;
    flag = true;
  })
});

function isZero(){
  return (screen.textContent === '0');
}

numbers.forEach(nums =>{
  nums.addEventListener('click', ()=>{
    if (isZero()){
      clearDisplay();}

    if (flag) {
      clearDisplay();
      enableDot();
      flag = false;
    }
    typedFlag = true;
    updateDisplay(nums.textContent);
    }
  )});

function refresh() {
  op = "";
  disVal1 = 0;
  disVal2 = 0; 
  flag = true;
}

clear.addEventListener('click', ()=>{
    clearDisplay();
    refresh();
    enableDot();
    screen.textContent = 0;
});

let typedFlag = false;

back.addEventListener('click',()=>{
  let str = screen.textContent;
  if (str.length === 2 && str[0] === '-'){
    str ="";}

  if (str.length >= 1 && typedFlag){
    screen.textContent = str.slice(0, -1);
  } 
  else {
    screen.textContent = 0;
    refresh();
  }

  if(screen.textContent ==""){
    flag = true;
    screen.textContent = disVal1;
  }

  checkDot(screen.textContent);
});

function checkDot(str){
  if (!(str.includes("."))){
    enableDot();
  } else {
    dot.disabled = true;
  }
}