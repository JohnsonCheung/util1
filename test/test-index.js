const {} = require('util')
debugger
const tap = require('tap')
{   
    const case_ay =[
        [   // case0
            'normal case - excl blanket',
            'abc{a}..df{b}dfdf{c}a', // str
            true,                   // excl_blanket
            ['a','b','c']           // exp
        ],
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
        tap.same(act, exp, `case#(${i}) -- ${nm}`)
    }
    case_ay.forEach(run_case)
}