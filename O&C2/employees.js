function employees(input) {
    let myObj = {}

    for (const name of input) {

        myObj[name] = name.length;
    }

    for (const name in myObj) {

        console.log(`${name} => ${myObj[name]}`)

    }

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])