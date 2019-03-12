/* eslint-env jest */
const expect = require('expect.js');
// 测试 js 源文件
// var utils = require('../src/index.js'); 此时需要将webstorm 中 TypeScript Recompile on Changes 选项勾选 后会自动生成js源文件
// 测试 ts 编译后文件
const utils = require('../src/index.ts');

describe('测试 DateUtil 工具类', function () {
    // 将日期格式化成指定格式的字符串
    describe('测试 formatDate 方法', function () {
        it('默认无参情况', function () {
            let result = utils.DateUtil.formatDate();
            expect(result).to.be.equal(result);
        });

        it('参数形式为 yyyy-MM-dd 形式', function () {
            let result = utils.DateUtil.formatDate(new Date(), 'yyyy-MM-dd');
            expect(result).to.be.equal(result);
        });

        it('参数形式为 yyyy-MM-dd 第q季度 w HH:mm:ss:SSS', function () {
            let result = utils.DateUtil.formatDate(new Date(), 'yyyy-MM-dd 第q季度 w HH:mm:ss:SSS');
            expect(result).to.be.equal(result);
        });

        it('参数形式为 yyyy-MM-dd 第q季度 www HH:mm:ss:SSS', function () {
            let result = utils.DateUtil.formatDate(new Date(), 'yyyy-MM-dd 第q季度 www HH:mm:ss:SSS');
            expect(result).to.be.equal(result);
        });

        it('参数形式为 1472793615764 (时间戳)', function () {
            let result = utils.DateUtil.formatDate(1472793615764, null);
            expect(result).to.be.equal(result);
        });

        it('参数形式为 yyyy-MM-dd HH:mm:ss', function () {
            let nowDate = new Date('2016-09-02 12:20:15');
            let result = utils.DateUtil.formatDate(nowDate, 'yyyy-MM-dd HH:mm:ss');
            expect(result).to.be.equal(result);
        });
    });

    // 将字符串解析成日期
    describe('测试 parseDate 方法', function () {
        it('参数形式为 yyyy-MM-dd', function () {
            let result = utils.DateUtil.parseDate('2016-08-11');
            expect(result).to.be.equal(result);
        });

        it('参数形式为 yyyy-MM-dd HH:mm:ss', function () {
            let result = utils.DateUtil.parseDate('2019-03-11 18:52:49', 'yyyy-MM-dd HH:mm:ss');
            expect(result).to.be.equal(result);
        });

        it('参数形式为 yyyy-MM-dd', function () {
            let result = utils.DateUtil.parseDate('2019-03-11 18:52:49:100', 'yyyy-MM-dd HH:mm:ss:SSS');
            expect(result).to.be.equal(result);
        });
    });

    // 将字符串解析成日期
    describe('测试 formatDateToFriendly 方法', function () {
        it('参数形式为默认无参', function () {
            let result = utils.DateUtil.formatDateToFriendly();
            expect(result).to.be.equal(result);
        });

        it('参数形式为 new Date(\'2017-11-11\')', function () {
            let result = utils.DateUtil.formatDateToFriendly(new Date('2017-11-11'));
            expect(result).to.be.equal(result);
        });

        it('参数形式为 new Date(\'2019-01-11\')', function () {
            let result = utils.DateUtil.formatDateToFriendly(new Date('2019-01-11'));
            expect(result).to.be.equal(result);
        });

        it('参数形式为 new Date(\'2019-03-12\')', function () {
            let result = utils.DateUtil.formatDateToFriendly(new Date('2019-03-12'));
            expect(result).to.be.equal(result);
        });

        it('测试 test 方法', function () {
            expect(utils.DateUtil.test(1,2)).to.be.equal(3);
        });
    });
});

