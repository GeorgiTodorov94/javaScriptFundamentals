function flights(firstArray) {

    let flightsArray = [];
    let cancelledFlights = [];



    let specificSectorArray = firstArray[0];
    let changedStatusesArray = firstArray[1];
    let flightStatusArray = firstArray[2].join('');

    specificSectorArray.forEach(element => {
        let [flightNumber, destination] = element.split(' ')
        let flightsObject = {
            flightNumber,
            destination,
            flightStatusArray
        }
        flightsArray.push(flightsObject)

    });

    changedStatusesArray.forEach(element => {
        let [flightNumber, command] = element.split(' ');
        flightsArray.forEach(element => {
            if (element.flightNumber === flightNumber) {
                element.flightStatusArray = command
                cancelledFlights.push(element);
                flightsArray.splice(element, 1)
                // console.log(flightsArray)
            }
        });

    });
    for (const key of cancelledFlights) {
        let cancelledObject = {
            destination: key.destination,
            status: key.flightStatusArray
        }
        console.log(cancelledFlights)
        // console.log(cancelledObject);
    }
    if (flightStatusArray === 'Ready to fly') {
        for (const key of flightsArray) {
            let readyObject = {
                destination: key.destination,
                status: flightStatusArray

            }
            console.log(readyObject);
        }
    }
}
flights([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],

['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],

['Cancelled']]

)

