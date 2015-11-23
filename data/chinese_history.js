var shang = require('./shang.js');
var zhou = require('./zhou.js');

exports.history = {
	tag: 'home',
	title: 'Chinese History',
	children: [
	{
		tag: 'prehistory',
		title: 'Pre-historic China',
		dates: ' < 2000 BC',
		description: 
		'Prehistoric China contained a plethora of independant civilizations. '+
		'Many regions of China have produced archaeological evidence of neolithic '+
		'cultures with artifacts including pottery and stonework.',
		children: [
		{
			tag: 'pleistocene',
			title: 'The Pleistocene',
			description: 'Our current geological epoch, the holocene, began about '+
			'11,700 years before the present. The preceding epoch is known as the '+
			'pleistocene. At the end of the pleistocene, East Asia had a warm moist '+
			'climate. There was an abundance of vegetaion including plants both edible and '+
			'medicinal and animals such as elephant, crocodile and deer, many of which are '+
			'now only to be found in southern China and other parts of Asia. '
		},
		{
			tag: 'holocene',
			title: 'The Holocene',
			description: 'People all over the world started developing agriculture around '+
			'10,000 years ago. Excavations all over China have uncovered remains of '+
			'sophisticated civilizations dating from this era, with artifacts including '+
			'carved jade, pottery, musical instruments and even written language, although '+
			'the few symbols passed down from these cultures have not been decifered. '+
			'According to these ecavations it is known that civilizations in the north '+
			'primarily cultivated millet while those of the south grew domesticated rice.'
		},
		{
			tag: 'prehistoric_civilizations',
			title: 'Pre-historic Civilizations',
			description: 'Prior to 3000bc there were a number of different unique cultures'+
			'already flourishing in the area which later became known as China. These'+
			'cultures began to influence each other around 3000bc after a few thousand'+
			'years of growth and development. Grave sites of this "prehistoric" period show'+
			'evidence of hierarchical social organization. In some sites the largest and'+
			'most resplendant graves contain many ritualistic objects which suggests that the'+
			'leaders of these societies simultaneously held political, military, and'+
			'religious roles.',
			children: [
			{
				tag:'shamanism',
				title: 'Shamanism',
				description: 'cong and bi'
			},
			{
				tag:'society',
				title: 'Society',
				description: 'walled settlements'
			},
			{
				tag:'technology',
				title: 'Technology',
				description: 'mining and jade carving'
			}
			]
		},
		{
			tag: 'language',
			title: 'Language',
			description: 
			'Chinese languages form one branch of the Sino-Tibetan language '+
			'family, also called "Trans-Himalayan" by some scholars. This classification is '+
			'based on similarities between words such as the numbers one through ten, '+
			'pronouns such as I, me and you, and other basic words. While it is possible that these '+
			'similarities are due to early contact between Chinese and Tibetan peoples, the '+
			'evidence is too scarce to draw definite conclusions. There is not one "Chinese language" today, and there most likely never was one. In modern China, it is '+
			'probably not an exageration to say that every city has its own language. While people refer to them as "dialects", this designation is '+
			'more political than technical. Most of them are about as similar as the romance languages of Europe, but there are too many '+
			'to make generalizations, and indeed many (perhaps the majority) of local dialects in China remain un-studied. '+
			'What most people refer to when they say Chinese is in fact Mandarin, or "the common language" '+
			'as it is called in China. Mandarin was originally the local dialect of Beijing, and was chosen to be the '+
			'official language of China in the mid 20th century.'
		}
		]
	},
	{
		tag: 'pre_imperial',
		title: 'Pre-imperial China',
		dates: '~1600-221 BC',
		description: 
		'The history of pre-imperial China has been organized by traditional historians into a tidy '+
		'succession of dynasties starting with the Xia, which is prehistoric, and '+
		'continuing on through the Shang and Zhou dynasties. This linear model '+
		'is problematic because it ignores the cultural diversity of ancient '+
		'China. It is apparent, however, that the Shang and Zhou were powerful '+
		'regional leaders that exerted control over smaller states, and that much '+
		'of Chinese culture may have originated with them, or at least have been '+
		'transmitted via their scribes, artists and shamans.',
		children: [
		shang,
		zhou,
		]
	},
	{
		tag: 'imperial',
		title: 'Imperial China',
		children: [
		{
			tag: 'qin',
			title: 'Qin'
		},
		{
			tag: 'han',
			title: 'Han'
		},
		{
			tag: 'three_kingdoms',
			title: 'Three Kingdoms',
			northsouth: ''
		},
		{
			tag: 'tang',
			title:'Tang'
		},
		{
			tag: 'song',
			title:'Song'
		}
		]
	}
	]
};

exports.literature = {
	shiji: {
		yin: {
			name: 'Annals of Yin',
			chapters: {}
		}
	},
	shangshu: {
		title: 'The Book of Shang',
		dagao: {
			title: 'The Great Announcement',
			body: 'I have always said: "Heaven gathered Shang up like a great harvester." How could I dare not to '+
			'continue this job in my own fields. Heaven showed favor upon my predecessor. So why should I follow the '+
			'divination and refuse to heed your warnings? My predecessor establish the borders of this land, how much more '+
			'should I press on when the divinations are still favorable? For this reason I go so far as to lead a campaign '+
			'in the east. The mandate of heaven does not err, and the divinations thereof all point to this.'
		}
	},
	shijing: {
		title: 'Classic of Poetry',
		daming: {
			title: 'The Great Brightness',
			body: 'The forces of Shang, gathered like a forest.<br>The armies '+
			'arrayed in Shepards Wilds, and the lords rose up.<br> The Lord on High '+
			'comes down to us, there is no need to second thoughts.<br> Shepards Wild '+
			'is a vast field, the sandalwood chariots glimmer and the teams of horses '+
			'thunder.<br> Captain Shang Fu spread out like an eagle. Assisting King Wu '+
			'they struck down the Shang.<br> The next morning was clear and bright.'
		}
	},
	zhouyi: {

		xicishang: 'Heaven is on high, earth is down low. Thusly are the '+
		'symbols Qian and Kun established, the fine and crude take their '+
		'places. Movement and stillness are fixed, hard and soft are separated. '+
		'Parts are separated according to types, things are gathered according '+
		'to groups, auspicious and inauspicious are born. In heaven the images '+
		'are formed, on earth the shapes are completed, and thusly change may '+
		'be observed. <br>'
	}
};