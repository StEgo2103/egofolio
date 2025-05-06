const projects = [
	{
		name: 'Reepair',
		tag: 'projectsTagProfessional',
		technologies: ['Flutter'],
		website: 'https://reepair.com',
		github: '',
		backgroundColour: '#2f2b6c',
		textColour: '#ffffff',
		description: 'projectsDescriptionReepair'
	},
	{
		name: 'The Optimum Prod',
		tag: 'projectsTagProfessional',
		technologies: ['Flutter'],
		website: 'https://theoptimumprod.ch',
		github: '',
		backgroundColour: '#68c083',
		textColour: '#141416',
		description: 'projectsDescriptionTOP'
	},
	{
		name: 'Savy',
		tag: 'projectsTagSchool',
		technologies: ['Swift', 'SwiftUI', 'Svelte', 'SvelteKit', 'TailwindCSS', 'Netlify'],
		website: 'https://savy-eip.netlify.app',
		github: 'https://github.com/Savy-EIP',
		backgroundColour: '#9149f6',
		textColour: '#ffffff',
		description: 'projectsDescriptionSavy'
	},
	{
		name: 'Maker',
		tag: 'projectsTagSchool',
		technologies: ['Flutter'],
		website: '',
		github: 'https://github.com/UwUClub/AwARea',
		backgroundColour: '#da535e',
		textColour: '#e1e1e1',
		description: 'projectsDescriptionMaker'
	},
	{
		name: 'Egofolio',
		tag: 'projectsTagPersonal',
		technologies: ['Svelte', 'SvelteKit', 'TailwindCSS', 'Netlify'],
		website: 'https://deltort.net',
		github: 'https://github.com/StEgo2103/egofolio',
		backgroundColour: '#102ea0',
		textColour: '#ffffff',
		description: 'projectsDescriptionEgofolio'
	},
	{
		name: 'Qui de nous ?',
		tag: 'projectsTagPersonal',
		technologies: ['Svelte', 'SvelteKit', 'Charts.js', 'TailwindCSS', 'Netlify'],
		website: 'https://who-among-us.deltort.net',
		github: 'https://github.com/StEgo2103/who-among-us',
		backgroundColour: '#ecf3f9',
		textColour: '#578fc9',
		description: 'projectsDescriptionWAU'
	}
];

class Project {
	name: string;
	tag: string;
	technologies: string[];
	website: string;
	github: string;
	backgroundColour: string;
	textColour: string;
	description: string;

	constructor(
		name: string,
		tag: string,
		technologies: string[],
		website: string,
		github: string,
		backgroundColour: string,
		textColour: string,
		description: string
	) {
		this.name = name;
		this.tag = tag;
		this.technologies = technologies;
		this.website = website;
		this.github = github;
		this.backgroundColour = backgroundColour;
		this.textColour = textColour;
		this.description = description;
	}
}

const listProjects = projects.map(
	(project) =>
		new Project(
			project.name,
			project.tag,
			project.technologies,
			project.website,
			project.github,
			project.backgroundColour,
			project.textColour,
			project.description
		)
);

export { Project, listProjects };
