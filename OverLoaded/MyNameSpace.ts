namespace MyNamespace {
    export const name: string = "John";

    export function sayHello(): void {
        console.log(`Hello, ${name}!`);
    }
}

// Usage
MyNamespace.sayHello(); // Output: "Hello, John!"
console.log(MyNamespace.name); // Output: "John"

