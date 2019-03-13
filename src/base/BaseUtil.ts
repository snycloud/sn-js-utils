
/**
 * 创建一个自定义的 typeof 函数
 * @param {String} type 类型
 * @returns {Function} 返回一个可判断特定类型的谓词函数
 */
function _createTypeOf(type: string): (obj: any) => boolean {
    return (obj) => {
        return Object.prototype.toString.call(obj) === `[object ${type}]`;
    };
}

/**
 * 判断是否为 undefined
 */
const isUndefined: (obj: any) => boolean = _createTypeOf('Undefined');


/**
 * 判断是否为 null
 */
const isNull: (obj: any) => boolean = _createTypeOf('Null');

/**
 * 判断是否为 Array 类型
 */
const isArray: (obj: any) => boolean = Array.isArray || _createTypeOf('Array');


/**
 * 判断是否为 Function 类型
 */
const isFunction: (obj: any) => boolean = _createTypeOf('Function');

/**
 * 判断是否为 Boolean 类型
 */
const isBoolean: (obj: any) => boolean = _createTypeOf('Boolean');

/**
 * 判断是否为 String 类型
 */
const isString: (obj: any) => boolean = _createTypeOf('String');

/**
 * 判断是否为 Number 类型
 */
const isNumber: (obj: any) => boolean = _createTypeOf('Number');

/**
 * 判断是否为 RegExp 类型
 */
const isRegExp: (obj: any) => boolean = _createTypeOf('RegExp');

/**
 * 判断是否为 Object 类型
 */
const isObject: (obj: any) => boolean = _createTypeOf('Object');

/**
 * 判断是否为 Date 类型
 */
const isDate: (obj: any) => boolean = _createTypeOf('Date');

/**
 * 判断是否为 Error 类型
 */
const isError: (obj: any) => boolean = _createTypeOf('Error');

/**
 * 获取对象的类型
 * @param obj 
 */
function getType(obj: any): string {
    if (isUndefined(obj)) {
        return 'undefined';
    }
    if (isNull(obj)) {
        return 'null';
    }
    if (isArray(obj)) {
        return 'array';
    }
    if (isFunction(obj)) {
        return 'function';
    }
    if (isBoolean(obj)) {
        return 'boolean';
    }
    if (isString(obj)) {
        return 'string';
    }
    if (isNumber(obj)) {
        return 'number';
    }
    if (isRegExp(obj)) {
        return 'regexp';
    }
    if (isObject(obj)) {
        return 'object';
    }
    if (isDate(obj)) {
        return 'date';
    }
    if (isError(obj)) {
        return 'error';
    }
    return typeof obj;
}

/**
 * 判断是否为空，包括空对象，空数组，空字符串，null，undefined
 * @param obj 任意对象
 */
function isEmpty(obj: any): boolean {
    if (isString(obj)) {
        obj = (obj as string).trim();
    }
    for (const key in obj) {
        return false;
    }
    return true;
}


export default {
    isUndefined,
    isNull,
    isArray,
    isFunction,
    isBoolean,
    isString,
    isNumber,
    isRegExp,
    isObject,
    isDate,
    isError,
    getType,
    isEmpty,
};
