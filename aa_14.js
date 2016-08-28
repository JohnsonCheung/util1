const fs = require('fs')
const read_dirInfo = (() => {
    const fs1 = (ps1, cs1) => fs.readdir(ps1, cs1)
    //        const cs1 = (es1, rs1) => cs1(es1, rs1)
    const fs2 = (ps2, cs2) => fs.stat(ps2, cs2)
    //        const cs2 = (es2, rs2) => cs2(es2, rs2)

    const f2 = (es2, rs2, i, p, rs1, rx, c) => { rx[i] = es2 || rs2; if (i === rs1.length - 1) c({ p, rs1, rx }) }
    const f1 = (rs1, p, rx, c) => rs1.forEach((ps2, i) => fs2(p + '/' + ps2, (es2, rs2) => f2(es2, rs2, i, p, rs1, rx, c)))
    return (p, c) => fs1(p, (es1, rs1) => es1 ? c(es1) : f1(rs1, p, [], c))
})()
module.export = read_dirInfo