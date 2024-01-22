function oddOrEven(arr){

    let sumEven = 0;
    let sumOdd = 0;
    let difference = 0;
    for (let i = 0; i < arr.length; i++){
        let currentNumber = arr[i];

        if(currentNumber % 2 === 0){
            sumEven += currentNumber
        } else {
            sumOdd += currentNumber
        }
        difference = sumEven - sumOdd;
    }
    console.log(difference)

}
oddOrEven([2,4,6,8,10])