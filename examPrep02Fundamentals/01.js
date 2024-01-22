function string(data) {

    let text = data.shift();

    for (let line of data) {

        if (line === 'Decode') {
            break;
        }
        let token = line.split('|');
        let action = token[0];

        switch (action) {
            case 'Move':
                let n = Number(token[1]);
                
                for (let i = 0; i < n; i++) {
                    let firstLetter = text.substring(0, 1);
                    let anotherText = text.substring(1);
                    text = anotherText + firstLetter;
                }
                break;
            case 'Insert':
                let index = Number(token[1]);
                let value = token[2];

                text = text.substring(0, index) + value + text.substring(index)

                break;
            case 'ChangeAll':
                let substring = token[1];
                let replacement = token[2];
                while (text.includes(substring)) {
                    text = text.replace(substring, replacement);
                }
                break;
        }
    }
    console.log(text)
}
string([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
])