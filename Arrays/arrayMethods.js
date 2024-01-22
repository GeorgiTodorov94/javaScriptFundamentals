//.push
function push(){

    let nArray = ['Todor', 'Gosho', 'Pesho']
    console.log(nArray.push("Petko"))
    console.log(nArray)
}
push()

//.include

function include() {

    let array = [10, 20, 30];
    console.log(array.includes(10))
}
include() // (vrushta true or false) -> is it included or not.

//.join

function join() {

    let nArray = ['Todor', 'Gosho', 'Pesho']
    console.log(nArray.join(", "))
}
join()


//.toString
function toString() {

    let nArray = ['Todor', 'Gosho', 'Pesho']
    console.log(typeof (nArray.toString()))

}
toString()