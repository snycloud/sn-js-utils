/**
 * 字符串工具类
 * @Author LvXiaoMeng
 */


/**
 * 判断字符串是否为空
 * @param {String} input 输入字符串，如'我是测试的字符串'
 * @returns {boolean} 是/否
 *
 * @example
 *  isEmpty('我是测试的字符串'); // false
 *  isEmpty(''); // true
 */
function isEmpty(input: string): boolean {
    return input === null || input === '' || /^\s*$/.test(input);
}

/**
 * 判断字符串是否不为空
 * @param {String} input 输入字符串，如'我是测试的字符串'
 * @returns {boolean} 是/否
 *
 * @example
 *  isNotEmpty('我是测试的字符串'); // true
 *  isNotEmpty(''); // false
 */
function isNotEmpty(input: string): boolean {
    return !this.isEmpty(input);
}

/**
 * 将字符串去除空格
 * @param {string} input 输入字符串，如'我是测 试的字符串'
 * @returns {string} 去除空格后的字符串
 *
 * @example
 *  trim(' 测试字符串 '); // 测试字符串
 *  trim('我是测 试的字符串'); // 我是测试的字符串
 */
function trim(input: string): string {
    return input.replace(/\s+/g, '');
}

/**
 * 判断字符串是否以某个字符串开头
 * @param {string} input 输入字符串，如' a2dfcfar1bzvb2 '
 * @param {string} prefix 输入字符串，如'a'
 * @returns {boolean} 是/否
 *
 * @example
 *  startsWith('a2dfcfar1bzvb2','a'); // true
 */
function startsWith(input: string, prefix: string): boolean {
    return input.indexOf(prefix) === 0;
}

/**
 * 判断字符串是否以某个字符串结束
 * @param {String} input 输入字符串，如' a2dfcfar1bzvb '
 * @param {string} suffix 输入字符串，如'b'
 * @returns {boolean} 是/否
 *
 * @examplec
 *  endsWith('a2dfcfar1bzvb','b'); // true
 */
function endsWith(input: string, suffix: string): boolean {
    return input.lastIndexOf(suffix) === (input.length - 1);
}

/**
 * 判断字符串是否包含某个字符串
 * @param {String} input 输入字符串，如'a2dfcfar1bzvb2'
 * @param {string} searchSeq 输入字符串，如'b'
 * @returns {boolean} 是/否
 *
 * @example
 *  contains('2a2dfcfar1bzvb2','2'); // true
 */
function contains(input: string, searchSeq: string): boolean {
    return input.indexOf(searchSeq) >= 0;
}

/**
 * 判断两个字符串是否相等
 * @param {string|number} input1 输入字符串，如'我是测试的字符串' 或 输入数字如 220022
 * @param {String|number} input2 输入字符串，如'我是测试的字符串' 或 输入数字如 220022
 * @returns {boolean} 是/否
 *
 * @example
 *  equals('我是测试的字符串', '我是测试的字符串'); // true
 *  equals('我不是测试的字符串 ', '我是测试的字符串'); // false
 */
function equals(input1: string | number, input2: string | number): boolean {
    return input1 === input2;
}

/**
 * 忽略大小写判断两个字符串是否相等
 * @param {String} input1 输入字符串，如'equalsIgnoreCasE',
 * @param {String} input2 输入字符串，如'equalsIgnoreCase'
 * @returns {boolean} 是/否
 *
 * @example
 *  equalsIgnoreCase('equalsIgnoreCasE', 'equalsIgnoreCase'); // true
 *  equalsIgnoreCase('equals ', 'equalsIgnoreCase'); // false
 */
function equalsIgnoreCase(input1: string, input2: string): boolean {
    return input2.toLocaleLowerCase() === input1.toLocaleLowerCase();
}

/**
 * 判断字符串是否含有空格
 * @param {String} input 输入字符串，如'我是 测试 的 字符串'
 * @returns {boolean} 是/否
 *
 * @example
 *  containsWhitespace('我是 测试 的 字符串  '); // true
 *  containsWhitespace('我是测试的字符串'); // false
 */
function containsWhitespace(input: string): boolean {
    const reg = /\s/;
    return reg.test(input);
}

/**
 * 按指定数量生成给定字符串字符
 * @param {string|number} ch 输入字符串,如'我是测试的字符串', 或 输入数字如 220022
 * @param {number} repeatTimes 输入数字,如 '6'
 * @returns {string} 指定数量的给定字符串
 *
 * @example
 *  repeat('AB ',6); // 'AB AB AB AB AB AB '
 *  repeat('C  D',3); //'C  DC  DC  D'
 */
function repeat(ch: string | number, repeatTimes: number): string {
    let result = '';
    for (let i = 0; i < repeatTimes; i++) {
        result += ch;
    }
    return result;
}

/**
 * 去除字符串中的空格
 * @param {string} input 输入字符串,如'我是 测试 的 字符串  '
 * @returns {string} 去除空格后的字符串
 *
 * @example
 *  deleteWhitespace('我是 测试 的 字符串  '); // '我是测试的字符串'
 *  deleteWhitespace(''); //''
 */
function deleteWhitespace(input: string): string {
    return input.replace(/\s+/g, '');
}

/**
 * 将给定字符串进行右侧填充
 * @param {string|number} input 输入字符串, 如'我是测试的字符串', 或 输入数字如 2222
 * @param {number} size 输入数字,如 2
 * @param {string|number } padStr 输入填充字符, 如 '--' 或 输入数字如 33
 * @returns {string} 右侧填充后的字符串
 *
 * @example
 *  rightPad(2222, 1, 33); // '222233'
 *  rightPad('我是测试的字符串', 2, '--'); //'----我是测试的字符串'
 */
function rightPad(input: string | number, size: number, padStr: number | string): string {
    return input + this.repeat(padStr, size);
}

/**
 * 将给定字符进行左侧填充
 * @param {string|number} input 输入字符串,如'我是测试的字符串' 或 输入数字如 220022
 * @param {number} size 输入数字,如 2
 * @param {string|number} padStr 输入填充字符,如 '--'输入数字如 220022
 * @returns {string} 左侧填充后的字符串
 *
 * @example
 *  leftPad('我是测试的字符串', 2, '--'); // '----我是测试的字符串'
 *  leftPad(2222, 2, 3); //'332222'
 */
function leftPad(input: string | number, size: number, padStr: number | string): string {
    return this.repeat(padStr, size) + input;
}

/**
 * 将字符串首字母转大写
 * @param {string}  input 输入字符串,如'admin'
 * @returns {string} 首字母转大写后的字符串
 *
 * @example
 *  capitalize('admin'); // 'Admin'
 */
function capitalize(input: string): string {
    input = input.replace(input[0], input[0].toUpperCase());
    return input;
}

/**
 * 将字符串首字母转小写
 * @param {string}  input 输入字符串,如'Capitalize',
 * @returns {string} 首字母转小写后的字符串
 *
 * @example
 * unCapitalize('Capitalize'); // 'capitalize'
 */
function unCapitalize(input: string): string {
    input = input.replace(input[0], input[0].toLowerCase());
    return input;
}

/**
 * 将字符串中的字母大写转小写，小写转大写
 * @param {string}  input 输入字符串,如'abcde',
 * @returns {string} 大写转小写，小写转大写后的字符串
 *
 * @example
 *  swapCase('aBcde'); // 'AbCDE'
 *  swapCase('ABCDe'); // 'abcdE'
 */
function swapCase(input: string): string {
    return input.replace(/[a-z]/ig, (matchStr) => {
        if (matchStr >= 'A' && matchStr <= 'Z') {
            return matchStr.toLocaleLowerCase();
        } else if (matchStr >= 'a' && matchStr <= 'z') {
            return matchStr.toLocaleUpperCase();
        }
    });
}

/**
 * 统计含有的子字符串的个数
 * @param {string} input 输入字符串,如'abcdeabcdeabcde',
 * @param {string} sub 输入字符串,如'ab',
 * @returns {number} 统计后字符串的个数
 *
 * @example
 *  countMatches('dabddadb', 'da'); // 2
 *  countMatches('abcdeabcdeabcde','ab'); // 3
 */
function countMatches(input: string, sub: string): number {
    if (this.isEmpty(input) || this.isEmpty(sub)) {
        return 0;
    }
    let count = 0;
    let index = 0;
    // tslint:disable-next-line
    while ((index = input.indexOf(sub, index)) !== -1) {
        index += sub.length;
        count++;
    }
    // @ts-ignore
    return count;
}

/**
 * 判断字符串是否为字母
 * @param {string} input 输入字符串,如'abcdeabcdeabcde',
 * @returns  {boolean} 是/否
 *
 * @example
 *  isAlpha('我是测试的字符串'); // false
 *  isAlpha('abcdeabcdeabcde'); // true
 */
function isAlpha(input: string): boolean {
    // @ts-ignore
    return /^[a-z]+$/i.test(input);
}

/**
 * 判断字符串是否为字母、空格
 * @param {string}  input 输入字符串, 如'abcd eabc deab cde',
 * @returns {boolean} 是/否
 *
 * @example
 *  isAlphaSpace(' 测试 '); // false
 *  isAlphaSpace('abcd eabc deab cde'); // true
 */
function isAlphaSpace(input: string): boolean {
    // @ts-ignore
    return /^[a-z\s]*$/i.test(input);
}

/**
 * 判断字符串是否为字母、数字
 * @param {string} input 输入字符串,如'22abcdeabcdeabcde22',
 * @returns  {boolean} 是/否
 *
 * @example
 *  isAlphanumeric('abcd串abcd'); // false
 *  isAlphanumeric('22abcdeabcdeabcde22'); // true
 */
function isAlphanumeric(input: string): boolean {
    // @ts-ignore
    return /^[a-z0-9]+$/i.test(input);
}

/**
 * 判断字符串是否为字母、数字和空格
 * @param {string}  input 输入字符串, 如'22abcde abcde abcde 22',
 * @returns  {boolean} 是/否
 *
 * @example
 *  isAlphanumericSpace('我是测试的 222字符串'); // false
 *  isAlphanumericSpace('22abcde abcde abcde 22'); // true
 */
function isAlphanumericSpace(input: string): boolean {
    // @ts-ignore
    return /^[a-z0-9\s]*$/i.test(input);
}

/**
 *  判断字符串是否为数字
 * @param {string}  input 输入数字,如'220022',
 * @returns  {boolean} 是/否
 *
 * @example
 *  isNumeric('我是测试的 字符串'); // false
 *  isNumeric(220022); // true
 */
function isNumeric(input: string): boolean {
    return /^(?:[1-9]\d*|0)(?:\.\d+)?$/.test(input);
}

/**
 *  判断字符串是否为小数
 * @param {string}  input 输入数字,如22.0022,
 * @returns  {boolean} 是/否
 *
 * @example
 *  isDecimal('220022'); // false
 *  isDecimal(22.0022); // true
 */
function isDecimal(input: string): boolean {
    return /^[-+]?(?:0|[1-9]\d*)\.\d+$/.test(input);
}

/**
 *  判断字符串是否为负小数
 * @param {number}  input 输入数字,如'-22.0022',
 * @returns  {boolean} 是/否
 *
 * @example
 *  isNegativeDecimal('22.0022'); // false
 *  isNegativeDecimal('-22.0022'); // true
 */
function isNegativeDecimal(input: string): boolean {
    return /^\-?(?:0|[1-9]\d*)\.\d+$/.test(input);
}

/**
 *  判断字符串是否为正小数
 * @param {string}  input 输入数字, 如 '22.0022',
 * @returns  {boolean} 是/否
 *
 * @example
 *  isPositiveDecimal('22.0022'); // true
 *  isPositiveDecimal('-22.0022'); // false
 */
function isPositiveDecimal(input: string): boolean {
    return /^\+?(?:0|[1-9]\d*)\.\d+$/.test(input);
}

/**
 *  判断字符串是否为整数
 * @param {string}  input 输入数字,如'-220022',
 * @returns  {boolean} 是/否
 *
 * @example
 *  isInteger('-220022'); // true
 *  isInteger('22.0022'); // false
 */
function isInteger(input: string): boolean {
    return /^[-+]?(?:0|[1-9]\d*)$/.test(input);
}

/**
 *  判断字符串是否为正整数
 * @param {string}  input 输入数字,如'220022',
 * @returns  {boolean} 是/否
 *
 * @example
 *  isPositiveInteger('220022'); // true
 *  isPositiveInteger('-22.22'); // false
 */
function isPositiveInteger(input: string): boolean {
    return /^\+?(?:0|[1-9]\d*)$/.test(input);
}

/**
 *  判断字符串是否为负整数
 * @param {string}  input 输入数字,如'-220022',
 * @returns  {boolean} 是/否
 *
 * @example
 *  isNegativeInteger('-220022'); // true
 *  isNegativeInteger('22.22'); // false
 */
function isNegativeInteger(input: string): boolean {
    return /^\-?(?:0|[1-9]\d*)$/.test(input);
}

/**
 *  判断字符串是否为数字、空格
 * @param {string}  input 输入字符串, 如'2 2 0 0 2 2',
 * @returns  {boolean} 是/否
 *
 * @example
 *  isNumericSpace('2 2 0 0 2 2'); // true
 *  isNumericSpace('2222aa'); // false
 */
function isNumericSpace(input: string): boolean {
    return /^[\d\s]*$/.test(input);
}

/**
 *   判断字符串是否为空格
 * @param {string}  input 输入字符串,如' ',
 * @returns  {boolean} 是/否
 *
 * @example
 *  isWhitespace(' '); // true
 *  isWhitespace('22.22'); //false
 */
function isWhitespace(input: string): boolean {
    return /^\s*$/.test(input);
}

/**
 *   判断字符串是否为小写字母
 * @param {string}  input 输入字符串, 如'abcdefg ',
 * @returns  {boolean} 是/否
 *
 * @example
 *  isAllLowerCase('abcdefg'); // true
 *  isAllLowerCase('isAllLowerCase'); // false
 */
function isAllLowerCase(input: string): boolean {
    return /^[a-z]+$/.test(input);
}

/**
 *   判断字符串是否为大写字母
 * @param {string}  input 输入字符串,如'ABCDEFG ',
 * @returns  {boolean} 是/否
 *
 * @example
 *  isAllUpperCase('ABCDEFG'); // true
 *  isAllUpperCase('isAllLowerCase'); // false
 */
function isAllUpperCase(input: string): boolean {
    return /^[A-Z]+$/.test(input);
}

/**
 *  如果字符串为空则使用默认字符串, 否则不变
 * @param {string}  input 输入字符串, 如'',
 * @param {string}  defaultStr 输入字符串, 如'我是测试的字符串',
 * @returns  {string} 字符串为空则使用默认字符串, 否则不变
 *
 * @example
 *  defaultIfEmpty('', 'abcd'); // 'abcd'
 *  defaultIfEmpty('我是测试的字符串isAllLowerCase', '我是测试的字符串'); // '我是测试的字符串isAllLowerCase'
 */
function defaultIfEmpty(input: string, defaultStr: string): string {
    return this.isEmpty(input) ? defaultStr : input;
}

/**
 * 字符串反转
 * @param {string}  input 输入字符串,如'abcd',
 * @returns {string} 反转后的字符串
 *
 * @example
 *  reverse('abcd'); // 'dcba'
 *  reverse('ABCD'); // 'DCBA'
 */
function reverse(input: string): string {
    if (this.isEmpty(input)) {
        return '';
    }
    return input.split('').reverse().join('');
}

/**
 *  删掉特殊字符(英文状态下)
 * @param {string}  input 输入字符串,如''remove SpecialCharacter$%%^'',
 * @returns {string}  删掉特殊字符(英文状态下)后的字符串
 *
 * @example
 *  removeSpecialCharacter('remove SpecialCharacter$%%^'); // 'remove SpecialCharacter'
 *  removeSpecialCharacter('removeSpecialCharacter##*'); // 'removeSpecialCharacter'
 */
function removeSpecialCharacter(input: string): string {
    return input.replace(/[!-/:-@\[-`{-~]/g, '');
}

/**
 * 只包含特殊字符、数字和字母（不包括空格，若想包括空格，改为[ -~]）
 * @param {string} input 输入字符串, 如'2222SpecialCharacter$%%^',
 * @returns {boolean} 是/否
 *
 * @example
 *  isSpecialCharacterAlphanumeric('2222SpecialCharacter$%%^'); // true
 *  isSpecialCharacterAlphanumeric('(字符串2222SpecialCharacter$%%^)'); // false
 */
function isSpecialCharacterAlphanumeric(input: string): boolean {
    return /^[!-~]+$/.test(input);
}

/**
 * 消息格式化
 * @param {string}  message  字符串模板,如'format {0}',
 * @param {any[]}  arr  模板数据,如['data'],
 * @returns {string} 消息格式化后的字符串
 *
 * @example
 *  format('format {0}', ['123']); // 'format 123'
 *  format('format {0} {1}', ['123']); // 'format 123 undefined'
 */
function format(message: string, arr: any[]): string {
    return message.replace(/{(\d+)}/g,
        (matchStr, group1) => {
            return arr[group1];
        });
}

/**
 * 中文校验
 * @param {string}  input 输入字符串,如'我是测试的字符串',
 * @returns {boolean} 是/否
 *
 * @example
 *  isChinese('我是测试的字符串'); // true
 *  isChinese('我是测试的字  abc  符串'); // false
 */
function isChinese(input: string): boolean {
    return /^[\u4E00-\u9FA5]+$/.test(input);
}

/**
 * 去掉中文字符
 * @param {string}  input  输入字符串,如'我是测试的字  abc  符串',
 * @returns {string} 去掉中文字符后的字符串
 *
 * @example
 *  removeChinese('我是测试的字  abc  符串'); // abc
 *  removeChinese('测试abcd'); // abc
 */
function removeChinese(input: string): string {
    return input.replace(/[\u4E00-\u9FA5]+/gm, '');
}

/**
 * 转义元字符
 * @param {string}  input 输入字符串, 如'\n\\?',
 * @returns {string} 转义后的字符
 *
 * @example
 *  escapeMetacharacter('\'\''); // '\'\''
 *  escapeMetacharacter('\n\\?'); // '\n\\?'
 */
function escapeMetacharacter(input: string): string {
    const metacharacter = '^$()*+.[]|\\-?{}|';
    if (metacharacter.indexOf(input) >= 0) {
        input = '\\' + input;
    }
    return input;
}

/**
 * 转义字符串中的元字符
 * @param {string}  input  输入字符串,如'我是测试的字abc符串',
 * @returns {string} 转义后的字符串
 *
 * @example
 *  escapeMetacharacterOfStr('\'\''); // '\'\''
 *  escapeMetacharacterOfStr('我是测试的字abc\n符串'); // '我是测试的字abc\n符串'
 */
function escapeMetacharacterOfStr(input: string): string {
    return input.replace(/[\^\$\(\)\*\+\.\[\]\|\\\-?\{\}\|]/gm, '\\$&');
}

/**
 * 将中划线分隔形式的字符串转换为驼峰式的字符串
 * @param {string}  input  输入字符串,如'last-index-of',
 * @returns {string} 连字符转换成驼峰式后的字符串
 *
 * @example
 *  camelize('last-index-of'); // 'lastIndexOf'
 *  camelize('escape-metacharacter-of-str'); // 'escapeMetacharacterOfStr'
 */
function camelize(input: string): string {
    return (input + '').replace(/-\D/g,
        (match) => {
            return match.charAt(1).toUpperCase();
        });
}

/**
 * 驼峰转连字符
 * 将驼峰式的字符串转换为中划线分隔形式的字符串
 * @param {string}  input  输入字符串,如'lastIndexOf',
 * @returns {string} 驼峰转连字符后的字符串
 *
 * @example
 *  hyphenate('lastIndexOf'); // 'last-index-of'
 *  hyphenate('escapeMetacharacterOfStr'); // 'escape-metacharacter-of-str'
 */
function hyphenate(input: string): string {
    return (input + '').replace(/[A-Z]/g,
        (match) => {
            return '-' + match.toLowerCase();
        });
}


export default {
    isEmpty,
    isNotEmpty,
    trim,
    startsWith,
    endsWith,
    contains,
    equals,
    equalsIgnoreCase,
    containsWhitespace,
    repeat,
    deleteWhitespace,
    rightPad,
    leftPad,
    capitalize,
    unCapitalize,
    swapCase,
    countMatches,
    isAlpha,
    isAlphaSpace,
    isAlphanumeric,
    isAlphanumericSpace,
    isNumeric,
    isDecimal,
    isNegativeDecimal,
    isPositiveDecimal,
    isInteger,
    isPositiveInteger,
    isNegativeInteger,
    isNumericSpace,
    isWhitespace,
    isAllLowerCase,
    isAllUpperCase,
    defaultIfEmpty,
    reverse,
    removeSpecialCharacter,
    isSpecialCharacterAlphanumeric,
    format,
    isChinese,
    removeChinese,
    escapeMetacharacter,
    escapeMetacharacterOfStr,
    camelize,
    hyphenate,
};

