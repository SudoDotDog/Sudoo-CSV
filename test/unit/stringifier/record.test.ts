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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('csv-stringifier-record');

    it('should be able to construct', (): void => {

        const stringifier: CSVRecordStringifier = CSVRecordStringifier.create();

        expect(stringifier).to.be.instanceOf(CSVRecordStringifier);
    });

    it('should be able to format object list', (): void => {

        const objectList = [
            { a: 1, b: "first" },
            { a: 2, b: "second" },
        ];

        const stringifier: CSVRecordStringifier = CSVRecordStringifier.create();

        const result: string = stringifier.stringify(objectList);

        expect(result).to.be.equal(
            ["a,b", "1,first", "2,second"].join('\r\n')
        );
    });

    it('should be able to format object list with custom delimiter', (): void => {

        const objectList = [
            { a: 1, b: "first" },
            { a: 2, b: "second" },
        ];

        const stringifier: CSVRecordStringifier = CSVRecordStringifier.create();
        stringifier.delimitWith(':');

        const result: string = stringifier.stringify(objectList);

        expect(result).to.be.equal(
            ["a:b", "1:first", "2:second"].join('\r\n')
        );
    });

    it('should be able to format object list with new liner', (): void => {

        const objectList = [
            { a: 1, b: "first" },
            { a: 2, b: "second" },
        ];

        const stringifier: CSVRecordStringifier = CSVRecordStringifier.create();
        stringifier.wrapWith(':');

        const result: string = stringifier.stringify(objectList);

        expect(result).to.be.equal(
            ["a,b", "1,first", "2,second"].join(':')
        );
    });
});
