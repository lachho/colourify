function paint(colour) {
  const circle = document.getElementById('circleID');
  circle.style = `background-color:${colour}`;
}

function random() {
	const circle = document.getElementById('circleID');
	circle.style = `background-color:${newColour()}`
	document.body.style.backgroundColor = newColour();
}

function newColour() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}