// function garages(input) {

//     let myMap = new Map();
//     console.log(input)

//     for (let i = 0; i < input.length; i++) {

//         let currentCarInfo = input[i];
//         let carInfo = currentCarInfo.split(' - ')
//         let garageNumber = carInfo.shift();
//         console.log(carInfo)
//         console.log(garageNumber)

//         if (!myMap.has(garageNumber)) {
//             myMap.set(garageNumber, carInfo)
//         } else {
//             let currentCar = myMap.get(garageNumber)

//             myMap.set(garageNumber, carInfo.concat(currentCar));
//             garageNumber.split('')

//         }
//         for (let [key, value] of myMap) {
//             console.log(`"Garage № ${key} \n -- ${value}`)
//         }
//     }



//     console.log(myMap)
// }

// garages(['1 - color: blue, fuel type: diesel',
//     '1 - color: red, manufacture: Audi',
//     '2 - fuel type: petrol',
//     '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);




function garage1(cars) {
    let garages = new Map();

    cars.forEach(car => {
        let [garageNumber, carInfo] = car.split(' - ');
        let carDetails = carInfo.split(', ');

        if (!garages.has(garageNumber)) {
            garages.set(garageNumber, []);
        }

        let garage = garages.get(garageNumber);
        let carProperties = {};

        carDetails.forEach(detail => {
            let [key, value] = detail.split(': ');
            carProperties[key] = value;
        });

        garage.push(carProperties);
    });

    garages.forEach((cars, garageNumber) => {
        console.log(cars)
        let result = `Garage № ${garageNumber}:\n`;
        cars.forEach(car => {
            let carDetails = Object.entries(car).map(([key, value]) => `${key} - ${value}`);
            result += `--- ${carDetails.join(', ')}\n`;
        });
          console.log(result);
    });
}

garage1(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);