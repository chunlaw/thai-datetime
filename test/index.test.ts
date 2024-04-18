import {
  getThaiDay,
  getThaiFullDay,
  getThaiMonth,
  getThaiFullMonth,
  getThaiYear,
  getThaiFullTime,
  getThaiShortTime,
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
  expect(getThaiYear(date)).toStrictEqual(2534);
  expect(getThaiFullTime(date)).toStrictEqual("10 นาฬิกา 30 นาที");
  expect(getThaiShortTime(date)).toStrictEqual("10 โมง 30 ตอนเช้า");
})
