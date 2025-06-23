"use strict";

const userNumberInput = prompt('Please, enter the number');

if (!userNumberInput?.trim()) {
    alert('Error: Data is empty');
} else if (!Number.isInteger(+userNumberInput)) {
    alert('Error: is not integer');
} else {
    const userNumber = Math.abs(+userNumberInput);
    const MIN_VALUE = 1;
    const MAX_VALUE = 100;
    const sqrtUserNumber = Math.sqrt(userNumber);
    let resultNumbersString = '';

    for (let i = MIN_VALUE; i <= sqrtUserNumber && i <= MAX_VALUE; i++) {
        resultNumbersString += resultNumbersString === '' ? i : `, ${i}`;
    }

    alert(resultNumbersString);
}
