const $ = document;
let questionValue = $.querySelectorAll(".question-text");
let showBtn = $.querySelectorAll(".btn");

showBtn.forEach((i) => {
  i.addEventListener("click", () => {
    let parentText = i.nextElementSibling;
    let text = parentText.children;
    let plusbtn = i.childNodes[1];
    parentText.classList.toggle("h-[auto]");
    text[0].classList.toggle("hidden");
    parentText.classList.toggle("p-4");
    plusbtn.style.color = "red";
    i.addEventListener("click", () => {
      if (plusbtn.style.color == "red") {
        plusbtn.style.color = "rgb(74 222 128)";
      }
    });
  });
});
