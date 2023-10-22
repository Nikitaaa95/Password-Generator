// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// Array of options for computer to pick from
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialcharacters = ["!", "@", "#", "$", "%", "^", "&", "*"]

//User Prompts HAVE TRIGGERED BY BUTTON LATER

//Button trigger
generateBtn.addEventListener('click', function() {
    var characterlimit = window.prompt("How many characters do you need?");
    //Character Limit Prompt Actions
if (characterlimit < 8 ) {
    window.alert("Please choose a number between 8 and 128");
    return;
}
else if (characterlimit > 128) {
    window.alert("Please choose a number between 8 and 128");
    return;
}
else {
    var lowercaselimit = window.prompt("Can the password include lowercase letters? (Y or N)");
    lowercaselimit  = lowercaselimit.toUpperCase();
var uppercaselimit = window.prompt("Can the password include uppercase letters? (Y or N)");
uppercaselimit = uppercaselimit.toUpperCase();
var numberlimit = window.prompt("Can the password include numbers? (Y or N)");
numberlimit = numberlimit.toUpperCase();
var spclchrlimit = window.prompt("Can the password include special characters? (Y or N)");
spclchrlimit = spclchrlimit.toUpperCase();

//Validation of at least 1 option
if (lowercaselimit != "Y" && uppercaselimit != "Y" && numberlimit != "Y" && spclchrlimit != "Y") {
    window.alert ("At least one character type must be selected. Please try again.");
    return;
}
else { 
window.alert ("working")
}}
});



//Validate that at least one selection has been chosen
//Generate password based on provided characteristics
///List specific number of characters
////For each character, cycle through the available options.
/////List options

