
import BaseUtil from '../base/BaseUtil';


/**
 * 判断是否为整数
 * @param {Number} num 数字
 */
function isInteger(num: number): boolean {
    return BaseUtil.isNumber(num) && isFinite(num) && Math.floor(num) === num;
}

/**
 * 判断是否为小数
 * @param {Number} num 数字
 */
function isFloat(num: number): boolean {
    return BaseUtil.isNumber(num) && isFinite(num) && Math.floor(num) !== num;
}

/**
 * 判断是否是 NaN
 * @param num 数字 
 */
function isaNaN(num: number): boolean {
    return BaseUtil.isNumber(num) && isNaN(num);
}

/**
 * 判断是否是有理数
 * @param num 数字
 */
function isaFinite(num: number): boolean {
    return BaseUtil.isNumber(num) && isFinite(num);
}

export default {
    isInteger,
    isFloat,
    isaNaN,
    isaFinite,
};
