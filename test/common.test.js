/* eslint-env jest */
const expect = require('expect.js');
// 测试 js 源文件
// var utils = require('../src/index.js'); 此时需要将webstorm 中 TypeScript Recompile on Changes 选项勾选 后会自动生成js源文件
// 测试 ts 编译后文件
const utils = require('../src/index');

describe('测试 CommonUtil 工具类', function () {
    describe('测试 phoneIsValid 方法', function () {
        it('参数不是字符串', function () {
            expect(utils.CommonUtil.phoneIsValid(null)).to.not.be.ok();
        });
        it('字符串长度不正确', function () {
            expect(utils.CommonUtil.phoneIsValid('123')).to.not.be.ok();
        });
        it('包含非数字', function () {
            expect(utils.CommonUtil.phoneIsValid('1234567890a')).to.not.be.ok();
        });
        it('手机号不合规', function () {
            expect(utils.CommonUtil.phoneIsValid('11345678900')).to.not.be.ok();
        });
        it('正常情况', function () {
            expect(utils.CommonUtil.phoneIsValid('12345678901')).to.be.ok();
        });
    });

    describe('测试 idcardIsValid 方法', function () {
        it('参数不是字符串', function () {
            expect(utils.CommonUtil.idcardIsValid(null)).to.not.be.ok();
        });
        it('字符串长度不正确', function () {
            expect(utils.CommonUtil.idcardIsValid('123')).to.not.be.ok();
        });
        it('身份证校验失败', function () {
            expect(utils.CommonUtil.idcardIsValid('110410199001011234')).to.not.be.ok();
        });
        it('身份证校验失败(包含空格)', function () {
            expect(utils.CommonUtil.idcardIsValid('410482199001 80000')).to.not.be.ok();
        });
        it('校验成功', function () {
            expect(utils.CommonUtil.idcardIsValid('410482199001080000')).to.be.ok();
        });
    });

    describe('测试 maskPhone 方法', function () {
        it('默认参数', function () {
            expect(utils.CommonUtil.maskPhone('13641601234')).to.be.equal('136****1234');
        });
        it('手机号不合法，不进行掩码处理', function () {
            expect(utils.CommonUtil.maskPhone('1234')).to.be.equal('1234');
        });
        it('自定义脱敏规则', function () {
            expect(utils.CommonUtil.maskPhone('13641601234', 3, 8)).to.be.equal('136********');
        });
        it('参数超出合法范围', function () {
            expect(utils.CommonUtil.maskPhone('13641601234', 3, 100)).to.be.equal('136********');
            expect(utils.CommonUtil.maskPhone('13641601234', 13, 100)).to.be.equal('13641601234');
            expect(utils.CommonUtil.maskPhone('13641601234', -3, 100)).to.be.equal('***********');
            expect(utils.CommonUtil.maskPhone('13641601234', -3, -8)).to.be.equal('13641601234');
        });
    });

    describe('测试 maskIDCard 方法', function () {
        it('身份证不合法，不进行脱敏处理', function () {
            expect(utils.CommonUtil.maskIDCard('110410199001011234')).to.be.equal('110410199001011234');
        });
        it('默认脱敏规则', function () {
            expect(utils.CommonUtil.maskIDCard('410482199001080000')).to.be.equal('410482********0000');
        });
        it('自定义脱敏规则', function () {
            expect(utils.CommonUtil.maskIDCard('410482199001080000', 3, 15)).to.be.equal('410***************');
        });
        it('参数超出合法范围', function () {
            expect(utils.CommonUtil.maskIDCard('410482199001080000', 3, 100)).to.be.equal('410***************');
            expect(utils.CommonUtil.maskIDCard('410482199001080000', 28, 100)).to.be.equal('410482199001080000');
            expect(utils.CommonUtil.maskIDCard('410482199001080000', -3, 100)).to.be.equal('******************');
            expect(utils.CommonUtil.maskIDCard('410482199001080000', -3, -8)).to.be.equal('410482199001080000');
        });
    });

    describe('测试 mask 方法', function () {
        // it('参数不合法', function () {
        //
        // });
        it('start/end >= 明文字符串长度', function () {
            expect(utils.CommonUtil.mask('123456', 6, 1)).to.be.equal('123456');
            expect(utils.CommonUtil.mask('123456', 8, 1)).to.be.equal('123456');
            expect(utils.CommonUtil.mask('123456', 2, 6)).to.be.equal('123456');
            expect(utils.CommonUtil.mask('123456', 2, 8)).to.be.equal('123456');
        });
        it('start + end >= 明文字符串长度', function () {
            expect(utils.CommonUtil.mask('123456', 4, 2)).to.be.equal('123456');
            expect(utils.CommonUtil.mask('123456', 5, 2)).to.be.equal('123456');
            expect(utils.CommonUtil.mask('123456', 2, 4)).to.be.equal('123456');
            expect(utils.CommonUtil.mask('123456', 2, 5)).to.be.equal('123456');
        });
        it('start + end < 明文字符串长度', function () {
            expect(utils.CommonUtil.mask('123456', 0, 0)).to.be.equal('******');
            expect(utils.CommonUtil.mask('123456', 2, 0)).to.be.equal('12****');
            expect(utils.CommonUtil.mask('123456', 0, 3)).to.be.equal('***456');
            expect(utils.CommonUtil.mask('123456', 1, 3)).to.be.equal('1**456');
            expect(utils.CommonUtil.mask('123456', 4, 1)).to.be.equal('1234*6');
            expect(utils.CommonUtil.mask('123456', 5, 0)).to.be.equal('12345*');
            expect(utils.CommonUtil.mask('123456', 2, 3)).to.be.equal('12*456');
            expect(utils.CommonUtil.mask('123456', 0, 5)).to.be.equal('*23456');
        });
        it('指定len参数', function () {
            expect(utils.CommonUtil.mask('123456', 0, 0, 3)).to.be.equal('***');
            expect(utils.CommonUtil.mask('123456', 2, 0, 2)).to.be.equal('12**');
            expect(utils.CommonUtil.mask('123456', 0, 3, 5)).to.be.equal('*****456');
            expect(utils.CommonUtil.mask('123456', 1, 3, 1)).to.be.equal('1*456');
            expect(utils.CommonUtil.mask('123456', 1, 3, 0)).to.be.equal('1456');
            expect(utils.CommonUtil.mask('123456', 4, 3, 6)).to.be.equal('1234******456');
        });
    });

    describe('测试 maskName 方法', function () {
        it('正常输入', function () {
            expect(utils.CommonUtil.maskName('123456')).to.be.equal('1*6');
            expect(utils.CommonUtil.maskName('12')).to.be.equal('1*');
            expect(utils.CommonUtil.maskName('张三')).to.be.equal('张*');
            expect(utils.CommonUtil.maskName('张三丰')).to.be.equal('张*丰');
            expect(utils.CommonUtil.maskName('蒙奇D路飞')).to.be.equal('蒙*飞');
        });
        it('异常输入', function () {
            expect(utils.CommonUtil.maskName('')).to.be.equal('');
            expect(utils.CommonUtil.maskName('张')).to.be.equal('张');
        });
    });

    describe('测试 maskEMail 方法', function () {
        it('正常输入', function () {
            expect(utils.CommonUtil.maskEMail('123456@jz-ins.cn')).to.be.equal('12***56@jz-ins.cn');
            expect(utils.CommonUtil.maskEMail('12@jz-ins.cn')).to.be.equal('12***12@jz-ins.cn');
            expect(utils.CommonUtil.maskEMail('张三@jz-ins.cn')).to.be.equal('张三***张三@jz-ins.cn');
            expect(utils.CommonUtil.maskEMail('张三丰@jz-ins.cn')).to.be.equal('张三***三丰@jz-ins.cn');
            expect(utils.CommonUtil.maskEMail('蒙奇D路飞@jz-ins.cn')).to.be.equal('蒙奇***路飞@jz-ins.cn');
        });
        it('异常输入', function () {
            expect(utils.CommonUtil.maskEMail('')).to.be.equal('');
            expect(utils.CommonUtil.maskEMail('张')).to.be.equal('张');
        });
    });
});
