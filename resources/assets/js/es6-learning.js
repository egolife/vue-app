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

class TaskCollectionBasic {
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

new TaskCollectionBasic([new Task, new Task, new Task]).log().prepare();

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

function getPerson() {
    let name = 'John';
    let age = 25;

    return {name, age};
}

console.log(getPerson());

let person = {
    name: 'Karen',
    age: 32
};

let {name, age} = person;

console.log(name, age);

function getData({name, age}) {
    console.log(name, age);
}

getData({
    name: 'Tom',
    surname: 'Soyer',
    age: 18
});

class User {

    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    changeEmail(newEmail) {
        this.email = newEmail;
    }

    static register(...args) {
        return new User(...args);
    }

    get foo() {
        return `${this.email} foo`;
    }

    set foo(arg) {
        this.email = arg.slice(1);
        console.log(this.email);
    }
}

let user = new User('Test User', 'egor@mal.cmo');
user.changeEmail('newEmail@test.com');

let user2 = User.register('Static call to class', 'email@mai.com');
console.dir(user);
console.dir(user2);
console.log(user2.foo);
user2.foo = 'newEmail@me.ru';


import{TaskCollection, foo} from './TaskCollection';
import Ttt from './DefaultExample';
import Www from './SeparateExport';

new TaskCollection(['see', 'call', 'trust']).dump();
console.log(foo);
new Ttt(['see2', 'call2', 'trust2']).dump();
new Www(['me2', 'get2', 'lust2']).dump();

let timer = new Promise((resolve, reject) => {
    console.log('Init promise');

    setTimeout(function () {
        console.log('Timeout done.');
        resolve(3);
    }, 3000);

    // resolve();
    // reject();
});

timer.then(() => console.log('after the timer'));
