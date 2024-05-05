import {
  getThaiDay,
  getThaiFullDay,
  getThaiMonth,
  getThaiFullMonth,
  getThaiYear,
  getThaiFullTime,
  getThaiShortTime,
  getFullThaiDateString,
} from "../src"

const date = new Date();
date.setFullYear(1991);
date.setMonth(11);
date.setDate(2);
date.setHours(10);
date.setMinutes(30);

test("expected datetime", () => {
  expect(getThaiDay(date)).toStrictEqual("จ.");
  expect(getThaiFullDay(date)).toStrictEqual("วันจันทร์");
  expect(getThaiMonth(date)).toStrictEqual("ธ.ค.");
  expect(getThaiFullMonth(date)).toStrictEqual("ธันวาคม");
  expect(getThaiYear(date, { inWesternDigit: true })).toStrictEqual("2534");
  expect(getThaiFullTime(date, { inWesternDigit: true })).toStrictEqual("10 นาฬิกา 30 นาที");
  expect(getThaiShortTime(date, { inWesternDigit: true })).toStrictEqual("10 โมง 30 ตอนเช้า");
  expect(getThaiYear(date)).toStrictEqual("๒๕๓๔");
  expect(getThaiFullTime(date)).toStrictEqual("๑๐ นาฬิกา ๓๐ นาที");
  expect(getThaiShortTime(date)).toStrictEqual("๑๐ โมง ๓๐ ตอนเช้า");
  expect(getFullThaiDateString(date)).toStrictEqual("วันจันทร์ที่ ๒ ธันวาคมพศ ๒๕๓๔");
})
