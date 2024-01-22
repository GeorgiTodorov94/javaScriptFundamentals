function addOrSubtract(array) {

    let result = [];
    let sum = 0;
    let sumOfFirstArray = 0;
    for (let i = 0; i < array.length; i++) {
        sumOfFirstArray += array[i];

        if (array[i] % 2 === 0) {
            array[i] = array[i] + i;
            result.push(array[i]);

        } else {
            array[i] = array[i] - i;
            result.push(array[i]);

        }
        sum += array[i];
    }
    console.log(result);
    console.log(sumOfFirstArray);
    console.log(sum);

}
addOrSubtract([5, 15, 23, 56, 35]);