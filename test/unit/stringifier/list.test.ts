/**
 * @author WMXPY
 * @namespace CSV_Stringifier
 * @description Record
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { CSVListStringifier } from '../../../src';

describe('Given {CSVListStringifier} Class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('csv-stringifier-list');

    it('should be able to construct', (): void => {

        const stringifier: CSVListStringifier = CSVListStringifier.create([]);

        expect(stringifier).to.be.instanceOf(CSVListStringifier);
    });

    it('should be able to format object list', (): void => {

        const objectList = [
            [1, "first"],
            [2, "second"],
        ];

        const stringifier: CSVListStringifier = CSVListStringifier.create(["a", "b"]);

        const result: string = stringifier.stringify(objectList);

        expect(result).to.be.equal(
            ["a,b", "1,first", "2,second"].join('\r\n')
        );
    });

    it('should be able to format object list with custom delimiter', (): void => {

        const objectList = [
            [1, "first"],
            [2, "second"],
        ];

        const stringifier: CSVListStringifier = CSVListStringifier.create(["a", "b"]);
        stringifier.delimitWith(':');

        const result: string = stringifier.stringify(objectList);

        expect(result).to.be.equal(
            ["a:b", "1:first", "2:second"].join('\r\n')
        );
    });

    it('should be able to format object list with custom new liner', (): void => {

        const objectList = [
            [1, "first"],
            [2, "second"],
        ];

        const stringifier: CSVListStringifier = CSVListStringifier.create(["a", "b"]);
        stringifier.wrapWith(':');

        const result: string = stringifier.stringify(objectList);

        expect(result).to.be.equal(
            ["a,b", "1,first", "2,second"].join(':')
        );
    });
});
