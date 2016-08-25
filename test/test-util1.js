const {
    max,
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
    er,
    SEP_LIN,
    SEP_COL,
    readCsv,
    branch,
    pipe,
    str_esc,
    str_unesc,
    make_cb
} = require('util1')
const expect = require('expect.js')

describe('macro_ay', function () {
    function run_case(c) {
        const {nm, str, excl_bracket, exp} = c
        const act = macro_ay(str, excl_bracket)
        expect(act).to.eql(exp, nm)
    }
    it('normal case - excl bracket', function () {
        const cas =
            {
                cas: 0,
                nm: 'normal case - excl bracket',
                str: 'abc{a}..df{b}dfdf{c}a',
                excl_bracket: true,                   // excl_bracket
                exp: ['a', 'b', 'c']           // exp
            }
        run_case(cas)
    })
    it('normal case - with bracket', function () {
        const cas =
            {
                cas: 0,
                nm: 'normal case - excl bracket',
                str: 'abc{a}..df{b}dfdf{c}a',
                excl_bracket: false,                   // excl_bracket
                exp: ['{a}', '{b}', '{c}']           // exp
            }
        run_case(cas)
    })
})
describe('str_unesc', function () {
    const run_case = (c) => {
        const {str,exp} = c
        const act = str_esc(str)
        expect(act).to.eql(exp)
    }
    it('should be same if no escape char..', function() {
        run_case({str: 'sdfdf', exp:'sdfdf'})
    })
})
describe('ay_trim', function () {
    const run_case = (ay,exp) => expect(ay_trim(ay).to.eql(exp))
    it('should trim all element of given array', function () {
        run_case(['aa ',' bb'],['aa','bb'])

    })
})
