var exports = module.exports = {};

exports.MultiplicativePersistence = function (num) {
    // recursively
    // convert num to string
    var str = num.toString();
    if(str.length == 1) { return 0};
    // convert back to a num
    var total = str.split('').reduce(function (a,b) { return Number(a) * Number(b)});
    // add them all up
    // if length not == 1 add to recursive call.
    return 1 + this.MultiplicativePersistence(total);
}