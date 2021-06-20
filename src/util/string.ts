/**
 * @author WMXPY
 * @namespace CSV_Util
 * @description String
 */

export type CSVCellToStringOptions = {

    readonly nullReplacement: string;

    readonly dateCaster: (target: Date) => string;
    readonly booleanCaster: (target: boolean) => string;
};

export const DefaultCSVCellToStringOptions: CSVCellToStringOptions = {

    nullReplacement: 'null',

    dateCaster: (target: Date) => target.getTime().toString(),
    booleanCaster: (target: boolean) => target ? "True" : "False",
};

export const csvCellToString = (cell: any, options: CSVCellToStringOptions = DefaultCSVCellToStringOptions): string => {

    if (typeof cell === 'undefined') {
        return "";
    }

    if (cell === null) {
        return options.nullReplacement;
    }

    if (typeof cell === 'string') {
        return cell;
    }

    if (typeof cell === 'boolean') {
        return options.booleanCaster(cell);
    }

    if (typeof cell === 'symbol') {
        if (cell.description) {
            return cell.description;
        }
        return cell.toString();
    }

    if (cell instanceof Date) {
        return options.dateCaster(cell);
    }

    if (cell.toString) {
        return cell.toString();
    }

    return String(cell);
};
