let canvas = document.getElementById('pixelCanvas');
let height = document.getElementById("inputHeight");
let width = document.getElementById("inputWidth");
let color = document.getElementById("colorPicker");


sizePicker.addEventListener('submit', function submitted(e) {
  e.preventDefault();
  makeGrid();
});



function makeGrid() {
    canvas.innerHTML = ""
    let gridheight = height.value;
    let gridwidth = width.value;
    let addEvent = function(cell) {
        cell.addEventListener('click', function() {
            cell.style.backgroundColor = color.value;
        });
    }
    for (let i = 0; i < gridheight; i++) {
        let row = canvas.insertRow(i);
        for (let j = 0; j < gridwidth; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener('click', addEvent(cell));
        }
    }
}
