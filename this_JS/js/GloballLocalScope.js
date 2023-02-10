// global scope

this.name = "Eduardo";

function sayMyName() {
    // local scope
    console.log(this.name); // undefined
}

sayMyName();