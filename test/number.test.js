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
});
