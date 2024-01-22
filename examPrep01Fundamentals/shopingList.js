function shoppingList(data) {

    let list = data.shift().split('!');
    let index = 0;
    let command = data[index];
    index++;


    while (command !== "Go Shopping!") {
        let token = command.split(" ");
        let item;

        switch (token[0]) {
            case "Urgent":
                item = token[1];
                if (!list.includes(item)) {
                    list.unshift(item);
                }
                break;
            case "Unnecessary":
                item = token[1]
                if (list.indexOf(item) > -1) {
                    list.splice(list.indexOf(item), 1)
                }
                break;
            case "Correct":
                let oldItem = token[1];
                let newItem = token[2];
                let indexOfElement = list.indexOf(oldItem);
                if (indexOfElement > -1) {
                    list[indexOfElement] = newItem;
                }
                break;
            case "Rearrange":
                item = token[1]
                if (list.indexOf(item) > -1) {
                    let currentItem = list.splice(list.indexOf(item), 1);
                    list.push(currentItem[0]);
                }
                break;
        }

        command = data[index];
        index++;
    }
    console.log(list.join(', '))

}
shoppingList((["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])
)
console.log("--------------")
shoppingList((["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])
)