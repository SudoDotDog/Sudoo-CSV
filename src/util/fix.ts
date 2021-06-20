/**
 * @author WMXPY
 * @namespace CSV_Util
 * @description String
 */

export type FixCSVStringOptions = {

    readonly delimiter: string;
    readonly newLiner: string;
};

export const fixCSVCellString = (cell: string, options: FixCSVStringOptions): string => {

    let shouldQuote: boolean = false;
    let pipeCell: string = cell;

    if (pipeCell.includes("\"")) {
        pipeCell = pipeCell.replaceAll("\"", "\"\"");
        shouldQuote = true;
    }

    if (pipeCell.includes(options.delimiter)
        || pipeCell.includes(options.newLiner)) {
        shouldQuote = true;
    }

    if (shouldQuote) {
        return `"${pipeCell}"`;
    }
    return pipeCell;
};
