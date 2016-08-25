const {} = require('util')
const mocha = require('mocha')
const chai = require('chai')
debugger
describe('macro_ay', 
    it('normal case - excl blanket'), function () {

    const cas =
        [   // case0
            'normal case - excl blanket',
            'abc{a}..df{b}dfdf{c}a', // str
            true,                   // excl_blanket
            ['a','b','c']           // exp
        ]
        run_case(c)
    }
)
/*
        [   // case1
            'normal case - incl blanket',
            'abc{a}..df{b}dfdf{c}a', // str
            false,                   // excl_blanket
            ['{a}','{b}','{c}']           // exp
        ],
        [   // case2
            'normal case - {} will omit',
            'abc{}..df{b}dfdf{c}a', // str
            false,                   // excl_blanket
            ['{b}','{c}']           // exp
        ]

    ]
    function run_case (c, i) { 
        const [nm, str,excl_blanket,exp] = c
        const act = macro_ay(str,excl_blanket)
        expect(act).(act, exp, `case#(${i}) -- ${nm}`)
    }
    case_ay.forEach(run_case)
})
*/