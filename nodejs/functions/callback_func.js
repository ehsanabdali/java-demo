"use strict";
const greeting = (message) => console.log(`Hello ${message}`);
function sayHello(callback) {
    callback('World!');
}
sayHello(greeting);
