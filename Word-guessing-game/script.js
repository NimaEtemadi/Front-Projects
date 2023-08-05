const elemntHelp = document.createElement("div");
elemntHelp.setAttribute("id" , "help");
elemntHelp.setAttribute("className" , "help");
elemntHelp.style.width = "600px";
elemntHelp.style.height = "180px";
elemntHelp.style.background = "#121212";
elemntHelp.style.color = "#ffff";
elemntHelp.style.position = "relative";
elemntHelp.style.top = "120px";
elemntHelp.style.display = "none";
elemntHelp.style.fontSize = "21px";
elemntHelp.style.color = "yellow";
elemntHelp.style.textAlign = "justify";
elemntHelp.style.fontFamily = "Times New Roman";
elemntHelp.style.padding = "20px";
elemntHelp.innerText = "Hello The instructions of the game are that you have to guess the right word to prevent yourself from being executed and win the game. There is a word assigned to the number of lines and you have to guess it. Remember, you have 6 chances to find the desired word, otherwise my friend will be executed. Apart from the mouse, you can also key on the letters with the keyboard";
const footers = document.querySelector(".footer");
footers.appendChild(elemntHelp);

const button = document.querySelector("button");
button.setAttribute("id" , "btn");
button.style.width = "150px";
button.style.height = "35px";
button.style.position = "relative";
button.style.top = "100px";
button.style.fontSize = "15px";
button.style.fontWeight = "bold";

button.addEventListener("click" , function(){
    elemntHelp.style.display = "block";
})