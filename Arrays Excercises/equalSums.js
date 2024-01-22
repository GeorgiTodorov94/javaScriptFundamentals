function equalSums(arr) {

    let leftSum = 0;
    let rightSum = 0;
    let isEqual = false;
    let arrLength = arr.length;

    for (let currentIndex = 0; currentIndex < arrLength; currentIndex++) {
        for (let i = 0; i < arrLength; i++) {

            if (i !== currentIndex) {
                let num = Number(arr[i]);

                if (i < currentIndex) {
                    leftSum += num;

                } else if (i > currentIndex) {
                    rightSum += num;
                }
            }
            if (currentIndex === 0) {
                leftSum = 0;

            } else if (currentIndex === arrLength - 1) {
                rightSum = 0;
            }
        }
        if (leftSum === rightSum) {
            console.log(currentIndex)
            isEqual = true;

        } else {
            leftSum = 0;
            rightSum = 0;
        }

    }
    if (!isEqual) {
        console.log('no');
    }

}
equalSums([1, 2, 3, 3, 1, 1])