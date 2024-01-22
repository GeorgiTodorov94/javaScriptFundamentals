// function decryptThisMessageForSoftUni(input) {
//     const regex = /^([$%])([A-Z][a-z]{2,})\1: \[(\d+)\]\|\[(\d+)\]\|\[(\d+)\]\|$/;

//     for (const message of input) {
//         const match = message.match(regex);

//         if (match) {
//             const [, , tag, num1, num2, num3] = match;
//             const decryptedMessage = String.fromCharCode(num1, num2, num3);
//             console.log(`${tag}: ${decryptedMessage}`);
//         } else {
//             console.log("Valid message not found!");
//         }
//     }
// }


function decryptThisMessageForSoftUni(input) {
    function decryptMessage(nums) {
        return nums
            .split("|")
            .map(num => String.fromCharCode(Number(num)))
            .join("");
    }

    const n = Number(input[0]);
    for (let i = 1; i <= n; i++) {
        const message = input[i];
        const regex = /^([$%])([A-Z][a-z]{2,})\1: \[(\d+)\]\|\[(\d+)\]\|\[(\d+)\]\|$/;
        const match = message.match(regex);

        if (match) {
            const [, , tag, num1, num2, num3] = match;
            const decryptedMessage = decryptMessage(`${num1}|${num2}|${num3}`);
            console.log(`${tag}: ${decryptedMessage}`);
        } else {
            console.log("Valid message not found!");
        }
    }
}
decryptThisMessageForSoftUni(["4",
    "$Request$: [73]|[115]|[105]|",
    "%Taggy$: [73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|"])