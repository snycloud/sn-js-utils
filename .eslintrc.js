module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "no-console": 0,
        "no-class-assign": 2,               // 禁止给类赋值
        "no-cond-assign": 2,                // 禁止在条件表达式中使用赋值语句
        "no-dupe-keys": 2,                  // 在创建对象字面量时不允许键重复 {a:1,a:1}
        "no-dupe-args": 2,                  // 函数参数不能重复
        "no-duplicate-case": 2,             // switch中的case标签不能重复
        "no-else-return": 2,                // 如果if语句里面有return,后面不能跟else语句
        "no-empty": 2,                      // 块语句中的内容不能为空
        "no-empty-character-class": 2,      // 正则表达式中的[]内容不能为空
        "no-eq-null": 2,                    // 禁止对null使用==或!=运算符
        "no-ex-assign": 2,                  // 禁止给catch语句中的异常参数赋值
        "no-extend-native": 2,              // 禁止扩展native对象
        "no-extra-bind": 2,                 // 禁止不必要的函数绑定
        "no-extra-parens": 0,               // 可以存在非必要的括号
        "no-extra-semi": 2,                 // 禁止多余的冒号
        "no-fallthrough": 1,                // 禁止switch穿透
        "no-floating-decimal": 2,           // 禁止省略浮点数中的0 .5 3.
        "no-func-assign": 2,                // 禁止重复的函数声明
        "no-invalid-regexp": 2,             // 禁止无效的正则表达式
        "no-irregular-whitespace": 2,       // 不能有不规则的空格
        "no-label-var": 2,                  // label名不能与var声明的变量名相同
        "no-labels": 2,                     // 禁止标签声明
        "no-lone-blocks": 2,                // 禁止不必要的嵌套块
        "no-multi-spaces": 1,               // 不能用多余的空格
        "no-multiple-empty-lines": [1, {"max": 2}], // 空行最多不能超过2行
        "no-native-reassign": 2,            // 不能重写native对象
        "no-negated-in-lhs": 2,             // in 操作符的左边不能有!
        "no-new": 1,                        // 禁止在使用new构造一个实例后不赋值
        "no-path-concat": 0,                // node中不能使用__dirname或__filename做路径拼接
        "no-redeclare": 2,                  // 禁止重复声明变量
        "no-sequences": 0,                  // 禁止使用逗号运算符
        "no-shadow": 2,                     // 外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
        "no-shadow-restricted-names": 2,    // 严格模式中规定的限制标识符不能作为声明时的变量名使用
        "no-spaced-func": 2,                // 函数调用时 函数名与()之间不能有空格
        "no-trailing-spaces": 1,            // 一行结束后面不要有空格
        "no-this-before-super": 0,          // 在调用super()之前不能使用this或super
        "no-undef": 1,                      // 不能有未定义的变量
        "no-undef-init": 2,                 // 变量初始化时不能直接给它赋值为undefined
        "no-undefined": 0,                  // 可以使用undefined
        "no-unexpected-multiline": 2,       // 避免多行表达式
        "no-underscore-dangle": 0,          // 标识符可以以_开头或结尾
        "no-unneeded-ternary": 2,           // 禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
        "no-unreachable": 2,                // 不能有无法执行的代码
        "no-unused-expressions": 2,         // 禁止无用的表达式
        "no-use-before-define": 2,          // 未定义前不能使用
        "no-useless-call": 2,               // 禁止不必要的call和apply
        "no-void": 2,                       // 禁用void操作符
        "no-var": 0,                        // 禁用var，用let和const代替
        "no-warning-comments": [1, { "terms": ["todo", "fixme", "xxx"], "location": "start" }], // 不能有警告备注
        "array-bracket-spacing": [2, "never"],  // 是否允许非空数组里面有多余的空格
        "arrow-parens": 0,                  // 箭头函数用小括号括起来
        "arrow-spacing": 0,                 // =>的前/后括号
        "accessor-pairs": 0,                // 在对象中使用getter/setter
        "block-scoped-var": 0,              // 块语句中使用var
        "brace-style": [1, "1tbs"],         // 大括号风格
        "camelcase": 0,                     // 不强制驼峰法命名
        "comma-spacing": 0,                 // 逗号前后的空格
        "comma-style": [2, "last"],         // 逗号风格，换行时在行首还是行尾
        "computed-property-spacing": [0, "never"],  // 是否允许计算后的键名什么的
        "curly": [2, "all"],                // 必须使用 if(){} 中的{}
        "default-case": 2,                  // switch语句最后必须有default
        "dot-location": 0,                  // 对象访问符的位置，换行的时候在行首还是行尾
        "dot-notation": [0, { "allowKeywords": true }], // 避免不必要的方括号
        "eol-last": 0,                      // 文件以单一的换行符结束
        "eqeqeq": 2,                        // 必须使用全等
        "func-names": 0,                    // 函数表达式必须有名字
        "func-style": [0, "declaration"],   // 函数风格，规定只能使用函数声明/函数表达式
        "generator-star-spacing": 0,        // 生成器函数*的前后空格
        "handle-callback-err": 0,           // nodejs 处理错误
        "key-spacing": [0, { "beforeColon": false, "afterColon": true }], // 对象字面量中冒号的前后空格
        "object-curly-spacing": [0, "never"], // 大括号内是否允许不必要的空格
        "object-shorthand": 0,              // 强制对象字面量缩写语法
        "one-var": 0,                       // 连续声明
        "quotes": 0,                        // 限制单双引号
        //"semi": 0,                          // 每一个表达式的结尾就应该以分号结尾，否则 eslint 会给出错误提示
        "semi": [2, "always"],           // 每一个表达式的结尾就应该以分号结尾，否则 eslint 会给出错误提示
        "semi-spacing": [0, {"before": false, "after": true}],  // 分号前后空格
        "space-after-keywords": [0, "always"],  // 关键字后面是否要空一格
        "space-before-blocks": [0, "always"], // 不以新行开始的块{前面要不要有空格
        "space-before-function-paren": [0, "always"], // 函数定义时括号前面要不要有空格
        "space-in-parens": [0, "never"],    // 小括号里面要不要有空格
        "space-infix-ops": 0,               // 中缀操作符周围要不要有空格
        "space-unary-ops": [0, { "words": true, "nonwords": false }] // 一元运算符的前/后要不要加空格
    }
};
