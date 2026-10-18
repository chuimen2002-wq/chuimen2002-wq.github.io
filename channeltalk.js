/* 채널톡(Channel Talk) 위젯: 공식 설치 코드를 파일로 분리한 것입니다.
   pluginKey는 방문자에게 공개되는 값이며 비밀번호가 아닙니다. */
(function () {
  var w = window;
  if (w.ChannelIO) { return; }
  var ch = function () { ch.c(arguments); };
  ch.q = [];
  ch.c = function (args) { ch.q.push(args); };
  w.ChannelIO = ch;
  function load() {
    if (w.ChannelIOInitialized) { return; }
    w.ChannelIOInitialized = true;
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
    var x = document.getElementsByTagName("script")[0];
    if (x && x.parentNode) { x.parentNode.insertBefore(s, x); }
  }
  if (document.readyState === "complete") { load(); }
  else { w.addEventListener("DOMContentLoaded", load); w.addEventListener("load", load); }

  function lang() {
    try { return localStorage.getItem("lang") === "ko" || !localStorage.getItem("lang") ? "ko" : "en"; }
    catch (e) { return "ko"; }
  }
  // FAQ 버튼(오른쪽 아래)과 겹치지 않도록 채널톡 버튼을 그 위로 올립니다.
  w.ChannelIO("boot", {
    pluginKey: "3e091630-88bf-44d9-b22a-a745f59ffdbd",
    language: lang(),
    channelButtonOption: { position: "right", xMargin: 24, yMargin: 90 }
  });
  document.addEventListener("click", function (e) {
    var f = e.target.closest && e.target.closest(".flag[data-lang]");
    if (!f) { return; }
    var l = f.getAttribute("data-lang") === "ko" ? "ko" : "en";
    try { w.ChannelIO("updateUser", { language: l }); } catch (err) {}
  });
})();
