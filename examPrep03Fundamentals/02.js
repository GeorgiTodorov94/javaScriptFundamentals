function astral(data){

    let text = data[0];
    let pattern = /([#]|[|])(?<item>[A-Za-z\s+])\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]{1,5})\1,/g;

    let match = pattern.exec(text);

    while(match){

        match = pattern.exec(text);
        
    }


}
astral(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);