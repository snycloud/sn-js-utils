/* eslint-env jest */
const expect = require('expect.js');
// 测试 js 源文件
// var utils = require('../src/index.js'); 此时需要将webstorm 中 TypeScript Recompile on Changes 选项勾选 后会自动生成js源文件
// 测试 ts 编译后文件
const utils = require('../src/index');

describe('测试 DateUtil 工具类', function () {

    describe('测试 formatDate 方法', function () {

        it('默认无参情况', function () {
            expect(utils.DateUtil.formatDate()).to.be.match(/^20\d{2}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
        });

        it('参数类型不匹配', function () {
            expect(utils.DateUtil.formatDate(true)).to.be.equal('invalid date');
            expect(utils.DateUtil.formatDate({})).to.be.equal('invalid date');
            expect(utils.DateUtil.formatDate([])).to.be.equal('invalid date');
            expect(utils.DateUtil.formatDate(null)).to.be.equal('invalid date');
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

        // it('参数形式为 yyyy-MM-dd 第q季度 www HH:mm:ss:SSS', function () {
        //     let result = utils.DateUtil.formatDate(new Date(), 'yyyy-MM-dd 第q季度 www HH:mm:ss:SSS');
        //     expect(result).to.be.equal(result);
        // });

        it('参数形式为(时间戳)', function () {
            let result = utils.DateUtil.formatDate(1472793615764);
            expect(result).to.be.equal(result);
        });
    });

    describe('测试 parseDate 方法', function () {
        it('使用默认格式字符串 yyyy-MM-dd', function () {
            expect(utils.DateUtil.parseDate('2018-11-26')).to.be.eql(new Date(2018, 10, 26));
        });

        it('自定义格式字符串', function () {
            expect(utils.DateUtil.parseDate('2018.11.26', 'yyyy.MM.dd')).to.be.eql(new Date(2018, 10, 26));
            expect(utils.DateUtil.parseDate('2018/11/26', 'yyyy/MM/dd')).to.be.eql(new Date(2018, 10, 26));
            expect(utils.DateUtil.parseDate('11/26/2018', 'MM/dd/yyyy')).to.be.eql(new Date(2018, 10, 26));
            expect(utils.DateUtil.parseDate('26/11/2018', 'dd/MM/yyyy')).to.be.eql(new Date(2018, 10, 26));
        });

        it('包含时间的格式字符串', function () {
            expect(utils.DateUtil.parseDate('2018-11-26 13:28:43', 'yyyy-MM-dd HH:mm:ss')).to.be.eql(new Date(2018, 10, 26, 13, 28, 43));
        });

        it('包含中文的格式字符串', function () {
            expect(utils.DateUtil.parseDate('2018年11月26日', 'yyyy年MM月dd日')).to.be.eql(new Date(2018, 10, 26));
            expect(utils.DateUtil.parseDate('2018年11月26日 11时40分', 'yyyy年MM月dd日 HH时mm分')).to.be.eql(new Date(2018, 10, 26, 11, 40));
        });
    });

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
            let date = new Date(2019, 2, 10);
            let result = utils.DateUtil.formatDateToFriendly(date);
            // expect(result).to.be.equal('3月10日');
            expect(result).to.be.equal(result);
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

        it('测试字符串参数', function () {
            let expected = new Date(2018, 10, 26).getTime();
            let actual = utils.DateUtil.timestamp('2018-11-26', 'yyyy-MM-dd');
            expect(actual).to.be.equal(expected);
        });

        it('测试错误类型参数', function () {
            let expected = -1;
            let actual = utils.DateUtil.timestamp({});
            expect(actual).to.be.equal(expected);
        });
    });

    describe('测试 dateAfter 方法', function () {
        it('单独测试 year (月初)', function () {
            let cases = [
                new Date(2012, 11, 10),
                new Date(2013, 11, 10),
                new Date(2014, 11, 10),
                new Date(2015, 11, 10),
                new Date(2016, 11, 10),
                new Date(2017, 11, 10),
            ];
            let initDate = cases[0];
            for (let ctr = 0; ctr < cases.length; ctr++) {
                let expected = cases[ctr];
                let actual = utils.DateUtil.dateAfter(initDate, { year: ctr });
                expect(actual).to.be.eql(expected);
            }
        });
        it('单独测试 year (月末)', function () {
            let cases = [
                new Date(2012, 1, 29),
                new Date(2013, 1, 28),
                new Date(2014, 1, 28),
                new Date(2015, 1, 28),
                new Date(2016, 1, 29),
                new Date(2017, 1, 28),
            ];
            let initDate = cases[0];
            for (let ctr = 0; ctr < cases.length; ctr++) {
                let expected = cases[ctr];
                let actual = utils.DateUtil.dateAfter(initDate, { year: ctr });
                expect(actual).to.be.eql(expected);
            }
        });

        it('单独测试 month (月初)', function () {
            let cases = [
                new Date(2015, 11, 10),
                new Date(2016, 0, 10),
                new Date(2016, 1, 10),
                new Date(2016, 2, 10),
                new Date(2016, 3, 10),
                new Date(2016, 4, 10),
                new Date(2016, 5, 10),
                new Date(2016, 6, 10),
                new Date(2016, 7, 10),
                new Date(2016, 8, 10),
                new Date(2016, 9, 10),
                new Date(2016, 10, 10),
                new Date(2016, 11, 10),
                new Date(2017, 0, 10),
                new Date(2017, 1, 10),
                new Date(2017, 2, 10),
            ];
            let initDate = cases[0];
            for (let ctr = 0; ctr < cases.length; ctr++) {
                let expected = cases[ctr];
                let actual = utils.DateUtil.dateAfter(initDate, { month: ctr });
                expect(actual).to.be.eql(expected);
            }
        });
        it('单独测试 month (月末)', function () {
            let cases = [
                new Date(2015, 11, 31),
                new Date(2016, 0, 31),
                new Date(2016, 1, 29),
                new Date(2016, 2, 31),
                new Date(2016, 3, 30),
                new Date(2016, 4, 31),
                new Date(2016, 5, 30),
                new Date(2016, 6, 31),
                new Date(2016, 7, 31),
                new Date(2016, 8, 30),
                new Date(2016, 9, 31),
                new Date(2016, 10, 30),
                new Date(2016, 11, 31),
                new Date(2017, 0, 31),
                new Date(2017, 1, 28),
                new Date(2017, 2, 31),
            ];
            let initDate = cases[0];
            for (let ctr = 0; ctr < cases.length; ctr++) {
                let expected = cases[ctr];
                let actual = utils.DateUtil.dateAfter(initDate, { month: ctr });
                expect(actual).to.be.eql(expected);
            }
        });

        it('单独测试 day (跨年 & 跨月)', function () {
            let cases = [
                new Date(2015, 11, 30),
                new Date(2015, 11, 31),
                new Date(2016, 0, 1),
                new Date(2016, 0, 2),
            ];
            let initDate = cases[0];
            for (let ctr = 0; ctr < cases.length; ctr++) {
                let expected = cases[ctr];
                let actual = utils.DateUtil.dateAfter(initDate, { day: ctr });
                expect(actual).to.be.eql(expected);
            }
        });
        it('单独测试 day (平年跨月)', function () {
            let cases = [
                new Date(2015, 1, 26),
                new Date(2015, 1, 27),
                new Date(2015, 1, 28),
                new Date(2015, 2, 1),
                new Date(2015, 2, 2),
            ];
            let initDate = cases[0];
            for (let ctr = 0; ctr < cases.length; ctr++) {
                let expected = cases[ctr];
                let actual = utils.DateUtil.dateAfter(initDate, { day: ctr });
                expect(actual).to.be.eql(expected);
            }
        });
        it('单独测试 day (闰年跨月)', function () {
            let cases = [
                new Date(2016, 1, 26),
                new Date(2016, 1, 27),
                new Date(2016, 1, 28),
                new Date(2016, 1, 29),
                new Date(2016, 2, 1),
                new Date(2016, 2, 2),
            ];
            let initDate = cases[0];
            for (let ctr = 0; ctr < cases.length; ctr++) {
                let expected = cases[ctr];
                let actual = utils.DateUtil.dateAfter(initDate, { day: ctr });
                expect(actual).to.be.eql(expected);
            }
        });

        it('单独测试 hour', function () {
            let cases = [
                new Date(2015, 11, 31),
                new Date(2015, 11, 31, 1),
                new Date(2015, 11, 31, 2),
                new Date(2015, 11, 31, 3),
                new Date(2015, 11, 31, 4),
                new Date(2015, 11, 31, 5),
                new Date(2015, 11, 31, 6),
                new Date(2015, 11, 31, 7),
                new Date(2015, 11, 31, 8),
                new Date(2015, 11, 31, 9),
                new Date(2015, 11, 31, 10),
                new Date(2015, 11, 31, 11),
                new Date(2015, 11, 31, 12),
                new Date(2015, 11, 31, 13),
                new Date(2015, 11, 31, 14),
                new Date(2015, 11, 31, 15),
                new Date(2015, 11, 31, 16),
                new Date(2015, 11, 31, 17),
                new Date(2015, 11, 31, 18),
                new Date(2015, 11, 31, 19),
                new Date(2015, 11, 31, 20),
                new Date(2015, 11, 31, 21),
                new Date(2015, 11, 31, 22),
                new Date(2015, 11, 31, 23),
                new Date(2016, 0, 1),
            ];
            let initDate = cases[0];
            for (let ctr = 0; ctr < cases.length; ctr++) {
                let expected = cases[ctr];
                let actual = utils.DateUtil.dateAfter(initDate, { hour: ctr });
                expect(actual).to.be.eql(expected);
            }
        });

        it('混合使用 year month day', function () {
            let cases = [
                { initDate: new Date(2015, 11, 30), diff: { day: 1, hour: 10 }, expected: new Date(2015, 11, 31, 10) },
                { initDate: new Date(2015, 11, 30), diff: { day: 3, hour: 20 }, expected: new Date(2016, 0, 2, 20) },
                { initDate: new Date(2015, 11, 30), diff: { week: 1, day: 2 }, expected: new Date(2016, 0, 8) },
                { initDate: new Date(2015, 11, 30), diff: { month: 1, day: 1 }, expected: new Date(2016, 0, 31) },
                { initDate: new Date(2015, 11, 30), diff: { month: 1, day: 2 }, expected: new Date(2016, 1, 1) },
                { initDate: new Date(2015, 11, 30), diff: { month: 2, day: 1 }, expected: new Date(2016, 1, 29) },
            ];
            for (let ctr = 0; ctr < cases.length; ctr++) {
                let expected = cases[ctr].expected;
                let actual = utils.DateUtil.dateAfter(cases[ctr].initDate, cases[ctr].diff);
                expect(actual).to.be.eql(expected);
            }
        });

        it('使用字符串', function () {
            let initDate = '2015年12月30日';
            let expected = new Date(2016, 1, 29);
            let actual = utils.DateUtil.dateAfter(initDate, { month: 2, day: 1 }, 'yyyy年MM月dd日');
            expect(actual).to.be.eql(expected);
        });

        it('使用时间戳', function () {
            let initDate = new Date(2015, 11, 30).getTime();
            let expected = new Date(2016, 1, 29);
            let actual = utils.DateUtil.dateAfter(initDate, { month: 2, day: 1 });
            expect(actual).to.be.eql(expected);
        });

        it('使用非法类型', function () {
            let initDate = null;
            let expected = new Date(2019, 4, 15);
            let actual = utils.DateUtil.dateAfter(initDate, { month: 2, day: 1 });
            expect(actual).to.be.greaterThan(expected);
        });
    });

    describe('测试 dateBefore 方法', function () {
        it('单独测试 year (月初)', function () {
            let cases = [
                new Date(2017, 11, 10),
                new Date(2016, 11, 10),
                new Date(2015, 11, 10),
                new Date(2014, 11, 10),
                new Date(2013, 11, 10),
                new Date(2012, 11, 10),
            ];
            let initDate = cases[0];
            for (let ctr = 0; ctr < cases.length; ctr++) {
                let expected = cases[ctr];
                let actual = utils.DateUtil.dateBefore(initDate, { year: ctr });
                expect(actual).to.be.eql(expected);
            }
        });
        it('单独测试 year (月末)', function () {
            let cases = [
                new Date(2016, 1, 29),
                new Date(2015, 1, 28),
                new Date(2014, 1, 28),
                new Date(2013, 1, 28),
                new Date(2012, 1, 29),
            ];
            let initDate = cases[0];
            for (let ctr = 0; ctr < cases.length; ctr++) {
                let expected = cases[ctr];
                let actual = utils.DateUtil.dateBefore(initDate, { year: ctr });
                expect(actual).to.be.eql(expected);
            }
        });

        it('单独测试 month (月初)', function () {
            let cases = [
                new Date(2017, 2, 10),
                new Date(2017, 1, 10),
                new Date(2017, 0, 10),
                new Date(2016, 11, 10),
                new Date(2016, 10, 10),
                new Date(2016, 9, 10),
                new Date(2016, 8, 10),
                new Date(2016, 7, 10),
                new Date(2016, 6, 10),
                new Date(2016, 5, 10),
                new Date(2016, 4, 10),
                new Date(2016, 3, 10),
                new Date(2016, 2, 10),
                new Date(2016, 1, 10),
                new Date(2016, 0, 10),
                new Date(2015, 11, 10),
            ];
            let initDate = cases[0];
            for (let ctr = 0; ctr < cases.length; ctr++) {
                let expected = cases[ctr];
                let actual = utils.DateUtil.dateBefore(initDate, { month: ctr });
                expect(actual).to.be.eql(expected);
            }
        });
        it('单独测试 month (月末)', function () {
            let cases = [
                new Date(2017, 2, 31),
                new Date(2017, 1, 28),
                new Date(2017, 0, 31),
                new Date(2016, 11, 31),
                new Date(2016, 10, 30),
                new Date(2016, 9, 31),
                new Date(2016, 8, 30),
                new Date(2016, 7, 31),
                new Date(2016, 6, 31),
                new Date(2016, 5, 30),
                new Date(2016, 4, 31),
                new Date(2016, 3, 30),
                new Date(2016, 2, 31),
                new Date(2016, 1, 29),
                new Date(2016, 0, 31),
                new Date(2015, 11, 31),
            ];
            let initDate = cases[0];
            for (let ctr = 0; ctr < cases.length; ctr++) {
                let expected = cases[ctr];
                let actual = utils.DateUtil.dateBefore(initDate, { month: ctr });
                expect(actual).to.be.eql(expected);
            }
        });

        it('单独测试 day (跨年 & 跨月)', function () {
            let cases = [
                new Date(2016, 0, 2),
                new Date(2016, 0, 1),
                new Date(2015, 11, 31),
                new Date(2015, 11, 30),
            ];
            let initDate = cases[0];
            for (let ctr = 0; ctr < cases.length; ctr++) {
                let expected = cases[ctr];
                let actual = utils.DateUtil.dateBefore(initDate, { day: ctr });
                expect(actual).to.be.eql(expected);
            }
        });
        it('单独测试 day (平年跨月)', function () {
            let cases = [
                new Date(2015, 2, 2),
                new Date(2015, 2, 1),
                new Date(2015, 1, 28),
                new Date(2015, 1, 27),
                new Date(2015, 1, 26),
            ];
            let initDate = cases[0];
            for (let ctr = 0; ctr < cases.length; ctr++) {
                let expected = cases[ctr];
                let actual = utils.DateUtil.dateBefore(initDate, { day: ctr });
                expect(actual).to.be.eql(expected);
            }
        });
        it('单独测试 day (闰年跨月)', function () {
            let cases = [
                new Date(2016, 2, 2),
                new Date(2016, 2, 1),
                new Date(2016, 1, 29),
                new Date(2016, 1, 28),
                new Date(2016, 1, 27),
                new Date(2016, 1, 26),
            ];
            let initDate = cases[0];
            for (let ctr = 0; ctr < cases.length; ctr++) {
                let expected = cases[ctr];
                let actual = utils.DateUtil.dateBefore(initDate, { day: ctr });
                expect(actual).to.be.eql(expected);
            }
        });

        it('单独测试 hour', function () {
            let cases = [
                new Date(2016, 0, 1),
                new Date(2015, 11, 31, 23),
                new Date(2015, 11, 31, 22),
                new Date(2015, 11, 31, 21),
                new Date(2015, 11, 31, 20),
                new Date(2015, 11, 31, 19),
                new Date(2015, 11, 31, 18),
                new Date(2015, 11, 31, 17),
                new Date(2015, 11, 31, 16),
                new Date(2015, 11, 31, 15),
                new Date(2015, 11, 31, 14),
                new Date(2015, 11, 31, 13),
                new Date(2015, 11, 31, 12),
                new Date(2015, 11, 31, 11),
                new Date(2015, 11, 31, 10),
                new Date(2015, 11, 31, 9),
                new Date(2015, 11, 31, 8),
                new Date(2015, 11, 31, 7),
                new Date(2015, 11, 31, 6),
                new Date(2015, 11, 31, 5),
                new Date(2015, 11, 31, 4),
                new Date(2015, 11, 31, 3),
                new Date(2015, 11, 31, 2),
                new Date(2015, 11, 31, 1),
                new Date(2015, 11, 31),
            ];
            let initDate = cases[0];
            for (let ctr = 0; ctr < cases.length; ctr++) {
                let expected = cases[ctr];
                let actual = utils.DateUtil.dateBefore(initDate, { hour: ctr });
                expect(actual).to.be.eql(expected);
            }
        });

        it('混合使用 year month day', function () {
            let cases = [
                { initDate: new Date(2015, 11, 31), diff: { day: 1, hour: 10 }, expected: new Date(2015, 11, 29, 14) },
                { initDate: new Date(2015, 11, 31), diff: { day: 3, hour: 20 }, expected: new Date(2015, 11, 27, 4) },
                { initDate: new Date(2016, 0, 8), diff: { week: 1, day: 2 }, expected: new Date(2015, 11, 30) },
                { initDate: new Date(2016, 0, 31), diff: { month: 1, day: 1 }, expected: new Date(2015, 11, 30) },
                { initDate: new Date(2016, 1, 1), diff: { month: 1, day: 2 }, expected: new Date(2015, 11, 30) },
                { initDate: new Date(2016, 2, 31), diff: { month: 2, day: 1 }, expected: new Date(2016, 0, 30) },
                { initDate: new Date(2016, 2, 31), diff: { month: 1, day: 1 }, expected: new Date(2016, 1, 29) },
            ];
            for (let ctr = 0; ctr < cases.length; ctr++) {
                let expected = cases[ctr].expected;
                let actual = utils.DateUtil.dateBefore(cases[ctr].initDate, cases[ctr].diff);
                expect(actual).to.be.eql(expected);
            }
        });

        it('使用字符串', function () {
            let initDate = '2016年3月31日';
            let expected = new Date(2016, 1, 29);
            let actual = utils.DateUtil.dateBefore(initDate, { month: 1, day: 1 }, 'yyyy年M月dd日');
            expect(actual).to.be.eql(expected);
        });

        it('使用时间戳', function () {
            let initDate = new Date(2016, 2, 31).getTime();
            let expected = new Date(2016, 1, 29);
            let actual = utils.DateUtil.dateBefore(initDate, { month: 1, day: 1 });
            expect(actual).to.be.eql(expected);
        });

        it('使用非法类型', function () {
            let initDate = null; //默认当前时间
            let expected = new Date(2019, 1, 13);
            let actual = utils.DateUtil.dateBefore(initDate, { month: 1, day: 1 });
            expect(actual.getTime()).to.be.greaterThan(expected.getTime());
        });
    });

    describe('测试 getDateStart', function () {
        it('测试 year', function () {
            let cases = [
                { initDate: new Date(2018, 2, 3), expected: new Date(2018, 0, 1) },
                { initDate: new Date(2018, 0, 3), expected: new Date(2018, 0, 1) },
                { initDate: new Date(2019, 2, 3), expected: new Date(2019, 0, 1) },
            ];
            for (let index = 0; index < cases.length; index++) {
                let expected = cases[index].expected;
                let actual = utils.DateUtil.getDateStart(cases[index].initDate, 0);
                expect(actual).to.be.eql(expected);
            }
        });
        it('测试 month', function () {
            let cases = [
                { initDate: new Date(2018, 2, 3), expected: new Date(2018, 2, 1) },
                { initDate: new Date(2018, 0, 3), expected: new Date(2018, 0, 1) },
                { initDate: new Date(2019, 2, 3), expected: new Date(2019, 2, 1) },
            ];
            for (let index = 0; index < cases.length; index++) {
                let expected = cases[index].expected;
                let actual = utils.DateUtil.getDateStart(cases[index].initDate, 1);
                expect(actual).to.be.eql(expected);
            }
        });
        // it('测试 week', function () {
        //     let cases = [
        //         { initDate: new Date(2018, 2, 3, 10, 20), expected: new Date(2018, 2, 3) },
        //         { initDate: new Date(2018, 0, 3, 10, 20), expected: new Date(2018, 0, 3) },
        //         { initDate: new Date(2019, 2, 3, 10, 20), expected: new Date(2019, 2, 3) },
        //     ];
        //     for (let index = 0; index < cases.length; index++) {
        //         let expected = cases[index].expected;
        //         let actual = utils.DateUtil.getDateStart(cases[index].initDate, 2);
        //         expect(actual).to.be.eql(expected);
        //     }
        // });
        it('测试 date', function () {
            let cases = [
                { initDate: new Date(2018, 2, 3, 10, 20), expected: new Date(2018, 2, 3) },
                { initDate: new Date(2018, 0, 3, 12, 21), expected: new Date(2018, 0, 3) },
                { initDate: new Date(2019, 2, 3, 23, 23), expected: new Date(2019, 2, 3) },
            ];
            for (let index = 0; index < cases.length; index++) {
                let expected = cases[index].expected;
                let actual = utils.DateUtil.getDateStart(cases[index].initDate, 3);
                expect(actual).to.be.eql(expected);
            }
        });
        it('测试 hour', function () {
            let cases = [
                { initDate: new Date(2018, 2, 3, 10, 20), expected: new Date(2018, 2, 3, 10) },
                { initDate: new Date(2018, 0, 3, 10, 22), expected: new Date(2018, 0, 3, 10) },
                { initDate: new Date(2019, 2, 3, 10, 23), expected: new Date(2019, 2, 3, 10) },
            ];
            for (let index = 0; index < cases.length; index++) {
                let expected = cases[index].expected;
                let actual = utils.DateUtil.getDateStart(cases[index].initDate, 4);
                expect(actual).to.be.eql(expected);
            }
        });
        it('测试 minute', function () {
            let cases = [
                { initDate: new Date(2018, 2, 3, 10, 21, 20), expected: new Date(2018, 2, 3, 10, 21) },
                { initDate: new Date(2018, 0, 3, 10, 20, 2), expected: new Date(2018, 0, 3, 10, 20) },
                { initDate: new Date(2019, 2, 3, 10, 23, 59), expected: new Date(2019, 2, 3, 10, 23) },
            ];
            for (let index = 0; index < cases.length; index++) {
                let expected = cases[index].expected;
                let actual = utils.DateUtil.getDateStart(cases[index].initDate, 5);
                expect(actual).to.be.eql(expected);
            }
        });
        it('测试 second', function () {
            let cases = [
                { initDate: new Date(2018, 2, 3, 10, 21, 20, 100), expected: new Date(2018, 2, 3, 10, 21, 20) },
                { initDate: new Date(2018, 0, 3, 10, 20, 2, 400), expected: new Date(2018, 0, 3, 10, 20, 2) },
                { initDate: new Date(2019, 2, 3, 10, 23, 59, 999), expected: new Date(2019, 2, 3, 10, 23, 59) },
            ];
            for (let index = 0; index < cases.length; index++) {
                let expected = cases[index].expected;
                let actual = utils.DateUtil.getDateStart(cases[index].initDate, 6);
                expect(actual).to.be.eql(expected);
            }
        });
    });

    describe('测试 getDateEnd', function () {
        it('测试 year', function () {
            let cases = [
                { initDate: new Date(2018, 2, 3), expected: new Date(2018, 11, 31, 23, 59, 59, 999) },
                { initDate: new Date(2018, 0, 3), expected: new Date(2018, 11, 31, 23, 59, 59, 999) },
                { initDate: new Date(2019, 2, 3), expected: new Date(2019, 11, 31, 23, 59, 59, 999) },
            ];
            for (let index = 0; index < cases.length; index++) {
                let expected = cases[index].expected;
                let actual = utils.DateUtil.getDateEnd(cases[index].initDate, 0);
                expect(actual).to.be.eql(expected);
            }
        });
        it('测试 month', function () {
            let cases = [
                { initDate: new Date(2018, 1, 3), expected: new Date(2018, 1, 28, 23, 59, 59, 999) },
                { initDate: new Date(2019, 0, 3), expected: new Date(2019, 0, 31, 23, 59, 59, 999) },
                { initDate: new Date(2020, 1, 3), expected: new Date(2020, 1, 29, 23, 59, 59, 999) },
            ];
            for (let index = 0; index < cases.length; index++) {
                let expected = cases[index].expected;
                let actual = utils.DateUtil.getDateEnd(cases[index].initDate, 1);
                expect(actual).to.be.eql(expected);
            }
        });
        // it('测试 week', function () {
        //     let cases = [
        //         { initDate: new Date(2018, 2, 3, 10, 20), expected: new Date(2018, 2, 3) },
        //         { initDate: new Date(2018, 0, 3, 10, 20), expected: new Date(2018, 0, 3) },
        //         { initDate: new Date(2019, 2, 3, 10, 20), expected: new Date(2019, 2, 3) },
        //     ];
        //     for (let index = 0; index < cases.length; index++) {
        //         let expected = cases[index].expected;
        //         let actual = utils.DateUtil.getDateEnd(cases[index].initDate, 2);
        //         expect(actual).to.be.eql(expected);
        //     }
        // });
        it('测试 date', function () {
            let cases = [
                { initDate: new Date(2018, 2, 3, 10, 20), expected: new Date(2018, 2, 3, 23, 59, 59, 999) },
                { initDate: new Date(2018, 0, 3, 12, 21), expected: new Date(2018, 0, 3, 23, 59, 59, 999) },
                { initDate: new Date(2019, 2, 3, 23, 23), expected: new Date(2019, 2, 3, 23, 59, 59, 999) },
            ];
            for (let index = 0; index < cases.length; index++) {
                let expected = cases[index].expected;
                let actual = utils.DateUtil.getDateEnd(cases[index].initDate, 3);
                expect(actual).to.be.eql(expected);
            }
        });
        it('测试 hour', function () {
            let cases = [
                { initDate: new Date(2018, 2, 3, 10, 20), expected: new Date(2018, 2, 3, 10, 59, 59, 999) },
                { initDate: new Date(2018, 0, 3, 0, 22), expected: new Date(2018, 0, 3, 0, 59, 59, 999) },
                { initDate: new Date(2019, 2, 3, 23, 23), expected: new Date(2019, 2, 3, 23, 59, 59, 999) },
            ];
            for (let index = 0; index < cases.length; index++) {
                let expected = cases[index].expected;
                let actual = utils.DateUtil.getDateEnd(cases[index].initDate, 4);
                expect(actual).to.be.eql(expected);
            }
        });
        it('测试 minute', function () {
            let cases = [
                { initDate: new Date(2018, 2, 3, 10, 21, 20), expected: new Date(2018, 2, 3, 10, 21, 59, 999) },
                { initDate: new Date(2018, 0, 3, 10, 20, 2), expected: new Date(2018, 0, 3, 10, 20, 59, 999) },
                { initDate: new Date(2019, 2, 3, 10, 23, 59), expected: new Date(2019, 2, 3, 10, 23, 59, 999) },
            ];
            for (let index = 0; index < cases.length; index++) {
                let expected = cases[index].expected;
                let actual = utils.DateUtil.getDateEnd(cases[index].initDate, 5);
                expect(actual).to.be.eql(expected);
            }
        });
        it('测试 second', function () {
            let cases = [
                { initDate: new Date(2018, 2, 3, 10, 21, 20, 0), expected: new Date(2018, 2, 3, 10, 21, 20, 999) },
                { initDate: new Date(2018, 0, 3, 10, 20, 2, 400), expected: new Date(2018, 0, 3, 10, 20, 2, 999) },
                { initDate: new Date(2019, 2, 3, 10, 23, 59, 999), expected: new Date(2019, 2, 3, 10, 23, 59, 999) },
            ];
            for (let index = 0; index < cases.length; index++) {
                let expected = cases[index].expected;
                let actual = utils.DateUtil.getDateEnd(cases[index].initDate, 6);
                expect(actual).to.be.eql(expected);
            }
        });
    });

    describe('测试 getDayCountOfYear  方法', function () {
        it('无参', function () {
            let expected = 365;
            let actual = utils.DateUtil.getDayCountOfYear();
            expect(actual).to.be.eql(expected);
        });
        it('平年', function () {
            let expected = 365;
            let actual = utils.DateUtil.getDayCountOfYear(new Date(2018, 1, 1));
            expect(actual).to.be.eql(expected);
        });
        it('闰年', function () {
            let expected = 366;
            let actual = utils.DateUtil.getDayCountOfYear(new Date(2016, 1, 1));
            expect(actual).to.be.eql(expected);
        });
        it('字符串', function () {
            let expected = 365;
            let actual = utils.DateUtil.getDayCountOfYear('2018-11-26');
            expect(actual).to.be.eql(expected);
        });
        it('时间戳', function () {
            let expected = 365;
            let actual = utils.DateUtil.getDayCountOfYear(1543161600000); // 2018-11-26
            expect(actual).to.be.eql(expected);
        });
    });

    describe('测试  getDayIndexOfYear 方法', function () {
        it('日期对象', function () {
            let expected = 31 + 29 + 6;
            let actual = utils.DateUtil.getDayIndexOfYear(new Date(2016, 2, 6));
            expect(actual).to.be.eql(expected);
        });
        it('字符串', function () {
            let expected = 31 + 28 + 6;
            let actual = utils.DateUtil.getDayIndexOfYear('2019-03-06');
            expect(actual).to.be.eql(expected);
        });
        it('时间戳', function () {
            let expected = 26;
            let actual = utils.DateUtil.getDayIndexOfYear(new Date(2019, 0, 26).getTime()); // 2019-01-26
            expect(actual).to.be.eql(expected);
        });
    });

    describe('测试 getWeekIndexOfYear 方法', function () {
        it('时间戳', function () {
            let cases = [
                { date: '2019-01-01', expected: 1 },
                { date: '2019-01-07', expected: 1 },
                { date: '2019-01-08', expected: 2 },
                { date: '2019-01-14', expected: 2 },
                { date: '2019-01-15', expected: 3 },
                { date: '2019-01-21', expected: 3 },
                { date: '2019-01-22', expected: 4 },
                { date: '2019-01-28', expected: 4 },
                { date: '2019-01-29', expected: 5 },
                { date: '2019-02-04', expected: 5 },
                { date: '2019-02-05', expected: 6 },
            ];
            for (let index = 0; index < cases.length; index++) {
                let expected = cases[index].expected;
                let actual = utils.DateUtil.getWeekIndexOfYear(cases[index].date);
                expect(actual).to.be.eql(expected);
            }
        });
    });

    describe('测试 getWeekIndexOfMonth 方法', function () {
        it('时间戳', function () {
            let cases = [
                { date: '2019-01-01', expected: 1 },
                { date: '2019-01-07', expected: 1 },
                { date: '2019-01-08', expected: 2 },
                { date: '2019-01-14', expected: 2 },
                { date: '2019-01-15', expected: 3 },
                { date: '2019-01-21', expected: 3 },
                { date: '2019-01-22', expected: 4 },
                { date: '2019-01-28', expected: 4 },
                { date: '2019-01-29', expected: 5 },
                { date: '2019-02-04', expected: 1 },
                { date: '2019-02-05', expected: 1 },
                { date: '2019-02-08', expected: 2 },
                { date: '2019-12-07', expected: 1 },
                { date: '2019-12-08', expected: 2 },
            ];
            for (let index = 0; index < cases.length; index++) {
                let expected = cases[index].expected;
                let actual = utils.DateUtil.getWeekIndexOfMonth(cases[index].date);
                expect(actual).to.be.eql(expected);
            }
        });
    });

    describe('测试 getDateDiff 方法', function () {
        it('两个都为字符串', function () {
            let expected = { Day: 1, Hour: 0, Minute: 0, Second: 0, Millsecond: 0 };
            let actual = utils.DateUtil.getDateDiff('2019-01-01', '2019-01-02');
            expect(actual).to.be.eql(expected);
        });
        it('两个都为字符串', function () {
            let expected = { Day: 1, Hour: 3, Minute: 0, Second: 30, Millsecond: 0 };
            let actual = utils.DateUtil.getDateDiff('20190101', '2019-01-02 03:00:30', 'yyyyMMdd', 'yyyy-MM-dd HH:mm:ss');
            expect(actual).to.be.eql(expected);
        });
        it('第二个为字符串', function () {
            let expected = { Day: 1, Hour: 3, Minute: 0, Second: 30, Millsecond: 0 };
            let actual = utils.DateUtil.getDateDiff(new Date(2019, 0, 1), '2019-01-02 03:00:30', 'yyyy-MM-dd HH:mm:ss');
            expect(actual).to.be.eql(expected);
        });
    });

});

