var expect = require('expect.js');

// js 测试源文件
var base = require('../src/index.js');
// ts 测试编译后文件
// var base = require('../src/index.ts');

describe('单元测试', function() {
    this.timeout(1000);

    describe('formatDate', function() {
        it('formatDate()', function() {
            expect(base.SnDateUtil.formatDate()).to.be.equal(base.SnDateUtil.formatDate());
        });
    });

    describe('formatDate', function() {
        it('formatDate(new Date(), \'yyyy-MM-dd\')', function() {
            expect(base.SnDateUtil.formatDate(new Date(), 'yyyy-MM-dd')).to.be.equal(base.SnDateUtil.formatDate(new Date(), 'yyyy-MM-dd'));
        });
    });

    describe('formatDate', function() {
        it('formatDate(new Date(), \'yyyy-MM-dd 第q季度 www HH:mm:ss:SSS\')', function() {
            let str = base.SnDateUtil.formatDate(new Date(), 'yyyy-MM-dd 第q季度 www HH:mm:ss:SSS');
            expect(str).to.be.equal(str);
        });
    });

    describe('formatDate', function() {
        it('formatDate(1472793615764)', function() {
            expect(base.SnDateUtil.formatDate(1472793615764)).to.be.equal(base.SnDateUtil.formatDate(1472793615764));
        });
    });
});
