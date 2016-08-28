const x5 = () => { const {cb, o} = this; cb(o) }
const x4 = (i) => { const entries = this.o.entries; i === entries.length - 1 ? x5.call(this) : 0 }
const x3 = (er, stat) => { const x = this; const {o, i} = x; er ? err.push(er) : stat.isDirectory() ? fdr.push(entry) : fil.push(entry); chk_finish.bind({ x }) }
const x2 = (entry, i) => (er, stat) => { const x = this; fs.stat(entry, x2.bind({ x }, entry, i)) }
const x1 = (er, _) => { const x = this; if (er) return x.cb(er); x.o.entries = _; _.forEach(x2.bind(x)) }
const read_dirInfo = (dir, cb) => fs.readdir(dir, x1.bind({ cb, o: { dir, err: [], fil: [], fdr: [] } }))
module.exports = read_dirInfo