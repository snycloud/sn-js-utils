/* eslint-env jest */
const expect = require('expect.js');
// 测试 js 源文件
// var utils = require('../src/index.js'); 此时需要将webstorm 中 TypeScript Recompile on Changes 选项勾选 后会自动生成js源文件
// 测试 ts 编译后文件
const utils = require('../src/index');

describe('测试 DateUtil 工具类', function () {
    // 将日期格式化成指定格式的字符串
    describe('测试 formatDate 方法', function () {

        it('默认无参情况', function () {
            expect(utils.DateUtil.formatDate()).to.be.match(/^20\d{2}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
        });

        it('参数类型不匹配', function () {
            expect(utils.DateUtil.formatDate.bind(null, '')).to.throwError(e => {
                expect(e).to.be.a(TypeError);
            });
            expect(utils.DateUtil.formatDate.bind(null, true)).to.throwError(e => {
                expect(e).to.be.a(TypeError);
            });
            expect(utils.DateUtil.formatDate.bind(null, {})).to.throwError(e => {
                expect(e).to.be.a(TypeError);
            });
            expect(utils.DateUtil.formatDate.bind(null, [])).to.throwError(e => {
                expect(e).to.be.a(TypeError);
            });
            expect(utils.DateUtil.formatDate.bind(null, null)).to.throwError(e => {
                expect(e).to.be.a(TypeError);
            });
        });

        it('参数形式为 yyyy-MM-dd 形式', function () {
            expect(utils.DateUtil.formatDate(new Date(2018, 0, 1), 'yyyy-MM-dd')).to.be.equal('2018-01-01');
        });
        it('参数形式为 yyyy-M-d 形式', function () {
            expect(utils.DateUtil.formatDate(new Date(2018, 0, 1), 'yyyy-M-d')).to.be.equal('2018-1-1');
            expect(utils.DateUtil.formatDate(new Date(2018, 10, 1), 'yyyy-M-d')).to.be.equal('2018-11-1');
            expect(utils.DateUtil.formatDate(new Date(2018, 0, 10), 'yyyy-M-d')).to.be.equal('2018-1-10');
            expect(utils.DateUtil.formatDate(new Date(2018, 10, 10), 'yyyy-M-d')).to.be.equal('2018-11-10');
        });

        it('参数形式为 yyyy-MM-dd HH:mm:ss:SSS', function () {
            let date = new Date(2018, 0, 1, 10, 20, 30, 10);
            let result = utils.DateUtil.formatDate(date, 'yyyy-MM-dd HH:mm:ss:SSS');
            expect(result).to.be.equal('2018-01-01 10:20:30:010');
        });

        it('参数形式为 yyyy-MM-dd 第q季度 www HH:mm:ss:SSS', function () {
            let result = utils.DateUtil.formatDate(new Date(), 'yyyy-MM-dd 第q季度 www HH:mm:ss:SSS');
            expect(result).to.be.equal(result);
        });

        it('参数形式为(时间戳)', function () {
            let result = utils.DateUtil.formatDate(1472793615764);
            expect(result).to.be.equal(result);
        });
    });

    // 将字符串解析成日期
    describe('测试 parseDate 方法', function () {
        it('使用默认格式字符串 yyyy-MM-dd', function () {
            expect(utils.DateUtil.parseDate('2018-11-26').getTime()).to.be.equal(new Date(2018, 10, 26).getTime());
        });

        it('自定义格式字符串', function () {
            expect(utils.DateUtil.parseDate('2018.11.26', 'yyyy.MM.dd').getTime()).to.be.equal(new Date(2018, 10, 26).getTime());
            expect(utils.DateUtil.parseDate('2018/11/26', 'yyyy/MM/dd').getTime()).to.be.equal(new Date(2018, 10, 26).getTime());
            expect(utils.DateUtil.parseDate('11/26/2018', 'MM/dd/yyyy').getTime()).to.be.equal(new Date(2018, 10, 26).getTime());
            expect(utils.DateUtil.parseDate('26/11/2018', 'dd/MM/yyyy').getTime()).to.be.equal(new Date(2018, 10, 26).getTime());
        });

        it('包含时间的格式字符串', function () {
            expect(utils.DateUtil.parseDate('2018-11-26 13:28:43', 'yyyy-MM-dd HH:mm:ss').getTime()).to.be.equal(new Date(2018, 10, 26, 13, 28, 43).getTime());
        });

        it('包含中文的格式字符串', function () {
            expect(utils.DateUtil.parseDate('2018年11月26日', 'yyyy年MM月dd日').getTime()).to.be.equal(new Date(2018, 10, 26).getTime());
            expect(utils.DateUtil.parseDate('2018年11月26日 11时40分', 'yyyy年MM月dd日 HH时mm分').getTime()).to.be.equal(new Date(2018, 10, 26, 11, 40).getTime());
        });
    });

    // 将字符串解析成日期
    describe('测试 formatDateToFriendly 方法', function () {
        it('参数形式为默认无参', function () {
            let result = utils.DateUtil.formatDateToFriendly();
            expect(result).to.be.equal('刚刚');
        });

        it('参数形式为 当天', function () {
            let now = new Date();
            let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            let result = utils.DateUtil.formatDateToFriendly(today);
            expect(result).to.be.equal('00:00');
        });

        it('参数形式为 当年', function () {
            let now = new Date();
            let toyear = new Date(now.getFullYear(), now.getMonth());
            let result = utils.DateUtil.formatDateToFriendly(toyear);
            expect(result).to.be.equal('3月1日');
        });

        it('参数形式为 去年', function () {
            let now = new Date();
            let toyear = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
            let result = utils.DateUtil.formatDateToFriendly(toyear);
            expect(result).to.be.equal('2018年3月13日');
        });

        it('参数为时间戳', function () {
            expect(utils.DateUtil.formatDateToFriendly(1552472793266)).to.be.equal('18:26');
        });
    });

    describe('测试 timestamp 方法', function () {
        it('测试默认参数', function () {
            let expected = new Date().getTime();
            let actual = utils.DateUtil.timestamp();
            expect(actual).to.not.be.lessThan(expected);
        });

        it('测试 date 参数', function () {
            let date = new Date(2018, 0, 1);

            let expected = date.getTime();
            let actual = utils.DateUtil.timestamp(date);
            expect(actual).to.be.equal(expected);
        });

        it('测试字符串参数', function() {
            let expected = new Date(2018, 10, 26).getTime();
            let actual = utils.DateUtil.timestamp('2018-11-26', 'yyyy-MM-dd');
            expect(actual).to.be.equal(expected);
        });

        it('测试错误类型参数', function() {
            let expected = -1;
            let actual = utils.DateUtil.timestamp({});
            expect(actual).to.be.equal(expected);
        });
    });

});

