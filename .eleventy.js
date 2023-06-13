const path = require("path");
// for Sass
const eleventySass = require("eleventy-sass");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const mqpacker = require("mqpacker");
const cssnano = require("cssnano");


module.exports = function (eleventyConfig) {

  // PassthroughCopy
  
  // Copy `src/favicon.ico` to `dist/favicon.ico`
  // eleventyConfig.addPassthroughCopy("src/favicon.ico");
  
  // Copy `src/images` to `dist/images`
  eleventyConfig.addPassthroughCopy("src/images");
  
  // Copy `src/images-public` to `dist/images`
  // 下記のように、名前指定でもパススルーコピー可能
  // eleventyConfig.addPassthroughCopy({"src/images-public":"images"});

  // Sass Settings
  eleventyConfig.addPlugin(eleventySass, [
    {
      postcss: postcss([
        autoprefixer,
        mqpacker({
          sort: true // trueでモバイルファースト、falseでデスクトップファースト
        }),
        cssnano //圧縮時に半角スペースを潰してくれる
      ]),
    },
    {
      compileOptions: {
        permalink: function(contents, inputPath) {
          let parsed = path.parse(inputPath);
          if(parsed.name.startsWith("_")) {
            return false;
          }
          return (data) => {
            // return data.page.filePathStem.replace(/^\/styles\//, "/css/") + ".css";
            return data.page.filePathStem.replace(/^\/styles\//, "/") + ".css";
          };
        }
      },
      sass: {
        style: "compressed",
        sourceMap: true
      },
    },
  ]);

  // BrowserSync -> @11ty/eleventy-server-browsersync
  eleventyConfig.setServerOptions({
    module: "@11ty/eleventy-server-browsersync",

    // Default Browsersync options shown:
    port: 8080,
    open: true,
    notify: false,
    ui: false,
    ghostMode: false,

    // Opt-out of the Browsersync snippet
    // snippet: false,
    // 下層ディレクトリから始めたい時
    // server: {
    //   baseDir: "dist", // ルートとなるディレクトリを指定
    //   routes: { "/subdirectory": "./" } // ルーティング
    // },
    // startPath: "/subdirectory", // 開始パスを指定
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
