/**
 * @author WMXPY
 * @namespace CSV
 * @description Stringifier
 */

import { CSVRowObject, CSVTableArray } from "./declare";
import { csvCellToString } from "./string";

export class CSVStringifier<Row extends CSVRowObject = CSVRowObject> {

    public static of<Row extends CSVRowObject = CSVRowObject>(target: CSVTableArray<Row>): CSVStringifier {

        return new CSVStringifier<Row>(target);
    }

    private readonly _target: CSVTableArray<Row>;

    private constructor(target: CSVTableArray<Row>) {

        this._target = target;
    }

    public stringify(): string {

        if (!Array.isArray(this._target)) {
            throw new Error("[Sudoo-CSV] Target is not an array");
        }

        if (this._target.length <= 0) {
            return "";
        }

        const keys: string[] = Object.keys(this._target[0]);

        const rows: string[] = this._target.map((row: Row) => {

            return keys.map((key: string) => {
                return csvCellToString(row[key]);
            }).join(',');
        });
        return [keys, ...rows].join('\n');
    }
}
