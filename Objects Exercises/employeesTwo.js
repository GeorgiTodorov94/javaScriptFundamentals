function emp(array) {

    let object = {

    };
    //  for OF works on an array =>
    for (const name of array) {
        object[name] = name.length;
    }
    // for in loop works on an object =>
    for (const name in object) {
        console.log(`${name} ${object[name]} `)
    }

}
emp([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']);