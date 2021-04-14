var checkInput = false;
var inputN = 0;
while(!checkInput){
   inputN = parseInt(prompt("Inserire numero da 1 a 5: ")) 
   if (inputN > 1 && inputN < 5){
       checkInput = true;
       console.log("Valore non valido.")
   } 
}
console.log("Il tuo numero: "+ inputN);

//numero del computer
var aiN = Math.ceil(Math.random()*5)
console.log("Numero del PC: "+ aiN);
//funzione somma
function somma(n1,n2){
    x = n1 + n2;
    return x;
}
Somma = somma(inputN, aiN);
console.log("Somma: " + Somma)

//check if even or odd
var Even = false;
if (Somma % 2 == 0){
    Even = true;
}



//dichiara pari o dispari
if(Even){
    console.log("Il valore è pari")
} else if(!Even){
    console.log("Il valore è dispari")
}

//chi vince
if(inputN > aiN){
    console.log("Human wins");
    document.write("Human wins <br>");

}else if(inputN < aiN){
    console.log("AI wins");
    document.write("AI wins <br>");
}else{
    console.log("Draw");
    document.write("It's a draw <br>");
}