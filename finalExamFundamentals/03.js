function enrolledHeroes(input) {
    let heroes = {};

    for (let line of input) {
        if (line === 'End') {
            break;
        }

        let [command, heroName, spellName] = line.split(' ');

        if (command === 'Enroll') {

            if (!heroes.hasOwnProperty(heroName)) {
                heroes[heroName] = [];

            } else {
                console.log(`${heroName} is already enrolled.`);
            }

        } else if (command === 'Learn') {

            if (heroes.hasOwnProperty(heroName)) {

                if (!heroes[heroName].includes(spellName)) {
                    heroes[heroName].push(spellName);

                } else {
                    console.log(`${heroName} has already learnt ${spellName}.`);
                }

            } else {

                console.log(`${heroName} doesn't exist.`);
            }

        } else if (command === 'Unlearn') {

            if (heroes.hasOwnProperty(heroName)) {

                let spellIndex = heroes[heroName].indexOf(spellName);
                if (spellIndex !== -1) {

                    heroes[heroName].splice(spellIndex, 1);

                } else {

                    console.log(`${heroName} doesn't know ${spellName}.`);

                }

            } else {
                
                console.log(`${heroName} doesn't exist.`);
            }
        }
    }

    console.log('Heroes:');
    Object.entries(heroes).forEach(([name, spells]) => {
        console.log(`== ${name}: ${spells.join(', ')}`);
    });
}
enrolledHeroes((["Enroll Stefan",

    "Enroll Peter",

    "Enroll Stefan",

    "Learn Stefan ItShouldWork",

    "Learn John ItShouldNotWork",

    "Unlearn George Dispel",

    "Unlearn Stefan ItShouldWork",

    "End"]))

console.log('--------------')

enrolledHeroes((["Enroll Stefan",

    "Learn Stefan ItShouldWork",

    "Learn Stefan ItShouldWork",

    "Unlearn Stefan NotFound",

    "End"]))

console.log(' ---------------')

enrolledHeroes((["Enroll Stefan",

    "Enroll Peter",

    "Enroll John",

    "Learn Stefan Spell",

    "Learn Peter Dispel",

    "End"]))