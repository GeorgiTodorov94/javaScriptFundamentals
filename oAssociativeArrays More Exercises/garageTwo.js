// Write a function that stores cars in garages. You will be given an array of strings. Each string will contain a number 
// of a garage and info about a car. You have to store the car (with its info) in the given garage. The info about the car 
// will be in the format:
// "{key1}: {value1}, {key2}: {value2}…"
// If the garage does not exist, create it. The cars will always be unique. At the end print the result in the format:
// "Garage № {number}:
// --- {carOneKeyOne} - {carOneValueOne}, {carOneKeyTwo} - {carOneValueTwo}…
// --- {the same for the next car}
// Garage № {number}: …"


function garageTwo(data) {
    let myMap = new Map();

    for (const element of data) {
        let [garageNumber, carInfo] = element.split(' - ');
        let currentCar = carInfo.split(', ');
        if (!myMap.has(garageNumber))
            myMap.set(garageNumber, [])

        let garage = myMap.get(garageNumber)
        let carProperties = {};

        currentCar.forEach(car => {
            let [key, value] = car.split(': ')
            carProperties[key] = value
        })
        garage.push(carProperties)
       
      
    };
    garage.forEach((cars, garageNumber) => {
        let result = `Garage № ${garageNumber}:\n`;
        cars.forEach(car => {
            let carDetails = Object.entries(car).map(([key, value]) => `${key} - ${value}`);
            result += `--- ${carDetails.join(', ')}\n`;
        });
    });

    

    // console.log(array)

    // `Garage № ${element}
    // --- color - blue, fuel type - diesel
    // --- color - red, manufacture - Audi
    // Garage № ${element}
    // --- fuel type - petrol
    // Garage № ${element}
    // --- color - dark blue, fuel type -
    // diesel, manufacture - Fiat`
}
garageTwo(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);