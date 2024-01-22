function reverseInPlace(arr) {

   arr = [4,5,6,7];

   for(let el of arr){
    console.log(el)
   }

    
}
reverseInPlace()

function namees(input){

    let names = input
    for(let el of names){
        console.log(el)
    }
    console.log(names)
}
namees("Todor and Gosho")

function sum(numAsText){
    let sum = 0;

    for(let text of numAsText){
        let num = Number(text);
        sum += num % 2 === 0 ? num : 0;
    }
    console.log(sum)

}
sum(["1","2","3","4","5","6"]);