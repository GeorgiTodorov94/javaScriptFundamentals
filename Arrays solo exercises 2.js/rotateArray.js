function rotateArray(array) {

    let rotationsCount = Number(array[array.length - 1]);
    let newArray = array.slice(0, array.length - 1)

    for (let i = 0; i < rotationsCount; i++) {

        let lastElement = newArray.pop()
        newArray.unshift(lastElement)

    }
    console.log(newArray.join(' '))
}
rotateArray(['Banana', 'Orange', 'Coconut','Apple', '15'])


// let firstElement = array.shift()
//        array.push(firstElement);
//        let lastElement = array.pop(array[array.length - 2])
//        array.push(lastElement)