//generate button and event listener for when clicked//
var button = document.querySelector('#generate');
button.addEventListener('click', writePassword);

// global variables of characters
var specialCharCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_'];
var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// empty string for user inputs at chosen length to be pushed into 
var password = []
var password = ''

// prompts to use or not use certain characters in password then generates password based on those choices
function generatePassword() {
  // asks user how long they want password
  var passwordLength = Number(prompt("How many characters would you like your password? Enter a number between 8 and 128."));

  while (passwordLength < 8 || passwordLength > 128) {
    alert("Only numbers between 8-128 please");
     return passwordLength;
  }

  console.log(passwordLength)
  // prompts for user to choose desired character types for password
  var lowerCase = window.confirm("Would you like to use lowercase letters?");
  console.log(lowerCase)
  // if true the push it to empty password string
  var upperCase = window.confirm("Would you like to use uppercase letters?");
  console.log(upperCase)
  var numbers = window.confirm("Would you like to use numbers?");
  console.log(numbers)
  var specialCharacters = window.confirm("Would you like to use special characters?");
  console.log(specialCharacters)
  // empty array for final all user inputs at desired length to be pushed to
  var userInputs = []
  // if user chooses lowercase, then push whole list to empty array
  if (lowerCase === true) {
    userInputs.push(...lowerCaseCharacters);
  }
  // if user chooses uppercase, then push whole list to empty array
  if (upperCase === true) {
    userInputs.push(...upperCaseCharacters);
  }
  // if user chooses numbers, then push whole list to empty array
  if (numbers === true) {
    userInputs.push(...numberCharacters);
  }
  // if user chooses numbers, then push whole list to empty array
  if (specialCharacters === true) {
    userInputs.push(...specialCharCharacters);
  }
  // password characters randomly chosen from string and put together at desired length
  for (let i = 0; i < passwordLength; i++) {
  password += userInputs[Math.floor(Math.random() * userInputs.length)];

  }
  // displays password in alert window
  console.log(password)
  alert("Here is your new password:  " + password)
    return password;
  
}
    // I could not get this function to display the text in the html field
    // Write completed password to the #password input field
    function writePassword() {
    password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    passwordText.textContent = password;
    
  }





  

