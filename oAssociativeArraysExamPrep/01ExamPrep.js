function plantsOne(data) {

    let n = data.shift();
    let plantObject = {};
    let plantsArray = []



    for (let element of data) {
        if (element.includes('<->')) {
            let [name, rarity] = element.split('<->')

            plantObject[name] = name,
            plantObject[rarity] = rarity
            plantsArray.push(plantObject)
        }

        if (element.includes('Rate: ')) {
            let plantInfo = element.split('Rate: ')
            let [plantName, rating] = plantInfo[1].split(' - ');
            if (plantName === plantObject.plant) {
                plantObject.rating = rating;


            }

        }
        
    }
    console.log(plantsArray[2])
}
plantsOne((["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
)



// let command = element.split(`${plant}`)[0]
// console.log(command)