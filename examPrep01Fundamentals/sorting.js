function sorting(input) {
    let result = [];
    let sortedArray = input.sort((a, b) => b - a)
    let sortedArrayLength = sortedArray.length

    for (let i = 0; i < sortedArrayLength; i++) {
        let currentNumber = sortedArray.shift();
        let lastNumber = sortedArray.pop();
        result.push(currentNumber);
        result.push(lastNumber)
    }
    console.log(result.join(' '))
}
sorting([1, 21, 3, 52, 69, 63, 31,
    2, 18, 94]);