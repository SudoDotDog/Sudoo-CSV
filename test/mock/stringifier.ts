/**
 * @author WMXPY
 * @namespace Stringifier
 * @description Stringifier
 * @package Mock
 */

import { CSVBaseStringifier } from "../../src";

export class MockStringifier extends CSVBaseStringifier {

    public static create(): MockStringifier {

        return new MockStringifier();
    }

    private constructor() {

        super();
    }
}
