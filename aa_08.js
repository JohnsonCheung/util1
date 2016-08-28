const fs = require('fs')
const read_dirInfo = (() => {
    const read_entries = dir => { try { return fs.readdirSync(dir) } catch (e) { return e } }
    const read_stat = entry => { try { return fs.statSync(entry) } catch (e) { return e } }
    const is_err = err => err instanceof Error
    return (dir) => {
        let entries
        if (is_err(entries = read_entries(dir))) return entries
        let states = entries.map(read_stat)
        return { dir, entries, states }
    }
})()
module.exports = read_dirInfo
