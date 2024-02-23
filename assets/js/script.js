// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate password
function generatePassword() {
  // Array of options for computer to pick from
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numbercase = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var spclchr = ["!", "@", "#", "$", "%", "^", "&", "*"];

  // User input for character types
  var lowercaselimit = window.prompt("Can the password include lowercase letters? (Y or N)");
  lowercaselimit = lowercaselimit.toUpperCase();
  var uppercaselimit = window.prompt("Can the password include uppercase letters? (Y or N)");
  uppercaselimit = uppercaselimit.toUpperCase();
  var numberlimit = window.prompt("Can the password include numbers? (Y or N)");
  numberlimit = numberlimit.toUpperCase();
  var spclchrlimit = window.prompt("Can the password include special characters? (Y or N)");
  spclchrlimit = spclchrlimit.toUpperCase();

  // Include set of viable characters for password
  var allChars = "";
  if (lowercaselimit === "Y") {
    allChars += lowercase.join('');
  }
  if (uppercaselimit === "Y") {
    allChars += uppercase.join('');
  }
  if (numberlimit === "Y") {
    allChars += numbercase.join('');
  }
  if (spclchrlimit === "Y") {
    allChars += spclchr.join('');
  }

  // Validation of at least 1 option
  if (allChars === "") {
    window.alert("At least one character type must be selected. Please try again.");
    return "";
  }

  // Character limit prompt
  var characterlimit = parseInt(window.prompt("How many characters do you need?"));
  if (characterlimit < 8 || characterlimit > 128) {
    window.alert("Please choose a number between 8 and 128");
    return "";
  }

  // Generate password
  var password = "";
  for (var i = 0; i < characterlimit; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  return password;
}

// Button trigger
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
