// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

//Function used to determine the length of the password
function determineLength(){
  passwordLength = prompt("Choose how many characters long you'd like your password to be (between 8-128 characters): ");

    if (passwordLength<8){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else if (passwordLength>128){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else{
    alert("The next few popups will ask you what types of characters you would like to be included in your password.\nIf you choose 'No' for all, your password will only contain lowercase letters.");
    }
    return passwordLength;
}

//Function used to determine whether the user wants to include uppercase characters in the password
function determineUppercase(){
  uppercaseCheck = confirm("Do you want to include uppercase letters in your password? \n(Choose one)");
    

    return uppercaseCheck;
}

//Function used to determine whether the user wants to include numbers in the password
function determineNumbers(){
  numberCheck = confirm("Do you want to include numbers in your password? \n(Choose one)");
    


    return numberCheck;
}

//Function used to determine whether the user wants to include special characters in the password
function determineSpecial(){
  specialCheck = confirm("Do you want to include special characters in your password? \n(Choose one)");
   

 
    return specialCheck;
}

/*Generate password function that takes our user 
answers and generates password*/ 

function generatePassword(){

// first calling all our above functions to get our user input answers

  determineLength();
  //log to console the length given from user
  console.log(passwordLength);
  determineUppercase();
  //log to console either true or false
  console.log(uppercaseCheck);
  determineNumbers();
  //log to console either true or false
  console.log(numberCheck);
  determineSpecial();
  //log to console either true or false
  console.log(specialCheck);

var characters = lowercaseChar;
var password = "";
if (uppercaseCheck && numberCheck && specialCheck){
  characters += uppercaseChar + numberChar + specialChar;

}else if (uppercaseCheck && numberCheck){
  characters += uppercaseChar + numberChar;

}else if (numberCheck && specialCheck){
  characters += numberChar + specialChar;

}else if (uppercaseCheck && specialCheck){
  characters += uppercaseChar + specialChar;

}else if (uppercaseCheck){
  characters += uppercaseChar;

}else if(numberCheck){
  characters += numberChar;

}else if (specialCheck){
  characters += specialChar;

}else{
  characters === lowercaseChar;
}

  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = "";
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// function resetText(){
//   document.getElementById("password").value = "Your Secure Password";
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);