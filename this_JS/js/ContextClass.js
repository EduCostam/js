// context class

class Alo {
    constructor() {
        this.hello = "Olá";
    }

   sayHello() {
    console.log(this.hello);
   } 
}

const hello = new Alo();

hello.sayHello();