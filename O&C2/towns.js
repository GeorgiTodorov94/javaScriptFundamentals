function towns(input) {

    

    for (const town of input) {
        let [name, latitude, longitude] = town.split(' | ')
        
        let townsObj = {
            name,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        console.log(townsObj)
        
    }

}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)