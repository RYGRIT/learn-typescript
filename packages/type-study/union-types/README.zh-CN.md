# 联合类型(Union Types)

>官网地址：[Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)

## 为什么需要联合类型？？
在开发过程中，难免会遇到一个变量具有多个类型的情况。当我们清楚的知道这个变量需要 哪几个类型时 便可以使用联合类型。
因为在 typescript 中，定义一个基本的变量也就只能声明一种类型。


## 定义一个联合类型

>语法: `变量名: 类型1 | 类型2 | 类型3`

```typescript
// id 就是一个联合类型
type unionType = string | number

function printID(id: unionType) {
  console.log(id);
}

printID("123")
printID(123)
// ERROR: Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.
printID(true)
```
