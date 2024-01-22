function catalogue(input) {

    let myArray = []
    let result = []
    let myObject = {}
    let resultTwo = []

    for (let line of input) {
        let [productName, productPrice] = line.split(" : ");
        productName = productName
        productPrice = Number(productPrice);
        myObject = {
            productName,
            productPrice,
        }
        myArray.push(myObject)

    }
    myArray.forEach(element => {

        if (element.productName[0].charCodeAt() >= 65 && element.productName[0].charCodeAt() <= 90) {
            let anotherObject = {
                order: element.productName[0],
                price: element.productPrice
            }
            if (!result.includes(anotherObject.order)) {
                result.push(anotherObject)
            }
            result.sort((a, b) => a.order.localeCompare(b.order))
        }
console.log(result)
    });
    result.forEach(element => {

        let currentSymbol = element.order

        // console.log(currentPrice)
        // console.log(currentSymbol)
        myArray.forEach(element => {

            let currentPrice = element.productPrice
            if (element.productName[0] === currentSymbol) {


                let thirdObject = {
                    
                    element: element.productName,
                    price: currentPrice
                }
                
                
            }

        });
    });

    
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])

// if(result[0] === element.productName[0].charCodeAt()){

// }