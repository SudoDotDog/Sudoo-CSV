/**
 * @author WMXPY
 * @namespace CSV
 * @description Declare
 */

export type CSVRecordObject<Element extends CSVRowObject = CSVRowObject> = Element[];
export type CSVRowObject = Record<string | number, string | number>;

export type CSVListObject = CSVRowList[];
export type CSVRowList = Array<string | number>;
