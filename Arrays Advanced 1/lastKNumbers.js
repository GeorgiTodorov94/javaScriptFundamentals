function lastK(n, k) {

    let array = [1];

    while (n > array.length) {
        let sum = 0;
        let kArr = array.slice(-k);

        for (let i = 0; i < kArr.length; i++) {
            sum += kArr[i];
        }
        array.push(sum)
    }
    console.log(array)
}
lastK(6, 3);


//  TO start iterating backwards on a give array -> make a new promenliva -> start from .slice(-k) ->
//  -> will take the last K(Number) elements -> if there is only 1 element it will save in its self just 1 ->
//  -> it will take exactly K(NUmber) of elements or all elements if K > elements count in the array before the K Number.