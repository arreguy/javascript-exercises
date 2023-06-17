const palindromes = function (string) {
    return string.toLowerCase().replace(/[^a-z]/g, "") === string.toLowerCase().replace(/[^a-z]/g, "").split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
