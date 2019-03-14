// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
/**
 * 字符串工具类
 * @Author LvXiaoMeng
 */

export default {
    /**
     * @description 判断字符串是否为空
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isEmpty: (input) => {
       /* const str = 'a2dfcfar1bzvb2';
        const str1 = 'a2dfcfar1bzvb1';
        console.log('index : ', str.indexOf('a'));
        console.log('last index : ', str.length);
        console.log('last index : ', str.lastIndexOf('a'));
        console.log('last index : ', str.length);
        console.log('last index : ', str1.length);
        console.log('last index : ', str.lastIndexOf('2'));
        console.log('last index : ', str1.lastIndexOf('2'));

        console.log('是否以2结尾 此时返回是: ', str.lastIndexOf('2') === (str.length - 1));
        console.log('是否以2结尾 此时返回否: ', str1.lastIndexOf('2') === (str1.length - 1));
        console.log('last index : ', str.lastIndexOf('a') < 0);*/
        if (input === null || input === '' || /^\s*$/.test(input)) {
            return true;
        } else {
            return false;
        }
    },

    /**
     * @description 判断字符串是否不为空
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isNotEmpty: function (input) {
        return !this.isEmpty(input);
    },

    /**
     * @description 将字符串去除空格
     * @param {string} input 需要判断的字符串
     * @return {string} 去除空格后的字符串
     */
    trim: (input) => {
        return input.replace(/\s+/g, '');
    },

    /**
     * @description 判断字符串是否以某个字符开头
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    startsWith: (input, prefix) => {
        return input.indexOf(input, prefix) === 0;
    },

    /**
     * @description 判断字符串是否以某个字符结束
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    endsWith: (input, suffix) => {
        return input.lastIndexOf(suffix) === (input.length - 1);
    },

    /**
     * @description 判断字符串是否包含某个字符
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    contains: (input, searchSeq) => {
        return input.indexOf(input, searchSeq) >= 0;
    },

    /**
     * @description 判断两个字符串是否相等
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    equals: (input1, input2) => {
        return input1 === input2;
    },
    /**
     * @description 忽略大小写判断两个字符串是否相等
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    equalsIgnoreCase: (input1, input2) => {
        return input2.toLocaleLowerCase() === input1.toLocaleLowerCase();
    },

    /**
     * @description 判断字符串是否含有空格
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    containsWhitespace: (input) => {
        const reg = /\s/;
        const result = reg.test(input);
        return result;
    },
    /**
     * @description 生成指定个数的字符
     * @param {string} input 需要判断的字符串
     * @return {string} 指定个数的字符
     */
    repeat: (ch, repeatTimes) => {
        let result = '';
        for (let i = 0; i < repeatTimes; i++) {
            result += ch;
        }
        return result;
    },
    /**
     * @description 去除字符串中的空格
     * @param {string} input 需要判断的字符串
     * @return {string} 去除空格后的字符串
     */
    deleteWhitespace: (input) => {
        return input.replace(/\s+/g, '');
    },
    /**
     * @description 右侧填充
     * @param {string} input 需要判断的字符串
     * @return {string} 右侧填充后的字符串
     */
    rightPad: function (input, size, padStr) {
        return input + this.repeat(padStr, size);
    },
    /**
     * @description 左侧填充
     * @param {string} input 需要判断的字符串
     * @return {string} 左侧填充后的字符串
     */
    leftPad: function (input, size, padStr){
        return this.repeat(padStr, size) + input;
    },

    /**
     * @description 首字母转大写
     * @param {string} input 需要判断的字符串
     * @return {string} 首字母转大写后的字符串
     */
    capitalize: (input) => {
        input = input.replace(input[0], input[0].toUpperCase());
        return input;
    },


    /**
     * @description 首字母转小写
     * @param {string} input 需要判断的字符串
     * @return {string} 首字母转小写后的字符串
     */
    unCapitalize: (input) => {
        input = input.replace(input[0], input[0].toLowerCase());
        return input;
    },

    /**
     * @description 大写转小写，小写转大写
     * @param {string} input 需要判断的字符串
     * @return {string} 大写转小写，小写转大写后的字符串
     */
    swapCase: (input) => {
        return input.replace(/[a-z]/ig, (matchStr) => {
            if (matchStr >= 'A' && matchStr <= 'Z') {
                return matchStr.toLocaleLowerCase();
            } else if (matchStr >= 'a' && matchStr <= 'z') {
                return matchStr.toLocaleUpperCase();
            }
        });
    },

    /**
     * @description 统计含有的子字符串的个数
     * @param {string} input 需要判断的字符串
     * @return {string} 统计后字符串的个数
     */
    countMatches: function(input, sub) {
        if (this.isEmpty(input) || this.isEmpty(sub)) {
            return 0;
        }
        let count = 0;
        let index = 0;
        while ((input.indexOf(sub, index)) !== -1) {
            index += sub.length;
            count++;
        }
        return count;
    },

    /**
     * @description 只包含字母
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isAlpha: (input) => {
        return /^[a-z]+$/i.test(input);
    },

    /**
     * @description 只包含字母、空格
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isAlphaSpace: (input) => {
        return /^[a-z\s]*$/i.test(input);
    },

    /**
     * @description 只包含字母、数字
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isAlphanumeric: (input) => {
        return /^[a-z0-9]+$/i.test(input);
    },

    /**
     * @description 只包含字母、数字和空格
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isAlphanumericSpace: (input) => {
        return /^[a-z0-9\s]*$/i.test(input);
    },

    /**
     * @description 数字
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isNumeric: (input) => {
        return /^(?:[1-9]\d*|0)(?:\.\d+)?$/.test(input);
    },

    /**
     * @description 小数
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isDecimal: (input) =>  {
        return /^[-+]?(?:0|[1-9]\d*)\.\d+$/.test(input);
    },

    /**
     * @description 负小数
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isNegativeDecimal: (input) => {
        return /^\-?(?:0|[1-9]\d*)\.\d+$/.test(input);
    },

    /**
     * @description 正小数
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isPositiveDecimal: (input) => {
        return /^\+?(?:0|[1-9]\d*)\.\d+$/.test(input);
    },

    /**
     * @description 整数
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isInteger: (input) => {
        return /^[-+]?(?:0|[1-9]\d*)$/.test(input);
    },

    /**
     * @description 正整数
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isPositiveInteger: (input) => {
        return /^\+?(?:0|[1-9]\d*)$/.test(input);
    },

    /**
     * @description 负整数
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isNegativeInteger: (input) => {
        return /^\-?(?:0|[1-9]\d*)$/.test(input);
    },

    /**
     * @description 只包含数字和空格
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isNumericSpace: (input) => {
        return /^[\d\s]*$/.test(input);
    },

    /**
     * @description 只包含空格
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isWhitespace: (input) => {
        return /^\s*$/.test(input);
    },

    /**
     * @description 只包含小写字母
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isAllLowerCase: (input) => {
        return /^[a-z]+$/.test(input);
    },

    /**
     * @description 只包含大写字母
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isAllUpperCase: (input) => {
        return /^[A-Z]+$/.test(input);
    },

    /**
     * @description 如果字符串为空则使用默认字符串, 否则不变
     * @param {string} input 需要判断的字符串
     * @return {string} 字符串为空则使用默认字符串, 否则不变
     */
    defaultIfEmpty: function(input, defaultStr) {
        return this.isEmpty(input) ? defaultStr : input;
    },

    /**
     * @description 字符串反转
     * @param {string} input 需要判断的字符串
     * @return {string} 反转后的字符串
     */
    reverse: function(input) {
        if (this.isEmpty(input)) {
            return '';
        }
        return input.split('').reverse().join('');
    },

    /**
     * @description 删掉特殊字符(英文状态下)
     * @param {string} input 需要判断的字符串
     * @return {string} 删掉特殊字符(英文状态下)后的字符串
     */
    removeSpecialCharacter: (input) => {
        return input.replace(/[!-/:-@\[-`{-~]/g, '');
    },

    /**
     * @description 只包含特殊字符、数字和字母（不包括空格，若想包括空格，改为[ -~]）
     * @param {string} input 需要判断的字符串
     * @return {boolean} 是/否
     */
    isSpecialCharacterAlphanumeric: (input) => {
        return /^[!-~]+$/.test(input);
    },

    /**
     * @description 消息格式化
     * @param {String} message
     * @param {Array} arr
     */
    format: (message, arr) => {
        return message.replace(/{(\d+)}/g,
            (matchStr, group1) => {
            return arr[group1];
        });
    },

    /**
     * @description 中文校验
     * @param {String} input
     * @param {Boolean} ignoreCase : true or false
     */
    isChinese: (input) => {
        return /^[\u4E00-\u9FA5]+$/.test(input);
    },

    /**
     * @description 去掉中文字符
     * @param {String} input
     * @param {string} 去掉中文字符后的字符串
     */
    removeChinese: (input) => {
        return input.replace(/[\u4E00-\u9FA5]+/gm, '');
    },

    /**
     * @description 转义元字符
     * @param {String} input
     * @param {string} 转义后的字符
     */
    escapeMetacharacter: (input) => {
        const metacharacter = '^$()*+.[]|\\-?{}|';
        if (metacharacter.indexOf(input) >= 0) {
            input = '\\' + input;
        }
        return input;
    },

    /**
     * @description 转义字符串中的元字符
     * @param {String} input
     * @param {string} 转义后的字符串
     */
     escapeMetacharacterOfStr: (input) => {
         return input.replace(/[\^\$\(\)\*\+\.\[\]\|\\\-\?\{\}\|]/gm, '\\$&');
     },

    /**
     * @description 连字符转驼峰式
     * @param {String} input
     * @param {string} 连字符转换成驼峰式
     */
    camelize: (input) => {
        return (input + '').replace(/-\D/g,
            (match) => {
                return match.charAt(1).toUpperCase();
            });
    },

    /**
     * @description 驼峰转连字符
     * @param {String} input
     * @param {Boolean} ignoreCase : true or false
     */
    hyphenate: (input) => {
        return (input + '').replace(/[A-Z]/g,
            (match) => {
                return '-' + match.toLowerCase();
            });
        },
};
