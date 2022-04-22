
//generate button and event listener for when clicked//
var button = document.querySelector('#generate');
button.addEventListener('click', passwordTraits);

// variables of characters
var specialCharCharacters = [ '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_'];

var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCaseCharacters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// user chooses password length and next parameters 
function passwordTraits() {
  // asks user how long they want password
  var passwordLength = Number(prompt("How many characters would you like your password? Enter a number between 8 and 128."));
  
  // if user chooses valid length THEN goes to character type choices funtion
  if (passwordLength >= 8 && passwordLength <= 128)  {
      userChoices();
      console.log(passwordLength)
   } else {
      window.alert("Please enter a length between 8 and 128.");
      
 }

  // prompts to use or not use certain characters in password
function userChoices() {
  var lowerCase = window.confirm("Would you like to use lowercase letters?");
  //if true the push it to empty password string
  var upperCase = window.confirm("Would you like to use uppercase letters?");
  var numbers = window.confirm("Would you like to use numbers?");
  var specialCharacters = window.confirm("Would you like to use special characters?");

  // if none chosen error message occurs
  if (lowerCase !=true && upperCase !=true && numbers !=true && specialCharacters !=true) {
    window.alert("Please choose at least one character type to include!");
    return userChoices();
  }

  // key value pairs of input turned into data 
var completePassword = {
    length: passwordLength, 
    lowerC: lowerCase, 
    upperC: upperCase, 
    numericNum: numbers, 
    special: specialCharacters,
};

return completePassword;
};
} 
function randomCharacterChooser(array) {
 let index = upperCaseCharacters[Math.floor(Math.random() * upperCaseCharacters.length)]  


}
 

// function to combine user choices into creating a password
function generatePassword() {

  var traits = userChoices();
  // final empty string of the combines chosen traits at proper chosen length
  var password = [];
  // empty string to push user chosen traits into
  var allUserInputs = [];

  // if user chooses lowercase, then push whole list to 
  if (traits.lowerC === true) {
    console.log(lowerCaseCharacters)
    allUserInputs.push(...lowerCaseCharacters)
  }

// if user chooses uppercase, then push whole list to 
if (traits.upperC === true) {
  console.log(upperCaseCharacters)
  allUserInputs.push(...upperCaseCharacters)
}

// if user chooses numbers, then push whole list to 
if (traits.numericNum === true) {
  console.log(numberCharacters)
  allUserInputs.push(...numberCharacters)
}

// if user chooses numbers, then push whole list to 
if (traits.specialCharCharacters === true) {
  console.log(specialCharCharacters)
  allUserInputs.push(...specialCharCharacters)
}


// Write completed password to the #password input field
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
