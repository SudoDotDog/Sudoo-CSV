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

        pipeCell = pipeCell.replace(/"/g, "\"\"");
        shouldQuote = true;
    }

    if (!shouldQuote) {

        if (pipeCell.includes(options.delimiter)) {
            shouldQuote = true;
        }
    }

    if (!shouldQuote) {

        const newLinerElements: string[] = options.newLiner.split('');
        for (const newLinerElement of newLinerElements) {
            if (pipeCell.includes(newLinerElement)) {
                shouldQuote = true;
            }
        }
    }

    if (shouldQuote) {

        return `"${pipeCell}"`;
    }
    return pipeCell;
};
