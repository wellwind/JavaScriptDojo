import { expect } from "chai";
import { kata } from '../src/kata';

describe('kata test', () => {
    it('should pass this canary test', () => {
        expect(true).to.eql(true);
    });

    it('should return true when input is "()"', () => {
        expect(kata("()")).to.be.true;
    });

    it('should return false when input is "())"', () => {
        expect(kata("())")).to.be.false;
    });

});