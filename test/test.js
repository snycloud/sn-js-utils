/*eslint-disable*/
const expect = require('expect.js');
// js 测试源文件
const {SnDateUtil} = require('../src/index.js');
// ts 测试编译后文件
// const {SnDateUtil} = require('../src/index.ts');

describe('单元测试', function() {
    describe('formatDate', function() {
        it('formatDate()', function() {
            expect(SnDateUtil.formatDate(null, null)).to.be.equal(SnDateUtil.formatDate(null, null));
        });
    });

    describe('formatDate', function() {
        it('formatDate(new Date(), \'yyyy-MM-dd\')', function() {
            expect(SnDateUtil.formatDate(new Date(), 'yyyy-MM-dd')).to.be.equal(SnDateUtil.formatDate(new Date(), 'yyyy-MM-dd'));
        });
    });

    describe('formatDate', function() {
        it('formatDate(new Date(), \'yyyy-MM-dd 第q季度 www HH:mm:ss:SSS\')', function() {
            let str = SnDateUtil.formatDate(new Date(), 'yyyy-MM-dd 第q季度 www HH:mm:ss:SSS');
            expect(str).to.be.equal(str);
        });
    });

    describe('formatDate', function() {
        it('formatDate(1472793615764)', function() {
            expect(SnDateUtil.formatDate(1472793615764, null)).to.be.equal(SnDateUtil.formatDate(1472793615764, null));
        });
    });
});
