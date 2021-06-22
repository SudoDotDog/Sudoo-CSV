/**
 * @author WMXPY
 * @namespace CSV_Stringifier
 * @description Record
 */

import { CSVRecordObject, CSVRowObject } from "../declare";
import { CSVCellFormatter } from "../util/cell-formatter";
import { CSVBaseStringifier } from "./base";

export class CSVRecordStringifier<Row extends CSVRowObject = CSVRowObject> extends CSVBaseStringifier {

    public static create<Row extends CSVRowObject = CSVRowObject>(headers?: Array<keyof Row>): CSVRecordStringifier<Row> {

        return new CSVRecordStringifier<Row>(headers);
    }

    private readonly _headers?: Array<keyof Row>;
    private readonly _headersOverride: Partial<Row>;

    private constructor(headers?: Array<keyof Row>) {

        super();

        this._headers = headers;
        this._headersOverride = {};
    }

    public stringify(target: CSVRecordObject<Row>): string {

        if (!Array.isArray(target)) {
            throw new Error("[Sudoo-CSV] Target is not an array");
        }

        if (target.length <= 0) {
            return this._emptyFile;
        }

        const keys: any[] = this._headers ? this._headers : Object.keys(target[0]);

        const formatter: CSVCellFormatter = this._getCellFormatter();
        const rows: string[] = target.map((row: Row) => {

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
