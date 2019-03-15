/**
 * 判断是否为整数
 * @param {Number} num 数字
 */
declare function isInteger(num: number): boolean;
/**
 * 判断是否为小数
 * @param {Number} num 数字
 */
declare function isFloat(num: number): boolean;
/**
 * 判断是否是 NaN
 * @param num 数字
 */
declare function isaNaN(num: number): boolean;
/**
 * 判断是否是有理数
 * @param num 数字
 */
declare function isaFinite(num: number): boolean;
/**
 * 检查数字是否在指定区间内
 * @param num 要检测的数字
 * @param start 区间的开始，默认值为0
 * @param end 区间的结束(区间不包含此边界值)
 */
declare function inRange(num: number, start: number, end: number): boolean;
/**
 * 生成随机数，支持随机整数和随机小数
 * @param {Number} lower 下边界，默认0
 * @param {Number} upper 上边界，默认1
 * @param {Boolean} floating 随机小数的位数，默认为0，即随机整数
 *
 * @example
 *   random(0, 5) => an integer between 0 and 5
 *   random(5)     => also random(0, 5)
 *   random(5, true) => a floating-point number between 0 and 5
 *   random(1.2, 5.2) => a floating-point number between 1.2 and 5.2
 */
declare function random(lower: number, upper: number, floating?: number): number;
declare const _default: {
    isInteger: typeof isInteger;
    isFloat: typeof isFloat;
    isaNaN: typeof isaNaN;
    isaFinite: typeof isaFinite;
    inRange: typeof inRange;
    random: typeof random;
};
export default _default;
