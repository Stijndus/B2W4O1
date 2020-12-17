var weapon = false;

var levels = [{
		'id':0,
		'title': 'Level 0',
		'description': 'After 10 years of being stuck inside of a bunker.<br>You decide to go outside<br>What will you do?',
		'background': "url('img/bg.jpg')",
		'buttons': [{
				'id': 'findFood',
				'text': 'Find Food',
				'enabled': true,
				'function': function () {
					let random = Math.floor(Math.random() * 2);
					if(random === 1){
						alert('You\'ve found some food');
						enablebtn('nextLevel', true);
					} else {
						desc.innerHTML +=('<br>You did\'nt find some food \nTry again!');
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
						weapon = true;
						desc.innerHTML +='weapon';
					} else {
						desc.innerHTML += '<br>You haven\'t found a weapon';
					}
				}
			},
			{
				'id': 'nextLevel',
				'text': 'Go outside',
				'function':function() {
					game(400)
				},
				'enabled': false,
			}
		]
	},
	{
		'id': 1,
		'title': 'Level 1',
		'description': 'For the first time in 10 years you see real sunlight!<br>Once your eyes have adjusted you spot a giant mutated cockroach',
		'buttons': [{
				'id': 'fight',
				'text': 'Fight',
				'function': function () {
					if(weapon === true){
						alert('You won the fight');
						levels[1].buttons[2].disable = false;
					} else {
						alert('You lost the fight');
					}
				},
			},
			{	
				'id': 'run',
				'text': 'Run',
				'function': function () {
					let random = Math.floor(Math.random() * 2);
					if(random === 1){
						alert('You succesfully ran away from this confrontation');
						levels[1].buttons[2].disable = false;
						levels[2].buttons[0].disable = true;
						levels[2].buttons[0].text = '';
					} else {
						alert('The cockroach spotted you and mauled you to death');
					}
				},
			}, {
				'id': 'nextLevel',
				'text': 'Next Level',
				'function': function name(params) {
					
				}
			}
		]
	},
	{
		'title': '2',
		'description': 'PlaceHolder',
		'buttons': [{
				'text': '',
				'function': function (chance) {
					
				},
				'disable': false,
			},
			{
				'text': 'Explore',

				
			},
			{
				'text': 'Next Level',
				'gotolevel': 0,
				'disable': true,
			},
		]
	}
]