function newQuestion(question, answer, response) {
    let respTypes = ['list', 'embedLink', 'link', 'par', 'linkList'];
    
    if(typeof question == 'object') {
        console.warn('object is being used');
        const quest = question[0];
        const answ = question[1];
        const respo = question[2];
        var notResp = 0;
        for (i=0; i < respTypes.length;i++) {
            if(question[2] == respTypes[i]) {
                var type = i;
                console.table({question: typeof quest, answer: typeof answ, response: respo});
                renderResult(type, answ);
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
            let respTypes = ['list', 'embedLink', 'link', 'par', 'linkList'];
            var notResp = 0
            for (i=0; i < respTypes.length;i++) {
                if(response == respTypes[i]) {
                    console.log('success')
                    var type = i;
                    renderResult(type, answer);
                } else {
                    notResp = notResp + 1
                }
            }
            if(notResp == respTypes.length) {
                console.error('Invalid response type')
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

function renderResult(type, answer) {
    console.log('rendering');
    let list = document.createElement('ul');
    let link = document.createElement('a');
    let par = document.createElement('p');
    let container = document.getElementById('container');
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
            document.getElementsByClassName('list-item')[x].setAttribute('href', answer[hrefs[x]]);
        }
        break;
    }
}