/**
 * @author WMXPY
 * @namespace CSV_Stringifier
 * @description Record
 */

import { CSVRecordObject, CSVRowObject } from "../declare";
import { csvCellToString } from "../util/string";

export class CSVRecordStringifier<Row extends CSVRowObject = CSVRowObject> {

    public static of<Row extends CSVRowObject = CSVRowObject>(target: CSVRecordObject<Row>): CSVRecordStringifier {

        return new CSVRecordStringifier<Row>(target);
    }

    private readonly _target: CSVRecordObject<Row>;

    private constructor(target: CSVRecordObject<Row>) {

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
