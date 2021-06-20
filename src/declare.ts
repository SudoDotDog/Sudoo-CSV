/**
 * @author WMXPY
 * @namespace CSV
 * @description Declare
 */

export type Writeable<T> = {
    -readonly [P in keyof T]: T[P];
};

export type CSVRecordObject<Element extends CSVRowObject = CSVRowObject> = Element[];
export type CSVRowObject = Record<string | number, string | number>;

export type CSVListObject = CSVRowList[];
export type CSVRowList = Array<string | number>;

export const DEFAULT_DELIMITER = ",";
export const DEFAULT_NEW_LINER = "\n";
export const DEFAULT_EMPTY_FILE = "";
