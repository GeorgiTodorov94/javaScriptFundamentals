function invalidIndex(){

    let array = [10,20,30];
   
    array[-4] = 40;

    console.table(array);

}
invalidIndex()