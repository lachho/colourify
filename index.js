function paint(colour) {
  const shape = document.getElementById('shapeID');
  shape.style = `background-color:${colour}`;
}

function random() {
	const shape = document.getElementById('shapeID');
	shape.style = `background-color:${newColour()}`
	document.body.style.backgroundColor = newColour();
}

function newColour() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function shape() {
    const index = Math.floor(Math.random() * 3);
    const shape = document.getElementById('shapeID');
    if (index == 0) {
        shape.borderRadius = "0%";
    } else if (index == 1) {
        shape.borderRadius = "25%"
    } else {
        shape.borderRadius = "50%";
    }
}
