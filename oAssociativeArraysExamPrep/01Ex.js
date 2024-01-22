// Write a function that receives an array of words and finds occurrences of given words in that sentence. 
// The input will come as an array of strings. The first string will contain the words you will be looking for separated by 
// a space. All strings after that will be the words in which you will check for a match.
// Print for each word how many times it occurs. The words should be sorted by count in descending


function wordTracker(input){


    let map = new Map();

    let wordsToCheck = input.shift().split(' ');

    wordsToCheck.forEach(word => {
        map.set(word, 0);
    });

    for (let line of input) {
        
        for (let word of wordsToCheck ) {
            
            if(word === line){
                let currentQuantity = map.get(line)
                map.set(line, currentQuantity + 1)
            }
        }
    }
    let sortArr = Array.from(map).sort((a,b) => b[1] - a[1])
    for (let el of sortArr) {
        console.log(`${el.join(' - ')}`);
    }

}
wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ]);



//     let myObj = {};
//     let words = data.shift();
//     let [these, sentence] = words.split(' ');
//     let theseCount = 0;
//     let sentenceCount = 0;

//     for (const word of data) {
//         if(word === these){
            
//             theseCount++;
//             myObj[word] = theseCount
//         } else if(word === sentence){
//             sentenceCount++;
//             myObj[word] = sentenceCount
//         }
//     }
//     let sortArr = Object.entries(myObj).sort((a,b) => a[1] - b[1]);

//     for (const el of sortArr) {
//         console.log(`${el.join(' - ')}`)
//     }
// }