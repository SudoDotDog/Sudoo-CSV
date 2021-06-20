/**
 * @author WMXPY
 * @namespace CSV
 * @description Stringifier
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { CSVStringifier } from '../../src';

describe('Given {CSVStringifier} Class', (): void => {

    const chance: Chance.Chance = new Chance('csv-stringifier');

    it('should be able to construct', (): void => {

        const stringifier: CSVStringifier = CSVStringifier.of(chance.string() as any);

        expect(stringifier).to.be.instanceOf(CSVStringifier);
    });
});
