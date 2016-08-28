const fs = require('fs')
const read_dirInfo = (dir) => {
    let entries
    try {
        entries = fs.readdirSync(dir)
    } catch (err) {
        return [err]
    }
    const read_stat = entry => {
        try {
            return fs.statSync(dir + '/' + entry)
        } catch (err) {
            return err
        }
    }
    const states = entries.map(read_stat)
    const err = [], fil = [], fdr = []
    const x_which_ay = stat => stat instanceof Error ? err : stat.isDirectory() ? fdr : fil
    const x_push_ay = (ay, stat, i) => {const entry = entries[i]; ay.push([entry,stat])}
    const x_push = (stat, i) => {const ay = x_which_ay(stat); x_push_ay(ay, stat, i) }
    states.map(x_push)
    return [null, { dir, entries, err, fil, fdr }]
}
module.export = read_dirInfo