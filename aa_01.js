const fs = require('fs')
const read_dirInfo = (dir, cb) => {
    const err = [], fil = [], fdr = []
    let entries
    const x1 = () => cb(null, { fil, entries, err, fdr })
    const x2 = (i) => i === entries.length - 1 ? x1() : 0
    const x3 = (entry, i) => (er, stat) => { er ? err.push([entry, er]) : stat.isDirectory() ? fdr.push([entry, stat]) : fil.push([entry, stat]); x2(i) }
    const x4 = (entry, i) => fs.stat(entry, x3(entry, i))
    const x5 = (er, _) => { if (er) return cb(er); entries = _; _.forEach(x4) }
    fs.readdir(dir, x5)
}
module.exports = read_dirInfo