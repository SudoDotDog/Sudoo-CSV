/**
 * @author WMXPY
 * @namespace Stringifier
 * @description Stringifier
 * @package Mock
 */

import { CSVBaseStringifier } from "../../src";

export class MockStringifier extends CSVBaseStringifier<any> {

    public static of(target: any): MockStringifier {

        return new MockStringifier(target);
    }

    private constructor(target: any) {

        super(target);
    }
}
