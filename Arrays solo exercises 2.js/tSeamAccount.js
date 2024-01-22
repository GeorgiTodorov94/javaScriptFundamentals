function account(array) {

    let peterAccount = array.slice(0, 1);
    let petersGames = String(peterAccount).split(' ');


    // console.log(petersGames)

    for (let i = 1; i < array.length; i++) {
        let command = String(array[i]).split(' ');
        let cmd = command[0]
        let game = command[1];

        if (cmd === "Play!") {
            break;
        }

        if (cmd === 'Install') {

            if (!petersGames.includes(game)) {
                petersGames.push(game)
            }


        } else if (cmd === 'Uninstall') {

            if (petersGames.includes(game)) {
                let gameIndex = petersGames.indexOf(game);
                petersGames.splice(gameIndex, 1);

            }
        } else if (cmd === 'Update') {

            if (petersGames.includes(game)) {
                gameIndex = petersGames.indexOf(game);
                petersGames.splice(gameIndex, 1);
                petersGames.push(game);
            }
        } else if (cmd === 'Expansion') {

            let gameExpansion = game.split('-');


            if (petersGames.includes(gameExpansion[0])) {

                let gameIndex = petersGames.indexOf(gameExpansion[0]);

                let gameExpansionOne = (`${gameExpansion[0]}:${gameExpansion[1]}`);
                petersGames.splice(1, gameIndex, gameExpansionOne);

            }
        }
    }

    console.log(petersGames.join(' '));
}


account(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'])








// let csGo = petersGames.splice(petersGames.length - 1, 1)
// let lol = petersGames.splice(1, 1);
// petersGames.splice();