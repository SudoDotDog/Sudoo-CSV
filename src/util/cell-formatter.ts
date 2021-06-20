/**
 * @author WMXPY
 * @namespace CSV_Util
 * @description Cell Formatter
 */

import { fixCSVCellString, FixCSVStringOptions } from "./fix";
import { csvCellToString, CSVCellToStringOptions } from "./string";

export class CSVCellFormatter {

    public static create(toStringOptions: CSVCellToStringOptions, fixOptions: FixCSVStringOptions): CSVCellFormatter {

        return new CSVCellFormatter(toStringOptions, fixOptions);
    }

    private readonly _toStringOptions: CSVCellToStringOptions;
    private readonly _fixOptions: FixCSVStringOptions;

    private constructor(toStringOptions: CSVCellToStringOptions, fixOptions: FixCSVStringOptions) {

        this._toStringOptions = toStringOptions;
        this._fixOptions = fixOptions;
    }

    public format(cell: any): string {

        return fixCSVCellString(
            csvCellToString(cell, this._toStringOptions),
            this._fixOptions,
        );
    }
}
