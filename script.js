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

// 뒤집히는 카드: 클릭(또는 Enter/Space)하면 앞뒤가 바뀝니다.
document.querySelectorAll(".flip").forEach(function (card) {
  card.addEventListener("click", function () {
    var on = card.getAttribute("aria-pressed") === "true";
    card.setAttribute("aria-pressed", on ? "false" : "true");
  });
});

// JGH 드롭다운 메뉴: 클릭하면 열리고, 바깥을 클릭하거나 Esc를 누르면 닫힙니다.
(function () {
  var btn = document.getElementById("menu-btn");
  var list = document.getElementById("menu-list");
  if (!btn || !list) return;

  function setOpen(open) {
    list.hidden = !open;
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  }

  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    setOpen(list.hidden);
  });
  document.addEventListener("click", function (e) {
    if (!list.contains(e.target)) setOpen(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { setOpen(false); btn.focus(); }
  });
})();
