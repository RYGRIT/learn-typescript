// 对比学习法
// 本题逻辑点
// 1.返回一个对象
// 2.遍历操作 forEach
// 3.取值操作
// 4.判断key在不在todo中
function myPick(todo, keys) {
  const obj = {}
  keys.forEach(key => {
    if (key in todo) {
      obj[key] = todo[key]
    }
  })

  return obj
}


const Todo = {
  title: "myPick",
  description: "00004-easy-pick",
  completed: true
}

// bar { title: "myPick" }
// const bar = myPick(Todo, ["title"])
// console.log(bar)

// bar { title: "myPick", description: '00004-easy-pick' }
const bar = myPick(Todo, ["title", "description"])
console.log(bar)
