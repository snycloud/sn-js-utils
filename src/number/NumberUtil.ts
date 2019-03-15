
import BaseUtil from '../base/BaseUtil';

const MAX_INTEGER = 1.7976931348623157e+308;
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;

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

/**
 * 转为数字
 * @param value 要转成数字的值
 */
function toNumber(value: any): number {
    return Number(value);
}


/**
 * 转为有理数
 * @param value 要转换的值
 * 
 * @example
 *   toFinite(3.2) => 3.2
 *   toFinite(Number.MIN_VALUE) => 5e-324
 *   toFinite(Infinity) => 1.7976e+308
 *   toFinite('3.2') => 3.2
 */
function toFinite(value: any): number {
    if (!value) {
        return 0;
    }
    value = toNumber(value);
    if (value === Infinity || value === -Infinity) {
        const sign = (value < 0 ? -1 : 1);
        return sign * Number.MAX_SAFE_INTEGER;
    }
    return value === value ? value : 0;
}

/**
 * 检查数字是否在指定区间内
 * @param num 要检测的数字
 * @param start 区间的开始，默认值为0
 * @param end 区间的结束(区间不包含此边界值)
 */
function inRange(num: number, start: number, end: number): boolean {
    start = toFinite(start);
    if (end === undefined) {
        end = start;
        start = 0;
    } else {
        end = toFinite(end);
    }
    num = toNumber(num);

    return baseInRange(num, start, end);
}

function baseInRange(num: number, start: number, end: number): boolean {
    return num >= Math.min(start, end) && num < Math.max(start, end);
}

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
function random(lower: number, upper: number, floating: number = 0): number {
    // 参数调整
    if (lower === undefined && upper === undefined) {
        lower = 0;
        upper = 1;
    } else {
        lower = toFinite(lower);
        if (upper === undefined) {
            upper = lower;
            lower = 0;
        } else {
            upper = toFinite(upper);
        }
    }
    if (lower > upper) {
        const temp = lower;
        lower = upper;
        upper = temp;
    }

    const rand = Math.random();
    if (floating || lower % 1 || upper % 1) {
        // 浮点数
        const t = lower + (rand * (upper - lower + parseFloat('1e-' + ((rand + '').length - 1))));
        return toNumber(Math.min(t, upper).toFixed(floating));
    } else {
        // 整数
        return lower + Math.floor(rand * (upper - lower + 1));
    }
}

export default {
    isInteger,
    isFloat,
    isaNaN,
    isaFinite,
    inRange,
    random,
};
