var arr = [
    10, "Eduardo", true, {teste:1,teste:2}
]; // obj => {}

console.log(arr);

var arr2 = [2,3,4,5,6];

console.log(arr2);

console.log(arr[1]);
console.log((arr2[0]));

arr[4] = 10;

arr[0] = "Teste";

console.log(arr);

console.log(typeof arr);

// lengt
var arr = [1,2,3,4,5];

console.log(arr.length);

// push
arr.push(6);
arr.push('Qualquer coisa');

console.log(arr);

// pop
arr.pop();

console.log(arr);

// unshift
arr.unshift(0);
arr.unshift('teste');

console.log(arr);

// shift
arr.shift();

console.log(arr);

// acessar o último elemento
console.log(arr[arr.length -1]);

// isArray
console.log(Array.isArray(5));

console.log(Array.isArray(arr));

// splice
var arr = [1,2,3,4,5];

arr.splice(2, 0, 999);

console.log(arr);

arr.splice(4, 1);

console.log(arr);

// indexof
console.log(arr.indexOf(5));


// join
var arr2 = ["O", "rato", "roeu", "a", "roupa"];

console.log(arr2.join(","));

// reverse
console.log(arr2.reverse());
