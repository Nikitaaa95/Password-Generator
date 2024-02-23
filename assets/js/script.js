// Assignment Code
function generatePassword() {
    var length = parseInt(prompt("Enter the length of the password (8-128 characters):"));

    //Validation of at least 1 option
    if (isNaN(length) || length < 8 || length > 128) {
      alert("Please enter a valid number between 8 and 128.");
      return "";
    }
    var lowercaselimit = window.prompt("Can the password include lowercase letters? (Y or N)");
    lowercaselimit = lowercaselimit.toUpperCase();
    var uppercaselimit = window.prompt("Can the password include uppercase letters? (Y or N)");
    uppercaselimit = uppercaselimit.toUpperCase();
    var numberlimit = window.prompt("Can the password include numbers? (Y or N)");
    numberlimit = numberlimit.toUpperCase();
    var spclchrlimit = window.prompt("Can the password include special characters? (Y or N)");
    spclchrlimit = spclchrlimit.toUpperCase();

    if (!(includeLowercase || includeUppercase || includeNumbers || includeSpecial)) {
        alert("Please select at least one character type.");
        return "";
      }
    // Array of options for computer to pick from
    var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var numbercase = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var spclchr = ["!", "@", "#", "$", "%", "^", "&", "*"];

//include set of viable characters for password
var allChars = "";
    if (lowercaselimit) {
      allChars += lowercase;
    }
    if (uppercaselimit) {
      allChars += uppercase;
    }
    if (numberlimit) {
      allChars += numbercase;
    }
    if (spclchrlimit) {
      allChars += spclchr;
    }


//space to create password
var password = "";
    for (var i = 0; i < length; i++) {
      password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
  
    return password;
  }

generateBtn.addEventListener("click", writePassword);   

  
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  

