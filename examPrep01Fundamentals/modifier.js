function modifier(arr) {

    let arrOfNumber = arr.shift().split(' ')
    let arrayLength = arr.length
    for (let index = 0; index < arrayLength; index++) {
        let currentCommand = arr[index].split(' ');
        let command = currentCommand.shift();
        let indexOne = currentCommand.shift();
        let indexTwo = currentCommand.shift();

        switch (command) {
            case 'swap':
                let temp = arrOfNumber[indexOne];
                arrOfNumber[indexOne] = arrOfNumber[indexTwo]
                arrOfNumber[indexTwo] = temp;
                console.log(arrOfNumber)
                break;
            case 'multiply':
                break;
            case 'decrease':
                break;
            case 'end':
                break;
        }
    }

}
modifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',])