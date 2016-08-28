const fs = require('fs')
const read_dirInfo = (() => {
    const entry_is_read = (err, stat, i, dir_info, cb) => { dir_info.states[i] = err || stat; if (i.entries.length) cb(dir_info) }
    const read_stat = (entry, i, dir_info, cb) => fs.stat(dir_info.dir + '/' + entry, (err, stat) => entry_is_read(err, stat, i, dir_info, cb))
    const entries_forEach = (dir_info, cb) => (entry, i) => read_stat(entry, i, dir_info, cb)
    const entries_is_read = (dir_info, cb) => dir_info.entries.forEach(entries_forEach(dir_info, cb))
    const read_dirInfo = (dir, cb) => fs.readdir(dir, (err, entries) => err ? cb(err) : entries_is_read({ dir, entries, states: [] }, cb))
    return read_dirInfo
})()
module.export = read_dirInfo