"use strict";
var chai_1 = require("chai");
var kata_1 = require("../src/kata");
describe('kata test', function () {
    it('should pass this canary test', function () {
        chai_1.expect(true).to.eql(true);
    });
    it('should return 2 when n is 12', function () {
        chai_1.expect(kata_1.kata(12)).to.eql(2);
    });
    it('should return 7 when n is 20', function () {
        chai_1.expect(kata_1.kata(30)).to.eql(7);
    });
});
