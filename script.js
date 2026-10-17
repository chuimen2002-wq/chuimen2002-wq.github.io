// 한국어/영어 전환 (모든 페이지에서 같이 사용합니다)
// data-ko, data-en 속성이 있는 글자를 선택한 언어로 바꿉니다.

function getLang() {
  try { return localStorage.getItem("lang") || "ko"; } catch (e) { return "ko"; }
}

function setLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-ko]").forEach(function (el) {
    el.textContent = el.getAttribute("data-" + lang);
  });
  var btn = document.getElementById("lang");
  if (btn) btn.textContent = lang === "ko" ? "EN" : "KO";
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

document.getElementById("lang").addEventListener("click", function () {
  setLang(document.documentElement.lang === "ko" ? "en" : "ko");
});

setLang(getLang());
