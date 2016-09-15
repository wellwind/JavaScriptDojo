"use strict";
var chai_1 = require("chai");
var kata_1 = require("../src/kata");
describe('kata test', function () {
    it('should pass this canary test', function () {
        chai_1.expect(true).to.eql(true);
    });
    it('should return true', function () {
        chai_1.expect(kata_1.kata([1, 2, 3, 4, 5, 6, 7, 8, 9]), "[1,2,3,4,5,6,7,8,9] should be true").to.be.true;
        chai_1.expect(kata_1.kata([2, 4, 6, 8, 10]), "[2,4,6,8,10] shoulde be true").to.be.true;
        chai_1.expect(kata_1.kata([0, 2, 4, 6, 8]), "[0,2,4,6,8] shoulde be true").to.be.true;
        chai_1.expect(kata_1.kata([1, 3, 5, 7, 9]), "[1,3,5,7,9] should be true").to.be.true;
    });
    // it('should return true', () => {
    //     expect(kata([1,2,3,4,5,8,7,8,9]), "[1,2,3,4,5,8,7,8,9] should be false").to.be.false;
    //     expect(kata([1,2,4,8,16,32,64]), "[1,2,4,8,16,32,64] should be false").to.be.false;
    //     expect(kata([0,1,1,2,3,5,8,13,21,34]), "[0,1,1,2,3,5,8,13,21,34] should be false").to.be.false;
    // });
});
