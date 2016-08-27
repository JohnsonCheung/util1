const split_lvc = require('./util1.js').split_lvc
const fs = require('fs')
const sort_export = (() => {
    const re1 = /module\.exports/
    const re2 = /a/
    const sort_export_list = (s) => split_lvc(s).sort().map(i => '    ' + i).join(',\r\n')
    const new_export_str = (s) => {
        const [, a, export_list, b] = s.match(re2)
        const x = sort_export_list(export_list)
        return a + '\r\n' + x + '\r\n' + b
    }
    const jsfile_sortExportStr = (jsfile) => {
        const s = fs.readFile(jsfile, 'utf8')
        const [, a, export_str, b] = s.match(re1)
        if (export_str) {
            const x = new_export_str(export_str)
            const o = a + x + b
            fs.writeFileSync(jsfile, o, 'utf8')
        }
    }
    return jsfile_sortExportStr
})()
module.exports = { sort_export }