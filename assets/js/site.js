/* Phần dùng chung cho mọi trang: menu, chân trang, các khối lấy từ data.js */
(function () {
  var S = window.SITE;
  var PAGES = [
    ['beach.html', 'Chương trình BEACH'],
    ['thay-thien.html', 'Thầy Thiện'],
    ['vi-sao-chon.html', 'Vì sao chọn'],
    ['giang-vien.html', 'Giảng viên'],
    ['thanh-tich.html', 'Thành tích'],
    ['lien-he.html', 'Liên hệ']
  ];
  var here = location.pathname.split('/').pop() || 'index.html';
  var CHECK = '<svg class="ico" aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
  var ICONS = {
    facebook: '<path d="M15 3h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h2z"/>',
    tiktok: '<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 3c.5 2.6 2.4 4.5 5 5"/>',
    zalo: '<path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v8a2.5 2.5 0 0 1-2.5 2.5H11l-4 3v-3h-.5A2.5 2.5 0 0 1 4 14.5z"/><path d="M8 9h4l-4 4h4M14.5 9v4"/>',
    youtube: '<rect x="3" y="6" width="18" height="12" rx="4"/><path d="M10.5 9.5v5l4-2.5z"/>',
    threads: '<path d="M16.5 11.2c-.4-2.3-2-3.6-4.3-3.6-2.6 0-4.2 1.8-4.2 4.4s1.6 4.4 4.3 4.4c2.2 0 3.6-1.2 3.6-2.9 0-1.6-1.3-2.6-3.3-2.6-1.6 0-2.7.8-2.7 2 0 1 .8 1.7 2 1.7"/><path d="M19.5 12c0 5-3 8.5-7.5 8.5S4.5 17 4.5 12 7.5 3.5 12 3.5c3.6 0 6.1 2 7 5"/>'
  };
  var SOCIALS = [['zalo', 'Zalo', S.zalo], ['facebook', 'Facebook', S.facebook], ['tiktok', 'TikTok', S.tiktok], ['youtube', 'YouTube', S.youtube], ['threads', 'Threads', S.threads]];
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function tel(n) { return 'tel:' + n.replace(/\s/g, ''); }
  function svg(k) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + ICONS[k] + '</svg>'; }
  function socialRow(cls) {
    return '<div class="' + cls + '">' + SOCIALS.map(function (s) {
      return '<a href="' + s[2] + '" target="_blank" rel="noopener" aria-label="' + s[1] + ' ' + S.name + '">' + svg(s[0]) + '<span>' + s[1] + '</span></a>';
    }).join('') + '</div>';
  }

  /* ---------- Header ---------- */
  var h = document.getElementById('site-header');
  if (h) {
    var links = PAGES.map(function (p) {
      var on = p[0] === here;
      return '<a href="' + p[0] + '"' + (on ? ' class="active" aria-current="page"' : '') + '>' + p[1] + '</a>';
    }).join('');
    h.outerHTML =
      '<header class="site-header"><div class="container header-row">' +
      '<a class="brand" href="index.html" aria-label="Trang chủ ' + S.name + '"><img src="assets/img/logo.png" alt="' + S.name + '"></a>' +
      '<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav" aria-label="Mở menu">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>' +
      '<nav id="main-nav" class="main-nav" aria-label="Điều hướng chính">' + links +
      '<a class="btn btn-mint nav-cta" href="' + S.formTest + '" target="_blank">Kiểm tra trình độ miễn phí</a></nav>' +
      '</div></header>';
    var t = document.querySelector('.menu-toggle'), nav = document.getElementById('main-nav');
    t.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      t.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---------- Footer ---------- */
  var f = document.getElementById('site-footer');
  if (f) {
    f.outerHTML =
      '<footer class="site-footer"><div class="container footer-grid">' +
      '<div><img class="footer-logo" src="assets/img/logo-light.png" alt="' + S.name + '"><p class="muted">' + S.slogan + '.</p></div>' +
      '<address><strong>Thông tin trung tâm</strong>' +
      '<span><b>Hotline:</b> ' + S.hotlines.map(function (n) { return '<a href="' + tel(n) + '">' + n + '</a>'; }).join(' - ') + '</span>' +
      '<span><b>Địa chỉ:</b> <a href="' + S.mapUrl + '" target="_blank" rel="noopener">' + S.address + '</a></span>' +
      '<span><b>Email:</b> <a href="mailto:' + S.email + '">' + S.email + '</a></span>' +
      socialRow('socials') + '</address>' +
      '<div class="footer-links"><strong>Bắt đầu ngay</strong>' +
      '<a href="' + S.formTest + '" target="_blank">Kiểm tra trình độ miễn phí →</a>' +
      '<a href="' + S.formTuVan + '" target="_blank">Đăng ký tư vấn →</a>' +
      '<a href="beach.html">Chương trình BEACH</a></div>' +
      '</div><div class="container copyright">© ' + new Date().getFullYear() + ' ' + S.name + '</div></footer>';
  }

  /* ---------- Links to the registration pages (any element with data-form) ---------- */
  document.querySelectorAll('[data-form]').forEach(function (a) {
    a.href = a.getAttribute('data-form') === 'test' ? S.formTest : S.formTuVan;
    a.target = '_blank';
  });

  /* ---------- Stats ---------- */
  document.querySelectorAll('[data-stats]').forEach(function (el) {
    el.innerHTML = window.STATS.map(function (s) {
      return '<div class="stat"><span class="stat-value">' + s.value + '</span><span class="stat-label">' + s.label + '</span></div>';
    }).join('');
  });

  /* ---------- Contact info blocks ---------- */
  document.querySelectorAll('[data-contact]').forEach(function (el) {
    var k = el.getAttribute('data-contact');
    if (k === 'hotline') el.innerHTML = S.hotlines.map(function (n) { return '<a href="' + tel(n) + '">' + n + '</a>'; }).join(' &nbsp;-&nbsp; ');
    if (k === 'address') el.innerHTML = '<a href="' + S.mapUrl + '" target="_blank" rel="noopener">' + S.address + '</a>';
    if (k === 'email') el.innerHTML = '<a href="mailto:' + S.email + '">' + S.email + '</a>';
    if (k === 'socials') el.innerHTML = socialRow('socials big');
  });

  /* ---------- Embedded Tally forms ---------- */
  var forms = document.querySelectorAll('[data-tally]');
  if (forms.length) {
    forms.forEach(function (box) {
      var id = box.getAttribute('data-tally') === 'test' ? S.tallyTest : S.tallyTuVan;
      box.innerHTML = '<iframe data-tally-src="https://tally.so/r/' + id + '?transparentBackground=1" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="' + esc(box.getAttribute('data-title') || 'Form đăng ký') + '"></iframe>';
    });
    var load = function () {
      if (typeof Tally !== 'undefined') Tally.loadEmbeds();
      else document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach(function (e) { e.src = e.dataset.tallySrc; });
    };
    var sc = document.createElement('script');
    sc.src = 'https://tally.so/widgets/embed.js'; sc.onload = load; sc.onerror = load;
    document.body.appendChild(sc);
  }

  /* ---------- BEACH blocks ---------- */
  var app = document.getElementById('beach-app');
  if (app) {
    var C = window.COURSES;
    var start = Math.max(0, C.findIndex(function (c) { return '#' + c.letter.toLowerCase() === location.hash; }));
    var cards = C.map(function (c, i) {
      return '<button type="button" role="tab" class="beach-card b-' + c.letter + '" id="tab-' + c.letter + '" aria-controls="beach-panel" data-i="' + i + '">' +
        '<span class="bc-letter">' + c.letter + '</span><span class="bc-name">' + c.name + '</span><span class="bc-short">' + esc(c.short) + '</span>' +
        '<span class="bc-more">Xem chi tiết <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></button>';
    }).join('');
    app.innerHTML = '<div class="beach-cards" role="tablist" aria-label="Các chương trình BEACH">' + cards + '</div><div class="beach-panel" id="beach-panel" role="tabpanel"></div>';
    var panel = document.getElementById('beach-panel');
    function show(i) {
      var c = C[i];
      app.querySelectorAll('.beach-card').forEach(function (b, j) { b.setAttribute('aria-selected', j === i ? 'true' : 'false'); b.tabIndex = j === i ? 0 : -1; });
      panel.className = 'beach-panel p-' + c.letter;
      panel.setAttribute('aria-labelledby', 'tab-' + c.letter);
      var li = function (arr) { return arr.map(function (x) { return '<li>' + CHECK + '<span>' + esc(x) + '</span></li>'; }).join(''); };
      panel.innerHTML =
        '<div class="panel-head"><span class="letter big b-' + c.letter + '">' + c.letter + '</span><div><h2>' + c.name + '</h2><p class="panel-desc">' + esc(c.desc) + '</p></div></div>' +
        '<p class="muted"><strong class="ink">Dành cho:</strong> ' + esc(c.forWho) + '</p>' +
        '<div class="panel-cols"><div class="panel-box"><h3>Bạn sẽ học gì</h3><ul class="checks">' + li(c.learn) + '</ul></div>' +
        '<div class="panel-box"><h3>Học như thế nào</h3><ul class="checks">' + li(c.how) + '</ul></div></div>' +
        '<div class="panel-foot"><div class="chips"><span>Lộ trình cá nhân hóa</span><span>Không đóng phí dài hạn</span></div>' +
        '<a class="btn btn-dark" href="' + S.formTuVan + '" target="_blank">Tư vấn khóa ' + c.name + '</a></div>';
    }
    app.addEventListener('click', function (e) {
      var b = e.target.closest('.beach-card'); if (!b) return;
      var i = +b.getAttribute('data-i'); show(i);
      history.replaceState(null, '', '#' + C[i].letter.toLowerCase());
      if (window.innerWidth < 900) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    app.addEventListener('keydown', function (e) {
      var b = e.target.closest('.beach-card'); if (!b) return;
      var i = +b.getAttribute('data-i'), n = null;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') n = (i + 1) % C.length;
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') n = (i + C.length - 1) % C.length;
      if (n !== null) { e.preventDefault(); show(n); app.querySelectorAll('.beach-card')[n].focus(); }
    });
    show(start);
  }

  /* ---------- Students (sorted by IELTS, high to low) ---------- */
  var st = document.getElementById('students');
  if (st) {
    var list = window.STUDENTS.slice().sort(function (a, b) { return parseFloat(b.ielts) - parseFloat(a.ielts); });
    st.innerHTML = list.map(function (s) {
      var w = s.name.trim().split(/\s+/), ini = (w.length > 1 ? w[w.length - 2][0] : '') + w[w.length - 1][0];
      var lv = parseFloat(s.ielts) >= 8 ? 's80' : (parseFloat(s.ielts) >= 7.5 ? 's75' : 's70');
      return '<li class="student ' + lv + '"><div class="student-top"><span class="avatar" aria-hidden="true">' + esc(ini.toUpperCase()) + '</span>' +
        '<span class="score"><small>IELTS</small>' + esc(s.ielts) + '</span></div>' +
        '<h3>' + esc(s.name) + '</h3><p>' + esc(s.job) + '</p></li>';
    }).join('');
  }
})();
