function demo(firstNumber, secondNumber, thirdNumber) {

    function sum(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }
    let sumResult = sum(firstNumber, secondNumber);
   

    function subtract(sum, thirdNumber) {
        return sum - thirdNumber;
    }
    return subtract(sumResult, thirdNumber)

}
console.log(demo(5, 3, 2));
