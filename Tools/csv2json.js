var csv2json = require('csv2json');
var fs = require('fs');

// ファイル名の設定
const targetFile = 'sample';

fs.createReadStream(`libs/csv/${targetFile}.csv`)
  .pipe(csv2json({
    // Defaults to comma.
    separator: ','
  }))
  .pipe(fs.createWriteStream(`libs/json/${targetFile}.json`));