/**
 * @author WMXPY
 * @namespace CSV_Stringifier
 * @description Record
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { CSVRecordStringifier } from '../../../src';

describe('Given {CSVStringifier} Class', (): void => {

    const chance: Chance.Chance = new Chance('csv-stringifier-record');

    it('should be able to construct', (): void => {

        const stringifier: CSVRecordStringifier = CSVRecordStringifier.of(chance.string() as any);

        expect(stringifier).to.be.instanceOf(CSVRecordStringifier);
    });
});
