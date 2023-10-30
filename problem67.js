// Q:  Create a button and show a message by clicking on it using event listener in Javascript.



const button = document.createElement('button');
button.textContent = 'Click me';

button.addEventListener('click', () => console.log('Button clicked!'));

document.body.appendChild(button);
