function evenSums(arr) {

    let result = 0
    for (let i = 0; i <= arr.length - 1; i++) {

        let currentNumber = Number(arr[i]);
        if (currentNumber % 2 === 0) {
            result += currentNumber;
        }

    }
    console.log(result)
}
evenSums(['1', '2', '3', '4', '5', '6'])
evenSums(['3', '5', '7', '9'])
evenSums(['2', '4', '6', '8', '10'])

function evenSumsTwo(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++){
        arr[i] = Number(arr[i])
    }
    for (let num of arr) {
        if (num % 2 === 0){
            sum += num;
        }
    }
    console.log(sum)

}
evenSumsTwo(['1', '2', '3', '4', '5', '6'])
evenSumsTwo(['3', '5', '7', '9'])
evenSumsTwo(['2', '4', '6', '8', '10'])