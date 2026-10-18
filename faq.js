// FAQ 위젯: 질문을 입력하거나 추천 질문을 누르면, 미리 정리해 둔 답변과 해당 섹션으로 가는 링크를 보여줍니다.
// (AI가 즉석에서 답을 만드는 것이 아니라, 아래 FAQ 목록에서 가장 알맞은 항목을 찾아 줍니다.)
//
// 항목 추가/수정 방법: 아래 FAQ 배열에 항목을 하나 더 적으면 됩니다.
//   q: 질문(추천 질문 버튼에도 쓰임)  a: 답변  go: 이동할 주소  go_label: 링크 글자
//   k: 질문에서 찾을 단어들(한국어·영어·독일어를 함께 적어 두면 어느 언어로 물어도 찾습니다)
//   chip: true 이면 추천 질문 버튼으로 보입니다.

var FAQ = [
  {
    chip: true,
    q: { ko: "가장 최근에 재직한 회사는 어디인가요?", en: "Where did Joon Gul work most recently?", de: "Wo hat Joon Gul zuletzt gearbeitet?" },
    a: {
      ko: "Uber Eats Germany입니다 (2023.08 – 2026.04). 현장 영업에서 시작해 Account Executive를 거쳐, 전략 계정을 책임지는 Account Manager까지 맡았습니다.",
      en: "Uber Eats Germany (Aug 2023 – Apr 2026). I started in field sales, moved through Account Executive, and ended as an Account Manager responsible for strategic accounts.",
      de: "Uber Eats Germany (08/2023 – 04/2026). Ich begann im Außendienst, war Account Executive und zuletzt Account Manager für strategische Accounts."
    },
    go: "career.html#uber",
    go_label: { ko: "Uber Eats Germany 자세히 보기", en: "See the Uber Eats Germany story", de: "Uber Eats Germany im Detail" },
    k: ["최근", "가장최근", "마지막", "직전", "재직", "회사", "직장", "어디서일", "most recent", "recently", "latest", "last job", "current", "employer", "company", "uber", "zuletzt", "aktuell", "arbeitgeber", "unternehmen", "firma"]
  },
  {
    chip: true,
    q: { ko: "핵심 성과는 무엇인가요?", en: "What are your key results?", de: "Was sind Ihre wichtigsten Ergebnisse?" },
    a: {
      ko: "Uber에서 2026년 1분기 목표 달성률 120%(독일 Top 5 어카운트 매니저), 150개 이상 전략 계정에서 이탈률 1.7%(전국 평균 4.6%), 스폰서드 광고 채택률 30% → 57.4%를 만들었습니다. 2025년에는 Territory West ‘Team Member of the Year’에 선정되었습니다.",
      en: "At Uber: 120% of my Q1 2026 target (Top 5 Account Manager in Germany), 1.7% churn across 150+ strategic accounts (national average 4.6%), and Sponsored Ads adoption up from 30% to 57.4%. In 2025 I was named Territory West ‘Team Member of the Year’.",
      de: "Bei Uber: 120 % des Q1-2026-Ziels (Top 5 der Account Manager in Deutschland), 1,7 % Abwanderung bei über 150 strategischen Accounts (nationaler Durchschnitt 4,6 %) und eine Sponsored-Ads-Adoption von 30 % auf 57,4 %. 2025 wurde ich zum ‘Team Member of the Year’ in Territory West gewählt."
    },
    go: "career.html#key-results",
    go_label: { ko: "핵심 성과 보기", en: "See the key results", de: "Ergebnisse ansehen" },
    k: ["성과", "실적", "핵심성과", "달성", "수치", "이탈률", "수상", "상받", "results", "achievements", "numbers", "kpi", "churn", "performance", "award", "team member of the year", "ergebnisse", "erfolge", "kennzahlen", "leistung", "auszeichnung"]
  },
  {
    chip: true,
    q: { ko: "가장 큰 계약은 무엇이었나요?", en: "What was your biggest deal?", de: "Was war Ihr größter Abschluss?" },
    a: {
      ko: "BFY Services 시절 Brickny Group 15개 지점과 맺은 계약입니다. 회사 역사상 단일 최대 계약이었고, 기름 소비량·딜 임팩트·딜 사이클을 기준으로 타깃을 직접 골라 만든 딜입니다.",
      en: "The contract with 15 Brickny Group locations at BFY Services. It was the largest single contract in company history, and I chose the target myself by oil consumption, deal impact and deal cycle.",
      de: "Der Vertrag über 15 Standorte der Brickny Group bei BFY Services. Es war der größte Einzelvertrag der Firmengeschichte, und das Ziel habe ich selbst nach Ölverbrauch, Deal-Wirkung und Verkaufszyklus ausgewählt."
    },
    go: "achievements.html#case-3",
    go_label: { ko: "Case 03 보기", en: "Read Case 03", de: "Case 03 lesen" },
    k: ["최대계약", "큰계약", "가장큰", "대형계약", "계약", "딜", "brickny", "브릭니", "biggest deal", "largest", "big deal", "contract", "enterprise", "größter", "vertrag", "abschluss"]
  },
  {
    chip: true,
    q: { ko: "데이터 분석은 어느 정도 하나요?", en: "How strong are you with data?", de: "Wie stark sind Sie in der Datenanalyse?" },
    a: {
      ko: "SQL·BigQuery·Tableau로 계정 상태와 전환 퍼널을 분석하고, 그 데이터로 분기 리뷰(QBR)를 설계합니다. Google Data Analytics Professional Certificate도 수료했습니다.",
      en: "I analyze account health and conversion funnels with SQL, BigQuery and Tableau, and design quarterly business reviews from that data. I also completed the Google Data Analytics Professional Certificate.",
      de: "Ich analysiere Account-Zustand und Conversion-Funnel mit SQL, BigQuery und Tableau und gestalte daraus Quarterly Business Reviews. Außerdem habe ich das Google Data Analytics Professional Certificate abgeschlossen."
    },
    go: "about.html#competencies",
    go_label: { ko: "핵심 역량 보기", en: "See core competencies", de: "Kernkompetenzen ansehen" },
    k: ["데이터", "분석", "sql", "tableau", "bigquery", "qbr", "애널리틱스", "analytics", "data", "analysis", "datenanalyse", "daten", "google"]
  },
  {
    chip: true,
    q: { ko: "어떤 일을 하고 싶으세요?", en: "What kind of role are you looking for?", de: "Welche Art von Rolle suchen Sie?" },
    a: {
      ko: "Retention & Renewal 경험을 SaaS의 갱신·고객 성공 업무로 이어가고 싶고, 데이터와 AI로 일하는 방식을 제품 중심의 IT 비즈니스에서 더 키우고 싶습니다. 독일에서 쌓은 협업 경험은 한국의 글로벌 팀에서 펼치고 싶습니다.",
      en: "I want to carry my retention and renewal experience into SaaS renewals and customer success, and deepen my data- and AI-driven way of working in a product-led IT business. I'd like to apply my collaboration experience from Germany in a global team in Korea.",
      de: "Ich möchte meine Retention- und Renewal-Erfahrung in SaaS-Renewals und Customer Success einbringen und meine daten- und KI-gestützte Arbeitsweise in einem produktgetriebenen IT-Geschäft vertiefen. Meine Zusammenarbeitserfahrung aus Deutschland möchte ich in einem globalen Team in Korea einsetzen."
    },
    go: "career.html#next",
    go_label: { ko: "다음 단계 보기", en: "See what comes next", de: "Nächsten Schritt ansehen" },
    k: ["다음", "희망", "원하", "목표", "관심", "직무", "포지션", "지원", "saas", "next", "looking for", "want", "goal", "role", "position", "interested", "nächste", "ziel", "suche", "stelle", "möchte"]
  },
  {
    chip: true,
    q: { ko: "어떻게 연락하면 되나요?", en: "How can I contact you?", de: "Wie kann ich Sie erreichen?" },
    a: {
      ko: "이 페이지 아래의 연락처 카드에서 확인하실 수 있습니다.",
      en: "You can find my contact details in the card just below on this page.",
      de: "Meine Kontaktdaten finden Sie weiter unten auf dieser Seite."
    },
    go: "contact.html#contact-info",
    go_label: { ko: "연락처로 이동", en: "Go to contact details", de: "Zu den Kontaktdaten" },
    k: ["연락", "이메일", "메일", "전화", "링크드인", "linkedin", "contact", "email", "phone", "reach", "mail", "kontakt", "telefon", "erreichen"]
  },
  {
    q: { ko: "지금은 어디에 있고, 왜 한국으로 돌아왔나요?", en: "Where are you now, and why did you return to Korea?", de: "Wo sind Sie jetzt, und warum sind Sie nach Korea zurückgekehrt?" },
    a: {
      ko: "2026년 4월 Uber Eats Germany를 마무리하고 한국으로 돌아왔습니다. 쉽지 않은 결정이었지만, 태어나고 자란 곳에서 2막의 성장 스토리를 쓰고 싶다는 열정이 더 컸습니다.",
      en: "I wrapped up at Uber Eats Germany in April 2026 and returned to Korea. It was not an easy decision, but my wish to write the second act of my growth story where I was born and raised was stronger.",
      de: "Im April 2026 habe ich bei Uber Eats Germany abgeschlossen und bin nach Korea zurückgekehrt. Es war keine leichte Entscheidung, aber der Wunsch, das zweite Kapitel meiner Geschichte dort zu schreiben, wo ich geboren und aufgewachsen bin, war stärker."
    },
    go: "career.html#second-act",
    go_label: { ko: "한국 복귀 이야기", en: "The story of my return", de: "Die Geschichte meiner Rückkehr" },
    k: ["어디에", "거주", "위치", "한국", "복귀", "돌아", "귀국", "왜", "where are", "based", "live", "korea", "return", "moved", "why", "lebt", "zurück", "rückkehr", "warum"]
  },
  {
    q: { ko: "경력은 몇 년인가요?", en: "How many years of experience do you have?", de: "Wie viel Berufserfahrung haben Sie?" },
    a: {
      ko: "독일에서 12년을 일했습니다. 광고 인턴으로 시작해 모두 다섯 곳에서 경력을 쌓았고, 전략 계정을 책임지는 어카운트 매니저 경험까지 갖췄습니다.",
      en: "I worked in Germany for 12 years. I started as an advertising intern and built my career across five employers, up to Account Manager for strategic accounts.",
      de: "Ich habe 12 Jahre in Deutschland gearbeitet. Ich begann als Praktikant in der Werbung und habe bei fünf Arbeitgebern Erfahrung gesammelt, zuletzt als Account Manager für strategische Accounts."
    },
    go: "career.html#career-path",
    go_label: { ko: "경력 흐름 보기", en: "See my career path", de: "Werdegang ansehen" },
    k: ["경력", "몇년", "연차", "연수", "경험", "years", "experience", "how long", "erfahrung", "jahre", "berufserfahrung"]
  },
  {
    q: { ko: "독일어와 영어로 업무가 가능한가요?", en: "Can you work in German and English?", de: "Können Sie auf Deutsch und Englisch arbeiten?" },
    a: {
      ko: "독일에서 12년을 일했고, 파트너 미팅에서 독일어와 영어를 실시간으로 통역하며 막힌 문제를 그 자리에서 풀어낸 경험이 있습니다.",
      en: "I worked in Germany for 12 years, and I have interpreted between German and English in real time in a partner meeting to clear blockers on the spot.",
      de: "Ich habe 12 Jahre in Deutschland gearbeitet und in einem Partnergespräch in Echtzeit zwischen Deutsch und Englisch gedolmetscht, um Hürden vor Ort zu klären."
    },
    go: "achievements.html#case-1",
    go_label: { ko: "Case 01 보기", en: "Read Case 01", de: "Case 01 lesen" },
    k: ["언어", "독일어", "영어", "통역", "한국어", "language", "german", "english", "interpret", "sprache", "deutsch", "englisch", "dolmetsch"]
  },
  {
    q: { ko: "실패하거나 실수한 경험이 있나요?", en: "Have you ever made a big mistake?", de: "Haben Sie schon einmal einen großen Fehler gemacht?" },
    a: {
      ko: "프랜차이즈 파트너에게 공격적인 프로모션을 밀어붙였다가 매출이 피크 대비 약 70% 떨어진 적이 있습니다. 오판을 인정하고 점주와 P&L을 처음부터 다시 설계해 피크의 약 60~70%까지 회복시켰고, 그 마케팅 플랜은 이후 점주의 표준이 됐습니다.",
      en: "I once pushed aggressive promotions for a franchise partner, and sales fell about 70% from the peak. I owned the misjudgment, rebuilt the P&L with the owner from scratch, recovered to roughly 60–70% of the peak, and that marketing plan became the owner's standard.",
      de: "Ich habe einmal bei einem Franchise-Partner aggressive Aktionen vorangetrieben, und der Umsatz fiel um rund 70 % gegenüber der Spitze. Ich gestand mein Fehlurteil ein, baute mit dem Inhaber die GuV neu auf, erreichte wieder etwa 60–70 % der Spitze, und dieser Marketingplan wurde zu seinem Standard."
    },
    go: "achievements.html#case-2",
    go_label: { ko: "Case 02 보기", en: "Read Case 02", de: "Case 02 lesen" },
    k: ["실패", "실수", "오판", "약점", "배운", "failure", "mistake", "weakness", "learned", "lesson", "fehler", "scheitern", "schwäche"]
  },
  {
    q: { ko: "어떤 방식으로 일하시나요?", en: "How do you work?", de: "Wie arbeiten Sie?" },
    a: {
      ko: "제품이 아니라 솔루션을 파는 사람입니다. 고객의 문제에서 출발해 함께 설계하고, 데이터로 대화하고 결정하며, 팀과 팀 사이를 이어 일이 막히지 않게 합니다.",
      en: "I sell solutions, not products. I start from the customer's problem and design with them, talk and decide with data, and connect teams so work doesn't get stuck.",
      de: "Ich verkaufe Lösungen, keine Produkte. Ich gehe vom Problem des Kunden aus und gestalte gemeinsam mit ihm, spreche und entscheide mit Daten und verbinde Teams, damit die Arbeit nicht stockt."
    },
    go: "about.html#how-i-work",
    go_label: { ko: "일하는 방식 보기", en: "See how I work", de: "So arbeite ich" },
    k: ["방식", "스타일", "일하", "철학", "가치", "강점", "장점", "how you work", "work style", "approach", "strength", "philosophy", "arbeitsweise", "stärken", "ansatz"]
  },
  {
    q: { ko: "리더십이나 멘토링 경험이 있나요?", en: "Do you have leadership or mentoring experience?", de: "Haben Sie Führungs- oder Mentoring-Erfahrung?" },
    a: {
      ko: "Uber에서 신규 입사자의 멘토로 온보딩을 이끌었고, 리스크·컴플라이언스·운영·프로덕트가 모인 가상 팀을 이끌어 전략 고객 인증 절차를 재설계해 운영 마찰을 10% 줄였습니다.",
      en: "At Uber I mentored new hires through onboarding, and led a virtual team of Risk, Compliance, Operations and Product to redesign the strategic-customer verification process, cutting operational friction by 10%.",
      de: "Bei Uber habe ich neue Kolleginnen und Kollegen als Mentor durch das Onboarding begleitet und ein virtuelles Team aus Risk, Compliance, Operations und Product geleitet, um den Verifizierungsprozess für strategische Kunden neu zu gestalten und die operative Reibung um 10 % zu senken."
    },
    go: "career.html#uber",
    go_label: { ko: "Uber Eats Germany 보기", en: "See Uber Eats Germany", de: "Uber Eats Germany ansehen" },
    k: ["리더십", "리더", "멘토", "온보딩", "팀장", "leadership", "lead", "mentor", "onboarding", "führung", "mentoring"]
  },
  {
    q: { ko: "자동차 산업 경험이 있나요?", en: "Do you have automotive industry experience?", de: "Haben Sie Erfahrung in der Automobilindustrie?" },
    a: {
      ko: "Unitech Deutschland에서 자동차용 실러와 NVH 소재를 다루며 유럽 자동차 제조 시장의 전략 계정을 맡았고, 2021년 폭스바겐 그룹의 Tier-1 공급사 공식 지명을 이끌었습니다.",
      en: "At Unitech Deutschland, working with automotive sealers and NVH materials, I led enterprise account strategy in the European automotive market and drove the official Tier-1 supplier nomination at the Volkswagen Group in 2021.",
      de: "Bei Unitech Deutschland habe ich mit Dichtmassen und NVH-Materialien für die Automobilindustrie gearbeitet, strategische Accounts im europäischen Automobilmarkt betreut und 2021 die offizielle Tier-1-Nominierung bei der Volkswagen Gruppe vorangetrieben."
    },
    go: "career.html#career-unitech",
    go_label: { ko: "Unitech 보기", en: "See Unitech", de: "Unitech ansehen" },
    k: ["자동차", "폭스바겐", "유니텍", "제조", "tier", "volkswagen", "vw", "unitech", "automotive", "hyundai", "kia", "현대", "기아", "autoindustrie", "automobil"]
  },
  {
    q: { ko: "커리어는 어떻게 시작했나요?", en: "How did your career start?", de: "Wie hat Ihre Karriere begonnen?" },
    a: {
      ko: "2012년 Serviceplan Group Seoul에서 광고 인턴으로 BMW Korea의 온라인 마케팅을 지원하며 시작했고, 2014년 KITECH Aachen에서 독일 첫 직장을 가졌습니다.",
      en: "I began in 2012 as an advertising intern at Serviceplan Group Seoul, supporting BMW Korea's online marketing, and started my first job in Germany at KITECH Aachen in 2014.",
      de: "Ich habe 2012 als Praktikant bei Serviceplan Group Seoul begonnen und das Online-Marketing von BMW Korea unterstützt; 2014 folgte meine erste Stelle in Deutschland bei KITECH Aachen."
    },
    go: "career.html#career-serviceplan",
    go_label: { ko: "커리어의 시작 보기", en: "See where it started", de: "Den Anfang ansehen" },
    k: ["시작", "처음", "첫", "인턴", "초기", "광고", "start", "began", "first job", "intern", "beginning", "anfang", "erste", "praktikum", "serviceplan", "kitech"]
  },
  {
    q: { ko: "자기소개를 한 줄로 해 주세요.", en: "Introduce yourself in one line.", de: "Stellen Sie sich in einem Satz vor." },
    a: {
      ko: "독일 12년, 데이터로 판단하고 신뢰로 고객과 함께 성장하는 B2B 어카운트 매니저입니다. 숫자로 방향을 잡고, 사람의 입장에서 끝까지 풀어냅니다.",
      en: "A B2B account manager with 12 years in Germany who decides with data and grows with customers through trust. I set direction with numbers and see it through from the other person's side.",
      de: "Ein B2B-Account-Manager mit 12 Jahren Deutschland, der mit Daten entscheidet und durch Vertrauen gemeinsam mit Kunden wächst. Ich bestimme die Richtung mit Zahlen und führe es aus Sicht des Gegenübers zu Ende."
    },
    go: "achievements.html#summary",
    go_label: { ko: "Summary 보기", en: "Read the summary", de: "Zusammenfassung lesen" },
    k: ["소개", "누구", "한줄", "자기소개", "who are you", "introduce", "yourself", "about you", "summary", "wer sind", "vorstellen", "über sie"]
  }
];

var FAQ_TEXT = {
  fab: { ko: "FAQ", en: "FAQ", de: "FAQ" },
  fabAria: { ko: "FAQ 열기", en: "Open FAQ", de: "FAQ öffnen" },
  title: { ko: "무엇이든 물어보세요", en: "Ask me anything", de: "Fragen Sie mich" },
  close: { ko: "닫기", en: "Close", de: "Schließen" },
  hello: {
    ko: "안녕하세요! 궁금한 점을 입력하거나 아래 질문을 눌러 보세요. 답변과 함께 해당 섹션으로 가는 링크를 드립니다.",
    en: "Hello! Type a question or tap one below. I'll answer and give you a link to the matching section.",
    de: "Hallo! Geben Sie eine Frage ein oder tippen Sie unten auf eine. Ich antworte und verlinke den passenden Abschnitt."
  },
  placeholder: { ko: "예: 가장 최근 재직한 회사는?", en: "e.g. Where did you work most recently?", de: "z. B. Wo haben Sie zuletzt gearbeitet?" },
  send: { ko: "보내기", en: "Send", de: "Senden" },
  notFound: {
    ko: "질문과 정확히 맞는 항목을 찾지 못했어요. 아래 질문 중에서 골라 보시거나, 다른 단어로 다시 물어봐 주세요.",
    en: "I couldn't find an exact match. Pick one of the questions below, or try different words.",
    de: "Ich habe keine genaue Übereinstimmung gefunden. Wählen Sie unten eine Frage oder versuchen Sie andere Wörter."
  },
  note: {
    ko: "미리 정리해 둔 질문과 답변에서 찾아 드립니다.",
    en: "Answers come from a pre-written FAQ.",
    de: "Die Antworten stammen aus einer vorbereiteten FAQ."
  }
};

// 질문 문장에서 가장 잘 맞는 FAQ 항목을 찾습니다. 맞는 것이 없으면 null.
function faqFind(query) {
  var norm = function (s) { return String(s).toLowerCase().replace(/[\s.,!?()'"“”‘’·:;\-_/]+/g, ""); };
  var q = norm(query);
  if (!q) return null;
  var best = null, bestScore = 0;
  FAQ.forEach(function (item) {
    var score = 0;
    // 추천 질문을 그대로 눌렀거나 입력한 경우
    Object.keys(item.q).forEach(function (l) { if (norm(item.q[l]) === q) score += 1000; });
    item.k.forEach(function (kw) {
      var n = norm(kw);
      if (n.length >= 2 && q.indexOf(n) >= 0) score += n.length;
    });
    if (score > bestScore) { bestScore = score; best = item; }
  });
  return bestScore >= 2 ? best : null;
}

(function () {
  if (typeof document === "undefined") {
    if (typeof module !== "undefined") module.exports = { faqFind: faqFind, FAQ: FAQ };
    return;
  }

  function lang() { return typeof getLang === "function" ? getLang() : "ko"; }
  function tx(obj) { var l = lang(); return obj[l] || obj.en || obj.ko; }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  var fab = el("button", "faq-fab");
  fab.type = "button";
  fab.setAttribute("aria-expanded", "false");
  fab.setAttribute("aria-controls", "faq-panel");
  var fabIcon = el("span", "faq-fab-ico", "?");
  fabIcon.setAttribute("aria-hidden", "true");
  var fabText = el("span", "faq-fab-txt");
  fab.appendChild(fabIcon); fab.appendChild(fabText);

  var panel = el("section", "faq-panel");
  panel.id = "faq-panel";
  panel.hidden = true;
  panel.setAttribute("aria-label", "FAQ");

  var head = el("div", "faq-head");
  var title = el("strong", "faq-title");
  var closeBtn = el("button", "faq-close", "✕");
  closeBtn.type = "button";
  head.appendChild(title); head.appendChild(closeBtn);

  var log = el("div", "faq-log");
  log.setAttribute("role", "log");
  log.setAttribute("aria-live", "polite");

  var chips = el("div", "faq-chips");

  var form = el("form", "faq-form");
  var input = el("input", "faq-input");
  input.type = "text"; input.autocomplete = "off"; input.maxLength = 120;
  var send = el("button", "faq-send");
  send.type = "submit";
  form.appendChild(input); form.appendChild(send);

  var note = el("p", "faq-note");

  panel.appendChild(head); panel.appendChild(log); panel.appendChild(chips); panel.appendChild(form); panel.appendChild(note);
  document.body.appendChild(fab);
  document.body.appendChild(panel);

  function renderLabels() {
    fabText.textContent = tx(FAQ_TEXT.fab);
    fab.setAttribute("aria-label", tx(FAQ_TEXT.fabAria));
    title.textContent = tx(FAQ_TEXT.title);
    closeBtn.setAttribute("aria-label", tx(FAQ_TEXT.close));
    input.placeholder = tx(FAQ_TEXT.placeholder);
    input.setAttribute("aria-label", tx(FAQ_TEXT.placeholder));
    send.textContent = tx(FAQ_TEXT.send);
    note.textContent = tx(FAQ_TEXT.note);
  }

  function renderChips() {
    chips.textContent = "";
    FAQ.forEach(function (item) {
      if (!item.chip) return;
      var b = el("button", "faq-chip", tx(item.q));
      b.type = "button";
      b.addEventListener("click", function () { ask(tx(item.q)); });
      chips.appendChild(b);
    });
  }

  function addBubble(kind, text) {
    var b = el("div", "faq-b " + kind);
    b.appendChild(el("p", "", text));
    log.appendChild(b);
    return b;
  }

  function scrollLog() { log.scrollTop = log.scrollHeight; }

  function ask(text) {
    text = (text || "").trim();
    if (!text) return;
    addBubble("me", text);
    var hit = faqFind(text);
    if (hit) {
      var b = addBubble("bot", tx(hit.a));
      var a = el("a", "faq-go", tx(hit.go_label) + " →");
      a.href = hit.go;
      // 같은 페이지 안에서 이동할 때 위젯이 내용을 가리지 않도록 닫습니다.
      a.addEventListener("click", function () { setOpen(false); });
      b.appendChild(a);
    } else {
      addBubble("bot", tx(FAQ_TEXT.notFound));
    }
    input.value = "";
    scrollLog();
  }

  function setOpen(open) {
    panel.hidden = !open;
    fab.setAttribute("aria-expanded", open ? "true" : "false");
    fab.classList.toggle("on", open);
    if (open) {
      if (!log.childNodes.length) addBubble("bot", tx(FAQ_TEXT.hello));
      input.focus();
    }
  }

  fab.addEventListener("click", function () { setOpen(panel.hidden); });
  closeBtn.addEventListener("click", function () { setOpen(false); fab.focus(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !panel.hidden) { setOpen(false); fab.focus(); }
  });
  form.addEventListener("submit", function (e) { e.preventDefault(); ask(input.value); });

  // 언어 깃발을 누르면 위젯의 글자도 같이 바뀝니다.
  document.querySelectorAll(".flag").forEach(function (f) {
    f.addEventListener("click", function () { renderLabels(); renderChips(); });
  });

  renderLabels();
  renderChips();
})();
