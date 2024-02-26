function generateRandomNumber(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generateRandomNumber(1, 10));

// Exporting your reusable methods
module.exports.generateRandomNumber = generateRandomNumber;