import BaseUtil from '../base/BaseUtil';

/**
 * 对目标数组进行分块，每块size个元素
 * @param array 目标数组
 * @param size 块大小
 * 
 * @example
 *   chunk(['a', 'b', 'c', 'd'], 2)
 *   // => [['a', 'b'], ['c', 'd']]
 *   chunk(['a', 'b', 'c', 'd'], 3)
 *   // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array: any[], size: number = 1): any[] {
    const length = array.length;
    if (length === 0 || size < 1) {
        return [];
    }
    let index = 0;
    let resIndex = 0;
    const result = Array(Math.ceil(length / size));
    while (index < length) {
        result[resIndex++] = slice(array, index, (index += size));
    }
    return result;
}

/**
 * 对数组进行切片，索引支持负数(-1相当于最后一个元素，-2相当于倒数第二个元素，以此类推..)
 * @param {any[]} array 要进行切片的数组
 * @param {Number} start 开始下标，从0开始
 * @param {Number} end 结束下标，结果中不包含此下标的值
 * 
 * @example
 *   slice([1, 2, 3, 4])
 *   // => [1, 2, 3, 4]
 *   slice([1, 2, 3, 4], 1)
 *   // => [2, 3, 4]
 *   slice([1, 2, 3, 4], 1, 3)
 *   // => [2, 3]
 *   slice([1, 2, 3, 4], -1)
 *   // => [4]
 *   slice([1, 2, 3, 4], -3, -1)
 *   // => [2, 3]
 */
function slice(array: any[], start: number = 0, end: number): any[] {
    let length = array.length;
    if (end === undefined) {
        end = length;
    }
    if (start < 0) {
        start = -start >= length ? 0 : (length + start);
    }
    end = end > length ? length : end;
    if (end < 0) {
        end = -end >= length ? 0 : (length + end);
    }
    length = start > end ? 0 : (end - start);

    const result = Array(length);
    for (let i = 0; i < length; i++) {
        result[i] = array[i + start];
    }
    return result;
}

export default {
    chunk,
    slice,
};
