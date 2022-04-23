
//generate button and event listener for when clicked//
var button = document.querySelector('#generate');
button.addEventListener('click', generatePassword);

// variables of characters
var specialCharCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_'];

var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// empty string to push user chosen traits into
var allUserInputs = [];

  // prompts to use or not use certain characters in password then generates password based on those choices
  function generatePassword() { 

  // asks user how long they want password
  var passwordLength = Number(prompt("How many characters would you like your password? Enter a number between 8 and 128."));

  // if user chooses valid length THEN goes to character type choices funtion
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength)
    // next function called

    // error message if length is not within acceptable range
  } else {
    window.alert("Please enter a length between 8 and 128.");

    var lowerCase = window.confirm("Would you like to use lowercase letters?");
    console.log(lowerCase)
    //if true the push it to empty password string
    var upperCase = window.confirm("Would you like to use uppercase letters?");
    console.log(upperCase)
    var numbers = window.confirm("Would you like to use numbers?");
    console.log(numbers)
    var specialCharacters = window.confirm("Would you like to use special characters?");
    console.log(specialCharacters)
    // next function called to generate password based on user choices
    generatePassword();

    // if none chosen error message occurs
    if (lowerCase != true && upperCase != true && numbers != true && specialCharacters != true) {
      window.alert("Please choose at least one character type to include!");
    }
    // key value pairs of user input choices turned into data 
    var completePasswordChoices = {
      length: passwordLength,
      lowerC: lowerCase,
      upperC: upperCase,
      numericNum: numbers,
      special: specialCharacters,
    };
  }
  // array of all user choices in data form
  var traits = completePasswordChoices;

  // empty array to push all chosen user inputs too
  var allUserInputs = []

  var password = []

  // if user chooses lowercase, then push whole list to empty array
  if (traits.lowerC === true) {
    console.log(lowerCaseCharacters)
    allUserInputs.push(...lowerCaseCharacters);
  }

  // if user chooses uppercase, then push whole list to empty array
  if (traits.upperC === true) {
    console.log(upperCaseCharacters)
    allUserInputs.push(...upperCaseCharacters);
  }

  // if user chooses numbers, then push whole list to empty array
  if (traits.numericNum === true) {
    console.log(numberCharacters)
    allUserInputs.push(...numberCharacters);
  }

  // if user chooses numbers, then push whole list to empty array
  if (traits.specialCharCharacters === true) {
    console.log(specialCharCharacters)
    allUserInputs.push(...specialCharCharacters);
  }
  randomCharacterChooser();
}

// function to randomly choose characters from allUserInputs string within established password length limit
function randomCharacterChooser() {
  var password = allUserInputs[Math.floor(Math.random() * allUserInputs.passwordLength)]
  for (let i = 0; i < traits.passwordLength; i++) {

  }


  // Write completed password to the #password input field
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}
