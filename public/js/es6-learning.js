/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TaskCollection__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DefaultExample__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SeparateExport__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person(name) {
        _classCallCheck(this, Person);

        this.name = name;
    }

    _createClass(Person, [{
        key: 'greet',
        value: function greet() {
            return this.name + ' says hello.';
        }
    }]);

    return Person;
}();

function fire(bool) {
    if (bool) {
        var _foo = 'bar';
        console.log(_foo);
    } else {
        // console.log(foo);
    }
}

fire(true);

var names = ['John', 'Sandy'];

names.push('susan');

// console.log(names);
// console.log(new Person('Jeffrey').greet());

var TaskCollectionBasic = function () {
    function TaskCollectionBasic() {
        var tasks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, TaskCollectionBasic);

        this.tasks = tasks;
    }

    _createClass(TaskCollectionBasic, [{
        key: 'log',
        value: function log() {
            this.tasks.forEach(function (task) {
                return console.log(task);
            });

            return this;
        }
    }, {
        key: 'prepare',
        value: function prepare() {
            this.tasks.map(function (task) {
                return console.log(task);
            });
        }
    }]);

    return TaskCollectionBasic;
}();

var Task = function Task() {
    _classCallCheck(this, Task);
};

new TaskCollectionBasic([new Task(), new Task(), new Task()]).log().prepare();

var names2 = ['one', 'two', 'three', 'four'];
names2 = names2.map(function (name) {
    return name + ' is cool';
});

// console.log(names2);

function applyDiscount(cost) {
    var discount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .10;

    return cost - cost * discount;
}

// console.log(applyDiscount(100));


function sum() {
    for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
        numbers[_key] = arguments[_key];
    }

    return numbers.reduce(function (prev, current) {
        return prev + current;
    });
}
var nums = [1, 2, 3];

console.log(sum.apply(undefined, nums));

var t_name = 'Foo22';
var template = ('\n    <div class="alert">\n        <p>' + t_name + '</p>\n    </div>\n').trim();

console.log(template);

function getPerson() {
    var name = 'John';
    var age = 25;

    return { name: name, age: age };
}

console.log(getPerson());

var person = {
    name: 'Karen',
    age: 32
};

var name = person.name,
    age = person.age;


console.log(name, age);

function getData(_ref) {
    var name = _ref.name,
        age = _ref.age;

    console.log(name, age);
}

getData({
    name: 'Tom',
    surname: 'Soyer',
    age: 18
});

var User = function () {
    function User(username, email) {
        _classCallCheck(this, User);

        this.username = username;
        this.email = email;
    }

    _createClass(User, [{
        key: 'changeEmail',
        value: function changeEmail(newEmail) {
            this.email = newEmail;
        }
    }, {
        key: 'foo',
        get: function get() {
            return this.email + ' foo';
        },
        set: function set(arg) {
            this.email = arg.slice(1);
            console.log(this.email);
        }
    }], [{
        key: 'register',
        value: function register() {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            return new (Function.prototype.bind.apply(User, [null].concat(args)))();
        }
    }]);

    return User;
}();

var user = new User('Test User', 'egor@mal.cmo');
user.changeEmail('newEmail@test.com');

var user2 = User.register('Static call to class', 'email@mai.com');
console.dir(user);
console.dir(user2);
console.log(user2.foo);
user2.foo = 'newEmail@me.ru';





new __WEBPACK_IMPORTED_MODULE_0__TaskCollection__["a" /* TaskCollection */](['see', 'call', 'trust']).dump();
console.log(__WEBPACK_IMPORTED_MODULE_0__TaskCollection__["b" /* foo */]);
new __WEBPACK_IMPORTED_MODULE_1__DefaultExample__["a" /* default */](['see2', 'call2', 'trust2']).dump();
new __WEBPACK_IMPORTED_MODULE_2__SeparateExport__["a" /* default */](['me2', 'get2', 'lust2']).dump();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TaskCollectionDef = function () {
    function TaskCollectionDef() {
        var tasks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, TaskCollectionDef);

        this.tasks = tasks;
    }

    _createClass(TaskCollectionDef, [{
        key: "dump",
        value: function dump() {
            console.log(this.tasks);
        }
    }]);

    return TaskCollectionDef;
}();

/* harmony default export */ __webpack_exports__["a"] = TaskCollectionDef;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TaskCollectionDef = function () {
    function TaskCollectionDef() {
        var tasks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, TaskCollectionDef);

        this.tasks = tasks;
    }

    _createClass(TaskCollectionDef, [{
        key: "dump",
        value: function dump() {
            console.log(this.tasks);
        }
    }]);

    return TaskCollectionDef;
}();

/* harmony default export */ __webpack_exports__["a"] = TaskCollectionDef;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return foo; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TaskCollection = function () {
    function TaskCollection() {
        var tasks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, TaskCollection);

        this.tasks = tasks;
    }

    _createClass(TaskCollection, [{
        key: 'dump',
        value: function dump() {
            console.log(this.tasks);
        }
    }]);

    return TaskCollection;
}();

var foo = 'bar';

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);