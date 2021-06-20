/**
 * @author WMXPY
 * @namespace CSV_Stringifier
 * @description List
 */

import { CSVListObject, CSVRowList } from "../declare";
import { csvCellToString, CSVCellToStringOptions } from "../util/string";
import { CSVBaseStringifier } from "./base";

export class CSVListStringifier<Row extends CSVRowList = CSVRowList> extends CSVBaseStringifier<CSVListObject<Row>> {

    public static of<Row extends CSVRowList = CSVRowList>(target: CSVListObject<Row>, headers: Row): CSVListStringifier {

        return new CSVListStringifier<Row>(target, headers);
    }

    private readonly _headers: Row;

    private constructor(target: CSVListObject<Row>, headers: Row) {

        super(target);

        this._headers = headers;
    }

    public stringify(): string {

        if (!Array.isArray(this._target)) {
            throw new Error("[Sudoo-CSV] Target is not an array");
        }

        if (this._target.length <= 0) {
            return this._emptyFile;
        }

        const options: CSVCellToStringOptions = this._getCSVCellToStringOptions();
        const rows: string[] = this._target.map((row: Row) => {

            return row.map((cell: Row[number]) => {
                return csvCellToString(cell, options);
            }).join(this._delimiter);
        });

        const header: string = this._headers.join(this._delimiter);
        return [header, ...rows].join(this._newLiner);
    }
}
