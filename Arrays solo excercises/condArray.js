function condArray(array){

    let res = [];

    while(array.length > 1){
        for (let i = 0; i < array.length - 1; i++){
            res[i] = array[i] + array[i + 1];
        }
        array = res;
        res = []
    }
    console.log(array.join(''))

}
condArray([2,10,3])