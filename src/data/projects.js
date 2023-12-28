// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Business Insider',
		category: 'Software Engineer III',
		img: require('@/assets/images/web-project-2.jpg'),
	},
	{
		id: 2,
		title: 'Digital Photo Illustrations',
		category: 'Design',
		img: require('@/assets/images/mobile-project-2.jpg'),
	},
	{
		id: 3,
		title: 'Markid',
		category: 'Product Design',
		img: require('@/assets/images/ui-project-1.jpg'),
	},
	{
		id: 4,
		title: 'Fiserv',
		category: 'UI/UX Design',
		img: require('@/assets/images/ui-project-2.jpg'),
	},
	{
		id: 5,
		title: 'TBA',
		category: 'TBA',
		img: require('@/assets/images/mobile-project-1.jpg'),
	},
	{
		id: 6,
		title: 'TBA',
		category: 'TBA',
		img: require('@/assets/images/web-project-1.jpg'),
	},
];

export default projects;
