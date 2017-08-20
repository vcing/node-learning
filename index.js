exports.a = 2;

exports.testFunc = function() {
    return 233;
}

module.exports.testB = 233;

module.exports.testC = 2333;

module.exports.testFuncB = () => {
    return module.exports.testB;
}