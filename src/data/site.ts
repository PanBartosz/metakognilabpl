import type { ImageMetadata } from 'astro';

import tqriExplorerPreview from '../assets/generated/tqri-explorer-preview.png';
import tqriInventoryPreview from '../assets/generated/tqri-inventory-preview.png';
import joannaPortrait from '../assets/wordpress/joanna-gegotek.jpg';
import logoPrimary from '../assets/wordpress/logo-primary.png';
import monikaPortrait from '../assets/wordpress/monika-gurak.png';

export type NavItem = {
	label: string;
	href: string;
};

export type ActionLink = {
	label: string;
	href: string;
	external?: boolean;
	download?: boolean;
};

export type DetailItem = {
	label: string;
	value: string;
};

export type Motif =
	| 'hero'
	| 'goals'
	| 'team'
	| 'milestones'
	| 'resources'
	| 'blog'
	| 'collaboration'
	| 'update'
	| 'inventory'
	| 'conference'
	| 'profile-grid'
	| 'profile-signal'
	| 'profile-orbit'
	| 'profile-lattice';

export type ResearchTrack = {
	label: string;
	title: string;
	description: string;
	href: string;
	motif: Motif;
	layout: 'feature' | 'stack' | 'wide';
};

export type TeamMember = {
	name: string;
	badge?: string;
	subtitle: string;
	bio: string;
	motif: Motif;
	image?: ImageMetadata;
	imageFit?: 'cover' | 'contain';
	links: ActionLink[];
};

export type Milestone = {
	quarter: string;
	year: number;
	title: string;
	paragraphs: string[];
	list?: string[];
};

export type CompanionLinkItem = {
	title: string;
	description?: string;
	href: string;
	external?: boolean;
	download?: boolean;
};

export type CompanionPreview = {
	title: string;
	caption: string;
	image: ImageMetadata;
	alt: string;
};

export type StandaloneResource = {
	id: string;
	group: 'Tools' | 'Methods';
	title: string;
	description: string;
	href: string;
	linkLabel?: string;
	featuredHome?: boolean;
};

export type LatestActivity = {
	type: string;
	dateLabel: string;
	title: string;
	venue?: string;
	summary?: string;
	href?: string;
	linkLabel?: string;
};

export type OutputEntry = {
	id: string;
	category: 'Papers' | 'Conferences' | 'Public outreach';
	typeLabel: 'Paper' | 'Conference talk' | 'Poster' | 'Public outreach';
	dateLabel: string;
	title: string;
	venue?: string;
	summary?: string;
	href?: string;
	linkLabel?: string;
	resources?: ActionLink[];
	featured?: boolean;
};

export type ConferenceCompanionPage = {
	eyebrow: string;
	title: string;
	lede: string;
	introParagraphs: string[];
	primaryActions: ActionLink[];
	asideTitle: string;
	asideLinks: CompanionLinkItem[];
	teamEyebrow: string;
	teamTitle: string;
	team: string[];
	supportEyebrow: string;
	supportTitle: string;
	supportParagraphs: string[];
	supportActions?: ActionLink[];
};

export type ResourceCompanionPage = {
	eyebrow: string;
	title: string;
	lede: string;
	introParagraphs: string[];
	primaryActions: ActionLink[];
	asideTitle: string;
	asideLinks: CompanionLinkItem[];
	previewEyebrow?: string;
	previewTitle?: string;
	previews?: CompanionPreview[];
	detailEyebrow: string;
	detailTitle: string;
	detailParagraphs?: string[];
	detailList?: string[];
	supportEyebrow: string;
	supportTitle: string;
	supportParagraphs: string[];
	supportActions?: ActionLink[];
};

export const siteMeta = {
	title: 'Meta-analyses in experimental philosophy',
	shortTitle: 'Meta',
	description:
		'Research project website for meta-analyses in experimental philosophy at the Faculty of Philosophy, University of Warsaw.',
	url: 'https://meta.kognilab.pl',
};

export const brand = {
	logo: logoPrimary,
	funding: 'National Science Centre, OPUS 2023/51/B/HS1/02326',
	affiliation: 'Faculty of Philosophy, University of Warsaw',
};

export const navigation: NavItem[] = [
	{ label: 'Home', href: '/' },
	{ label: 'Goals', href: '/front-page/goals/' },
	{ label: 'Team', href: '/front-page/team/' },
	{ label: 'Milestones', href: '/front-page/milestones/' },
	{ label: 'Outputs', href: '/front-page/outputs/' },
	{ label: 'Resources', href: '/front-page/resources/' },
	{ label: 'Blog', href: '/front-page/blog/' },
	{ label: 'Collaboration', href: '/front-page/collaboration/' },
];

export const footerLinks: ActionLink[] = [
	{ label: 'Bartosz Maćkiewicz', href: 'https://bartoszmackiewicz.pl', external: true },
	{
		label: 'Faculty of Philosophy @ University of Warsaw',
		href: 'https://filozofia.uw.edu.pl',
		external: true,
	},
];

export const homeIntro = {
	eyebrow: 'Research project',
	title: 'About the project',
	lede:
		'Experimental philosophy is a discipline in which philosophers conduct experimental studies to test the intuitions people have about philosophical problems.',
	paragraphs: [
		'Although relatively young, this discipline has produced many important findings. Numerous studies have revealed that people’s intuitions differ depending on factors such as culture, age, or education. Other studies have discovered that people’s intuitions are influenced by surprising factors, such as how or in what order philosophical scenarios are presented to them. The current state of research suggests that philosophical intuitions can be highly variable and unstable.',
		'Meta-analysis is a statistical technique for summarizing and analyzing the results of multiple studies on a similar topic, conducted by different research teams, at different times, or using different methods. The primary goal of this project is to determine, through meta-analysis, how people’s philosophical intuitions vary. This will involve not only conducting meta-analyses but also investigating how the results can be translated into philosophical debates about intuitions.',
	],
	followUp: 'Based on the results of our research, we will also:',
	bullets: [
		'Develop best practices for experimental philosophers to report findings in a way that facilitates future meta-analyses.',
		'Create guidelines for conducting and describing meta-analyses tailored to experimental philosophy, thereby improving the field’s methods and the reliability of its findings.',
	],
	actions: [
		{ label: 'Read more', href: '/front-page/goals/' },
	],
	motif: 'hero' as const,
};

export const outputsPage = {
	eyebrow: 'Outputs',
	motif: 'conference' as const,
	title: 'Outputs',
	lede: 'Papers, conference talks, posters, and public outreach connected with the project.',
};

export const tqriResource = {
	id: 'tqri',
	group: 'Tools',
	title: 'X-PHI Transparency & Quality of Reporting Inventory',
	description:
		'Coding tool for assessing reporting quality in experimental philosophy, with linked explorer, OSF record, and study repository.',
	href: '/x-phi-tqri/',
	linkLabel: 'Open resource page',
	featuredHome: true,
} satisfies StandaloneResource;

export const standaloneResources: StandaloneResource[] = [tqriResource];

export const outputs: OutputEntry[] = [
	{
		id: 'espp-2025-poster',
		category: 'Conferences',
		typeLabel: 'Poster',
		dateLabel: 'September 2-5, 2025',
		title: 'Is experimental philosophy ready for meta-analyses?',
		venue: 'ESPP 2025, Polish Academy of Sciences',
		summary:
			'A quantitative approach to assessing the quality of methodological and statistical reporting in x-phi.',
		href: '/espp2025/',
		linkLabel: 'Open conference page',
		resources: [
			{ label: 'Poster PDF', href: '/files/poster-espp-meta-v4.pdf', download: true },
		],
		featured: true,
	},
	{
		id: 'euro-xphi-2025-talk',
		category: 'Conferences',
		typeLabel: 'Conference talk',
		dateLabel: 'July 10-12, 2025',
		title: 'How well do experimental philosophers report their studies?',
		venue: '5th Euro X-Phi Conference 2025, University of East Anglia',
		featured: true,
	},
	{
		id: 'metascience-lecture-2025',
		category: 'Public outreach',
		typeLabel: 'Public outreach',
		dateLabel: 'May 20, 2025',
		title: 'Czym jest metanauka i co może nam powiedzieć o filozofii eksperymentalnej?',
		venue: 'Koło Naukowe Filozofii Nauki UW',
		featured: true,
	},
	{
		id: 'methods-seminar-2025',
		category: 'Public outreach',
		typeLabel: 'Public outreach',
		dateLabel: '2025',
		title: 'Granice i możliwości nowych metod w nauce: replikacje, symulacje, metaanalizy i Big Data',
		venue: 'Wydział Filozofii UW',
		summary:
			'Seminar thematically linked to the project, co-led by Bartosz Maćkiewicz, Joanna Gęgotek, and Katarzyna Kuś.',
	},
];

export const latestActivities: LatestActivity[] = outputs
	.filter((item) => item.featured)
	.map((item) => ({
		type: item.typeLabel,
		dateLabel: item.dateLabel,
		title: item.title,
		venue: item.venue,
		summary: item.summary,
		href: item.href,
		linkLabel: item.linkLabel,
	}));

export const outputCategories: OutputEntry['category'][] = [
	'Papers',
	'Conferences',
	'Public outreach',
];

export const latestActivitiesByCategory = {
	papers: outputs.filter((item) => item.category === 'Papers'),
	conferences: outputs.filter((item) => item.category === 'Conferences'),
	publicOutreach: outputs.filter((item) => item.category === 'Public outreach'),
};

export const homeUpdates = {
	newsTitle: 'News',
	post: {
		title: 'Project has started!',
		date: 'October 1, 2024',
		href: '/project-has-started/',
		excerpt:
			'We are excited to announce the launch of our project. Throughout its duration, we will keep you informed with regular updates on progress, publications, tools, and resources.',
	},
	poster: {
		title: 'Is Experimental Philosophy Ready for Meta-Analyses?',
		date: 'September 1, 2025',
		href: '/espp2025/',
		excerpt:
			'This page accompanies the poster presented at the European Society for Philosophy and Psychology Conference 2025 and gathers the poster, project links, and contact details.',
	},
};

export const researchTracks: ResearchTrack[] = [
	{
		label: 'Project goals',
		title: 'Goals',
		description:
			'Why meta-analysis matters here, what the project wants to measure, and what methodological outputs it aims to deliver.',
		href: '/front-page/goals/',
		motif: 'goals',
		layout: 'wide',
	},
	{
		label: 'Our team',
		title: 'Team',
		description:
			'The researchers behind the project, from principal investigation to current collaborators.',
		href: '/front-page/team/',
		motif: 'team',
		layout: 'wide',
	},
	{
		label: 'Milestones',
		title: 'Milestones',
		description:
			'A chronological view of planned papers, meta-research outputs, and methodological guidance.',
		href: '/front-page/milestones/',
		motif: 'milestones',
		layout: 'stack',
	},
	{
		label: 'Resources',
		title: 'Resources',
		description:
			'The reporting inventory, poster materials, and live links connected with the project’s workflow.',
		href: '/front-page/resources/',
		motif: 'resources',
		layout: 'stack',
	},
	{
		label: 'Blog',
		title: 'Blog',
		description:
			'Project news, conference materials, and future updates related to the project.',
		href: '/front-page/blog/',
		motif: 'blog',
		layout: 'stack',
	},
	{
		label: 'Collaboration',
		title: 'Collaboration',
		description:
			'Contact paths for joint meta-analyses, reuse of project resources, and new subprojects within the grant scope.',
		href: '/front-page/collaboration/',
		motif: 'collaboration',
		layout: 'stack',
	},
];

export const goalsPage = {
	eyebrow: 'Goals',
	motif: 'goals' as const,
	title: 'Project goals',
	lede:
		'The goal of the project is to investigate whether and how meta-analyses can be used in experimental philosophy.',
	details: [
		{ label: 'Focus', value: 'variation, stability, and universality of intuitions' },
		{ label: 'Method', value: 'meta-analysis + meta-research' },
		{ label: 'Output', value: 'best-practice guidance for the field' },
	],
	sections: [
		{
			label: 'Meta-analysis',
			title: 'Meta-analysis in experimental philosophy',
			paragraphs: [
				'Meta-analysis is a statistical technique for summarizing and analyzing the results of multiple studies on a similar topic, for instance, conducted by different research teams, at different times, or using different methods. This technique is used in many research fields. The widest area of use of this method is clinical research.',
				'Using the results of many controlled trials, researchers conducting a meta-analysis attempt to estimate whether a particular drug or treatment is effective. However, meta-analyses are used not only in medical research.',
			],
		},
		{
			label: 'Experimental philosophy',
			title: 'Variation in philosophical intuitions',
			paragraphs: [
				'Experimental philosophy is a young discipline in which philosophers, often together with collaborators from other fields, conduct studies testing what intuitions people have about philosophical problems.',
				'Many studies have revealed that people differ in their intuitions depending on culture, age, or education. Other studies have shown that people’s intuitions can be influenced by surprising factors, such as how or in what order philosophical scenarios are presented. The current state of research suggests that philosophical intuitions can be highly variable and unstable.',
			],
		},
		{
			label: 'Primary goal',
			title: 'The primary goal of the project',
			paragraphs: [
				'The primary goal of the project is to determine, using meta-analysis, how people’s philosophical intuitions vary. This requires considering whether and how statistical results obtained through meta-analysis can be translated into philosophical debates about intuitions and, at the same time, conducting original meta-analytic research.',
				'As part of the project, we will be able to estimate the degree of variation in effects and determine which factors are responsible for this variation, for example the language in which a study was conducted, the wording of the questions, or the culture from which the participants came.',
			],
		},
		{
			label: 'Reporting standards',
			title: 'Meta-analysis is not always possible',
			paragraphs: [
				'Meta-analysis is only possible when published papers contain the statistical and methodological information needed for secondary analysis. In many empirical studies, those details are missing or reported too loosely.',
				'The project therefore also includes a meta-research component devoted to assessing whether papers in experimental philosophy meet the standards of statistical and methodological reporting needed for future meta-analyses.',
			],
		},
		{
			label: 'Outputs',
			title: 'What the project will also do',
			paragraphs: [
				'Based on the results of the project, we plan to develop best practices for reporting studies in a way that facilitates future meta-analyses. We also plan to create recommendations for conducting and describing meta-analyses in experimental philosophy.',
			],
		},
	],
	outcomes: [
		'Identify which study characteristics account for variation in observed effects.',
		'Map where statistical or methodological reporting currently breaks down.',
		'Provide practical rules for both primary studies and future meta-analytic work.',
	],
	fundingNote: 'The project is funded by the National Science Centre (OPUS, 2023/51/B/HS1/02326).',
};

export const teamPage = {
	eyebrow: 'Team',
	motif: 'team' as const,
	title: 'Our team',
	lede: 'Meet the researchers involved in the project.',
	details: [
		{ label: 'Core team', value: '4 researchers' },
		{ label: 'Institution', value: 'University of Warsaw' },
		{ label: 'Laboratory link', value: 'Experimental Philosophy Laboratory “KogniLab”' },
	],
};

export const teamMembers: TeamMember[] = [
	{
		name: 'Bartosz Maćkiewicz',
		badge: 'Principal Investigator',
		subtitle: 'Assistant professor, Faculty of Philosophy, University of Warsaw',
		bio:
			'Bartosz Maćkiewicz is an assistant professor at the Faculty of Philosophy at the University of Warsaw. Before leading the current project, he carried out a project on new methods in experimental philosophy. He is also involved in research projects at the Experimental Philosophy Laboratory “KogniLab,” focusing on experimental philosophy, experimental semantics, empirical bioethics, and digital humanities.',
		motif: 'profile-grid',
		links: [
			{
				label: 'Google Scholar',
				href: 'https://scholar.google.com/citations?user=IaGvKg8AAAAJ',
				external: true,
			},
			{ label: 'ORCID', href: 'https://orcid.org/0000-0002-9460-5742', external: true },
			{ label: 'Personal webpage', href: 'https://www.bartoszmackiewicz.pl', external: true },
		],
	},
	{
		name: 'Katarzyna Kuś',
		badge: 'Co-Investigator',
		subtitle: 'Assistant professor and head of KogniLab, University of Warsaw',
		bio:
			'Katarzyna Kuś is an assistant professor at the Faculty of Philosophy at the University of Warsaw and the head of the Laboratory of Experimental Philosophy “KogniLab.” Her scientific interests include metaphilosophy, experimental philosophy, and philosophy of science. She has experience in empirical research in philosophy, psychology, and linguistics.',
		motif: 'profile-signal',
		links: [
			{
				label: 'Google Scholar',
				href: 'https://scholar.google.com/citations?user=cg8RKX4AAAAJ',
				external: true,
			},
			{ label: 'ORCID', href: 'https://orcid.org/0000-0002-1112-766X', external: true },
		],
	},
	{
		name: 'Joanna Gęgotek',
		badge: 'Co-Investigator',
		subtitle: 'Assistant professor, Faculty of Philosophy, University of Warsaw',
		bio:
			'Joanna Gęgotek is an assistant professor at the Faculty of Philosophy at the University of Warsaw. Her area of interest includes philosophy of science and analytic epistemology.',
		motif: 'profile-orbit',
		image: joannaPortrait,
		imageFit: 'cover',
		links: [{ label: 'ORCID', href: 'https://orcid.org/0000-0003-3028-0616', external: true }],
	},
	{
		name: 'Monika Gurak',
		subtitle:
			'Master’s student in Cognitive Science and French Studies, University of Warsaw',
		bio:
			'Monika Gurak is a master’s student in Cognitive Science and French Studies at the University of Warsaw. She is interested in interdisciplinary linguistics.',
		motif: 'profile-lattice',
		image: monikaPortrait,
		imageFit: 'cover',
		links: [],
	},
];

export const milestonesPage = {
	eyebrow: 'Milestones',
	motif: 'milestones' as const,
	title: 'Milestones',
	lede:
		'The project includes theoretical work on meta-analysis, selected meta-analyses, a study on reporting standards, and methodological guidelines for the field.',
	details: [
		{ label: 'Start', value: 'Q4 2024' },
		{ label: 'Current horizon', value: 'Q4 2028' },
		{ label: 'Main tracks', value: 'meta-analysis, meta-research, guidance' },
	],
};

export const milestones: Milestone[] = [
	{
		quarter: 'Q4',
		year: 2024,
		title: 'Start of the project',
		paragraphs: [
			'The project started with the following team: Bartosz Maćkiewicz, Ph.D. (Principal Investigator), Katarzyna Kuś, and Joanna Gęgotek (Co-Investigators).',
		],
	},
	{
		quarter: 'Q2',
		year: 2026,
		title: 'Research article on benefits of meta-analysis in experimental philosophy',
		paragraphs: [
			'Meta-analysis has widely accepted benefits for empirical research: it can establish whether an effect is present more reliably than vote-counting reviews, detect publication bias and p-hacking, estimate effect sizes across studies, and identify important study-level covariates through meta-regression.',
			'The philosophical question is what those benefits mean for experimental philosophy. The project treats meta-analysis not only as a tool for settling empirical controversies, but as a way of studying the stability and universality of intuitions, both of which matter for assessing the evidential role of intuitions in analytic philosophy.',
		],
	},
	{
		quarter: 'Q4',
		year: 2026,
		title: 'Research article reporting the first meta-analysis: contextualism vs. relativism',
		paragraphs: [
			'Several experimental studies investigate whether context affects the content of natural-language expressions and whether contextualism or relativism gives the better account of that sensitivity. The debate covers epistemic terms, predicates of personal taste, epistemic modality, and aesthetic or moral evaluation.',
			'Existing studies vary across languages, response scales, stimuli, and task formats. Those are exactly the kinds of study-level covariates that can be modeled through meta-analysis to clarify where the apparent disagreement comes from.',
		],
	},
	{
		quarter: 'Q4',
		year: 2027,
		title: 'Research article on compliance with reporting standards',
		paragraphs: [
			'One of the most common reasons meta-analysis becomes impossible is that published papers do not report the effect-size information, raw data, or descriptive statistics needed for secondary analysis. Missing methodological detail can also make critical study-level covariates impossible to model.',
			'The project therefore includes a dedicated meta-research study on statistical and methodological reporting in experimental philosophy, tailored to the characteristic designs and practices of the field.',
		],
		list: [
			'To what extent do papers consistently report statistics about effect sizes?',
			'To what extent do papers include the descriptive statistics needed to compute effect sizes and their variance?',
			'To what extent do papers report sample structure, recruitment, timing, and study language?',
			'To what extent do papers report enough procedural detail about prompts, scales, and design choices?',
			'How prevalent is public sharing of raw data?',
			'Does reporting quality improve over time?',
			'Do journals differ systematically in reporting quality?',
		],
	},
	{
		quarter: 'Q4',
		year: 2027,
		title: 'Second meta-analysis: moral considerations, typicality, and causation judgments',
		paragraphs: [
			'This line of work begins with studies on how moral judgment affects the application of concepts such as intentional action, knowledge, or cause. The research tradition includes the original Knobe and Fraser findings, follow-up work on atypicality, and later studies manipulating norms, design, prompts, and different kinds of causal structures.',
			'Because the literature is broad and methodologically heterogeneous, a meta-analytic model can estimate which features of the experimental setup actually drive the observed effect sizes.',
		],
	},
	{
		quarter: 'Q4',
		year: 2028,
		title: 'Third meta-analysis: folk concept of pain',
		paragraphs: [
			'The twentieth-century philosophical theory of pain is strongly tied to the mental or introspective view, which treats pain as a paradigmatic private mental state. Competing work argues for a bodily or perceptual view, according to which people treat pains as properties of bodily states and bodily locations.',
			'Recent empirical studies have challenged both sides, but many of them rely on small or demographically narrow samples, often restricted to English speakers. Meta-analysis creates a way to test whether those sampling and language factors matter for the apparent pattern of results.',
		],
	},
	{
		quarter: 'Q4',
		year: 2028,
		title: 'Guidelines for meta-analysis and reporting in experimental philosophy',
		paragraphs: [
			'The final deliverable is a pair of methodological guideline sets aimed at improving transparency and making future secondary research easier.',
			'The first set focuses on best practices for reporting empirical studies in experimental philosophy. The second set focuses on how to conduct and interpret meta-analyses for the kinds of questions that matter most in the field.',
		],
		list: [
			'Which questions in experimental philosophy are especially suitable for a meta-analytical approach.',
			'Which recurring forms of experimental variation should be treated as moderators in meta-analytic models.',
			'Which statistical techniques are most useful for experimental philosophers and how their results should be interpreted.',
		],
	},
];

export const resourcesPage = {
	eyebrow: 'Resources',
	motif: 'resources' as const,
	title: 'Resources',
	lede: 'Standalone project resources that are not tied to a single paper, talk, or poster.',
};

export const blogPage = {
	eyebrow: 'Blog',
	motif: 'blog' as const,
	title: 'Blog',
	lede: 'Project news, updates, and related materials.',
	details: [
		{ label: 'Posts', value: '1 published news item' },
		{ label: 'Conference page', value: '1' },
		{ label: 'Latest update', value: 'October 1, 2024' },
	],
};

export const blogEntries = [
	{
		title: 'Project has started!',
		date: '2024-10-01',
		displayDate: 'October 1, 2024',
		href: '/project-has-started/',
		excerpt:
			'We are excited to announce the launch of our project. Throughout its duration, we will keep you informed with regular updates on our progress, including new publications, tools, and resources.',
	},
	{
		title: 'Is Experimental Philosophy Ready for Meta-Analyses?',
		date: '2025-09-01',
		displayDate: 'September 1, 2025',
		href: '/espp2025/',
		excerpt:
			'Companion page for the ESPP 2025 poster, with the poster PDF, project links, and the research team.',
	},
];

export const collaborationPage = {
	eyebrow: 'Collaboration',
	motif: 'collaboration' as const,
	title: 'Collaboration',
	lede:
		'If you are interested in conducting a meta-analysis on a topic related to experimental philosophy or utilizing our resources, please feel free to reach out to us.',
	details: [
		{ label: 'Open to', value: 'research groups and individual scholars' },
		{ label: 'Modes', value: 'joint meta-analysis, resource reuse, new subprojects' },
		{ label: 'Primary contact', value: 'xphimeta@uw.edu.pl' },
	],
	paragraphs: [
		'We welcome collaboration with various groups and individuals. We are also open to contributions to existing projects and to the initiation of new subprojects within the scope of the grant.',
	],
	opportunities: [
		'Conduct a meta-analysis on a topic related to experimental philosophy.',
		'Use project resources such as tools, data, or inventories.',
		'Contribute to an existing project or propose a new subproject within the scope of the grant.',
	],
	contacts: [
		{ label: 'Project e-mail', value: 'xphimeta@uw.edu.pl', href: 'mailto:xphimeta@uw.edu.pl' },
		{
			label: 'Principal Investigator',
			value: 'b.mackiewicz@uw.edu.pl',
			href: 'mailto:b.mackiewicz@uw.edu.pl',
		},
	],
};

export const startPost = {
	eyebrow: 'News',
	motif: 'update' as const,
	title: 'Project has started!',
	date: 'October 1, 2024',
	lede: 'We are excited to announce the launch of our project.',
	paragraphs: [
		'Throughout its duration, we will keep you informed with regular updates on our progress, including new publications, tools, and resources. Stay tuned for more information.',
	],
};

export const esppPage: ConferenceCompanionPage = {
	eyebrow: 'ESPP 2025',
	title: 'Is Experimental Philosophy Ready for Meta-Analyses?',
	lede:
		'Poster presented at ESPP 2025 on reporting quality in experimental philosophy and its consequences for future meta-analyses.',
	introParagraphs: [
		'The poster introduces the X-PHI Transparency & Quality of Reporting Inventory, a coding tool with about 100 questions covering transparency, theoretical background, methods, results, and conclusions.',
		'It reports on a stratified sample of 400 papers drawn from PhilPapers (2007-2024) and asks whether experimental philosophy currently reports enough detail for replication, data reuse, and meta-analysis.',
	],
	primaryActions: [
		{ label: 'Open poster PDF', href: '/files/poster-espp-meta-v4.pdf' },
		{ label: 'Download poster', href: '/files/poster-espp-meta-v4.pdf', download: true },
	],
	asideTitle: 'Project resources',
	asideLinks: [
		{
			title: tqriResource.title,
			description: tqriResource.description,
			href: tqriResource.href,
		},
	],
	teamEyebrow: 'Research team',
	teamTitle: 'Research team',
	team: [
		'Bartosz Maćkiewicz',
		'Katarzyna Kuś',
		'Joanna Gęgotek',
		'Monika Gurak',
		'Franciszek Kittel',
	],
	supportEyebrow: 'X-PHI TQRI',
	supportTitle: 'Interactive access credentials',
	supportParagraphs: [
		'Use the username espp2025 and the password espp2025 to explore the interactive inventory.',
		'Questions, feedback, and collaboration: b.mackiewicz@uw.edu.pl.',
	],
	supportActions: [{ label: 'Open resource page', href: tqriResource.href }],
};

export const tqriResourcePage: ResourceCompanionPage = {
	eyebrow: 'Resource',
	title: tqriResource.title,
	lede:
		'Field-specific inventory for assessing whether experimental philosophy papers report the information needed for replicability, reproducibility, interpretability, generalizability, and meta-analysis.',
	introParagraphs: [
		'Experimental philosophy does not yet have reporting standards comparable to those used in fields such as medicine, psychology, or neuroscience. The X-PHI TQRI was developed to make reporting quality in the field visible, comparable, and open to systematic assessment.',
		'Within the project, the inventory is being used in a large-scale survey study of papers sampled from PhilPapers, while the explorer provides a public view of the coded results by section of the inventory and by individual question.',
	],
	primaryActions: [
		{ label: 'Open inventory', href: 'https://metacoder.kognilab.pl/', external: true },
		{ label: 'Open result explorer', href: 'https://metaexplorer.kognilab.pl/', external: true },
	],
	asideTitle: 'Project records and code',
	asideLinks: [
		{
			title: 'OSF project record',
			description:
				'Public OSF project for the survey study on transparency and quality of reporting in experimental philosophy.',
			href: 'https://osf.io/3rdxh/',
			external: true,
		},
		{
			title: 'OSF pre-registration',
			description:
				'Public preregistration describing the study questions, sampling procedure, coding plan, and analyses.',
			href: 'https://osf.io/czsme/',
			external: true,
		},
		{
			title: 'GitHub repository',
			description: 'Repository for the survey study, including sampling, prescreening, and inventory materials.',
			href: 'https://github.com/PanBartosz/XPHI_Transparency_and_quality_of_reporting',
			external: true,
		},
	],
	previewEyebrow: 'Tool preview',
	previewTitle: 'Inventory and explorer',
	previews: [
		{
			title: 'Inventory interface',
			caption:
				'Logged-in view of the example paper, showing how the inventory is organized into sections and item-level coding criteria.',
			image: tqriInventoryPreview,
			alt: 'Logged-in view of the X-PHI Transparency and Quality of Reporting Inventory showing the example paper and the transparency section.',
		},
		{
			title: 'Explorer dashboard',
			caption:
				'The explorer visualizes coded results and lets users inspect patterns by inventory part and by individual question.',
			image: tqriExplorerPreview,
			alt: 'Dashboard view of the Metacoder Explorer with tabs and reporting-quality visualizations.',
		},
	],
	detailEyebrow: 'Inventory and explorer',
	detailTitle: 'What you can access here',
	detailList: [
		'An inventory with roughly 100 questions covering transparency, theoretical background, methods, results, and conclusions.',
		'Coding criteria designed to track whether papers report the information needed for replication, data reuse, and meta-analysis.',
		'An explorer for reviewing the coded material by inventory section and by individual item.',
		'Linked OSF and GitHub records documenting the study design, repository structure, and project materials.',
	],
	supportEyebrow: 'Related output',
	supportTitle: 'ESPP 2025 poster',
	supportParagraphs: [
		'The inventory is discussed in the ESPP 2025 poster on whether experimental philosophy is ready for meta-analyses.',
	],
	supportActions: [{ label: 'Open conference page', href: '/espp2025/' }],
};
