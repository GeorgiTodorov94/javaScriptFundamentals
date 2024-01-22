function inventory(input) {

    let result = [];

    for (const line of input) {

        let [name, level, items] = line.split(' / ');

        let hero = {
            name: name,
            level: Number(level),
            items: items
        }
        result.push(hero)
    }
    result.sort((a, b) => a.level - b.level);

    for (const element of result) {
        console.log(element.name);
        console.log(`He's -> ${element.level}`);
        console.log(element.items);

    }

}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)