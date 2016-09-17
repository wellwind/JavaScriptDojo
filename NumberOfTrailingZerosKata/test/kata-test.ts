import { expect } from "chai";
import { kata } from '../src/kata';

describe('kata test', () => {
    it('should pass this canary test', () => {
        expect(true).to.eql(true);
    });

    it('should return 2 when n is 12', () => {
        expect(kata(12)).to.eql(2);
    })

    it('should return 7 when n is 20', () => {
        expect(kata(30)).to.eql(7);
    })
});