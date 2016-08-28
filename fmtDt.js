'use strict';
const fs = require('fs')
const {pad, ay_maxLen, max, SEP_COL, SEP_LIN} = require('util1')
let $$$;
{   
    const [maxLen$,max$,pad$] = [ay_maxLen,max,pad]
    const fmtDt = $$$ = (dt, align = []) => {
        const fld = dt.fld
        const dta = dt.dta
        const wdt = fld.map((_, i) => max$($col_w(dta, i), fld[i].length))
        const bdy_linAy = dta.map(dr => $bdy_lin(dr, wdt, align))
        const bdy = bdy_linAy.join(SEP_LIN)
        const h2fld = fld.map((fld, i) => pad$(fld, wdt[i], align[i]))
        const h2 = $join_fld(h2fld)
        const h1fld = wdt.map(w => '-'.repeat(w))
        const h1 = $join_fld(h1fld)
        return [h1, h2, h1, bdy, h1].join(SEP_LIN)
    }
    const $join_fld = (fld) => '| ' + fld.join(SEP_COL) + ' |'
    const $col_w = (dta, i) => maxLen$(_col_i(dta, i))
    const _col_i = (dta, i) => dta.map(dr => String(dr[i]))
    const $bdy_lin = (dr, wdt, align) => $join_fld(wdt.map((w, i) => pad$(dr[i], w, align[i])))
} 
const fmtDt=$$$
module.exports = {fmtDt}