const read_dirInfo = require('read_dirInfo')
const print_dir = (() => {
    const prt_fil = (dir, fil) => { fil.forEach(i => console.log(dir + '/' + i)) }
    const prt_er = (dir, er) => { er.forEach(i => console.log(dir + '/' + i[0] + ' <-- cannot read stat: [' + i[i] + ']')) }
    const prt_dir = (dir) => console.log(dir)
    //----
    const print_dir = (root, cb) => {
        const r = (dir, lvl) => read_dirInfo(dir, dirInfo_reading(dir, lvl))
        const dirInfo_reading = (dir, lvl) => (err, dir_info) => err ? cb(err, root) : dirInfo_is_read(dir_info, lvl)
        const dirInfo_is_read = (dir_info, lvl) => {
            const {dir, er, fil, fdr} = dir_info
            prt_dir(dir)
            prt_er(dir, er)
            prt_fil(dir, fil)
            lvl++
            fdr.forEach(i => r(dir + '/' + i, lvl))
            lvl--
            if (lvl === 0) cb(null, root)
        }
        r(root, 0)
    }
    return print_dir
})()
/*
    const push = (entry, err, stat, er, fdr, file) => err ? er.push([entry, err]) : (stat.isDirectory()) ? fdr.push(entry) : file.push(entry)
    const get_entries = (inp, dir, lvl) => fs.stat(dir, entries_reading(inp, dir, lvl))
    const entries_reading = (inp, dir, lvl) => (err, entries) => err ? cb_err(inp, err) : entries_have_read(entries, inp, dir, lvl)
    const entries_have_read = (entries, inp, dir, lvl) => entries.forEach(entry_each(inp, dir, lvl, enteries3()))
    const enteries3 = () => { return { er: [], fil: [], fdr: [] } }
    const entry_each = (inp, dir, lvl, enteries3) => (entry, i, entries) => entry_reading(entry, i, entries, inp, dir, lvl, enteries3)
    const entry_reading = (entry, i, entries, inp, dir, lvl) => fs.stat(dir + '/' + entry, entry_is_read(entry, i, entries, inp, dir, lvl))
    const entry_is_read = (entry, i, entries, inp, dir, lvl, enteries3) => (err, stat) => { push_entry(entry, i, stat, err, enteries3); chk_allStat_read(i, entries, inp, enteries3) }
    const chk_allStat_read = (i, entries, inp, enteries3) => is_finish(i, entries) ? allStat_are_read(inp, enteries3) : null
    const is_finish = (i, entries) => i === entries.length
    const push_entry = (entry, i, stat, err, entries3) => { const {er, fdr, file} = entries3; push(entry, err, stat, er, fdr, file) }
    const allStat_are_read = (dir, er, fil, fdr, inp, lvl) => { prt_er(dir, er); prt_fil(dir, fil); prt_fdr(dir, fdr, inp, lvl); cb(inp) }
    return print_dir
})()
*/
const done = dir => console.log('dir is printed ===>' + dir)
//print_dir('c:/users/abc/documents/projects/QpsMassUpdate', done)
print_dir('f:/', done)
//print_dir('u:/', done)
//setImmediate(() => { })
