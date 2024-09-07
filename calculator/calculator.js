document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let firstOperand = '';
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            if (value === 'C') {
                currentInput = '';
                operator = '';
                firstOperand = '';
                display.textContent = '0';
            } else if (value === '=') {
                if (operator && firstOperand !== '' && currentInput !== '') {
                    const result = evaluate(firstOperand, operator, currentInput);
                    display.textContent = result;
                    currentInput = result;
                    operator = '';
                    firstOperand = '';
                }
            } else if (['+', '-', '*', '/','%'].includes(value)) {
                if (currentInput !== '') {
                    if (firstOperand === '') {
                        firstOperand = currentInput;
                    } else if (operator) {
                        firstOperand = evaluate(firstOperand, operator, currentInput);
                        display.textContent = firstOperand;
                    }
                    operator = value;
                    currentInput = '';
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });
    function evaluate(firstOperand, operator, secondOperand) {
        const a = parseFloat(firstOperand);
        const b = parseFloat(secondOperand);
        switch (operator) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '%': return a % b;
            case '/': return b !== 0 ? a / b : 'Error'; 
            default: return 'Error';
        }
    }
});
