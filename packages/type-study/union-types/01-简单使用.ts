// 定义一个 联合类型(Union Type)
// 语法 变量名: 类型1 | 类型2 | 类型3
type unionType = string | number
function printID(id: unionType) {
  console.log(id);
}

printID("123")
printID(123)
// ERROR: Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.
printID(true)
