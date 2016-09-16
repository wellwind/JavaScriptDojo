"use strict";
var chai_1 = require("chai");
var kata_1 = require("../src/kata");
describe('kata test', function () {
    it('should pass this canary test', function () {
        chai_1.expect(true).to.eql(true);
    });
    it('should return 3 when input is "2 4 7 8 10"', function () {
        chai_1.expect(kata_1.kata('2 4 7 8 10')).to.eql(3);
    });
    it('should return 1 when input is "1 2 2"', function () {
        chai_1.expect(kata_1.kata('1 2 2')).to.eql(1);
    });
});
