/**
 * @author WMXPY
 * @namespace CSV_Stringifier
 * @description Record
 */

import { CSVRecordObject, CSVRowObject } from "../declare";
import { CSVCellFormatter } from "../util/cell-formatter";
import { CSVBaseStringifier } from "./base";

export class CSVRecordStringifier<Row extends CSVRowObject = CSVRowObject> extends CSVBaseStringifier<CSVRecordObject<Row>> {

    public static of<Row extends CSVRowObject = CSVRowObject>(target: CSVRecordObject<Row>): CSVRecordStringifier {

        return new CSVRecordStringifier<Row>(target);
    }

    private constructor(target: CSVRecordObject<Row>) {

        super(target);
    }

    public stringify(): string {

        if (!Array.isArray(this._target)) {
            throw new Error("[Sudoo-CSV] Target is not an array");
        }

        if (this._target.length <= 0) {
            return this._emptyFile;
        }

        const keys: string[] = Object.keys(this._target[0]);

        const formatter: CSVCellFormatter = this._getCellFormatter();
        const rows: string[] = this._target.map((row: Row) => {

            return keys.map((key: string) => {
                return formatter.format(row[key]);
            }).join(this._delimiter);
        });

        if (!this._includesHeader) {
            return rows.join(this._newLiner);
        }

        const header: string = keys.map((currentHeader: any) => {
            return formatter.format(currentHeader);
        }).join(this._delimiter);
        return [header, ...rows].join(this._newLiner);
    }
}
