import { expect } from "chai";
import { kata } from '../src/kata';

describe('kata test', () => {
    it('should pass this canary test', () => {
        expect(true).to.eql(true);
    });

    it('should return 99998 when input is "12399998765"', () =>{
        expect(kata("12399998765")).to.eql(99998);
    });

    it('should return 99998 when input is "999987654321"', () =>{
        expect(kata("999987654321")).to.eql(99998, "begins with max value");
    });

    it('should return 99998 when input is "765432199998"', () =>{
        expect(kata("765432199998")).to.eql(99998, "ends with max value");
    });
});