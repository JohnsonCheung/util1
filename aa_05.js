const fs = require('fs')
function* readdir(dir) {
        function x(er, entries) {
            debugger
            if (er) return [er]
            yield[null, entries]
        }

    fs.readdir(dir, x)

}
function* gen(dir) {
    r = readdir(dir)
    yield* r.next()
    const x2 = (er, stat) => { }
    const x1 = (entry, i) => fs.stat(dir + '/' + entry, ((er, stat) => x2()))
    yield
}
const read_dirInfo = (dir) => {
    const a = gen(dir)
    debugger
    let x = a.next()
    x = a.next()
    debugger
    if (x.done) return x.value
    let entries = x.value
    a.next(entries)
    let states = a.next()
    debugger
}
module.exports = read_dirInfo