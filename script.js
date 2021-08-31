
const posX = document.querySelector(".posX strong");
const posY = document.querySelector(".posY strong");

const mousePosition = function (event) {
    posX.innerText = event.pageX;
    posY.innerText = event.pageY;
};

window.addEventListener("mousemove", mousePosition, false);
