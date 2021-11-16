// var elem  = document.createElement("li");
// var texto = document.createTextNode("mais um item");
// elem.appendChild(texto);


// const lista = document.getElementsByTagName("ul")[0];
// const li = lista.getElementsByTagName("li")
// const item = document.createElement('li')
// item.textContent = "Javascript";

// lista.insertBefore(item, li[0])

// console.log(lista);


// var node = document.createElement("LI");                 // Create a <li> node
// var textnode = document.createTextNode("Water");         // Create a text node
// node.appendChild(textnode);                              // Append the text to <li>
// document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"

const pai = document.getElementById("main")
let elem = document.createElement("p")
// document.getElementsByTagName("section").appendChild(elem);
pai.appendChild(elem);
elem.textContent = "Hello World!";