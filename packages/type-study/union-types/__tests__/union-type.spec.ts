import { printID, unionType } from "../01-简单使用"
import { Equal, Expect } from "@type-challenges/utils"

type cases = [
  Expect<Equal<unionType, string | number>>,
]

describe('union type', () => { 
  it('简单使用', () => {
    expect(printID("123")).toBe("123")
    expect(printID(123)).toBe(123)
  })
 })
