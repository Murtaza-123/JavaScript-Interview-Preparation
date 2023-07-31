var MyNamespace;
(function (MyNamespace) {
    MyNamespace.name = "John";
    function sayHello() {
        console.log("Hello, ".concat(MyNamespace.name, "!"));
    }
    MyNamespace.sayHello = sayHello;
})(MyNamespace || (MyNamespace = {}));
// Usage
MyNamespace.sayHello(); // Output: "Hello, John!"
console.log(MyNamespace.name); // Output: "John"
