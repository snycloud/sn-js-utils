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

    if (!BaseUtil.isString(idcard) || idcard.length !== 18) {
        return false;
    }

    const idcardCharArr = idcard.split('');

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

export default {
    phoneIsValid,
    maskPhone,
    idcardIsValid,
    maskIDCard,
};
