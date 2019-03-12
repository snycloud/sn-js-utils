/**
 * 日期工具类
 * @Author snail
 */

export default {
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
    formatDate: (date = null, fmt = null) => {
        date = (date === undefined || date === null) ? new Date() : date;
        date = typeof date === 'number' ? new Date(date) : date;
        fmt = fmt || 'yyyy-MM-dd HH:mm:ss';
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
    },

    /**
     * 将字符串解析成日期
     * @param str 输入的日期字符串，如'2014-09-13'
     * @param fmt 字符串格式，默认'yyyy-MM-dd'，支持如下：y、M、d、H、m、s、S，不支持w和q
     * @returns {Date} 解析后的Date类型日期
     *
     * @example
     *  parseDate('2016-08-11'); // Thu Aug 11 2016 00:00:00 GMT+0800
     *  parseDate('2016-08-11 13:28:43', 'yyyy-MM-dd HH:mm:ss') // Thu Aug 11 2016 13:28:43 GMT+0800
     */
    parseDate: (str, fmt = 'yyyy-MM-dd') => {
        fmt = fmt || 'yyyy-MM-dd';
        const obj = {y: 0, M: 1, d: 0, H: 0, h: 0, m: 0, s: 0, S: 0};
        fmt.replace(/([^yMdHmsS]*?)(([yMdHmsS])\3*)([^yMdHmsS]*?)/g, ($1, $2, $3, $4) => {
            const srcStr = new RegExp($1 + '(\\d{' + $2.length + '})' + $4);
            str = str.replace(srcStr, (_m, _$1) => {
                obj[$3] = parseInt(_$1);
                return '';
            });
            return '';
        });
        obj.M--; // 月份是从0开始的，所以要减去1
        const date = new Date(obj.y, obj.M, obj.d, obj.H, obj.m, obj.s);
        if (obj.S !== 0) { // 如果设置了毫秒
            date.setMilliseconds(obj.S);
        }
        return date;
    },

    /**
     * 将一个日期格式化成友好格式，比如，1分钟以内的返回“刚刚”，
     * 当天的返回时分，当年的返回月日，否则，返回年月日
     * @param {Object} date 如: new Date('2017-11-11')
     * @returns {string} 解析后的友好化日期格式
     */
    formatDateToFriendly: function (date = new Date()) {
        date = typeof date === 'number' ? new Date(date) : date;
        const now = new Date();
        if ((now.getTime() - date.getTime()) < 60 * 1000) { // 1分钟以内视作“刚刚”
            return '刚刚';
        }
        const temp = this.formatDate(date, 'yyyy年M月d');
        if (temp === this.formatDate(now, 'yyyy年M月d')) {
            return this.formatDate(date, 'HH:mm');
        }
        if (date.getFullYear() === now.getFullYear()) {
            return this.formatDate(date, 'M月d日');
        }
        return temp;
    },

    test: (first, second) => {
        return first + second;
    },
};
