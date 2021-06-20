/**
 * @author WMXPY
 * @namespace CSV_Stringifier
 * @description Base
 */

export class CSVBaseStringifier<T> {

    protected readonly _target: T;

    protected constructor(target: T) {

        this._target = target;
    }
}
