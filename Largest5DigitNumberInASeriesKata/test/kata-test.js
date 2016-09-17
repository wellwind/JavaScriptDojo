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
});
