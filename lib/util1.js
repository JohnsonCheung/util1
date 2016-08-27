const fs = require('fs')
const SEP_LIN = '\r\n'
const SEP_COL = ' | '
const s_incl = /[^{]*({[^}]+})(.*)/
const s_excl = /[^{]*{([^}]+)}(.*)/
const macro_ay = (macro_str, excl_bracket = false) => {
    let o = []
    const s = excl_bracket ? s_excl : s_incl
    let ay = macro_str.match(s)
    while (Array.isArray(ay) && ay.length === 3) {
        const [, macro, rest] = ay
        o.push(macro)
        ay = rest.match(s)
    }
    return o
}
const msg_lines = (msg_str, ...p) => {
    const [SEP_LIN$, macro_ay$] = [SEP_LIN, macro_ay]
    const macro_ay = macro_ay$(msg_str)
    const val_linAy = macro_ay.map((m, i) => '    ' + m + ' = [' + p[i] + ']')
    const val_str = val_linAy.join(SEP_LIN$)
    return msg_str + SEP_LIN$ + val_str
}
const make_cb = (fn, n_cb_prm, ...prm) => {
    const er$ = msg_lines
    const mk1 = () => []
    const mk2 = () => []
    const mk3 = () => []
    const n = n_cb_prm
    return n === 1 ? mk1(fn, prm) : n === 2 ? mk2(fn, prm) : n === 3 ? mk3(fn, prm) : (() => { throw er$('invalid {n_cb_prm}', n_cb_prm) })()
}
const brk_quote = (q) => {
    if (typeof q !== 'string') return ['', '']
    let n = q.length
    if (n === 0) return ['', '']
    if (n === 1) return [q, q]
    if (n === 2) return [q.charAt(0), q.charAt(1)]
    let p = q.indexOf('*')
    if (p === -1) throw `invalid {quote} is given [${q}]`
    let q1 = q.substr(0, p)
    let q2 = q.substr(p)
    return [q1, q2]
}
const quote_byQAy = (s, qAy) => qAy[0] + s + qAy[1]
const quote = (s, q) => quote_byQAy(s, brk_quote(q))
const max = (...p) => p.reduce((o, i) => i > o ? i : o, undefined)
const min = (...p) => p.reduce((o, i) => i < o ? i : o, undefined)
const ay_trim = (ay) => ay.map(i => i.trim())
const obj_prpVal_byLvc = (obj, prpNmLvc) => obj_prpVal_byAy(obj, split_lvc(prpNmLvc))
const obj_prpVal_byAy = (obj, prpNmAy) => prpNmAy.map(prpNm => obj[prpNm])
const spc = (n) => ' '.repeat(n)
const pad = (() => {
    const spc$ = spc
    const LEFT = 1
    const CENTRE = 2
    const RIGHT = 3
    const pad = (s, w, align) => {
        s = String(s)
        const n = s.length
        if (n > w) return $v_o(s, w)
        if (align === RIGHT) return $v_R(s, w, n)
        if (align === CENTRE) return $v_C(s, w, n)
        return $v_L(s, w, n)
    }
    Object.assign(pad, { LEFT, RIGHT, CENTRE })
    const $v_o = (s, w) => {
        if (w <= 1) return '.'
        if (w == 2) return '..'
        if (w == 3) return s.charAt(0) + '..'
        return s.substr(0, w - 2)
    }
    const _l1 = (w, n) => Number.parseInt(((w - n) / 2).toFixed())
    const _s1_s2 = (w, n) => { const l1 = _l1(w, n), l2 = w - l1 - n; return [spc$(l1), spc$(l2)] }
    const $v_L = (s, w, n) => s + spc$(w - n)
    const $v_R = (s, w, n) => spc$(w - n) + s
    const $v_C = (s, w, n) => { const [s1, s2] = _s1_s2(w, n); return s1 + s + s2 }
    return pad
})()
const zip = (...ay) => {
    const ay1 = ay.map(ay => Array.isArray(ay) ? ay : []) // 
    const nEle = ay1.reduce((rslt, ay) => max(rslt, ay.length), 0)
    const ele = (idx) => ay.map(ay => ay[idx])
    const a = []
    a[nEle - 1] = null
    return a.map((_, idx) => ele(idx))
}
const ay_maxLen = (strAy) => strAy.reduce((rslt, itm) => max(rslt, itm.length), 0)
const pipe = (i, ...f) => f.reduce((c, p) => c(p), i)
const branch = (i, ...f) => f.reduce((c, p) => p.push(c(i), []))
const str_unesc = (s) => s.replace('\\c', ',').replace('\\t', '\t').replace('\\n', '\n').replace('\\r', '\r')
const str_esc = (s) => s.replace(',', '\\c').replace('\t', '\\t').replace('\n', '\\n').replace('\r', '\\r')
const split_lvc = (s) => s.trim().split(/\s*,\s*/).map(str_unesc)
const ffn_str = (ffn) => fs.readFileSync(ffn, 'utf8')
const ffn_linAy = (ffn) => ffn_str(ffn).split('\r\n')
const ffn_fnn = (ffn) => {debugger; ffn; (ffn) => ffn }
const read_csv = (csvFfn) => {
    const nm = ffn_fnn(csvFfn)
    const lin_ay = ffn_linAy(csvFfn)
    const line1 = lin_ay.shift()
    const dta = lin_ay.map(split_lvc)
    const fld = split_lvc(line1)
    return { nm, dta, fld }
}
module.exports = {
    max,
    min,
    ay_maxLen,
    pad,
    obj_prpVal_byAy,
    obj_prpVal_byLvc,
    split_lvc,
    macro_ay,
    ay_trim,
    zip,
    quote,
    brk_quote,
    msg_lines,
    SEP_LIN,
    SEP_COL,
    read_csv,
    branch,
    pipe,
    str_esc,
    str_unesc,
    make_cb
}