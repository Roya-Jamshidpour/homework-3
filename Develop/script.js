
//generate button and event listener for when clicked//
let button = document.getElementById("#generate") .addEventListener("click" , generatePassword);


// variables in characters
var specialCharacters = [
  '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_'];


  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var variablesAll = 
var variablesNoLowercase = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ~!@-#$"
var variablesNoUppercase = "0123456789abcdefghijklmnopqrstuvwxyz~!@-#$"
var variablesNoNumbers = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$"
var variablesNoSpecialCharacters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function generatePassword(length, lowercase, uppercase, numbers, specialCharacters){
  
  // array for lowercase lowercase //
  const randomLowerCase = lowerCase[Math.floor(Math.random() * lowerCase.length)]
  
  
  // choose if you would like to include lowercase letters?
   // window prompt for yes or no
  window.prompt("Would you like lowercase letters? Type \"Yes\" or \"No\"")
  // function to choose random lowercase letter
function passwordLowercase(){
  if(userInput === "Yes"); 
   return randomLowerCase; 
  }  else {
   return(???????)
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
      } else {
        return
      
      }
    }
      while (length < 8 || length > 128) {
      window.prompt("Please choose betwen 8-128 characters");


   }

  
    
    



  
