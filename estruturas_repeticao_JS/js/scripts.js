var x = 0;

while(x < 5) {

    console.log("Testanto repetição " + x);

    // incrementador
    x++;

}

var arr = ['teste', 'testando', 'a', 'b'];
var y = 0;

while(y <= 3) {
    console.log(arr[y]);

    y++;
}

var palavra = "Eduardo";
var i = 0;

while(i <= 7) {

    console.log(palavra[i]);

    i += 1;
}

for(var i = 0; i < 10; i++) {

    console.log("Repetindo for: " + i);

}

var arr = [1,2,3,4];

for(var j =0; j < arr.length; j++) {
    console.log(arr[j]);
}

console.log(arr.length);

for(var x = 5; x < 100; x *= 3) {
    console.log(x);
}