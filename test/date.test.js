const expect = require('expect.js');

// js 测试源文件
// var utils = require('../src/index.js');
// ts 测试编译后文件
const utils = require('../src/index.ts');

/* eslint-env jest */
describe('单元测试', function () {
    describe('测试 formatDate 方法', function () {
        it('默认无参情况', function () {
            expect(utils.DateUtil.formatDate(null, null)).to.be.equal(utils.DateUtil.formatDate(null, null));
        });
    });

    describe('测试 formatDate 方法', function () {
        it('参数形式为 yyyy-MM-dd 形式', function () {
            expect(utils.DateUtil.formatDate(new Date(), 'yyyy-MM-dd')).to.be.equal(utils.DateUtil.formatDate(new Date(), 'yyyy-MM-dd'));
        });
    });

    describe('测试 formatDate 方法', function () {
        it('参数形式为 yyyy-MM-dd 第q季度 w HH:mm:ss:SSS', function () {
            let str = utils.DateUtil.formatDate(new Date(), 'yyyy-MM-dd 第q季度 w HH:mm:ss:SSS');
            expect(str).to.be.equal(str);
        });
    });

    describe('测试 formatDate 方法', function () {
        it('参数形式为 yyyy-MM-dd 第q季度 www HH:mm:ss:SSS', function () {
            let str = utils.DateUtil.formatDate(new Date(), 'yyyy-MM-dd 第q季度 www HH:mm:ss:SSS');
            expect(str).to.be.equal(str);
        });
    });

    describe('测试 formatDate 方法', function () {
        it('参数形式为 1472793615764 (时间戳)', function () {
            expect(utils.DateUtil.formatDate(1472793615764, null)).to.be.equal(utils.DateUtil.formatDate(1472793615764, null));
        });
    });

    describe('测试 formatDate 方法', function () {
        it('参数形式为 yyyy-MM-dd HH:mm:ss', function () {
            let nowDate = new Date('2016-09-02 12:20:15');
            expect(utils.DateUtil.formatDate(nowDate, 'yyyy-MM-dd HH:mm:ss')).to.be.equal(utils.DateUtil.formatDate(nowDate, 'yyyy-MM-dd HH:mm:ss'));
        });
    });
});
