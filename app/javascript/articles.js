
// ①jQueryを用いた「マウスオーバーすると色が変わる機能」の実装
$(function () {
  $(document).on("mouseover", "h1", function () {
    $(this).css({ "color": "blue" });
  }).on("mouseout", "h1", function () {
    $(this).css({ "color": "" });
  })
});
// ①jQueryを用いた「マウスオーバーすると色が変わる機能」の実装、ここまで


// 上と同じ動作をJavaScriptで実装しようとすると
// window.onload = function () {
//   document.querySelector("h1").addEventListener("mouseover", function (event) {
//     this.style.color = "blue"
//   }, false);
//   document.querySelector("h1").addEventListener("mouseout", function (event) {
//     this.style.color = ""
//   }, false);
// };
// こんなに長くなる。
