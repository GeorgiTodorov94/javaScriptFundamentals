function occurrences(data) {

    let wordObject = {};
    let count = 0;

    for(let word of data){
        if(!wordObject.hasOwnProperty(word)){
            count = 1;
            wordObject[word] = count
        } else {
            count = wordObject[word]
            wordObject[word] = count + 1
            count = count;
        }
    }
    let wordsArray = Object.entries(wordObject).sort((a,b) => b[1] - a[1])
    for (const el of wordsArray) {
        console.log(`${el[0]} -> ${el[1]} times`);
    }
}
occurrences(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"])