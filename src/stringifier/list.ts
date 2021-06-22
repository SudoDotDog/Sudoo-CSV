/**
 * @author WMXPY
 * @namespace CSV_Stringifier
 * @description List
 */

import { CSVCellType, CSVHeaderType, CSVListObject, CSVRowList } from "../declare";
import { CSVCellFormatter } from "../util/cell-formatter";
import { CSVBaseStringifier } from "./base";

export class CSVListStringifier<Row extends CSVRowList = CSVRowList> extends CSVBaseStringifier {

    public static create<Row extends CSVRowList = CSVRowList>(headers: CSVHeaderType[]): CSVListStringifier {

        return new CSVListStringifier<Row>(headers);
    }

    private readonly _headers: CSVHeaderType[];

    private _namedHeaders: Partial<Record<CSVHeaderType, CSVCellType>>;

    private constructor(headers: CSVHeaderType[]) {

        super();

        this._headers = headers;

        this._namedHeaders = {};
    }

    public get columns(): number {
        return this._headers.length;
    }

    public nameHeaders(headers: Partial<Record<CSVHeaderType, CSVCellType>>): this {

        this._namedHeaders = {
            ...this._namedHeaders,
            ...headers,
        };
        return this;
    }

    public nameHeader(index: CSVHeaderType, value: CSVCellType): this {

        this._namedHeaders[index] = value;
        return this;
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

        const header: string = this._headers.map((currentHeader: CSVHeaderType) => {
            if (this._namedHeaders[currentHeader]) {
                return this._namedHeaders[currentHeader];
            }
            return formatter.format(currentHeader);
        }).join(this._delimiter);
        return [header, ...rows].join(this._newLiner);
    }
}
