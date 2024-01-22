function storage(data) {

    let myMap = new Map();

    for (let el of data) {
        let [key, value] = el.split(' ');
        let currentValue = Number(value);
        if (myMap.has(key)) {
            debugger
            // => here we can take the value of a key into a variable as follows =>
            let existingQuantity = myMap.get(key)
            // => here we can add to a value of an existing key using the previously made variable
            myMap.set(key, currentValue + existingQuantity)
        } else {
            myMap.set(key, currentValue);
        }

    }
    for (let [key,value] of myMap) {
        console.log(`${key} -> ${value}`)
    }
    // console.log(myMap)

}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)