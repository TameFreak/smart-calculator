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
    this.calculatorValue[this.calculatorValue.length - 1][1] = Math.pow(this.calculatorValue[this.calculatorValue.length - 1][1], number);
    //(this.calculatorValue[this.calculatorValue.length - 1][0] === '^') ? this.calculatorValue[this.calculatorValue.length - 1][1] *= number : this.calculatorValue.push(['^', number]);
    return this;
  }

  valueOf() {
    return calculate(this.calculatorValue);
  }

}



function calculate(mas){

  const mas2 = [];
  let counter = 0;

  for (let i = 0; i < mas.length; i++){
    // if (i + 1 < mas.length && mas[i + 1][0] === '^'){
    //   mas[i][1] = Math.pow(mas[i][1], mas[i + 1][1]);
    // }

    if (mas[i][0] === '*' || mas[i][0] === '/'){

      (mas[i][0] === '*') ? mas2[mas2.length - 1][1] *= mas[i][1] : mas2[mas2.length - 1][1] /= mas[i][1];
    }

    if (mas[i][0] === '+' || mas[i][0] === '-'){

      mas2.push(mas[i]);
    }

  }


  for (let i = 0; i < mas2.length; i++){
    (mas2[i][0] === '+') ? counter += mas2[i][1] : counter -= mas2[i][1];
  }

  return counter;
}

module.exports = SmartCalculator;
