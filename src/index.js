module.exports = function toReadable (number) {
    const numbers = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    const tenToNineteen = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const dozens = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    const numToStr = String(number);
    const length = numToStr.length;
    let result = '';

    if (length === 1) {
        return result = numbers[number];
    } else if (length === 2 && numToStr[0] === '1') {
        return result = tenToNineteen[numToStr[1]];
    } else if (length === 2 &&  numToStr[0] !== '1' && numToStr[1] === '0') {
        return result = dozens[numToStr[0] - 2];
    } else if (length === 2 &&  numToStr[0] !== '1' && numToStr[1] !== '0') {
        return result = `${dozens[numToStr[0] - 2]} ${numbers[numToStr[1]]}`;
    } else if (length === 3 && numToStr[1] === '0' && numToStr[2] === '0') {
        return result = `${numbers[numToStr[0]]} hundred` ;
    } else if (length === 3 && numToStr[1] === '0' && numToStr[2] !== '0') {
        return result = `${numbers[numToStr[0]]} hundred ${numbers[numToStr[2]]}`;
    } else if (length === 3 && numToStr[1] === '1') {
        return result = `${numbers[numToStr[0]]} hundred ${tenToNineteen[numToStr[2]]}`;
    } else if (length === 3 && numToStr[1] !== '1' && numToStr[2] === '0') {
        return result = `${numbers[numToStr[0]]} hundred ${dozens[numToStr[1] - 2]}`;
    } else if (length === 3 && numToStr[1] !== '1' && numToStr[2] !== '0') {
        return result = `${numbers[numToStr[0]]} hundred ${dozens[numToStr[1] - 2]} ${numbers[numToStr[2]]}`;
    }
}


