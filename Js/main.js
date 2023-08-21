const cellTotal = 10 * 10;
const cellContainer = document.getElementById("cell-container");
const generateButton = document.getElementById("generate-grid");

for (let i = 1; i <= cellTotal; i++) {
	const cell = document.createElement("li");
	cell.innerText = 1;
	cell.classList.add("cell");
	cellContainer.append(cell);
}
