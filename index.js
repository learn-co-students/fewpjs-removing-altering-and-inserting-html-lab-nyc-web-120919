// Write your code here!
document.querySelector('main#main').remove()
let newHeader = document.createElement('H1')
newHeader.innerHTML = 'Test is the champion'
newHeader.id = 'victory'
document.appendChild(newHeader)