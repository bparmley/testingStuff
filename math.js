exports.adder = function () {
    var sum = 0;

    for (var i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    };

    return sum;
}

exports.multiplyer = function () {

}
