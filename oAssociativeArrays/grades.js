function grades(data) {

    let myMap = new Map();
    let totalGrade = [];
    let finalGrade = 0;
    let gradeCount = 0;
    let grade = 0
    let value = 0


    for (let el of data) {

        let grades = el.split(' ');
        let name = grades.shift();
        let currentGrade = grades.slice(0).map(x => Number(x))

        if (!myMap.has(name)) {
            myMap.set(name, currentGrade)


        } else {
            let existingGrade = myMap.get(name)
         
            
            
            for (let i = 0; i < currentGrade.length; i++) {
                let gradeToBeMoved = currentGrade[i];
                totalGrade.push(gradeToBeMoved);


            }
            for (let i = 0; i < existingGrade.length; i++) {
                let gradeToBeMoved = existingGrade[i];
                totalGrade.push(gradeToBeMoved)

                myMap.set(name, totalGrade)
            }

        }

    }

    for (let [key, gradeArray] of myMap) {
        for (let i = 0; i < gradeArray.length; i++) {
            gradeArray.map(Number)
            grade += gradeArray[i]
            gradeCount++;


        }
        finalGrade = grade / gradeCount;
        console.log(`${key}: ${finalGrade.toFixed(2)}`)
        finalGrade = 0;
        grade = 0;
        gradeCount = 0;

    }


}
grades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6',
    'Tammy 3 3 3']);


    // if (myMap.has(name)) {
    //     for (let i = 0; i < currentGrade.length; i++) {
    //         value += currentGrade[i];
    //         grade++
    //     }
    //     finalGrade = value / grade
    //     console.log(finalGrade)
    // }