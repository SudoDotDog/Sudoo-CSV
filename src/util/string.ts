/**
 * @author WMXPY
 * @namespace CSV_Util
 * @description String
 */

export enum CSV_DATE_CASE_METHOD {

    MILLISECONDS_SINCE_ELAPSED = "MILLISECONDS_SINCE_ELAPSED",
}

export type CSVCellToStringOptions = {

    readonly nullReplacement: string;
    readonly dateCastMethod: CSV_DATE_CASE_METHOD;
};

const defaultCellToStringOptions: CSVCellToStringOptions = {

    nullReplacement: 'null',
    dateCastMethod: CSV_DATE_CASE_METHOD.MILLISECONDS_SINCE_ELAPSED,
};

export const csvCellToString = (cell: any, options: CSVCellToStringOptions = defaultCellToStringOptions): string => {

    if (typeof cell === 'undefined') {
        return "";
    }

    if (cell === null) {
        return options.nullReplacement;
    }

    if (typeof cell === 'string') {
        return cell;
    }

    if (cell instanceof Date) {
        switch (options.dateCastMethod) {
            case CSV_DATE_CASE_METHOD.MILLISECONDS_SINCE_ELAPSED:
                return cell.getTime().toString();
            default:
                return cell.getTime().toString();
        }
    }

    if (cell.toString) {
        return cell.toString();
    }

    return String(cell);
};
