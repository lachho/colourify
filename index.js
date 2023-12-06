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