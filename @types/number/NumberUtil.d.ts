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
declare const _default: {
    isInteger: typeof isInteger;
    isFloat: typeof isFloat;
    isaNaN: typeof isaNaN;
    isaFinite: typeof isaFinite;
};
export default _default;
