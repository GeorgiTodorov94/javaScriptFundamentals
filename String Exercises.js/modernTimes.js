function modernTimes(input) {

    let result = []
    let inputArray = input.split(' ');

    for (const word of inputArray) {

        if (word[0] === '#' && word.length > 1) {

            let wordsArray = word.split('');
            wordsArray.shift();
            console.log(wordsArray);

            let wordToPrint = '';
            for (const char of wordsArray) {

                if (!isNaN(char)) {
                    break;
                } else {
                    wordToPrint += char
                }
            }
            if(wordToPrint.length > 0){
                console.log(wordToPrint)
            }
        }
    }
}
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')