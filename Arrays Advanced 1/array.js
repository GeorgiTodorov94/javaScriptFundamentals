function solve(array){

    // early return
    if(array.length === 1){
        return console.log(Number(array.toString()))
    }

    console.log(Number(array[0]) + Number(array[array.length - 1]));
    console.log(Number(array.shift()) + Number(array.pop()));

}
solve(["20"])