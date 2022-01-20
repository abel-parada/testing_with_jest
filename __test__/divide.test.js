'use strict';

const {divide} = require('../calcLibrary');

const testValues = [
    [0,0,                                                                 Number.NaN],
    [2,0,                                                   Number.POSITIVE_INFINITY],
    [-2,0,                                                  Number.NEGATIVE_INFINITY],
    [Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,                   Number.NaN]
];

test.each(testValues)('testing (%s,%s) =%s',(a,b,expected)=>{
    expect(divide(a,b)).toBe(expected);
});