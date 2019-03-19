/* eslint-env jest */
const expect = require('expect.js');
// 测试 js 源文件
// var utils = require('../src/index.js'); 此时需要将webstorm 中 TypeScript Recompile on Changes 选项勾选 后会自动生成js源文件
// 测试 ts 编译后文件
const utils = require('../src/index.ts');

describe('测试 StringUtil 工具类', function () {

    // 判断字符串是否为空
    describe('测试 isEmpty 方法', function () {
        it('input为空时,返回true', function () {
            expect(utils.StringUtil.isEmpty('')).to.be.equal(true);
        });

        it('input为我是测试的字符串时,返回false', function () {
            expect(utils.StringUtil.isEmpty('我是测试的字符串')).to.be.equal(false);
        });
    });

    // 判断字符串是否不为空
    describe('测试 isNotEmpty 方法', function () {
        it('input为空时,返回false', function () {
            expect(utils.StringUtil.isNotEmpty('')).to.be.equal(false);
        });

        it('input为我是测试的字符串时,返回true', function () {
            expect(utils.StringUtil.isNotEmpty('我是测试的字符串')).to.be.equal(true);
        });
    });

    // 将字符串去除空格
    describe('测试 trim 方法', function () {
        it('input为测试字符串时,return去空格后的字符串', function () {
            expect(utils.StringUtil.trim(' 测试字符串 ')).to.be.equal('测试字符串');
        });

        it('input为我是测 试的字符串时,返回去空格后的字符串', function () {
            expect(utils.StringUtil.trim('我是测 试的字符串')).to.be.equal('我是测试的字符串');
        });
    });

    // 判断字符串是否以某个字符开头
    describe('测试 startsWith 方法', function () {
        it('input为a2dfcfar1bzvb2时,a的位置等于0时,返回true', function () {
            expect(utils.StringUtil.startsWith('a2dfcfar1bzvb2', 'a')).to.be.equal(true);
        });
    });

    // 判断字符串是否以某个字符结束
    describe('测试 endsWith 方法', function () {
        it('input为a2dfcfar1bzvb时,b的位置等于a2dfcfar1bzvb字符串总长度-1时,返回true', function () {
            expect(utils.StringUtil.endsWith('a2dfcfar1bzvb', 'b')).to.be.equal(true);
        });
    });

    // 判断字符串是否包含某个字符
    describe('测试 contains 方法', function () {
        it('input为a2dfcfar1bzvb2时,a的位置大于等于0时,表示a2dfcfar1bzvb2包含a,返回true', function () {
            expect(utils.StringUtil.contains('a2dfcfar1bzvb2', 'a')).to.be.equal(true);
        });
    });

    // 判断两个字符串是否相等
    describe('测试 equals 方法', function () {
        it('input1为2222,input2为2222,返回true', function () {
            expect(utils.StringUtil.equals(2222, 2222)).to.be.equal(true);
        });

        it('input1为我不是测试的字符串,input2为我是测试的字符串时,返回false', function () {
            expect(utils.StringUtil.equals('我不是测试的字符串 ', '我是测试的字符串')).to.be.equal(false);
        });
    });

    // 忽略大小写判断两个字符串是否相等
    describe('测试 equalsIgnoreCase 方法', function () {
        it('input1为equalsIgnoreCasE,input2为equalsIgnoreCase时,返回true', function () {
            expect(utils.StringUtil.equalsIgnoreCase('equalsIgnoreCasE', 'equalsIgnoreCase')).to.be.equal(true);
        });

        it('input1为equals,input2为equalsIgnoreCase时,返回false', function () {
            expect(utils.StringUtil.equalsIgnoreCase('equals ', 'equalsIgnoreCase')).to.be.equal(false);
        });
    });

    //判断字符串是否含有空格
    describe('测试 containsWhitespace 方法', function () {
        it('input为我是测试的字符串时,返回false', function () {
            expect(utils.StringUtil.containsWhitespace('我是测试的字符串')).to.be.equal(false);
        });

        it('input为我是 测试 的 字符串时  ,返回true', function () {
            expect(utils.StringUtil.containsWhitespace('我是 测试 的 字符串  ')).to.be.equal(true);
        });
    });

    //按指定数量生成给定字符串字符
    describe('测试 repeat 方法', function () {
        it('input为我是测试的字符串 repeatTimes为6时,返回6个input的字符串', function () {
            expect(utils.StringUtil.repeat('我是测试的字符串', 6)).to.be.equal('我是测试的字符串我是测试的字符串我是测试的字符串我是测试的字符串我是测试的字符串我是测试的字符串');
        });

        it('input为我是 测试 的 字符串 repeatTimes为3时,返回3个input的字符串', function () {
            expect(utils.StringUtil.repeat('我是 测试 的 字符串  ', 3)).to.be.equal('我是 测试 的 字符串  我是 测试 的 字符串  我是 测试 的 字符串  ');
        });
    });

    //去除字符串中的空格
    describe('测试 deleteWhitespace 方法', function () {
        it('input为  测试  时  ,返回为去除空格后的字符串', function () {
            expect(utils.StringUtil.deleteWhitespace('  测试  ')).to.be.equal('测试');
        });

        it('input为我是 测试 的 字符串  时,返回为去除空格后的字符串', function () {
            expect(utils.StringUtil.deleteWhitespace('我是 测试 的 字符串  ')).to.be.equal('我是测试的字符串');
        });
    });

    //将给定字符串进行右侧填充
    describe('测试 rightPad 方法', function () {
        it('input,size,padStr都为空时,返回空', function () {
            expect(utils.StringUtil.rightPad(2222, 1, 33)).to.be.equal('222233');
        });

        it('input为我是 测试 的 字符串 ,size为2,padStr为-- 时,返回为右侧填充后的字符串', function () {
            expect(utils.StringUtil.rightPad('我是测试的字符串', 2, '--')).to.be.equal('我是测试的字符串----');
        });
    });

    //将给定字符进行左侧填充
    describe('测试 leftPad 方法', function () {
        it('input,size,padStr都为空时,返回为空', function () {
            expect(utils.StringUtil.leftPad(2222, 2, 3)).to.be.equal('332222');
        });

        it('input为我是测试的字符串,size为2,padStr为--时,返回为左侧填充后的字符串', function () {
            expect(utils.StringUtil.leftPad('我是测试的字符串', 2, '--')).to.be.equal('----我是测试的字符串');
        });
    });

    //将字符串首字母转大写
    describe('测试 capitalize 方法', function () {
        it('input为admin时,返回为首字母转大写后的字符串', function () {
            expect(utils.StringUtil.capitalize('admin')).to.be.equal('Admin');
        });
    });

    //将字符串首字母转小写
    describe('测试 unCapitalize 方法', function () {
        it('input为Capitalize时,返回为capitalize', function () {
            expect(utils.StringUtil.unCapitalize('Capitalize')).to.be.equal('capitalize');
        });
    });

    //将字符串中的字母大写转小写，小写转大写
    describe('测试 swapCase 方法', function () {
        it('input为aBcd时,返回为AbCDE', function () {
            expect(utils.StringUtil.swapCase('aBcde')).to.be.equal('AbCDE');
        });

        it('input为ABCDe时,返回为abcdE', function () {
            expect(utils.StringUtil.swapCase('ABCDe')).to.be.equal('abcdE');
        });
    });

    //统计含有的子字符串的个数
    describe('测试 countMatches 方法', function () {
        it('input为空,sub为空时,返回字符串个数为0', function () {
            expect(utils.StringUtil.countMatches('dabddadb', 'da')).to.be.equal(3);
        });

        it('input为abcdeabcdeabcde时,返回为返回字符串个数为6', function () {
            expect(utils.StringUtil.countMatches('abcdeabcdeabcde', 'ab')).to.be.equal(6);
        });
    });

    // 判断字符串是否为字母
    describe('测试 isAlpha 方法', function () {
        it('input为我是测试的字符串时,返回为false', function () {
            expect(utils.StringUtil.isAlpha('我是测试的字符串')).to.be.equal(false);
        });

        it('input为abcdeabcdeabcde时,返回为true', function () {
            expect(utils.StringUtil.isAlpha('abcdeabcdeabcde')).to.be.equal(true);
        });
    });

    // 判断字符串是否为字母、空格
    describe('测试 isAlphaSpace 方法', function () {
        it('input为 测试 时,返回为false', function () {
            expect(utils.StringUtil.isAlphaSpace(' 测试 ')).to.be.equal(false);
        });

        it('input为abcd eabc deab cde时,返回为true', function () {
            expect(utils.StringUtil.isAlphaSpace('abcd eabc deab cde')).to.be.equal(true);
        });
    });

    // 判断字符串是否为字母、数字
    describe('测试 isAlphanumeric 方法', function () {
        it('input为abcd串abcd时,返回为false', function () {
            expect(utils.StringUtil.isAlphanumeric('abcd串abcd')).to.be.equal(false);
        });

        it('input为22abcdeabcdeabcde22时,返回为true', function () {
            expect(utils.StringUtil.isAlphanumeric('22abcdeabcdeabcde22')).to.be.equal(true);
        });
    });

    //  判断字符串是否为字母、数字、空格
    describe('测试 isAlphanumericSpace 方法', function () {
        it('input为我是测试的 222字符串时,返回为false', function () {
            expect(utils.StringUtil.isAlphanumericSpace('我是测试的 222字符串')).to.be.equal(false);
        });

        it('input为22abcdeabcdeabcde22时,返回为true', function () {
            expect(utils.StringUtil.isAlphanumericSpace('22abcde abcde abcde 22')).to.be.equal(true);
        });
    });

    // 判断字符串是否为数字
    describe('测试 isNumeric 方法', function () {
        it('input为我是测试的 字符串时,返回为false', function () {
            expect(utils.StringUtil.isNumeric('我是测试的 字符串')).to.be.equal(false);
        });

        it('input为220022时,返回为true', function () {
            expect(utils.StringUtil.isNumeric('220022')).to.be.equal(true);
        });
    });

    // 判断字符串是否为小数
    describe('测试 isDecimal 方法', function () {
        it('input为220022时,返回为false', function () {
            expect(utils.StringUtil.isDecimal('220022')).to.be.equal(false);
        });

        it('input为22.0022时,返回为true', function () {
            expect(utils.StringUtil.isDecimal('22.0022')).to.be.equal(true);
        });
    });

    // 判断字符串是否为负小数
    describe('测试 isNegativeDecimal 方法', function () {
        it('input为220022时,返回为false', function () {
            expect(utils.StringUtil.isNegativeDecimal('220022')).to.be.equal(false);
        });

        it('input为-22.0022时,返回为true', function () {
            expect(utils.StringUtil.isNegativeDecimal('-22.0022')).to.be.equal(true);
        });
    });

    // 判断字符串是否为正小数
    describe('测试 isPositiveDecimal 方法', function () {
        it('input为-22.0022时,返回为false', function () {
            expect(utils.StringUtil.isPositiveDecimal('-22.0022')).to.be.equal(false);
        });

        it('input为22.0022时,返回为true', function () {
            expect(utils.StringUtil.isPositiveDecimal('22.0022')).to.be.equal(true);
        });
    });

    // 判断字符串是否为整数
    describe('测试 isInteger 方法', function () {
        it('input为22.22时,返回为false', function () {
            expect(utils.StringUtil.isInteger('22.22')).to.be.equal(false);
        });

        it('input为-220022时,返回为true', function () {
            expect(utils.StringUtil.isInteger('-220022')).to.be.equal(true);
        });
    });

    // 判断字符串是否为正整数
    describe('测试 isPositiveInteger 方法', function () {
        it('input为-22.22时,返回为false', function () {
            expect(utils.StringUtil.isPositiveInteger('-22.22')).to.be.equal(false);
        });

        it('input为220022时,返回为true', function () {
            expect(utils.StringUtil.isPositiveInteger('220022')).to.be.equal(true);
        });
    });

    // 判断字符串是否为负整数
    describe('测试 isNegativeInteger 方法', function () {
        it('input为22.22时,返回为false', function () {
            expect(utils.StringUtil.isNegativeInteger('22.22')).to.be.equal(false);
        });

        it('input为-220022时,返回为true', function () {
            expect(utils.StringUtil.isNegativeInteger('-220022')).to.be.equal(true);
        });
    });

    // 判断字符串是否为数字、空格
    describe('测试 isNumericSpace 方法', function () {
        it('input为2222aa时,返回为false', function () {
            expect(utils.StringUtil.isNumericSpace('2222aa')).to.be.equal(false);
        });

        it('input为2 2 0 0 2 2时,返回为true', function () {
            expect(utils.StringUtil.isNumericSpace('2 2 0 0 2 2')).to.be.equal(true);
        });
    });

    // 判断字符串是否为空格
    describe('测试 isWhitespace 方法', function () {
        it('input为22.22时,返回为false', function () {
            expect(utils.StringUtil.isWhitespace('22.22')).to.be.equal(false);
        });

        it('input为空时,返回为true', function () {
            expect(utils.StringUtil.isWhitespace(' ')).to.be.equal(true);
        });
    });

    // 判断字符串是否为小写字母
    describe('测试 isAllLowerCase 方法', function () {
        it('input为isAllLowerCase时,返回为false', function () {
            expect(utils.StringUtil.isAllLowerCase('isAllLowerCase')).to.be.equal(false);
        });

        it('input为abcdefg时,返回为true', function () {
            expect(utils.StringUtil.isAllLowerCase('abcdefg')).to.be.equal(true);
        });
    });

    // 判断字符串是否为大写字母
    describe('测试 isAllUpperCase 方法', function () {
        it('input为isAllLowerCase时,返回为false', function () {
            expect(utils.StringUtil.isAllUpperCase('isAllLowerCase')).to.be.equal(false);
        });

        it('input为ABCDEFG时,返回为true', function () {
            expect(utils.StringUtil.isAllUpperCase('ABCDEFG')).to.be.equal(true);
        });
    });

    // 如果字符串为空则使用默认字符串, 否则不变
    describe('测试 defaultIfEmpty 方法', function () {
        it('input为空时, 返回默认字符串', function () {
            expect(utils.StringUtil.defaultIfEmpty('', 'abcd')).to.be.equal('abcd');
        });

        it('input不为空时,返回input本身', function () {
            expect(utils.StringUtil.defaultIfEmpty('我是测试的字符串isAllLowerCase', '我是测试的字符串')).to.be.equal('我是测试的字符串isAllLowerCase');
        });
    });

    //字符串反转
    describe('测试 reverse 方法', function () {
        it('input为ABCD时,返回为DCBA', function () {
            expect(utils.StringUtil.reverse('ABCD')).to.be.equal('DCBA');
        });
        it('input为abcd时,返回为dcba', function () {
            expect(utils.StringUtil.reverse('abcd')).to.be.equal('dcba');
        });
    });

    //删掉特殊字符(英文状态下)
    describe('测试 removeSpecialCharacter 方法', function () {
        it('input为removeSpecialCharacter##*时,返回为removeSpecialCharacter', function () {
            expect(utils.StringUtil.removeSpecialCharacter('removeSpecialCharacter##*')).to.be.equal('removeSpecialCharacter');
        });

        it('input为remove SpecialCharacter$%%^时,返回为删除特殊字符后的字符串', function () {
            expect(utils.StringUtil.removeSpecialCharacter('remove SpecialCharacter$%%^')).to.be.equal('remove SpecialCharacter');
        });
    });

    //只包含特殊字符、数字和字母（不包括空格，若想包括空格，改为[ -~]）
    describe('测试 isSpecialCharacterAlphanumeric 方法', function () {
        it('input为2222SpecialCharacter$%%^时,返回为true', function () {
            expect(utils.StringUtil.isSpecialCharacterAlphanumeric('2222SpecialCharacter$%%^')).to.be.equal(true);
        });

        it('input为字符串2222SpecialCharacter$%%^时,返回为false', function () {
            expect(utils.StringUtil.isSpecialCharacterAlphanumeric('(字符串2222SpecialCharacter$%%^)')).to.be.equal(false);
        });
    });

    //消息格式化
    describe('测试 format 方法', function () {
        it('input为空,arr为空时,返回为空', function () {
            expect(utils.StringUtil.format('format', 'for m at ')).to.be.equal('format');
        });

        it('input为for m at,arr为format时,返回为for m at', function () {
            expect(utils.StringUtil.format('for m at ', 'format')).to.be.equal('for m at ');
        });
    });

    //中文校验
    describe('测试 isChinese 方法', function () {
        it('input为我是测试的字  abc  符串时,返回为false', function () {
            expect(utils.StringUtil.isChinese('我是测试的字  abc  符串')).to.be.equal(false);
        });

        it('input为我是测试的字符串时,返回为true', function () {
            expect(utils.StringUtil.isChinese('我是测试的字符串')).to.be.equal(true);
        });
    });

    //去掉中文字符
    describe('测试 removeChinese 方法', function () {
        it('input为测试abcd时,返回为abcd', function () {
            expect(utils.StringUtil.removeChinese('测试abcd')).to.be.equal('abcd');
        });

        it('input为我是测试的字 abc 符串时,返回为 abc ', function () {
            expect(utils.StringUtil.removeChinese('我是测试的字  abc  符串')).to.be.equal('  abc  ');
        });
    });

    //转义元字符
    describe('测试 escapeMetacharacter 方法', function () {
        it('input为\'\'时,返回为\'\'', function () {
            expect(utils.StringUtil.escapeMetacharacter('\'\'')).to.be.equal('\'\'');
        });

        it('input为\n\\?时,返回为\n\\?', function () {
            expect(utils.StringUtil.escapeMetacharacter('\n\\?')).to.be.equal('\n\\?');
        });
    });

    //转义字符串中的元字符
    describe('测试 escapeMetacharacterOfStr 方法', function () {
        it('input为\'\'时,返回为\'\'', function () {
            expect(utils.StringUtil.escapeMetacharacterOfStr('\'\'')).to.be.equal('\'\'');
        });

        it('input为我是测试的字abc\n符串,返回为我是测试的字abc\n符串', function () {
            expect(utils.StringUtil.escapeMetacharacterOfStr('我是测试的字abc\n符串')).to.be.equal('我是测试的字abc\n符串');
        });
    });

    //将中划线分隔形式的字符串转换为驼峰式的字符串
    describe('测试 camelize 方法', function () {
        it('input为escape-metacharacter-of-str时,返回为escapeMetacharacterOfStr', function () {
            expect(utils.StringUtil.camelize('escape-metacharacter-of-str')).to.be.equal('escapeMetacharacterOfStr');
        });

        it('input为lastindexof,返回为驼峰式后的字符串', function () {
            expect(utils.StringUtil.camelize('last-index-of')).to.be.equal('lastIndexOf');
        });
    });

    //将驼峰式的字符串转换为中划线分隔形式的字符串
    describe('测试 hyphenate 方法', function () {
        it('input为escapeMetacharacterOfStr时,返回为escape-metacharacter-of-str', function () {
            expect(utils.StringUtil.hyphenate('escapeMetacharacterOfStr')).to.be.equal('escape-metacharacter-of-str');
        });

        it('input为lastindexof,返回为连字符后的字符串', function () {
            expect(utils.StringUtil.hyphenate('lastIndexOf')).to.be.equal('last-index-of');
        });
    });
});
