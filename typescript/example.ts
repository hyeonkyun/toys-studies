let message: string = "Hello, TypeScript!";
console.log(message);

let userName: string = "John";   // 문자열 타입
let age: number = 25;        // 숫자 타입
const isActive: boolean = true;  // 불리언 타입

function greet(name: string): string {
    return `Hello, ${name}`;
}

let result: string = greet("Alice");
