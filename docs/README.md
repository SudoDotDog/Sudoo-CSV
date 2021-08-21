# Sudoo-CSV

[![Continuous Integration](https://github.com/SudoDotDog/Sudoo-CSV/actions/workflows/ci.yml/badge.svg)](https://github.com/SudoDotDog/Sudoo-CSV/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-CSV/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-CSV)
[![npm version](https://badge.fury.io/js/%40sudoo%2Fcsv.svg)](https://www.npmjs.com/package/@sudoo/csv)
[![downloads](https://img.shields.io/npm/dm/@sudoo/csv.svg)](https://www.npmjs.com/package/@sudoo/csv)

CSV Utils for JS

## Install

```sh
yarn add @sudoo/csv
# Or
npm install @sudoo/csv --save
```

## Usage

```ts
import { CSVRecordStringifier } from '@sudoo/csv';

const example = [{
    date_time: new Date(Date.UTC(1997, 1, 1, 0, 0, 1)),
    manufacturer: "First",
    model: "E100",
    description: "ac, abs, car",
    price: 2000,
}, {
    date_time: new Date(Date.UTC(1999, 1, 1, 0, 0, 1)),
    manufacturer: "Hello \"HM Edition\"",
    model: "E100",
    description: "\t",
    price: 4500,
}, {
    date_time: new Date(Date.UTC(1999, 1, 1, 0, 0, 1)),
    manufacturer: "Second",
    model: "",
    description: null,
    price: 5000,
}, {
    date_time: new Date(Date.UTC(1996, 1, 1, 0, 0, 1)),
    manufacturer: "Third",
    model: "The nice car",
    description: "Sell now!\nair, ac, abs,",
    price: 5000,
}];

const stringifier: CSVRecordStringifier = CSVRecordStringifier.of(example);

stringifier.setIncludesHeader(false);
stringifier.setNullReplacement('NULL');
stringifier.setDateCaster((target: Date) => {
    return `${target.getUTCFullYear()}-${target.getUTCMonth()}-${target.getUTCDate()} ${target.getUTCHours()}:${target.getUTCMinutes()}:${target.getUTCSeconds()}`;
});

stringifier.format(); // Result
```

Result

```txt
1997-1-1 0:0:1,First,E100,"ac, abs, car",2000,
1999-1-1 0:0:1,"Hello ""HM Edition""",E100,\t,4500,
1999-1-1 0:0:1,Second,,NULL,5000,
1996-1-1 0:0:1,Third,The nice car,"Sell now!
air, ac, abs,",5000,
```
