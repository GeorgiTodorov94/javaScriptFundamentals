function solve(data) {

    let text = data
    for (let el of data) {
        console.log(el)
    }
}
solve('Todor')

function concat(data, dataOne) {

    let nameA = data;
    let nameB = dataOne

    let result = nameA.concat(", ")
    result = result.concat(dataOne)
    console.log(result)
}
concat('Todor', 'Gosho')


function indexOf(data, dataOne) {

    console.log(data.indexOf("o"))
    console.log(data.indexOf("v"))
}
indexOf('Todor', 'Gosho')


function substring() {

    let text = "Gosho, Tosho, Pesho";

    // substring -> takes the elements from givenIndex to givenIndex ->
    console.log(text.substring(5, ))

}
substring()


function replace() {

    let text = "Gosho, Tosho, Pesho";
    // => replaces a given string or symbol -> 
    text = text.replace('Tosho', 'Ivan')
    //=> symbol
    text = text.replace('P', 'E')
    console.log(text)

}
replace()




function substring1(text, start, count) {

    console.log(text.substring(start, start + count))


}
substring1('ASentence', 1, 8)



function includes() {

    let text = "Gosho, Tosho, Pesho";

    console.log(text.includes('Gosh'))

}
includes()



function repeat() {

    let text = "Gosho, Tosho, Pesho";

    let str = '*';
    for (let i = 0; i < 5; i++) {
        console.log(str.repeat(i))
    }

}
repeat()