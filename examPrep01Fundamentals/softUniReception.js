function softUniReception(array) {

    let employeeOneEfficiency = Number(array[0]);
    let employeeTwoEfficiency = Number(array[1]);
    let employeeThreeEfficiency = Number(array[2]);
    let studentCount = Number(array[3]);
    let hoursNeeded = 0;
    let totalWorkingHours = 24;
    let studentAnswered = 0;
    

    let totalEfficiencyPerHour = (employeeOneEfficiency + employeeTwoEfficiency + employeeThreeEfficiency);
    

    for (let i = 1; i <= totalWorkingHours; i++) {
        if(i % 4 === 0){
            totalWorkingHours -= 1;
            hoursNeeded++;
            
        } else if ( !(i % 4 === 0) && studentAnswered < studentCount){
            studentAnswered += totalEfficiencyPerHour;
            hoursNeeded++;
            
        } else {
            break;
        }
        
    
    
    
    

}
console.log(`Time needed: ${hoursNeeded}h.`)
}
softUniReception(['5', '6', '4', '20'])
console.log("-----------")
softUniReception(['1','2','3','45'])
softUniReception(['3','2','5','40'])

// if (totalEfficiencyPerHour <= studentCount) {

//     hoursNeeded++;
//     if (studentsLeftToBeHelped <= studentCount) {
//         hoursNeeded++;
//     }

//}


        
        // if (studentAnswered <= studentCount){
        //     hoursNeeded++;
        //     break;
        // } else {
        //     hoursNeeded++;
        // }