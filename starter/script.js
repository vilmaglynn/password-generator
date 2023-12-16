// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  let passwordLength = "";

  do {
    passwordLength = prompt("Enter the desired length of the password. Password MUST be at least 8 characters but no more than 128.");
  
    // Check if the input is empty
    if (passwordLength === "" || passwordLength === null) {
      alert("Password length cannot be empty. Please enter a valid length.");
    }
  
    // Check if the input is not a number or if it's outside the range
  } while (isNaN(passwordLength) || parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128 || passwordLength === "" || passwordLength === null);
  
  
let includeLowercase, includeUppercase, includeNumbers, includeSpecialChars;

//===============================
do {
  includeLowercase = confirm("Include lowercase letters?");
  includeUppercase = confirm("Include uppercase letters?");
  includeNumbers = confirm("Include numbers?");
  includeSpecialChars = confirm("Include special characters?");

  if (!(includeLowercase || includeUppercase || includeNumbers || includeSpecialChars)) {
    alert("Please select at least one option.");
  }
} while (!(includeLowercase || includeUppercase || includeNumbers || includeSpecialChars));
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomItem = arr[Math.floor(Math.random()*arr.length)];
}

// Function to generate password with user input
function generatePassword() {

  
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


getPasswordOptions() 
getRandom(arr)
