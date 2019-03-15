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
declare function phoneIsValid(phone: string): boolean;
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
declare function idcardIsValid(idcard: string): boolean;
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
declare function maskPhone(phone: string, start?: number, len?: number): string;
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
declare function maskIDCard(idcard: string, start?: number, len?: number): string;
declare const _default: {
    phoneIsValid: typeof phoneIsValid;
    maskPhone: typeof maskPhone;
    idcardIsValid: typeof idcardIsValid;
    maskIDCard: typeof maskIDCard;
};
export default _default;
