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
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function tel(n) { return 'tel:' + n.replace(/\s/g, ''); }

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
      '<a class="btn btn-mint nav-cta" href="' + S.formTest + '" target="_blank" rel="noopener">Kiểm tra trình độ miễn phí</a></nav>' +
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
      '<div><img class="footer-logo" src="assets/img/logo.png" alt="' + S.name + '"><p class="muted">' + S.slogan + '. Chương trình học BEACH: Beginning · Enhancing · Advancing · Challenging · Healing.</p></div>' +
      '<address><strong>Thông tin trung tâm</strong>' +
      '<span><b>Hotline:</b> ' + S.hotlines.map(function (n) { return '<a href="' + tel(n) + '">' + n + '</a>'; }).join(' - ') + '</span>' +
      '<span><b>Địa chỉ:</b> <a href="' + S.mapUrl + '" target="_blank" rel="noopener">' + S.address + '</a></span>' +
      '<span><b>Email:</b> <a href="mailto:' + S.email + '">' + S.email + '</a></span></address>' +
      '<div class="footer-links"><strong>Bắt đầu ngay</strong>' +
      '<a href="' + S.formTest + '" target="_blank" rel="noopener">Kiểm tra trình độ miễn phí →</a>' +
      '<a href="' + S.formTuVan + '" target="_blank" rel="noopener">Đăng ký tư vấn →</a>' +
      '<a href="' + S.facebook + '" target="_blank" rel="noopener">Facebook</a></div>' +
      '</div><div class="container copyright">© ' + new Date().getFullYear() + ' ' + S.name + '</div></footer>';
  }

  /* ---------- Links to forms (any element with data-form) ---------- */
  document.querySelectorAll('[data-form]').forEach(function (a) {
    a.href = a.getAttribute('data-form') === 'test' ? S.formTest : S.formTuVan;
    a.target = '_blank'; a.rel = 'noopener';
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
    if (k === 'facebook') el.innerHTML = '<a href="' + S.facebook + '" target="_blank" rel="noopener">' + S.name + '</a>';
  });

  /* ---------- BEACH tabs ---------- */
  var app = document.getElementById('beach-app');
  if (app) {
    var C = window.COURSES;
    var start = Math.max(0, C.findIndex(function (c) { return '#' + c.letter.toLowerCase() === location.hash; }));
    var tabs = C.map(function (c, i) {
      return '<button type="button" role="tab" class="beach-tab b-' + c.letter + '" id="tab-' + c.letter + '" aria-controls="beach-panel" data-i="' + i + '">' +
        '<span class="letter">' + c.letter + '</span><span class="tab-text"><span class="tab-name">' + c.name + '</span><span class="tab-desc">' + esc(c.desc) + '</span></span></button>';
    }).join('');
    app.innerHTML = '<div class="beach-tabs" role="tablist" aria-label="Các chương trình BEACH">' + tabs + '</div><div class="beach-panel" id="beach-panel" role="tabpanel"></div>';
    var panel = document.getElementById('beach-panel');
    function show(i) {
      var c = C[i];
      app.querySelectorAll('.beach-tab').forEach(function (b, j) { b.setAttribute('aria-selected', j === i ? 'true' : 'false'); b.tabIndex = j === i ? 0 : -1; });
      panel.setAttribute('aria-labelledby', 'tab-' + c.letter);
      var li = function (arr) { return arr.map(function (x) { return '<li>' + CHECK + '<span>' + esc(x) + '</span></li>'; }).join(''); };
      panel.innerHTML =
        '<div class="panel-head"><span class="letter big b-' + c.letter + '">' + c.letter + '</span><div><h2>' + c.name + '</h2><p class="panel-desc">' + esc(c.desc) + '</p></div></div>' +
        '<p class="muted"><strong class="ink">Dành cho:</strong> ' + esc(c.forWho) + '</p>' +
        '<div class="panel-cols"><div class="panel-box"><h3>Bạn sẽ học gì</h3><ul class="checks">' + li(c.learn) + '</ul></div>' +
        '<div class="panel-box"><h3>Học như thế nào</h3><ul class="checks">' + li(c.how) + '</ul></div></div>' +
        '<div class="panel-foot"><div class="chips"><span>Sĩ số dưới 10</span><span>Lộ trình cá nhân hóa</span><span>Không đóng phí dài hạn</span></div>' +
        '<a class="btn btn-dark" href="' + S.formTuVan + '" target="_blank" rel="noopener">Tư vấn khóa ' + c.name + '</a></div>';
    }
    app.addEventListener('click', function (e) {
      var b = e.target.closest('.beach-tab'); if (!b) return;
      var i = +b.getAttribute('data-i'); show(i);
      history.replaceState(null, '', '#' + C[i].letter.toLowerCase());
    });
    app.addEventListener('keydown', function (e) {
      var b = e.target.closest('.beach-tab'); if (!b) return;
      var i = +b.getAttribute('data-i'), n = null;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') n = (i + 1) % C.length;
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') n = (i + C.length - 1) % C.length;
      if (n !== null) { e.preventDefault(); show(n); app.querySelectorAll('.beach-tab')[n].focus(); }
    });
    show(start);
  }

  /* ---------- Students ---------- */
  var st = document.getElementById('students');
  if (st) {
    st.innerHTML = window.STUDENTS.map(function (s) {
      var w = s.name.trim().split(/\s+/), ini = (w.length > 1 ? w[w.length - 2][0] : '') + w[w.length - 1][0];
      return '<li class="student"><div class="student-top"><span class="avatar" aria-hidden="true">' + esc(ini.toUpperCase()) + '</span>' +
        '<span class="score"><small>IELTS</small>' + esc(s.ielts) + '</span></div>' +
        '<h3>' + esc(s.name) + '</h3><p>' + esc(s.job) + '</p></li>';
    }).join('');
  }
})();
