function addressBook(data) {

    let myObj = {};

    for (const line of data) {
        let [name, address] = line.split(':');
        if (!myObj.hasOwnProperty(name)) {
            myObj[name] = address
        } else {
            myObj[name] = address
        }
    }
    let sortArr = Object.entries(myObj).sort((a, b) => a[0].localeCompare(b[0]))
    for (const [name, address] of sortArr) {
        console.log(`${name} -> ${address}`)
    }
}
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'])