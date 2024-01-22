function inventory(array) {

    let journal = array.shift().split(', ');
    let index = 0;
    let commandArray = array[index]
    index++;

    while (commandArray !== 'Craft!') {
        let tokens = commandArray.split(' - ');
        let command = tokens[0];
        let item = tokens[1];

        switch (command) {
            case 'Collect':
                if (journal.includes(item)) {
                    break;
                } else {
                    journal.push(item)
                }
                break;

            case 'Drop':
                if (journal.includes(item)) {
                    let itemToBeRemoved = journal.indexOf(item)
                    if (itemToBeRemoved !== -1) {
                        journal.splice(itemToBeRemoved, 1)
                    }
                } else {
                    break;
                }
                break;

            case 'Combine Items':
                let combinedItems = tokens[1].split(':')
                let oldItem = combinedItems[0]
                let newItem = combinedItems[1];
                if (journal.includes(oldItem)) {
                    let oldItemIndex = journal.indexOf(combinedItems[0]);
                    if (oldItemIndex !== -1) {
                        journal.splice(oldItemIndex, 1);
                        journal.splice(oldItemIndex, 0, newItem);
                        journal.splice(oldItemIndex, 0, oldItem);
                    }

                } else {
                    break;
                }
                break;
                
            case 'Renew':
                if (journal.includes(item)) {
                    let renewedItem = journal.indexOf(item);
                    if (renewedItem !== -1) {
                        journal.splice(renewedItem, 1);
                        journal.push(item);
                    }
                }
                break;
        }


        commandArray = array[index];
        index++;
    }
    console.log(journal.join(', '))

}
inventory(['Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!']);
console.log('------------');
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]
)