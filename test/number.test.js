/* eslint-env jest */
const expect = require('expect.js');
// 测试 js 源文件
// var utils = require('../src/index.js'); 此时需要将webstorm 中 TypeScript Recompile on Changes 选项勾选 后会自动生成js源文件
// 测试 ts 编译后文件
const utils = require('../src/index');

describe('测试 NumberUtil 工具类', function () {
    describe('测试 isInteger 方法', function () {
        it('isInteger', function () {
            let cases = [
                { num: 0, expected: true },
                { num: 1, expected: true },
                { num: -100000, expected: true },

                { num: 0.1, expected: false },
                { num: Math.PI, expected: false },

                { num: Infinity, expected: false },
                { num: -Infinity, expected: false },
                { num: '10', expected: false },
                { num: true, expected: false },
                { num: false, expected: false },
                { num: [1], expected: false },
            ];

            for (let index = 0; index < cases.length; index++) {
                let actual = utils.NumberUtil.isInteger(cases[index].num);
                let expected = cases[index].expected;
                expect(actual).to.be.equal(expected);
            }
        });
    });

    describe('测试 isFloat 方法', function () {
        it('isFloat', function () {
            let cases = [
                { num: 0, expected: false },
                { num: 3, expected: false },

                { num: 3.3, expected: true },
                { num: 0.1, expected: true },
                { num: Math.PI, expected: true },
            ];

            for (let index = 0; index < cases.length; index++) {
                let actual = utils.NumberUtil.isFloat(cases[index].num);
                let expected = cases[index].expected;
                expect(actual).to.be.equal(expected);
            }
        });
    });

    describe('测试 isaNaN 方法', function () {
        it('isaNaN', function () {
            let cases = [
                { num: NaN, expected: true },
                { num: Number.NaN, expected: true },
                { num: 0 / 0, expected: true },

                { num: "NaN", expected: false },
                { num: undefined, expected: false },
                { num: {}, expected: false },
                { num: [], expected: false },
                { num: Infinity, expected: false },
                { num: -Infinity, expected: false },
                { num: true, expected: false },
                { num: false, expected: false },
            ];

            for (let index = 0; index < cases.length; index++) {
                let actual = utils.NumberUtil.isaNaN(cases[index].num);
                let expected = cases[index].expected;
                expect(actual).to.be.equal(expected);
            }
        });
    });

    describe('测试 isaFinite 方法', function () {
        it('isaFinite', function () {
            let cases = [
                { num: Infinity, expected: false },
                { num: NaN, expected: false },
                { num: -Infinity, expected: false },

                { num: 0, expected: true },
                { num: 2e64, expected: true },

                { num: '0', expected: false },
            ];

            for (let index = 0; index < cases.length; index++) {
                let actual = utils.NumberUtil.isaFinite(cases[index].num);
                let expected = cases[index].expected;
                expect(actual).to.be.equal(expected);
            }
        });
    });

    describe('测试 inRange 方法', function () {
        it('inRange', function () {
            expect(utils.NumberUtil.inRange(3, 2, 4)).to.be.ok();
            expect(utils.NumberUtil.inRange(4, 8)).to.be.ok();
            expect(utils.NumberUtil.inRange(4, 2)).to.not.be.ok();
            expect(utils.NumberUtil.inRange(2, 2)).to.not.be.ok();
            expect(utils.NumberUtil.inRange(1.2, 2)).to.be.ok();
            expect(utils.NumberUtil.inRange(5.2, 4)).to.not.be.ok();
            expect(utils.NumberUtil.inRange(-3, -2, -6)).to.be.ok();
            expect(utils.NumberUtil.inRange(NaN, -Infinity, Infinity)).to.not.be.ok();
        });
    });

    describe('测试 random 方法', function () {
        it('随机整数', function () {
            for (let i = 0; i < 1000; i++) {
                let actual = utils.NumberUtil.random(0, 10);
                expect(actual).to.be.equal(Math.floor(actual));
                expect(actual).within(0, 10);
            }
        });
        it('随机小数', function () {
            for (let i = 0; i < 1000; i++) {
                let actual = utils.NumberUtil.random(0, 10, 2);
                expect(actual).within(0, 10);
            }
        });
        it('不传参数: 0到1随机小数', function () {
            for (let i = 0; i < 1000; i++) {
                let actual = utils.NumberUtil.random();
                expect(actual).within(0, 1);
            }
        });
        it('只有一个参数: 另一个边界为0', function () {
            for (let i = 0; i < 1000; i++) {
                let actual = utils.NumberUtil.random(4);
                expect(actual).within(0, 4);
            }
        });
        it('下边界大于上边界', function () {
            for (let i = 0; i < 1000; i++) {
                let actual = utils.NumberUtil.random(4, -2);
                expect(actual).within(-2, 4);
            }
        });
    });
});
