const passwordBox = document.getElementById('password');
const passLength = 12 ;

const upperCase = 'ABCDEFGHIJKLMONPQRSTUVWXYZ'
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const symbol = '@#$&!%^*(){}[]?<>+-=';
const numbers = '0123456789';

const allChars = upperCase + lowerCase + symbol + numbers ;

function createPassword (){
    let password = '';

     password += upperCase[Math.floor(Math.random() * upperCase.length)];
     password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
     password += numbers[Math.floor(Math.random() * numbers.length)];
     password += symbol[Math.floor(Math.random() * symbol.length)];

     while( passLength > password.length){
         password += allChars[Math.floor(Math.random() * allChars.length)];
     }
    passwordBox.value = password;
}

function copyPass (){
    navigator.clipboard.writeText(passwordBox.value);
}