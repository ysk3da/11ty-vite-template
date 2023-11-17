import imagemin from "imagemin-keep-folder";
import imageminPngquant from "imagemin-pngquant";
import imageminWebp from "imagemin-webp";
import imageminSvgo from "imagemin-svgo";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminGifsicle from "imagemin-gifsicle";

const srcDir = "./src/images/**/*.{jpg,jpeg,png,gif,svg}";
const outDir = "./dist/images/**/*";

const convertWebp = (targetFiles) => {
  imagemin([targetFiles], {
    use: [imageminWebp({ quality: 75 })],
  });
};

imagemin([srcDir], {
  plugins: [
    imageminMozjpeg(),
    imageminPngquant(),
    imageminGifsicle(),
    imageminSvgo(),
  ],
  replaceOutputDir: (output) => {
    return output.replace(/images\//, "../dist/images/");
  },
}).then(() => {
  convertWebp(outDir);
  console.log("Images optimized and WebP!");
});