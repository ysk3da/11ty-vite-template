const { createReadStream, createWriteStream, readFileSync } = require('fs');
const { Transform } = require('json2csv');

// ファイル名の設定
const targetFile = 'sample';

// 各項目は手動で設定する必要があります。-> 自動化（※深度1だけなので注意）
// let fields = ['連番', '氏名', '氏名（カタカナ）', '性別', '電話番号', '生年月日'];
let fields = [];

// 入力パスが未定義なので定義します。
const inputPath = `libs/json/${targetFile}.json`;
// jsonファイルのテキストを取得
const jsonText = readFileSync(inputPath, 'utf-8');
// keyの取得
const jsonParsed = JSON.parse(jsonText);
// const keyList = Object.keys(jsonParsed); // -> key=0 | value=[object Object] こうなる。keyは数字がインクリメントする

// for (let key in keyList) {
//   // 取得したkeyとvalueの確認
//   console.log(`key=${keyList[key]} | value=${jsonParsed[keyList[key]]} `);
// }

// 0番目（最初の1個)のkeyを取得する
fields = Object.keys(jsonParsed[0]);
// console.log(`chideKeyList=${Object.keys(jsonParsed[0])} `);

// 出力パスが未定義なので定義します。
const outputPath = `libs/csv/${targetFile}.csv`;

// Windowsで文字化けしないようにオプションを追加します。
const opts = { fields, withBOM: true };
const transformOpts = { highWaterMark: 16384, encoding: 'utf-8' };

const input = createReadStream(inputPath, { encoding: 'utf8' });
const output = createWriteStream(outputPath, { encoding: 'utf8' });
const json2csv = new Transform(opts, transformOpts);

const processor = input.pipe(json2csv).pipe(output);
// 処理を実行
processor;

// You can also listen for events on the conversion and see how the header or the lines are coming out.
json2csv
  .on('header', header => console.log(header))
  .on('line', line => console.log(line))
  .on('error', err => console.log(err));