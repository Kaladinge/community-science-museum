const buttons = document.querySelectorAll(".drop-button");

const clickContent = document.querySelectorAll(".dropdown-content");

console.log(clickContent);
console.log(buttons);

buttons.forEach(function(button, item) {
    button.onclick = function showContent() {
    clickContent[item].classList.toggle("show");
    console.log("hei");
    console.log(clickContent);
    }

   
    
});