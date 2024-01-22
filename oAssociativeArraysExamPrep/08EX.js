function travel(data) {

    let countryObj = {}

    for (let info of data) {
        let [country, town, cost] = info.split(' > ');
        let travelCost = Number(cost);
        
        if(!countryObj[country]){
            countryObj[country] = {}
        }
        
        if(!countryObj[country][town] || travelCost < countryObj[country][town]){
            countryObj[country][town] = travelCost
        }
}
    // console.log(countryObj)
    let sortedArr = Object.keys(countryObj).sort();
    
    for (let country of sortedArr) {
        countryObj[country] = Object.fromEntries(Object.entries(countryObj[country]).sort((a, b) => a[1] - b[1])
        );
        
            // Albania -> Tirana -> 1000
            // Bulgaria -> Sofia -> 200 Sopot -> 800
            // France -> Paris -> 2000
        
    }
    let result = [];
  for (let country of sortedArr) {
    for (let town in countryObj[country]) {
      let cost = countryObj[country][town];
      result.push(`${country} > ${town} > ${cost}`);
    }
  }
  return result;
 
}
travel([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]
)




// if (!countryObj[country]) {
//     countryObj[country] = []
//     countryObj[cityName] = cost



// } else if (!countryObj[country].includes(cityName)) {

//     let currentCost = cost
//     countryObj[cityName] = currentCost
    

//     countryObj[country].push(cityName)
//     countryObj[country].push(countryObj)
// } else if (countryObj[country].hasOwnProperty(cityName)) {

//     let currentCost = cost
//     countryObj[cityName] = currentCost
//     countryObj[country].push(countryObj[cityName])
// }  

// }
// let sortedArr = Object.entries(countryObj)

// for (let key in countryObj) {
// console.log(key, countryObj[key])
// }



// for (let element of sortedArr) {
// console.log(element)
// }