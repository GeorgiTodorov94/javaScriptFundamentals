function reverse(n, arr) {

    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(arr[i]);
    }
    let buff = "";
    for(let i = res.length - 1; i >= 0; i--){
        buff += res[i] + " ";
    }
    console.log(buff)

}
reverse(3, [10, 20, 30, 40, 50]);
console.log("-------------")
reverse(4, [-1, 20, 99, 5]);
console.log("-------------")
reverse(2, [66, 43, 75, 89, 47]);
console.log("-------------")

function reverse(n, arr) {

    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(arr[i]);
    }
    let reversArray = [];
    for(let i = res.length - 1; i >= 0; i--){
        reversArray.push(res[i]);
    }
    console.log(reversArray.join(" "))

}
reverse(3, [10, 20, 30, 40, 50]);
console.log("-------------")
reverse(4, [-1, 20, 99, 5]);
console.log("-------------")
reverse(2, [66, 43, 75, 89, 47]);
console.log("-------------")

function revers(n, arr){
    let res = [];
    
    for(let i = n; i >= 0; i--){
        res.push(arr[i])
    }
    console.log(res)
}
reverse(3, [10, 20, 30, 40, 50]);
console.log("-------------")
reverse(4, [-1, 20, 99, 5]);
console.log("-------------")
reverse(2, [66, 43, 75, 89, 47]);
console.log("-------------")