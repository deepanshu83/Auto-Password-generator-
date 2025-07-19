const passwordDisplay = document.getElementById("passwordDisplay");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%^&*()_+~<>?";

const allChars = upperCase + lowerCase + number + symbol;

function generatePassword() {
  let password = "";

  
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  // Fill the rest
  for (let i = 4; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }


  password = password.split('').sort(() => Math.random() - 0.5).join('');
  passwordDisplay.value = password;
}

function copyPassword() {
  if (!passwordDisplay.value) return;
  passwordDisplay.select();
  document.execCommand("copy");
  alert("✅ Password copied to clipboard!");
}



