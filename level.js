var inventory = [{
	weapon: false,
},{
	food: false,
},
{
	meat:false,
}];

var greetings = new Audio('audio/greeting.mp3');
var death = new Audio('audio/death.mp3')

var levels = [{
		'id':0,
		'title': 'Level 1',
		'description': 'After 10 years of being stuck inside of a bunker.<br>You decide to go outside<br>What will you do?',
		'background': "url('img/bg.jpg')",
		'buttons': [{
				'id': 'findFood',
				'text': 'Find Food',
				'enabled': true,
				'function': function () {
					let random = Math.floor(Math.random() * 2);
					if(random === 1){
						actions.innerHTML =('<br>You have found some food');
						inventory[1].food = true;
						enablebtn('nextLevel', true);
						enablebtn('findFood', false);
					} else {
						actions.innerHTML +=('<br>You did\'nt find some food \nTry again!');
					}
				}
			},
			{
				'id': 'findWeapon',
				'text': 'Find weapon',
				'enabled': true,
				'function': function () {
					let random = Math.floor(Math.random() * 2);
					if(random === 1){
						enablebtn('nextLevel', true);
						enablebtn('findWeapon', false);
						inventory[0].weapon = true;
						actions.innerHTML ='<br>You\'ve found a weapon';
					} else {
						actions.innerHTML += '<br>You haven\'t found a weapon';
					}
				}
			},
			{
				'id': 'nextLevel',
				'text': 'Go outside',
				'function':function() {
					game(1);
				},
				'enabled': false,
			}
		]
	},
	{
		'id': 1,
		'title': 'Level 2',
		'background': "url('img/cockroach.jpg')",
		'description': 'For the first time in 10 years you see real sunlight!<br>Once your eyes have adjusted you spot a giant mutated cockroach',
		'buttons': [{
				'id': 'fight',
				'text': 'Fight',
				'enabled': true,
				'function': function () {
					if(inventory[0].weapon === true){
						actions.innerHTML +='You won the fight';
						enablebtn('nextLevel', true);
						enablebtn('fight', false);
					} else {
						game(10);
						death.play();
						actions.innerHTML += 'The cockroach overpowered you';
					}
				},
			},
			{	
				'id': 'run',
				'text': 'Run',
				'enabled': true,
				'function': function () {
					let random = Math.floor(Math.random() * 2);
					if(random === 1){
						alert('You succesfully ran away from this confrontation');
						game(3);
					} else {
						game(10);
						death.play();
						actions.innerHTML += 'The cockroach spotted you and mauled you to death';
					}
				},
			}, {
				'id': 'nextLevel',
				'text': 'Next Level',
				'function': function() {
					game(2);
				}
			}
		]
	},
	{
		'id':2,
		'title': 'Level 3',
		'description': 'After you killed the cockroach you decide to loot its body',
		'background': "url('img/cockroach.jpg')",
		'buttons': [{
				'id': 'loot',
				'text': 'Loot body',
				'enabled': true,
				'function': function () {
					actions.innerHTML +='You looted the body <br> You gained a piece of meat';
					inventory[2].meat = true;
					enablebtn('loot', false);
				}
			},
			{
				'id': 'nextLevel',
				'text': 'Next Level',
				'enabled': true,
				'function':function() {
					game(3);
				},
			}
		]
	},
	{
		'id':3,
		'title': 'Level 4',
		'description': 'You encountered a stranger <br>What will you do?',
		'background': "url('img/stranger.jpg')",
		'buttons': [{
				'id': 'talk',
				'text': 'Talk to stranger',
				'enabled': true,
				'function': function () {
					actions.innerHTML += '';
					game(4);
					greetings.play();
				}					
			},
			{
				'id': 'fight',
				'text': 'Fight stranger',
				'enabled': true,
				'function':function() {
					game(10);
					death.play();
					actions.innerHTML += 'You brought a knife to a gun fight'
				},
			}
		]
	},
	{
		'id':4,
		'title': 'Level 5',
		'description': 'Hello there<br>I haven\'t had much luck finding food the last few days<br>I have something for you in exchange for a piece of meat',
		'background': "url('img/stranger.jpg')",
		'buttons': [{
				'id': 'giveMeat',
				'text': 'Give a piece of meat',
				'enabled': true,
				'function': function () {
					actions.innerHTML += 'You gave him your piece of meat';
					enablebtn('quest', false);
				}					
			},
			{
				'id': 'quest',
				'text': 'Get quest',
				'enabled': false,
				'function':function() {
					actions.innerHTML += 'Here you have the location of a mech suit<br>It will help you with fighting enemies and exploring';
					enablebtn('nextLevel', true);
				},
			},
			{
				'id': 'nextLevel',
				'text': 'Next Level',
				'enabled': false,
				'function':function() {
					game(5);
				},
			}
		]
	},
	{
		'id':10,
		'title': 'You died',
		'description': '',
		'background': "url('img/dead.png')",
		'buttons': [{
				'id': 'repawn',
				'text': 'Respawn',
				'enabled': true,
				'function': function () {
					location.reload();
				}					
			},
		]
	},
]