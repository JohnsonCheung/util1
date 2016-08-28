const fil = './aa_05.js'
const read_dirInfo = require(fil)
const is_call_back = /[01|02|03]/.test(fil)
const fn = () => is_call_back
    ? read_dirInfo('f:', (err, obj) => console.log(err || obj))
    : console.log(read_dirInfo('f:'))
console.log(fil)
fn()

function* a(a, b) {
    for (let i = a; i <= b; i++) {
        let a = yield i
        console.log(i,'[' + a + ']')
    }
}
const aa = a(4, 10)
console.log(aa.next('a').value)
console.log(aa.next('b').value)
console.log(aa.next('c').value)
console.log(aa.next('d').value)
//===========================================================================================
//===========================================================================================
const test = (() => {
    const write_file = (nm, dir_info) => { nm, dir_info }
    //
    const dir1 = 'c:/users/abc/documents'
    //    const dir2 = 'c:/users/abc/documents/projects'
    //    const dir3 = 'c:/users/abc/documents/projects/node_modules'
    return (i) => { const {nm, fn} = i; fn(dir1, dir_info => write_file(nm, dir_info)) }
    //    console.log(read_dirInfo3(dir3, $dirInfo_is_read))
    //    console.log('starting reading [' + dir1 + ']')
})()
