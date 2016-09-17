import { expect } from "chai";
import { kata } from '../src/kata';

describe('kata test', () => {
    it('should pass this canary test', () => {
        expect(true).to.eql(true);
    });

    it('should return "579" whne inputs are "123" & "456"', () => {
        expect(kata("123", "456")).to.eql("579");
    });
});