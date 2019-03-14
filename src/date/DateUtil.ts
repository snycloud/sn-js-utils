/**
 * 日期工具类
 * @Author snail
 */

import BaseUtil from '../base/BaseUtil';

const dateFormatRules = [
    { rules: [['yyyy', 4]] },
    { rules: [['MM', 2], ['M', 1]], offset: -1 },
    { rules: [['dd', 2], ['d', 1]] },
    { rules: [['HH', 2], ['H', 1]] },
    { rules: [['mm', 2], ['m', 1]] },
    { rules: [['ss', 2], ['s', 1]] },
    { rules: [['SSS', 3], ['SS', 2], ['S', 1]] },
];

/**
 * 将 字符串/时间戳 解析成日期对象
 * @param {Date | String | Number} date 输入的日期字符串，如'2014-09-13',或者时间戳
 * @param {String} format 字符串格式，默认'yyyy-MM-dd'，支持如下：y、M、d、H、m、s、S，不支持w和q
 * @returns {Date} 解析后的Date对象
 *
 * @example
 *  parseDate('2018-11-26'); // new Date(2018, 10, 26)
 *  parseDate('26/11/2018', 'MM/dd/yyyy') // new Date(2018, 10, 26)
 *  parseDate('2018-11-26 13:28:43', 'yyyy-MM-dd HH:mm:ss') // new Date(2018, 10, 26, 13, 28, 43)
 *  parseDate('2018年11月26日', 'yyyy年MM月dd日') // new Date(2018, 10, 26)
 *  parseDate('2018年11月26日 11时40分', 'yyyy年MM月dd日 HH时mm分') // new Date(2018, 10, 26, 11, 40)
 * 
 * @throws 如果传入的 date 参数不符合要求的类型，则抛出异常
 */
function parseDate(date: Date | string | number, format: string = 'yyyy-MM-dd'): Date {
    // 如果传入的是日期对象，则不需解析，直接返回
    if (BaseUtil.isDate(date)) {
        return date as Date;
    }
    // 如果传入的是数字，则被认为是时间戳
    if (BaseUtil.isNumber(date)) {
        return new Date(date as number);
    }
    // 如果不是字符串，则表示类型不支持
    if (!BaseUtil.isString(date)) {
        throw TypeError('invalid date');
    }

    const dateStr = date as string;

    let rule = [];
    let sIndex = 0;
    const dates = [];

    dateFormatRules.forEach((item) => {
        for (let index = 0, rules = item.rules, len = rules.length; index < len; index++) {
            rule = rules[index];
            sIndex = format.indexOf(rule[0]);
            if (sIndex !== -1) {
                dates.push(parseFloat(dateStr.substring(sIndex, sIndex + rule[1])) + (item.offset || 0));
                // 如果匹配到规则中的第一条，则退出
                break;
            } else if (index === len - 1) {
                // 如果是规则中的最后一条，说明format格式中没有出现该字段
                dates.push(0);
            }
        }
    });

    return new Date(dates[0], dates[1], dates[2], dates[3], dates[4], dates[5], dates[6]);
}

/**
 * 将日期格式化成指定格式的字符串
 * @param {Date | Number} date 要格式化的日期，不传时默认当前时间，也可以是一个时间戳
 * @param {String} format 目标字符串格式，支持的字符有：y,M,d,q,w,H,h,m,S，默认：yyyy-MM-dd HH:mm:ss
 * @returns {String} 返回格式化后的日期字符串，日期不合法时返回字符串 'invalid date'
 *
 * @example
 *  formatDate(); // 2016-09-02 13:17:13
 *  formatDate(new Date(), 'yyyy-MM-dd'); // 2016-09-02
 *  formatDate(new Date(), 'yyyy-MM-dd 第q季度 www HH:mm:ss:SSS'); // 2016-09-02 第3季度 星期五 13:19:15:792
 *  formatDate(1472793615764); // 2016-09-02 13:20:15
 */
function formatDate(date: Date | number = new Date(), format: string = 'yyyy-MM-dd HH:mm:ss'): string {
    if (BaseUtil.isDate(date)) {
        // nop
    } else if (BaseUtil.isNumber(date)) {
        date = new Date(date);
    } else {
        return 'invalid date';
    }

    date = date as Date;
    const obj = {
        y: date.getFullYear(), // 年份，注意必须用getFullYear
        M: date.getMonth() + 1, // 月份，注意是从0-11
        d: date.getDate(), // 日期
        q: Math.floor((date.getMonth() + 3) / 3), // 季度
        w: date.getDay(), // 星期，注意是0-6
        H: date.getHours(), // 24小时制
        h: date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 12小时制
        m: date.getMinutes(), // 分钟
        s: date.getSeconds(), // 秒
        S: date.getMilliseconds(), // 毫秒
    };
    const week = ['天', '一', '二', '三', '四', '五', '六'];
    for (const i in obj) {
        format = format.replace(new RegExp(i + '+', 'g'), m => {
            let val = obj[i] + '';
            if (i === 'w') {
                return (m.length > 2 ? '星期' : '周') + week[val];
            }
            for (let j = 0, len = val.length; j < m.length - len; j++) {
                val = '0' + val;
            }
            return m.length === 1 ? val : val.substring(val.length - m.length);
        });
    }
    return format;
}

/**
 * 将一个日期格式化成友好格式，比如，1分钟以内的返回“刚刚”，
 * 当天的返回时分，当年的返回月日，否则，返回年月日
 * @param {Date | number} date 如: new Date('2017-11-11')
 * @returns {string} 解析后的友好化日期格式
 */
function formatDateToFriendly(date: Date | number = new Date()): string {
    date = BaseUtil.isNumber(date) ? new Date(date) : date;
    date = date as Date;
    const now = new Date();
    if ((now.getTime() - date.getTime()) < 60 * 1000) { // 1分钟以内视作“刚刚”
        return '刚刚';
    }
    const temp = formatDate(date, 'yyyy年M月d日');
    if (temp === formatDate(now, 'yyyy年M月d日')) {
        return formatDate(date, 'HH:mm');
    }
    if (date.getFullYear() === now.getFullYear()) {
        return formatDate(date, 'M月d日');
    }
    return temp;
}

/**
 * 获取日期对应的时间戳
 * @param {Date | String} date 日期对象/日期字符串
 * @param {String} format 字符串模板(date参数为字符串时有效)
 * @returns {Number} 时间戳(单位:毫秒) 如果date参数不合法，则返回-1
 */
function timestamp(date: Date | string = new Date(), format: string = 'yyyy-MM-dd'): number {
    try {
        date = parseDate(date, format);
        return date.getTime();
    } catch (e) {
        return -1;
    }
}



interface IDateDiff {
    year?: number;
    month?: number;
    week?: number;
    day?: number;
    hour?: number;
    minute?: number;
    second?: number;
    millsecond?: number;
}

/**
 * 计算指定日期往前推指定时间
 * @param {Date | string | number} date 初始日期，支持 Date 对象、日期字符串(需配合format参数)、时间戳
 * @param {IDateDiff} diff 日期差值，支持年、月、日、周、时、分、秒、毫秒
 * @param {string} format 日期格式字符串
 * @returns {Date} 计算后的日期
 * 
 * @description 如果 diff 采用混合模式(同时包含年月日)，则会先计算最小单位。
 * @deprecated 比如，2015年12月30日 加上 2个月零1天，先计算最小单位会得到 2016年2月29日；先计算最大单位会得到 2016年3月1日。
 * @description 参考:https://www.timeanddate.com/date/dateadded.html?m1=12&d1=30&y1=2015&type=add&ay=&am=02&aw=&ad=01&rec=
 */
function dateBefore(date: Date | string | number, diff: IDateDiff, format: string = 'yyyy-MM-dd'): Date {
    if (BaseUtil.isString(date)) {
        date = parseDate(date as string, format);
    } else if (BaseUtil.isNumber(date)) {
        date = new Date(date as number);
    } else if (!BaseUtil.isDate(date)) {
        // 如果传入的初始时间无法识别，则采用当前时间
        date = new Date();
    }
    date = date as Date;

    return _dateDiff(date, diff, DiffDirection.Before);
}

/**
 * 计算指定日期往后推指定时间
 * @param {Date | string | number} date 初始日期，支持 Date 对象、日期字符串(需配合format参数)、时间戳
 * @param {IDateDiff} diff 日期差值，支持年、月、日、周、时、分、秒、毫秒
 * @param {string} format 日期格式字符串
 * @returns {Date} 计算后的日期
 */
function dateAfter(date: Date | string | number, diff: IDateDiff, format: string = 'yyyy-MM-dd'): Date {
    if (BaseUtil.isString(date)) {
        date = parseDate(date as string, format);
    } else if (BaseUtil.isNumber(date)) {
        date = new Date(date as number);
    } else if (!BaseUtil.isDate(date)) {
        // 如果传入的初始时间无法识别，则采用当前时间
        date = new Date();
    }
    date = date as Date;

    return _dateDiff(date, diff, DiffDirection.After);
}

enum DiffDirection { Before, After }

/**
 * 内部日期计算函数
 * @param {Date} date 初始日期
 * @param {IDateDiff} diff 日期差值，支持年、月、日、周、时、分、秒、毫秒
 * @param {DiffDirection} direction 计算的方向
 */
function _dateDiff(date: Date, diff: IDateDiff, direction: DiffDirection): Date {
    const result = new Date();

    // 将天单位以下的计算出 millsecond
    const ms = (diff.week || 0) * 7 * 24 * 60 * 60 * 1000 +
        (diff.day || 0) * 24 * 60 * 60 * 1000 +
        (diff.hour || 0) * 60 * 60 * 1000 +
        (diff.minute || 0) * 60 * 1000 +
        (diff.second || 0) * 1000 +
        (diff.millsecond || 0);
    if (direction === DiffDirection.Before) {
        result.setTime(date.getTime() - ms);
    } else {
        result.setTime(date.getTime() + ms);
    }

    // 处理 month
    const n = result.getDate();
    result.setDate(1);
    if (direction === DiffDirection.Before) {
        result.setMonth(result.getMonth() - (diff.month || 0));
    } else {
        result.setMonth(result.getMonth() + (diff.month || 0));
    }
    result.setDate(Math.min(n, getDaysInMonth(result.getFullYear(), result.getMonth())));

    // 处理 year
    const m = result.getDate();
    result.setDate(1);
    if (direction === DiffDirection.Before) {
        result.setFullYear(result.getFullYear() - (diff.year || 0));
    } else {
        result.setFullYear(result.getFullYear() + (diff.year || 0));
    }
    result.setDate(Math.min(m, getDaysInMonth(result.getFullYear(), result.getMonth())));

    return result;
}

/**
 * 判断是否为闰年
 * @param {Number} year 年份
 * 
 * @example
 *   isLeapYear(1900) = false
 *   isLeapYear(2000) = true
 *   isLeapYear(2001) = false
 *   isLeapYear(2004) = true
 */
function isLeapYear(year: number): boolean {
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
}

/**
 * 计算在给定的年份中，给定的月份有多少天(会自动判断是否为闰年)
 * @param {Number} year 年份
 * @param {Number} month 月份 (0-11)
 */
function getDaysInMonth(year: number, month: number): number {
    return [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
}

enum TimeDimension { Year, Month, Week, Date, Hour, Minute, Second }

interface IDatePart {
    Year: number,
    Month: number,
    Date: number,
    Day: number,
    Hour: number,
    Minute: number,
    Second: number,
    Millsecond: number,
}

function _parseDatePart(date: Date): IDatePart {
    return {
        Year: date.getFullYear(),
        Month: date.getMonth(),
        Date: date.getDate(),
        Day: date.getDay(),
        Hour: date.getHours(),
        Minute: date.getMinutes(),
        Second: date.getSeconds(),
        Millsecond: date.getMilliseconds(),
    };
}

/**
 * 获取时间的开头
 * @param date 日期
 * @param mode 时间维度 可以使用 Year Month Day Week Hour Minute Second
 * @param format 字符串模板
 */
function getDateStart(date: Date | string | number, mode: TimeDimension, format: string = 'yyyy-MM-dd'): Date {
    try {
        date = parseDate(date, format);
    } catch {
        date = new Date();
    }

    const parts = _parseDatePart(date);

    switch (mode) {
        case TimeDimension.Year:
            return new Date(parts.Year, 0, 1);
        case TimeDimension.Month:
            return new Date(parts.Year, parts.Month, 1);
        case TimeDimension.Week:
            // todo: 返回周一
            return new Date();
        case TimeDimension.Date:
            return new Date(parts.Year, parts.Month, parts.Date);
        case TimeDimension.Hour:
            return new Date(parts.Year, parts.Month, parts.Date, parts.Hour);
        case TimeDimension.Minute:
            return new Date(parts.Year, parts.Month, parts.Date, parts.Hour, parts.Minute);
        case TimeDimension.Second:
            return new Date(parts.Year, parts.Month, parts.Date, parts.Hour, parts.Minute, parts.Second);
        default:
            throw TypeError('mode is invalid');
    }
}


/**
 * 获取时间的结尾
 * @param date 日期
 * @param mode 时间维度 可以使用 Year Month Date Week Hour Minute Second
 * @param format 字符串模板
 */
function getDateEnd(date: Date | string | number, mode: TimeDimension, format: string = 'yyyy-MM-dd'): Date {
    try {
        date = parseDate(date, format);
    } catch {
        date = new Date();
    }

    const parts = _parseDatePart(date);

    switch (mode) {
        case TimeDimension.Year:
            return dateBefore(new Date(parts.Year + 1, 0, 1), { millsecond: 1 });
        case TimeDimension.Month:
            return new Date(parts.Year, parts.Month, getDaysInMonth(parts.Year, parts.Month), 23, 59, 59, 999);
        case TimeDimension.Week:
            // todo: 返回周日
            return new Date();
        case TimeDimension.Date:
            return new Date(parts.Year, parts.Month, parts.Date, 23, 59, 59, 999);
        case TimeDimension.Hour:
            return new Date(parts.Year, parts.Month, parts.Date, parts.Hour, 59, 59, 999);
        case TimeDimension.Minute:
            return new Date(parts.Year, parts.Month, parts.Date, parts.Hour, parts.Minute, 59, 999);
        case TimeDimension.Second:
            return new Date(parts.Year, parts.Month, parts.Date, parts.Hour, parts.Minute, parts.Second, 999);
        default:
            throw TypeError('mode is invalid');
    }
}

/**
 * 获取给定日期所在当年有多少天
 * @param {Date | String | Number} date 日期
 * @param {String} format 字符串模板
 * 
 * @example
 *  getDayOfYear('2018-11-26') => 365
 *  getDayOfYear('12/20/2019', 'MM/dd/yyyy') => 365
 *  getDayOfYear('2020-12-20') => 366
 */
function getDayCountOfYear(date: Date | string | number, format: string = 'yyyy-MM-dd'): number {
    try {
        date = parseDate(date);
    } catch {
        date = new Date();
    }

    return isLeapYear(date.getFullYear()) ? 366 : 365;
}

/**
 * 获取给定日期在当年的第几天
 * @param {Date | String | Number} date 日期
 * @param {String} format 字符串模板
 * 
 * @example
 *  getDayIndexOfYear('2017-01-20') => 20
 *  getDayIndexOfYear('2018-05-20') => 140
 */
function getDayIndexOfYear(date: Date | string | number, format: string = 'yyyy-MM-dd'): number {
    try {
        date = parseDate(date);
    } catch {
        date = new Date();
    }

    const init = getDateStart(date, TimeDimension.Year);
    return Math.floor((date.getTime() - init.getTime()) / (24 * 60 * 60 * 1000)) + 1;
}

/**
 * 获取给定日期在当年的第几周
 * @param {Date | String | Number} date 日期
 * @param {String} format 字符串模板
 * 
 * @example
 *  getWeekIndexOfYear('2017-01-20') => 3
 *  getWeekIndexOfYear('2018-05-20') => 20
 */
function getWeekIndexOfYear(date: Date | string | number, format: string = 'yyyy-MM-dd'): number {
    try {
        date = parseDate(date);
    } catch {
        date = new Date();
    }

    const init = getDateStart(date, TimeDimension.Year);
    return Math.floor((date.getTime() - init.getTime()) / (7 * 24 * 60 * 60 * 1000)) + 1;
}

/**
 * 获取给定日期在当月的第几周
 * @param {Date | String | Number} date 日期
 * @param {String} format 字符串模板
 * 
 * @example
 *  getWeekIndexOfMonth('2017-01-20') => 3
 *  getWeekIndexOfMonth('2018-05-20') => 2
 */
function getWeekIndexOfMonth(date: Date | string | number, format: string = 'yyyy-MM-dd'): number {
    try {
        date = parseDate(date);
    } catch {
        date = new Date();
    }

    const init = getDateStart(date, TimeDimension.Month);
    return Math.floor((date.getTime() - init.getTime()) / (7 * 24 * 60 * 60 * 1000)) + 1;
}

interface ITimeSpan {
    Day: number,
    Hour: number,
    Minute: number,
    Second: number,
    Millsecond: number,
}

/**
 * 计算两个日期的差
 * @param date1 日期1
 * @param date2 日期2
 * @param format1 日期1如果是字符串，该参数用于指定字符串模板
 * @param format2 日期2如果是字符串，该参数用于指定字符串模板
 */
function getDateDiff(
    date1: Date | string | number,
    date2: Date | string | number,
    format1: string = 'yyyy-MM-dd',
    format2: string = 'yyyy-MM-dd'): ITimeSpan {

    // 如果第一个参数不是字符串，而第二个参数是字符串，则只需要传入一个format即可
    if (!BaseUtil.isString(date1) && BaseUtil.isString(date2)) {
        format2 = format1;
    }

    try {
        date1 = parseDate(date1, format1);
    } catch {
        date1 = new Date();
    }
    try {
        date2 = parseDate(date2, format2);
    } catch {
        date2 = new Date();
    }

    const timestampDiff = date2.getTime() - date1.getTime();
    const day = Math.floor(timestampDiff / (24 * 60 * 60 * 1000));
    const hour = Math.floor(timestampDiff % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));
    const minute = Math.floor((timestampDiff - day * 24 * 60 * 60 * 1000 - hour * 60 * 60 * 1000) / (60 * 1000));
    const second = Math.floor((timestampDiff - day * 24 * 60 * 60 * 1000 - hour * 60 * 60 * 1000 -
        minute * 60 * 1000) / 1000);
    const ms = timestampDiff - day * 24 * 60 * 60 * 1000 - hour * 60 * 60 * 1000 - minute * 60 * 1000 - second * 1000;
    return {
        Day: day,
        Hour: hour,
        Minute: minute,
        Second: second,
        Millsecond: ms,
    };
}

export default {
    parseDate,
    formatDate,
    formatDateToFriendly,
    timestamp,
    dateBefore,
    dateAfter,
    isLeapYear,
    getDaysInMonth,
    getDateStart,
    getDateEnd,
    getDayCountOfYear,
    getDayIndexOfYear,
    getWeekIndexOfYear,
    getWeekIndexOfMonth,
    getDateDiff,
};
