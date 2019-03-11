const expect = require('expect.js');

// js 测试源文件
// var utils = require('../src/index.js');
// ts 测试编译后文件
const utils = require('../src/index.ts');

/* eslint-env jest */
describe('单元测试', function () {
    describe('测试方法 greeter', function () {
        it('测试方法 greeter', function () {
            expect(utils.greeter('snail')).not.to.equal(1);
        });
    });

    describe('测试方法 testFun', function () {
        it('测试方法 testFun', function () {
            expect(utils.testFun()).not.to.equal(1);
        });
    });
});
