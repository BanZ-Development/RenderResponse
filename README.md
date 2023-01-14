# Render Response

RenderResponse is a open source vanilla javascript library that gives you tools to render things/create elements like a list, paragraph, embedded paragraph link, and link lists. **Uses JavaScript ES6** 

#### Created by Lucky
[Lucky's GitHub](https://github.com/Raidlucky) |
[Contact Lucky](https://raidlucky.github.io/Projects/)

### Installation

[Download](https://github.com/BanZ-Development/RenderResponse/releases/) |
[CDN](https://banz-development.github.io/RenderResponse/response.min.js)

# Documentation

### Syntax
You can create an variable with an array of the info you want to display or use the functions parameters.
```js
 newResponse(['question', ['response'], 'type', display, 'containerId']);
```

### Display
- true - displays the question
- false - doesn't display the question

### Types
- list - simple list for multiple responses
- embedLink - embedded link inside of p element
- link - simple link with name
- par - simple paragraph
- linkList - list of links with names
### Container ID
The id of a div or somewhere where you want to insert the response.

### Response
Whatever you want it to send back in the formatted form.

### Question
What the formatted response is answering
This can be displayed using the display argument, by typing true the question will be shown with the response.

### List
```js
//using parameters
newResponse('What does math class sound like?', ['blah', 'blah', 'blah'], 'list', true, 'containerId');
//using variables
let response = ['What does math class sound like?', ['blah', 'blah', 'blah'], 'list', true, 'container'];
newResponse(response);

```

#### Result:

What does math class sound like?
1. blah
2. blah
3. blah

### Embed Link
```js
//syntax example
newResponse(['Question', ['text', 'linkTitle', 'url' ], 'embedLink', display, 'containerId']);
//real example
newResponse(['Wheres my shoes?', ['You can find my shoes', 'here', 'https://youtube.com'], 'embedLink', true, 'container']);
```

#### Result:

Wheres my shoes?
You can find my shoes [here](https://youtube.com)

### Link
```js
//syntax
newResponse('question', ['linkTitle', 'url'], 'link', true, 'containerId');
//example
newResponse('Wheres my supersuit?', ['Supersuit', 'https://youtube.com'], 'link', true, 'container');
```

#### Result:

Wheres my supersuit?
[supersuit](https://youtube.com)

### Paragraph
takes only one argument in answers

```js
//syntax
newResponse('question', 'response', 'par', true, 'containerId');
//example
newResponse('Wheres my supersuit?', 'Probably downstairs, did you check the pantry?', 'par', true, 'container');
```

#### Result:

Wheres my supersuit?
Probably downstairs, did you check the pantry?

### Link List
```js
//syntax
newResponse('question', ['linkname', 'url', 'linkname', 'url'], 'linkList', true, 'containerId');
//example
newResponse('I need some good websites', ['YouTube', 'https://youtube.com', 'Google', 'https://google.com'], 'linkList', true, 'container');
```

#### Result:

I need some good websites
- [YouTube](https://youtube.com)
- [Google](https://google.com)

### Image
You can use the customID to give it an id you want use to customize or us js to manipulate
The customID **doesn't** have to be a pre-existing ID
```js
//syntax
newResponse('question', ['img-title', 'src', 'customID'], 'img', display, 'containerId');
//example
newResponse('What does a dolphin look like?', ['Dolphin', 'images/dolphin.jpg', 'dolphin-img'], 'img', true, 'container');
```

#### Result:

What does a dolphin look like?
![dolphin-img](assets/images/dolphin.jpg)
dolphin


### Boolean
You can create a generated yes and no button and choose whatever function you want and it'll call that function and return with true or false. The buttons allow custom classes as well.

It's important to include the !var! as well.

Visit website for better demo

```js
//syntax
newResponse('question', ['buttonClass', 'ButtonFunction(!var!)'], 'Boolean', true, 'containerId');

//example
newResponse('Am I pretty?', ['CustomButton', 'question(!var!)'], 'Boolean', true, 'container');

//custom function example
function question(boolean) {
if (boolean == true) {
    newResponse('question', 'your so kind :)');
}
}
```


#### Result:
Do you think I'm Pretty?

yes no

You're so kind :)