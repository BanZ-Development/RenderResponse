function newResponse(question, answer, response, displayQuestion) {
    let respTypes = ['list', 'embedLink', 'link', 'par', 'linkList', 'img'];
    
    if(typeof question == 'object') {
        console.warn('object is being used');
        const quest = question[0];
        const answ = question[1];
        const respo = question[2];
        const display = question[3];
        var notResp = 0;
        for (i=0; i < respTypes.length;i++) {
            if(question[2] == respTypes[i]) {
                var type = i;
                console.table({question: typeof quest, answer: typeof answ, response: respo});
                renderResult(type, answ, quest, display);
            } else {
                notResp = notResp + 1
            }
        }
        if(notResp == respTypes.length) {
            console.error('Invalid response type')
        }
    } else if (typeof question != 'string' && typeof response != 'string') {
        console.error('Question/response needs to be a string or object');
    } else {
            let respTypes = ['list', 'embedLink', 'link', 'par', 'linkList', 'img'];
            var notResp = 0
            for (i=0; i < respTypes.length;i++) {
                if(response == respTypes[i]) {
                    console.log('success');
                    var type = i;
                    renderResult(type, answer, question, displayQuestion);
                } else {
                    notResp = notResp + 1
                }
            }
            if(notResp == respTypes.length) {
                console.error('Invalid response type');
            } else {
                if (typeof answer == 'number') { //single number answer
                    console.log('single number answer');
                } else if (typeof answer == 'string') { //single string answer
                    console.log('single string answer');
                } else if (typeof answer == 'object') { //multiple answers
                    const possiblities = answer.length;
                    console.log('multiple possible answers:', possiblities);
                } else if (typeof answer == 'boolean') { //true or false answer
                    console.log('true or false answer');
                }
                console.table({question: typeof question, answer: typeof answer, responseType: response});
            }
    }
}

function renderResult(type, answer, quest, display) {
    console.log('rendering');
    let list = document.createElement('ul');
    let link = document.createElement('a');
    let par = document.createElement('p');
    let img = document.createElement('img');
    let container = document.getElementById('container');
    if (display == true) {
        const question = document.createElement('p');
        const questContent = document.createTextNode(quest);
        question.appendChild(questContent);
        container.appendChild(question);
    }
    switch(type) {
        case 0: //list
        if (typeof answer == 'object') {
            for (i=0; i < answer.length; i++) {
                const listItem = document.createElement('li');
                const listContent = document.createTextNode(answer[i]);
                listItem.appendChild(listContent);
                list.appendChild(listItem);
            }
        } else {
            const listItem = document.createElement('li');
            const listContent = document.createTextNode(answer);
            listItem.appendChild(listContent);
            list.appendChild(listItem);
        }
        container.appendChild(list);
        break;
        case 1: //embedlink
            if (answer.length > 3) {
                console.error('Invalid answer length, linkembed format:"question, [text, linkname, link]"')
            } else {
            const text = document.createTextNode(answer[0]);
            const linkName = document.createTextNode(answer[1]);
            link.appendChild(linkName);
            link.setAttribute('href', answer[2]);
            par.appendChild(text);
            par.appendChild(link);
            container.appendChild(par);
            }
        break;
        case 2: //link
        const linkName = document.createTextNode(answer[0]);
        link.appendChild(linkName);
        link.setAttribute('href', answer[1]);
        container.appendChild(link);
        break;
        case 3: //paragraph
        if (typeof answer == 'object') {
            if (answer.length == 1) {
                const text = document.createTextNode(answer[0]);
                par.appendChild(text);
                container.appendChild(par);
            } else {
                console.error('Type: "par"; requires only one argument');
            }
        } else {
            const text = document.createTextNode(answer);
            par.appendChild(text);
            container.appendChild(par); 
        }
        break;
        case 4: //linklist
        let currentlinks = document.querySelectorAll('.list-item').length;
        let hrefs = [];
        let item = document.getElementsByClassName('list-item');
        for (i=0; i < answer.length;i++) {
            if (i % 2 == 0) {
                const listItem = document.createElement('li');
                const listlink = document.createElement('a');
                const linkContent = document.createTextNode(answer[i]);
                listlink.appendChild(linkContent);
                listlink.setAttribute('class', 'list-item');
                listItem.appendChild(listlink);
                list.appendChild(listItem);
            } else {
                hrefs.push(i);
            }
        }
        container.appendChild(list);
        for (x=0; x < hrefs.length;x++) {
            document.getElementsByClassName('list-item')[x + currentlinks].setAttribute('href', answer[hrefs[x]]);
        }
        break;
        case 5:
        if (typeof answer == 'object') {
            let imgTitle = document.createElement('h3');
            let titleContent = document.createTextNode(answer[0]);
            imgTitle.appendChild(titleContent);
            img.setAttribute('src', answer[1]);
            img.setAttribute('id', answer[2]);
            container.appendChild(img);
            container.appendChild(imgTitle);
        } else {
            console.error('Image type requires an array; Format:"img-title, src, newID"');
        }
        break;
    }
}