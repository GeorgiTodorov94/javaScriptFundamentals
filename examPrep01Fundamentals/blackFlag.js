// Calculate how much plunder the pirates manage to gather. Each day they gather the plunder. 
// Keep in mind that they attack more ships every third day and add additional plunder to their total gain, 
// which is 50% of the daily plunder. Every fifth day the pirates encounter a warship, and after the battle, they lose 30% of their total plunder.
// If the gained plunder is more or equal to the target, print the following:


function plunder(array) {

    let days = Number(array[0]);
    let dailyPlunder = Number(array[1]);
    let expectedPlunder = Number(array[2]);
    let plunderGathered = 0;


    for (let i = 1; i <= days; i++) {
        let currentDay = i;
        plunderGathered += dailyPlunder;

        if (currentDay % 3 === 0) {
            plunderGathered = plunderGathered + (0.5 * dailyPlunder);
        }
        if (currentDay % 5 === 0) {
            plunderGathered = plunderGathered - (0.3 * plunderGathered);
        }

    }
    if (plunderGathered >= expectedPlunder) {
        console.log(`Ahoy! ${plunderGathered.toFixed(2)} plunder gained.`)
    } else {
        let percentageLeft = (plunderGathered / expectedPlunder) * 100;
        console.log(`Collected only ${percentageLeft.toFixed(2)}% of the plunder.`)
    }


}
plunder((["10",
"20",
"380"]))