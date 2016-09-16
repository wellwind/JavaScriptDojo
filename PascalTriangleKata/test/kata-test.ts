import { expect } from "chai";
import { kata } from '../src/kata';

describe('kata test', () => {
    it('should pass this canary test', () => {
        expect(true).to.eql(true);
    });

    it('should return [1] when calculate level 1', () => {
        var expected: number[] = kata(1);
        var actual: number[] = [1];
        expect(expected).to.eql(actual);
    })

    it('should return [1,1,1] when calculate level 2', () => {
        var expected: number[] = kata(2);
        var actual: number[] = [1, 1, 1];
        expect(expected).to.eql(actual);
    })

    it('should return [1,1,1,1,2,1,1,3,3,1] when calculate level 4', () => {
        var expected: number[] = kata(4);
        var actual: number[] = [1, 1, 1, 1, 2, 1, 1, 3, 3, 1];
        expect(expected).to.eql(actual);
    })
});