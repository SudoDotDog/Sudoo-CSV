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
    it.only('should be able to stringify cars csv', (): void => {

        const example = [{
            date_time: new Date(Date.UTC(1997, 1, 1, 0, 0, 1)),
            manufacturer: "First",
            model: "E100",
            description: "ac, abs, car",
            price: 2000,
        }, {
            date_time: new Date(Date.UTC(1999, 1, 1, 0, 0, 1)),
            manufacturer: "Hello \"HM Edition\"",
            model: "E100",
            description: "\t",
            price: 4500,
        }, {
            date_time: new Date(Date.UTC(1999, 1, 1, 0, 0, 1)),
            manufacturer: "Second",
            model: "",
            description: null,
            price: 5000,
        }, {
            date_time: new Date(Date.UTC(1996, 1, 1, 0, 0, 1)),
            manufacturer: "Third",
            model: "The nice car",
            description: "Sell now!\nair, ac, abs,",
            price: 5000,
        }];

        const stringifier: CSVRecordStringifier = CSVRecordStringifier.of(example);

        stringifier.setIncludesHeader(false);
        stringifier.setDateCaster((target: Date) => {
            return `${target.getUTCFullYear()}-${target.getUTCMonth()}-${target.getUTCDate()} ${target.getUTCHours()}:${target.getUTCMinutes()}:${target.getUTCSeconds()}`;
        });

        const csv: string = stringifier.stringify();

        expect(csv).to.be.equal(
            [
                `1997-1-1 0:0:1,First,E100,"ac, abs, car",2000`,
                `1999-1-1 0:0:1,"Hello ""HM Edition""",E100,\t,4500`,
                `1999-1-1 0:0:1,Second,,null,5000`,
                `1996-1-1 0:0:1,Third,The nice car,"Sell now!\nair, ac, abs,",5000`,
            ].join('\r\n')
        );
    });
    /* eslint-enable @typescript-eslint/no-magic-numbers */
});
