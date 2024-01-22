function deserialize(input) {
    let result = '';
    let myMap = new Map();

    for (let element of input) {
        if (element === 'end') {
            break;
        }

        let splitElement = element.split(':');
        
        let currentChar = splitElement[0]
        // console.log(splitElement[0]);
        let indexes = splitElement[1].split('/')
        // console.log(indexes)

        if(!myMap.has(currentChar)){
            myMap.set(currentChar, []);
        } 
        if(myMap.has(currentChar)){
            let array = myMap.get(currentChar)
            array.push(indexes)
        }
        
        
}
for (let [key , value] of Array.from(myMap)) {
    // console.log(key)
    for (let index of value) {
        for (let number of index) {
            number = Number(number)
            let newResult = result.substring(0, number) + key + result.substring(number)
            result += key.substring(0, index) + key + key.substring(number)
        }
        
    }
    
    console.log(result)
}
let str = "Hello World!";
let index = 5;
let symbol = "-";
let newStr = str.substring(0, index) + symbol + str.substring(index);
console.log(newStr); // Output: "Hello- World!"

}
deserialize(['a:0/3/5/11',
'v:1/4',
'j:2',
'm:6/9/15',
's:7/13',
'd:8/14',
'c:10',
'l:12',
'end'])


// let splitElement = element.split(':');
        
// let currentChar = splitElement[0]
// console.log(splitElement[0])
// let indexes = splitElement[1].split('/')
// console.log(indexes)

// for (const index of indexes) {
    
//     if (index % 2 === 0) {
//         result += currentChar
//     } else {
//         result += currentChar
//     }
// }
// }