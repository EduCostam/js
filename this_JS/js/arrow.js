// this na arrow function
// - pega o this do escopo anterior.

this.name = "Valeska";

const age = age => {
    const birthYear = (age) => {
        const year = 2019 - age;
        console.log(this.name, year);
    };

    birthYear(age);
};

const dev = {
    sayMyName: () => {
        this.name = "Enzo";
        console.log(this.name);
    }
};

dev.sayMyName();
console.log(this.name);

