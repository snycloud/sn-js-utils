/**
 * 日期工具类
 * @Author snail
 */
declare const _default: {
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
    formatDate: (date: any, fmt: any) => any;
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
    parseDate: (str: any, fmt?: string) => Date;
    /**
     * 将一个日期格式化成友好格式，比如，1分钟以内的返回“刚刚”，
     * 当天的返回时分，当年的返回月日，否则，返回年月日
     * @param {Object} date 如: new Date('2017-11-11')
     * @returns {string} 解析后的友好化日期格式
     */
    formatDateToFriendly: (date: any) => any;
};
export default _default;
