/**
 * 日期工具类
 * @Author snail
 */
/**
 * 将 字符串/时间戳 解析成日期对象
 * @param {Date | String | Number} date 输入的日期字符串，如'2014-09-13',或者时间戳
 * @param {String} format 字符串格式，默认'yyyy-MM-dd'，支持如下：y、M、d、H、m、s、S
 * @returns {Date} 解析后的Date对象
 *
 * @example
 *  parseDate('2018-11-26'); // new Date(2018, 10, 26)
 *  parseDate('11/26/2018', 'MM/dd/yyyy') // new Date(2018, 10, 26)
 *  parseDate('2018-11-26 13:28:43', 'yyyy-MM-dd HH:mm:ss') // new Date(2018, 10, 26, 13, 28, 43)
 *  parseDate('2018年11月26日', 'yyyy年MM月dd日') // new Date(2018, 10, 26)
 *  parseDate('2018年11月26日 11时40分', 'yyyy年MM月dd日 HH时mm分') // new Date(2018, 10, 26, 11, 40)
 *
 * @throws 如果传入的 date 参数不符合要求的类型，则抛出 TypeError 错误
 */
declare function parseDate(date: Date | string | number, format?: string): Date;
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
declare function formatDate(date?: Date | number, format?: string): string;
/**
 * 将一个日期格式化成友好格式，比如，1分钟以内的返回“刚刚”，
 * 当天的返回时分，当年的返回月日，否则，返回年月日
 * @param {Date | number} date 如: new Date('2017-11-11')
 * @returns {string} 解析后的友好化日期格式
 */
declare function formatDateToFriendly(date?: Date | number): string;
/**
 * 获取日期对应的时间戳
 * @param {Date | String} date 日期对象/日期字符串
 * @param {String} format 字符串模板(date参数为字符串时有效)
 * @returns {Number} 时间戳(单位:毫秒) 如果date参数不合法，则返回-1
 */
declare function timestamp(date?: Date | string, format?: string): number;
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
declare function dateBefore(date: Date | string | number, diff: IDateDiff, format?: string): Date;
/**
 * 计算指定日期往后推指定时间
 * @param {Date | string | number} date 初始日期，支持 Date 对象、日期字符串(需配合format参数)、时间戳
 * @param {IDateDiff} diff 日期差值，支持年、月、日、周、时、分、秒、毫秒
 * @param {string} format 日期格式字符串
 * @returns {Date} 计算后的日期
 */
declare function dateAfter(date: Date | string | number, diff: IDateDiff, format?: string): Date;
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
declare function isLeapYear(year: number): boolean;
/**
 * 计算在给定的年份中，给定的月份有多少天(会自动判断是否为闰年)
 * @param {Number} year 年份
 * @param {Number} month 月份 (0-11)
 */
declare function getDaysInMonth(year: number, month: number): number;
declare enum TimeDimension {
    Year = 0,
    Month = 1,
    Week = 2,
    Date = 3,
    Hour = 4,
    Minute = 5,
    Second = 6
}
/**
 * 获取时间的开头
 * @param date 日期
 * @param mode 时间维度 可以使用 Year Month Day Week Hour Minute Second
 * @param format 字符串模板
 */
declare function getDateStart(date: Date | string | number, mode: TimeDimension, format?: string): Date;
/**
 * 获取时间的结尾
 * @param date 日期
 * @param mode 时间维度 可以使用 Year Month Date Week Hour Minute Second
 * @param format 字符串模板
 */
declare function getDateEnd(date: Date | string | number, mode: TimeDimension, format?: string): Date;
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
declare function getDayCountOfYear(date: Date | string | number, format?: string): number;
/**
 * 获取给定日期在当年的第几天
 * @param {Date | String | Number} date 日期
 * @param {String} format 字符串模板
 *
 * @example
 *  getDayIndexOfYear('2017-01-20') => 20
 *  getDayIndexOfYear('2018-05-20') => 140
 */
declare function getDayIndexOfYear(date: Date | string | number, format?: string): number;
/**
 * 获取给定日期在当年的第几周
 * @param {Date | String | Number} date 日期
 * @param {String} format 字符串模板
 *
 * @example
 *  getWeekIndexOfYear('2017-01-20') => 3
 *  getWeekIndexOfYear('2018-05-20') => 20
 */
declare function getWeekIndexOfYear(date: Date | string | number, format?: string): number;
/**
 * 获取给定日期在当月的第几周
 * @param {Date | String | Number} date 日期
 * @param {String} format 字符串模板
 *
 * @example
 *  getWeekIndexOfMonth('2017-01-20') => 3
 *  getWeekIndexOfMonth('2018-05-20') => 2
 */
declare function getWeekIndexOfMonth(date: Date | string | number, format?: string): number;
interface ITimeSpan {
    Day: number;
    Hour: number;
    Minute: number;
    Second: number;
    Millsecond: number;
}
/**
 * 计算两个日期的差
 * @param date1 日期1
 * @param date2 日期2
 * @param format1 日期1如果是字符串，该参数用于指定字符串模板
 * @param format2 日期2如果是字符串，该参数用于指定字符串模板
 */
declare function getDateDiff(date1: Date | string | number, date2: Date | string | number, format1?: string, format2?: string): ITimeSpan;
declare const _default: {
    parseDate: typeof parseDate;
    formatDate: typeof formatDate;
    formatDateToFriendly: typeof formatDateToFriendly;
    timestamp: typeof timestamp;
    dateBefore: typeof dateBefore;
    dateAfter: typeof dateAfter;
    isLeapYear: typeof isLeapYear;
    getDaysInMonth: typeof getDaysInMonth;
    getDateStart: typeof getDateStart;
    getDateEnd: typeof getDateEnd;
    getDayCountOfYear: typeof getDayCountOfYear;
    getDayIndexOfYear: typeof getDayIndexOfYear;
    getWeekIndexOfYear: typeof getWeekIndexOfYear;
    getWeekIndexOfMonth: typeof getWeekIndexOfMonth;
    getDateDiff: typeof getDateDiff;
};
export default _default;
