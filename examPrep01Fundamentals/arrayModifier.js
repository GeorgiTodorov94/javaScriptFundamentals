// function arrayModifier(array) {

//     let initialArrayValues = array.shift().split(" ").map(x => Number(x));


//     let index = 0;
//     let command = array[index];
//     index++;
//     let finalArray = [];

//     while (command !== 'end') {
//         let tokens = command.split(' ');
//         let elementOne = Number(tokens[1]);
//         let elementTwo = Number(tokens[2])


//         switch (tokens[0]) {
//             case 'swap':
//                 if (elementOne !== 0 && elementTwo !== 0) {
//                     let firstIndex = elementOne;
//                     let secondIndex = elementTwo;
//                     let firstIndexedSwap = Number(initialArrayValues.splice(firstIndex, 1));
//                     let secondIndexedSwap = Number(initialArrayValues.splice(secondIndex - 1, 1));
//                     initialArrayValues.splice(elementOne, 0, secondIndexedSwap)
//                     initialArrayValues.splice(secondIndex, 0, firstIndexedSwap)
                    

//                     // }
//                 } else {
//                     let firstIndex = elementOne;
//                     let secondIndex = elementTwo;
//                     firstIndexedSwap = Number(initialArrayValues.splice(firstIndex, 1));
//                     secondIndexedSwap = Number(initialArrayValues.splice(secondIndex + 1, 1))
//                     initialArrayValues.splice(elementOne, 0, secondIndexedSwap)
//                     initialArrayValues.splice(secondIndex, 0, firstIndexedSwap)
                    
//                 }
                

//                 break;
//             case 'multiply':

//                 let firstIndexMultiplied = Number(initialArrayValues[elementOne]) * Number(initialArrayValues[elementTwo]);
//                 initialArrayValues.splice(elementOne, 1);
//                 initialArrayValues.splice(elementOne, 0, firstIndexMultiplied)



//                 break;
//             case 'decrease':

//                 finalArray = initialArrayValues.map(x => x = Number(x - 1));


//                 break;
//         }

//         command = array[index];
//         index++;
//     }
//     console.log(finalArray.join(", "))

// }
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]);


//   elementOne.shift -> elementOne.push



//                 let firstIndex = initialArrayValues.splice(elementOne, 1);
//                 let secondIndex = initialArrayValues.splice(elementTwo - 1 , 1);
//                 initialArrayValues.splice(elementTwo - 1, 0, Number(firstIndex))
//                 initialArrayValues.splice(elementOne, 0, Number(secondIndex))
//                 console.log(initialArrayValues)

function arrayModifier(array) {
    let initialArrayValues = array.shift().split(" ").map(Number);
  
    let index = 0;
    let command = array[index];
    index++;
  
    while (command !== "end") {
      let tokens = command.split(" ");
      let elementOne = Number(tokens[1]);
      let elementTwo = Number(tokens[2]);
  
      switch (tokens[0]) {
        case "swap":
          let firstIndexedSwap = initialArrayValues[elementOne];
          let secondIndexedSwap = initialArrayValues[elementTwo];
          initialArrayValues[elementOne] = secondIndexedSwap;
          initialArrayValues[elementTwo] = firstIndexedSwap;
          break;
        case "multiply":
          initialArrayValues[elementOne] *= initialArrayValues[elementTwo];
          break;
        case "decrease":
          initialArrayValues = initialArrayValues.map((x) => x - 1);
          break;
      }
  
      command = array[index];
      index++;
    }
  
    console.log(initialArrayValues.join(", "));
  }