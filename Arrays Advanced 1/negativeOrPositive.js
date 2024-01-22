function nop(array){
    let myArray = [];

    for (let i = 0; i < array.length; i++){
        let currentNumber = array[i]
        if(currentNumber >= 0){
        myArray.push(currentNumber)            
        } else {
            myArray.unshift(currentNumber)
        }
    }
console.log(myArray.join("\n"))
}
nop(['7', '-2', '8', '9'])