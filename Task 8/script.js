/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
    constructor() {
        this.sum = this.sum.bind(this);
        this.substraction = this.substraction.bind(this);
        this.multiplication = this.multiplication.bind(this);
        this.division = this.division.bind(this);
    }

    sum(a, b) {
        return a + b;
    }
    substraction(a, b) {
        return a - b;
    }
    multiplication(a, b) {
        return a * b;
    }
    division(a, b) {
        return a / b;
    }
}

const calc = new Calculator();
console.log('Sudetis', calc.sum(12, 13));
console.log('Atimtis', calc.substraction(100, 25));
console.log('Daugyba', calc.multiplication(7, 8));
console.log('Dalyba', calc.division(1548, 138));