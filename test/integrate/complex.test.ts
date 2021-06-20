/**
 * @author WMXPY
 * @namespace CSV
 * @description Complex
 * @package Integrate Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { CSVRecordStringifier } from '../../src';

describe('Given (Complex) Integrate Scenario', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('integrate-complex');

    /* eslint-disable @typescript-eslint/no-magic-numbers */
    it('should be able to stringify cars csv', (): void => {

        const example = [{
            date_time: Date.UTC(1997, 1, 1, 0, 0, 1),
            manufacturer: "First",
            model: "E100",
            description: "ac, abs, car",
            price: 2000,
        }, {
            date_time: Date.UTC(1999, 1, 1, 0, 0, 1),
            manufacturer: "Hello \"HM Edition\"",
            model: "E100",
            description: "\t",
            price: 4500,
        }, {
            date_time: Date.UTC(1999, 1, 1, 0, 0, 1),
            manufacturer: "Second",
            model: "",
            description: null,
            price: 5000,
        }, {
            date_time: Date.UTC(1996, 1, 1, 0, 0, 1),
            manufacturer: "Third",
            model: "The nice car",
            description: "Sell now!\nair, ac, abs,",
            price: 5000,
        }];

        const stringifier: CSVRecordStringifier = CSVRecordStringifier.of(example);
        const csv: string = stringifier.stringify();

        expect(csv).to.be.equal(
            ["a,b", "1,first", "2,second"].join(':')
        );
    });
    /* eslint-enable @typescript-eslint/no-magic-numbers */
});
