//getting the elements 
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');


// adding event listener
generate.addEventListener('click', () => {
	const length = +lengthEl.value;
	//checking the values of boxes i.e true or false
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;

	//saving  categoties as a string
	const lower = 'abcdefghijklmnopqrstuvwxyz';
	const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const numbers = '0123456789';
	const symbols = '!@#$%^&*(){}[]=<>/,.';

	// generate a string based on checkbox value
	let generatedPassword = '';
	if (hasLower == true) {
		generatedPassword += lower;
	}
	if (hasUpper == true) {
		generatedPassword += upper;
	}
	if (hasNumber == true) {
		generatedPassword += numbers;
	}
	if (hasSymbol == true) {
		generatedPassword += symbols;
	}

	// Doesn't have a selected type
	if (generatedPassword === '') {
		//Alert
		alert('Please select atleast one checkbox');
		return '';
	}

	//for loop for password generation
	let FinalPassword = ''
	for (let index = 0; index < length; index++) {
		FinalPassword += generatedPassword.charAt(Math.floor(Math.random() * generatedPassword.length));
	}
	//Show the final password on the screen
	resultEl.innerText = FinalPassword;

});


//adding an event listener to clipboard
clipboard.addEventListener('click', () => {
	//creating a new element
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;

	//if nothing
	if (!password) { return; }

	textarea.value = password;

	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	//Alert 
	alert('Password copied to clipboard');
});