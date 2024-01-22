function comparison(arrayOne, arrayTwo) {



    for (let i = 0; i < arrayOne.length; i++) {
        let currentIndex = arrayOne[i];

        for (let j = 0; j < arrayTwo.length; j++) {
            let currentIndexTwo = arrayTwo[j]

            if (currentIndex === currentIndexTwo) {
                console.log(currentIndex)
            }
        }
    }

}
comparison(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])