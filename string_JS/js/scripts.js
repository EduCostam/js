var nome = "Eduardo";
var sobrenome = "Marques Costa"

var nomeCompleto = nome + " " + sobrenome;

console.log(nome);
console.log(typeof nome);

console.log(typeof "asd");

console.log(nomeCompleto);

console.log(typeof "5.2556468");

var frase = 'Esta é uma frase complexa';

console.log(frase);
console.log(typeof frase);

console.log(nome + " " + frase);

document.write('Ele disse: "Olá"');

//Concatenação
console.log("Este número: " + "432");

// lengt
var nome = "Eduardo";

console.log(nome.length);

var obj = "bola";

console.log(obj.length);

// indexOf
console.log(nome[2]);

var frase = "O rato roeu a roupa do rei de Roma";

console.log(frase.indexOf("roeu"));

// slice

var roeu = frase.slice(7, 11);

console.log(roeu);

// replace

var novaFrase = frase.replace("roeu", "teste");

console.log(novaFrase);

// toLowerCase e toUpperCase

var frase = "Esta é a frase que vamos manipular";

var fraseCaixaAlata = frase.toUpperCase();

console.log(fraseCaixaAlata);

console.log(frase.toLocaleLowerCase());

// trim

var nome = "   Eduardo   ";

var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

// split

console.log(frase.split(" "));

var tags = "PHP, JavaScript, HTML, CSS";

console.log(tags.split(", "));

// lastIndexOf

var fraseDois = "Eu quero a última palavra teste desta frase de testes";

console.log(fraseDois.indexOf("teste"));