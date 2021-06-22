/**
 * @author WMXPY
 * @namespace CSV_Stringifier
 * @description List
 */

import { CSVListObject, CSVRowList } from "../declare";
import { CSVCellFormatter } from "../util/cell-formatter";
import { CSVBaseStringifier } from "./base";

export class CSVListStringifier<Row extends CSVRowList = CSVRowList> extends CSVBaseStringifier {

    public static create<Row extends CSVRowList = CSVRowList>(headers: Row): CSVListStringifier {

        return new CSVListStringifier<Row>(headers);
    }

    private readonly _headers: Row;

    private constructor(headers: Row) {

        super();
        this._headers = headers;
    }

    public stringify(target: CSVListObject<Row>): string {

        if (!Array.isArray(target)) {
            throw new Error("[Sudoo-CSV] Target is not an array");
        }

        if (target.length <= 0) {
            return this._emptyFile;
        }

        const formatter: CSVCellFormatter = this._getCellFormatter();
        const rows: string[] = target.map((row: Row) => {

            return row.map((cell: Row[number]) => {
                return formatter.format(cell);
            }).join(this._delimiter);
        });

        if (!this._includesHeader) {
            return rows.join(this._newLiner);
        }

        const header: string = this._headers.map((currentHeader: any) => {
            return formatter.format(currentHeader);
        }).join(this._delimiter);
        return [header, ...rows].join(this._newLiner);
    }
}
