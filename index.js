let element = document.createElement("div")
document.body.appendChild(element)

let ul = document.createElement('ul')
 
for (let i = 0; i < 3; i++) {
  let li = document.createElement('li')
  li.innerHTML = (i + 1).toString()
  ul.appendChild(li)
}
 
element.appendChild(ul)

let main = document.getElementById("main")
let body = document.querySelector("body")

body.removeChild(main)

let newHeader = document.createElement("h1")

newHeader.id = "victory"
body.appendChild(newHeader)
newHeader.innerHTML = "Sasha is the champion"