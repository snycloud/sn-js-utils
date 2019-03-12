const path = require('path');

const cdkit = require('cdkit');

const fromName = 'sn-js-utils';
const toName = 'sn-js-utils';

function getFullPath(filename) {
    return path.join(__dirname, filename);
}

const map = [
    getFullPath('package.json'),
    getFullPath('README.en-US.md'),
    getFullPath('config/rollup.js'),
    getFullPath('test/browser/index.html'),
    getFullPath('demo/demo-global.html'),
];

const config = [
    {
        root: '.',
        rules: [
            {
                test: function (pathname) {
                    return map.some(function (u) {
                        return pathname.indexOf(u) > -1;
                    });
                },
                replace: [
                    {
                        from: fromName,
                        to: toName,
                    }
                ]
            }
        ]
    },
];

cdkit.run('replace', config);
