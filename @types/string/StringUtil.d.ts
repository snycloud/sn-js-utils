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
declare function isEmpty(input: string): boolean;
/**
 * 判断字符串是否不为空
 * @param {String} input 输入字符串，如'我是测试的字符串'
 * @returns {boolean} 是/否
 *
 * @example
 *  isNotEmpty('我是测试的字符串'); // true
 *  isNotEmpty(''); // false
 */
declare function isNotEmpty(input: string): boolean;
/**
 * 将字符串去除空格
 * @param {string} input 输入字符串，如'我是测 试的字符串'
 * @returns {string} 去除空格后的字符串
 *
 * @example
 *  trim(' 测试字符串 '); // 测试字符串
 *  trim('我是测 试的字符串'); // 我是测试的字符串
 */
declare function trim(input: string): string;
/**
 * 判断字符串是否以某个字符串开头
 * @param {string} input 输入字符串，如' abcdefg'
 * @param {string} prefix 输入字符串，如'ab'
 * @returns {boolean} 是/否
 *
 * @example
 *  startsWith('abcdefg','ab'); // true
 *  startsWith('abcdefg','bc'); // false
 *  startsWith('abcdefg','a'); // true
 */
declare function startsWith(input: string, prefix: string): boolean;
/**
 * 判断字符串是否以某个字符串结束
 * @param {String} input 输入字符串，如' abcdefg '
 * @param {string} suffix 输入字符串，如'fg'
 * @returns {boolean} 是/否
 *
 * @examplec
 *  endsWith('abcdefg', 'fg'); // true
 *  endsWith('abcdefg', 'ef'); // false
 *  endsWith('abcdefg', 'g'); // true
 */
declare function endsWith(input: string, suffix: string): boolean;
/**
 * 判断字符串是否包含某个字符串
 * @param {String} input 输入字符串，如'abcdefg'
 * @param {string} searchSeq 输入字符串，如'abc'
 * @returns {boolean} 是/否
 *
 * @example
 *  contains('abcdefg', 'abc'); // true
 *  contains('abcdefg', 'gh'); // false
 *  contains('abcdefg', 'a'); // true
 */
declare function contains(input: string, searchSeq: string): boolean;
/**
 * 判断两个字符串是否相等
 * @param {string|number} input1 输入字符串，如'我是测试的字符串' 或 输入数字如 220022
 * @param {String|number} input2 输入字符串，如'我是测试的字符串' 或 输入数字如 220022
 * @returns {boolean} 是/否
 *
 * @example
 *  equals(220022, 220022); // true
 *  equals('我是测试的 字符串  ', '我是测试的字符串'); // false
 *  equals('我不是测试的字符串 ', '我是测试的字符串'); // false
 */
declare function equals(input1: string | number, input2: string | number): boolean;
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
declare function equalsIgnoreCase(input1: string, input2: string): boolean;
/**
 * 判断字符串是否含有空格
 * @param {String} input 输入字符串，如'我是 测试 的 字符串'
 * @returns {boolean} 是/否
 *
 * @example
 *  containsWhitespace('我是 测试 的 字符串  '); // true
 *  containsWhitespace('我是测试的字符串'); // false
 *  containsWhitespace('  我是测试的字符串  '); // true
 */
declare function containsWhitespace(input: string): boolean;
/**
 * 按指定数量生成给定字符串字符
 * @param {string|number} ch 输入字符串,如'我是测试的字符串', 或 输入数字如 220022
 * @param {number} repeatTimes 输入数字,如 '6'
 * @returns {string} 指定数量的给定字符串
 *
 * @example
 *  repeat('AB ',6); // 'AB AB AB AB AB AB '
 *  repeat('C  D',3); //'C  DC  DC  D'
 *  repeat('20', 3); //'202020'
 */
declare function repeat(ch: string | number, repeatTimes: number): string;
/**
 * 去除字符串中的空格
 * @param {string} input 输入字符串,如'我是 测试 的 字符串  '
 * @returns {string} 去除空格后的字符串
 *
 * @example
 *  deleteWhitespace('我是 测试 的 字符串  '); // '我是测试的字符串'
 *  deleteWhitespace(''); //''
 */
declare function deleteWhitespace(input: string): string;
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
declare function rightPad(input: string | number, size: number, padStr: number | string): string;
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
declare function leftPad(input: string | number, size: number, padStr: number | string): string;
/**
 * 将字符串首字母转大写
 * @param {string}  input 输入字符串,如'admin'
 * @returns {string} 首字母转大写后的字符串
 *
 * @example
 *  capitalize('admin'); // 'Admin'
 *  capitalize('capitalize'); // 'Capitalize'
 */
declare function capitalize(input: string): string;
/**
 * 将字符串首字母转小写
 * @param {string}  input 输入字符串,如'Capitalize',
 * @returns {string} 首字母转小写后的字符串
 *
 * @example
 * unCapitalize('Capitalize'); // 'capitalize'
 * unCapitalize('SetTimeout'); // 'setTimeout'
 */
declare function unCapitalize(input: string): string;
/**
 * 将字符串中的字母大写转小写，小写转大写
 * @param {string}  input 输入字符串,如'abcde',
 * @returns {string} 大写转小写，小写转大写后的字符串
 *
 * @example
 *  swapCase('aBcde'); // 'AbCDE'
 *  swapCase('ABCDe'); // 'abcdE'
 */
declare function swapCase(input: string): string;
/**
 * 统计含有的子字符串的个数
 * @param {string} input 输入字符串,如'abcdeabcdeabcde',
 * @param {string} sub 输入字符串,如'ab',
 * @returns {number} 统计后字符串的个数
 *
 * @example
 *  countMatches('dabddadb', 'da'); // 3
 *  countMatches('abcdeabcdeabcde','ab'); // 6
 */
declare function countMatches(input: string, sub: string): number;
/**
 * 判断字符串是否为字母
 * @param {string} input 输入字符串,如'abcdeabcdeabcde',
 * @returns  {boolean} 是/否
 *
 * @example
 *  isAlpha('abce测试'); // false
 *  isAlpha('abcdeabcdeabcde'); // true
 */
declare function isAlpha(input: string): boolean;
/**
 * 判断字符串是否为字母、空格
 * @param {string}  input 输入字符串, 如'abcd eabc deab cde',
 * @returns {boolean} 是/否
 *
 * @example
 *  isAlphaSpace(' abc 测试 '); // false
 *  isAlphaSpace('abcd eabc deab cde'); // true
 */
declare function isAlphaSpace(input: string): boolean;
/**
 * 判断字符串是否为字母、数字
 * @param {string} input 输入字符串,如'22abcdeabcdeabcde22',
 * @returns  {boolean} 是/否
 *
 * @example
 *  isAlphanumeric('abcd串abcd'); // false
 *  isAlphanumeric('22abcdeabcdeabcde22'); // true
 */
declare function isAlphanumeric(input: string): boolean;
/**
 * 判断字符串是否为字母、数字和空格
 * @param {string}  input 输入字符串, 如'22abcde abcde abcde 22',
 * @returns  {boolean} 是/否
 *
 * @example
 *  isAlphanumericSpace('我是测试的 222字符串'); // false
 *  isAlphanumericSpace('22abcde abcde abcde 22'); // true
 */
declare function isAlphanumericSpace(input: string): boolean;
/**
 *  判断字符串是否为数字
 * @param {string}  input 输入数字,如'220022',
 * @returns  {boolean} 是/否
 *
 * @example
 *  isNumeric('我是测试的 字符串'); // false
 *  isNumeric(220022); // true
 */
declare function isNumeric(input: string): boolean;
/**
 *  判断字符串是否为小数
 * @param {string}  input 输入数字,如22.0022,
 * @returns  {boolean} 是/否
 *
 * @example
 *  isDecimal('220022'); // false
 *  isDecimal(22.0022); // true
 */
declare function isDecimal(input: string): boolean;
/**
 *  判断字符串是否为负小数
 * @param {number}  input 输入数字,如'-22.0022',
 * @returns  {boolean} 是/否
 *
 * @example
 *  isNegativeDecimal('22.0022'); // false
 *  isNegativeDecimal('-22.0022'); // true
 */
declare function isNegativeDecimal(input: string): boolean;
/**
 *  判断字符串是否为正小数
 * @param {string}  input 输入数字, 如 '22.0022',
 * @returns  {boolean} 是/否
 *
 * @example
 *  isPositiveDecimal('22.0022'); // true
 *  isPositiveDecimal('-22.0022'); // false
 */
declare function isPositiveDecimal(input: string): boolean;
/**
 *  判断字符串是否为整数
 * @param {string}  input 输入数字,如'-220022',
 * @returns  {boolean} 是/否
 *
 * @example
 *  isInteger('-220022'); // true
 *  isInteger('22.0022'); // false
 */
declare function isInteger(input: string): boolean;
/**
 *  判断字符串是否为正整数
 * @param {string}  input 输入数字,如'220022',
 * @returns  {boolean} 是/否
 *
 * @example
 *  isPositiveInteger('220022'); // true
 *  isPositiveInteger('-22.22'); // false
 */
declare function isPositiveInteger(input: string): boolean;
/**
 *  判断字符串是否为负整数
 * @param {string}  input 输入数字,如'-220022',
 * @returns  {boolean} 是/否
 *
 * @example
 *  isNegativeInteger('-220022'); // true
 *  isNegativeInteger('22.22'); // false
 */
declare function isNegativeInteger(input: string): boolean;
/**
 *  判断字符串是否为数字、空格
 * @param {string}  input 输入字符串, 如'2 2 0 0 2 2',
 * @returns  {boolean} 是/否
 *
 * @example
 *  isNumericSpace('2 2 0 0 2 2'); // true
 *  isNumericSpace('2222aa'); // false
 */
declare function isNumericSpace(input: string): boolean;
/**
 *   判断字符串是否为空格
 * @param {string}  input 输入字符串,如' ',
 * @returns  {boolean} 是/否
 *
 * @example
 *  isWhitespace(' '); // true
 *  isWhitespace('22.22'); //false
 */
declare function isWhitespace(input: string): boolean;
/**
 *   判断字符串是否为小写字母
 * @param {string}  input 输入字符串, 如'abcdefg ',
 * @returns  {boolean} 是/否
 *
 * @example
 *  isAllLowerCase('abcdefg'); // true
 *  isAllLowerCase('isAllLowerCase'); // false
 */
declare function isAllLowerCase(input: string): boolean;
/**
 *   判断字符串是否为大写字母
 * @param {string}  input 输入字符串,如'ABCDEFG ',
 * @returns  {boolean} 是/否
 *
 * @example
 *  isAllUpperCase('ABCDEFG'); // true
 *  isAllUpperCase('isAllLowerCase'); // false
 */
declare function isAllUpperCase(input: string): boolean;
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
declare function defaultIfEmpty(input: string, defaultStr: string): string;
/**
 * 字符串反转
 * @param {string}  input 输入字符串,如'abcd',
 * @returns {string} 反转后的字符串
 *
 * @example
 *  reverse('abcd'); // 'dcba'
 *  reverse('ABCD'); // 'DCBA'
 */
declare function reverse(input: string): string;
/**
 *  删掉特殊字符(英文状态下)
 * @param {string}  input 输入字符串,如''remove SpecialCharacter$%%^'',
 * @returns {string}  删掉特殊字符(英文状态下)后的字符串
 *
 * @example
 *  removeSpecialCharacter('remove SpecialCharacter$%%^'); // 'remove SpecialCharacter'
 *  removeSpecialCharacter('removeSpecialCharacter##*'); // 'removeSpecialCharacter'
 */
declare function removeSpecialCharacter(input: string): string;
/**
 * 只包含特殊字符、数字和字母（不包括空格，若想包括空格，改为[ -~]）
 * @param {string} input 输入字符串, 如'2222SpecialCharacter$%%^',
 * @returns {boolean} 是/否
 *
 * @example
 *  isSpecialCharacterAlphanumeric('2222SpecialCharacter$%%^'); // true
 *  isSpecialCharacterAlphanumeric('(字符串2222SpecialCharacter$%%^)'); // false
 */
declare function isSpecialCharacterAlphanumeric(input: string): boolean;
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
declare function format(message: string, arr: any[]): string;
/**
 * 中文校验
 * @param {string}  input 输入字符串,如'我是测试的字符串',
 * @returns {boolean} 是/否
 *
 * @example
 *  isChinese('我是测试的字符串'); // true
 *  isChinese('我是测试的字  abc  符串'); // false
 */
declare function isChinese(input: string): boolean;
/**
 * 去掉中文字符
 * @param {string}  input  输入字符串,如'我是测试的字  abc  符串',
 * @returns {string} 去掉中文字符后的字符串
 *
 * @example
 *  removeChinese('我是测试的字  abc  符串'); // abc
 *  removeChinese('测试abcd'); // abc
 */
declare function removeChinese(input: string): string;
/**
 * 转义元字符
 * @param {string}  input 输入字符串, 如'\n\\?',
 * @returns {string} 转义后的字符
 *
 * @example
 *  escapeMetacharacter('\'\''); // '\'\''
 *  escapeMetacharacter('\n\\?'); // '\n\\?'
 */
declare function escapeMetacharacter(input: string): string;
/**
 * 转义字符串中的元字符
 * @param {string}  input  输入字符串,如'我是测试的字abc符串',
 * @returns {string} 转义后的字符串
 *
 * @example
 *  escapeMetacharacterOfStr('\'\''); // '\'\''
 *  escapeMetacharacterOfStr('我是测试的字abc\n符串'); // '我是测试的字abc\n符串'
 */
declare function escapeMetacharacterOfStr(input: string): string;
/**
 * 将中划线分隔形式的字符串转换为驼峰式的字符串
 * @param {string}  input  输入字符串,如'last-index-of',
 * @returns {string} 连字符转换成驼峰式后的字符串
 *
 * @example
 *  camelize('last-index-of'); // 'lastIndexOf'
 *  camelize('escape-metacharacter-of-str'); // 'escapeMetacharacterOfStr'
 */
declare function camelize(input: string): string;
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
declare function hyphenate(input: string): string;
declare const _default: {
    isEmpty: typeof isEmpty;
    isNotEmpty: typeof isNotEmpty;
    trim: typeof trim;
    startsWith: typeof startsWith;
    endsWith: typeof endsWith;
    contains: typeof contains;
    equals: typeof equals;
    equalsIgnoreCase: typeof equalsIgnoreCase;
    containsWhitespace: typeof containsWhitespace;
    repeat: typeof repeat;
    deleteWhitespace: typeof deleteWhitespace;
    rightPad: typeof rightPad;
    leftPad: typeof leftPad;
    capitalize: typeof capitalize;
    unCapitalize: typeof unCapitalize;
    swapCase: typeof swapCase;
    countMatches: typeof countMatches;
    isAlpha: typeof isAlpha;
    isAlphaSpace: typeof isAlphaSpace;
    isAlphanumeric: typeof isAlphanumeric;
    isAlphanumericSpace: typeof isAlphanumericSpace;
    isNumeric: typeof isNumeric;
    isDecimal: typeof isDecimal;
    isNegativeDecimal: typeof isNegativeDecimal;
    isPositiveDecimal: typeof isPositiveDecimal;
    isInteger: typeof isInteger;
    isPositiveInteger: typeof isPositiveInteger;
    isNegativeInteger: typeof isNegativeInteger;
    isNumericSpace: typeof isNumericSpace;
    isWhitespace: typeof isWhitespace;
    isAllLowerCase: typeof isAllLowerCase;
    isAllUpperCase: typeof isAllUpperCase;
    defaultIfEmpty: typeof defaultIfEmpty;
    reverse: typeof reverse;
    removeSpecialCharacter: typeof removeSpecialCharacter;
    isSpecialCharacterAlphanumeric: typeof isSpecialCharacterAlphanumeric;
    format: typeof format;
    isChinese: typeof isChinese;
    removeChinese: typeof removeChinese;
    escapeMetacharacter: typeof escapeMetacharacter;
    escapeMetacharacterOfStr: typeof escapeMetacharacterOfStr;
    camelize: typeof camelize;
    hyphenate: typeof hyphenate;
};
export default _default;
