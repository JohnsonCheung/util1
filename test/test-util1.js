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
    msg_lines,
    SEP_LIN,
    SEP_COL,
    read_csv,
    branch,
    pipe,
    str_esc,
    str_unesc,
    make_cb
} = require('util1')
const expect = require('expect.js')
describe('test function max', test_max)
describe('test function ay_maxLen', test_ay_maxLen)
describe('test function pad', test_pad)
describe('test function obj_prpVal_byAy', test_obj_prpVal_byAy)
describe('test function obj_prpVal_byLvc', test_obj_prpVal_byLvc)
describe('test function split_lvc', test_split_lvc)
describe('test function macro_ay', test_macro_ay)
describe('test function ay_trim', test_ay_trim)
describe('test function zip', test_zip)
describe('test function quote', test_quote)
describe('test function brk_quote', test_brk_quote)
describe('test function msg_lines', test_msg_lines)
describe('test function SEP_LIN', test_SEP_LIN)
describe('test function SEP_COL', test_SEP_COL)
describe('test function read_csv', test_read_csv)
describe('test function branch', test_branch)
describe('test function pipe', test_pipe)
describe('test function str_esc', test_str_esc)
describe('test function str_unesc', test_str_unesc)
describe('test function make_cb', test_make_cb)

function test_max() {it('should', function(){})}
function test_ay_maxLen() {it('should', function(){})}
function test_pad() {it('should', function(){})}
function test_obj_prpVal_byAy() {it('should', function(){})}
function test_obj_prpVal_byLvc() {it('should', function(){})}
function test_split_lvc() {it('should', function(){})}
function test_macro_ay() {it('should', function(){})}
function test_ay_trim() {it('should', function(){})}
function test_zip() {it('should', function(){})}
function test_quote() {it('should', function(){})}
function test_brk_quote() {it('should', function(){})}
function test_msg_lines() {it('should', function(){})}
function test_SEP_LIN() {it('should', function(){})}
function test_SEP_COL() {it('should', function(){})}
function test_read_csv() {it('should', function(){})}
function test_branch() {it('should', function(){})}
function test_pipe() {it('should', function(){})}
function test_str_esc() {it('should', function(){})}
function test_str_unesc() {it('should', function(){})}
function test_make_cb() {it('should', function(){})}

describe('function msg_lines', function () {
    const run_case = (c) => {
        const {str,a,b,exp} = c
        expect(msg_lines(str,a,b)).to.eql(exp)
    }
    it('normal', function() {
        const exp = 'aaa {a} . {b} ..\r\n    {a} = [a]\r\n    {b} = [b]'
        run_case({str:'aaa {a} . {b} ..', a:'a', b:'b', exp})
    })
})
describe('function macro_ay', function () {
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
    const run_case = (ay,exp) => expect(ay_trim(ay)).to.eql(exp)
    it('should trim all element of given array', function () {
        run_case(['aa ',' bb'],['aa','bb'])
    })
})
describe('ay_trim', test_ay_trim)

function test_ay_trim() {
    const run_case = (case_name, ay,exp) => {
        it(case_name, function () {
            expect(ay_trim(ay)).to.eql(exp)
        })
    }
    run_case('should trim all element of given array 1', ['aa ',' bb'],['aa','bb'])
    run_case('should trim all element of given array 2', ['aa ',' bb'],['aa','bb'])
    run_case('should trim all element of given array 3', ['aa ',' bb'],['aa','bb'])
}
describe('function read_csv', function () {
    it('should', function(){})
})