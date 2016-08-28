const fs = require('fs')
const read_dirInfo = (() => {
    const entry_is_read = (err, entry_stat, entry_idx, cb, dir_info) => {
        const {entries, states} = dir_info
        states[entry_idx] = err ? err : entry_stat
        if (entry_idx === entries.length - 1) cb(dir_info)
    }
    const dir_is_read = (err, entries, dir, cb) => {
        if (err) return cb(err)
        entries.forEach((entry, i) => fs.stat(dir + '/' + entry, (err, stat) => entry_is_read(err, stat, i, cb, { dir, entries, states: [] })))
    }
    return (dir, cb) => fs.readdir(dir, (err, entries) => dir_is_read(err, entries, dir, cb))
})()
module.exports = read_dirInfo