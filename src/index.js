class SmartCalculator {

  constructor(initialValue) {
    this.calculatorValue = [['+', initialValue]];
  }

  add(number) {
    this.calculatorValue.push(['+', number]);
    return this
  }
  
  subtract(number) {
    this.calculatorValue.push(['-', number]);
    return this;
  }

  multiply(number) {
    this.calculatorValue.push(['*', number]);
    return this;
  }

  devide(number) {
    this.calculatorValue.push(['/', number]);
    return this;
  }

  pow(number) {
    this.calculatorValue.push(['^', number]);
    return this;
  }

  valueOf() {
    return calculate(this.calculatorValue);
  }

}



function calculate(mas){
  const mas1 = [];
  const mas2 = [];
  let counter = 0;


  for (let i = mas.length - 1; i >= 0; i--){
    if (mas[i][0] === '^' && mas[i - 1][0] === '^'){

      mas[i - 1][1] = Math.pow(mas[i - 1][1], mas[i][1]);
    } else {

      mas1.push(mas[i]);
    }
    
  }

  mas1.reverse();

  for (let i = 0; i < mas1.length; i++){
    if (i + 1 < mas1.length && mas1[i + 1][0] === '^'){
      mas1[i][1] = Math.pow(mas1[i][1], mas1[i + 1][1]);
    }

    if (mas1[i][0] === '*' || mas1[i][0] === '/'){

      (mas1[i][0] === '*') ? mas2[mas2.length - 1][1] *= mas1[i][1] : mas2[mas2.length - 1][1] /= mas1[i][1];
    }

    if (mas1[i][0] === '+' || mas1[i][0] === '-'){

      mas2.push(mas1[i]);
    }

  }


  for (let i = 0; i < mas2.length; i++){
    (mas2[i][0] === '+') ? counter += mas2[i][1] : counter -= mas2[i][1];
  }

  return counter;
}

module.exports = SmartCalculator;
