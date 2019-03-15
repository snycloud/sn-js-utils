/**
 * 字符串工具类
 * @Author LvXiaoMeng
 */
declare const _default: {
    /**
     * @description 判断字符串是否为空
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isEmpty: (input: any) => boolean;
    /**
     * @description 判断字符串是否不为空
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isNotEmpty: (input: any) => boolean;
    /**
     * @description 将字符串去除空格
     * @param {string} input 需要判断的字符串
     * @return {string} 去除空格后的字符串
     */
    trim: (input: any) => any;
    /**
     * @description 判断字符串是否以某个字符开头
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    startsWith: (input: any, prefix: any) => boolean;
    /**
     * @description 判断字符串是否以某个字符结束
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    endsWith: (input: any, suffix: any) => boolean;
    /**
     * @description 判断字符串是否包含某个字符
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    contains: (input: any, searchSeq: any) => boolean;
    /**
     * @description 判断两个字符串是否相等
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    equals: (input1: any, input2: any) => boolean;
    /**
     * @description 忽略大小写判断两个字符串是否相等
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    equalsIgnoreCase: (input1: any, input2: any) => boolean;
    /**
     * @description 判断字符串是否含有空格
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    containsWhitespace: (input: any) => boolean;
    /**
     * @description 生成指定个数的字符
     * @param {string} input 需要判断的字符串
     * @return {string} 指定个数的字符
     */
    repeat: (ch: any, repeatTimes: any) => string;
    /**
     * @description 去除字符串中的空格
     * @param {string} input 需要判断的字符串
     * @return {string} 去除空格后的字符串
     */
    deleteWhitespace: (input: any) => any;
    /**
     * @description 右侧填充
     * @param {string} input 需要判断的字符串
     * @return {string} 右侧填充后的字符串
     */
    rightPad: (input: any, size: any, padStr: any) => any;
    /**
     * @description 左侧填充
     * @param {string} input 需要判断的字符串
     * @return {string} 左侧填充后的字符串
     */
    leftPad: (input: any, size: any, padStr: any) => any;
    /**
     * @description 首字母转大写
     * @param {string} input 需要判断的字符串
     * @return {string} 首字母转大写后的字符串
     */
    capitalize: (input: any) => any;
    /**
     * @description 首字母转小写
     * @param {string} input 需要判断的字符串
     * @return {string} 首字母转小写后的字符串
     */
    unCapitalize: (input: any) => any;
    /**
     * @description 大写转小写，小写转大写
     * @param {string} input 需要判断的字符串
     * @return {string} 大写转小写，小写转大写后的字符串
     */
    swapCase: (input: any) => any;
    /**
     * @description 统计含有的子字符串的个数
     * @param {string} input 需要判断的字符串
     * @return {string} 统计后字符串的个数
     */
    countMatches: (input: any, sub: any) => number;
    /**
     * @description 只包含字母
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isAlpha: (input: any) => boolean;
    /**
     * @description 只包含字母、空格
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isAlphaSpace: (input: any) => boolean;
    /**
     * @description 只包含字母、数字
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isAlphanumeric: (input: any) => boolean;
    /**
     * @description 只包含字母、数字和空格
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isAlphanumericSpace: (input: any) => boolean;
    /**
     * @description 数字
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isNumeric: (input: any) => boolean;
    /**
     * @description 小数
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isDecimal: (input: any) => boolean;
    /**
     * @description 负小数
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isNegativeDecimal: (input: any) => boolean;
    /**
     * @description 正小数
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isPositiveDecimal: (input: any) => boolean;
    /**
     * @description 整数
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isInteger: (input: any) => boolean;
    /**
     * @description 正整数
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isPositiveInteger: (input: any) => boolean;
    /**
     * @description 负整数
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isNegativeInteger: (input: any) => boolean;
    /**
     * @description 只包含数字和空格
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isNumericSpace: (input: any) => boolean;
    /**
     * @description 只包含空格
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isWhitespace: (input: any) => boolean;
    /**
     * @description 只包含小写字母
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isAllLowerCase: (input: any) => boolean;
    /**
     * @description 只包含大写字母
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isAllUpperCase: (input: any) => boolean;
    /**
     * @description 如果字符串为空则使用默认字符串, 否则不变
     * @param {string} input 需要判断的字符串
     * @return {string} 字符串为空则使用默认字符串, 否则不变
     */
    defaultIfEmpty: (input: any, defaultStr: any) => any;
    /**
     * @description 字符串反转
     * @param {string} input 需要判断的字符串
     * @return {string} 反转后的字符串
     */
    reverse: (input: any) => any;
    /**
     * @description 删掉特殊字符(英文状态下)
     * @param {string} input 需要判断的字符串
     * @return {string} 删掉特殊字符(英文状态下)后的字符串
     */
    removeSpecialCharacter: (input: any) => any;
    /**
     * @description 只包含特殊字符、数字和字母（不包括空格，若想包括空格，改为[ -~]）
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isSpecialCharacterAlphanumeric: (input: any) => boolean;
    /**
     * @description 消息格式化
     * @param {String} message
     * @param {Array} arr
     */
    format: (message: any, arr: any) => any;
    /**
     * @description 中文校验
     * @param {String} input
     * @param {Boolean} ignoreCase : true or false
     */
    isChinese: (input: any) => boolean;
    /**
     *
     *
     * @description 去掉中文字符
     * @param {String} input
     * @param {string} 去掉中文字符后的字符串
     */
    removeChinese: (input: any) => any;
    /**
     * @description 转义元字符
     * @param {String} input
     * @param {string} 转义后的字符
     */
    escapeMetacharacter: (input: any) => any;
    /**
     * @description 转义字符串中的元字符
     * @param {String} input
     * @param {string} 转义后的字符串
     */
    escapeMetacharacterOfStr: (input: any) => any;
    /**
     * @description 连字符转驼峰式
     * @param {String} input
     * @param {string} 连字符转换成驼峰式
     */
    camelize: (input: any) => string;
    /**
     * @description 驼峰转连字符
     * @param {String} input
     * @param {Boolean} ignoreCase : true or false
     */
    hyphenate: (input: any) => string;
};
export default _default;
