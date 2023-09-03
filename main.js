"use strict";
function getRandomNumber(max){
    return Math.round(Math.random() * max);
}
function shuffleString(string){
    let a = string.split('')
    , n = a.length;

    for(let i = n - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join('');
}
document.addEventListener("DOMContentLoaded", () =>{
    const passwordField = document.getElementById("generatedPassword")
    , generateButton = document.getElementById("generateButton")
    , alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    , numbers = "0123456789"
    , symbols = "!@#$%";

    generateButton.addEventListener("click", () =>{
        // Generate password
        let password = '';
        for(let i = 0; i < 10; i++){
            password += alphabet[getRandomNumber(alphabet.length-1)];
        }
        for(let i = 0; i < 5; i++){
            password += numbers[getRandomNumber(numbers.length-1)];
        }
        for(let i = 0; i < 2; i++){
            password += symbols[getRandomNumber(symbols.length-1)];
        }

        passwordField.value = shuffleString(password);
    });
    passwordField.addEventListener("click", ()=>{
        passwordField.select();
        passwordField.setSelectionRange(0, 99999);
        
        navigator.clipboard.writeText(passwordField.value);
        alert("Password copied!");
    });
});