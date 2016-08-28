const fs = require('fs')
const read_dirInfo = (() => {
    const read_entries = (dir) => { try { return fs.readdirSync(dir) } catch (e) { return e } }
    const read_stat = (entry) => { try { return fs.statSync(entry) } catch (e) { return e } }
    const is_err = (err) => err
    return (dir) => {
        let entries = read_entries(dir)
        if (is_err(entries)) return entries
        let states = entries.map(read_stat)
        return { dir, entries, states }
    }
})()
module.export = read_dirInfo
