/**
 * 获取对象的类型
 * @param obj
 */
declare function getType(obj: any): string;
/**
 * 判断是否为空，包括空对象，空数组，空字符串，null，undefined
 * @param obj 任意对象
 */
declare function isEmpty(obj: any): boolean;
declare const _default: {
    isUndefined: (obj: any) => boolean;
    isNull: (obj: any) => boolean;
    isArray: (obj: any) => boolean;
    isFunction: (obj: any) => boolean;
    isBoolean: (obj: any) => boolean;
    isString: (obj: any) => boolean;
    isNumber: (obj: any) => boolean;
    isRegExp: (obj: any) => boolean;
    isObject: (obj: any) => boolean;
    isDate: (obj: any) => boolean;
    isError: (obj: any) => boolean;
    getType: typeof getType;
    isEmpty: typeof isEmpty;
};
export default _default;
