const fs = require('fs')
const read_dirInfo = (() => {
    const entry_is_read = (err, stat, i, dir, entries, states, cb) => { states[i] = err || stat; if (i === entries.length - 1) cb({ dir, entries, states }) }
    const entries_is_read = (entries, dir, states, cb) => entries.forEach((entry, i) => fs.stat(dir + '/' + entry, (err, stat) => entry_is_read(err, stat, i, dir, entries, states, cb)))
    return (dir, cb) => fs.readdir(dir, (err, entries) => err ? cb(err) : entries_is_read(entries, dir, [], cb))
})()
module.export = read_dirInfo