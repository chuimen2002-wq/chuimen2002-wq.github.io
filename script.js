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

// 타임라인 팝업: 도트(또는 그 줄)를 클릭하면 사진과 설명이 열립니다.
(function () {
  var dialog = document.getElementById("jdialog");
  if (!dialog || typeof dialog.showModal !== "function") return;
  var photo = document.getElementById("jd-photo");
  var img = document.getElementById("jd-img");
  var body = document.getElementById("jd-body");
  var opener = null;

  // 사진 파일이 없으면 색 배경으로 대신 보여줍니다.
  img.addEventListener("error", function () { photo.classList.add("noimg"); });
  img.addEventListener("load", function () { photo.classList.remove("noimg"); });

  document.querySelectorAll(".jitem").forEach(function (item) {
    item.querySelector(".jbtn").addEventListener("click", function (e) {
      opener = e.currentTarget;
      body.innerHTML = item.querySelector(".jdetail").innerHTML;
      var title = body.querySelector(".d-title");
      dialog.setAttribute("aria-label", title ? title.textContent : "");
      img.style.objectPosition = item.getAttribute("data-pos") || "50% 50%";
      photo.classList.remove("noimg");
      img.src = item.getAttribute("data-img");
      dialog.showModal();
      dialog.scrollTop = 0;
    });
  });

  document.getElementById("jclose").addEventListener("click", function () { dialog.close(); });
  // 팝업 바깥(어두운 배경)을 클릭하면 닫힙니다.
  dialog.addEventListener("click", function (e) { if (e.target === dialog) dialog.close(); });
  dialog.addEventListener("close", function () { if (opener) opener.focus(); });
})();

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
