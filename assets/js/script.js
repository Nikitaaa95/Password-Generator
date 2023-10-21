// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Generate pop-ups showing up for the following
///Length of characters
////Between 8 and 128
///Inclusion of lowercase
///Inclusion of uppercase
///Inclusion of numbers
///Inclusion of special characters
//Validate that at least one selection has been chosen
//Generate password based on provided characteristics
///List specific number of characters
////For each character, cycle through the available options.

