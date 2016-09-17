import { expect } from "chai";
import { kata, arrayValidate } from '../src/kata';

describe('kata test', () => {
    it('should pass this canary test', () => {
        expect(true).to.eql(true);
    });

    it('should return true when input has only [1~9]', () => {
        expect(arrayValidate([1, 2, 3, 4, 5, 6, 7, 8, 9])).to.be.true;
    });
    
    // it('should return true for test1', () => {
    //     var result = 
    //         kata([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
    //            [6, 7, 2, 1, 9, 5, 3, 4, 8],
    //            [1, 9, 8, 3, 4, 2, 5, 6, 7],
    //            [8, 5, 9, 7, 6, 1, 4, 2, 3],
    //            [4, 2, 6, 8, 5, 3, 7, 9, 1],
    //            [7, 1, 3, 9, 2, 4, 8, 5, 6],
    //            [9, 6, 1, 5, 3, 7, 2, 8, 4],
    //            [2, 8, 7, 4, 1, 9, 6, 3, 5],
    //            [3, 4, 5, 2, 8, 6, 1, 7, 9]]);

    //     expect(result).to.be.true;
    // });

    // it('should return false for test2', () => {
    //     var result = 
    //         kata([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
    //            [6, 7, 2, 1, 9, 0, 3, 4, 8],
    //            [1, 0, 0, 3, 4, 2, 5, 6, 0],
    //            [8, 5, 9, 7, 6, 1, 0, 2, 0],
    //            [4, 2, 6, 8, 5, 3, 7, 9, 1],
    //            [7, 1, 3, 9, 2, 4, 8, 5, 6],
    //            [9, 0, 1, 5, 3, 7, 2, 1, 4],
    //            [2, 8, 7, 4, 1, 9, 6, 3, 5],
    //            [3, 0, 0, 4, 8, 1, 1, 7, 9]]);

    //     expect(result).to.be.false;
    // });
});