const palindromes = function (strings) {

 const alphaNumbers = "abcdefghijklmnopqrstuvwxyz0123456789";

 const cleaned = strings
    .toLowerCase()
    .split('')
    .filter((character) => alphaNumbers.includes(character))
    .join('');

    const reversed = cleaned.split('').reverse().join('');

    return cleaned === reversed ;

};

// Do not edit below this line
module.exports = palindromes;
