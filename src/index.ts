export interface ThaiDateFormatOptions {
  inWesternDigit: boolean;
}

export const getThaiDay = (date: Date): string => {
  switch (date.getDay()) {
    case 1: return "จ.";
    case 2: return "อ.";
    case 3: return "พ.";
    case 4: return "พฤ.";
    case 5: return "ศ.";
    case 6: return "ส.";
    default:
      return "อา.";
  }
}

export const getThaiFullDay = (date: Date): string => {
  switch (date.getDay()) {
    case 1: return "วันจันทร์";
    case 2: return "วันอังคาร";
    case 3: return "วันพุธ";
    case 4: return "วันพฤหัสบดี";
    case 5: return "วันศุกร์";
    case 6: return "วันเสาร์";
    default:
      return "วันอาทิตย์";
  }
}

export const getThaiDate = (date: Date): string => {
  return `${date.getDate()}`.split('').map(v => numberMap[parseInt(v, 10)]).join('');
}

export const getThaiMonth = (date: Date): string => {
  switch (date.getMonth()) {
      case 0: return  "ม.ค.";
      case 1: return  "ก.พ.";
      case 2: return  "มี.ค.";
      case 3: return  "เม.ย.";
      case 4: return  "พ.ค.";
      case 5: return  "มิ.ย.";
      case 6: return  "ก.ค.";
      case 7: return  "ส.ค.";
      case 8: return  "ก.ย.";
      case 9: return  "ต.ค.";
      case 10: return "พ.ย.";
      default: return "ธ.ค.";
  }
}

export const getThaiFullMonth = (date: Date): string => {
  switch (date.getMonth()) {
      case 0: return "มกราคม";
      case 1: return "กุมภาพันธ์";
      case 2: return "มีนาคม";
      case 3: return "เมษายน";
      case 4: return "พฤษภาคม";
      case 5: return "มิถุนายน";
      case 6: return "กรกฎาคม";
      case 7: return "สิงหาคม";
      case 8: return "กันยายน";
      case 9: return "ตุลาคม";
      case 10: return "พฤศจิกายน";
      default: return "ธันวาคม";
  }
}

export const numberMap = ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"];

export const getThaiYear = (date: Date, { inWesternDigit }: ThaiDateFormatOptions = { inWesternDigit: false}): string => {
  const ret = date.getFullYear() + 543;
  if ( inWesternDigit ) {
    return `${ret}`;
  }
  return `${ret}`.split("").map(v => numberMap[parseInt(v, 10)]).join('');
}

export const getThaiFullTime = (date: Date, { inWesternDigit }: ThaiDateFormatOptions = { inWesternDigit: false}): string => {
  const hour = `${date.getHours()}`.split('').map(v => inWesternDigit ? v : numberMap[parseInt(v,10)]).join('');
  const minute = `${date.getMinutes()}`.split('').map(v => inWesternDigit ? v : numberMap[parseInt(v,10)]).join('');
  if ( inWesternDigit ) {
    return `${hour} นาฬิกา ${minute} นาที`;
  }
  return `${hour} นาฬิกา ${minute} นาที`;
}

export const getThaiShortTime = (date: Date, { inWesternDigit }: ThaiDateFormatOptions = { inWesternDigit: false}): string => {
  const hour = date.getHours()
  const minute = date.getMinutes();
  const result = [];

  if ( hour === 0 ) {
    result.push("เที่ยงคีน");
  } else if ( hour <= 5 ) {
    result.push("ตี");
    result.push(`${hour}`.split('').map(v => inWesternDigit ? v : numberMap[parseInt(v,10)]).join(''));
  } else if ( hour <= 11 ) {
    result.push(`${hour}`.split('').map(v => inWesternDigit ? v : numberMap[parseInt(v,10)]).join(''))
    result.push("โมง")
  } else if ( hour === 12 ) {
    result.push("เที่ยงคืน")
  } else if ( hour <= 13 ) {
    result.push("บ่ายโมง")
  } else if ( hour <= 17 ) {
    result.push("บ่าย")
    result.push(`${hour - 12}`.split('').map(v => inWesternDigit ? v : numberMap[parseInt(v,10)]).join(''))
    result.push("โมง")
  } else if ( hour === 18 ) {
    result.push(`${hour - 12}`.split('').map(v => inWesternDigit ? v : numberMap[parseInt(v,10)]).join(''))
    result.push("โมง")
  } else if ( hour <= 23 ) {
    result.push(`${hour % 18}`.split('').map(v => inWesternDigit ? v : numberMap[parseInt(v,10)]).join(''))
    result.push("ทุ่ม")
  } else {
    result.push("เที่ยงคืน")
  }

  if ( minute !== 0 ) {
    result.push(`${minute}`.split('').map(v => inWesternDigit ? v : numberMap[parseInt(v,10)]).join(''))
    if ( minute >= 1 && minute <= 14 ) {
      result.push("นาที")
    }
  }
  if ( hour >= 6 && hour <= 11 ) {
    if ( minute === 0 ) {
      result.push("เช้า")
    } else {
      result.push("ตอนเช้า")
    }
  } else if ( hour === 18 ) {
    if ( minute === 0 ) {
      result.push("ย็น")
    } else {
      result.push("ตอนเย็น")
    }
  }
  return result.join(" ")
}

export const getFullThaiDateString = (date: Date): string => {
  return `${getThaiFullDay(date)}ที่ ${getThaiDate(date)} ${getThaiFullMonth(date)}พศ ${getThaiYear(date)}`;
}