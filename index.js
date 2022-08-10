const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
"O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$",
 "%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",
 "<",">",".","?",
"/"];


//array structure

function updateTextInput(val) {
    document.getElementById('textInput').value=val; 
  }





let passwordOne = ""
let passwordTwo = ""


let val = 15

function setValueOne() {   
    let lengthEl = document.getElementById("length-el") 
    val = document.querySelector('input').value;
    console.log(lengthEl)
}

//letter on/off

//numbers on/off
//symbols on/off

function generatePasswordOne() {
    passwordOne = ""
    for (let i = 1; i <= val; i++) randomPasswordOne(i)

}
function randomPasswordOne() {
    document.getElementById('passwordOne').value= "" ;
    let randomIndexOne = Math.floor( Math.random() * characters.length )
    passwordOne += characters[randomIndexOne]
    document.getElementById('passwordOne').value= passwordOne ;
}

function generatePasswordTwo() {
    passwordTwo = ""
    for (let j = 1; j <= val; j++) randomPasswordTwo(j)

}
function randomPasswordTwo() {
    document.getElementById('passwordTwo').value= "" ;
    let randomIndexTwo = Math.floor( Math.random() * characters.length )
    passwordTwo += characters[randomIndexTwo]
    document.getElementById('passwordTwo').value= passwordTwo ;
}


function copyPasswordOne() {
    /* Get the text field */
    let copyText = document.getElementById("passwordOne");
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
  }

  function copyPasswordTwo() {
    /* Get the text field */
    let copyText = document.getElementById("passwordTwo");
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  }
