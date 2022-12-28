let operandOne = parseInt(Math.random() * 10);
let operandTwo = parseInt(Math.random() * 10);

let sum = operandOne + operandTwo;

const userAns = prompt(`Total of ${operandOne} and ${operandTwo} is ${sum} ? 
 (Yes/No)`);

if (userAns.toLocaleLowerCase() == 'yes')
  console.log('Congratulations! You Won the game!');
else console.log('Sorry! Try again later.');

