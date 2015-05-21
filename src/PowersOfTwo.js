var exports = module.exports = {};

exports.PowersOfTwo = function (num) {
    if(num == 1) return true;
    // If the number is odd it's not -- might be superflous
    return (num % 2 === 0) ? this.PowersOfTwo(num / 2) : false;
};