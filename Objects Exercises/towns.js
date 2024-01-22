function towns(data) {

    for (let i = 0; i < data.length; i++){
        let townInfo = data[i].split(',');
        let townArray = townInfo[0].split(' | ');
        let town = townArray[0];
        let latitude = Number(townArray[1]).toFixed(2);
        let longitude = Number(townArray[2]).toFixed(2);

        
        
        let myObj = {
            town,
            latitude,
            longitude,
        }
        console.log(myObj)
    }
    
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);
console.log('--------------');
towns(['Plovdiv | 136.45 | 812.575']);