# Конвертирование json в html

Данный пакет преобразовывает json в html. Готовый HTML отлично подходит для html-email

#### Важно!

Для правильной работы пакета в вашем проекте должен быть установлен pug - 
[Ссылка на pug](https://pugjs.org/api/getting-started.html)

#### Пример входного JSON

```json
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
- `tag`  html тэг
- `content` - контент внутри html тега
- `styles` - маиссив стилей для данного html тега содержит в себе объекты в формате ключ значение (key => value), где key название css свойства, value - значение
- `childs` - массив дочерних тегов. По структуре аналогичны родительскому

#### Пример возвращаемого html

`<p style="color:red;background:green;">Hello world<span style="color:blue;">this is span</span></p>`

#### Пример реализации

```js
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
