const Technology = Object.freeze({
	FLUTTER: 'flutter',
	SVELTE: 'svelte',
	SWIFT: 'swift'
});

const ForWho = Object.freeze({
	PERSONAL: 'personal',
	PROFESSIONAL: 'professional',
	SCHOOL: 'school'
});

class Project {
	name: string;
	description: string;
	url: string | null;
	github: string | null;
	technologies: string[];
	forWho: string;

	constructor(
		name: string,
		description: string,
		url: string | null,
		github: string | null,
		technologies: string[],
		forWho: string
	) {
		this.name = name;
		this.description = description;
		this.url = url;
		this.github = github;
		this.technologies = technologies;
		this.forWho = forWho;
	}
}

const projects = [
	new Project(
		'Reepair',
		'reepair',
		'https://reepair.com',
		null,
		[Technology.FLUTTER],
		ForWho.PROFESSIONAL
	),
	new Project(
		'The Optimum Prod',
		'top',
		'https://theoptimumprod.ch',
		null,
		[Technology.FLUTTER],
		ForWho.PROFESSIONAL
	),
	new Project(
		'Egofolio',
		'egofolio',
		'https://deltort.net/',
		'https://github.com/StEgo2103/egofolio',
		[Technology.SVELTE],
		ForWho.PERSONAL
	),
	new Project(
		'Savy',
		'savy',
		'https://savy-eip.netlify.app/',
		'https://github.com/Savy-EIP',
		[Technology.SWIFT],
		ForWho.SCHOOL
	),
	new Project(
		'Maker',
		'maker',
		null,
		'https://github.com/UwUClub/AwARea',
		[Technology.FLUTTER],
		ForWho.SCHOOL
	)
];

export { projects, Project, Technology, ForWho };
