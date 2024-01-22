function phone(data) {
    let phoneBook = {};


    for (let el of data) {
        let [name, number] = el.split(' ');
        phoneBook[name] = number;
    }

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`)
    }
}
phone(['Tim 09090909',
    'Gor 1111111', 'Pepe 120391293102',
    'pAPA 12931203912'])