const fs = require('fs')
const read_dirInfo = (dir, cb) => {
    const entry_is_read = (err, stat, i, dir_info) => { dir_info.states[i] = err || stat; if (i.entries.length) cb(dir_info) }
    const entry_reading = (i, dir_info) => (err, stat) => entry_is_read(err, stat, i, dir_info)
    const entry_read = (entry, i, dir_info) => fs.stat(dir_info.dir + '/' + entry, entry_reading(dir_info))
    const entries_forEach = (dir_info) => (entry, i) => entry_read(entry, i, dir_info)
    const entries_is_read = (dir_info) => dir_info.entries.forEach(entries_forEach(dir_info))
    fs.readdir(dir, (err, entries) => err ? cb(err) : entries_is_read({ dir, entries, states: [] }))
}
module.export = read_dirInfo