function check() {
let message = document.getElementById('input-msg').value.toLowerCase();
let container = document.getElementById('container');
let msg = document.createElement('p');
msg.setAttribute('id', 'msg');
let webQuestion = ['how', 'password', 'username', 'points','why', 'are', 'is']
let question = ['carbs', 'sugar', 'plan', 'diet', 'bcaa', 'amino']
let contact = ['phone', 'email', 'owner', 'typo', 'research', 'inaccurate', 'problem', 'contact', 'help', 'team', 'message', 'discord']

for (i=0; i < contact.length; i++) {
    if (message.includes(webQuestion[i])) {
        console.log('webQuestion');
        if (webQuestion[i] == 'username' || webQuestion[i] == 'how' || webQuestion[i] == 'password') {
        const msgText = document.createTextNode('visit the settings page or forgot password page');
        msg.appendChild(msgText);
        container.appendChild(msg);
        renderResult(1);
        } else if (webQuestion[i] == 'points') {
        const msgText = document.createTextNode('visit the settings page or learn how points work?');
        msg.appendChild(msgText);
        container.appendChild(msg);
        renderResult(2);
        }
        
    } else if (message.includes(question[i])) {
        console.log('question');
        if (question[i] == 'plan') {
            const msgText = document.createTextNode('Got a Nutrition related question? ');
            msg.appendChild(msgText);
            container.appendChild(msg);
            renderResult(3);
        } else {
            const msgText = document.createTextNode('Got a Nutrition related question? ');
            msg.appendChild(msgText);
            container.appendChild(msg); 
        }
        
    } else if (message.includes(contact[i])) {
        console.log('contact');
        const msgText = document.createTextNode('Got a Problem? Reach out to us on Email: someone@gmail.com, Phone: 630-330-3230, BanZ-Development ');
        msg.appendChild(msgText);
        container.appendChild(msg);
    }
}


}

function renderResult(settings) {
    let links = ['https://youtube.com', 'https://github.com'];
    let labels = ['Settings', 'Forgot Password'];
    let list = document.createElement('ul');
    let container = document.getElementById('msg-container');
    let link = document.createElement('a');
    let explain = document.createElement('p')
    switch(settings) {
        
        case 1: //Create list for settings
            console.log('working')
            
            
            container.appendChild(list);
            
        for (i=0; i < labels.length; i++) {
            const link = document.createElement('a');
            const linkLbl = document.createTextNode(labels[i]);
            const item = document.createElement('li');
            link.appendChild(linkLbl);
            link.setAttribute('href', links[i]);
            item.appendChild(link);
            list.appendChild(item);
        }
        break;
        case 2: //create single link for settings
            
            link.innerHTML = 'Settings';
            link.setAttribute('href', 'https://youtube.com');
            explain.innerHTML = 'points are added based on how many times you hit your weight goal or get closer to it'
            container.appendChild(link);
            container.appendChild(explain);
        break;
        case 3: // learning page link
            link.innerHTML = 'Learning Page';
            link.setAttribute('href', 'https://youtube.com');
            explain.innerHTML = 'Visit our learning page'
            container.appendChild(link);
            container.appendChild(explain);
        break;
        case 4:
            link.innerHTML = 'Plans Page';
            link.setAttribute('href', 'https://youtube.com');
            explain.innerHTML = 'Visit our Plans page'
            container.appendChild(link);
            container.appendChild(explain);
        break;
    }
}