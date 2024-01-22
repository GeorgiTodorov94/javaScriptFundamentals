function storeProvisionTwo(firstArray, secondArray) {

    let localStorage = {};

    for (let i = 0; i < firstArray.length; i += 2) {

        let product = firstArray[i];
        let quantity = Number(firstArray[i + 1])

        localStorage[product] = quantity
    }

    for (let j = 0; j < secondArray.length; j += 2) {
        let product = secondArray[j];
            
        if (!localStorage.hasOwnProperty(product)) {
            localStorage[product] = 0;
        }
        localStorage[product] += Number(secondArray[j + 1])
    }

    for (const product in localStorage) {
        console.log(`${product} -> ${localStorage[product]}`)
    }
}
storeProvisionTwo(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);