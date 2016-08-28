const fs = require('fs')
const pipe = require('util1').pipe
let it, it1
const readdir = (dir) => fs.readdir(dir, (err, entries) => it.next([err, entries]))
function* main(dir, cb) {
    const [er, entries] = yield readdir(dir)
    if (er) return cb(err)
    debugger
    it1 = main1(dir, entries)
    const a = yield states(dir, entries)
    debugger
    const err = [], fil = [], fdr = []
    const x_ay = stat => stat instanceof Error ? err : stat.isDirectory() ? fdr : fil
    const x_push = (stat, i) => ay => ay.push[[entries[i], stat]]
    const x = (stat, i) => pipe(stat, x_ay, x_push(stat, i))
    a.forEach(x)
    cb(null, { dir, entries, err, fil, fdr })
}
const read_dirInfo = (dir, cb) => {
    it = main(dir, cb)
    it.next()
}
module.exports = read_dirInfo

const read_states = (dir, entries) => entries.map(entry => fs.stat(dir + '/' + entry, (err, stat) => it1.next(stat)))
function* states(dir, entries) { return yield read_states(dir, entries) }
function* main1(dir, entries) {
    return yield read_states(dir, entries)
}
