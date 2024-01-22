function distinct(array) {
    let result = [];

    for (let i = 0; i < array.length; i++){
        let currentNumber = array[i];
        if(array.includes(currentNumber) && !result.includes(currentNumber)){
            result.push(currentNumber)
        }
    }
console.log(result.join(' '))

}
distinct([1, 2, 3, 4])
console.log(" -----------")
distinct([7, 8, 9, 7, 2, 3, 4, 1, 2])
console.log(" -----------")
distinct([20, 8, 12, 13, 4, 4, 8, 5]);