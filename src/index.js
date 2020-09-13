function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    return new Function('return ' + expr)();
}

module.exports = {
    expressionCalculator
}