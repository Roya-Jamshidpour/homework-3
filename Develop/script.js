
//generate button and event listener for when clicked//
let button = document.getElementById("#generate") .addEventListener("click" , generatePassword);

// user inputs
let yes = "Yes"
let no = "No"

// variables in characters
var specialCharacters =[
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
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCase = [
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
var upperCase = [
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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// choose if you would like to include lowercase letters?

function generatePassword(length, passwordLowercase, passwordUppercase, passwordNumbers, passwordSpecialCharacters){
  // window prompt for yes or no
  window.prompt("Would you like lowercase letters? Type \"Yes\" or \"No\"")
  
  // pick if user wants lowercase //

  // function to choose random lowercase letter
function randomLowercase(){
  let index = Math.floor(Math.random() * "lowerCase");
   return arr[index];
}
  function passwordLowercase() {
    if (userInput === 'Yes') {
    return console.log(randomLowercase); // if true, moves to next prompt
  }
}
// choose if you would like to include uppercase letters?

// choose if you would like to include numbers?

// choose if you would like to use special characters?
function random_item()
{
  
return items[Math.floor(Math.random()*items.length)];
     
}
// choose amount of characters to use in password"
function generatePassword(length, passwordLowercase, passwordUppercase, passwordNumbers, passwordSpecialCharacters){

  // window prompt for character length
  window.prompt("How long would you like your password? Choose between 8 and 128 characters")
    function passwordLength() {
      if (length < 8 || length > 128) 
        return userInput; // if true, displays users input
       else {
        return 'Error!' //Displays error message if user inputs anything other than the three parameters listed above
      
      }
    }
      while (length < 8 || length > 128) {
      window.prompt("Please choose betwen 8-128 characters");


   }

  
    
    



  
