// Pesho is a pro gladiator, he is struggling to become master of the Arena. 
// You will receive several input lines in one of the following formats:
// "{gladiator} -> {technique} -> {skill}"
// "{gladiator} vs {gladiator}"
// The gladiator and technique are strings, the given skill will be an integer number. You need to keep track of 
// every gladiator. 
// When you receive a gladiator and his technique and skill, add him to the gladiator pool, if he isn't present, else add 
// his technique or update his skill, only if the current technical skill is lower than the new value.
// If you receive "{gladiator} vs {gladiator}" and both gladiators exist in the tier, they duel with the following rules:
// Compare their techniques, if they got at least one in common, the gladiator with better total skill points wins and 
// the other is demoted from the tier -> remove him.
// If they don't have techniques in common, the duel isn't happening and both continue in the Season.
// You should end your program when you receive the command "Ave Cesar". At that point, you should print the 
// gladiators, ordered by total skill in descending order, then ordered by name in ascending order. Foreach gladiator 
// prints their technique and skill ordered descending, then ordered by technique name in ascending order.

function gladiator(data) {

    let myObject = {}

    for (const line of data) {
        let [gladiator, command, skill] = data.split(' -> ');

        while (line !== 'Ave Cesar'){
            myObject = {
                gladiator,
                command,
                skill
            }
            if(myObject[gladiator]){
                
            }
        }
    }

}
gladiator([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]
)