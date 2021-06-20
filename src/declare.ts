/**
 * @author WMXPY
 * @namespace CSV
 * @description Declare
 */

export type CSVTableArray<Element extends CSVRowObject = CSVRowObject> = Element[];
export type CSVRowObject = Record<string | number, string | number>;
