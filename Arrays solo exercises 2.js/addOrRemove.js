function addOrRemove(command){

    let resultArray = [];
    let initialNumber = 1;
    let currentNumber = 0;
    
    for (let i = 0; i < command.length; i++){
        if(command[i] === 'add'){
            
            currentNumber += initialNumber  
            resultArray.push(currentNumber);

         } else {
             resultArray.pop(resultArray[resultArray.length - 1])
             currentNumber += initialNumber
         }
    }
    console.log(resultArray.join(' '))
}
addOrRemove(['add', 'add', 'remove', 'add', 'add']);