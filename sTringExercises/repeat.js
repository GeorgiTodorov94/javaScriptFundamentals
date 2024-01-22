function repeat(text) {
    let output = text[0]
    let result = ''
    result += output
    for (let i = 1; i < text.length; i++) {
        let currentChar = text[i];
        

        if (currentChar !== text[i - 1]) {
            result += currentChar
        }
    }
    console.log(result)

}
repeat('aaaaabbbbbcdddeeeedssaa')