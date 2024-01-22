function mu(input) {

    let array = [input]
    let startingHealth = 100;
    let bitCoins = 0;
    let bestRoom = 0;


    let dungeon = array[0].split('|')

    for (let i = 0; i < dungeon.length; i++) {
        let newArr = dungeon[i].split(', ');
        let tokens = newArr[0].split(' ');
        let command = tokens[0];
        let value = Number(tokens[1]);

        if (command === 'potion') {
            let currentHealth = startingHealth + value;
            let healingValue = currentHealth - startingHealth

            if (currentHealth > startingHealth) {
                currentHealth = startingHealth + value;


            } else {
                currentHealth = currentHealth + value
                console.log(currentHealth)
            }
            console.log(`You healed for ${healingValue} hp.`)
            console.log(`Current health: ${currentHealth} hp.`)
        }
        if (command === 'chest') {
            bitCoins = + value;
            console.log(`You found ${bitCoins} bitcoins.`)
        }
        bestRoom = i + 1
        if (command !== 'chest' && command !== 'potion') {

            startingHealth -= value;

            if (startingHealth >= 0) {
                console.log(`You slayed ${command}.`)

            } else {
                console.log(`You died! Killed by ${command}.`)
                console.log(`Best room: ${bestRoom}`)
                break;
            }
        }

        bestRoom = i + 1
        if (i === dungeon.length){
            console.log(`You've made it!`)
            console.log(`Bitcoins: ${bitCoins}`)
            console.log(`Health: ${currentHealth}`)
            
        }

    }
    
}
mu("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")



// let newArrTwo = newArr[i].split(' ')
//console.log(newArrTwo)