function treasureHunt(array) {

    let initialLootIndex = array.slice(0, 1)
    let initialLoot = String(initialLootIndex).split('|');
    let finalLoot = [];
    
    console.log(initialLoot)
    console.log("---------------")

    for (let i = 1; i < array.length; i++){
        let command = String(array[i]).split(' ');
        console.log(command)
        // let loot = command[0];
        // let drop = command[0];
        // let steal = command[0];
        if(command[0] === 'Yohoho!'){
            break;
        } else if (command[0] === 'Loot'){
            if (command.includes()){
                
            }
        }
    }

}
treasureHunt((["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])
)