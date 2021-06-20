/**
 * @author WMXPY
 * @namespace CSV
 * @description Declare
 */

export type Writeable<T> = {
    -readonly [P in keyof T]: T[P];
};

export type CSVHeaderType = string | number | symbol;
export type CSVCellType = string | number | boolean | symbol | undefined | null;

export type CSVRecordObject<Element extends CSVRowObject = CSVRowObject> = Element[];
export type CSVRowObject = Record<CSVHeaderType, CSVCellType>;

export type CSVListObject<Element extends CSVRowList = CSVRowList> = Element[];
export type CSVRowList = CSVCellType[];

export const DEFAULT_DELIMITER = ",";
export const DEFAULT_NEW_LINER = "\r\n";
export const DEFAULT_EMPTY_FILE = "";
