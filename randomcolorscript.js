/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const colors = ["blue", "red", "green", "yellow", "orange"];

//const cell1 = document.querySelector(".cell.cell01");

const randomcolor = function (event) {
    randomnumber = Math.floor(Math.random() * colors.length)
    //console.log(randomnumber)
    color = colors[randomnumber]
    // lastcolor = color
    console.log(color)
    //this.classList.remove(lastcolor);
    for (i = 0; i < colors.length; i++) {
        if (this.classList.contains(colors[i])) {
            this.classList.remove(colors[i])
        }
    }
    this.classList.add(color);
    //this.classList.remove(color);
    /*   if (this.classList.contains(color)) {
           this.classList.remove(color);
       } else {
           this.classList.add(color);
   
       }
   */
    //this.classList.toggle(color);
    //console.log(cell1.innerHTML);
};

cells = document.querySelectorAll(".cell");
for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener("mouseover", randomcolor, false);
};
