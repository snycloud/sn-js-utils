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
});
