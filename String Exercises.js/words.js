function word(input){

    let words = [];
    let index = 0;
    let length = input.length;

    for (let i = 1; i < length ; i++) {
        
        if(input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90){
            words.push(input.substring(index, i))
            index = i;
        }
    }
    words.push(input.substring(index, input.length))
    console.log(words.join(', '))
}
word('SplitMeIfYouCanHaHaYouCantOrYouCan')