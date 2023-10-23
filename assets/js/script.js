// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Notes from Course - Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

//User Prompts HAVE TRIGGERED BY BUTTON LATER

//Button trigger
generateBtn.addEventListener('click', function() {
    var characterlimit = window.prompt("How many characters do you need?");

    //Character Limit Prompt Actions
if (characterlimit < 8 ) {
    window.alert("Please choose a number between 8 and 128");
    return;}
else if (characterlimit > 128) {
    window.alert("Please choose a number between 8 and 128");
    return;}
else {
    var lowercaselimit = window.prompt("Can the password include lowercase letters? (Y or N)");
    lowercaselimit = lowercaselimit.toUpperCase();
    var uppercaselimit = window.prompt("Can the password include uppercase letters? (Y or N)");
    uppercaselimit = uppercaselimit.toUpperCase();
    var numberlimit = window.prompt("Can the password include numbers? (Y or N)");
    numberlimit = numberlimit.toUpperCase();
    var spclchrlimit = window.prompt("Can the password include special characters? (Y or N)");
    spclchrlimit = spclchrlimit.toUpperCase();}

//Pulling Random value
// var index = Math.floor(Math.random() * characterlimit.length);
// var pswdchr = characterlimit[index];
// console.log(pswdchr)

    // Array of options for computer to pick from
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var spclchr = ["!", "@", "#", "$", "%", "^", "&", "*"];


//Validation of at least 1 option
if (lowercaselimit != "Y" && uppercaselimit != "Y" && numberlimit != "Y" && spclchrlimit != "Y") {
    window.alert("At least one character type must be selected. Please try again.");
    return;
}
if (lowercaselimit == "Y"){  
    // Get random index from array of options
  var indexl = Math.floor(Math.random() * lowercase.length);
  var lcpassword = lowercase[indexl]
  
}
if (uppercaselimit == "Y") {
  var indexu = Math.floor(Math.random() * uppercase.length);
  var ucpassword = uppercase[indexu]
}
if (numberlimit == "Y") {
    var indexn = Math.floor(Math.random() * numbers.length);
    var npassword = numbers(indexn)
}
if (spclchrlimit == "Y") {
    var indexs = Math.floor(Math.random() * spclchr.length);
    var spassword = spclchr(indexs)
}
console.log(lcpassword)
console.log(ucpassword)
console.log(npassword)
console.log(spassword)
})