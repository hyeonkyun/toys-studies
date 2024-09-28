# typescript-실행방법

## TypeScript를 실행하려면 먼저 TypeScript 코드를 JavaScript로 컴파일한 후, Node.js를 사용하여 실행하거나 웹 브라우저에서 사용할 수 있습니다.  

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

---
---

## `tsconfig.json` 파일은 TypeScript 프로젝트의 컴파일러 옵션을 관리하는 설정 파일입니다. 

### 이 파일을 사용하면 TypeScript 컴파일러가 프로젝트 내의 TypeScript 파일을 어떻게 처리해야 하는지 정의할 수 있습니다. 여기에서 주요 옵션들을 설명하겠습니다.

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "forceConsistentCasingInFileNames": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.test.ts"]
}
```

### `compilerOptions`
`compilerOptions`는 TypeScript 컴파일러가 코드를 어떻게 컴파일해야 할지에 대한 다양한 설정을 지정합니다.

1. **`target`**: 
   - 컴파일된 JavaScript가 호환되어야 하는 ECMAScript 버전을 지정합니다.
   - 예: `"es5"`, `"es6"` (또는 `"es2015"`), `"es2016"`, `"es2020"` 등.
   - `"es5"`를 지정하면 대부분의 브라우저와 호환되는 코드가 생성됩니다.

2. **`module`**:
   - 모듈 시스템을 지정합니다. 예를 들어, `"commonjs"`, `"esnext"`, `"amd"` 등이 있습니다.
   - Node.js 환경에서는 주로 `"commonjs"`를 사용하고, 웹 브라우저 환경에서는 `"esnext"`나 `"es6"`를 많이 사용합니다.

3. **`strict`**:
   - 엄격한 타입 검사를 활성화하는 플래그로, 여러 개의 타입 관련 검사를 한꺼번에 활성화합니다.
   - 이를 사용하면 더 안전하고 오류를 방지하는 코드 작성이 가능합니다.

4. **`esModuleInterop`**:
   - CommonJS와 ES 모듈 간의 호환성을 향상시킵니다.
   - `import` 문을 사용할 때 더 편리하게 호환하도록 도와줍니다. 예를 들어, `require` 형식의 CommonJS 모듈을 ES6의 `import`로 읽어들일 수 있게 해줍니다.

5. **`outDir`**:
   - 컴파일된 JavaScript 파일이 생성될 디렉토리를 지정합니다.
   - 예: `"./dist"`는 `dist` 폴더에 결과물을 저장합니다.

6. **`rootDir`**:
   - 컴파일할 소스 파일이 위치한 디렉토리를 지정합니다.
   - 예: `"./src"`는 `src` 폴더 내의 파일들을 컴파일 대상으로 지정합니다.

7. **`forceConsistentCasingInFileNames`**:
   - 파일 이름의 대소문자 일관성을 강제합니다.
   - 이를 활성화하면 파일 이름의 대소문자 차이로 인해 발생할 수 있는 문제를 방지할 수 있습니다.

8. **`noImplicitAny`**:
   - 암시적으로 `any` 타입이 할당되는 것을 방지합니다.
   - 함수의 매개변수나 변수에서 타입을 명시하지 않으면 오류가 발생합니다. 이는 타입 안전성을 높이기 위해 사용합니다.

9. **`strictNullChecks`**:
   - `null`과 `undefined`에 대한 엄격한 타입 검사를 수행합니다.
   - 이를 사용하면 `null` 또는 `undefined`가 변수에 할당되는 것을 명시적으로 방지할 수 있습니다.

10. **`sourceMap`**:
    - 소스 맵 파일을 생성하여 디버깅을 돕습니다.
    - `"sourceMap": true`로 설정하면 브라우저의 디버거에서 TypeScript 파일을 이용한 디버깅이 가능해집니다.

### `include`
- 컴파일 대상 파일을 지정합니다.
- 예: `"src/**/*"`는 `src` 폴더 내의 모든 폴더와 파일을 컴파일 대상으로 포함합니다.

### `exclude`
- 컴파일에서 제외할 파일이나 폴더를 지정합니다.
- 예: `["node_modules", "**/*.test.ts"]`는 `node_modules` 폴더와 모든 테스트 파일 (`*.test.ts`)을 제외합니다.

### 기타 중요한 설정들

- **`allowJs`**: JavaScript 파일도 컴파일에 포함할지 여부를 지정합니다. `"allowJs": true`로 설정하면 `.js` 파일도 컴파일할 수 있습니다.
- **`declaration`**: 컴파일 시 `.d.ts` 타입 정의 파일을 생성합니다. `"declaration": true`로 설정하면 라이브러리를 사용할 때 타입 정보를 제공하는 파일이 만들어집니다.
- **`removeComments`**: `"removeComments": true`로 설정하면 컴파일된 JavaScript 파일에서 주석을 제거합니다.
- **`lib`**: 컴파일 시 사용할 라이브러리를 지정합니다. 예를 들어 `"lib": ["es6", "dom"]`으로 설정하면 ECMAScript 6 기능과 DOM 관련 기능을 사용할 수 있습니다.

`tsconfig.json` 파일은 TypeScript 프로젝트의 컴파일 설정을 효율적으로 관리하는 중요한 역할을 하며, 다양한 옵션을 통해 코드를 더 안전하고 일관성 있게 유지할 수 있습니다.