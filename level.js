var state = {
	weapon: false,
	supplies: false,
	meat:false,
	mech:false,
};

var greetings = new Audio('audio/greeting.mp3');
var death = new Audio('audio/death.mp3')

var levels = [{
		'id':0,
		'title': 'Level 1',
		'description': 'After 10 years of being stuck inside of a bunker.<br>You decide to go outside<br>What will you do?',
		'background': "url('img/bg.jpg')",
		'buttons': [{
				'id': 'findSupplies',
				'text': 'Find supplies',
				'enabled': true,
				'function': function () {
					let random = Math.floor(Math.random() * 2);
					if(random === 1){
						actions.innerHTML =('<br>You found supplies');
						state.supplies = true;
						inventory('img/WeaponRepairKit.png', 'repair');
						enablebtn('nextLevel', true);
						enablebtn('findSupplies', false);
					} else {
						actions.innerHTML +=('<br>You did\'nt find suplies \nTry again!');
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
						inventory('img/HuntingKnife.png', 'knife');
						state.weapon = true;
						actions.innerHTML ='<br>You\'ve found a knife';
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
					if(state.weapon === true){
						actions.innerHTML +='<br>You won the fight';
						enablebtn('nextLevel', true);
						enablebtn('fight', false);
						enablebtn('run', false);
					} else {
						game(10);
						death.play();
						actions.innerHTML += '<br>The cockroach overpowered you';
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
						actions.innerHTML += '<br>The cockroach spotted you and mauled you to death';
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
					actions.innerHTML +='<br>You looted the body <br> You gained a piece of meat';
					state.meat = true;
					inventory('img/meat.png', 'meat');
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
					actions.innerHTML += '<br>';
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
					actions.innerHTML += '<br>You brought a knife to a gun fight'
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
					if(state.meat === true){
					actions.innerHTML += '<br><br>You gave him your piece of meat<br>';
					removeinv('meat')
					enablebtn('giveMeat', false);
					enablebtn('quest', true);
				} else {
					game(10);
					death.play();
					actions.innerHTML = 'Y<br>ou didn\'t give him food, when you turned around to walk away he shot you in your back'
				}
				}					
			},
			{
				'id': 'quest',
				'text': 'Get quest',
				'enabled': false,
				'function':function() {
					desc.innerHTML += '<br>Here you have the location of a mech suit<br>It will help you with fighting enemies and exploring';
					enablebtn('nextLevel', true);
					enablebtn('quest', false);
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
		'id':5,
		'title': 'Level 6',
		'description': 'You arrived at the little town where the mech is stored <br> What will you do?',
		'background': "url('img/street.jpg')",
		'buttons': [{
				'id': 'lootHouse',
				'text': 'Loot houses',
				'enabled': true,
				'function': function () {
					game(10);
					death.play();
					actions.innerHTML += '<br>You started looting houses, but one was trapped<br>You went out with a bang';
				}					
			},
			{
				'id': 'searchMech',
				'text': 'Look for the mech suit',
				'enabled': true,
				'function':function() {
					actions.innerHTML += '<br>You started looking for the mech suit';
					enablebtn('searchMech', false);
					enablebtn('lootHouse', false);
					setTimeout(function() { game(6); }, 3500);
				},
			},
		]
	},
	{
		'id':6,
		'title': 'Level 7',
		'description': 'You are standing in front of the church, where the mech suit is stored<br>How will you enter?',
		'background': "url('img/church.png')",
		'buttons': [{
				'id': 'front',
				'text': 'Go to front door',
				'enabled': true,
				'function': function () {
					game(10);
					death.play();
					actions.innerHTML += '<br>When you entered there were alot of cockroaches<br>You became their next meal!';
				}					
			},
			{
				'id': 'sneak',
				'text': 'Sneak around',
				'enabled': true,
				'function':function() {
					enablebtn('nextLevel', true);
					enablebtn('sneak', false);
					enablebtn('front', false);
					actions.innerHTML += '<br>You found a door to the basement';
				},
			},
			{
				'id': 'nextLevel',
				'text': 'Next Level',
				'enabled': false,
				'function':function() {
					game(7);
				},
			},
		]
	},
	{
		'id':7,
		'title': 'Level 8',
		'description': 'You found the mech suit<br>It looks pretty rusty<br>What will you do?',
		'background': "url('img/mech.jpg')",
		'buttons': [{
				'id': 'try',
				'text': 'Put it on',
				'enabled': true,
				'function': function () {
					game(10);
					death.play();
					actions.innerHTML += '<br>The rust made some joints stick<br>You were squished to death';
				}					
			},
			{
				'id': 'repair',
				'text': 'Look for defects',
				'enabled': true,
				'function':function() {
					enablebtn('nextLevel', true);
					enablebtn('try', false);
					enablebtn('repair', false);
					actions.innerHTML += '<br>You have found some little defects';
				},
			},
			{
				'id': 'nextLevel',
				'text': 'Next Level',
				'enabled': false,
				'function':function() {
					game(8);
				},
			},
		]
	},
	{
		'id':8,
		'title': 'Level 9',
		'description': 'Luckily you had a degree in Engineering before the bombs went off <br>So you have the knowledge to repair it',
		'background': "url('img/mech.jpg')",
		'buttons': [{
				'id': 'repair',
				'text': 'Repair defects',
				'enabled': true,
				'function': function () {
					if(state.supplies === true){
						actions.innerHTML += '<br>You repaired the mech suit';
						state.mech = true;
						enablebtn('try', true);
						enablebtn('repair', false);
					} else {
						actions.innerHTML += '<br>You don\'t have the right supplies to repair the suit';
					}
				}					
			},
			{
				'id': 'try',
				'text': 'Put the suit on',
				'enabled': false,
				'function':function() {
					actions.innerHTML += '<br>You put on the suit';
					enablebtn('nextLevel', true);
					enablebtn('try', false);
				},
			},
			{
				'id': 'nextLevel',
				'text': 'Next Level',
				'enabled': false,
				'function':function() {
					game(9);
				},
			},
		]
	},
	{
		'id':9,
		'title': 'Level 10',
		'description': 'After leaving the church, you are standing face to face with a huge monster',
		'background': "url('img/boss.jpg')",
		'buttons': [{
				'id': 'fight',
				'text': 'Fight',
				'enabled': true,
				'function': function () {
					if(state.mech === true){
						actions.innerHTML += '<br>After a long and intense battle you defeated the monster';
						enablebtn('endgame', true);
						enablebtn('fight', false);
						enablebtn('run', false);
					} 
				}				
			},
			{
				'id': 'run',
				'text': 'Run',
				'enabled': true,
				'function':function() {
					game(10);
					death.play();
					actions.innerHTML += '<br>Due to running for too long, the mech suit overheated<br>And boiled you alive';
				},
			},
			{
				'id': 'endgame',
				'text': 'Endgame',
				'enabled': false,
				'function':function() {
					game(11);
				},
			},
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
	{
		'id':11,
		'title': 'Victory',
		'description': 'You have completed this mini game',
		'background': "url('img/victory.jpg')",
		'buttons': [{
				'id': 'tryagain',
				'text': 'Restart',
				'enabled': true,
				'function': function () {
					location.reload();
				}					
			},
		]
	},
]