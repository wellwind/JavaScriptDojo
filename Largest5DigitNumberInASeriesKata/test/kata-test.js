"use strict";
var chai_1 = require("chai");
var kata_1 = require("../src/kata");
describe('kata test', function () {
    it('should pass this canary test', function () {
        chai_1.expect(true).to.eql(true);
    });
    it('should return 99998 when input is "12399998765"', function () {
        chai_1.expect(kata_1.kata("12399998765")).to.eql(99998);
    });
    it('should return 99998 when input is "999987654321"', function () {
        chai_1.expect(kata_1.kata("999987654321")).to.eql(99998, "begins with max value");
    });
    it('should return 99998 when input is "765432199998"', function () {
        chai_1.expect(kata_1.kata("765432199998")).to.eql(99998, "ends with max value");
    });
});
