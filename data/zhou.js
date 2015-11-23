module.exports = {
	tag: 'zhou',
	title: 'Zhou Dynasty',
	dates: '1046-221 bc',
	description: 
		'Zhou was one many states in central China that existed alongside '+
		'the Shang in neolithic times. In 1045 bc the Zhou army defeated the Shang and '+
		'became the center of political power in northern China. The Zhou king '+
		'stabilized his empire by sending out close relatives to serve as rulers of '+
		'smaller states in strategic positions most to the south and east of the Zhou '+
		'capitol. Over the course of a few generations these states grew became more '+
		'and more powerful as their leaders grew more and more distant from the Zhou '+
		'king. This alienation of the Zhou from its child states led to the '+
		'development of a more bureacratic style of governance on the one hand, '+
		'and an increasing dissatisfaction among the people on the other. In '+
		'776 bc the decline of the Zhou state reached its climax when the Zhou '+
		'capitol was sacked by a coalition of smaller states. While the central '+
		'government still retained some symbolic significance, it retained '+
		'little in the way of real political power. The period after 776 '+
		'bc is referred to as the "eastern Zhou" or the spring and autumn '+
		'period.',
	children: [
	{
		tag: 'conquest_of_shang',
		title: 'The Zhou Conquest of Shang',
		description: 
			'Before he died in 1050 bc King Wen of Zhou began a series '+
			'of military capaigns against the Shang by setting up a new capitol in '+
			'the Feng river valley. From here his capaigns focused on the small '+
			'states occupying strategic positions to the south and west of the '+
			'Shang capitol. Two years after his death, his successor King Wu took '+
			'this campaign to its conclusion. First, he camped at a ford on the '+
			'yellow river south of the shang capitol and cultivated alliances with '+
			'local lords. He brough his army, strengthened by their forces, to '+
			'"Shepard\'s Wild" just south of the capitol, where his cavalry '+
			'sucessfully routed the Shang forces.',
		literature: {
			daming: {
				name: 'Great Brightness',
				source: 'Classic of Poetry',
				text: {source: 'shijing', text: 'daming'}
			}
		}
	},
	{
		tag: 'civil_war',
		title: 'Civil War',
		dates: 'ca. 1043 BC',
		description: 
			'King Wu died two years after he defeated Shang, a victory that elevated Zhou to regional supremacy '+
			'in north east China. Soon after he died King Wu\'s brother Zhou Gong Dan declared Wu\'s eldest son and heir to the throne '+
			'too young to rule and established himself as regent. King Wu\'s other brothers didn\'t recognize Gong Dan, and '+
			'they set up a network of alliances in the East to oppose his rule. Zhou Gong Dan, together with the rightful heir King Cheng and '+
			'his half-brother Shao Gong Shi successfully defeated the kingdoms to the east, in the process expanding their territory '+
			'all the way to the eastern seaboard.',
		children: [
		{
			tag: 'heaven',
			title: 'The Authority of Heaven',
			description: 
				'There is textual evidence that King Cheng initiated the war against his uncles partly on account of '+
				'favorable results he obtained when divining about the matter with turtle shells. The text which has been passed down to us '+
				'records a speech he made to a gathering of lords where he places great trust in the intelligence of heaven. This text '+
				'is also significant because it contains the first reference to the "Mandate of Heaven", an idea which plays an important role in '+
				'Chinese political thinking.',
			literature: {
				dagao: {
					name: 'The Great Announcement',
					source: 'The Book of Shang',
					text: {source: 'shangshu', text: 'dagao'}
				}
			}
		}
		]
	},
	{
		tag:'western_zhou',
		title: 'Western Zhou',
		dates: '~1045-771 B.C.',
		description: 
			'Zhong Gong Dan and King Cheng used a fuedal system to consolidate power '+
			'whereby relatives of the ruling family were sent to rule smaller states father away from the capitol. '+
			'The King stood at the political center of the kingdom, which means that all official titles and appointments '+
			'were officiated by him. Such appointments were usually commemorated by the casting of a bronze tripod, and '+
			'records indicate the central role of ceremony and ritual in the conducting of political and military affairs.',
		children: [
			{
				tag: 'chu_defeat',
				title: 'Defeat in the South',
				dates: '~957 B.C.',
				description: 
					'The song of King Cheng, King Kang, was a successful ruler who expanded the territory and wealth of the '+
					'Zhou by engaging in military campaings to the north. His successor, King Zhao, attempted to continue the expansion '+
					'by waging a military campaign against a powerful southern state called Chu. King Zhao\'s forces were decimated and '+
					'he was killed. This defeat was the beginning of two hundred years of decline for the state of Zhou.',
			},
			{	
				tag: 'king_mu',
				title: 'Reign of King Mu',
				dates: '956-918 B.C.',
				description: 
					'King Mu inherited a weakened state whose political influence would soon be dramatically reduced. In '+
					'addition to the military defeat that took the life of his predecessor, King Mu was faced with the deterioration of '+
					'the political system established by the Zhou founders. The rulers of states far from the capitol, particularly in the east, were no longer '+
					'closely related to the rulers in the center. The blood ties that held the kingdom together in the early days '+
					'of Zhou superiority had been diluted to a mere trace. Sources suggest that a large number of small kingdoms on the east '+
					'coast formed an alliance and sent a combined force against the Zhou capitol. The battle is considered historical fact, '+
					'but the details and extend of the alliance that opposed the Zhou is unclear. '+
					'While this battle was technically a win for King Mu, who successfully repelled the attack, it is significant that ritual '+
					'bronzes are no longer found in the eastern regions after this period. This indicates that the eastern kingdoms ceased to recognize '+
					'the political authority of the Zhou King.',
				children: [
					{
						tag:'reforms',
						title: 'Bureacratization',
						description: 
							'At this stage the Zhou government went through a transformation. Whereas before, the King '+
							'ruled primarily through a combination of charisma, spiritual authority and military prowess, he now interacted with '+
							'and depended on a government bureacracy made up of specialists and professionals. The highest officials were the '+
							'Supervisor of the Horse, the Supervisor of Land, and the Supervisor of Works. It is also evident that '+
							'the class of scribes, before a relatively small group devoted mainly to divination, grew in size and importance '+
							'as the recording and copying of everything that happened in the royal court became standard.', 
					}
				]
			},
			{
				tag: 'later',
				title: 'The Final 100 years',
			}
		]
	},
	{
		tag: 'eastern_zhou',
		title: 'Eastern Zhou',
		dates: '771-221 B.C.',
		description: 
			'After its military defeat by a coalition between the vassal state Shen and a non-Zhou "barbarian" tribe, '+
			'the Zhou royal family was escorted to a new capitol in the East. Here the Zhou court persisted as a mere shadow of '+
			'its former greatness while a complex multi-state dynamic emerged. This period of political decentralization is known as '+
			'the Spring and Autumn period. The details of this period can be found under the section by that name.',
		children: []
	},
	{
		tag: 'script',
		title: 'Seal Script',
		description: 
			'Seal script is a term for a variety of scripts that evolved out of Shang era writing. '+
			'It is hard to generalize about seal script because of its amazing variety and regional variation. Typical features are '+
			'complex semi-pictographic structure, long strokes of even width with rounded ends, and a general tendency towards '+
			'vertical elongation.',
		image: ['zhou_A.JPG','zhou_B.JPG']
	},
	{
		tag: 'spring_and_autumn',
		title:'Spring and Autumn',
		dates: '~771-221 B.C',
		description: '',
		children: []
	},
	{
		tag: 'warring_states',
		title: 'Warring States',
		dates: '',
		politics: {
			description: '',
			map: 'TODO warringStatesMap'
		},
		warfare: {
			description:'',
			battles:{}
		},
		literature: {
			daodejing: 'daodejing',
			zhuangzi: 'zhuangzi',
			lunyu: 'lunyu',
			sunzi: 'sunzi',
			zhanguoce: 'zhanguoce'
		},
		script: {
			description: '',
			types: {}
		}
	}	
	],
}