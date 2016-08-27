const a = 1
const b = 2
const c = 3
const x = { a, b, c }
x.a = x.b
x.b = x.c
x.c = x.a
const aa = { a: 1 }
const bb = { b: 1 }
const cc = { c: 1 }
aa.a = bb
bb.b = cc
cc.c = aa
console.log(aa)
console.log(bb)
console.log(cc)
const fs = require('fs')
for (let i = 0; i < 2; i++) {
    fs.stat('c:/users/abc', (err,stat) => console.log(stat))
    debugger
}