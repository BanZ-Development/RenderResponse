function check() {
let message = document.getElementById('input-msg').value.toLowerCase();
let container = document.getElementById('msg-container');
let msg = document.createElement('p');
msg.setAttribute('id', 'msg');
let webQuestion = ['how', 'password', 'username', 'points',]
let question = ['why', 'are', 'is']
let contact = ['phone', 'email', 'owner', 'typo', 'research', 'inaccurate', 'problem', 'contact', 'help']

for (i=0; i < contact.length; i++) {
    if (message.includes(webQuestion[i])) {
        console.log('webQuestion');
        if (webQuestion[i] == 'username' || webQuestion[i] == 'how' || webQuestion[i] == 'password') {
        const msgText = document.createTextNode('visit the settings page or forgot password page');
        msg.appendChild(msgText);
        container.appendChild(msg);
        summonOptions(1);
        } else if (webQuestion[i] == 'points') {
        const msgText = document.createTextNode('visit the settings page or learn how points work?');
        msg.appendChild(msgText);
        container.appendChild(msg);
        summonOptions(2);
        }
        
    } else if (message.includes(question[i])) {
        console.log('question');
        const msgText = document.createTextNode('Got a Nutrition related question? ');
        msg.appendChild(msgText);
        container.appendChild(msg);
    } else if (message.includes(contact[i])) {
        console.log('contact');
        const msgText = document.createTextNode('Got a Problem? Reach out to us on Email: someone@gmail.com, Phone: 630-330-3230, BanZ-Development ');
        msg.appendChild(msgText);
        container.appendChild(msg);
    }
}


}

function summonOptions(settings) {
    if (settings == 1) {
        console.log('working')
        let links = ['https://youtube.com', 'https://github.com'];
        let labels = ['Settings', 'Forgot Password'];
        let list = document.createElement('ul');
        let container = document.getElementById('msg-container');
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
    } else if (settings == 2) {
    let container = document.getElementById('msg-container');
    
    const link = document.createElement('a');
    link.innerHTML = 'Settings';
    link.setAttribute('href', 'https://youtube.com');
    const explain = document.createElement('p')
    explain.innerHTML = 'points are added based on how many times you hit your weight goal or get closer to it'
    container.appendChild(link);
    container.appendChild(explain);
} 
}