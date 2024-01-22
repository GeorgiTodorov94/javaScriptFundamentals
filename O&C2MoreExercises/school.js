function school(data) {

    let studentArray = []
    let averageAnnualScore = 0;
    let gradeCount = 0;
    let finalStudentsArray = []

    data.forEach(element => {
        let [studentName, grade, graduation] = element.split(', ');
        let studentObject = {
            studentName: studentName.split('Student name: ')[1],
            grade: Number(grade.split('Grade: ')[1]),
            graduation: Number(graduation.split('Graduated with an average score: ')[1])
        };

        if (studentObject.graduation > 3) {
            studentObject.grade = studentObject.grade;
            studentArray.push(studentObject)
        }

        studentArray.sort((a, b) => a.grade - b.grade)
        let currentGrade = Number(grade.split('Grade: ')[1]);

       
        
    });
    
    studentArray.forEach(element => {

       
            
            console.log(`${element.grade} Grade
        List of students: ${element.studentName}
        Average annual score from last year: ${averageAnnualScore}`)
        
    });

}



school([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]);