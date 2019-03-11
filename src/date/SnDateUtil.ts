/**
 * 日期工具类
 * @Author snail
 */
const SnDateUtil = {
    /**
     * 将日期格式化成指定格式的字符串
     * @param date 要格式化的日期，不传时默认当前时间，也可以是一个时间戳
     * @param fmt 目标字符串格式，支持的字符有：y,M,d,q,w,H,h,m,S，默认：yyyy-MM-dd HH:mm:ss
     * @returns 返回格式化后的日期字符串
     *
     * 使用示例
     *  formatDate(); // 2016-09-02 13:17:13
     *  formatDate(new Date(), 'yyyy-MM-dd'); // 2016-09-02
     *  formatDate(new Date(), 'yyyy-MM-dd 第q季度 www HH:mm:ss:SSS'); // 2016-09-02 第3季度 星期五 13:19:15:792
     *  formatDate(1472793615764); // 2016-09-02 13:20:15
     */
    formatDate(date, fmt) {
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
};
export default SnDateUtil;
