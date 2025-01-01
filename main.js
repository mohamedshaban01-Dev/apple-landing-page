let img = document.querySelector('.img');
let container = document.querySelector('.container');
let icon = document.querySelector(".icon");
let menu = document.querySelector('.menu');

// console.log(col1);
function phones(src) {
    img.src = src;
}
function colors(color) {
    container.style.background = color;
}
// function visiabilty(visible) {
//     menu.style.visibility = visible;
// }
icon.addEventListener("click", (event) => {
    menu.style.visibility = "visible";
    event.stopPropagation(); 
});

// to hidden
document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && event.target !== icon) {
        menu.style.visibility = "hidden";
    }
});