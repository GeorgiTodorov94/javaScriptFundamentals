function solve(array) {

    let text = array[0];
    let wordsArray = array[1];

    for (let word of wordsArray) {

        let wordsFromStars = '_'.repeat(word.length);
        
        if(wordsFromStars.length === word.length){
        text = text.replace(wordsFromStars, word)
        }
    }
    console.log(text)
}
solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])

// 