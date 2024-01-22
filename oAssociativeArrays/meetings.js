function meetings(data) {

    let arr = {};

    for (const el of data) {
        let [day, name] = el.split(' ');
        
        if (arr.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`)
        } else {
            arr[day] = name;
            console.log(`Scheduled for ${day}`)
        }
        
    }
    for (let [key, value] of Object.entries(arr)){
        console.log(`${key} -> ${value}`)
    }

}
meetings(['Monday Peter',
    'Wednesday Monica',
    'Monday Tim',
    'Tuesday George'])