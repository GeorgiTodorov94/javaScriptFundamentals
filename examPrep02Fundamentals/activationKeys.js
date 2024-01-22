function keys(input) {

    let rawActivationKey = input.shift();

    for (const line of input) {
        let tokens = line.split('>>>');
        let command = tokens[0];
        let startIndex = 0;
        let endIndex = 0



        switch (command) {

            case 'Slice':

                startIndex = Number(tokens[1])
                endIndex = Number(tokens[2]);
                let slicedString = rawActivationKey.substring(startIndex, endIndex)
                rawActivationKey = rawActivationKey.replace(slicedString, '')
                console.log(rawActivationKey)
                break;
            case "Contains":
                let substring = tokens[1];
                if (rawActivationKey.includes(substring)) {
                    console.log(`${rawActivationKey} contains ${substring}.`)
                } else {
                    console.log("Substring not found!")
                }
                break;
            case 'Flip':
                let lowerOrUpper = tokens[1];


                switch (lowerOrUpper) {
                    case 'Upper':
                        startIndex = Number(tokens[2]);
                        endIndex = Number(tokens[3]);
                        let upperString = rawActivationKey.substring(startIndex, endIndex).toUpperCase()
                        
                        let givenString = rawActivationKey.substring(startIndex, endIndex)

                        rawActivationKey = rawActivationKey.replace(givenString, upperString)
                        console.log(rawActivationKey)
                        break;

                    case 'Lower':
                        startIndex = Number(tokens[2]);
                        endIndex = Number(tokens[3]);
                        let lowerString = rawActivationKey.substring(startIndex, endIndex).toLowerCase();
                        let currentString = rawActivationKey.substring(startIndex, endIndex);
                        rawActivationKey = rawActivationKey.replace(currentString, lowerString);
                        console.log(rawActivationKey)
                        break;
                }



        }
        if (command === 'Generate') {
            console.log(`Your activation key is: ${rawActivationKey}`)
            break;
        }
    }

}  //  134sf5ftuni2020rockz42
keys(['134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate']);

    
