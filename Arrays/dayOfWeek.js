function day(day){

    let dayOfWeekAsString = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    let result = dayOfWeekAsString[day - 1];
   

    if(result){
        console.log(result)
    } else {
        console.log('Invalid day!')
    }
   
     
}
day(6)

function day(day){

    let dayOfWeekAsString = [undefined, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    let result = dayOfWeekAsString[day];
   

    if(result){
        console.log(result)
    } else {
        console.log('Invalid day!')
    }
   
     
}
day(6)