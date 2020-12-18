const titles = document.getElementById('title');
const desc = document.getElementById('description');
const actions = document.getElementById('actions')
const inv = document.getElementById('inventoryItem');
const gameBtns = document.getElementById('game-buttons');
const bg = document.getElementById('background');

var startLevel = 0;

function game(curLevel) {
	console.log(curLevel);
	var level;
	level = levels.find((l) => {
		if (l.id === curLevel) {
			return true;
		}
	});
	if (level) {
		initLevel(level);
	} else {
		alert('Level not found');
	}
}

function initLevel(level) {
	titles.innerHTML = level.title;
	desc.innerHTML = level.description;
	bg.style.backgroundImage = level.background;
	actions.innerHTML = '';
	buttons(level.buttons);
}

function buttons(buttons) {
	while (gameBtns.hasChildNodes()) {
		gameBtns.lastChild.remove();
	}
	for (i = 0; i < buttons.length; i++) {
		var createbtn = document.createElement('button');
		createbtn.innerText = buttons[i].text;
		createbtn.id = buttons[i].id
		createbtn.setAttribute('dataAtt', i);
		createbtn.onclick = buttons[i].function;
		createbtn.disabled = !buttons[i].enabled;
		gameBtns.appendChild(createbtn);
	}
}

function enablebtn(id, state) {
	document.getElementById(id).disabled = !state;
}

game(startLevel)