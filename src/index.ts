import * as rls from 'readline-sync'

class Calculator {

    private operands: [Operand, Operand] = [NaN, NaN];
    private operator: Operator = "+";
    private answer: number = NaN;


    constructor() {
        this.askInput();
        this.calculate();
        this.printOutput();
    }

    private add(): number {
        return this.operands[0] + this.operands[1];
    }

    private calculate(): Calculator {
        switch (this.operator) {
            case "+": {
                this.answer = this.add();
                break;
            }
            case "-": {
                this.answer = this.subtract();
                break;
            }
            case "*": {
                this.answer = this.multiply();
                break;
            }
            case "/": {
                this.answer = this.divide();
                break;
            }
        }
        return this;
    }

    private askInput(): Calculator {
        const operand1 = rls.question("Please enter the first operand: ");
        this.operands[0] = parseInt(operand1);

        this.operator = rls.question("Please enter the operator: ") as Operator;

        const operand2 = rls.question("Please enter the second operand: ");
        this.operands[1] = parseInt(operand2);
        
        return this;
    }

    private divide(): number {
        return this.operands[0] / this.operands[1];
    }

    private multiply(): number {
        return this.operands[0] * this.operands[1];
    }

    private printOutput(): void {
        console.log("The answer is: " + this.answer.toString());
    }

    private subtract(): number {
        return this.operands[0] - this.operands[1];
    }
}

type Operand = number;
type Operator = "+" | "-" | "/" | "*";
const calculator = new Calculator();
