function Nth(array){

    let NthStep = Number(array[array.length - 1]);
    let arrayLength = array.length;
    let result = [];

    for(let i = 0; i < arrayLength - 1; i++){
        if(i % NthStep === 0){
            
            result.push(array[i]);
        }
    }
console.log(result.join(' '));
}
Nth(['dsa', 'asd', 'test', 'test', '2']);