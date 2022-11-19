export const positiveElements = (arr) => {
    let arrPositive = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arrPositive.push(arr[i]);
        }
    }
    return arrPositive;
};