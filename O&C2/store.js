function store(firstArray, secondArray) {

    let localeStoreStorage = {};

    for (let i = 0; i < firstArray.length; i += 2) {

        let currentGood = firstArray[i];
        let quantity = Number(firstArray[i + 1]);
        localeStoreStorage[currentGood] = quantity;
    }
    for (let i = 0; i < secondArray.length; i += 2) {
        let currentGood = secondArray[i];
        let quantity = Number(secondArray[i + 1]);

        if(!localeStoreStorage.hasOwnProperty(currentGood)){
            localeStoreStorage[currentGood] = quantity;
        } else {
            localeStoreStorage[currentGood] += quantity
        }
    }
    for (const good in localeStoreStorage) {
        console.log(`${good} -> ${localeStoreStorage[good]}`)
    }

}
store([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ]
)