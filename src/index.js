function prepend(numSpaces, inputString) {
    // your code here
    for (var i = 0; i < numSpaces; i++) {
        inputString = ' ' + inputString;
    }
    return inputString;
}
console.log(prepend(5, 'hi'));
