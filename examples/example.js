const { JMail } = require('../index');
const jm = new JMail();

const json = [
	{
		tag: 'p',
		content: 'Hello world',
		styles: [
			{
				key: 'color',
				value: 'red',
			},
			{
				key: 'background',
				value: 'green',
			},
		],
		childs: [
			{
				tag: 'span',
				content: 'this is span',
				styles: [
					{
						key: 'color',
						value: 'blue',
					},
				],
			},
		],
	},
	{
		tag: 'p',
		content: 'Hello world',
		styles: [
			{
				key: 'color',
				value: 'red',
			},
			{
				key: 'background',
				value: 'green',
			},
		],
		childs: [
			{
				tag: 'span',
				content: 'this is span',
				styles: [
					{
						key: 'color',
						value: 'blue',
					},
				],
			},
		],
	},
];

jm.toHtml(json).then((result) => {
	// View in console
	console.log(result);
	//  or return result
	return result;
});
