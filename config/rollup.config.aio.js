// rollup.config.js
// umd
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const uglify = require('rollup-plugin-uglify');

const common = require('./rollup.js');

const prod = process.env.NODE_ENV === 'production';

module.exports = {
    input: 'src/index.' + common.type,
    output: {
        file: prod ? 'dist/index.aio.min.js' : 'dist/index.aio.js',
        format: 'umd',
        // When export and export default are not used at the same time, set legacy to true.
        // legacy: true,
        name: common.name,
        // name: 'snUtils',
        banner: common.banner,
    },
    plugins: [
        nodeResolve({
            main: true,
            extensions: [common.type === 'ts' ? '.ts' : '', '.js']
        }),
        commonjs({
            include: 'node_modules/**',
        }),
        common.getCompiler(),
        (prod && uglify())
    ]
};
