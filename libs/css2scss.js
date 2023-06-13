var fs = require('fs');

var cssString = fs.readFileSync('./libs/css/input.css', 'utf8');

const cssConverter = require('styleflux-web');

const scssString = cssConverter.cssToScss(cssString);

fs.writeFileSync('./libs/scss/output.scss', scssString);