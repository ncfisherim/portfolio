// All site content lives here. Edit this file to change what the site says —
// components only handle presentation.

export const profile = {
	name: 'Nathan Fisher',
	role: 'Researcher · Programmer · Game Developer',
	tagline:
		'I teach myself unfamiliar tools and use them to build things that work — online experiments, games, and teams that run smoothly under pressure.',
	email: 'ncfisherim@outlook.com',
	links: [
		{ label: 'GitHub', href: 'https://github.com/ncfisherim' },
		// { label: 'LinkedIn', href: 'https://www.linkedin.com/in/...' },
	],
};

export const about = [
	'Research professional with 2+ years designing and programming protocol-driven online human-subjects studies, testing them for reliability before launch, and organizing the resulting data for analysis.',
	'I have a habit of learning software on my own — JavaScript and jsPsych for research, C#, Unity and Blender for games — paired with the organizational and leadership experience of running teams of up to 15 people.',
];

export type Project = {
	title: string;
	year: string;
	summary: string;
	tags: string[];
	href?: string;
};

export const projects: Project[] = [
	{
		title: 'Perceptual & Cognitive Racial Bias Study',
		year: '2020–22',
		summary:
			'Designed, programmed, and launched a 144-trial online experiment replicating the Implicit Association Test and Race-Lightness Task. Piloted trial logic, randomization, and timing before launch, then analyzed participant data in MATLAB. Published in the UF Journal of Undergraduate Research.',
		tags: ['JavaScript', 'jsPsych', 'MATLAB', 'Research design'],
		href: 'https://journals.flvc.org/UFJUR/article/view/130769',
	},
	{
		title: 'Independent Games',
		year: '2020–now',
		summary:
			'Personal game projects taken from initial concept to completed build — programming gameplay in C#, building in Unity, and modeling assets in Blender.',
		tags: ['C#', 'Unity', 'Blender'],
	},
];

export type Job = {
	role: string;
	org: string;
	dates: string;
	note: string;
};

export const experience: Job[] = [
	{
		role: 'Server / Food Runner Head Coach',
		org: "Ruth's Chris Steakhouse",
		dates: '2026 — now',
		note: 'Led a team of 5 food runners during peak service; coordinate with the kitchen on allergen safety in a high-volume setting.',
	},
	{
		role: 'Kitesurfing Instructor',
		org: 'Real Watersports',
		dates: '2023 — 2025',
		note: 'Taught beginner and intermediate students, ran safety briefings, and gave targeted technique feedback.',
	},
	{
		role: 'Assistant Manager',
		org: 'Real Watersports',
		dates: '2019 — 2023',
		note: 'Managed and trained 10–15 seasonal staff; tracked and coordinated over $100,000 in rental equipment.',
	},
	{
		role: 'Research Assistant',
		org: 'University of Florida',
		dates: '2020 — 2022',
		note: 'Built and ran an IRB-approved online experiment end to end; met weekly with the faculty PI; presented at the Undergraduate Research Expo.',
	},
];

export const publication = {
	citation:
		'Fisher, N., Maskas, V., Sans, A., Kvam, P., & Odegaard, B. (2022). An Exploration of Relationships Between Perceptual and Cognitive Racial Biases.',
	venue: 'UF Journal of Undergraduate Research, 24',
	href: 'https://journals.flvc.org/UFJUR/article/view/130769',
};

export const education = {
	degree: 'BS Psychology, Philosophy Minor',
	school: 'University of Florida',
	dates: '2018 — 2022',
};

export const skills = [
	'JavaScript',
	'C#',
	'MATLAB',
	'Unity',
	'Blender',
	'Experiment design',
	'Human subjects research',
	'ICH-GCP',
	'Data cleaning',
	'Brazilian Portuguese',
];
