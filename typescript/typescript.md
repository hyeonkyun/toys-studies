## TypeScript

## TypeScript는 JavaScript의 상위 집합 언어로, 정적 타입 검사와 최신 ECMAScript 기능을 제공하면서 JavaScript로 컴파일됩니다.

### 1. 변수 선언
TypeScript는 JavaScript와 마찬가지로 `var`, `let`, `const`를 사용하지만, 타입을 명시할 수 있습니다.

```typescript
let name: string = "John";   // 문자열 타입
let age: number = 25;        // 숫자 타입
const isActive: boolean = true;  // 불리언 타입
```

### 2. 함수
함수의 매개변수와 반환 타입을 지정할 수 있습니다.

```typescript
function greet(name: string): string {
    return `Hello, ${name}`;
}

let result: string = greet("Alice");
```

### 3. 인터페이스 (Interface)
인터페이스는 객체의 구조를 정의하는 데 사용됩니다.

```typescript
interface User {
    name: string;
    age: number;
    isAdmin?: boolean;  // 선택적 속성
}

const user: User = {
    name: "John",
    age: 30
};
```

### 4. 클래스 (Class)
TypeScript에서는 객체지향 프로그래밍을 지원하며 클래스, 상속, 인터페이스 구현 등이 가능합니다.

```typescript
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name}`;
    }
}

const person = new Person("Alice", 25);
console.log(person.greet());
```

### 5. 제네릭 (Generics)
제네릭을 사용하여 타입에 의존적이지 않은 재사용 가능한 컴포넌트를 만들 수 있습니다.

```typescript
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("Hello");
let output2 = identity<number>(42);
```

### 6. 유니온 타입 (Union Types)
여러 타입을 허용하고 싶을 때 유니온 타입을 사용할 수 있습니다.

```typescript
function printId(id: number | string) {
    console.log(`ID: ${id}`);
}

printId(101);
printId("abc123");
```

### 7. 튜플 (Tuple)
고정된 길이의 배열로, 각 요소의 타입을 명시할 수 있습니다.

```typescript
let tuple: [string, number];
tuple = ["Alice", 25];  // 올바른 튜플
```

### 8. 열거형 (Enum)
열거형은 특정 값 집합에 이름을 지정하는 방법을 제공합니다.

```typescript
enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Green;
```

### 9. 타입 단언 (Type Assertions)
개발자가 타입을 명확히 알 때 TypeScript에게 타입을 알려줄 수 있습니다.

```typescript
let someValue: any = "Hello, world!";
let strLength: number = (someValue as string).length;
```

### 10. 모듈 (Modules)
TypeScript는 모듈 시스템을 지원하여 파일 간에 코드 재사용이 용이합니다.

```typescript
// moduleA.ts
export const pi = 3.14;

// moduleB.ts
import { pi } from './moduleA';
console.log(pi);
```   

---
---

### TypeScript에서 배열은 일반적인 JavaScript 배열과 유사하지만, 배열에 들어가는 요소들의 타입을 명시할 수 있습니다. 다양한 방법으로 배열을 정의하고 다룰 수 있습니다.

### 1. 기본 배열 타입
배열의 요소 타입을 명시하기 위해 `type[]` 형식을 사용합니다.

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];
```

이 배열들은 각각 `number`와 `string` 타입의 요소만을 가질 수 있습니다.

### 2. 제네릭 배열 타입
배열을 제네릭 타입을 사용하여 정의할 수도 있습니다.

```typescript
let numbers: Array<number> = [1, 2, 3, 4, 5];
let names: Array<string> = ["Alice", "Bob", "Charlie"];
```

이 방식은 `type[]`과 동일하게 작동합니다.

### 3. 다차원 배열
TypeScript에서도 다차원 배열을 사용할 수 있습니다.

```typescript
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

여기서 `matrix`는 `number` 타입을 요소로 가지는 배열들의 배열입니다.

### 4. 배열과 유니온 타입
배열에 여러 타입의 요소를 허용하고 싶을 때 유니온 타입을 사용할 수 있습니다.

```typescript
let mixedArray: (number | string)[] = [1, "two", 3, "four"];
```

이 배열은 `number`와 `string` 타입 요소를 모두 가질 수 있습니다.

### 5. 배열 메서드
TypeScript의 배열은 JavaScript 배열과 동일한 메서드를 사용할 수 있으며, 타입 안전성이 추가됩니다.

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];

numbers.push(6);      // 배열에 값 추가
let first = numbers[0];  // 배열에서 첫 번째 요소 가져오기
let removed = numbers.pop();  // 마지막 요소 제거 및 반환
```

### 6. 읽기 전용 배열
배열이 변경되지 않도록 `readonly` 키워드를 사용해 읽기 전용 배열로 정의할 수 있습니다.

```typescript
let readonlyNumbers: readonly number[] = [1, 2, 3];
// readonlyNumbers.push(4);  // 오류 발생: 읽기 전용 배열에 값을 추가할 수 없음
```

### 7. 튜플 (배열과 유사하지만 길이와 타입이 고정)
튜플은 배열과 비슷하지만, 요소의 개수와 각 요소의 타입이 고정된 경우에 사용합니다.

```typescript
let person: [string, number] = ["Alice", 25];  // 첫 번째 요소는 string, 두 번째 요소는 number
```

튜플은 고정된 길이와 타입을 가지는 배열로, 주로 특정한 데이터 구조를 명확하게 정의할 때 유용합니다.

이와 같이, TypeScript에서는 배열을 더욱 안전하게 다루기 위해 타입을 명시하고 다양한 방법으로 정의할 수 있습니다.

---
---

### TypeScript를 실행하려면 먼저 TypeScript 코드를 JavaScript로 컴파일한 후, Node.js를 사용하여 실행하거나 웹 브라우저에서 사용할 수 있습니다.  

### 1. TypeScript 설치
먼저, TypeScript를 설치해야 합니다. TypeScript는 Node.js를 기반으로 동작하므로, Node.js가 설치되어 있어야 합니다. Node.js와 함께 제공되는 `npm`(Node Package Manager)을 사용하여 TypeScript를 설치합니다.

```bash
npm install -g typescript
```

이 명령어는 TypeScript 컴파일러 (`tsc`)를 전역으로 설치합니다.

### 2. TypeScript 파일 작성
TypeScript 파일은 `.ts` 확장자를 사용합니다. 예를 들어, 다음과 같이 `example.ts`라는 파일을 만듭니다.

```typescript
// example.ts
let message: string = "Hello, TypeScript!";
console.log(message);
```

### 3. TypeScript 컴파일
TypeScript 파일을 JavaScript로 컴파일하려면 `tsc` 명령어를 사용합니다.

```bash
tsc example.ts
```

이 명령어는 `example.js`라는 파일을 생성합니다. 이제 컴파일된 JavaScript 파일을 Node.js나 브라우저에서 사용할 수 있습니다.

### 4. JavaScript 실행 (Node.js 사용)
Node.js를 사용하여 생성된 JavaScript 파일을 실행할 수 있습니다.

```bash
node example.js
```

위의 명령을 사용하면 `Hello, TypeScript!`라는 메시지가 출력됩니다.

### 5. 실시간 컴파일 (tsc --watch)
TypeScript 파일이 변경될 때마다 자동으로 컴파일하고 싶다면 `--watch` 옵션을 사용할 수 있습니다.

```bash
tsc example.ts --watch
```

이렇게 하면 파일이 변경될 때마다 TypeScript 컴파일러가 자동으로 재컴파일합니다.

### 6. TypeScript 설정 파일 (`tsconfig.json`)
프로젝트 규모가 커질 때 TypeScript 설정을 관리하기 위해 `tsconfig.json` 파일을 사용합니다. 이 파일을 사용하면 TypeScript 컴파일러의 설정을 지정할 수 있습니다.

`tsconfig.json` 파일 생성:

```bash
tsc --init
```

생성된 `tsconfig.json` 파일에서 컴파일러 옵션을 설정할 수 있으며, 프로젝트의 모든 `.ts` 파일을 자동으로 컴파일합니다.

### 7. 브라우저에서 TypeScript 사용
브라우저에서 TypeScript를 직접 실행할 수는 없지만, JavaScript로 컴파일된 파일을 HTML에 포함시켜 사용할 수 있습니다.

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TypeScript Example</title>
</head>
<body>
    <script src="example.js"></script>
</body>
</html>
```

TypeScript 파일을 JavaScript로 컴파일한 후, 이렇게 HTML 파일에서 실행할 수 있습니다.

### 8. 온라인 편집기 사용 (옵션)
TypeScript 코드를 실행해보고 싶다면 [TypeScript Playground](https://www.typescriptlang.org/play) 같은 온라인 편집기를 사용할 수도 있습니다. 이 편집기는 브라우저에서 TypeScript 코드를 작성하고, 즉시 컴파일 결과를 확인할 수 있게 해줍니다.

이 과정을 통해 TypeScript 코드를 작성하고, 컴파일하며, 실행할 수 있습니다. TypeScript는 JavaScript와 완벽하게 호환되므로, 컴파일된 JavaScript 파일은 브라우저나 Node.js에서 자유롭게 실행할 수 있습니다.