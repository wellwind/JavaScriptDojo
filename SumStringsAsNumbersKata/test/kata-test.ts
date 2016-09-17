import { expect } from "chai";
import { kata } from '../src/kata';

describe('kata test', () => {
    it('should pass this canary test', () => {
        expect(true).to.eql(true);
    });

    it('should return "579" whne inputs are "123" & "456"', () => {
        expect(kata("123", "456")).to.eql("579");
    });

    it('should return "5" whne inputs are "" & "5"', () => {
        expect(kata("", "5")).to.eql("5", "NaN should treat as 0");
    });
});