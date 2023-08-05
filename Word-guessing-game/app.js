//todo : Description : "Start Code Game JavaScript ES6"
let listWorkHidden = ["usa" , "code" , "js" , "man" , "boy" , "girl" , "mom" , "that" , "family" , "friend" , "scope"];
let itemRandom = "";
let DataUser = [];
let result = "";
let repeatGame = 0;

function selectedItemRandom(){
    itemRandom = listWorkHidden[Math.floor(Math.random() * listWorkHidden.length)];
    let dataButton = document.querySelectorAll(".cont");
    dataButton.forEach((item) => {
        item.addEventListener("click" , buttonAll);
    });
    window.addEventListener("keydown" , keyboardOn);
    console.log(itemRandom);
}

function setUnderScore(){
    let spliled = itemRandom.split("");
    let mappWordLoop = spliled.map((letter) => (DataUser.indexOf(letter) >= 0 ? letter : "_"));
    result = mappWordLoop.join("");
    document.getElementById("clue").querySelector("p").innerHTML = `<p>${result}</p>`;
}

function ifWins(){
    if(itemRandom === result){
        document.getElementById("image").querySelector("img").src = "./image/winner.png";
        document.getElementById("gameover").querySelector("p").style.display = "block";
    }
}

function ifLost(){
    repeatGame++;
    if(repeatGame === 6){
        document.getElementById("image").querySelector("img").src = "./image/hangman6.png";
        document.getElementById("clue").querySelector("p").innerHTML = `Random Word is : ${itemRandom}`;
        document.getElementById("clue").querySelector("p").style.fontSize = "24px";
        document.getElementById("clue").querySelector("p").style.color = "red";
        document.getElementById("cule").querySelector("p").style.fontWeight = "bold";
    } else if(repeatGame > 6){
        document.getElementById("letters").style.opacity = "0.5";
    }
}

function updateImageFixed(){
    document.getElementById("image").querySelector("img").src = `./image/hangman${repeatGame}.png`;
}

function lettersUser(letter){
    letter = letter.toLowerCase();
    DataUser.indexOf(letter) === -1 ? DataUser.push(letter) : null;
    document.getElementById(letter.toUpperCase()).className = "hovers";
    if(itemRandom.indexOf(letter) >= 0){
        setUnderScore();
        ifWins();
    } else if(itemRandom.indexOf(letter) === -1) {
        ifLost();
        updateImageFixed();
    }
}


function buttonAll(event){
    lettersUser(event.target.id);
}

function keyboardOn(event){
    lettersUser(event.key)
}


selectedItemRandom();
setUnderScore();