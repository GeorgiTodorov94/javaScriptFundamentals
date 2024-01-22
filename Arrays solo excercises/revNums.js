function revNum(n, arr) {

    let newArr = [];

    for (let i = 0; i < n; i++) {
        newArr.push(arr[i])

    }
    let buff = "";

    for (let i = newArr.length - 1; i >= 0; i--) {
        buff += newArr[i] + " ";
    }
    console.log(buff)



}
revNum(3, [10, 20, 30, 40, 50])

function revNum(n, arr) {

    let res = [];
    for (let i = n - 1; i >= 0; i--){
        res.push(arr[i]);
    }

    console.log(res.join(" "))
}
revNum(3, [10, 20, 30, 40, 50])



