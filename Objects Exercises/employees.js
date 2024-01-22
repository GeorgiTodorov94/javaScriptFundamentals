function employees(data) {

    for (let i = 0; i < data.length; i++) {
        let object = {
            name: data[i],
            personalNumber: data[i].length,

        }
        
            console.log(`Name: ${object.name} -- Personal Number: ${object.personalNumber}`)
        

    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']);

    // console.log(`${object.name} -- Personal Number: ${object.personalNumber}`)
