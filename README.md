Thai Datetime
=========

Provide datetime string in Thai. 

Demo is available [here](https://ink.chunlaw.io/ref/datetime).

## Install
```
npm install thai-datetime
```
or
```
yarn add thai-datetime
```

## Example

```ts
import {
  getThaiDay,
  getThaiFullDay,
  getThaiMonth,
  getThaiFullMonth,
  getThaiYear,
  getThaiFullTime,
  getThaiShortTime,
} from "thai-datetime";

// set as local time 1991-12-02 10:30am
const date = new Date();
date.setFullYear(1991);
date.setMonth(11);
date.setDate(2);
date.setHours(10);
date.setMinutes(30);

getThaiDay(date); // "จ."
getThaiFullDay(date); // "วันจันทร์"
getThaiMonth(date); // "ธ.ค."
getThaiFullMonth(date); // "ธันวาคม"
getThaiYear(date, { inWesternDigit: true }) // "2534"
getThaiFullTime(date, { inWesternDigit: true }) // "10 นาฬิกา 30 นาที"
getThaiShortTime(date, { inWesternDigit: true }) // "10 โมง 30 ตอนเช้า"
getThaiYear(date); // "๒๕๓๔"
getThaiFullTime(date); // "๑๐ นาฬิกา ๓๐ นาที"
getThaiShortTime(date); // "๑๐ โมง ๓๐ ตอนเช้า"
getFullThaiDateString(date); // "วันจันทร์ที่ ๒ ธันวาคมพศ ๒๕๓๔"
```

## Usage

__getThaiDay__
```ts
getThaiDay = (date: Date): string
```
__getThaiFullDay__
```ts
getThaiFullDay = (date: Date): string
```
__getThaiMonth__
```ts
getThaiMonth = (date: Date): string
```
__getThaiFullMonth__
```ts
getThaiFullMonth = (date: Date): string
```
__getThaiYear__
```ts
getThaiYear = (date: Date): number
```
__getThaiFullTime__
```ts
getThaiFullTime = (date: Date): string
```
__getThaiShortTime__
```ts
getThaiShortTime = (date: Date): string
```

__getThaiDay__
```ts
// @return: possible Cantonese romanisation for each Chinese character in the input string
getRoman( input: string ): Array<string[]>
```

## Contribute
Project owner [chunlaw](https://github.com/chunlaw) is learning Thai, and everyone is welcome to contribute. 

## License

MIT license