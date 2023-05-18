const sumAll = function(x, y) {
    if (typeof(y) !== 'number' || typeof(x) !== 'number' || y < 0 || x < 0) {
        return "ERROR";
    }
    let sum = 0;
    if(x > y) {
        high = x;
        low = y;
    } else {
        high = y;
        low = x;
    }
    for(let i = low; i < high + 1; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
