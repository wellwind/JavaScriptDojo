"use strict";
var chai_1 = require("chai");
var kata_1 = require("../src/kata");
describe('kata test', function () {
    it('should pass this canary test', function () {
        chai_1.expect(true).to.eql(true);
    });
    it('should return "579" whne inputs are "123" & "456"', function () {
        chai_1.expect(kata_1.kata("123", "456")).to.eql("579");
    });
    it('should return "5" whne inputs are "" & "5"', function () {
        chai_1.expect(kata_1.kata("", "5")).to.eql("5", "NaN should treat as 0");
    });
    it('should return "712577413488402631964821329" whne inputs are "712569312664357328695151392" & "8100824045303269669937"', function () {
        chai_1.expect(kata_1.kata("712569312664357328695151392", "8100824045303269669937")).
            to.eql("712577413488402631964821329", "big integer");
    });
    it('should resurn "10000" when inputs are "9999" & "1"', function () {
        chai_1.expect(kata_1.kata("9999", "1")).to.eql("10000");
    });
    it('should resurn "8670" when inputs are "00103" & "08567"', function () {
        chai_1.expect(kata_1.kata("00103", "08567")).to.eql("8670");
    });
});
