// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var numberInput = {

    passLength: prompt("Input a number between 8 and 128."),

    confirmNumber: function () {
      if (isNaN(this.passLength)) {
        alert("Input a Number, only.");
      }
      else if (this.passLength.length == 0) {
        alert("Please input a Number");
      }
      else if (this.passLength > 128 || this.passLength < 8) {
        alert("Input a number between 8 and 128.");
      }
      else if ((parseInt(this.passLength) - this.passLength) != 0) {
        alert("Input a whole number.");

      }
      else {
        var goodNumber = true;
      }

      if (!goodNumber) {
        this.passLength = prompt("Input a number between 8 and 128.");
        this.confirmNumber();
      }
    }
  }

  numberInput.confirmNumber();


  var charChoice = {
    lower: (window.confirm("Do you want to include lowercase characters?")),
    upper: (window.confirm("Do you want to include UPPERCASE characters?")),
    numeric: (window.confirm("Do you want to include numeric characters?")),
    special: (window.confirm("Do you want to include special characters?")),
  }

  var password = "";
  var characterArray = [];

  function lowChoice() {
    if (charChoice.lower) {
      characterArray.unshift("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
    }
    else
      characterArray
  }
  function uppChoice() {
    if (charChoice.upper) {
      characterArray.unshift("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    }
    else
      characterArray
  }
  function numChoice() {
    if (charChoice.numeric) {
      characterArray.unshift(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
    }
    else
      characterArray
  }
  function specChoice() {
    if (charChoice.special) {
      characterArray.unshift("!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~");
    }
    else
      characterArray
  }

  lowChoice()
  uppChoice()
  numChoice()
  specChoice()



  for (var i = 0; i < numberInput.passLength; i++) {
    var arrayNumber = (Math.floor(Math.random() * characterArray.length));
    password += characterArray[arrayNumber];
  }

  return "Your secure password is:\r\r" + password;


}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

