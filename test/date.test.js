const expect = require('expect.js');

// js 测试源文件
// var utils = require('../src/index.js');
// ts 测试编译后文件
const utils = require('../src/index.ts');

/* eslint-env jest */
describe('单元测试', function () {
    describe('测试方法 formatDate', function() {
        it('测试方法 formatDate()', function() {
            expect(utils.SnDateUtil.formatDate(null, null)).to.be.equal(utils.SnDateUtil.formatDate(null, null));
        });
    });

    describe('测试方法 formatDate', function() {
        it('测试方法 formatDate(new Date(), \'yyyy-MM-dd\')', function() {
            expect(utils.SnDateUtil.formatDate(new Date(), 'yyyy-MM-dd')).to.be.equal(utils.SnDateUtil.formatDate(new Date(), 'yyyy-MM-dd'));
        });
    });

    describe('测试方法 formatDate', function() {
        it('测试方法 formatDate(new Date(), \'yyyy-MM-dd 第q季度 www HH:mm:ss:SSS\')', function() {
            let str = utils.SnDateUtil.formatDate(new Date(), 'yyyy-MM-dd 第q季度 www HH:mm:ss:SSS');
            expect(str).to.be.equal(str);
        });
    });

    describe('测试方法 formatDate', function() {
        it('测试方法 formatDate(1472793615764)', function() {
            expect(utils.SnDateUtil.formatDate(1472793615764, null)).to.be.equal(utils.SnDateUtil.formatDate(1472793615764, null));
        });
    });

    describe('测试方法 formatDate', function() {
        it('测试方法 formatDate(1472793615764)', function() {
            let nowDate = new Date('2016-09-02 12:20:15');
            expect(utils.SnDateUtil.formatDate(nowDate, 'yyyy-MM-dd HH:mm:ss')).to.be.equal(utils.SnDateUtil.formatDate(nowDate, 'yyyy-MM-dd HH:mm:ss'));
        });
    });
});
