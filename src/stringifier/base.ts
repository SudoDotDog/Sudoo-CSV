/**
 * @author WMXPY
 * @namespace CSV_Stringifier
 * @description Base
 */

import { DEFAULT_DELIMITER, DEFAULT_EMPTY_FILE, DEFAULT_NEW_LINER, Writeable } from "../declare";
import { CSVCellFormatter } from "../util/cell-formatter";
import { FixCSVStringOptions } from "../util/fix";
import { CSVCellToStringOptions, DefaultCSVCellToStringOptions } from "../util/string";

export abstract class CSVBaseStringifier<T> {

    protected readonly _target: T;

    protected _includesHeader: boolean;

    protected _delimiter: string;
    protected _newLiner: string;
    protected _emptyFile: string;

    protected _nullReplacement?: string;

    protected _dateCaster?: (target: Date) => string;
    protected _booleanCaster?: (target: boolean) => string;

    protected constructor(target: T) {

        this._target = target;

        this._includesHeader = true;

        this._delimiter = DEFAULT_DELIMITER;
        this._newLiner = DEFAULT_NEW_LINER;
        this._emptyFile = DEFAULT_EMPTY_FILE;
    }

    public setIncludesHeader(includesHeader: boolean): this {

        this._includesHeader = includesHeader;
        return this;
    }

    public delimitWith(delimiter: string): this {

        this._delimiter = delimiter;
        return this;
    }

    public wrapWith(newLiner: string): this {

        this._newLiner = newLiner;
        return this;
    }

    public emptyFileWith(emptyFile: string): this {

        this._emptyFile = emptyFile;
        return this;
    }

    public setNullReplacement(nullReplacement: string): this {

        this._nullReplacement = nullReplacement;
        return this;
    }

    public setDateCaster(dateCaster: (target: Date) => string): this {

        this._dateCaster = dateCaster;
        return this;
    }

    public setBooleanCaster(booleanCaster: (target: boolean) => string): this {

        this._booleanCaster = booleanCaster;
        return this;
    }

    protected _getCellFormatter(): CSVCellFormatter {

        const toStringOptions: CSVCellToStringOptions = this._getCSVCellToStringOptions();
        const fixOptions: FixCSVStringOptions = {

            delimiter: this._delimiter,
            newLiner: this._newLiner,
        };

        return CSVCellFormatter.create(toStringOptions, fixOptions);
    }

    protected _getCSVCellToStringOptions(): CSVCellToStringOptions {

        const config: Writeable<CSVCellToStringOptions> = {
            ...DefaultCSVCellToStringOptions,
        };

        if (typeof this._nullReplacement !== 'undefined') {
            config.nullReplacement = this._nullReplacement;
        }
        if (typeof this._dateCaster !== 'undefined') {
            config.dateCaster = this._dateCaster;
        }
        if (typeof this._booleanCaster !== 'undefined') {
            config.booleanCaster = this._booleanCaster;
        }

        return config;
    }
}
