// Write your code here!
let e = document.getElementById('main');
e.remove();

const newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerHTML= "YOUR-NAME is the champion";
document.body.appendChild(newHeader);