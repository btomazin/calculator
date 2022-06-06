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

const calculator = {
  display: '0',
  firstVal: null,
  waitForSecond: false,
  op: null,
}

function updateDisplay(){
  const display = document.querySelector('.input');
  display.value = calculator.display;  
}

updateDisplay();

const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', e =>{
  const target = e.target;

  // if (!target.classList.contains('calc-buttons')){
  //   return;
  // }

  if (target.classList.contains('special')){
    operatorPressed(target.value); 
  } else if (target.classList.contains('num')) {
    inputNum(target.textContent);
  } else if (target.id === 'clear'){
    resetCalculator();
  }else if (target.id === 'back'){
    backspace();
  }else if (target.classList.contains('dot')){
    inputDot(target.textContent);
  }
  updateDisplay();

})

function resetCalculator (){
  calculator.display = '0';
  calculator.firstVal = null;
  calculator.op = null;
  calculator.waitForSecond = false;
}

function backspace(){
  if (!calculator.waitForSecond){
    calculator.display = calculator.display.slice(0, -1);
    if(calculator.display === ""){
      calculator.display = '0';
    }
  }
}

function inputNum(num){
  const display = calculator.display;
  if(calculator.waitForSecond === true){
    calculator.display = num;
    calculator.waitForSecond = false;
  } else {
    calculator.display = (display === '0') ? num: display + num;
  }
}

function inputDot(dot){
  if (calculator.waitForSecond === true){
    calculator.display = '0.';
    calculator.waitForSecond = false;
  }

  if(!calculator.display.includes(dot)){
    calculator.display+= dot;
  }
}

function operatorPressed(newOp) {
  const input = Number(calculator.display);

  if (calculator.op && calculator.waitForSecond){
    calculator.op = newOp;
    return;
  }

  if (calculator.firstVal === null && !isNaN(input)){
    calculator.firstVal = input;
  } else if(calculator.op){
    const result = operate(calculator.op, calculator.firstVal, input);
    calculator.display = String(result);
    calculator.firstVal = result;
  }

  calculator.waitForSecond = true;
  calculator.op = newOp;

}
