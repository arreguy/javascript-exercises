const fibonacci = function(x) {
    if (x < 0) return "OOPS"
    if (x == 0) return 0;
    let fibonacci_array = [1, 1]
    for(let i = 2; i < x; i++) {
        fibonacci_array.push(fibonacci_array[i - 1] + fibonacci_array[i - 2]);
    }
    return fibonacci_array[x - 1];
};

// Do not edit below this line
module.exports = fibonacci;
