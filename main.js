function check() {
let input = document.getElementById('input-msg').value;
let container = document.getElementById('msg-container');
let msg = document.createElement('p');
msg.setAttribute('id', 'msg');
let message = input.toLowerCase();

if (message.includes('hello')) {
    const msgText = document.createTextNode('Hello there!');
    msg.appendChild(msgText);
    container.appendChild(msg);
} else if (message.includes('brandon')) {
    const msgText = document.createTextNode('Brandon a Beach, he sucks at mario tennis too');
    msg.appendChild(msgText);
    container.appendChild(msg); 
} else if (message.includes('are')) {
    const msgText = document.createTextNode('Of course');
    msg.appendChild(msgText);
    container.appendChild(msg); 
} else {
    const msgText = document.createTextNode('Whatchu you mean by ' + message);
    msg.appendChild(msgText);
    container.appendChild(msg); 
} 
}