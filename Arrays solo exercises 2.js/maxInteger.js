function maxInteger(array) {
    let res = '';
    

    for (let i = 1; i <= array.length; i++) {

        let isMax = true;
        let currentNumber = Number(array[i - 1]);

        for(let j = i; j < array.length; j++){
            let nextNumber = Number(array[j]);

            if(nextNumber >= currentNumber){
                isMax = false;
                break;
            }
        }
        if(isMax){
            res += `${currentNumber} `
        }
    }
    console.log(res)
}
maxInteger([1, 4, 3, 2])