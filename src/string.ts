/**
 * @author WMXPY
 * @namespace CSV
 * @description String
 */

export type CSVCellToStringOptions = {

    readonly nullReplacement: string;
};

const defaultCellToStringOptions: CSVCellToStringOptions = {

    nullReplacement: 'null',
};

export const csvCellToString = (cell: any, options: CSVCellToStringOptions = defaultCellToStringOptions): string => {

    if (typeof cell === 'undefined') {
        return "";
    }

    if (cell === null) {
        return options.nullReplacement;
    }

    if (cell.toString) {
        return cell.toString();
    }

    return String(cell);
};
