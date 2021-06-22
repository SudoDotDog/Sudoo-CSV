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

    private _namedHeaders: Partial<Row>;

    private constructor(headers?: Array<keyof Row>) {

        super();

        this._headers = headers;

        this._namedHeaders = {};
    }

    public get columns(): number {
        return this._headers.length;
    }

    public nameHeaders(headers: Partial<Row>): this {

        this._namedHeaders = {
            ...this._namedHeaders,
            ...headers,
        };
        return this;
    }

    public nameHeader<K extends keyof Row>(key: K, value: Row[K]): this {

        this._namedHeaders[key] = value;
        return this;
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
