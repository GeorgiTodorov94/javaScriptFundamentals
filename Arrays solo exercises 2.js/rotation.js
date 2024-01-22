function rotation(array, rotations) {

    let res = [];

    for (let index = 0; index < rotations; index++) {
        
       let firstElement = array.shift();
        array.push(firstElement)
    }
    console.log(array)

}
rotation([51, 47, 32, 61, 21], 2)