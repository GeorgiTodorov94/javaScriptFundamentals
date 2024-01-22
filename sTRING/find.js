function find(text, word){

    let result = text.split(' ');
    let wordCount = 0;
    for (const element of result) {
        if (element === word){
            
            wordCount++
        }
    }
    console.log(wordCount)

}
find('This is a word and it also is a sentence', 'is')
find('SoftUni is a great school', 'SoftUni')