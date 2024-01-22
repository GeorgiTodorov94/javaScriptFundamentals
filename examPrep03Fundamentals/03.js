function pirate(data) {

    let target = [];

    for (let line of data) {
        if (line === 'Sail') {
            break;
        }
        let [city, population, gold] = line.split('||');

        let currentCity = target.find((x) => x.city = city);
        if (!currentCity) {
            let newTarget = {
                city,
                population,
                gold
            }
            target.push(newTarget)
        } else {
            currentCity.population += population;
        }
    }

    let index = data.indexOf("Sail") + 1;
    let command = data[index];

    while (command !== "End") {

        let tokens = command.split('=>');
        let action = tokens[0];
        let city;
        let population;
        let gold;

        switch (action) {
            case 'Plunder':
                city = tokens[1];
                population = Number(tokens[2]);
                gold = Number(tokens[3]);

                let currentCity = target.find((x) => x.city = city);

                if(!currentCity){
                    break;
                }

                currentCity.population -= population;
                currentCity.gold -= gold;
                if (currentCity.population <= 0 || currentCity.gold <= 0){
                    
                }

                break;
            case 'Prosper':

                break;
        }
    }

}
pirate((["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]));