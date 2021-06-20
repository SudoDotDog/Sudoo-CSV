/**
 * @author WMXPY
 * @namespace CSV_Stringifier
 * @description Base
 */

import { DEFAULT_DELIMITER, DEFAULT_EMPTY_FILE, DEFAULT_NEW_LINER } from "../declare";

export class CSVBaseStringifier<T> {

    protected readonly _target: T;

    protected _delimiter: string;
    protected _newLiner: string;
    protected _emptyFile: string;

    protected constructor(target: T) {

        this._target = target;

        this._delimiter = DEFAULT_DELIMITER;
        this._newLiner = DEFAULT_NEW_LINER;
        this._emptyFile = DEFAULT_EMPTY_FILE;
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
}
