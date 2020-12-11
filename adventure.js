var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');

var weapon = {
	easy: 50,
	normal: 25,
	hard: 13,
};

var health = {
	easy: 150,
	normal: 100,
	hard: 75,
};

button1.addEventListener('click', function () {
	level1('easy');
});
button2.addEventListener('click', function () {
	level1('normal');
});
button3.addEventListener('click', function () {
	level1('hard');
});


function level1(difficulty) {
	console.log('Hello World')
	switch (difficulty) {
		case 'easy':
			sethealth(health.easy);
			console.log('Hallo');
			break;
		case 'normal':
			sethealth(health.normal);
			console.log('Waarom');
			break;
		case 'hard':
			sethealth(health.hard);
			console.log('gebeurt dit');
			break;
		default:
			break;
	}
}

function sethealth(value) {
	document.getElementById('health').innerText = value;
}