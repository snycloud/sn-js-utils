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
function parseDate(str: string, format: string = 'yyyy-MM-dd'): Date {
    let rule = [];
    let sIndex = 0;
    const dates = [];

    dateFormatRules.forEach((item) => {
        for (let index = 0, rules = item.rules, len = rules.length; index < len; index++) {
            rule = rules[index];
            sIndex = format.indexOf(rule[0]);
            if (sIndex !== -1) {
                dates.push(parseFloat(str.substring(sIndex, sIndex + rule[1])) + (item.offset || 0));
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
function formatDate(date: Date | number = new Date(), fmt: string = 'yyyy-MM-dd HH:mm:ss'): string {
    if (date instanceof Date) {
        // nop
    } else if (typeof date === 'number') {
        date = new Date(date);
    } else {
        throw TypeError('parameter date should be Date or number');
    }

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
        fmt = fmt.replace(new RegExp(i + '+', 'g'), m => {
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
    return fmt;
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
 * 获取日期对应的时间戳(默认为当前时间)，支持日期格式字符串
 * @param {Date | string} date 日期
 * @returns {Number} 时间戳(单位:毫秒)
 */
function timestamp(date: Date | string = new Date(), format: string = 'yyyy-MM-dd'): number {
    if (BaseUtil.isDate(date)) {
        return (date as Date).getTime();
    }
    if (BaseUtil.isString(date)) {
        date = parseDate(date as string, format);
        return date.getTime();
    }
    return -1;
}


export default {
    parseDate,
    formatDate,
    formatDateToFriendly,
    timestamp,
};
