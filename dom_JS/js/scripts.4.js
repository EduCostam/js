// inserir  o elemento no body
var novoParagrado = document.createElement("p");

var texto = document.createTextNode("Este é o conteúdo do parágrafo");

novoParagrado.appendChild(texto);

console.log(novoParagrado);

var body = document.querySelector("body");
console.log(body);

body.appendChild(novoParagrado);

// inserir um container
var container = document.getElementById("container");
console.log(container);

var el = document.createElement("span");
el.appendChild(document.createTextNode("texto do span"));
console.log(el);

container.appendChild(el);
