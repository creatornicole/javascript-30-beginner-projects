const passwordBox = document.getElementById("password");
const length = 12; // password length

// different characters that are allowed in password
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_*~|}{[]<>/-=";

const allChars = upperCase + lowerCase + number + symbol;

// Generates Random Password
function createPassword() {
    let password = "";
    // ensures that at least one symbol of each is in password
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    // generate password with specified length
    while(length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    // show password in input field
    passwordBox.value = password;
}

// Copies Password to Clipboard
function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}