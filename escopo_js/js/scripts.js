/*
var x = 1;

var y = 3;

console.log(x, y);

function teste() {

    var z = 0;
    
    console.log(z);

    console.log(x);
    
}

teste();

function testando() {

    var z = 5;

    console.log(z);

}

testando();

if(true) {

    var p = 1;

}

console.log(p); */

// let e const + escopo
let x = 5; // var x = 5;

const y = 10;

x = 12;

console.log(x);

if(true) {

    let x = 20;

    console.log(x);

    const y = 50;

    console.log('const if ' + y);

}

console.log(x);

if(20 > 10) {

    const y = 100;

    console.log('const if 3 '+ y);

}

for(let x = 0; x < 10; x++) {
    console.log(x);
}