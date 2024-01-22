function solveOne3(data, word) {
    let result = ''

    if (data.includes(word)) {
        result = data.replace(word, '*****')
    }
   console.log(result)

}
solveOne3('A small sentence with words', 'small')



function solve(data, word) {

    let result = ''

    while (data.includes(word)) {
        let startIndex = data.indexOf(word);
        let lastIndex = startIndex + word.length
        result = data.substring(0, startIndex);
        result += "*".repeat(word.length)
        result += data.substring(lastIndex)
        data = result
    }
    console.log(result)


}
solve('A small sentence with words', 'small')