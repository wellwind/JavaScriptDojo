import { expect } from "chai";
import { kata } from '../src/kata';

describe('kata test', () => {
    it('should pass this canary test', () => {
        expect(true).to.eql(true);
    });

    it('should return 99998 when input is "12399998765"', () =>{
        expect(kata("12399998765")).to.eql(99998);
    });
});