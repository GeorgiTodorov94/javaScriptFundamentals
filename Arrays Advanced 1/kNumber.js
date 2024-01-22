function kNumber(array) {

    let k = array.shift();

    let firstK = array.slice(0,k)
    let secondK = array.slice(-k)
    console.log(firstK.join(' '));
    console.log(secondK.join(' '))
      
}
kNumber([2, 7, 8, 9])
console.log("----------")
kNumber([3, 6, 7, 8, 9])