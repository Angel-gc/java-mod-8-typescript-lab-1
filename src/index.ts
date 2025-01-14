// Rewrite your prepend HTML application to make it use arrays instead of 2 values and make the function use generics, so that it can handle both strings and numbers.

// In order to allow any value to be entered in your input fields, remove the type attribute from the input tag.

// Note: this could be done by using a union type instead of using generics, but the point of the exercise is to practice using arrays and using generics.

function prepend<T>(strNum: T[]) {
	return " ".repeat(Number(strNum[0])) + strNum[1];
}

const button = document.querySelector("button") as HTMLButtonElement;
const input1 = document.getElementById("firstArray") as HTMLInputElement;
const input2 = document.getElementById("secondArray") as HTMLInputElement;

button!.addEventListener("click", function () {
  console.log(prepend([input1!.value, input2!.value]));
});

