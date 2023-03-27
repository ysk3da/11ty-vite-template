const path = require("path");
// for Sass
const eleventySass = require("eleventy-sass");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");

module.exports = function (eleventyConfig) {
  // PassthroughCopy
  // Copy `src/favicon.ico` to `dist/favicon.ico`
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  // Copy `src/images` to `dist/images`
  eleventyConfig.addPassthroughCopy("src/images");

  // Sass Settings
  eleventyConfig.addPlugin(eleventySass, [
    {
      postcss: postcss([autoprefixer]),
    },
    // {
    //   // revision は ejs だと render時にcofig情報をコンパイルしないので諦め
    //   rev: false,
    // },
    {
      compileOptions: {
        permalink: function(contents, inputPath) {
          let parsed = path.parse(inputPath);
          // console.log({parsed});
          if(parsed.name.startsWith("_")) {
            return false;
          }
          return (data) => {
            // console.log({data});
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

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
