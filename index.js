
const PASSWORD_LENGTH = 15;
let passwordEl = document.getElementById("password-text");
let finalPassword = "";
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// This function generates a random password of length PASSWORD_LENGTH
// using characters from the characters array
const getCharacters = () => {
    password = [];
    while (password.length < PASSWORD_LENGTH) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password.push(characters[randomIndex]);
    }
    renderCharacters();
  };

// This function updates the text content of the passwordEl element with the generated password
const renderCharacters = () => {
    passwordEl.textContent = password.join("");
  };
