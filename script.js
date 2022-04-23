
//generate button and event listener for when clicked//
var button = document.querySelector('#generate');
button.addEventListener('click', writePassword);

// variables of characters
var specialCharCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_'];

var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// prompts to use or not use certain characters in password then generates password based on those choices
function generatePassword() {

  // asks user how long they want password
  var passwordLength = Number(prompt("How many characters would you like your password? Enter a number between 8 and 128."));


  console.log(passwordLength)

  var lowerCase = window.confirm("Would you like to use lowercase letters?");
  console.log(lowerCase)
  // if true the push it to empty password string
  var upperCase = window.confirm("Would you like to use uppercase letters?");
  console.log(upperCase)
  var numbers = window.confirm("Would you like to use numbers?");
  console.log(numbers)
  var specialCharacters = window.confirm("Would you like to use special characters?");
  console.log(specialCharacters)

  var allUserInputs = []
  // empty array for final user inputs at desired length to be pushed to
  var password = []

  // if user chooses lowercase, then push whole list to empty array
  if (lowerCase === true) {
      console.log(lowerCaseCharacters)
      allUserInputs.push(... lowerCaseCharacters);
  }

  // if user chooses uppercase, then push whole list to empty array
  if (upperCase === true) {
      console.log(upperCaseCharacters)
      allUserInputs.push(... upperCaseCharacters);
  }

  // if user chooses numbers, then push whole list to empty array
  if (numbers === true) {
      console.log(numberCharacters)
      allUserInputs.push(... numberCharacters);
  }

  // if user chooses numbers, then push whole list to empty array
  if (specialCharacters === true) {
      console.log(specialCharCharacters)
      allUserInputs.push(... specialCharCharacters);
  }

  console.log(allUserInputs)

  var password = allUserInputs[Math.floor(Math.random() * allUserInputs.passwordLength)]
  for (let i = 0; i < passwordLength; i++) {
    writePassword()
  }
  
  // Write completed password to the #password input field
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
  }
