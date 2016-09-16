"use strict";
var chai_1 = require("chai");
var kata_1 = require("../src/kata");
describe('kata test', function () {
    it('should pass this canary test', function () {
        chai_1.expect(true).to.eql(true);
    });
    it('should return [1] when calculate level 1', function () {
        var expected = kata_1.kata(1);
        var actual = [1];
        chai_1.expect(expected).to.eql(actual);
    });
    it('should return [1,1,1] when calculate level 2', function () {
        var expected = kata_1.kata(2);
        var actual = [1, 1, 1];
        chai_1.expect(expected).to.eql(actual);
    });
    it('should return [1,1,1,1,2,1,1,3,3,1] when calculate level 4', function () {
        var expected = kata_1.kata(4);
        var actual = [1, 1, 1, 1, 2, 1, 1, 3, 3, 1];
        chai_1.expect(expected).to.eql(actual);
    });
});
