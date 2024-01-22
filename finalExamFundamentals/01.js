function manipulator(input) {


    let str = input.shift();

    for (let command of input) {
        if (command === "End") break;

        let [action, ...tokens] = command.split(" ");

        switch (action) {

            case "Translate":
                let [char, replacement] = tokens;
                let regex = new RegExp(char, 'g');
                str = str.replace(regex, replacement);
                console.log(str);
                break;

            case "Includes":
                let substringIncludes = tokens[0];
                if (str.includes(substringIncludes)) {
                    console.log('True')
                } else {
                    console.log('False')
                }
                break;

            case "Start":
                let substringStart = tokens[0];
                if (str.startsWith(substringStart)) {
                    console.log('True')
                } else {
                    console.log('False')
                }
                break;

            case "Lowercase":
                str = str.toLowerCase();
                console.log(str);
                break;

            case "FindIndex":
                let charFindIndex = tokens[0];
                let index = str.lastIndexOf(charFindIndex);
                console.log(index);
                break;

            case "Remove":
                let [startIndex, count] = tokens.map(Number);
                str = str.slice(0, startIndex) + str.slice(startIndex + count);
                console.log(str);
                break;

            default:
                break;
        } // как ме бяхте уплашили със задачите, които решавахме по време на подготовката за
        //  изпита, бяха много по- трудни от тези.... БЛагодаря за което!
    }
}

manipulator((["//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"]))

console.log('_____________---------------------')
console.log('                           ')

manipulator((["*S0ftUni is the B3St Plac3**",

    "Translate 2 o",

    "Includes best",

    "Start the",

    "Lowercase",

    "FindIndex p",

    "Remove 2 7",

    "End"]))