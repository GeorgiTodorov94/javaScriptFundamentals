function addressBook(data) {

    let book = {};

    for (const el of data) {
        let [name, address] = el.split(':');
        book[name] = address;

    }
    let entries = Object.entries(book).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));
    for (const [key,value] of entries) {
       console.log(`${key} -> ${value}`)
    }

}
addressBook(['Tim: Doe ShoSho', 'John: GOGO', 'Peter: JingleBells'])