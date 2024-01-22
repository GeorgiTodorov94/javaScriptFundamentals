function schoolGrades(data) {

    let myMap = new Map();
    for (const el of data) {
        let [name, ...grades] = el.split(` `);
        let numbers = grades.map(x => Number(x))

        if (!myMap.has(name)) {
            myMap.set(name, numbers)
        } else {
            let currentGrade = myMap.get(name)
            myMap.set(name, currentGrade.concat(numbers))
        }
    }
    
    let sortedEntries = Array.from(myMap).sort((a, b) => a[0].localeCompare(b[0]))
    

    for (let [name, grades] of sortedEntries) {
        let sum = 0;
        for (let grade of grades) {
            sum += grade
        }
        let average = (sum / grades.length).toFixed(2)
        console.log(`${name}: ${average}`)
    }


}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)