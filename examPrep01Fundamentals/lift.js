function findPlaceForTourist(input) {
  let people = parseInt(input[0]);
  let currentState = input[1].split(" ").map(Number);

  let lift = currentState.slice();
  let availableSpots = lift.reduce((total, spots) => total + (4 - spots), 0);

  for (let i = 0; i < lift.length; i++) {
    while (lift[i] < 4 && people > 0) {
      lift[i]++;
      people--;
      availableSpots--;
    }
  }

  if (people === 0 && availableSpots > 0) {
    console.log(`The lift has empty spots!\n${lift.join(" ")}`);
  } else if (people > 0 && availableSpots === 0) {
    console.log(
      `There isn't enough space! ${people} people in a queue!\n${lift.join(
        " "
      )}`
    );
  } else {
    console.log(lift.join(" "));
  }
}




findPlaceForTourist(['20', "0 2 0"]);
