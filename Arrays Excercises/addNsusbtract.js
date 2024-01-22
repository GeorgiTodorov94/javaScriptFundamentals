function addNSubtract(array) {

    let sumOldArray = 0;
    let sumNewArray = 0;
    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {

        let currentNumber = Number(array[i]);
        sumOldArray += currentNumber;

        if (currentNumber % 2 === 0) {
            currentNumber += i;
        } else {
            currentNumber -= i;
        }

        array[i] = currentNumber;
        sumNewArray += currentNumber;

    }
    console.log(array);
    console.log(sumOldArray);
    console.log(sumNewArray);
}
addNSubtract([5, 15, 23, 56, 35])