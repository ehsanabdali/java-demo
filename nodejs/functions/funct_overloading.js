"use strict";
function add(a, b) {
    return a + b;
}
;
console.log(add(8, 5));
console.log(add("test1", "test2"));
function Add(a, b, c) {
    if (c)
        return a + b + c;
    return a + b;
}
;
console.log(Add(1, 3, 4));
console.log(Add(1, 3));
