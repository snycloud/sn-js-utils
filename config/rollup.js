const typescript = require('rollup-plugin-typescript2');
const babel = require('rollup-plugin-babel');

const pkg = require('../package.json');

// compatible with sn-js-utils and @CozySnail/sn-js-utils
// @CozySnail/sn-js-utils -> sn-js-utils
const name = pkg.name.split('/').pop();
// @CozySnail/sn-js-utils -> CozySnail_sn-js-utils
// var name = pkg.name.replace('@', '').replace(/\//g, '_');
const version = pkg.version;

const banner =
    `/*!
 * ${pkg.name} ${version} (https://github.com/CozySnail/sn-js-utils)
 * API https://github.com/CozySnail/sn-js-utils/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} snail. All Rights Reserved
 * Licensed under MIT (https://github.com/CozySnail/sn-js-utils/blob/master/LICENSE)
 */
`;

const type = pkg.srctype === 'ts' ? 'ts' : 'js';

function getCompiler(opt) {
    if (type === 'js') {
        return babel({
            babelrc: false,
            presets: [
                [
                    '@babel/preset-env',
                    {
                        'targets': {
                          'browsers': 'last 2 versions, > 1%, ie >= 6, Android >= 4, iOS >= 6, and_uc > 9',
                          'node': '0.10'
                        },
                        'modules': false,
                        'loose': false
                    }
                ]
            ],
            plugins: [
                [
                    '@babel/plugin-transform-runtime',
                    {
                        'helpers': false,
                        'regenerator': false
                    }
                ]
            ],
            runtimeHelpers: true,
            exclude: 'node_modules/**'
        });
    }

    opt = opt || {
        tsconfigOverride: { compilerOptions : { module: 'ES2015' } }
    };

    return typescript(opt);
}

exports.type = type;
exports.name = name;
exports.banner = banner;
exports.getCompiler = getCompiler;
