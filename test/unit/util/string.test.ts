/**
 * @author WMXPY
 * @namespace CSV_Util
 * @description String
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { csvCellToString } from '../../../src';

describe('Given [String] Helper methods', (): void => {

    const chance: Chance.Chance = new Chance('csv-util-string');

    it('should be able to parse string target', (): void => {

        const cell: string = chance.string();

        const result: string = csvCellToString(cell);

        expect(result).to.be.equal(cell);
    });

    it('should be able to cast date', (): void => {

        const cell: Date = chance.date();

        const result: string = csvCellToString(cell);

        expect(result).to.be.equal(cell.getTime().toString());
    });
});
