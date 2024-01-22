// function bonus(array) {

//     let studentCount = Number(array.shift())
//     let totalLectures = Number(array.shift());
//     let bonus = Number(array.shift());
//     let totalBonusOfCurrentStudent = 0;
//     let result = [];
//     let lecturesCount = [];

//     for (let i = 0; i < studentCount; i++){
//         let currentStudentAttendance = array[i];
//         lecturesCount.push(currentStudentAttendance)
//         totalBonusOfCurrentStudent = (currentStudentAttendance / totalLectures) * (5 + bonus);
//         result.push(totalBonusOfCurrentStudent)
        
//     }
    

//     let resultOne = result
//     .map(x => Math.ceil(x))
//     .sort((a,b)=> b - a);
    
//     console.log(`Max Bonus: ${resultOne[0]}.`)

//     let lecturesTwo = lecturesCount
//     .map(x => Number(x))
//     .sort((a,b) => b - a);

//     console.log(`The student has attended ${lecturesTwo[0]} lectures.`)
// }
// bonus([
//     '5',
//     '25',
//     '30',
//     '12',
//     '19',
//     '24',
//     '16',
//     '20']);

function calculateMaxBonus(input) {
    let numberOfStudents = parseInt(input[0]);
    let numberOfLectures = parseInt(input[1]);
    let additionalBonus = parseInt(input[2]);
  
    let maxBonus = 0;
    let maxAttendance = 0;
    let bonus = 0
  
    for (let i = 3; i < input.length; i++) {
      let studentAttendance = parseInt(input[i]);
      let bonus = Math.ceil((studentAttendance / numberOfLectures) * (5 + additionalBonus));
  
      if (bonus > maxBonus) {
        maxBonus = bonus;
        maxAttendance = studentAttendance;
      }
    }
  
    console.log(`Max Bonus: ${maxBonus}.`);
    console.log(`The student has attended ${maxAttendance} lectures.`);
  }
  calculateMaxBonus([
        '5',
        '25',
        '30',
        '12',
        '19',
        '24',
        '16',
        '20']);