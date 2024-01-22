function updateStock(currentStock, delivery) {
    let stock = {}; // Object to store the stock
  
    // Update stock from current stock array
    for (let i = 0; i < currentStock.length; i += 2) {
      let product = currentStock[i];
      let quantity = parseInt(currentStock[i + 1]);
  
      stock[product] = quantity;
    }
  
    // Update stock from delivery array
    for (let i = 0; i < delivery.length; i += 2) {
      let product = delivery[i];
      let quantity = parseInt(delivery[i + 1]);
  
      if (stock.hasOwnProperty(product)) {
        // If the product already exists, increase the quantity
        stock[product] += quantity;
      } else {
        // If the product is new, add it to the stock
        stock[product] = quantity;
      }
    }
  
    // Print the stock in the required format
    for (let product in stock) {
      console.log(`${product} -> ${stock[product]}`);
    }
  }
  
  // Example usage
  let currentStock = ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'];
  let delivery = ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'];
  
  updateStock(currentStock, delivery);
  

