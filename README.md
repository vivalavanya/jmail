# Конвертирование json в html письма

Данный пакет позволяет преобразовать json в html для email сообщений

#### Важно!

Для правильной работы пакеты в вашем проекте должен быть установлен pug
[Ссылка на pug](https://pugjs.org/api/getting-started.html)

#### Пример входного JSON

```
[
		{
			"tag": "p",
			"content": "Hello world",
			"styles": [
				{
					"key": "color",
					"value": "red"
				},
				{
					"key": "background",
					"value": "green"
				}
			],
			"childs": [
				{
					"tag": "span",
					"content": "this is span",
					"styles": [
						{
							"key": "color",
							"value": "blue"
						}
					]
				}
			]
		}
	]
```

#### Пример возвращаемого html

`<p style="color:red;background:green;">Hello world<span style="color:blue;">this is span</span></p>`

#### Пример реализации

```
const { JMail } = require('jmail');

const jm = new JMail();
const mock = [
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

jm.toHtml(mock).then((result) => {
	console.log(result);
});

```
