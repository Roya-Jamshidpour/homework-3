
//generate button and event listener for when clicked//
var button = document.querySelector('#generate');
button.addEventListener('click', passwordLength);

// empty array to hold results of various user input functions
var password = []


// variables in characters
var specialCharacters = [ '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_'];

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var variablesAll = ['@', '%', '+', '\\', '/', "'", '!', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Write password to the #password input field
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// user chooses password length
function passwordLength() {
  // asks user how long they want password
  var length = Number(prompt("How many characters would you like your password? Enter a number between 8 and 128."));
   
  if (length >= 8 && length <= 128)  {
    return;
 } else {
      window.alert("Please enter a length between 8 and 128.");
      return;
  }

  // strings for user 
 }
  var lowerCase = window.confirm("Would you like to use lowercase letters?");
  var upperCase = window.confirm("Would you like to use uppercase letters?");
  var numbers = window.confirm("Would you like to use numbers?");
  var specialCharacters = window.confirm("Would you like to use special characters?");

  if 
}


// user chooses if they want uppercase letters 


