/**
 * 日期工具类
 * @Author snail
 */
/**
 * 将字符串解析成日期
 * @param {String} str 输入的日期字符串，如'2014-09-13'
 * @param {String} format 字符串格式，默认'yyyy-MM-dd'，支持如下：y、M、d、H、m、s、S，不支持w和q
 * @returns {Date} 解析后的Date类型日期
 *
 * @example
 *  parseDate('2018-11-26'); // new Date(2018, 10, 26)
 *  parseDate('26/11/2018', 'MM/dd/yyyy') // new Date(2018, 10, 26)
 *  parseDate('2018-11-26 13:28:43', 'yyyy-MM-dd HH:mm:ss') // new Date(2018, 10, 26, 13, 28, 43)
 *  parseDate('2018年11月26日', 'yyyy年MM月dd日') // new Date(2018, 10, 26)
 *  parseDate('2018年11月26日 11时40分', 'yyyy年MM月dd日 HH时mm分') // new Date(2018, 10, 26, 11, 40)
 */
declare function parseDate(str: string, format?: string): Date;
/**
 * 将日期格式化成指定格式的字符串
 * @param date 要格式化的日期，不传时默认当前时间，也可以是一个时间戳
 * @param fmt 目标字符串格式，支持的字符有：y,M,d,q,w,H,h,m,S，默认：yyyy-MM-dd HH:mm:ss
 * @returns {string} 返回格式化后的日期字符串
 *
 * @example
 *  formatDate(); // 2016-09-02 13:17:13
 *  formatDate(new Date(), 'yyyy-MM-dd'); // 2016-09-02
 *  formatDate(new Date(), 'yyyy-MM-dd 第q季度 www HH:mm:ss:SSS'); // 2016-09-02 第3季度 星期五 13:19:15:792
 *  formatDate(1472793615764); // 2016-09-02 13:20:15
 */
declare function formatDate(date?: Date | number, fmt?: string): string;
/**
 * 将一个日期格式化成友好格式，比如，1分钟以内的返回“刚刚”，
 * 当天的返回时分，当年的返回月日，否则，返回年月日
 * @param {Date | number} date 如: new Date('2017-11-11')
 * @returns {string} 解析后的友好化日期格式
 */
declare function formatDateToFriendly(date?: Date | number): string;
/**
 * 获取日期对应的时间戳(默认为当前时间)，支持日期格式字符串
 * @param {Date | string} date 日期
 * @returns {Number} 时间戳(单位:毫秒)
 */
declare function timestamp(date?: Date | string, format?: string): number;
declare const _default: {
    parseDate: typeof parseDate;
    formatDate: typeof formatDate;
    formatDateToFriendly: typeof formatDateToFriendly;
    timestamp: typeof timestamp;
};
export default _default;
