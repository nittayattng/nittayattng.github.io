let list = inputInteger();
displayStats(list);

function inputInteger() {
    let intInput = [];

    while (true) {
        let input = Number(prompt("Enter an integer (a negative integer to quit)"));

        if (Number.isInteger(input) && Math.sign(input) === -1) {
            return intInput
        };
        if (Number.isInteger(input) && Math.sign(input) === 1) {
            intInput.push(input);
        };
    };
};

function displayStats(input) {
    let minInput = Math.min(...input);
    let maxInput = Math.max(...input);
    let avgInput = average(input);

    let output = input.length > 0 ? `for the list ${input.join(',')}, the average is ${avgInput}, the minimum is ${minInput}, and the maximum is ${maxInput}`
        : `for the list that is empty, the average is 0, the minimum is 0, and the maximum is 0`;

    alert(output);
};

function average(inputArray) {
    let i = 0, sum = 0, len = inputArray.length;
    while (i < len) {
        sum = sum + inputArray[i++];
    }
    return (sum / len).toFixed(2);
};