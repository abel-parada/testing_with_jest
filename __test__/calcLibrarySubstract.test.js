'use strict';

const {substract} = require('../calcLibrary');

describe('test substract with integers one by one',()=>{
    test('test 1-1=0',()=>{
        expect(substract(1,1)).toBe(0);
    });
    test('test 2-3=-1',()=>{
        expect(substract(2,3)).toBe(-1);
    });
    test('test -2- -4= 2',()=>{
        expect(substract(-2,-4)).toBe(2);
    });
    test('test -2- 4= -6',()=>{
        expect(substract(-2,4)).toBe(-6);
    });
});

// we can test everything at once using arrays + test.each
// syntax and placeholders: https://jestjs.io/docs/api#testeachtablename-fn-timeout

describe('test substract with integers using test.each',()=>{
    const testValues =[
        // a, b,    expected
        [2,-4,    6],
        [0,0,     0],
        [0,3,    -3],
        [3,0,     3],
        [0,-3,    3],
        [-3,0,   -3]
    ];

    test.each(testValues)('substract(%s,%s)=%s', (a,b,expected)=>{
        expect(substract(a,b)).toBe(expected);
    });
});

describe('test substract with floats using test.each',()=>{
    const testValues=[
        //a,b,      expexted
        [10,11.5,   -1.5],
        [2.5,3,     -0.5],
        [-2.5,3,    -5.5],
        [2.5,-3,     5.5],
        [-2.5,-2.5,    0],
        [-2.5,2.5,    -5],
        [2.4,-2.5,   4.9]
    ];

    test.each(testValues)('substract(%f,%f)=%f',(a,b,expected)=>{
        expect(substract(a,b)).toBeCloseTo(expected);
    });
});

describe('test missing parameters throw an exception',()=>{
    test('substract() throws an exception "parameter missing"',()=>{
        expect(()=>substract()).toThrow('parameter missing');
    });

const testValues=[
    [null,  'parameter missing'],
    [1,     'parameter missing'],
    ['a',   'parameter missing'],
    ['',    'parameter missing']
];

test.each(testValues)('substract(%s) throws an exception: %s',(a,expected)=>{
    expect(()=>substract(a)).toThrow(expected);
});

// version 2 removing the expected response
const testValuesVersion2=[
    [null,],
    [1,   ],
    ['a', ],
    ['',  ]
];

test.each(testValuesVersion2)('substract(%s) throws an exception: "parameter missing"',(a)=>{
    expect(()=>substract(a)).toThrow('parameter missing');
});

});

describe('test parameters are not numbers',()=>{
    const testValues=[
        ['a',1,     'only numbers allowed'],
        [1,'a',     'only numbers allowed'],
        ['a','b',   'only numbers allowed'],
        ['','',     'only numbers allowed'],
        ['1','2',    'only numbers allowed']
    ];

    test.each(testValues)('substract(%s,%s) throws %s',(a,b,expected)=>{
        expect(()=>substract(a,b)).toThrow(expected);
    });
});