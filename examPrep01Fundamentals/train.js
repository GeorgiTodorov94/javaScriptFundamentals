function train(array) {

    let wagons = array.shift().split(' ').map(Number);
    let maxCapacityOfWagon = Number(array.shift())

    for (let i = 0; i < array.length; i++) {

        let tokens = array[i].split(' ')
        if (tokens[0] === 'Add') {
            wagons.push(Number(tokens[1]));

        } else {
            for (let j = 0; j < wagons.length; j++) {

                if (maxCapacityOfWagon >= Number(tokens[0]) + wagons[j]) {
                    wagons[j] += Number(tokens[0])

                    break;

                }
            }
        }
    }
    console.log(wagons.join(' '));

}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)