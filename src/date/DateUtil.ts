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
    formatDate: (date, fmt) => {
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
        if (obj.S !== 0) date.setMilliseconds(obj.S); // 如果设置了毫秒
        return date;
    },

    /**
     * 将一个日期格式化成友好格式，比如，1分钟以内的返回“刚刚”，
     * 当天的返回时分，当年的返回月日，否则，返回年月日
     * @param {Object} date 如: new Date('2017-11-11')
     * @returns {string} 解析后的友好化日期格式
     */
    formatDateToFriendly: function (date) {
        date = date || new Date();
        date = typeof date === 'number' ? new Date(date) : date;
        const now = new Date();
        if ((now.getTime() - date.getTime()) < 60 * 1000) return '刚刚'; // 1分钟以内视作“刚刚”
        const temp = this.formatDate(date, 'yyyy年M月d');
        if (temp === this.formatDate(now, 'yyyy年M月d')) return this.formatDate(date, 'HH:mm');
        if (date.getFullYear() === now.getFullYear()) return this.formatDate(date, 'M月d日');
        return temp;
    },

    /*/!**
     * 将一段时长转换成友好格式(参数以秒为单位)
     * @param {Object} second
     * @returns 返回计算后的友好格式
     *
     * 使用示例：
     *  formatDurationToFriendly(147); // “2分27秒”
     *  formatDurationToFriendly(1581); // “26分21秒”
     *  formatDurationToFriendly(15818); // “4小时24分”
     *!/
    formatDurationToFriendly: second => {
        if (second < 60) return second + '秒';
        else if (second < 60 * 60) {
            return (second - second % 60) / 60 + '分' + second % 60 + '秒';
        } else if (second < 60 * 60 * 24) {
            return (second - second % 3600) / 60 / 60 + '小时' + Math.round(second % 3600 / 60) + '分';
        }
        return (second / 60 / 60 / 24).toFixed(1) + '天';
    },

    /!**
     * 将时间转换成MM:SS形式(参数以秒为单位)
     * @param {Object} second
     * @returns 返回计算后的友好格式
     *
     * 使用示例：
     *  formatTimeToFriendly(147); // “2:27”
     *  formatTimeToFriendly(1581); // “26:21”
     *!/
    formatTimeToFriendly: second => {
        const m = Math.floor(second / 60);
        const mStr = m < 10 ? ('0' + m) : m + '';
        const s = second % 60;
        const sStr = s < 10 ? ('0' + s) : s + '';
        return mStr + ':' + sStr;
    },

    /!**
     * 判断某一年是否是闰年
     * @param year 可以是一个date类型，也可以是一个int类型的年份，不传默认当前时间
     *
     * @returns {boolean} 返回是否为闰年 true为是, false为否
     *!/
    isLeapYear: year => {
        if (year === undefined) year = new Date();
        if (year instanceof Date) year = year.getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    },

    /!**
     * 获取某一年某一月的总天数，没有任何参数时获取当前月份的
     * @param date 可以是一个date类型，也可以是一个int类型的年份
     * @param month 一个int类型的月份
     * @returns {number} 返回天数
     *
     * 使用示例：
     *  getMonthDays();
     *  getMonthDays(new Date());
     *  getMonthDays(2013, 12);
     *!/
    getMonthDays: function (date, month) {
        let y;
        let m;
        if (date === undefined) date = new Date();
        if (date instanceof Date) {
            y = date.getFullYear();
            m = date.getMonth();
        } else if (typeof date === 'number') {
            y = date;
            m = month - 1;
        }
        const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 非闰年的一年中每个月份的天数
        // 如果是闰年并且是2月
        if (m === 1 && this.isLeapYear(y)) return days[m] + 1;
        return days[m];
    },

    /!**
     * @description
     * 计算2日期之间的天数，用的是比较毫秒数的方法
     * 前者大返回正整数, 后者大返回负数
     *
     * 传进来的日期要么是Date类型，要么是yyyy-MM-dd格式的字符串日期, 但格式要统一
     * @param date1 如: 2018-12-05
     * @param date2 如: 2018-12-08
     *
     * @returns {number} 返回天数
     *
     * 使用示例：
     *  countDays(2018-12-05, 2018-12-08);
     *!/
    countDays: function (date1, date2) {
        const fmt = 'yyyy-MM-dd';
        date1 = this.formatDate(date1, fmt);
        date2 = this.formatDate(date2, fmt);
        date1 = new Date(date1);
        date2 = new Date(date2);
        return (date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24);
    },

    /!**
     * 计算n天后的日期
     * @param initDate：开始日期，默认为当天日期， 格式：yyyymmdd/yyyy-mm-dd
     * @param days:天数
     * @param flag：返回值， 年月日之间的分隔符， 默认为xxxx年xx月xx日格式
     *
     * @returns 返回计算后的日期
     *
     * 使用示例：
     *  getDateAfterDays(2018-12-05, 3, '-');
     *!/
    getDateAfterDays: (initDate, days, flag) => {
        if (!days) {
            return initDate;
        }
        initDate = initDate.replace(/-/g, '');
        let date;
        // 是否设置了起始日期
        if (!initDate.trim()) { // 没有设置初始化日期，就默认为当前日期
            date = new Date();
        } else {
            const year = initDate.substring(0, 4);
            const month = initDate.substring(4, 6);
            const day = initDate.substring(6, 8);
            date = new Date(year, month - 1, day); // 月份是从0开始的
        }
        date.setDate(date.getDate() + days);

        const yearStr = date.getFullYear();
        const monthStr = ('0' + (date.getMonth() + 1)).slice(-2, 8); // 拼接2位数月份
        const dayStr = ('0' + date.getDate()).slice(-2, 8); // 拼接2位数日期
        let result = '';
        if (!flag) {
            result = yearStr + '年' + monthStr + '月' + dayStr + '日';
        } else {
            result = yearStr + flag + monthStr + flag + dayStr;
        }
        return result;
    },

    /!**
     * 获取当前时间戳
     * @returns {number}
     *!/
    getTimestamp: () => {
        new Date().getTime();
    },*/
};
