class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return this.name + ' says hello.';
    }
}

function fire(bool) {
    if (bool) {
        let foo = 'bar';
        console.log(foo);
    } else {
        // console.log(foo);
    }
}

fire(true);

const names = ['John', 'Sandy'];

names.push('susan');

// console.log(names);
// console.log(new Person('Jeffrey').greet());

class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
    }

    log() {
        this.tasks.forEach(task => console.log(task));

        return this;
    }

    prepare() {
        this.tasks.map(task => console.log(task));
    }
}

class Task {
}

new TaskCollection([new Task, new Task, new Task]).log().prepare();

let names2 = ['one', 'two', 'three', 'four'];
names2 = names2.map(name => name + ' is cool');

// console.log(names2);

function applyDiscount(cost, discount = .10) {
    return cost - (cost * discount);
}

// console.log(applyDiscount(100));


function sum(...numbers) {
    return numbers.reduce((prev, current) => prev + current);
}
let nums = [1, 2, 3];

console.log(sum(...nums));

let t_name = 'Foo22';
let template = `
    <div class="alert">
        <p>${t_name}</p>
    </div>
`.trim();

console.log(template);