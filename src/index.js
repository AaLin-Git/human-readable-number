module.exports = function toReadable (number) {
    const numbers = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    const tenToNineteen = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const dozens = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    const numToStr = String(n);
    const length = numToStr.length;
    let result = '';

    if (length === 1) {
        return result = numbers[n];
    }
}

