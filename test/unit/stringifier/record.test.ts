/**
 * @author WMXPY
 * @namespace CSV_Stringifier
 * @description Record
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { CSVRecordStringifier } from '../../../src';

describe('Given {CSVRecordStringifier} Class', (): void => {

    const chance: Chance.Chance = new Chance('csv-stringifier-record');

    it('should be able to construct', (): void => {

        const stringifier: CSVRecordStringifier = CSVRecordStringifier.of(chance.string() as any);

        expect(stringifier).to.be.instanceOf(CSVRecordStringifier);
    });

    it('should be able to format object list', (): void => {

        const objectList = [
            { a: 1, b: "first" },
            { a: 2, b: "second" },
        ];

        const stringifier: CSVRecordStringifier = CSVRecordStringifier.of(objectList);

        const result: string = stringifier.stringify();

        expect(result).to.be.equal(
            ["a,b", "1,first", "2,second"].join('\r\n')
        );
    });

    it('should be able to format object list with custom delimiter', (): void => {

        const objectList = [
            { a: 1, b: "first" },
            { a: 2, b: "second" },
        ];

        const stringifier: CSVRecordStringifier = CSVRecordStringifier.of(objectList);
        stringifier.delimitWith(':');

        const result: string = stringifier.stringify();

        expect(result).to.be.equal(
            ["a:b", "1:first", "2:second"].join('\r\n')
        );
    });

    it('should be able to format object list with new liner', (): void => {

        const objectList = [
            { a: 1, b: "first" },
            { a: 2, b: "second" },
        ];

        const stringifier: CSVRecordStringifier = CSVRecordStringifier.of(objectList);
        stringifier.wrapWith(':');

        const result: string = stringifier.stringify();

        expect(result).to.be.equal(
            ["a,b", "1,first", "2,second"].join(':')
        );
    });
});
