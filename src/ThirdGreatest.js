var exports = module.exports = {}

exports.ThirdGreatest = function (strArr) {
    // Sort the array on length and return the third element
    var sorted = strArr.sort(function (a,b) {
        if(a.length == b.length) return 0;
        if(a.length > b.length) return -1;
        return 1;
    });
    return sorted[2];
}