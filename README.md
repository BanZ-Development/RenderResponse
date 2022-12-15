# Render Response

RenderResponse is a open source vanilla javascript library that gives you tools to render things like a list, paragraph, embedded paragraph link, and link lists. 

#### Created by Lucky
[Lucky's GitHub](https://github.com/Raidlucky) |
[Contact Lucky](https://raidlucky.github.io/Projects/)

### Installation

[Download](https://github.com/BanZ-Development/RenderResponse/blob/main/main.js) |
[CDN]()

## Documentation

### Syntax
You can create an variable with an array of the info you want to display or use the functions parameters
```js
 newResponse(['question', ['response'], 'type', display]);
```

### Display
- true - displays the question
- false

### Types
- list - simple list for multiple responses
- embedLink - embedded link inside of p element
- link - simple link with name
- par - simple paragraph
- linkList - list of links with names

### Response
Whatever you want it to send back in the formatted form

### Question
What the formatted response is answering
This can be displayed using the display argument, by typing true the question will be shown with the response

### List
```js
//using parameters
newResponse('What does math class sound like?', ['blah', 'blah', 'blah'], 'list', true);
//using variables
let response = ['What does math class sound like?', ['blah', 'blah', 'blah'], 'list', true];
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
newResponse(['Question', ['text', 'linkTitle', 'url' ], 'embedLink', display]);
//real example
newResponse(['Wheres my shoes?', ['You can find my shoes', 'here', 'https://youtube.com'], 'embedLink', true]);
```

#### Result:

Wheres my shoes?
You can find my shoes [here](https://youtube.com)

### Link
```js
//syntax
newResponse('question', ['linkTitle', 'url'], 'link', true)
//example
newResponse('Wheres my supersuit?', ['Supersuit', 'https://youtube.com'], 'link', true)
```

#### Result:

Wheres my supersuit?
[supersuit](https://youtube.com)

### Paragraph
takes only one argument in answers

```js
//syntax
newResponse('question', 'response', 'par', true)
//example
newResponse('Wheres my supersuit?', 'Probably downstairs, did you check the pantry?', 'par', true)
```

#### Result:

Wheres my supersuit?
Probably downstairs, did you check the pantry?

### Link List
```js
//syntax
newResponse('question', ['linkname', 'url', 'linkname', 'url'], 'linkList', true)
//example
newResponse('I need some good websites', ['YouTube', 'https://youtube.com', 'Google', 'https://google.com'], 'linkList', true)
```

#### Result:

I need some good websites
- [YouTube](https://youtube.com)
- [Google](https://google.com)