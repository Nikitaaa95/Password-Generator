var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = parseInt(prompt("Enter the length of the password (8-128 characters):"));

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid number between 8 and 128.");
    return "";
  }

  var includeLowercase = prompt("Can the password include lowercase letters? (Y or N)").toUpperCase();
  var includeUppercase = prompt("Can the password include uppercase letters? (Y or N)").toUpperCase();
  var includeNumbers = prompt("Can the password include numbers? (Y or N)").toUpperCase();
  var includeSpecial = prompt("Can the password include special characters? (Y or N)").toUpperCase();

  if (!(includeLowercase === 'Y' || includeUppercase === 'Y' || includeNumbers === 'Y' || includeSpecial === 'Y')) {
    alert("Please select at least one character type.");
    return "";
  }

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  var allChars = "";
  if (includeLowercase === 'Y') {
    allChars += lowercase;
  }
  if (includeUppercase === 'Y') {
    allChars += uppercase;
  }
  if (includeNumbers === 'Y') {
    allChars += numbers;
  }
  if (includeSpecial === 'Y') {
    allChars += specialChars;
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
