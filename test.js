var expect = require('expect');
var math = require('./math.js');

describe('addr', function () {
    it('shoud add numbers', function () {
        expect(math.adder(1,2)).toBe(1+2);
    });

    it('should add lots of numbers', function () {
        expect(math.adder(1,2,3,4,5,6)).toBe(1+2+3+4+5+6);
    });

    it('should be a number', function () {
        expect(math.adder(1,2)).toBeA('number')
    });

})

