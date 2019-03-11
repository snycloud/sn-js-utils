/**
 * 日期工具类
 * @Author snail
 */
declare const _default: {
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
    formatDate: (date: any, fmt: any) => any;
};
export default _default;
