// All site content lives here. Edit this file to change what the site says —
// components only handle presentation.

export const profile = {
	name: 'Nathan Fisher',
	role: 'Researcher · Programmer · Game Developer',
	description:
		'Nathan Fisher — researcher and self-taught programmer. Online behavioral experiments, Unity games, and six years teaching on a kitesurfing beach.',
	email: 'ncfisherim@outlook.com',
	links: [
		{ label: 'GitHub', href: 'https://github.com/ncfisherim' },
		// { label: 'LinkedIn', href: 'https://www.linkedin.com/in/...' },
	],
};


export type Entry = {
	id: string;
	section: 'research' | 'work'; // which list it appears in
	years: string;
	title: string;
	org?: string;
	kind: string;
	summary: string;
	points?: string[];
	stats?: { value: string; label: string }[];
	tools?: string[];
	link?: { label: string; href: string };
};

// All entries, newest first. `section` decides whether they show under
// Research Experience or Work Experience.
export const entries: Entry[] = [
	{
		id: 'service',
		section: 'work',
		years: '2026—',
		title: 'Ruth’s Chris Steakhouse',
		org: 'Server & food runner head coach',
		kind: 'Leadership',
		summary: 'High-volume fine dining, where details like allergens are a safety system.',
		points: [
			'As head coach, led a team of 5 food runners — delegating and re-prioritizing in real time during peak service.',
			'Communicate menu, ingredient, and allergen information precisely; coordinate with the kitchen to prevent allergic reactions.',
		],
	},
	{
		id: 'games',
		section: 'work',
		years: '2020—',
		title: 'Independent games',
		kind: 'Games',
		summary: 'Personal projects taken from first concept to a finished, playable build.',
		points: [
			'Taught myself C# and the Unity engine to program gameplay and systems.',
			'Model and prepare 3D assets in Blender.',
		],
		tools: ['C#', 'Unity', 'Blender'],
	},
	{
		id: 'water',
		section: 'work',
		years: '2019–25',
		title: 'Kitesurfing instructor, assistant manager',
		org: 'Real Watersports',
		kind: 'Teaching',
		summary: 'Six and a half years at a watersports school — first running the shop, then teaching on the water.',
		points: [
			'Taught beginner and intermediate kitesurfers: safety briefings, spotting technique errors, and giving targeted corrective feedback.',
			'As assistant manager, trained and supported 10–15 seasonal staff in customer service, sales, rentals, and safety.',
			'Tracked and coordinated more than $100,000 in rental equipment.',
		],
		stats: [
			{ value: '6.5', label: 'years' },
			{ value: '10–15', label: 'staff' },
			{ value: '$100k+', label: 'equipment' },
		],
	},
	{
		id: 'research',
		section: 'research',
		years: '2020–22',
		title: 'Perceptual & cognitive racial bias study',
		org: 'University of Florida',
		kind: 'Research',
		summary:
			'Designed, programmed, and launched an online experiment replicating the Implicit Association Test and the Race-Lightness Task.',
		points: [
			'Learned JavaScript and jsPsych independently to build the 144-trial study, implementing the IRB-approved protocol and informed consent flow.',
			'Piloted and debugged trial logic, randomization, timing, and real-time data capture before launch.',
			'Applied completion criteria to 37 sessions, organized data from 28 participants, and wrote MATLAB to compute per-participant metrics and correlations.',
			'Published in the UF Journal of Undergraduate Research; presented at the Undergraduate Research Expo.',
		],
		stats: [
			{ value: '144', label: 'trials' },
			{ value: '2', label: 'paradigms' },
			{ value: '37', label: 'sessions' },
			{ value: '28', label: 'kept' },
		],
		tools: ['JavaScript', 'jsPsych', 'MATLAB'],
		link: {
			label: 'Read the paper',
			href: 'https://journals.flvc.org/UFJUR/article/view/130769',
		},
	},
	{
		id: 'education',
		section: 'research',
		years: '2018–22',
		title: 'BS Psychology, minor in Philosophy',
		org: 'University of Florida',
		kind: 'Education',
		summary: 'Human-subjects research methods, perception and cognition, and a philosophy minor on the side.',
		points: [
			'Fisher, N., Maskas, V., Sans, A., Kvam, P., & Odegaard, B. (2022). An Exploration of Relationships Between Perceptual and Cognitive Racial Biases. UF Journal of Undergraduate Research, 24.',
		],
	},
];

// Rendered as a sentence, not a tag cloud.
export const methods =
	'I write JavaScript, C#, and MATLAB; build in Unity and Blender; design and run human-subjects studies with ICH-GCP in mind; clean data until it’s boring; and speak Brazilian Portuguese.';
