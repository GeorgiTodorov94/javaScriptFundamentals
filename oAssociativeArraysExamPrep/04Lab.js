function storage(data) {
    let myMap = new Map()
    data.forEach(element => {
        let [productName, quantity] = element.split(' ');
        quantity = Number(quantity)
        if (!myMap.has(productName)) {
            myMap.set(productName, quantity)
        } else {
            let currentQuantity = myMap.get(productName)
            myMap.set(productName, currentQuantity + quantity);
        }
    });
    
    for (let el of Array.from(myMap)) {
        console.log(`${el[0]} => ${el[1]}`)
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)