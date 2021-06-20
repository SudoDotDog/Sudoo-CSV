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

    const chance: Chance.Chance = new Chance('csv-stringifier-list');

    it('should be able to construct', (): void => {

        const stringifier: CSVListStringifier = CSVListStringifier.of(chance.string() as any, []);

        expect(stringifier).to.be.instanceOf(CSVListStringifier);
    });

    it('should be able to format object list', (): void => {

        const objectList = [
            [1, "first"],
            [2, "second"],
        ];

        const stringifier: CSVListStringifier = CSVListStringifier.of(objectList, ["a", "b"]);
        const result: string = stringifier.stringify();

        expect(result).to.be.equal(
            ["a,b", "1,first", "2,second"].join('\n')
        );
    });
});
