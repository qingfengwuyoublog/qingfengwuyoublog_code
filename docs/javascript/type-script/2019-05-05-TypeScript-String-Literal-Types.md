---
title: 字符串文字类型(string literal types)
tag: [TypeScript]
---

# 字符串文字类型(string literal types)

通常在开发过程，需要定义基于字符串的枚举，比如表达一些状态字等等的需求，如果使用 enum 来实现，
并不方便，因为涉及大量枚举类型与字符串的转换。

而直接使用字符串文字类型( string literal types )，就不需要转换，而且又能进行类型的合法性检查，以及智能提示。

### 定义方式

```ts
type CardinalDirection = "North"
                       | "East"
                       | "South"
                       | "West";

function move(distance: number, direction: CardinalDirection) {
    // ...
}

```

```ts
move(100, "North"); // 正确的调用

move(100, "NorthEast"); // 错误的调用

```

### 声明变量

```ts
type CardinalDirection = "North"
                       | "East"
                       | "South"
                       | "West";

let direction: CardinalDirection = "North"; // 正确 

let directionErr: CardinalDirection = "unknow"; //错误

let a: "foo" | "baz" = "foo";  //正确 

let b: "foo" | "baz" = "xyz";  //错误

```


### 与普通字符串的区别

字符串文字类型可以赋值给普通字符串类型，反之则不行

```ts
type ok = "ok"


let a : ok = "ok";
let b : "ok" = a; // OK

let a  : ok = "no"; // Error
let c : string = a; // OK 
let a : ok = c; // Error 
```


