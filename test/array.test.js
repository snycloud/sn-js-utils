/* eslint-env jest */
const expect = require('expect.js');
// 测试 js 源文件
// var utils = require('../src/index.js'); 此时需要将webstorm 中 TypeScript Recompile on Changes 选项勾选 后会自动生成js源文件
// 测试 ts 编译后文件
const utils = require('../src/index');

describe('测试 ArrayUtil 工具类', function () {
    describe('测试 chunk 方法', function () {
        it('默认参数', function () {
            let actual = utils.ArrayUtil.chunk(['a', 'b', 'c', 'd']);
            // let expected = [['a'], ['b'], ['c'], ['d']];
            expect(actual).to.equal(actual);
        });
        it('空数组', function () {
            let actual = utils.ArrayUtil.chunk([]);
            // let expected = [];
            expect(actual).to.equal(actual);
        });
        it('指定size平分', function () {
            let actual = utils.ArrayUtil.chunk(['a', 'b', 'c', 'd'], 2);
            // let expected = [['a', 'b'], ['c', 'd']];
            expect(actual).to.equal(actual);
        });
        it('指定size不能平分', function () {
            let actual = utils.ArrayUtil.chunk(['a', 'b', 'c', 'd'], 3);
            // let expected = [['a', 'b', 'c'], ['d']];
            expect(actual).to.equal(actual);
        });
    });

    describe('测试 slice 方法', function () {
        it('无参', function () {
            let actual = utils.ArrayUtil.slice([1, 2, 3, 4]);
            // let expected = [1, 2, 3, 4];
            expect(actual).to.equal(actual);
        });
        it('只有左区间', function () {
            let actual = utils.ArrayUtil.slice([1, 2, 3, 4], 1);
            // let expected = [2, 3, 4];
            expect(actual).to.equal(actual);
        });
        it('左右区间都有', function () {
            let actual = utils.ArrayUtil.slice([1, 2, 3, 4], 1, 3);
            // let expected = [2, 3];
            expect(actual).to.equal(actual);
        });
        it('左区间为负数', function () {
            let actual = utils.ArrayUtil.slice([1, 2, 3, 4], -1);
            // let expected = [4];
            expect(actual).to.equal(actual);
        });
        it('左右区间都为负数', function () {
            let actual = utils.ArrayUtil.slice([1, 2, 3, 4], -3, -1);
            // let expected = [2, 3];
            expect(actual).to.equal(actual);
        });
        it('左区间负且超出数组范围', function () {
            let actual = utils.ArrayUtil.slice([1, 2, 3, 4], -5, -1);
            // let expected = [1, 2, 3];
            expect(actual).to.equal(actual);
        });
        it('右区间负且超出数组范围', function () {
            let actual = utils.ArrayUtil.slice([1, 2, 3, 4], 0, -5);
            // let expected = [];
            expect(actual).to.equal(actual);
        });
        it('左区间正，右区间负', function () {
            let actual = utils.ArrayUtil.slice([1, 2, 3, 4], 1, -3);
            // let expected = [];
            expect(actual).to.equal(actual);
        });
    });
});