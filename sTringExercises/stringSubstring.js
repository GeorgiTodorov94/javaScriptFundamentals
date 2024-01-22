function substring(word, text){

    let splitArray = text.split(' ').map(e=> e.toLowerCase());
    let isNotFound = true;

    for (const element of splitArray) {
        if(word === element){
            isNotFound = false;
            
            return console.log(word);
        } 
    }
    if(isNotFound){
        console.log(`${word} is not found!`)
    }

}
substring('javascript',
'JavaScript is the best programming language');