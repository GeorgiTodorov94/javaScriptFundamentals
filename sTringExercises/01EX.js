function value(text) {

    let command = text.pop();
    let sumLowerCase = 0;
    let sumUpperCase = 0;


    for (let symbol of text) {
        let symbolSplit = symbol.split('')
        
        for (let char of symbolSplit) {
            
            if (command === 'LOWERCASE') {
                if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
                    sumLowerCase += char.charCodeAt()
                    
                }
            } else if (command === 'UPPERCASE'){
                if(char.charCodeAt() >= 65 && char.charCodeAt() <= 90){
                    sumUpperCase += char.charCodeAt();
                }
            }
        }
        if(command === 'LOWERCASE'){
            console.log(`The total sum is: ${sumLowerCase}`)
        } else {
            console.log(`The total sum is: ${sumUpperCase}`)
        }
    }
    
    
}
value(['HelloFromMyAwesomePROGRAM',
    'UPPERCASE']
)