var weapon = false;

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
						enablebtn('nextLevel', true);
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
						weapon = true;
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
					game(1)
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
					if(weapon === true){
						alert('You won the fight');
						enablebtn('nextLevel', true);
						enablebtn('fight', false)
						;
					} else {
						alert('You lost the fight');
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
						levels[2].buttons[0].text = '';
					} else {
						alert('The cockroach spotted you and mauled you to death');
					}
				},
			}, {
				'id': 'nextLevel',
				'text': 'Next Level',
				'function': function() {
					game(2)
				}
			}
		]
	},
	{
		'id':2,
		'title': '',
		'description': '',
		'background': "url('g')",
		'buttons': [{
				'id': '',
				'text': '',
				'enabled': true,
				'function': function () {
					
				}
			},
			{
				'id': '',
				'text': '',
				'enabled': true,
				'function': function () {
					let random = Math.floor(Math.random() * 2);
					
				}
			},
			{
				'id': 'nextLevel',
				'text': 'Next Level',
				'function':function() {
					game()
				},
				'enabled': false,
			}
		]
	},
]