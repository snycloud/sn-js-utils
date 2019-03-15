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
declare function chunk(array: any[], size?: number): any[];
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
declare function slice(array: any[], start: number, end: number): any[];
declare const _default: {
    chunk: typeof chunk;
    slice: typeof slice;
};
export default _default;
