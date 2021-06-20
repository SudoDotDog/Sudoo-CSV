/**
 * @author WMXPY
 * @namespace CSV
 * @description Stringifier
 */

import { BaseCSVObject } from "./declare";

export class CSVStringifier<T extends BaseCSVObject = BaseCSVObject> {

    public static of<T extends BaseCSVObject = BaseCSVObject>(target: T): CSVStringifier {

        return new CSVStringifier<T>(target);
    }

    private readonly _target: T;

    private constructor(target: T) {

        this._target = target;
    }
}
