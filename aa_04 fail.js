const read_dirInfo = (dir) => {
    const a = read_dirInfo_13.a(dir)
    let [er, entries] = a.entries
    if (er) return [er]
    let states = a.states()
    let fil = [], err = [], fdr = []
    let x = (stat) => stat instanceof Error ? err.push(stat) : stat.isDirectory() ? fdr.push(stat) : fil.push(stat)
    states.map(x)
    return [null, { entries, err, fil, fdr }]
}
read_dirInfo_13.a = (dir) => new read_dirInfo_13.A(dir)
read_dirInfo_13.A = class {
    constructor(dir) { this.dir = dir }
    get entries() {

    }
    get states(entries) {

    }
}
module.exports = read_dirInfo