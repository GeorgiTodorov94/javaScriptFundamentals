function subset(array) {

    let resultArray = [];
    let arrayLength = array.length;
    let currentBiggestNumber = 0;
    

    for (let i = 0; i < arrayLength; i++) {
        let currentNumber = array[i];
        if(i === 0){
            resultArray.push(currentNumber)
            currentBiggestNumber = currentNumber;

        } else if (currentNumber > currentBiggestNumber) {
                currentBiggestNumber = currentNumber;
    
                if (currentBiggestNumber) {
                    resultArray.push(currentNumber);
                }
            }
        

       
    }
    console.log(resultArray.join(' '))
}
subset( [ 1, 3, 8, 4, 10, 12, 3, 2, 24] );