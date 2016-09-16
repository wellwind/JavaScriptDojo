"use strict";
var chai_1 = require("chai");
var kata_1 = require("../src/kata");
describe('kata test', function () {
    it('should pass this canary test', function () {
        chai_1.expect(true).to.eql(true);
    });
    it('should return right result', function () {
        chai_1.expect(kata_1.kata("din")).to.eql("(((");
        chai_1.expect(kata_1.kata("recede")).to.eql("()()()");
        chai_1.expect(kata_1.kata("Success")).to.eql(")())())", "should ignore case");
        chai_1.expect(kata_1.kata("(( @")).to.eql("))((");
    });
});
