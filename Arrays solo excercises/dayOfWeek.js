// function dayOfWeek(day){

//     switch(day){
//        // case 1: console.log('Monday');break;
//        // case 2: console.log('Tuesday');break;
//        // case 3: console.log('Wednesday');break;
//        // case 4: console.log('Thursday');break;
//        // case 5: console.log('Friday');break;
//        // case 6: console.log('Saturday');break;
//        // case 7: console.log('Sunday');break;
//     }


// }
// dayOfWeek(3);

function dayOfWeekTwo(day) {

    let dayOfWeekAsString = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    let result = dayOfWeekAsString[day - 1]


    if (result) {
        console.log(result);
    } else {
        console.log('Invalid day!')
    }
    

}
dayOfWeekTwo(4)