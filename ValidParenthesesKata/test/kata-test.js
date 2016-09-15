"use strict";
var chai_1 = require("chai");
var kata_1 = require("../src/kata");
describe('kata test', function () {
    it('should pass this canary test', function () {
        chai_1.expect(true).to.eql(true);
    });
    it('should return true when input is "()"', function () {
        chai_1.expect(kata_1.kata("()")).to.be.true;
    });
    it('should return false when input is "())"', function () {
        chai_1.expect(kata_1.kata("())")).to.be.false;
    });
    it('should return false when input is ")(()))"', function () {
        chai_1.expect(kata_1.kata(")(()))")).to.be.false;
    });
    it('should return false when input is ")(" because of starts with ")"', function () {
        chai_1.expect(kata_1.kata(")(")).to.be.false;
    });
    it('should return false when input is "(())((()())())"', function () {
        chai_1.expect(kata_1.kata("(())((()())())")).to.be.true;
    });
    it('should return false when input is ")"', function () {
        chai_1.expect(kata_1.kata(")")).to.be.false;
    });
    it('should return false when input is "())("', function () {
        chai_1.expect(kata_1.kata("())(")).to.be.false;
    });
});
