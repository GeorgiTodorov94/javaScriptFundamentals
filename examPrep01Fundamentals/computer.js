function computer(array) {

    let index = 0;
    let price = array[index];
    let totalPrice = 0;
    let taxes = 0.2;
    let receipt;
    let receiptForSpecial;
    let taxOnTotalPrice;

    for (let i = 0; i < array.length; i++) {
        
        if(array.length === 1){
            return console.log('Invalid order!')
        }

        let currentPrice = Number(array[i])
        totalPrice += currentPrice;
        taxOnTotalPrice = taxes * totalPrice
        let finalPrice = totalPrice + taxOnTotalPrice;
        let finalFinalPriceForSpecial = finalPrice * 0.9;

        if (array[i] === 'special') {
            console.log(receiptForSpecial);
            break;
        } else if (array[i] === 'regular') {
            console.log(receipt)
            break;
        }


        if (currentPrice < 0) {
            console.log("Invalid price!");
        }
        if (totalPrice <= 0) {
            console.log('Invalid order!')
        }


        price = array[index];
        index++;
        receipt = `Congratulations you've just bought a new computer!\nPrice without taxes: ${totalPrice.toFixed(2)}$\nTaxes: ${taxOnTotalPrice.toFixed(2)}$\n-----------\nTotal price: ${finalPrice.toFixed(2)}$`
        receiptForSpecial = `Congratulations you've just bought a new computer!\nPrice without taxes: ${totalPrice.toFixed(2)}$\nTaxes: ${taxOnTotalPrice.toFixed(2)}$\n-----------\nTotal price: ${finalFinalPriceForSpecial.toFixed(2)}$`
    }

}
computer([
    'regular']);