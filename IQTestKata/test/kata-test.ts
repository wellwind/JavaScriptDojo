import { expect } from "chai";
import { kata } from '../src/kata';

describe('kata test', () => {
    it('should pass this canary test', () => {
        expect(true).to.eql(true);
    });

    it('should return 3 when input is "2 4 7 8 10"', () => {
        expect(kata('2 4 7 8 10')).to.eql(3);
    });

    it('should return 1 when input is "1 2 2"', () => {
        expect(kata('1 2 2')).to.eql(1);
    });
});