function sort(array) {

    // let alphabet = array.sort((a, b) => a.localeCompare(b))
    // let ascendingOrder = array.sort((a, b) => a - b);

    let arrayOne = array.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length
        } return a.localeCompare(b);
    })
    console.log(arrayOne.join('\n'))
}
sort(['alpha',
    'beta',
    'gamma']);