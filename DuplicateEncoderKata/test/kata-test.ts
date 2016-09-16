import { expect } from "chai";
import { kata } from '../src/kata';

describe('kata test', () => {
    it('should pass this canary test', () => {
        expect(true).to.eql(true);
    });

    it('should return right result', () => {
        expect(kata("din")).to.eql("(((");
        expect(kata("recede")).to.eql("()()()");
        expect(kata("Success")).to.eql(")())())", "should ignore case");
        expect(kata("(( @")).to.eql("))((");

    });
});