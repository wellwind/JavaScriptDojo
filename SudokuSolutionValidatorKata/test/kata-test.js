"use strict";
var chai_1 = require("chai");
var kata_1 = require("../src/kata");
describe('kata test', function () {
    it('should pass this canary test', function () {
        chai_1.expect(true).to.eql(true);
    });
    it('should return true when input has only [1~9]', function () {
        chai_1.expect(kata_1.arrayValidate([1, 2, 3, 4, 5, 6, 7, 8, 9])).to.be.true;
    });
    it('should return false when input has only [1~9]', function () {
        chai_1.expect(kata_1.arrayValidate([1, 2, 2, 4, 5, 6, 7, 8, 9])).to.be.false;
        chai_1.expect(kata_1.arrayValidate([0, 1, 2, 3, 4, 5, 6, 7, 8])).to.be.false;
    });
    it('should return true for test1', function () {
        var result = kata_1.kata([[5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9]]);
        chai_1.expect(result).to.be.true;
    });
    it('should return false for test2', function () {
        var result = kata_1.kata([[5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 0, 3, 4, 8],
            [1, 0, 0, 3, 4, 2, 5, 6, 0],
            [8, 5, 9, 7, 6, 1, 0, 2, 0],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 0, 1, 5, 3, 7, 2, 1, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 0, 0, 4, 8, 1, 1, 7, 9]]);
        chai_1.expect(result).to.be.false;
    });
});
