// function.call(this, arg1, arg2)
// call
// retornar o this do contexto que eu enviar.

this.name = "Camila";
this.age = 25;

function sayMyName(age) {
    this.age = age;
    console.log(this.name, this.age);
}

const dev = {
    name: "Isabela",
    age: 35,
    sayMyAge: function() {
        console.log(this.name, this.age);
    }
};

// bind = ligar
// retorna a função chamada porém, ligada ao contexto que lhe foi passado.
// bound function

const age = dev.sayMyAge.bind(this);

age();

const boundSayMyName = sayMyName.bind(dev)
boundSayMyName(19);


sayMyName.call(this, 18);
sayMyName.call(dev, 19);

console.log(this.age);
console.log(dev.age);

// functiion.apply(this, [arg1, arg2])
// retorna o this do contexto que eu enviar.

sayMyName.apply(this, [18])

console.log(this.age);

function multiply() {
    const args = Array.from(arguments);
    return args.reduce((acc, item) => {
        return acc * item;
    } , 1)
}

const total = multiply.apply(this, [2, 2, 3, 2]);
console.log(total);