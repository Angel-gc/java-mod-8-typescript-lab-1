function prepend(numSpaces: number | string, inputString: string) {
	// your code here
	for (let i = 0; i < numSpaces; i++) {
		inputString = ' ' + inputString;
	}
	return inputString;
}

console.log(prepend(5, 'hi'));

const button = document.querySelector("button") as HTMLButtonElement;
const input1 = document.getElementById("firstNumber") as HTMLInputElement;
const input2 = document.getElementById("firstString") as HTMLInputElement;

button!.addEventListener("click", function () {
  console.log(prepend(input1!.value, input2!.value));
});


// function add(firstNumber: any, secondNumber: any) {
//   return firstNumber + secondNumber;
// }
// console.log(add(10, 20));