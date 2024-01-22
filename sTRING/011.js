function string(){

    let text = "todor";

    for (const char of text) {
        console.log(char)
    }
}
string();

function concat(){

    let nameA = "Pesho"
    let nameB = "Gosho"

    let result = nameA + ', ' + nameB
    // let result = nameA.concat(', ')
    // result = result.concat(nameB)
    console.log(result)
}
concat()