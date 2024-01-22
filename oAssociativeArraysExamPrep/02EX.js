function oddOccurrences(input) {

    let inputArray = input.split(' ').map(e => e.toLowerCase());

    let wordsObject = {};

    for (const word of inputArray) {
        if(!wordsObject.hasOwnProperty(word)){
            wordsObject[word] = 0;
        }
        wordsObject[word]++;
    }
    let sortArr = Object
    .entries(wordsObject)
    .filter(double => double[1] % 2 !== 0)
    .sort((a,b) => b[1] - a[1]);

    for (const [key,value] of sortArr) {
        if(value % 2 === 1){
            console.log(key)
        }
    }
   

}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')