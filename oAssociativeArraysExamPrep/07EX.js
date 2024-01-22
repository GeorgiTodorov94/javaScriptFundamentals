function miner(input) {

    let myObj = {};

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);

        if(myObj.hasOwnProperty(resource)){
            myObj[resource] += quantity
            
        } else {
            myObj[resource] = quantity
           
        }
    }
    for (const key in myObj) {
        console.log(`${key} -> ${myObj[key]}`)
    }
}
miner([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17']);