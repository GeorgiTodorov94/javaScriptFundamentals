function dictionary(input) {
    let result = [];
    let sortedLinesOne = []


    input.forEach(line => {

        let parsedLine = JSON.parse(line);
        result.push(parsedLine)
        result.join('')
        // console.log(result);
    });
    result.forEach(element => {
        element = Object.entries(element)
        let term = element[0]
        let myObject = {
            term: term[0],
            definition: term[1]
        }
        sortedLinesOne.push(myObject)
        
       
        
    });
    sortedLinesOne.sort((a,b) => a.term.localeCompare(b.term))
    

    for (const book of sortedLinesOne) {
        console.log(`Term: ${book.term} => Definition: ${book.definition}`)
    }
    















    //    console.log(myObject);
   

    // for (let key in myObject) {
    //     myObject = Object.entries(myObject).sort((a, b) => a[0].localeCompare(b[0]))
    //     }
    //     for (let key in myObject) {
    //         console.log(`Terms: ${key} -> Definition: ${myObject[key]}`)
    //    }
    
    // console.log(myObject)

    // for (let i = 0; i < sortedLines.length; i++) {
    //     let currentArray = sortedLines[i];
    //     let terms = currentArray[0];
    //     let definition = currentArray[1];
    //     console.log(`Term: ${terms} => Definition: ${definition}`)
    // }
    // sortedLines.forEach(([terms, definition]) => {
    //     console.log(`Term ${terms} => Definition: ${definition}`)
    // });

    


}
dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])