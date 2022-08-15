function prepend(numSpaces: number, inputString: string) {
	// your code here
	for (let i = 0; i < numSpaces; i++) {
		inputString = ' ' + inputString;
	}
	return console.log(inputString);
}
