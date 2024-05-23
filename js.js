const submitButton = document.getElementById('submit');
const list = document.getElementById('list');

submitButton.addEventListener('click', () => {
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const age = document.getElementById('age').value;
const carro = document.getElementById('carro').value;

const li = document.createElement('li');
li.textContent = `Name: ${name} Email: ${email} Age: ${age} Car: ${carro}`;
list.appendChild(li);
});