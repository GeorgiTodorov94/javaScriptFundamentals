function astr(data) {

    let text = data[0];
    let pattern = /([#]|[|])(?<item>[A-Za-z\s]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]{1,5})\1/g
    // let pattern = /([#|])([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d{1,5})\1/g
    let sum = 0;
    let days = 0;

    let match = pattern.exec(text);

    while(match){
        let item = match.groups["item"]
        let date = match.groups["date"]
        let calories = Number(match.groups["calories"]);
        match = pattern.exec(text);
        sum = sum + calories;
        days = sum / 2000
    }
    console.log(Math.floor(days))
}
astr([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
])