function checkPalindrome (str) {
    return str == str.split('').reverse().join('');
}

var parola = prompt("Parola: ")

var isPalindrome = checkPalindrome(parola);

if(isPalindrome){
    console.log("La parola è un palidroma.")
} else {
    console.log("La parola non è un palidroma.")
}