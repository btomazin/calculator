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
  };
}

console.log(operate('+', 6, 2));
console.log(operate('-', 6, 2));
console.log(operate('/', 6, 2));
console.log(operate('*', 6, 2));
