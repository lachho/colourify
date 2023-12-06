// This function finds the shape and changes the background colour to the input.
function paint(colour) {
  const shape = document.getElementById('shapeID');
  shape.style = `background-color:${colour}`;
}

// This function finds the shape and changes the background colour to a random colour.
function random() {
	const shape = document.getElementById('shapeID');
	shape.style = `background-color:${newColour()}`
	document.body.style.backgroundColor = newColour();
}

// This function randomly creates a new colour.
function newColour() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

// This function recursively changes the border radius to round/straigten it.
function loop(shape, borderRadius, change, i) {
    const newBorderRadius = parseInt(borderRadius) + change * i;
    shape.style.borderRadius = `${newBorderRadius}%`;
    i++;
    if (i % 15 == 0) {
        random();
    }
    if (i <= 50) {
        setTimeout(() => loop(shape, borderRadius, change, i), 10);
    }
}

// This function visually changes the shape from circle to square and back.
function shape() {
    const shape = document.getElementById('shapeID');
    const style = window.getComputedStyle(shape);
    let borderRadius = style.getPropertyValue('border-radius');
    
    let change;
    if (parseInt(borderRadius) == 0) {
        change = 1;
    }
    else {
        change = -1;
    }

    let i = 0;
    loop(shape, borderRadius, change, i);

}
