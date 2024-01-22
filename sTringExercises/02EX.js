function serialize(input) {

    let myMap = new Map();

    for (let i = 0; i < input.length; i++) {
        let text = input[i];
        for (let j = 0; j < text.length; j++) {
            let currentChar = text[j];
            let currentIndex = j;
            if (!myMap.has(currentChar)) {
                myMap.set(currentChar, []);

            }
            if (myMap.has(currentChar)) {
                let array = myMap.get(currentChar)
                array.push(currentIndex)
            }
        }

    }
    for (const [key,value] of Array.from(myMap)) {
        console.log(`${key}:${value.join('/')}`)
    }

    
}
serialize(["avjavamsdmcalsdm"])