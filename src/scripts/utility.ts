export const reloadOnResized = () => {
  // resize イベント
  let resizeTimer: number | undefined | NodeJS.Timeout = undefined;
  let prewidth = window.innerWidth;

  window.addEventListener("resize", function () {
    if (resizeTimer) {
      clearTimeout(resizeTimer);
    }
    resizeTimer = setTimeout(function () {
      let currentWidth = window.innerWidth;
      if (prewidth !== currentWidth) {
        // リロード
        location.reload();
      }
      prewidth = currentWidth;
    }, 200);
  });
};
