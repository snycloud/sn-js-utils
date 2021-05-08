import BaseUtil from '../base/BaseUtil';

/**
 * 检查手机号是否合法
 * @param {String} phone 手机号
 *
 * @example
 *   phoneIsValid(null)
 *   // => false
 *   phoneIsValid('123')
 *   // => false
 *   phoneIsValid('12345678901')
 *   // => true
 */
function phoneIsValid(phone: string): boolean {
    if (!BaseUtil.isString(phone) || phone.length !== 11) {
        return false;
    }
    return /^1[2-9]\d{9}$/.test(phone);
}

/**
 * 检查身份证是否合法
 * @param {String} idcard 身份证
 *
 * @example
 *   idcardIsValid('110410199001011234')
 *   // => false
 *   idcardIsValid('410482199001080000')
 *   // => true
 */
function idcardIsValid(idcard: string): boolean {
    const weight = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];    // 十七位数字本体码权重
    const validate = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];    // 校验码列表
    const validChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'x', 'X'];

    if (!BaseUtil.isString(idcard) || idcard.length !== 18) {
        return false;
    }

    const idcardCharArr = idcard.split('');
    if (idcardCharArr.some(c => validChar.indexOf(c) === -1)) {
        return false;
    }

    let sum = 0;
    for (let i = 0; i < 17; i++) {
        sum += (+idcardCharArr[i]) * weight[i];
    }
    const mode = sum % 11;

    return validate[mode] === idcardCharArr[17].toUpperCase();
}

/**
 * 对手机号进行去敏处理，用*替换
 * @param phone 手机号
 * @param start 掩码开始位置，从0开始
 * @param len 掩码长度
 *
 * @example
 *   maskPhone('13641601234')
 *   // => '136****1234'
 *   maskPhone('1234')
 *   // => '1234'
 *   maskPhone('13641601234', 3, 8)
 *   // => '136********'
 */
function maskPhone(phone: string, start: number = 3, len: number = 4): string {
    if (!phoneIsValid(phone)) {
        return phone;
    }
    if (start < 0) {
        start = 0;
    }
    if (start > 11) {
        start = 11;
    }
    if (len < 0) {
        len = 0;
    }
    if (len > 11) {
        len = 11;
    }
    if (start + len > 11) {
        len = 11 - start;
    }
    return phone.substr(0, start) + '*'.repeat(len) + phone.substring(start + len);
}

/**
 * 对身份证进行去敏处理，用*替换
 * @param idcard 身份证
 * @param start 掩码开始位置，从0开始
 * @param len  掩码长度
 *
 * @example
 *   maskIDCard('110410199001011234')
 *   // => '110410********1234'
 *   maskIDCard('110410199001011234', 6, 10)
 *   // => '110410**********34'
 */
function maskIDCard(idcard: string, start: number = 6, len: number = 8): string {
    if (!idcardIsValid(idcard)) {
        return idcard;
    }
    if (start < 0) {
        start = 0;
    }
    if (start > 18) {
        start = 18;
    }
    if (len < 0) {
        len = 0;
    }
    if (len > 18) {
        len = 18;
    }
    if (start + len > 18) {
        len = 18 - start;
    }
    return idcard.substr(0, start) + '*'.repeat(len) + idcard.substring(start + len);
}

/**
 * 对邮箱进行去敏处理
 * @param email
 */
function maskEMail(email: string): string {
    return email && email.replace(/(.*?)(@.+)/g, (_: string, name: string, suffix: string): string => {
        return mask(name, 2, 2, 3) + suffix;
    });
}

/**
 * 对姓名进行去敏处理
 * @param name
 */
function maskName(name: string): string {
    if (!name) {
        return name;
    }

    if (name.length <= 2) {
        return mask(name, 1, 0);
    } else {
        return mask(name, 1, 1, 1);
    }
}

/**
 * 对一个字符串进行去敏处理
 * @param text 原始字符串(必填)
 * @param start 开头保留多少位明文(必填)
 * @param end 结尾保留多少位明文(必填)
 * @param len 中间显示多少个*
 *
 * @example
 *   mask('123456', 2, 3)
 *   // => '12*456'
 *   mask('123456', 2, 3, 4)
 *   // => '12****456'
 */
function mask(text: string, start: number, end: number, len?: number): string {
    if (!text) {
        return text;
    }
    if (start < 0 || end < 0 || len < 0) {
        throw new TypeError('参数不能小于0');
    }

    if (len === undefined) {
        // 没有指定 len 参数，则根据原始字符串长度计算
        if (start >= text.length || end >= text.length) {
            return text;
        }
        if (start + end >= text.length) {
            return text;
        }
        return text.substr(0, start) + '*'.repeat(Math.max(text.length - start - end, 0)) +
            text.substring(text.length - end);
    } else {
        return text.substr(0, start) + '*'.repeat(len) + text.substring(text.length - end);
    }
}



export default {
    phoneIsValid,
    maskPhone,
    idcardIsValid,
    maskIDCard,
    mask,
    maskName,
    maskEMail,
};
