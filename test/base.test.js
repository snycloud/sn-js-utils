/* eslint-env jest */
const expect = require('expect.js');
// 测试 js 源文件
// var utils = require('../src/index.js'); 此时需要将webstorm 中 TypeScript Recompile on Changes 选项勾选 后会自动生成js源文件
// 测试 ts 编译后文件
const utils = require('../src/index');


describe('测试 BaseUtil 工具类', function () {

    describe('测试 isUndefined 函数', function () {
        it('undefined应该是undefined', function () {
            expect(utils.BaseUtil.isUndefined(undefined)).to.be.ok();
        });
        it('null不应该是undefined', function () {
            expect(utils.BaseUtil.isUndefined(null)).to.not.be.ok();
        });
        it('数字不应该是undefined', function () {
            expect(utils.BaseUtil.isUndefined(12)).to.not.be.ok();
        });
    });

    describe('测试 isNull 函数', function () {
        it('null 应该是 null', function () {
            expect(utils.BaseUtil.isNull(null)).to.be.ok();
        });
        it('undefined 不应该是 null', function () {
            expect(utils.BaseUtil.isNull(undefined)).to.not.be.ok();
        });
        it('空字符串不应该是 null', function () {
            expect(utils.BaseUtil.isNull('')).to.not.be.ok();
        });
    });

    describe('测试 isArray 函数', function () {
        it('[] 应该是 Array', function () {
            expect(utils.BaseUtil.isArray([])).to.be.ok();
        });
        it('[1,2] 应该是 Array', function () {
            expect(utils.BaseUtil.isArray([1, 2])).to.be.ok();
        });
        it('["1","2"] 应该是 Array', function () {
            expect(utils.BaseUtil.isArray(['1', '2'])).to.be.ok();
        });
        it('[{"name": "张三"},{"age": 12}] 应该是 Array', function () {
            expect(utils.BaseUtil.isArray([{'name': '张三'}, {'age': 12}])).to.be.ok();
        });
        it('null 不应该是 Array', function () {
            expect(utils.BaseUtil.isArray(null)).to.not.be.ok();
        });
    });

    describe('测试 isFunction 函数', function () {
        it('console.log 应该是 Function', function () {
            expect(utils.BaseUtil.isFunction(console.log)).to.be.ok();
        });
        it('null 不应该是 Function', function () {
            expect(utils.BaseUtil.isFunction(null)).to.not.be.ok();
        });
    });

    describe('测试 isBoolean 函数', function () {
        it('true 应该是 Boolean', function () {
            expect(utils.BaseUtil.isBoolean(true)).to.be.ok();
        });
        it('false 应该是 Boolean', function () {
            expect(utils.BaseUtil.isBoolean(false)).to.be.ok();
        });
        it('null 不应该是 Boolean', function () {
            expect(utils.BaseUtil.isBoolean(null)).to.not.be.ok();
        });
        it('0 不应该是 Boolean', function () {
            expect(utils.BaseUtil.isBoolean(0)).to.not.be.ok();
        });
    });

    describe('测试 isString 函数', function () {
        it('"" 应该是 String', function () {
            expect(utils.BaseUtil.isString('')).to.be.ok();
        });
        it('"true" 应该是 String', function () {
            expect(utils.BaseUtil.isString('true')).to.be.ok();
        });
        it('null 不应该是 String', function () {
            expect(utils.BaseUtil.isString(null)).to.not.be.ok();
        });
        it('false 不应该是 String', function () {
            expect(utils.BaseUtil.isString(false)).to.not.be.ok();
        });
    });

    describe('测试 isNumber 函数', function () {
        it('0 应该是 Number', function () {
            expect(utils.BaseUtil.isNumber(0)).to.be.ok();
        });
        it('true 不应该是 Number', function () {
            expect(utils.BaseUtil.isNumber('true')).to.not.be.ok();
        });
        it('null 不应该是 Number', function () {
            expect(utils.BaseUtil.isNumber(null)).to.not.be.ok();
        });
        it('{} 不应该是 Number', function () {
            expect(utils.BaseUtil.isNumber({})).to.not.be.ok();
        });
    });

    describe('测试 isRegExp 函数', function () {
        it('/x/g 应该是 RegExp', function () {
            expect(utils.BaseUtil.isRegExp(/x/g)).to.be.ok();
        });
        it('null 不应该是 RegExp', function () {
            expect(utils.BaseUtil.isRegExp(null)).to.not.be.ok();
        });
    });

    describe('测试 isObject 函数', function () {
        it('{} 应该是 Object', function () {
            expect(utils.BaseUtil.isObject({})).to.be.ok();
        });
        it('null 不应该是 Object', function () {
            expect(utils.BaseUtil.isObject(null)).to.not.be.ok();
        });
        it('undefined 不应该是 Object', function () {
            expect(utils.BaseUtil.isObject(undefined)).to.not.be.ok();
        });
    });

    describe('测试 isDate 函数', function () {
        it('new Date() 应该是 Date', function () {
            expect(utils.BaseUtil.isDate(new Date())).to.be.ok();
        });
        it('"2018-01-01" 不应该是 Date', function () {
            expect(utils.BaseUtil.isDate('2018-01-01')).to.not.be.ok();
        });
        it('null 不应该是 Date', function () {
            expect(utils.BaseUtil.isDate(null)).to.not.be.ok();
        });
    });

    describe('测试 getType 函数', function () {
        it('getType(null) 应该是 null', function () {
            expect(utils.BaseUtil.getType(null)).to.be.eql('null');
        });
        it('getType(undefined) 应该是 undefined', function () {
            expect(utils.BaseUtil.getType(undefined)).to.be.eql('undefined');
        });
        it('getType(0) 应该是 number', function () {
            expect(utils.BaseUtil.getType(0)).to.be.eql('number');
        });
        it('getType("") 应该是 string', function () {
            expect(utils.BaseUtil.getType('')).to.be.eql('string');
        });
        it('getType(true) 应该是 boolean', function () {
            expect(utils.BaseUtil.getType(true)).to.be.eql('boolean');
        });
        it('getType([]) 应该是 array', function () {
            expect(utils.BaseUtil.getType([])).to.be.eql('array');
        });
        it('getType({}) 应该是 object', function () {
            expect(utils.BaseUtil.getType({})).to.be.eql('object');
        });
        it('getType(console.log) 应该是 function', function () {
            expect(utils.BaseUtil.getType(console.log)).to.be.eql('function');
        });
        it('getType(new Date()) 应该是 date', function () {
            expect(utils.BaseUtil.getType(new Date())).to.be.eql('date');
        });
        it('getType(/x/g) 应该是 regexp', function () {
            expect(utils.BaseUtil.getType(/x/g)).to.be.eql('regexp');
        });
        it('getType(new Error()) 应该是 error', function () {
            expect(utils.BaseUtil.getType(new Error())).to.be.eql('error');
        });
        it('getType(new Map()) 应该是 object', function () {
            expect(utils.BaseUtil.getType(new Map())).to.be.eql('object');
        });
    });

    describe('测试 isEmpty 函数', function () {
        it('{} 应该是 empty', function () {
            expect(utils.BaseUtil.isEmpty({})).to.be.ok();
        });
        it('[] 应该是 empty', function () {
            expect(utils.BaseUtil.isEmpty([])).to.be.ok();
        });
        it('"" 应该是 empty', function () {
            expect(utils.BaseUtil.isEmpty('')).to.be.ok();
        });
        it('"    " 应该是 empty', function () {
            expect(utils.BaseUtil.isEmpty('    ')).to.be.ok();
        });
        it('null 应该是 empty', function () {
            expect(utils.BaseUtil.isEmpty(null)).to.be.ok();
        });
        it('undefined 应该是 empty', function () {
            expect(utils.BaseUtil.isEmpty(undefined)).to.be.ok();
        });
        it('new Object() 应该是 empty', function () {
            expect(utils.BaseUtil.isEmpty(new Object())).to.be.ok();
        });
        it('[0] 不应该是 empty', function () {
            expect(utils.BaseUtil.isEmpty([0])).to.not.be.ok();
        });
        it('"0" 不应该是 empty', function () {
            expect(utils.BaseUtil.isEmpty('0')).to.not.be.ok();
        });
    });

});
