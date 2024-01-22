function treasureHunt(input) {
    let treasureChest = input.shift().split('|');
    
    for (let line of input) {
      if (line === 'Yohoho!') {
        break;
      }
      
      let [command, ...args] = line.split(' ');
      
      if (command === 'Loot') {
        for (let item of args) {
          if (!treasureChest.includes(item)) {
            treasureChest.unshift(item);
          }
        }
      } else if (command === 'Drop') {
        let index = Number(args[0]);
        if (index >= 0 && index < treasureChest.length) {
          let droppedItem = treasureChest.splice(index, 1);
          treasureChest.push(droppedItem[0]);
        }
      } else if (command === 'Steal') {
        let count = Number(args[0]);
        let stolenItems = treasureChest.splice(-count);
        console.log(stolenItems.join(', '));
      }
    }
    
    if (treasureChest.length === 0) {
      console.log('Failed treasure hunt.');
    } else {
      let totalLength = treasureChest.join('').length;
      let averageGain = totalLength / treasureChest.length;
      console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    }
  }
  treasureHunt((["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])
)