// 本题逻辑点
// 1.返回一个对象
// 2.遍历操作 forEach [mapped]
// 3.取值操作 [indexed]
// 4.判断key在不在todo中
//    1. keyof [lookup]
//    2. extends 约束

type MyPick<T, K extends keyof T> = {
  // ts 遍历union 'title' | 'completed' | 'invalid'
  [P in K]: T[P]
}
