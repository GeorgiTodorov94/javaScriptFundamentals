function mergeSon(arrayOne, arrayTwo) {

    let res = [];
    let arrayOneLength = arrayOne.length


    for (let i = 0; i < arrayOneLength; i++) {
        if (i % 2 === 0) {
            res[i] = Number(arrayOne[i]) + Number(arrayTwo[i]);
        } else {
            res[i] = arrayOne[i] + arrayTwo[i];
        }
    }

    console.log(res.join(" - "))
}
mergeSon(['5', '15', '23', '56', '35'],
        ['17', '22', '87', '36', '11']);



