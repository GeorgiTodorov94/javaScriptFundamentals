function examPrep2(str) {

    // let regex = /[\/=](?<destination>[A-Z][a-z]+)[=\/]/
    let regex = /[\/=][A-Z][a-z]{2,}[\/=]/gm;

    let points = 0;
    let destination = [];;
    let foundElements = str.match(regex);

    if (foundElements) {
        foundElements.forEach((element, index) => {
            if (element[0] === element[element.length - 1]){
                console.log(element);
                element = element.substring(1, element.length - 1);
                destination.push(element)
                points += element.length;
            }
        });
    }
    console.log(`Desitnations: ${destination.join(', ')}`)
    console.log(`${points}`)
}
examPrep2(("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="))