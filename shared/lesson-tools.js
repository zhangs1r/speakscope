/**
 * shared/lesson-tools.js — SpeakScope localStorage 学习工具
 *
 * 功能：
 *   1. 标记已学 ✅
 *   2. 滚动位置保存/恢复
 *   3. 生词收藏 ⭐
 *
 * 所有 localStorage 操作均包裹 try-catch，不会阻塞页面渲染。
 * ============================================================ */

(function () {
  'use strict';

  // ─── 工具函数 ────────────────────────────────────────────────

  /** 安全读取 localStorage，异常时返回默认值 */
  function safeGet(key, fallback) {
    try { const v = localStorage.getItem(key); return v !== null ? v : fallback; }
    catch (_) { return fallback; }
  }

  /** 安全写入 localStorage */
  function safeSet(key, val) {
    try { localStorage.setItem(key, val); } catch (_) {}
  }

  /** 安全解析 JSON */
  function safeParse(str, fallback) {
    try { return JSON.parse(str); } catch (_) { return fallback; }
  }

  /** 获取今天的日期字符串 YYYY-MM-DD（本地时区） */
  function todayStr() {
    var d = new Date();
    return d.getFullYear() + '-' +
      String(d.getMonth() + 1).padStart(2, '0') + '-' +
      String(d.getDate()).padStart(2, '0');
  }

  // ─── Lesson ID 检测 ──────────────────────────────────────────

  /**
   * 从当前页面 URL / title 中提取 lesson ID（如 "0002"）
   * 优先级：URL 中的 4 位数字 → title 中的第 NNNN 课 → null
   */
  function detectLessonId() {
    try {
      // 从 URL 中提取 4 位数字（如 lessons/0002-xxx 中的 0002）
      var m = window.location.pathname.match(/\/(\d{4})[-/]/);
      if (m) return m[1];

      // 从 title 中匹配 "第 0002 课"
      var t = document.title;
      m = t.match(/第\s*(\d{4})\s*课/);
      if (m) return m[1];

      // 从 title 中匹配 "000x" 数字
      m = t.match(/\b(\d{4})\b/);
      if (m) return m[1];
    } catch (_) {}
    return null;
  }

  var lessonId = detectLessonId();
  if (!lessonId) return; // 不是 lesson 页面，静默跳过

  // ─── 1. 标记已学 ─────────────────────────────────────────────

  function getDoneSet() {
    var raw = safeGet('speakscope_done', '[]');
    return new Set(safeParse(raw, []));
  }

  function saveDoneSet(arr) {
    safeSet('speakscope_done', JSON.stringify(arr));
  }

  function isDone() {
    return getDoneSet().has(lessonId);
  }

  function toggleDone() {
    var set = getDoneSet();
    var arr;
    if (set.has(lessonId)) {
      set.delete(lessonId);
      arr = Array.from(set);
      btn.textContent = '✅ 标记为已学';
      btn.classList.remove('done');
    } else {
      set.add(lessonId);
      arr = Array.from(set);
      btn.textContent = '✅ 已学 ✓';
      btn.classList.add('done');
    }
    saveDoneSet(arr);

    // 记录今日学习 tally
    recordTally(lessonId);
  }

  function recordTally(id) {
    try {
      var tally = safeParse(safeGet('speakscope_vtally', '{}'), {});
      tally[id] = todayStr();
      safeSet('speakscope_vtally', JSON.stringify(tally));
    } catch (_) {}
  }

  // ─── 2. 滚动位置保存/恢复 ─────────────────────────────────────

  function saveScroll() {
    try {
      localStorage.setItem('speakscope_scroll_' + lessonId, String(window.scrollY));
    } catch (_) {}
  }

  function restoreScroll() {
    try {
      var saved = localStorage.getItem('speakscope_scroll_' + lessonId);
      if (saved !== null) {
        var pos = parseInt(saved, 10);
        if (!isNaN(pos)) {
          // 等页面渲染完再恢复
          setTimeout(function () { window.scrollTo(0, pos); }, 100);
        }
      }
    } catch (_) {}
  }

  // ─── 3. 生词收藏 ──────────────────────────────────────────────

  function getVocabList() {
    return safeParse(safeGet('speakscope_vocab', '[]'), []);
  }

  function saveVocabList(list) {
    safeSet('speakscope_vocab', JSON.stringify(list));
  }

  function openVocabDialog() {
    // 一个简单的模态对话框
    var overlay = document.createElement('div');
    overlay.className = 'ss-vocab-overlay';
    overlay.innerHTML =
      '<div class="ss-vocab-dialog">' +
      '<h3 style="margin:0 0 12px;font-family:var(--font-serif);">⭐ 收藏表达</h3>' +
      '<label style="display:block;margin-bottom:8px;">' +
      '<span style="font-size:0.85rem;color:var(--ink-60);display:block;margin-bottom:2px;">英语短语 / 句子</span>' +
      '<input id="ss-vocab-phrase" type="text" placeholder="e.g. keep tabs on" style="width:100%;padding:8px 10px;border:1px solid var(--border);border-radius:6px;font-size:0.95rem;box-sizing:border-box;">' +
      '</label>' +
      '<label style="display:block;margin-bottom:8px;">' +
      '<span style="font-size:0.85rem;color:var(--ink-60);display:block;margin-bottom:2px;">中文释义</span>' +
      '<input id="ss-vocab-meaning" type="text" placeholder="e.g. 密切关注" style="width:100%;padding:8px 10px;border:1px solid var(--border);border-radius:6px;font-size:0.95rem;box-sizing:border-box;">' +
      '</label>' +
      '<label style="display:block;margin-bottom:12px;">' +
      '<span style="font-size:0.85rem;color:var(--ink-60);display:block;margin-bottom:2px;">备注（可选）</span>' +
      '<input id="ss-vocab-note" type="text" placeholder="e.g. 开会常用" style="width:100%;padding:8px 10px;border:1px solid var(--border);border-radius:6px;font-size:0.95rem;box-sizing:border-box;">' +
      '</label>' +
      '<div style="display:flex;gap:8px;justify-content:flex-end;">' +
      '<button id="ss-vocab-cancel" style="padding:8px 18px;border:1px solid var(--border);background:var(--paper);border-radius:6px;cursor:pointer;">取消</button>' +
      '<button id="ss-vocab-save" style="padding:8px 18px;background:var(--accent);color:white;border:none;border-radius:6px;cursor:pointer;">💾 保存</button>' +
      '</div>' +
      '</div>';

    // 样式
    var style = document.createElement('style');
    style.textContent = '.ss-vocab-overlay{' +
      'position:fixed;inset:0;background:rgba(0,0,0,0.35);z-index:9999;' +
      'display:flex;align-items:center;justify-content:center;' +
      'font-family:var(--font-sans,\'Inter\',sans-serif);}' +
      '.ss-vocab-dialog{background:var(--paper,\'#F7F4EE\');padding:24px;border-radius:12px;' +
      'max-width:400px;width:90%;box-shadow:0 8px 32px rgba(0,0,0,0.15);}' +
      '.ss-vocab-dialog input:focus{outline:2px solid var(--accent-light,\'#E8C4B0\');outline-offset:-1px;}';
    document.head.appendChild(style);
    document.body.appendChild(overlay);

    // 绑定事件
    document.getElementById('ss-vocab-cancel').onclick = function () {
      document.body.removeChild(overlay);
    };
    document.getElementById('ss-vocab-save').onclick = function () {
      var phrase = document.getElementById('ss-vocab-phrase').value.trim();
      var meaning = document.getElementById('ss-vocab-meaning').value.trim();
      if (!phrase) { alert('请输入英语短语或句子'); return; }
      if (!meaning) { alert('请输入中文释义'); return; }
      saveVocab(phrase, meaning, document.getElementById('ss-vocab-note').value.trim());
      document.body.removeChild(overlay);
    };
    // 回车键自动保存
    document.getElementById('ss-vocab-note').onkeydown = function (e) {
      if (e.key === 'Enter') { document.getElementById('ss-vocab-save').click(); }
    };
    // 自动聚焦
    setTimeout(function () { document.getElementById('ss-vocab-phrase').focus(); }, 50);
  }

  function saveVocab(phrase, meaning, note) {
    var list = getVocabList();
    list.push({
      id: 'v_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
      lessonId: lessonId,
      phrase: phrase,
      meaning: meaning,
      note: note || '',
      timestamp: new Date().toISOString()
    });
    saveVocabList(list);
    // 给视觉反馈
    var btn = document.getElementById('ss-vocab-btn');
    if (btn) {
      var orig = btn.textContent;
      btn.textContent = '✅ 已收藏！';
      setTimeout(function () { btn.textContent = orig; }, 1500);
    }
  }

  // ─── 4. 构建 UI ──────────────────────────────────────────────

  var btn, doneBtn;

  function buildUI() {
    // 查找 footer-nav
    var footer = document.querySelector('.footer-nav');
    if (!footer) return;

    // 创建一个工具条容器放在 footer-nav 上方
    var toolbar = document.createElement('div');
    toolbar.className = 'ss-lesson-tools';
    toolbar.style.cssText =
      'display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px;padding:12px 16px;' +
      'background:var(--paper,\'#F7F4EE\');border:1px solid var(--border-light,\'#F0ECE4\');' +
      'border-radius:8px;align-items:center;';

    // ── 标记已学按钮 ──
    doneBtn = document.createElement('button');
    doneBtn.id = 'ss-done-btn';
    doneBtn.style.cssText =
      'padding:8px 16px;border:1px solid var(--border);border-radius:6px;' +
      'cursor:pointer;font-size:0.9rem;background:var(--paper);' +
      'transition:all 0.15s;';
    doneBtn.onmouseover = function () { this.style.borderColor = 'var(--accent-light)'; };
    doneBtn.onmouseout = function () { this.style.borderColor = 'var(--border)'; };
    doneBtn.onclick = toggleDone;

    if (isDone()) {
      doneBtn.textContent = '✅ 已学 ✓';
      doneBtn.classList.add('done');
      doneBtn.style.background = 'var(--accent-dim)';
      doneBtn.style.borderColor = 'var(--accent)';
    } else {
      doneBtn.textContent = '✅ 标记为已学';
    }

    toolbar.appendChild(doneBtn);

    // ── 生词收藏按钮 ──
    var vocabBtn = document.createElement('button');
    vocabBtn.id = 'ss-vocab-btn';
    vocabBtn.textContent = '⭐ 收藏这个表达';
    vocabBtn.style.cssText =
      'padding:8px 16px;border:1px solid var(--border);border-radius:6px;' +
      'cursor:pointer;font-size:0.9rem;background:var(--paper);' +
      'transition:all 0.15s;';
    vocabBtn.onmouseover = function () { this.style.borderColor = 'var(--accent-light)'; };
    vocabBtn.onmouseout = function () { this.style.borderColor = 'var(--border)'; };
    vocabBtn.onclick = openVocabDialog;
    toolbar.appendChild(vocabBtn);

    // 插入到 footer-nav 前面
    footer.parentNode.insertBefore(toolbar, footer);
  }

  // ─── 5. 初始化 ────────────────────────────────────────────────

  function init() {
    buildUI();
    restoreScroll();

    // 每隔 3 秒保存滚动位置
    setInterval(saveScroll, 3000);

    // 页面离开前存一次
    window.addEventListener('beforeunload', saveScroll);
  }

  // 等 DOM 加载完再执行，不阻塞渲染
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
