function heartDelivery(array) {

    let houses = array.shift().split('@').map(Number);
    let housesLength = houses.length;
    console.log(houses)

    let index = 0;
    let command = array[index];
    index++;

    while (command !== 'Love!') {
        let tokens = command.split(' ');
        let jumpLength = Number(tokens[1]);


        let cupidPosition = houses[index - index];
        if (tokens[0] === 'Jump' && cupidPosition < housesLength) {
            cupidPosition = houses[index + jumpLength]


        }









        command = array[index];
        index++;
    }

}
heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])






function heart(arr) {

    let firstLine = arr.shift().split("@");
    let nextLine = arr.shift();
    let total = 0;

    while (nextLine !== 'Love!') {
        let result = nextLine.split(' ');
        total += Number(result[1]);

        if (total > firstLine.length - 1) {
            total = 0;
        }

        if (firstLine[total] === 0) {
            console.log(`Place ${total} already had Valentine's day.`)
        } else {
            firstLine[total] = firstLine[total] - 2
            if (firstLine[total] === 0) {
                console.log(`Place ${total} already has Valentine's day.`)
            }
        }

        nextLine = arr.shift();
    }
    console.log(`Cupid's last position was ${total}.`);

    let resultArray = [];
    let resultFlag = true;

    firstLine.forEach(element => {
        if (element !== 0) {
            resultFlag = false;
            resultArray.push(element);
        }

    });

    if (resultFlag) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${resultArray.length} places!`);
    }
}

heart(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])