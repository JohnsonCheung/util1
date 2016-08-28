const fs = require('fs')
const read_dirInfo = (() => {
    class Read_dirInfo {
        constructor(dir, cb) {
            this.cb = cb
            this.dir_info = {}
            this.dir_info.dir = dir
        }
    }
    const x = Read_dirInfo.prototype
    x.read = function () {
        fs.readdir(this.dir_info.dir, this.dir_is_read.bind(this))
    }
    x.dir_is_read = function (err, entries) {
        if (err) {
            this.dir_info.err = 'err in readdir(dir)'
            return this.done()
        }
        const dir = this.dir_info.dir
        const x = this
        x.dir_info.entries = entries
        x.dir_info.states = []
        entries.forEach((entry, i) => {
            const fn = (err, stat) => x.entry_is_read(err, stat, i)
            fs.stat(dir + '/' + entry, fn.bind(x))
        })
    }
    x.entry_is_read = function (err, entry_stat, entry_idx) {
        const {dir, entries, states} = this.dir_info
        console.log(dir + '    ' + entries[entry_idx])
        states[entry_idx] = err ? err : entry_stat
        if (entry_idx === entries.length - 1) this.done()
    }
    x.done = function () { this.cb(this.dir_info) }

    return (dir, cb) => (new Read_dirInfo(dir, cb)).read()
})()
module.exports = read_dirInfo