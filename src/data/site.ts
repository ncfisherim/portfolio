// Photos live in src/assets/photos/<entry-id>/ and are optimized at build time.
import kitesurfing from '../assets/photos/water/kitesurfing.jpg';
import blenderGramophone from '../assets/photos/games/blender-gramophone.png';

// All site content lives here. Edit this file to change what the site says —
// components only handle presentation.

export const profile = {
	name: 'Nathan Fisher',
	role: 'Researcher · Programmer · Game Developer',
	description:
		'Nathan Fisher — researcher and self-taught programmer. Online behavioral experiments, Unity games, and six years teaching on a kitesurfing beach.',
	email: 'ncfisherim@outlook.com',
	// Public résumé (phone number removed). Replace the file in public/ to update it.
	resume: '/nathan-fisher-resume.pdf',
	links: [
		{ label: 'GitHub', href: 'https://github.com/ncfisherim' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/nathan-c-fisher/' },
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
	media?: { src: ImageMetadata; alt: string; caption?: string }[];
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
		summary: 'High-volume fine dining, precise details, and positive guest experiences.',
		points: [
			'Communicate menu, ingredient, and allergen information precisely; coordinate with the kitchen to prevent allergic reactions.',
			'As head coach, led a team of 5 food runners — delegating and re-prioritizing in real time during peak service.',
		],
	},
	{
		id: 'games',
		section: 'work',
		years: '2020—',
		title: 'Video Game Development',
		kind: 'Games',
		summary: 'Personal projects taken from first concept to a finished, playable build.',
		points: [
			'Taught myself C# and the Unity engine to program gameplay and systems.',
			'Model and prepare 3D assets in Blender.',
		],
		tools: ['C#', 'Unity', 'Blender'],
		media: [
			{
				src: blenderGramophone,
				alt: 'Blender viewport showing a low-poly gramophone on a wooden cabinet, with the gradient texture palette open on the left.',
				caption: 'A low-poly gramophone, modeled and textured in Blender.',
			},
		],
	},
	{
		id: 'water',
		section: 'work',
		years: '2019–25',
		title: 'Real Watersports',
		org: 'Kitesurfing instructor, assistant manager',
		kind: 'Teaching',
		summary: 'Six and a half years at a watersports school. First running the shop, then teaching on the water.',
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
		media: [
			{
				src: kitesurfing,
				alt: 'Black-and-white photo of Nathan Fisher kitesurfing, mid-jump high above a choppy sea, holding the board out to one side.',
			},
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
		summary: 'Research methods, neuroanatomy, and a philosophy minor.',
		points: [
			'Fisher, N., Maskas, V., Sans, A., Kvam, P., & Odegaard, B. (2022). An Exploration of Relationships Between Perceptual and Cognitive Racial Biases. UF Journal of Undergraduate Research, 24.',
		],
	},
];

// Skills, grouped.
// - `proof`: entry ids (above) where the skill was used. Hovering a skill highlights those
//   entries; clicking/tapping jumps to them and opens them.
// - `evidence`: exact phrases inside those entries to highlight after the jump. Defaults to the
//   skill name itself. Keep them word-for-word with the entry text, or nothing gets highlighted.
// Skills without proof are shown as plain text.
export type Skill = { name: string; proof?: string[]; evidence?: string[] };
export const skills: { group: string; items: Skill[] }[] = [
	{
		group: 'Programming',
		items: [
			{ name: 'JavaScript', proof: ['research'] },
			{ name: 'C#', proof: ['games'] },
			{ name: 'MATLAB', proof: ['research'] },
		],
	},
	{
		group: 'Research',
		items: [
			{
				name: 'Experiment design',
				proof: ['research'],
				evidence: ['Designed, programmed, and launched an online experiment', 'Piloted and debugged trial logic, randomization, timing'],
			},
			{
				name: 'Human-subjects research',
				proof: ['research'],
				evidence: ['IRB-approved protocol and informed consent flow', 'organized data from 28 participants'],
			},
			{
				name: 'Data cleaning',
				proof: ['research'],
				evidence: ['Applied completion criteria to 37 sessions', 'organized data from 28 participants'],
			},
			{ name: 'ICH-GCP' },
		],
	},
	{
		group: 'Tools',
		items: [
			{ name: 'jsPsych', proof: ['research'] },
			{ name: 'Unity', proof: ['games'] },
			{ name: 'Blender', proof: ['games'] },
		],
	},
	{
		group: 'People',
		items: [
			{
				name: 'Team leadership',
				proof: ['service', 'water'],
				evidence: ['led a team of 5 food runners', 'trained and supported 10–15 seasonal staff'],
			},
			{
				name: 'Training & coaching',
				proof: ['water', 'service'],
				evidence: ['Taught beginner and intermediate kitesurfers', 'giving targeted corrective feedback', 'trained and supported 10–15 seasonal staff', 'As head coach'],
			},
			{
				name: 'Safety briefings',
				proof: ['water', 'service'],
				evidence: ['safety briefings', 'prevent allergic reactions'],
			},
		],
	},
	{
		group: 'Languages',
		items: [{ name: 'Brazilian Portuguese' }],
	},
];
